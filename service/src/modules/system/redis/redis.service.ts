import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@mvmdev/nestjs-redis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}
  /**
   * Set a key-value pair in Redis with an optional time-to-live (TTL).
   * @param key key The key to set in Redis.
   * @param val val The value to set for the given key.
   * @param ttl ttl Optional. The time-to-live (TTL) for the key in milliseconds.
   * @returns A Promise that resolves when the operation is complete.
   */
  async set(key: string, val: any, ttl?: number) {
    const data = JSON.stringify(val);
    if (!ttl) return await this.redis.set(key, data);
    return await this.redis.set(key, data, 'PX', ttl *1000);
  }
  /**
   * Get the value corresponding to the key.
   * @param key The key to retrieve from Redis.
   * @returns A Promise that resolves with the value or null if the key does not exist.
   */
  async get(key: string): Promise<any> {
    if (!key || key === '*') return null;
    const res = await this.redis.get(key);
    return JSON.parse(res);
  }
  /**
   * Get multiple values by keys.
   * @param keys The keys to retrieve from Redis.
   * @returns A Promise that resolves with an array of values.
   */
  async mget(keys: string[]): Promise<any[]> {
    if (!keys) return null;
    const res = await this.redis.mget(keys);
    return res.map((item) => (item ? JSON.parse(item) : null));
  }

  /**
   * Get multiple values by keys and return as a key-value object.
   * @param keys The keys to retrieve from Redis.
   * @returns A Promise that resolves with an object containing key-value pairs.
   */
  async getMultiple(keys: string[]): Promise<Record<string, any>> {
    const values = await this.mget(keys);
    return keys.reduce(
      (result, key, index) => {
        result[key] = values[index];
        return result;
      },
      {} as Record<string, any>,
    );
  }

  /**
   * Delete the value corresponding to the key.
   * @param key The key to delete from Redis.
   * @returns A Promise that resolves when the operation is complete.
   */
  async del(key: string): Promise<void> {
    if (!key || key === '*') return;
    await this.redis.del(key);
  }

  /**
   * Increment the value of a key by one.
   * @param key The key whose value should be incremented.
   * @returns A Promise that resolves with the new value after increment.
   */
  async increment(key: string): Promise<number> {
    return await this.redis.incr(key);
  }

  /**
   * Increment the value of a key by a given number.
   * @param key The key whose value should be incremented.
   * @param increment The amount by which to increment the value.
   * @returns A Promise that resolves with the new value after increment.
   */
  async incrementBy(key: string, increment: number): Promise<number> {
    return await this.redis.incrby(key, increment);
  }

  async getKeys(pattern: string): Promise<string[]> {
    const keys: string[] = [];
    let cursor = '0';

    do {
      const result = await this.redis.scan(
        cursor,
        'MATCH',
        pattern,
        'COUNT',
        '100',
      );
      cursor = result[0];
      keys.push(...result[1]);
    } while (cursor !== '0');

    return keys;
  }
}
