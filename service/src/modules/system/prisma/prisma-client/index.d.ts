
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model AppModel
 * 
 */
export type AppModel = $Result.DefaultSelection<Prisma.$AppModelPayload>
/**
 * Model AppUserModel
 * 
 */
export type AppUserModel = $Result.DefaultSelection<Prisma.$AppUserModelPayload>
/**
 * Model ChatRecord
 * 
 */
export type ChatRecord = $Result.DefaultSelection<Prisma.$ChatRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appModel`: Exposes CRUD operations for the **AppModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppModels
    * const appModels = await prisma.appModel.findMany()
    * ```
    */
  get appModel(): Prisma.AppModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appUserModel`: Exposes CRUD operations for the **AppUserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUserModels
    * const appUserModels = await prisma.appUserModel.findMany()
    * ```
    */
  get appUserModel(): Prisma.AppUserModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRecord`: Exposes CRUD operations for the **ChatRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRecords
    * const chatRecords = await prisma.chatRecord.findMany()
    * ```
    */
  get chatRecord(): Prisma.ChatRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppUser: 'AppUser',
    AppModel: 'AppModel',
    AppUserModel: 'AppUserModel',
    ChatRecord: 'ChatRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "appUser" | "appModel" | "appUserModel" | "chatRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      AppModel: {
        payload: Prisma.$AppModelPayload<ExtArgs>
        fields: Prisma.AppModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          findFirst: {
            args: Prisma.AppModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          findMany: {
            args: Prisma.AppModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>[]
          }
          create: {
            args: Prisma.AppModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          createMany: {
            args: Prisma.AppModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          update: {
            args: Prisma.AppModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          deleteMany: {
            args: Prisma.AppModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppModelPayload>
          }
          aggregate: {
            args: Prisma.AppModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppModel>
          }
          groupBy: {
            args: Prisma.AppModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppModelCountArgs<ExtArgs>
            result: $Utils.Optional<AppModelCountAggregateOutputType> | number
          }
        }
      }
      AppUserModel: {
        payload: Prisma.$AppUserModelPayload<ExtArgs>
        fields: Prisma.AppUserModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          findFirst: {
            args: Prisma.AppUserModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          findMany: {
            args: Prisma.AppUserModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>[]
          }
          create: {
            args: Prisma.AppUserModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          createMany: {
            args: Prisma.AppUserModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppUserModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          update: {
            args: Prisma.AppUserModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          deleteMany: {
            args: Prisma.AppUserModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserModelPayload>
          }
          aggregate: {
            args: Prisma.AppUserModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUserModel>
          }
          groupBy: {
            args: Prisma.AppUserModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserModelCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserModelCountAggregateOutputType> | number
          }
        }
      }
      ChatRecord: {
        payload: Prisma.$ChatRecordPayload<ExtArgs>
        fields: Prisma.ChatRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          findFirst: {
            args: Prisma.ChatRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          findMany: {
            args: Prisma.ChatRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>[]
          }
          create: {
            args: Prisma.ChatRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          createMany: {
            args: Prisma.ChatRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          update: {
            args: Prisma.ChatRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          deleteMany: {
            args: Prisma.ChatRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRecordPayload>
          }
          aggregate: {
            args: Prisma.ChatRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRecord>
          }
          groupBy: {
            args: Prisma.ChatRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appUser?: AppUserOmit
    appModel?: AppModelOmit
    appUserModel?: AppUserModelOmit
    chatRecord?: ChatRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    models: number
    createdModels: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | AppUserCountOutputTypeCountModelsArgs
    createdModels?: boolean | AppUserCountOutputTypeCountCreatedModelsArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserModelWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountCreatedModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppModelWhereInput
  }


  /**
   * Count Type AppModelCountOutputType
   */

  export type AppModelCountOutputType = {
    users: number
  }

  export type AppModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AppModelCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AppModelCountOutputType without action
   */
  export type AppModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModelCountOutputType
     */
    select?: AppModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppModelCountOutputType without action
   */
  export type AppModelCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserModelWhereInput
  }


  /**
   * Count Type AppUserModelCountOutputType
   */

  export type AppUserModelCountOutputType = {
    chatRecords: number
  }

  export type AppUserModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRecords?: boolean | AppUserModelCountOutputTypeCountChatRecordsArgs
  }

  // Custom InputTypes
  /**
   * AppUserModelCountOutputType without action
   */
  export type AppUserModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModelCountOutputType
     */
    select?: AppUserModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserModelCountOutputType without action
   */
  export type AppUserModelCountOutputTypeCountChatRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserAvgAggregateOutputType = {
    userId: number | null
  }

  export type AppUserSumAggregateOutputType = {
    userId: number | null
  }

  export type AppUserMinAggregateOutputType = {
    userId: number | null
    userAvatar: string | null
    userGender: string | null
    phone: string | null
    status: string | null
    nickName: string | null
    code: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delStatus: string | null
  }

  export type AppUserMaxAggregateOutputType = {
    userId: number | null
    userAvatar: string | null
    userGender: string | null
    phone: string | null
    status: string | null
    nickName: string | null
    code: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delStatus: string | null
  }

  export type AppUserCountAggregateOutputType = {
    userId: number
    userAvatar: number
    userGender: number
    phone: number
    status: number
    nickName: number
    code: number
    password: number
    createdAt: number
    updatedAt: number
    delStatus: number
    _all: number
  }


  export type AppUserAvgAggregateInputType = {
    userId?: true
  }

  export type AppUserSumAggregateInputType = {
    userId?: true
  }

  export type AppUserMinAggregateInputType = {
    userId?: true
    userAvatar?: true
    userGender?: true
    phone?: true
    status?: true
    nickName?: true
    code?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
  }

  export type AppUserMaxAggregateInputType = {
    userId?: true
    userAvatar?: true
    userGender?: true
    phone?: true
    status?: true
    nickName?: true
    code?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
  }

  export type AppUserCountAggregateInputType = {
    userId?: true
    userAvatar?: true
    userGender?: true
    phone?: true
    status?: true
    nickName?: true
    code?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _avg?: AppUserAvgAggregateInputType
    _sum?: AppUserSumAggregateInputType
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    userId: number
    userAvatar: string | null
    userGender: string | null
    phone: string | null
    status: string | null
    nickName: string | null
    code: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    delStatus: string | null
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userAvatar?: boolean
    userGender?: boolean
    phone?: boolean
    status?: boolean
    nickName?: boolean
    code?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delStatus?: boolean
    models?: boolean | AppUser$modelsArgs<ExtArgs>
    createdModels?: boolean | AppUser$createdModelsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>


  export type AppUserSelectScalar = {
    userId?: boolean
    userAvatar?: boolean
    userGender?: boolean
    phone?: boolean
    status?: boolean
    nickName?: boolean
    code?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delStatus?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userAvatar" | "userGender" | "phone" | "status" | "nickName" | "code" | "password" | "createdAt" | "updatedAt" | "delStatus", ExtArgs["result"]["appUser"]>
  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | AppUser$modelsArgs<ExtArgs>
    createdModels?: boolean | AppUser$createdModelsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      models: Prisma.$AppUserModelPayload<ExtArgs>[]
      createdModels: Prisma.$AppModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userAvatar: string | null
      userGender: string | null
      phone: string | null
      status: string | null
      nickName: string | null
      code: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      delStatus: string | null
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const appUserWithUserIdOnly = await prisma.appUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends AppUser$modelsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdModels<T extends AppUser$createdModelsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$createdModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppUser model
   */ 
  interface AppUserFieldRefs {
    readonly userId: FieldRef<"AppUser", 'Int'>
    readonly userAvatar: FieldRef<"AppUser", 'String'>
    readonly userGender: FieldRef<"AppUser", 'String'>
    readonly phone: FieldRef<"AppUser", 'String'>
    readonly status: FieldRef<"AppUser", 'String'>
    readonly nickName: FieldRef<"AppUser", 'String'>
    readonly code: FieldRef<"AppUser", 'String'>
    readonly password: FieldRef<"AppUser", 'String'>
    readonly createdAt: FieldRef<"AppUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AppUser", 'DateTime'>
    readonly delStatus: FieldRef<"AppUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser.models
   */
  export type AppUser$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    where?: AppUserModelWhereInput
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    cursor?: AppUserModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppUserModelScalarFieldEnum | AppUserModelScalarFieldEnum[]
  }

  /**
   * AppUser.createdModels
   */
  export type AppUser$createdModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    where?: AppModelWhereInput
    orderBy?: AppModelOrderByWithRelationInput | AppModelOrderByWithRelationInput[]
    cursor?: AppModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppModelScalarFieldEnum | AppModelScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model AppModel
   */

  export type AggregateAppModel = {
    _count: AppModelCountAggregateOutputType | null
    _avg: AppModelAvgAggregateOutputType | null
    _sum: AppModelSumAggregateOutputType | null
    _min: AppModelMinAggregateOutputType | null
    _max: AppModelMaxAggregateOutputType | null
  }

  export type AppModelAvgAggregateOutputType = {
    modelId: number | null
    modelQaCount: number | null
    sound: number | null
    language: number | null
    isPublic: number | null
    creatorId: number | null
  }

  export type AppModelSumAggregateOutputType = {
    modelId: number | null
    modelQaCount: number | null
    sound: number | null
    language: number | null
    isPublic: number | null
    creatorId: number | null
  }

  export type AppModelMinAggregateOutputType = {
    modelId: number | null
    modelImage: string | null
    modelName: string | null
    modelDescription: string | null
    introduce: string | null
    modelQaCount: number | null
    sound: number | null
    language: number | null
    prologue: string | null
    isPublic: number | null
    type: string | null
    tags: string | null
    enableBackground: boolean | null
    backgroundImage: string | null
    isAiImage: boolean | null
    creatorId: number | null
    creatorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delStatus: string | null
  }

  export type AppModelMaxAggregateOutputType = {
    modelId: number | null
    modelImage: string | null
    modelName: string | null
    modelDescription: string | null
    introduce: string | null
    modelQaCount: number | null
    sound: number | null
    language: number | null
    prologue: string | null
    isPublic: number | null
    type: string | null
    tags: string | null
    enableBackground: boolean | null
    backgroundImage: string | null
    isAiImage: boolean | null
    creatorId: number | null
    creatorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delStatus: string | null
  }

  export type AppModelCountAggregateOutputType = {
    modelId: number
    modelImage: number
    modelName: number
    modelDescription: number
    introduce: number
    modelQaCount: number
    sound: number
    language: number
    prologue: number
    isPublic: number
    type: number
    tags: number
    enableBackground: number
    backgroundImage: number
    isAiImage: number
    creatorId: number
    creatorName: number
    createdAt: number
    updatedAt: number
    delStatus: number
    _all: number
  }


  export type AppModelAvgAggregateInputType = {
    modelId?: true
    modelQaCount?: true
    sound?: true
    language?: true
    isPublic?: true
    creatorId?: true
  }

  export type AppModelSumAggregateInputType = {
    modelId?: true
    modelQaCount?: true
    sound?: true
    language?: true
    isPublic?: true
    creatorId?: true
  }

  export type AppModelMinAggregateInputType = {
    modelId?: true
    modelImage?: true
    modelName?: true
    modelDescription?: true
    introduce?: true
    modelQaCount?: true
    sound?: true
    language?: true
    prologue?: true
    isPublic?: true
    type?: true
    tags?: true
    enableBackground?: true
    backgroundImage?: true
    isAiImage?: true
    creatorId?: true
    creatorName?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
  }

  export type AppModelMaxAggregateInputType = {
    modelId?: true
    modelImage?: true
    modelName?: true
    modelDescription?: true
    introduce?: true
    modelQaCount?: true
    sound?: true
    language?: true
    prologue?: true
    isPublic?: true
    type?: true
    tags?: true
    enableBackground?: true
    backgroundImage?: true
    isAiImage?: true
    creatorId?: true
    creatorName?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
  }

  export type AppModelCountAggregateInputType = {
    modelId?: true
    modelImage?: true
    modelName?: true
    modelDescription?: true
    introduce?: true
    modelQaCount?: true
    sound?: true
    language?: true
    prologue?: true
    isPublic?: true
    type?: true
    tags?: true
    enableBackground?: true
    backgroundImage?: true
    isAiImage?: true
    creatorId?: true
    creatorName?: true
    createdAt?: true
    updatedAt?: true
    delStatus?: true
    _all?: true
  }

  export type AppModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppModel to aggregate.
     */
    where?: AppModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppModels to fetch.
     */
    orderBy?: AppModelOrderByWithRelationInput | AppModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppModels
    **/
    _count?: true | AppModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppModelMaxAggregateInputType
  }

  export type GetAppModelAggregateType<T extends AppModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAppModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppModel[P]>
      : GetScalarType<T[P], AggregateAppModel[P]>
  }




  export type AppModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppModelWhereInput
    orderBy?: AppModelOrderByWithAggregationInput | AppModelOrderByWithAggregationInput[]
    by: AppModelScalarFieldEnum[] | AppModelScalarFieldEnum
    having?: AppModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppModelCountAggregateInputType | true
    _avg?: AppModelAvgAggregateInputType
    _sum?: AppModelSumAggregateInputType
    _min?: AppModelMinAggregateInputType
    _max?: AppModelMaxAggregateInputType
  }

  export type AppModelGroupByOutputType = {
    modelId: number
    modelImage: string | null
    modelName: string | null
    modelDescription: string | null
    introduce: string | null
    modelQaCount: number | null
    sound: number | null
    language: number | null
    prologue: string | null
    isPublic: number | null
    type: string | null
    tags: string | null
    enableBackground: boolean
    backgroundImage: string | null
    isAiImage: boolean
    creatorId: number
    creatorName: string | null
    createdAt: Date
    updatedAt: Date
    delStatus: string | null
    _count: AppModelCountAggregateOutputType | null
    _avg: AppModelAvgAggregateOutputType | null
    _sum: AppModelSumAggregateOutputType | null
    _min: AppModelMinAggregateOutputType | null
    _max: AppModelMaxAggregateOutputType | null
  }

  type GetAppModelGroupByPayload<T extends AppModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppModelGroupByOutputType[P]>
            : GetScalarType<T[P], AppModelGroupByOutputType[P]>
        }
      >
    >


  export type AppModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modelId?: boolean
    modelImage?: boolean
    modelName?: boolean
    modelDescription?: boolean
    introduce?: boolean
    modelQaCount?: boolean
    sound?: boolean
    language?: boolean
    prologue?: boolean
    isPublic?: boolean
    type?: boolean
    tags?: boolean
    enableBackground?: boolean
    backgroundImage?: boolean
    isAiImage?: boolean
    creatorId?: boolean
    creatorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delStatus?: boolean
    creator?: boolean | AppUserDefaultArgs<ExtArgs>
    users?: boolean | AppModel$usersArgs<ExtArgs>
    _count?: boolean | AppModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appModel"]>


  export type AppModelSelectScalar = {
    modelId?: boolean
    modelImage?: boolean
    modelName?: boolean
    modelDescription?: boolean
    introduce?: boolean
    modelQaCount?: boolean
    sound?: boolean
    language?: boolean
    prologue?: boolean
    isPublic?: boolean
    type?: boolean
    tags?: boolean
    enableBackground?: boolean
    backgroundImage?: boolean
    isAiImage?: boolean
    creatorId?: boolean
    creatorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delStatus?: boolean
  }

  export type AppModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"modelId" | "modelImage" | "modelName" | "modelDescription" | "introduce" | "modelQaCount" | "sound" | "language" | "prologue" | "isPublic" | "type" | "tags" | "enableBackground" | "backgroundImage" | "isAiImage" | "creatorId" | "creatorName" | "createdAt" | "updatedAt" | "delStatus", ExtArgs["result"]["appModel"]>
  export type AppModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | AppUserDefaultArgs<ExtArgs>
    users?: boolean | AppModel$usersArgs<ExtArgs>
    _count?: boolean | AppModelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppModel"
    objects: {
      creator: Prisma.$AppUserPayload<ExtArgs>
      users: Prisma.$AppUserModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      modelId: number
      modelImage: string | null
      modelName: string | null
      modelDescription: string | null
      introduce: string | null
      modelQaCount: number | null
      sound: number | null
      language: number | null
      prologue: string | null
      isPublic: number | null
      type: string | null
      tags: string | null
      enableBackground: boolean
      backgroundImage: string | null
      isAiImage: boolean
      creatorId: number
      creatorName: string | null
      createdAt: Date
      updatedAt: Date
      delStatus: string | null
    }, ExtArgs["result"]["appModel"]>
    composites: {}
  }

  type AppModelGetPayload<S extends boolean | null | undefined | AppModelDefaultArgs> = $Result.GetResult<Prisma.$AppModelPayload, S>

  type AppModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AppModelCountAggregateInputType | true
    }

  export interface AppModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppModel'], meta: { name: 'AppModel' } }
    /**
     * Find zero or one AppModel that matches the filter.
     * @param {AppModelFindUniqueArgs} args - Arguments to find a AppModel
     * @example
     * // Get one AppModel
     * const appModel = await prisma.appModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppModelFindUniqueArgs>(args: SelectSubset<T, AppModelFindUniqueArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AppModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppModelFindUniqueOrThrowArgs} args - Arguments to find a AppModel
     * @example
     * // Get one AppModel
     * const appModel = await prisma.appModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AppModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AppModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelFindFirstArgs} args - Arguments to find a AppModel
     * @example
     * // Get one AppModel
     * const appModel = await prisma.appModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppModelFindFirstArgs>(args?: SelectSubset<T, AppModelFindFirstArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AppModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelFindFirstOrThrowArgs} args - Arguments to find a AppModel
     * @example
     * // Get one AppModel
     * const appModel = await prisma.appModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AppModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AppModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppModels
     * const appModels = await prisma.appModel.findMany()
     * 
     * // Get first 10 AppModels
     * const appModels = await prisma.appModel.findMany({ take: 10 })
     * 
     * // Only select the `modelId`
     * const appModelWithModelIdOnly = await prisma.appModel.findMany({ select: { modelId: true } })
     * 
     */
    findMany<T extends AppModelFindManyArgs>(args?: SelectSubset<T, AppModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AppModel.
     * @param {AppModelCreateArgs} args - Arguments to create a AppModel.
     * @example
     * // Create one AppModel
     * const AppModel = await prisma.appModel.create({
     *   data: {
     *     // ... data to create a AppModel
     *   }
     * })
     * 
     */
    create<T extends AppModelCreateArgs>(args: SelectSubset<T, AppModelCreateArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AppModels.
     * @param {AppModelCreateManyArgs} args - Arguments to create many AppModels.
     * @example
     * // Create many AppModels
     * const appModel = await prisma.appModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppModelCreateManyArgs>(args?: SelectSubset<T, AppModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppModel.
     * @param {AppModelDeleteArgs} args - Arguments to delete one AppModel.
     * @example
     * // Delete one AppModel
     * const AppModel = await prisma.appModel.delete({
     *   where: {
     *     // ... filter to delete one AppModel
     *   }
     * })
     * 
     */
    delete<T extends AppModelDeleteArgs>(args: SelectSubset<T, AppModelDeleteArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AppModel.
     * @param {AppModelUpdateArgs} args - Arguments to update one AppModel.
     * @example
     * // Update one AppModel
     * const appModel = await prisma.appModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppModelUpdateArgs>(args: SelectSubset<T, AppModelUpdateArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AppModels.
     * @param {AppModelDeleteManyArgs} args - Arguments to filter AppModels to delete.
     * @example
     * // Delete a few AppModels
     * const { count } = await prisma.appModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppModelDeleteManyArgs>(args?: SelectSubset<T, AppModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppModels
     * const appModel = await prisma.appModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppModelUpdateManyArgs>(args: SelectSubset<T, AppModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppModel.
     * @param {AppModelUpsertArgs} args - Arguments to update or create a AppModel.
     * @example
     * // Update or create a AppModel
     * const appModel = await prisma.appModel.upsert({
     *   create: {
     *     // ... data to create a AppModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppModel we want to update
     *   }
     * })
     */
    upsert<T extends AppModelUpsertArgs>(args: SelectSubset<T, AppModelUpsertArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AppModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelCountArgs} args - Arguments to filter AppModels to count.
     * @example
     * // Count the number of AppModels
     * const count = await prisma.appModel.count({
     *   where: {
     *     // ... the filter for the AppModels we want to count
     *   }
     * })
    **/
    count<T extends AppModelCountArgs>(
      args?: Subset<T, AppModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppModelAggregateArgs>(args: Subset<T, AppModelAggregateArgs>): Prisma.PrismaPromise<GetAppModelAggregateType<T>>

    /**
     * Group by AppModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppModelGroupByArgs['orderBy'] }
        : { orderBy?: AppModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppModel model
   */
  readonly fields: AppModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users<T extends AppModel$usersArgs<ExtArgs> = {}>(args?: Subset<T, AppModel$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppModel model
   */ 
  interface AppModelFieldRefs {
    readonly modelId: FieldRef<"AppModel", 'Int'>
    readonly modelImage: FieldRef<"AppModel", 'String'>
    readonly modelName: FieldRef<"AppModel", 'String'>
    readonly modelDescription: FieldRef<"AppModel", 'String'>
    readonly introduce: FieldRef<"AppModel", 'String'>
    readonly modelQaCount: FieldRef<"AppModel", 'Int'>
    readonly sound: FieldRef<"AppModel", 'Int'>
    readonly language: FieldRef<"AppModel", 'Int'>
    readonly prologue: FieldRef<"AppModel", 'String'>
    readonly isPublic: FieldRef<"AppModel", 'Int'>
    readonly type: FieldRef<"AppModel", 'String'>
    readonly tags: FieldRef<"AppModel", 'String'>
    readonly enableBackground: FieldRef<"AppModel", 'Boolean'>
    readonly backgroundImage: FieldRef<"AppModel", 'String'>
    readonly isAiImage: FieldRef<"AppModel", 'Boolean'>
    readonly creatorId: FieldRef<"AppModel", 'Int'>
    readonly creatorName: FieldRef<"AppModel", 'String'>
    readonly createdAt: FieldRef<"AppModel", 'DateTime'>
    readonly updatedAt: FieldRef<"AppModel", 'DateTime'>
    readonly delStatus: FieldRef<"AppModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppModel findUnique
   */
  export type AppModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter, which AppModel to fetch.
     */
    where: AppModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel findUniqueOrThrow
   */
  export type AppModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter, which AppModel to fetch.
     */
    where: AppModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel findFirst
   */
  export type AppModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter, which AppModel to fetch.
     */
    where?: AppModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppModels to fetch.
     */
    orderBy?: AppModelOrderByWithRelationInput | AppModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppModels.
     */
    cursor?: AppModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppModels.
     */
    distinct?: AppModelScalarFieldEnum | AppModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel findFirstOrThrow
   */
  export type AppModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter, which AppModel to fetch.
     */
    where?: AppModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppModels to fetch.
     */
    orderBy?: AppModelOrderByWithRelationInput | AppModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppModels.
     */
    cursor?: AppModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppModels.
     */
    distinct?: AppModelScalarFieldEnum | AppModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel findMany
   */
  export type AppModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter, which AppModels to fetch.
     */
    where?: AppModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppModels to fetch.
     */
    orderBy?: AppModelOrderByWithRelationInput | AppModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppModels.
     */
    cursor?: AppModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppModels.
     */
    skip?: number
    distinct?: AppModelScalarFieldEnum | AppModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel create
   */
  export type AppModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * The data needed to create a AppModel.
     */
    data: XOR<AppModelCreateInput, AppModelUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel createMany
   */
  export type AppModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppModels.
     */
    data: AppModelCreateManyInput | AppModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppModel update
   */
  export type AppModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * The data needed to update a AppModel.
     */
    data: XOR<AppModelUpdateInput, AppModelUncheckedUpdateInput>
    /**
     * Choose, which AppModel to update.
     */
    where: AppModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel updateMany
   */
  export type AppModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppModels.
     */
    data: XOR<AppModelUpdateManyMutationInput, AppModelUncheckedUpdateManyInput>
    /**
     * Filter which AppModels to update
     */
    where?: AppModelWhereInput
  }

  /**
   * AppModel upsert
   */
  export type AppModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * The filter to search for the AppModel to update in case it exists.
     */
    where: AppModelWhereUniqueInput
    /**
     * In case the AppModel found by the `where` argument doesn't exist, create a new AppModel with this data.
     */
    create: XOR<AppModelCreateInput, AppModelUncheckedCreateInput>
    /**
     * In case the AppModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppModelUpdateInput, AppModelUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel delete
   */
  export type AppModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
    /**
     * Filter which AppModel to delete.
     */
    where: AppModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppModel deleteMany
   */
  export type AppModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppModels to delete
     */
    where?: AppModelWhereInput
  }

  /**
   * AppModel.users
   */
  export type AppModel$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    where?: AppUserModelWhereInput
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    cursor?: AppUserModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppUserModelScalarFieldEnum | AppUserModelScalarFieldEnum[]
  }

  /**
   * AppModel without action
   */
  export type AppModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppModel
     */
    select?: AppModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppModel
     */
    omit?: AppModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppModelInclude<ExtArgs> | null
  }


  /**
   * Model AppUserModel
   */

  export type AggregateAppUserModel = {
    _count: AppUserModelCountAggregateOutputType | null
    _avg: AppUserModelAvgAggregateOutputType | null
    _sum: AppUserModelSumAggregateOutputType | null
    _min: AppUserModelMinAggregateOutputType | null
    _max: AppUserModelMaxAggregateOutputType | null
  }

  export type AppUserModelAvgAggregateOutputType = {
    userId: number | null
    modelId: number | null
  }

  export type AppUserModelSumAggregateOutputType = {
    userId: number | null
    modelId: number | null
  }

  export type AppUserModelMinAggregateOutputType = {
    userId: number | null
    modelId: number | null
    isPinned: boolean | null
    updatedAt: Date | null
  }

  export type AppUserModelMaxAggregateOutputType = {
    userId: number | null
    modelId: number | null
    isPinned: boolean | null
    updatedAt: Date | null
  }

  export type AppUserModelCountAggregateOutputType = {
    userId: number
    modelId: number
    isPinned: number
    updatedAt: number
    _all: number
  }


  export type AppUserModelAvgAggregateInputType = {
    userId?: true
    modelId?: true
  }

  export type AppUserModelSumAggregateInputType = {
    userId?: true
    modelId?: true
  }

  export type AppUserModelMinAggregateInputType = {
    userId?: true
    modelId?: true
    isPinned?: true
    updatedAt?: true
  }

  export type AppUserModelMaxAggregateInputType = {
    userId?: true
    modelId?: true
    isPinned?: true
    updatedAt?: true
  }

  export type AppUserModelCountAggregateInputType = {
    userId?: true
    modelId?: true
    isPinned?: true
    updatedAt?: true
    _all?: true
  }

  export type AppUserModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUserModel to aggregate.
     */
    where?: AppUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUserModels to fetch.
     */
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUserModels
    **/
    _count?: true | AppUserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserModelMaxAggregateInputType
  }

  export type GetAppUserModelAggregateType<T extends AppUserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUserModel[P]>
      : GetScalarType<T[P], AggregateAppUserModel[P]>
  }




  export type AppUserModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserModelWhereInput
    orderBy?: AppUserModelOrderByWithAggregationInput | AppUserModelOrderByWithAggregationInput[]
    by: AppUserModelScalarFieldEnum[] | AppUserModelScalarFieldEnum
    having?: AppUserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserModelCountAggregateInputType | true
    _avg?: AppUserModelAvgAggregateInputType
    _sum?: AppUserModelSumAggregateInputType
    _min?: AppUserModelMinAggregateInputType
    _max?: AppUserModelMaxAggregateInputType
  }

  export type AppUserModelGroupByOutputType = {
    userId: number
    modelId: number
    isPinned: boolean | null
    updatedAt: Date | null
    _count: AppUserModelCountAggregateOutputType | null
    _avg: AppUserModelAvgAggregateOutputType | null
    _sum: AppUserModelSumAggregateOutputType | null
    _min: AppUserModelMinAggregateOutputType | null
    _max: AppUserModelMaxAggregateOutputType | null
  }

  type GetAppUserModelGroupByPayload<T extends AppUserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserModelGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserModelGroupByOutputType[P]>
        }
      >
    >


  export type AppUserModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    modelId?: boolean
    isPinned?: boolean
    updatedAt?: boolean
    appuser?: boolean | AppUserDefaultArgs<ExtArgs>
    model?: boolean | AppModelDefaultArgs<ExtArgs>
    chatRecords?: boolean | AppUserModel$chatRecordsArgs<ExtArgs>
    _count?: boolean | AppUserModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUserModel"]>


  export type AppUserModelSelectScalar = {
    userId?: boolean
    modelId?: boolean
    isPinned?: boolean
    updatedAt?: boolean
  }

  export type AppUserModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "modelId" | "isPinned" | "updatedAt", ExtArgs["result"]["appUserModel"]>
  export type AppUserModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appuser?: boolean | AppUserDefaultArgs<ExtArgs>
    model?: boolean | AppModelDefaultArgs<ExtArgs>
    chatRecords?: boolean | AppUserModel$chatRecordsArgs<ExtArgs>
    _count?: boolean | AppUserModelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppUserModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUserModel"
    objects: {
      appuser: Prisma.$AppUserPayload<ExtArgs>
      model: Prisma.$AppModelPayload<ExtArgs>
      chatRecords: Prisma.$ChatRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      modelId: number
      isPinned: boolean | null
      updatedAt: Date | null
    }, ExtArgs["result"]["appUserModel"]>
    composites: {}
  }

  type AppUserModelGetPayload<S extends boolean | null | undefined | AppUserModelDefaultArgs> = $Result.GetResult<Prisma.$AppUserModelPayload, S>

  type AppUserModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppUserModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AppUserModelCountAggregateInputType | true
    }

  export interface AppUserModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUserModel'], meta: { name: 'AppUserModel' } }
    /**
     * Find zero or one AppUserModel that matches the filter.
     * @param {AppUserModelFindUniqueArgs} args - Arguments to find a AppUserModel
     * @example
     * // Get one AppUserModel
     * const appUserModel = await prisma.appUserModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserModelFindUniqueArgs>(args: SelectSubset<T, AppUserModelFindUniqueArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AppUserModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppUserModelFindUniqueOrThrowArgs} args - Arguments to find a AppUserModel
     * @example
     * // Get one AppUserModel
     * const appUserModel = await prisma.appUserModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AppUserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelFindFirstArgs} args - Arguments to find a AppUserModel
     * @example
     * // Get one AppUserModel
     * const appUserModel = await prisma.appUserModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserModelFindFirstArgs>(args?: SelectSubset<T, AppUserModelFindFirstArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AppUserModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelFindFirstOrThrowArgs} args - Arguments to find a AppUserModel
     * @example
     * // Get one AppUserModel
     * const appUserModel = await prisma.appUserModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AppUserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUserModels
     * const appUserModels = await prisma.appUserModel.findMany()
     * 
     * // Get first 10 AppUserModels
     * const appUserModels = await prisma.appUserModel.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const appUserModelWithUserIdOnly = await prisma.appUserModel.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AppUserModelFindManyArgs>(args?: SelectSubset<T, AppUserModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AppUserModel.
     * @param {AppUserModelCreateArgs} args - Arguments to create a AppUserModel.
     * @example
     * // Create one AppUserModel
     * const AppUserModel = await prisma.appUserModel.create({
     *   data: {
     *     // ... data to create a AppUserModel
     *   }
     * })
     * 
     */
    create<T extends AppUserModelCreateArgs>(args: SelectSubset<T, AppUserModelCreateArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AppUserModels.
     * @param {AppUserModelCreateManyArgs} args - Arguments to create many AppUserModels.
     * @example
     * // Create many AppUserModels
     * const appUserModel = await prisma.appUserModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserModelCreateManyArgs>(args?: SelectSubset<T, AppUserModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppUserModel.
     * @param {AppUserModelDeleteArgs} args - Arguments to delete one AppUserModel.
     * @example
     * // Delete one AppUserModel
     * const AppUserModel = await prisma.appUserModel.delete({
     *   where: {
     *     // ... filter to delete one AppUserModel
     *   }
     * })
     * 
     */
    delete<T extends AppUserModelDeleteArgs>(args: SelectSubset<T, AppUserModelDeleteArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AppUserModel.
     * @param {AppUserModelUpdateArgs} args - Arguments to update one AppUserModel.
     * @example
     * // Update one AppUserModel
     * const appUserModel = await prisma.appUserModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserModelUpdateArgs>(args: SelectSubset<T, AppUserModelUpdateArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AppUserModels.
     * @param {AppUserModelDeleteManyArgs} args - Arguments to filter AppUserModels to delete.
     * @example
     * // Delete a few AppUserModels
     * const { count } = await prisma.appUserModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserModelDeleteManyArgs>(args?: SelectSubset<T, AppUserModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUserModels
     * const appUserModel = await prisma.appUserModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserModelUpdateManyArgs>(args: SelectSubset<T, AppUserModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUserModel.
     * @param {AppUserModelUpsertArgs} args - Arguments to update or create a AppUserModel.
     * @example
     * // Update or create a AppUserModel
     * const appUserModel = await prisma.appUserModel.upsert({
     *   create: {
     *     // ... data to create a AppUserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUserModel we want to update
     *   }
     * })
     */
    upsert<T extends AppUserModelUpsertArgs>(args: SelectSubset<T, AppUserModelUpsertArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AppUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelCountArgs} args - Arguments to filter AppUserModels to count.
     * @example
     * // Count the number of AppUserModels
     * const count = await prisma.appUserModel.count({
     *   where: {
     *     // ... the filter for the AppUserModels we want to count
     *   }
     * })
    **/
    count<T extends AppUserModelCountArgs>(
      args?: Subset<T, AppUserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUserModelAggregateArgs>(args: Subset<T, AppUserModelAggregateArgs>): Prisma.PrismaPromise<GetAppUserModelAggregateType<T>>

    /**
     * Group by AppUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserModelGroupByArgs['orderBy'] }
        : { orderBy?: AppUserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUserModel model
   */
  readonly fields: AppUserModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appuser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    model<T extends AppModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppModelDefaultArgs<ExtArgs>>): Prisma__AppModelClient<$Result.GetResult<Prisma.$AppModelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    chatRecords<T extends AppUserModel$chatRecordsArgs<ExtArgs> = {}>(args?: Subset<T, AppUserModel$chatRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppUserModel model
   */ 
  interface AppUserModelFieldRefs {
    readonly userId: FieldRef<"AppUserModel", 'Int'>
    readonly modelId: FieldRef<"AppUserModel", 'Int'>
    readonly isPinned: FieldRef<"AppUserModel", 'Boolean'>
    readonly updatedAt: FieldRef<"AppUserModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUserModel findUnique
   */
  export type AppUserModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter, which AppUserModel to fetch.
     */
    where: AppUserModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel findUniqueOrThrow
   */
  export type AppUserModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter, which AppUserModel to fetch.
     */
    where: AppUserModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel findFirst
   */
  export type AppUserModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter, which AppUserModel to fetch.
     */
    where?: AppUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUserModels to fetch.
     */
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUserModels.
     */
    cursor?: AppUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUserModels.
     */
    distinct?: AppUserModelScalarFieldEnum | AppUserModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel findFirstOrThrow
   */
  export type AppUserModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter, which AppUserModel to fetch.
     */
    where?: AppUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUserModels to fetch.
     */
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUserModels.
     */
    cursor?: AppUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUserModels.
     */
    distinct?: AppUserModelScalarFieldEnum | AppUserModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel findMany
   */
  export type AppUserModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter, which AppUserModels to fetch.
     */
    where?: AppUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUserModels to fetch.
     */
    orderBy?: AppUserModelOrderByWithRelationInput | AppUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUserModels.
     */
    cursor?: AppUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUserModels.
     */
    skip?: number
    distinct?: AppUserModelScalarFieldEnum | AppUserModelScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel create
   */
  export type AppUserModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUserModel.
     */
    data: XOR<AppUserModelCreateInput, AppUserModelUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel createMany
   */
  export type AppUserModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUserModels.
     */
    data: AppUserModelCreateManyInput | AppUserModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUserModel update
   */
  export type AppUserModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUserModel.
     */
    data: XOR<AppUserModelUpdateInput, AppUserModelUncheckedUpdateInput>
    /**
     * Choose, which AppUserModel to update.
     */
    where: AppUserModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel updateMany
   */
  export type AppUserModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUserModels.
     */
    data: XOR<AppUserModelUpdateManyMutationInput, AppUserModelUncheckedUpdateManyInput>
    /**
     * Filter which AppUserModels to update
     */
    where?: AppUserModelWhereInput
  }

  /**
   * AppUserModel upsert
   */
  export type AppUserModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUserModel to update in case it exists.
     */
    where: AppUserModelWhereUniqueInput
    /**
     * In case the AppUserModel found by the `where` argument doesn't exist, create a new AppUserModel with this data.
     */
    create: XOR<AppUserModelCreateInput, AppUserModelUncheckedCreateInput>
    /**
     * In case the AppUserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserModelUpdateInput, AppUserModelUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel delete
   */
  export type AppUserModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
    /**
     * Filter which AppUserModel to delete.
     */
    where: AppUserModelWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * AppUserModel deleteMany
   */
  export type AppUserModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUserModels to delete
     */
    where?: AppUserModelWhereInput
  }

  /**
   * AppUserModel.chatRecords
   */
  export type AppUserModel$chatRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    where?: ChatRecordWhereInput
    orderBy?: ChatRecordOrderByWithRelationInput | ChatRecordOrderByWithRelationInput[]
    cursor?: ChatRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRecordScalarFieldEnum | ChatRecordScalarFieldEnum[]
  }

  /**
   * AppUserModel without action
   */
  export type AppUserModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserModel
     */
    select?: AppUserModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUserModel
     */
    omit?: AppUserModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserModelInclude<ExtArgs> | null
  }


  /**
   * Model ChatRecord
   */

  export type AggregateChatRecord = {
    _count: ChatRecordCountAggregateOutputType | null
    _avg: ChatRecordAvgAggregateOutputType | null
    _sum: ChatRecordSumAggregateOutputType | null
    _min: ChatRecordMinAggregateOutputType | null
    _max: ChatRecordMaxAggregateOutputType | null
  }

  export type ChatRecordAvgAggregateOutputType = {
    id: number | null
    userModelUserId: number | null
    userModelModelId: number | null
  }

  export type ChatRecordSumAggregateOutputType = {
    id: number | null
    userModelUserId: number | null
    userModelModelId: number | null
  }

  export type ChatRecordMinAggregateOutputType = {
    id: number | null
    userModelUserId: number | null
    userModelModelId: number | null
    message: string | null
    role: string | null
    createdAt: Date | null
    delStatus: string | null
  }

  export type ChatRecordMaxAggregateOutputType = {
    id: number | null
    userModelUserId: number | null
    userModelModelId: number | null
    message: string | null
    role: string | null
    createdAt: Date | null
    delStatus: string | null
  }

  export type ChatRecordCountAggregateOutputType = {
    id: number
    userModelUserId: number
    userModelModelId: number
    message: number
    role: number
    createdAt: number
    delStatus: number
    _all: number
  }


  export type ChatRecordAvgAggregateInputType = {
    id?: true
    userModelUserId?: true
    userModelModelId?: true
  }

  export type ChatRecordSumAggregateInputType = {
    id?: true
    userModelUserId?: true
    userModelModelId?: true
  }

  export type ChatRecordMinAggregateInputType = {
    id?: true
    userModelUserId?: true
    userModelModelId?: true
    message?: true
    role?: true
    createdAt?: true
    delStatus?: true
  }

  export type ChatRecordMaxAggregateInputType = {
    id?: true
    userModelUserId?: true
    userModelModelId?: true
    message?: true
    role?: true
    createdAt?: true
    delStatus?: true
  }

  export type ChatRecordCountAggregateInputType = {
    id?: true
    userModelUserId?: true
    userModelModelId?: true
    message?: true
    role?: true
    createdAt?: true
    delStatus?: true
    _all?: true
  }

  export type ChatRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRecord to aggregate.
     */
    where?: ChatRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRecords to fetch.
     */
    orderBy?: ChatRecordOrderByWithRelationInput | ChatRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRecords
    **/
    _count?: true | ChatRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRecordMaxAggregateInputType
  }

  export type GetChatRecordAggregateType<T extends ChatRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRecord[P]>
      : GetScalarType<T[P], AggregateChatRecord[P]>
  }




  export type ChatRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRecordWhereInput
    orderBy?: ChatRecordOrderByWithAggregationInput | ChatRecordOrderByWithAggregationInput[]
    by: ChatRecordScalarFieldEnum[] | ChatRecordScalarFieldEnum
    having?: ChatRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRecordCountAggregateInputType | true
    _avg?: ChatRecordAvgAggregateInputType
    _sum?: ChatRecordSumAggregateInputType
    _min?: ChatRecordMinAggregateInputType
    _max?: ChatRecordMaxAggregateInputType
  }

  export type ChatRecordGroupByOutputType = {
    id: number
    userModelUserId: number
    userModelModelId: number
    message: string
    role: string
    createdAt: Date
    delStatus: string | null
    _count: ChatRecordCountAggregateOutputType | null
    _avg: ChatRecordAvgAggregateOutputType | null
    _sum: ChatRecordSumAggregateOutputType | null
    _min: ChatRecordMinAggregateOutputType | null
    _max: ChatRecordMaxAggregateOutputType | null
  }

  type GetChatRecordGroupByPayload<T extends ChatRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRecordGroupByOutputType[P]>
        }
      >
    >


  export type ChatRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userModelUserId?: boolean
    userModelModelId?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    delStatus?: boolean
    userModel?: boolean | AppUserModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRecord"]>


  export type ChatRecordSelectScalar = {
    id?: boolean
    userModelUserId?: boolean
    userModelModelId?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    delStatus?: boolean
  }

  export type ChatRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userModelUserId" | "userModelModelId" | "message" | "role" | "createdAt" | "delStatus", ExtArgs["result"]["chatRecord"]>
  export type ChatRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userModel?: boolean | AppUserModelDefaultArgs<ExtArgs>
  }

  export type $ChatRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRecord"
    objects: {
      userModel: Prisma.$AppUserModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userModelUserId: number
      userModelModelId: number
      message: string
      role: string
      createdAt: Date
      delStatus: string | null
    }, ExtArgs["result"]["chatRecord"]>
    composites: {}
  }

  type ChatRecordGetPayload<S extends boolean | null | undefined | ChatRecordDefaultArgs> = $Result.GetResult<Prisma.$ChatRecordPayload, S>

  type ChatRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ChatRecordCountAggregateInputType | true
    }

  export interface ChatRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRecord'], meta: { name: 'ChatRecord' } }
    /**
     * Find zero or one ChatRecord that matches the filter.
     * @param {ChatRecordFindUniqueArgs} args - Arguments to find a ChatRecord
     * @example
     * // Get one ChatRecord
     * const chatRecord = await prisma.chatRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRecordFindUniqueArgs>(args: SelectSubset<T, ChatRecordFindUniqueArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ChatRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatRecordFindUniqueOrThrowArgs} args - Arguments to find a ChatRecord
     * @example
     * // Get one ChatRecord
     * const chatRecord = await prisma.chatRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ChatRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordFindFirstArgs} args - Arguments to find a ChatRecord
     * @example
     * // Get one ChatRecord
     * const chatRecord = await prisma.chatRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRecordFindFirstArgs>(args?: SelectSubset<T, ChatRecordFindFirstArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ChatRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordFindFirstOrThrowArgs} args - Arguments to find a ChatRecord
     * @example
     * // Get one ChatRecord
     * const chatRecord = await prisma.chatRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ChatRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRecords
     * const chatRecords = await prisma.chatRecord.findMany()
     * 
     * // Get first 10 ChatRecords
     * const chatRecords = await prisma.chatRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRecordWithIdOnly = await prisma.chatRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRecordFindManyArgs>(args?: SelectSubset<T, ChatRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ChatRecord.
     * @param {ChatRecordCreateArgs} args - Arguments to create a ChatRecord.
     * @example
     * // Create one ChatRecord
     * const ChatRecord = await prisma.chatRecord.create({
     *   data: {
     *     // ... data to create a ChatRecord
     *   }
     * })
     * 
     */
    create<T extends ChatRecordCreateArgs>(args: SelectSubset<T, ChatRecordCreateArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ChatRecords.
     * @param {ChatRecordCreateManyArgs} args - Arguments to create many ChatRecords.
     * @example
     * // Create many ChatRecords
     * const chatRecord = await prisma.chatRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRecordCreateManyArgs>(args?: SelectSubset<T, ChatRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRecord.
     * @param {ChatRecordDeleteArgs} args - Arguments to delete one ChatRecord.
     * @example
     * // Delete one ChatRecord
     * const ChatRecord = await prisma.chatRecord.delete({
     *   where: {
     *     // ... filter to delete one ChatRecord
     *   }
     * })
     * 
     */
    delete<T extends ChatRecordDeleteArgs>(args: SelectSubset<T, ChatRecordDeleteArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ChatRecord.
     * @param {ChatRecordUpdateArgs} args - Arguments to update one ChatRecord.
     * @example
     * // Update one ChatRecord
     * const chatRecord = await prisma.chatRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRecordUpdateArgs>(args: SelectSubset<T, ChatRecordUpdateArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ChatRecords.
     * @param {ChatRecordDeleteManyArgs} args - Arguments to filter ChatRecords to delete.
     * @example
     * // Delete a few ChatRecords
     * const { count } = await prisma.chatRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRecordDeleteManyArgs>(args?: SelectSubset<T, ChatRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRecords
     * const chatRecord = await prisma.chatRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRecordUpdateManyArgs>(args: SelectSubset<T, ChatRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRecord.
     * @param {ChatRecordUpsertArgs} args - Arguments to update or create a ChatRecord.
     * @example
     * // Update or create a ChatRecord
     * const chatRecord = await prisma.chatRecord.upsert({
     *   create: {
     *     // ... data to create a ChatRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRecord we want to update
     *   }
     * })
     */
    upsert<T extends ChatRecordUpsertArgs>(args: SelectSubset<T, ChatRecordUpsertArgs<ExtArgs>>): Prisma__ChatRecordClient<$Result.GetResult<Prisma.$ChatRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ChatRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordCountArgs} args - Arguments to filter ChatRecords to count.
     * @example
     * // Count the number of ChatRecords
     * const count = await prisma.chatRecord.count({
     *   where: {
     *     // ... the filter for the ChatRecords we want to count
     *   }
     * })
    **/
    count<T extends ChatRecordCountArgs>(
      args?: Subset<T, ChatRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRecordAggregateArgs>(args: Subset<T, ChatRecordAggregateArgs>): Prisma.PrismaPromise<GetChatRecordAggregateType<T>>

    /**
     * Group by ChatRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRecordGroupByArgs['orderBy'] }
        : { orderBy?: ChatRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRecord model
   */
  readonly fields: ChatRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userModel<T extends AppUserModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserModelDefaultArgs<ExtArgs>>): Prisma__AppUserModelClient<$Result.GetResult<Prisma.$AppUserModelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRecord model
   */ 
  interface ChatRecordFieldRefs {
    readonly id: FieldRef<"ChatRecord", 'Int'>
    readonly userModelUserId: FieldRef<"ChatRecord", 'Int'>
    readonly userModelModelId: FieldRef<"ChatRecord", 'Int'>
    readonly message: FieldRef<"ChatRecord", 'String'>
    readonly role: FieldRef<"ChatRecord", 'String'>
    readonly createdAt: FieldRef<"ChatRecord", 'DateTime'>
    readonly delStatus: FieldRef<"ChatRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatRecord findUnique
   */
  export type ChatRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter, which ChatRecord to fetch.
     */
    where: ChatRecordWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord findUniqueOrThrow
   */
  export type ChatRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter, which ChatRecord to fetch.
     */
    where: ChatRecordWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord findFirst
   */
  export type ChatRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter, which ChatRecord to fetch.
     */
    where?: ChatRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRecords to fetch.
     */
    orderBy?: ChatRecordOrderByWithRelationInput | ChatRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRecords.
     */
    cursor?: ChatRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRecords.
     */
    distinct?: ChatRecordScalarFieldEnum | ChatRecordScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord findFirstOrThrow
   */
  export type ChatRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter, which ChatRecord to fetch.
     */
    where?: ChatRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRecords to fetch.
     */
    orderBy?: ChatRecordOrderByWithRelationInput | ChatRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRecords.
     */
    cursor?: ChatRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRecords.
     */
    distinct?: ChatRecordScalarFieldEnum | ChatRecordScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord findMany
   */
  export type ChatRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter, which ChatRecords to fetch.
     */
    where?: ChatRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRecords to fetch.
     */
    orderBy?: ChatRecordOrderByWithRelationInput | ChatRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRecords.
     */
    cursor?: ChatRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRecords.
     */
    skip?: number
    distinct?: ChatRecordScalarFieldEnum | ChatRecordScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord create
   */
  export type ChatRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRecord.
     */
    data: XOR<ChatRecordCreateInput, ChatRecordUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord createMany
   */
  export type ChatRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRecords.
     */
    data: ChatRecordCreateManyInput | ChatRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRecord update
   */
  export type ChatRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRecord.
     */
    data: XOR<ChatRecordUpdateInput, ChatRecordUncheckedUpdateInput>
    /**
     * Choose, which ChatRecord to update.
     */
    where: ChatRecordWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord updateMany
   */
  export type ChatRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRecords.
     */
    data: XOR<ChatRecordUpdateManyMutationInput, ChatRecordUncheckedUpdateManyInput>
    /**
     * Filter which ChatRecords to update
     */
    where?: ChatRecordWhereInput
  }

  /**
   * ChatRecord upsert
   */
  export type ChatRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRecord to update in case it exists.
     */
    where: ChatRecordWhereUniqueInput
    /**
     * In case the ChatRecord found by the `where` argument doesn't exist, create a new ChatRecord with this data.
     */
    create: XOR<ChatRecordCreateInput, ChatRecordUncheckedCreateInput>
    /**
     * In case the ChatRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRecordUpdateInput, ChatRecordUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord delete
   */
  export type ChatRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
    /**
     * Filter which ChatRecord to delete.
     */
    where: ChatRecordWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ChatRecord deleteMany
   */
  export type ChatRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRecords to delete
     */
    where?: ChatRecordWhereInput
  }

  /**
   * ChatRecord without action
   */
  export type ChatRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRecord
     */
    select?: ChatRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRecord
     */
    omit?: ChatRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUserScalarFieldEnum: {
    userId: 'userId',
    userAvatar: 'userAvatar',
    userGender: 'userGender',
    phone: 'phone',
    status: 'status',
    nickName: 'nickName',
    code: 'code',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delStatus: 'delStatus'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const AppModelScalarFieldEnum: {
    modelId: 'modelId',
    modelImage: 'modelImage',
    modelName: 'modelName',
    modelDescription: 'modelDescription',
    introduce: 'introduce',
    modelQaCount: 'modelQaCount',
    sound: 'sound',
    language: 'language',
    prologue: 'prologue',
    isPublic: 'isPublic',
    type: 'type',
    tags: 'tags',
    enableBackground: 'enableBackground',
    backgroundImage: 'backgroundImage',
    isAiImage: 'isAiImage',
    creatorId: 'creatorId',
    creatorName: 'creatorName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delStatus: 'delStatus'
  };

  export type AppModelScalarFieldEnum = (typeof AppModelScalarFieldEnum)[keyof typeof AppModelScalarFieldEnum]


  export const AppUserModelScalarFieldEnum: {
    userId: 'userId',
    modelId: 'modelId',
    isPinned: 'isPinned',
    updatedAt: 'updatedAt'
  };

  export type AppUserModelScalarFieldEnum = (typeof AppUserModelScalarFieldEnum)[keyof typeof AppUserModelScalarFieldEnum]


  export const ChatRecordScalarFieldEnum: {
    id: 'id',
    userModelUserId: 'userModelUserId',
    userModelModelId: 'userModelModelId',
    message: 'message',
    role: 'role',
    createdAt: 'createdAt',
    delStatus: 'delStatus'
  };

  export type ChatRecordScalarFieldEnum = (typeof ChatRecordScalarFieldEnum)[keyof typeof ChatRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    userId?: IntFilter<"AppUser"> | number
    userAvatar?: StringNullableFilter<"AppUser"> | string | null
    userGender?: StringNullableFilter<"AppUser"> | string | null
    phone?: StringNullableFilter<"AppUser"> | string | null
    status?: StringNullableFilter<"AppUser"> | string | null
    nickName?: StringNullableFilter<"AppUser"> | string | null
    code?: StringNullableFilter<"AppUser"> | string | null
    password?: StringNullableFilter<"AppUser"> | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    delStatus?: StringNullableFilter<"AppUser"> | string | null
    models?: AppUserModelListRelationFilter
    createdModels?: AppModelListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    userId?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userGender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    models?: AppUserModelOrderByRelationAggregateInput
    createdModels?: AppModelOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    phone?: string
    nickName?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    userAvatar?: StringNullableFilter<"AppUser"> | string | null
    userGender?: StringNullableFilter<"AppUser"> | string | null
    status?: StringNullableFilter<"AppUser"> | string | null
    code?: StringNullableFilter<"AppUser"> | string | null
    password?: StringNullableFilter<"AppUser"> | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    delStatus?: StringNullableFilter<"AppUser"> | string | null
    models?: AppUserModelListRelationFilter
    createdModels?: AppModelListRelationFilter
  }, "userId" | "phone" | "nickName">

  export type AppUserOrderByWithAggregationInput = {
    userId?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userGender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _avg?: AppUserAvgOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
    _sum?: AppUserSumOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"AppUser"> | number
    userAvatar?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    userGender?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    phone?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    status?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    nickName?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    code?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    password?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    delStatus?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
  }

  export type AppModelWhereInput = {
    AND?: AppModelWhereInput | AppModelWhereInput[]
    OR?: AppModelWhereInput[]
    NOT?: AppModelWhereInput | AppModelWhereInput[]
    modelId?: IntFilter<"AppModel"> | number
    modelImage?: StringNullableFilter<"AppModel"> | string | null
    modelName?: StringNullableFilter<"AppModel"> | string | null
    modelDescription?: StringNullableFilter<"AppModel"> | string | null
    introduce?: StringNullableFilter<"AppModel"> | string | null
    modelQaCount?: IntNullableFilter<"AppModel"> | number | null
    sound?: IntNullableFilter<"AppModel"> | number | null
    language?: IntNullableFilter<"AppModel"> | number | null
    prologue?: StringNullableFilter<"AppModel"> | string | null
    isPublic?: IntNullableFilter<"AppModel"> | number | null
    type?: StringNullableFilter<"AppModel"> | string | null
    tags?: StringNullableFilter<"AppModel"> | string | null
    enableBackground?: BoolFilter<"AppModel"> | boolean
    backgroundImage?: StringNullableFilter<"AppModel"> | string | null
    isAiImage?: BoolFilter<"AppModel"> | boolean
    creatorId?: IntFilter<"AppModel"> | number
    creatorName?: StringNullableFilter<"AppModel"> | string | null
    createdAt?: DateTimeFilter<"AppModel"> | Date | string
    updatedAt?: DateTimeFilter<"AppModel"> | Date | string
    delStatus?: StringNullableFilter<"AppModel"> | string | null
    creator?: XOR<AppUserRelationFilter, AppUserWhereInput>
    users?: AppUserModelListRelationFilter
  }

  export type AppModelOrderByWithRelationInput = {
    modelId?: SortOrder
    modelImage?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    modelDescription?: SortOrderInput | SortOrder
    introduce?: SortOrderInput | SortOrder
    modelQaCount?: SortOrderInput | SortOrder
    sound?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    prologue?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    enableBackground?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    isAiImage?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    creator?: AppUserOrderByWithRelationInput
    users?: AppUserModelOrderByRelationAggregateInput
  }

  export type AppModelWhereUniqueInput = Prisma.AtLeast<{
    modelId?: number
    AND?: AppModelWhereInput | AppModelWhereInput[]
    OR?: AppModelWhereInput[]
    NOT?: AppModelWhereInput | AppModelWhereInput[]
    modelImage?: StringNullableFilter<"AppModel"> | string | null
    modelName?: StringNullableFilter<"AppModel"> | string | null
    modelDescription?: StringNullableFilter<"AppModel"> | string | null
    introduce?: StringNullableFilter<"AppModel"> | string | null
    modelQaCount?: IntNullableFilter<"AppModel"> | number | null
    sound?: IntNullableFilter<"AppModel"> | number | null
    language?: IntNullableFilter<"AppModel"> | number | null
    prologue?: StringNullableFilter<"AppModel"> | string | null
    isPublic?: IntNullableFilter<"AppModel"> | number | null
    type?: StringNullableFilter<"AppModel"> | string | null
    tags?: StringNullableFilter<"AppModel"> | string | null
    enableBackground?: BoolFilter<"AppModel"> | boolean
    backgroundImage?: StringNullableFilter<"AppModel"> | string | null
    isAiImage?: BoolFilter<"AppModel"> | boolean
    creatorId?: IntFilter<"AppModel"> | number
    creatorName?: StringNullableFilter<"AppModel"> | string | null
    createdAt?: DateTimeFilter<"AppModel"> | Date | string
    updatedAt?: DateTimeFilter<"AppModel"> | Date | string
    delStatus?: StringNullableFilter<"AppModel"> | string | null
    creator?: XOR<AppUserRelationFilter, AppUserWhereInput>
    users?: AppUserModelListRelationFilter
  }, "modelId">

  export type AppModelOrderByWithAggregationInput = {
    modelId?: SortOrder
    modelImage?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    modelDescription?: SortOrderInput | SortOrder
    introduce?: SortOrderInput | SortOrder
    modelQaCount?: SortOrderInput | SortOrder
    sound?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    prologue?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    enableBackground?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    isAiImage?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    _count?: AppModelCountOrderByAggregateInput
    _avg?: AppModelAvgOrderByAggregateInput
    _max?: AppModelMaxOrderByAggregateInput
    _min?: AppModelMinOrderByAggregateInput
    _sum?: AppModelSumOrderByAggregateInput
  }

  export type AppModelScalarWhereWithAggregatesInput = {
    AND?: AppModelScalarWhereWithAggregatesInput | AppModelScalarWhereWithAggregatesInput[]
    OR?: AppModelScalarWhereWithAggregatesInput[]
    NOT?: AppModelScalarWhereWithAggregatesInput | AppModelScalarWhereWithAggregatesInput[]
    modelId?: IntWithAggregatesFilter<"AppModel"> | number
    modelImage?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    modelName?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    modelDescription?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    introduce?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    modelQaCount?: IntNullableWithAggregatesFilter<"AppModel"> | number | null
    sound?: IntNullableWithAggregatesFilter<"AppModel"> | number | null
    language?: IntNullableWithAggregatesFilter<"AppModel"> | number | null
    prologue?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    isPublic?: IntNullableWithAggregatesFilter<"AppModel"> | number | null
    type?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    tags?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    enableBackground?: BoolWithAggregatesFilter<"AppModel"> | boolean
    backgroundImage?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    isAiImage?: BoolWithAggregatesFilter<"AppModel"> | boolean
    creatorId?: IntWithAggregatesFilter<"AppModel"> | number
    creatorName?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppModel"> | Date | string
    delStatus?: StringNullableWithAggregatesFilter<"AppModel"> | string | null
  }

  export type AppUserModelWhereInput = {
    AND?: AppUserModelWhereInput | AppUserModelWhereInput[]
    OR?: AppUserModelWhereInput[]
    NOT?: AppUserModelWhereInput | AppUserModelWhereInput[]
    userId?: IntFilter<"AppUserModel"> | number
    modelId?: IntFilter<"AppUserModel"> | number
    isPinned?: BoolNullableFilter<"AppUserModel"> | boolean | null
    updatedAt?: DateTimeNullableFilter<"AppUserModel"> | Date | string | null
    appuser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    model?: XOR<AppModelRelationFilter, AppModelWhereInput>
    chatRecords?: ChatRecordListRelationFilter
  }

  export type AppUserModelOrderByWithRelationInput = {
    userId?: SortOrder
    modelId?: SortOrder
    isPinned?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    appuser?: AppUserOrderByWithRelationInput
    model?: AppModelOrderByWithRelationInput
    chatRecords?: ChatRecordOrderByRelationAggregateInput
  }

  export type AppUserModelWhereUniqueInput = Prisma.AtLeast<{
    userId_modelId?: AppUserModelUserIdModelIdCompoundUniqueInput
    AND?: AppUserModelWhereInput | AppUserModelWhereInput[]
    OR?: AppUserModelWhereInput[]
    NOT?: AppUserModelWhereInput | AppUserModelWhereInput[]
    userId?: IntFilter<"AppUserModel"> | number
    modelId?: IntFilter<"AppUserModel"> | number
    isPinned?: BoolNullableFilter<"AppUserModel"> | boolean | null
    updatedAt?: DateTimeNullableFilter<"AppUserModel"> | Date | string | null
    appuser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    model?: XOR<AppModelRelationFilter, AppModelWhereInput>
    chatRecords?: ChatRecordListRelationFilter
  }, "userId_modelId">

  export type AppUserModelOrderByWithAggregationInput = {
    userId?: SortOrder
    modelId?: SortOrder
    isPinned?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AppUserModelCountOrderByAggregateInput
    _avg?: AppUserModelAvgOrderByAggregateInput
    _max?: AppUserModelMaxOrderByAggregateInput
    _min?: AppUserModelMinOrderByAggregateInput
    _sum?: AppUserModelSumOrderByAggregateInput
  }

  export type AppUserModelScalarWhereWithAggregatesInput = {
    AND?: AppUserModelScalarWhereWithAggregatesInput | AppUserModelScalarWhereWithAggregatesInput[]
    OR?: AppUserModelScalarWhereWithAggregatesInput[]
    NOT?: AppUserModelScalarWhereWithAggregatesInput | AppUserModelScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"AppUserModel"> | number
    modelId?: IntWithAggregatesFilter<"AppUserModel"> | number
    isPinned?: BoolNullableWithAggregatesFilter<"AppUserModel"> | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AppUserModel"> | Date | string | null
  }

  export type ChatRecordWhereInput = {
    AND?: ChatRecordWhereInput | ChatRecordWhereInput[]
    OR?: ChatRecordWhereInput[]
    NOT?: ChatRecordWhereInput | ChatRecordWhereInput[]
    id?: IntFilter<"ChatRecord"> | number
    userModelUserId?: IntFilter<"ChatRecord"> | number
    userModelModelId?: IntFilter<"ChatRecord"> | number
    message?: StringFilter<"ChatRecord"> | string
    role?: StringFilter<"ChatRecord"> | string
    createdAt?: DateTimeFilter<"ChatRecord"> | Date | string
    delStatus?: StringNullableFilter<"ChatRecord"> | string | null
    userModel?: XOR<AppUserModelRelationFilter, AppUserModelWhereInput>
  }

  export type ChatRecordOrderByWithRelationInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    userModel?: AppUserModelOrderByWithRelationInput
  }

  export type ChatRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatRecordWhereInput | ChatRecordWhereInput[]
    OR?: ChatRecordWhereInput[]
    NOT?: ChatRecordWhereInput | ChatRecordWhereInput[]
    userModelUserId?: IntFilter<"ChatRecord"> | number
    userModelModelId?: IntFilter<"ChatRecord"> | number
    message?: StringFilter<"ChatRecord"> | string
    role?: StringFilter<"ChatRecord"> | string
    createdAt?: DateTimeFilter<"ChatRecord"> | Date | string
    delStatus?: StringNullableFilter<"ChatRecord"> | string | null
    userModel?: XOR<AppUserModelRelationFilter, AppUserModelWhereInput>
  }, "id">

  export type ChatRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    delStatus?: SortOrderInput | SortOrder
    _count?: ChatRecordCountOrderByAggregateInput
    _avg?: ChatRecordAvgOrderByAggregateInput
    _max?: ChatRecordMaxOrderByAggregateInput
    _min?: ChatRecordMinOrderByAggregateInput
    _sum?: ChatRecordSumOrderByAggregateInput
  }

  export type ChatRecordScalarWhereWithAggregatesInput = {
    AND?: ChatRecordScalarWhereWithAggregatesInput | ChatRecordScalarWhereWithAggregatesInput[]
    OR?: ChatRecordScalarWhereWithAggregatesInput[]
    NOT?: ChatRecordScalarWhereWithAggregatesInput | ChatRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRecord"> | number
    userModelUserId?: IntWithAggregatesFilter<"ChatRecord"> | number
    userModelModelId?: IntWithAggregatesFilter<"ChatRecord"> | number
    message?: StringWithAggregatesFilter<"ChatRecord"> | string
    role?: StringWithAggregatesFilter<"ChatRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatRecord"> | Date | string
    delStatus?: StringNullableWithAggregatesFilter<"ChatRecord"> | string | null
  }

  export type AppUserCreateInput = {
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    models?: AppUserModelCreateNestedManyWithoutAppuserInput
    createdModels?: AppModelCreateNestedManyWithoutCreatorInput
  }

  export type AppUserUncheckedCreateInput = {
    userId?: number
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    models?: AppUserModelUncheckedCreateNestedManyWithoutAppuserInput
    createdModels?: AppModelUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type AppUserUpdateInput = {
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    models?: AppUserModelUpdateManyWithoutAppuserNestedInput
    createdModels?: AppModelUpdateManyWithoutCreatorNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    models?: AppUserModelUncheckedUpdateManyWithoutAppuserNestedInput
    createdModels?: AppModelUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AppUserCreateManyInput = {
    userId?: number
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
  }

  export type AppUserUpdateManyMutationInput = {
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppModelCreateInput = {
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    creator: AppUserCreateNestedOneWithoutCreatedModelsInput
    users?: AppUserModelCreateNestedManyWithoutModelInput
  }

  export type AppModelUncheckedCreateInput = {
    modelId?: number
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorId: number
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    users?: AppUserModelUncheckedCreateNestedManyWithoutModelInput
  }

  export type AppModelUpdateInput = {
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: AppUserUpdateOneRequiredWithoutCreatedModelsNestedInput
    users?: AppUserModelUpdateManyWithoutModelNestedInput
  }

  export type AppModelUncheckedUpdateInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    users?: AppUserModelUncheckedUpdateManyWithoutModelNestedInput
  }

  export type AppModelCreateManyInput = {
    modelId?: number
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorId: number
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
  }

  export type AppModelUpdateManyMutationInput = {
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppModelUncheckedUpdateManyInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppUserModelCreateInput = {
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    appuser: AppUserCreateNestedOneWithoutModelsInput
    model: AppModelCreateNestedOneWithoutUsersInput
    chatRecords?: ChatRecordCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelUncheckedCreateInput = {
    userId: number
    modelId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    chatRecords?: ChatRecordUncheckedCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelUpdateInput = {
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appuser?: AppUserUpdateOneRequiredWithoutModelsNestedInput
    model?: AppModelUpdateOneRequiredWithoutUsersNestedInput
    chatRecords?: ChatRecordUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRecords?: ChatRecordUncheckedUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelCreateManyInput = {
    userId: number
    modelId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
  }

  export type AppUserModelUpdateManyMutationInput = {
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUserModelUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRecordCreateInput = {
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
    userModel: AppUserModelCreateNestedOneWithoutChatRecordsInput
  }

  export type ChatRecordUncheckedCreateInput = {
    id?: number
    userModelUserId: number
    userModelModelId: number
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
  }

  export type ChatRecordUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    userModel?: AppUserModelUpdateOneRequiredWithoutChatRecordsNestedInput
  }

  export type ChatRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userModelUserId?: IntFieldUpdateOperationsInput | number
    userModelModelId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRecordCreateManyInput = {
    id?: number
    userModelUserId: number
    userModelModelId: number
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
  }

  export type ChatRecordUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userModelUserId?: IntFieldUpdateOperationsInput | number
    userModelModelId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppUserModelListRelationFilter = {
    every?: AppUserModelWhereInput
    some?: AppUserModelWhereInput
    none?: AppUserModelWhereInput
  }

  export type AppModelListRelationFilter = {
    every?: AppModelWhereInput
    some?: AppModelWhereInput
    none?: AppModelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppUserModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    userId?: SortOrder
    userAvatar?: SortOrder
    userGender?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    nickName?: SortOrder
    code?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppUserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userAvatar?: SortOrder
    userGender?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    nickName?: SortOrder
    code?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    userId?: SortOrder
    userAvatar?: SortOrder
    userGender?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    nickName?: SortOrder
    code?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppUserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AppUserRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type AppModelCountOrderByAggregateInput = {
    modelId?: SortOrder
    modelImage?: SortOrder
    modelName?: SortOrder
    modelDescription?: SortOrder
    introduce?: SortOrder
    modelQaCount?: SortOrder
    sound?: SortOrder
    language?: SortOrder
    prologue?: SortOrder
    isPublic?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    enableBackground?: SortOrder
    backgroundImage?: SortOrder
    isAiImage?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppModelAvgOrderByAggregateInput = {
    modelId?: SortOrder
    modelQaCount?: SortOrder
    sound?: SortOrder
    language?: SortOrder
    isPublic?: SortOrder
    creatorId?: SortOrder
  }

  export type AppModelMaxOrderByAggregateInput = {
    modelId?: SortOrder
    modelImage?: SortOrder
    modelName?: SortOrder
    modelDescription?: SortOrder
    introduce?: SortOrder
    modelQaCount?: SortOrder
    sound?: SortOrder
    language?: SortOrder
    prologue?: SortOrder
    isPublic?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    enableBackground?: SortOrder
    backgroundImage?: SortOrder
    isAiImage?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppModelMinOrderByAggregateInput = {
    modelId?: SortOrder
    modelImage?: SortOrder
    modelName?: SortOrder
    modelDescription?: SortOrder
    introduce?: SortOrder
    modelQaCount?: SortOrder
    sound?: SortOrder
    language?: SortOrder
    prologue?: SortOrder
    isPublic?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    enableBackground?: SortOrder
    backgroundImage?: SortOrder
    isAiImage?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delStatus?: SortOrder
  }

  export type AppModelSumOrderByAggregateInput = {
    modelId?: SortOrder
    modelQaCount?: SortOrder
    sound?: SortOrder
    language?: SortOrder
    isPublic?: SortOrder
    creatorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AppModelRelationFilter = {
    is?: AppModelWhereInput
    isNot?: AppModelWhereInput
  }

  export type ChatRecordListRelationFilter = {
    every?: ChatRecordWhereInput
    some?: ChatRecordWhereInput
    none?: ChatRecordWhereInput
  }

  export type ChatRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserModelUserIdModelIdCompoundUniqueInput = {
    userId: number
    modelId: number
  }

  export type AppUserModelCountOrderByAggregateInput = {
    userId?: SortOrder
    modelId?: SortOrder
    isPinned?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserModelAvgOrderByAggregateInput = {
    userId?: SortOrder
    modelId?: SortOrder
  }

  export type AppUserModelMaxOrderByAggregateInput = {
    userId?: SortOrder
    modelId?: SortOrder
    isPinned?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserModelMinOrderByAggregateInput = {
    userId?: SortOrder
    modelId?: SortOrder
    isPinned?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserModelSumOrderByAggregateInput = {
    userId?: SortOrder
    modelId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AppUserModelRelationFilter = {
    is?: AppUserModelWhereInput
    isNot?: AppUserModelWhereInput
  }

  export type ChatRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    delStatus?: SortOrder
  }

  export type ChatRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
  }

  export type ChatRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    delStatus?: SortOrder
  }

  export type ChatRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    delStatus?: SortOrder
  }

  export type ChatRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userModelUserId?: SortOrder
    userModelModelId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AppUserModelCreateNestedManyWithoutAppuserInput = {
    create?: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput> | AppUserModelCreateWithoutAppuserInput[] | AppUserModelUncheckedCreateWithoutAppuserInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutAppuserInput | AppUserModelCreateOrConnectWithoutAppuserInput[]
    createMany?: AppUserModelCreateManyAppuserInputEnvelope
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
  }

  export type AppModelCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput> | AppModelCreateWithoutCreatorInput[] | AppModelUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AppModelCreateOrConnectWithoutCreatorInput | AppModelCreateOrConnectWithoutCreatorInput[]
    createMany?: AppModelCreateManyCreatorInputEnvelope
    connect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
  }

  export type AppUserModelUncheckedCreateNestedManyWithoutAppuserInput = {
    create?: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput> | AppUserModelCreateWithoutAppuserInput[] | AppUserModelUncheckedCreateWithoutAppuserInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutAppuserInput | AppUserModelCreateOrConnectWithoutAppuserInput[]
    createMany?: AppUserModelCreateManyAppuserInputEnvelope
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
  }

  export type AppModelUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput> | AppModelCreateWithoutCreatorInput[] | AppModelUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AppModelCreateOrConnectWithoutCreatorInput | AppModelCreateOrConnectWithoutCreatorInput[]
    createMany?: AppModelCreateManyCreatorInputEnvelope
    connect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppUserModelUpdateManyWithoutAppuserNestedInput = {
    create?: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput> | AppUserModelCreateWithoutAppuserInput[] | AppUserModelUncheckedCreateWithoutAppuserInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutAppuserInput | AppUserModelCreateOrConnectWithoutAppuserInput[]
    upsert?: AppUserModelUpsertWithWhereUniqueWithoutAppuserInput | AppUserModelUpsertWithWhereUniqueWithoutAppuserInput[]
    createMany?: AppUserModelCreateManyAppuserInputEnvelope
    set?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    disconnect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    delete?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    update?: AppUserModelUpdateWithWhereUniqueWithoutAppuserInput | AppUserModelUpdateWithWhereUniqueWithoutAppuserInput[]
    updateMany?: AppUserModelUpdateManyWithWhereWithoutAppuserInput | AppUserModelUpdateManyWithWhereWithoutAppuserInput[]
    deleteMany?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
  }

  export type AppModelUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput> | AppModelCreateWithoutCreatorInput[] | AppModelUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AppModelCreateOrConnectWithoutCreatorInput | AppModelCreateOrConnectWithoutCreatorInput[]
    upsert?: AppModelUpsertWithWhereUniqueWithoutCreatorInput | AppModelUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AppModelCreateManyCreatorInputEnvelope
    set?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    disconnect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    delete?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    connect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    update?: AppModelUpdateWithWhereUniqueWithoutCreatorInput | AppModelUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AppModelUpdateManyWithWhereWithoutCreatorInput | AppModelUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AppModelScalarWhereInput | AppModelScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppUserModelUncheckedUpdateManyWithoutAppuserNestedInput = {
    create?: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput> | AppUserModelCreateWithoutAppuserInput[] | AppUserModelUncheckedCreateWithoutAppuserInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutAppuserInput | AppUserModelCreateOrConnectWithoutAppuserInput[]
    upsert?: AppUserModelUpsertWithWhereUniqueWithoutAppuserInput | AppUserModelUpsertWithWhereUniqueWithoutAppuserInput[]
    createMany?: AppUserModelCreateManyAppuserInputEnvelope
    set?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    disconnect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    delete?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    update?: AppUserModelUpdateWithWhereUniqueWithoutAppuserInput | AppUserModelUpdateWithWhereUniqueWithoutAppuserInput[]
    updateMany?: AppUserModelUpdateManyWithWhereWithoutAppuserInput | AppUserModelUpdateManyWithWhereWithoutAppuserInput[]
    deleteMany?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
  }

  export type AppModelUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput> | AppModelCreateWithoutCreatorInput[] | AppModelUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AppModelCreateOrConnectWithoutCreatorInput | AppModelCreateOrConnectWithoutCreatorInput[]
    upsert?: AppModelUpsertWithWhereUniqueWithoutCreatorInput | AppModelUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AppModelCreateManyCreatorInputEnvelope
    set?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    disconnect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    delete?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    connect?: AppModelWhereUniqueInput | AppModelWhereUniqueInput[]
    update?: AppModelUpdateWithWhereUniqueWithoutCreatorInput | AppModelUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AppModelUpdateManyWithWhereWithoutCreatorInput | AppModelUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AppModelScalarWhereInput | AppModelScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutCreatedModelsInput = {
    create?: XOR<AppUserCreateWithoutCreatedModelsInput, AppUserUncheckedCreateWithoutCreatedModelsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutCreatedModelsInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserModelCreateNestedManyWithoutModelInput = {
    create?: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput> | AppUserModelCreateWithoutModelInput[] | AppUserModelUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutModelInput | AppUserModelCreateOrConnectWithoutModelInput[]
    createMany?: AppUserModelCreateManyModelInputEnvelope
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
  }

  export type AppUserModelUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput> | AppUserModelCreateWithoutModelInput[] | AppUserModelUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutModelInput | AppUserModelCreateOrConnectWithoutModelInput[]
    createMany?: AppUserModelCreateManyModelInputEnvelope
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppUserUpdateOneRequiredWithoutCreatedModelsNestedInput = {
    create?: XOR<AppUserCreateWithoutCreatedModelsInput, AppUserUncheckedCreateWithoutCreatedModelsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutCreatedModelsInput
    upsert?: AppUserUpsertWithoutCreatedModelsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutCreatedModelsInput, AppUserUpdateWithoutCreatedModelsInput>, AppUserUncheckedUpdateWithoutCreatedModelsInput>
  }

  export type AppUserModelUpdateManyWithoutModelNestedInput = {
    create?: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput> | AppUserModelCreateWithoutModelInput[] | AppUserModelUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutModelInput | AppUserModelCreateOrConnectWithoutModelInput[]
    upsert?: AppUserModelUpsertWithWhereUniqueWithoutModelInput | AppUserModelUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AppUserModelCreateManyModelInputEnvelope
    set?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    disconnect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    delete?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    update?: AppUserModelUpdateWithWhereUniqueWithoutModelInput | AppUserModelUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AppUserModelUpdateManyWithWhereWithoutModelInput | AppUserModelUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
  }

  export type AppUserModelUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput> | AppUserModelCreateWithoutModelInput[] | AppUserModelUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AppUserModelCreateOrConnectWithoutModelInput | AppUserModelCreateOrConnectWithoutModelInput[]
    upsert?: AppUserModelUpsertWithWhereUniqueWithoutModelInput | AppUserModelUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AppUserModelCreateManyModelInputEnvelope
    set?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    disconnect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    delete?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    connect?: AppUserModelWhereUniqueInput | AppUserModelWhereUniqueInput[]
    update?: AppUserModelUpdateWithWhereUniqueWithoutModelInput | AppUserModelUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AppUserModelUpdateManyWithWhereWithoutModelInput | AppUserModelUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutModelsInput = {
    create?: XOR<AppUserCreateWithoutModelsInput, AppUserUncheckedCreateWithoutModelsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutModelsInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppModelCreateNestedOneWithoutUsersInput = {
    create?: XOR<AppModelCreateWithoutUsersInput, AppModelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppModelCreateOrConnectWithoutUsersInput
    connect?: AppModelWhereUniqueInput
  }

  export type ChatRecordCreateNestedManyWithoutUserModelInput = {
    create?: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput> | ChatRecordCreateWithoutUserModelInput[] | ChatRecordUncheckedCreateWithoutUserModelInput[]
    connectOrCreate?: ChatRecordCreateOrConnectWithoutUserModelInput | ChatRecordCreateOrConnectWithoutUserModelInput[]
    createMany?: ChatRecordCreateManyUserModelInputEnvelope
    connect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
  }

  export type ChatRecordUncheckedCreateNestedManyWithoutUserModelInput = {
    create?: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput> | ChatRecordCreateWithoutUserModelInput[] | ChatRecordUncheckedCreateWithoutUserModelInput[]
    connectOrCreate?: ChatRecordCreateOrConnectWithoutUserModelInput | ChatRecordCreateOrConnectWithoutUserModelInput[]
    createMany?: ChatRecordCreateManyUserModelInputEnvelope
    connect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AppUserUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<AppUserCreateWithoutModelsInput, AppUserUncheckedCreateWithoutModelsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutModelsInput
    upsert?: AppUserUpsertWithoutModelsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutModelsInput, AppUserUpdateWithoutModelsInput>, AppUserUncheckedUpdateWithoutModelsInput>
  }

  export type AppModelUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AppModelCreateWithoutUsersInput, AppModelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppModelCreateOrConnectWithoutUsersInput
    upsert?: AppModelUpsertWithoutUsersInput
    connect?: AppModelWhereUniqueInput
    update?: XOR<XOR<AppModelUpdateToOneWithWhereWithoutUsersInput, AppModelUpdateWithoutUsersInput>, AppModelUncheckedUpdateWithoutUsersInput>
  }

  export type ChatRecordUpdateManyWithoutUserModelNestedInput = {
    create?: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput> | ChatRecordCreateWithoutUserModelInput[] | ChatRecordUncheckedCreateWithoutUserModelInput[]
    connectOrCreate?: ChatRecordCreateOrConnectWithoutUserModelInput | ChatRecordCreateOrConnectWithoutUserModelInput[]
    upsert?: ChatRecordUpsertWithWhereUniqueWithoutUserModelInput | ChatRecordUpsertWithWhereUniqueWithoutUserModelInput[]
    createMany?: ChatRecordCreateManyUserModelInputEnvelope
    set?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    disconnect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    delete?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    connect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    update?: ChatRecordUpdateWithWhereUniqueWithoutUserModelInput | ChatRecordUpdateWithWhereUniqueWithoutUserModelInput[]
    updateMany?: ChatRecordUpdateManyWithWhereWithoutUserModelInput | ChatRecordUpdateManyWithWhereWithoutUserModelInput[]
    deleteMany?: ChatRecordScalarWhereInput | ChatRecordScalarWhereInput[]
  }

  export type ChatRecordUncheckedUpdateManyWithoutUserModelNestedInput = {
    create?: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput> | ChatRecordCreateWithoutUserModelInput[] | ChatRecordUncheckedCreateWithoutUserModelInput[]
    connectOrCreate?: ChatRecordCreateOrConnectWithoutUserModelInput | ChatRecordCreateOrConnectWithoutUserModelInput[]
    upsert?: ChatRecordUpsertWithWhereUniqueWithoutUserModelInput | ChatRecordUpsertWithWhereUniqueWithoutUserModelInput[]
    createMany?: ChatRecordCreateManyUserModelInputEnvelope
    set?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    disconnect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    delete?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    connect?: ChatRecordWhereUniqueInput | ChatRecordWhereUniqueInput[]
    update?: ChatRecordUpdateWithWhereUniqueWithoutUserModelInput | ChatRecordUpdateWithWhereUniqueWithoutUserModelInput[]
    updateMany?: ChatRecordUpdateManyWithWhereWithoutUserModelInput | ChatRecordUpdateManyWithWhereWithoutUserModelInput[]
    deleteMany?: ChatRecordScalarWhereInput | ChatRecordScalarWhereInput[]
  }

  export type AppUserModelCreateNestedOneWithoutChatRecordsInput = {
    create?: XOR<AppUserModelCreateWithoutChatRecordsInput, AppUserModelUncheckedCreateWithoutChatRecordsInput>
    connectOrCreate?: AppUserModelCreateOrConnectWithoutChatRecordsInput
    connect?: AppUserModelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AppUserModelUpdateOneRequiredWithoutChatRecordsNestedInput = {
    create?: XOR<AppUserModelCreateWithoutChatRecordsInput, AppUserModelUncheckedCreateWithoutChatRecordsInput>
    connectOrCreate?: AppUserModelCreateOrConnectWithoutChatRecordsInput
    upsert?: AppUserModelUpsertWithoutChatRecordsInput
    connect?: AppUserModelWhereUniqueInput
    update?: XOR<XOR<AppUserModelUpdateToOneWithWhereWithoutChatRecordsInput, AppUserModelUpdateWithoutChatRecordsInput>, AppUserModelUncheckedUpdateWithoutChatRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AppUserModelCreateWithoutAppuserInput = {
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    model: AppModelCreateNestedOneWithoutUsersInput
    chatRecords?: ChatRecordCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelUncheckedCreateWithoutAppuserInput = {
    modelId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    chatRecords?: ChatRecordUncheckedCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelCreateOrConnectWithoutAppuserInput = {
    where: AppUserModelWhereUniqueInput
    create: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput>
  }

  export type AppUserModelCreateManyAppuserInputEnvelope = {
    data: AppUserModelCreateManyAppuserInput | AppUserModelCreateManyAppuserInput[]
    skipDuplicates?: boolean
  }

  export type AppModelCreateWithoutCreatorInput = {
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    users?: AppUserModelCreateNestedManyWithoutModelInput
  }

  export type AppModelUncheckedCreateWithoutCreatorInput = {
    modelId?: number
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    users?: AppUserModelUncheckedCreateNestedManyWithoutModelInput
  }

  export type AppModelCreateOrConnectWithoutCreatorInput = {
    where: AppModelWhereUniqueInput
    create: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput>
  }

  export type AppModelCreateManyCreatorInputEnvelope = {
    data: AppModelCreateManyCreatorInput | AppModelCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AppUserModelUpsertWithWhereUniqueWithoutAppuserInput = {
    where: AppUserModelWhereUniqueInput
    update: XOR<AppUserModelUpdateWithoutAppuserInput, AppUserModelUncheckedUpdateWithoutAppuserInput>
    create: XOR<AppUserModelCreateWithoutAppuserInput, AppUserModelUncheckedCreateWithoutAppuserInput>
  }

  export type AppUserModelUpdateWithWhereUniqueWithoutAppuserInput = {
    where: AppUserModelWhereUniqueInput
    data: XOR<AppUserModelUpdateWithoutAppuserInput, AppUserModelUncheckedUpdateWithoutAppuserInput>
  }

  export type AppUserModelUpdateManyWithWhereWithoutAppuserInput = {
    where: AppUserModelScalarWhereInput
    data: XOR<AppUserModelUpdateManyMutationInput, AppUserModelUncheckedUpdateManyWithoutAppuserInput>
  }

  export type AppUserModelScalarWhereInput = {
    AND?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
    OR?: AppUserModelScalarWhereInput[]
    NOT?: AppUserModelScalarWhereInput | AppUserModelScalarWhereInput[]
    userId?: IntFilter<"AppUserModel"> | number
    modelId?: IntFilter<"AppUserModel"> | number
    isPinned?: BoolNullableFilter<"AppUserModel"> | boolean | null
    updatedAt?: DateTimeNullableFilter<"AppUserModel"> | Date | string | null
  }

  export type AppModelUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AppModelWhereUniqueInput
    update: XOR<AppModelUpdateWithoutCreatorInput, AppModelUncheckedUpdateWithoutCreatorInput>
    create: XOR<AppModelCreateWithoutCreatorInput, AppModelUncheckedCreateWithoutCreatorInput>
  }

  export type AppModelUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AppModelWhereUniqueInput
    data: XOR<AppModelUpdateWithoutCreatorInput, AppModelUncheckedUpdateWithoutCreatorInput>
  }

  export type AppModelUpdateManyWithWhereWithoutCreatorInput = {
    where: AppModelScalarWhereInput
    data: XOR<AppModelUpdateManyMutationInput, AppModelUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AppModelScalarWhereInput = {
    AND?: AppModelScalarWhereInput | AppModelScalarWhereInput[]
    OR?: AppModelScalarWhereInput[]
    NOT?: AppModelScalarWhereInput | AppModelScalarWhereInput[]
    modelId?: IntFilter<"AppModel"> | number
    modelImage?: StringNullableFilter<"AppModel"> | string | null
    modelName?: StringNullableFilter<"AppModel"> | string | null
    modelDescription?: StringNullableFilter<"AppModel"> | string | null
    introduce?: StringNullableFilter<"AppModel"> | string | null
    modelQaCount?: IntNullableFilter<"AppModel"> | number | null
    sound?: IntNullableFilter<"AppModel"> | number | null
    language?: IntNullableFilter<"AppModel"> | number | null
    prologue?: StringNullableFilter<"AppModel"> | string | null
    isPublic?: IntNullableFilter<"AppModel"> | number | null
    type?: StringNullableFilter<"AppModel"> | string | null
    tags?: StringNullableFilter<"AppModel"> | string | null
    enableBackground?: BoolFilter<"AppModel"> | boolean
    backgroundImage?: StringNullableFilter<"AppModel"> | string | null
    isAiImage?: BoolFilter<"AppModel"> | boolean
    creatorId?: IntFilter<"AppModel"> | number
    creatorName?: StringNullableFilter<"AppModel"> | string | null
    createdAt?: DateTimeFilter<"AppModel"> | Date | string
    updatedAt?: DateTimeFilter<"AppModel"> | Date | string
    delStatus?: StringNullableFilter<"AppModel"> | string | null
  }

  export type AppUserCreateWithoutCreatedModelsInput = {
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    models?: AppUserModelCreateNestedManyWithoutAppuserInput
  }

  export type AppUserUncheckedCreateWithoutCreatedModelsInput = {
    userId?: number
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    models?: AppUserModelUncheckedCreateNestedManyWithoutAppuserInput
  }

  export type AppUserCreateOrConnectWithoutCreatedModelsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutCreatedModelsInput, AppUserUncheckedCreateWithoutCreatedModelsInput>
  }

  export type AppUserModelCreateWithoutModelInput = {
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    appuser: AppUserCreateNestedOneWithoutModelsInput
    chatRecords?: ChatRecordCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelUncheckedCreateWithoutModelInput = {
    userId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    chatRecords?: ChatRecordUncheckedCreateNestedManyWithoutUserModelInput
  }

  export type AppUserModelCreateOrConnectWithoutModelInput = {
    where: AppUserModelWhereUniqueInput
    create: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput>
  }

  export type AppUserModelCreateManyModelInputEnvelope = {
    data: AppUserModelCreateManyModelInput | AppUserModelCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type AppUserUpsertWithoutCreatedModelsInput = {
    update: XOR<AppUserUpdateWithoutCreatedModelsInput, AppUserUncheckedUpdateWithoutCreatedModelsInput>
    create: XOR<AppUserCreateWithoutCreatedModelsInput, AppUserUncheckedCreateWithoutCreatedModelsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutCreatedModelsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutCreatedModelsInput, AppUserUncheckedUpdateWithoutCreatedModelsInput>
  }

  export type AppUserUpdateWithoutCreatedModelsInput = {
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    models?: AppUserModelUpdateManyWithoutAppuserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutCreatedModelsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    models?: AppUserModelUncheckedUpdateManyWithoutAppuserNestedInput
  }

  export type AppUserModelUpsertWithWhereUniqueWithoutModelInput = {
    where: AppUserModelWhereUniqueInput
    update: XOR<AppUserModelUpdateWithoutModelInput, AppUserModelUncheckedUpdateWithoutModelInput>
    create: XOR<AppUserModelCreateWithoutModelInput, AppUserModelUncheckedCreateWithoutModelInput>
  }

  export type AppUserModelUpdateWithWhereUniqueWithoutModelInput = {
    where: AppUserModelWhereUniqueInput
    data: XOR<AppUserModelUpdateWithoutModelInput, AppUserModelUncheckedUpdateWithoutModelInput>
  }

  export type AppUserModelUpdateManyWithWhereWithoutModelInput = {
    where: AppUserModelScalarWhereInput
    data: XOR<AppUserModelUpdateManyMutationInput, AppUserModelUncheckedUpdateManyWithoutModelInput>
  }

  export type AppUserCreateWithoutModelsInput = {
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    createdModels?: AppModelCreateNestedManyWithoutCreatorInput
  }

  export type AppUserUncheckedCreateWithoutModelsInput = {
    userId?: number
    userAvatar?: string | null
    userGender?: string | null
    phone?: string | null
    status?: string | null
    nickName?: string | null
    code?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    createdModels?: AppModelUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type AppUserCreateOrConnectWithoutModelsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutModelsInput, AppUserUncheckedCreateWithoutModelsInput>
  }

  export type AppModelCreateWithoutUsersInput = {
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
    creator: AppUserCreateNestedOneWithoutCreatedModelsInput
  }

  export type AppModelUncheckedCreateWithoutUsersInput = {
    modelId?: number
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorId: number
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
  }

  export type AppModelCreateOrConnectWithoutUsersInput = {
    where: AppModelWhereUniqueInput
    create: XOR<AppModelCreateWithoutUsersInput, AppModelUncheckedCreateWithoutUsersInput>
  }

  export type ChatRecordCreateWithoutUserModelInput = {
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
  }

  export type ChatRecordUncheckedCreateWithoutUserModelInput = {
    id?: number
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
  }

  export type ChatRecordCreateOrConnectWithoutUserModelInput = {
    where: ChatRecordWhereUniqueInput
    create: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput>
  }

  export type ChatRecordCreateManyUserModelInputEnvelope = {
    data: ChatRecordCreateManyUserModelInput | ChatRecordCreateManyUserModelInput[]
    skipDuplicates?: boolean
  }

  export type AppUserUpsertWithoutModelsInput = {
    update: XOR<AppUserUpdateWithoutModelsInput, AppUserUncheckedUpdateWithoutModelsInput>
    create: XOR<AppUserCreateWithoutModelsInput, AppUserUncheckedCreateWithoutModelsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutModelsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutModelsInput, AppUserUncheckedUpdateWithoutModelsInput>
  }

  export type AppUserUpdateWithoutModelsInput = {
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdModels?: AppModelUpdateManyWithoutCreatorNestedInput
  }

  export type AppUserUncheckedUpdateWithoutModelsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userGender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdModels?: AppModelUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AppModelUpsertWithoutUsersInput = {
    update: XOR<AppModelUpdateWithoutUsersInput, AppModelUncheckedUpdateWithoutUsersInput>
    create: XOR<AppModelCreateWithoutUsersInput, AppModelUncheckedCreateWithoutUsersInput>
    where?: AppModelWhereInput
  }

  export type AppModelUpdateToOneWithWhereWithoutUsersInput = {
    where?: AppModelWhereInput
    data: XOR<AppModelUpdateWithoutUsersInput, AppModelUncheckedUpdateWithoutUsersInput>
  }

  export type AppModelUpdateWithoutUsersInput = {
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: AppUserUpdateOneRequiredWithoutCreatedModelsNestedInput
  }

  export type AppModelUncheckedUpdateWithoutUsersInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRecordUpsertWithWhereUniqueWithoutUserModelInput = {
    where: ChatRecordWhereUniqueInput
    update: XOR<ChatRecordUpdateWithoutUserModelInput, ChatRecordUncheckedUpdateWithoutUserModelInput>
    create: XOR<ChatRecordCreateWithoutUserModelInput, ChatRecordUncheckedCreateWithoutUserModelInput>
  }

  export type ChatRecordUpdateWithWhereUniqueWithoutUserModelInput = {
    where: ChatRecordWhereUniqueInput
    data: XOR<ChatRecordUpdateWithoutUserModelInput, ChatRecordUncheckedUpdateWithoutUserModelInput>
  }

  export type ChatRecordUpdateManyWithWhereWithoutUserModelInput = {
    where: ChatRecordScalarWhereInput
    data: XOR<ChatRecordUpdateManyMutationInput, ChatRecordUncheckedUpdateManyWithoutUserModelInput>
  }

  export type ChatRecordScalarWhereInput = {
    AND?: ChatRecordScalarWhereInput | ChatRecordScalarWhereInput[]
    OR?: ChatRecordScalarWhereInput[]
    NOT?: ChatRecordScalarWhereInput | ChatRecordScalarWhereInput[]
    id?: IntFilter<"ChatRecord"> | number
    userModelUserId?: IntFilter<"ChatRecord"> | number
    userModelModelId?: IntFilter<"ChatRecord"> | number
    message?: StringFilter<"ChatRecord"> | string
    role?: StringFilter<"ChatRecord"> | string
    createdAt?: DateTimeFilter<"ChatRecord"> | Date | string
    delStatus?: StringNullableFilter<"ChatRecord"> | string | null
  }

  export type AppUserModelCreateWithoutChatRecordsInput = {
    isPinned?: boolean | null
    updatedAt?: Date | string | null
    appuser: AppUserCreateNestedOneWithoutModelsInput
    model: AppModelCreateNestedOneWithoutUsersInput
  }

  export type AppUserModelUncheckedCreateWithoutChatRecordsInput = {
    userId: number
    modelId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
  }

  export type AppUserModelCreateOrConnectWithoutChatRecordsInput = {
    where: AppUserModelWhereUniqueInput
    create: XOR<AppUserModelCreateWithoutChatRecordsInput, AppUserModelUncheckedCreateWithoutChatRecordsInput>
  }

  export type AppUserModelUpsertWithoutChatRecordsInput = {
    update: XOR<AppUserModelUpdateWithoutChatRecordsInput, AppUserModelUncheckedUpdateWithoutChatRecordsInput>
    create: XOR<AppUserModelCreateWithoutChatRecordsInput, AppUserModelUncheckedCreateWithoutChatRecordsInput>
    where?: AppUserModelWhereInput
  }

  export type AppUserModelUpdateToOneWithWhereWithoutChatRecordsInput = {
    where?: AppUserModelWhereInput
    data: XOR<AppUserModelUpdateWithoutChatRecordsInput, AppUserModelUncheckedUpdateWithoutChatRecordsInput>
  }

  export type AppUserModelUpdateWithoutChatRecordsInput = {
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appuser?: AppUserUpdateOneRequiredWithoutModelsNestedInput
    model?: AppModelUpdateOneRequiredWithoutUsersNestedInput
  }

  export type AppUserModelUncheckedUpdateWithoutChatRecordsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUserModelCreateManyAppuserInput = {
    modelId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
  }

  export type AppModelCreateManyCreatorInput = {
    modelId?: number
    modelImage?: string | null
    modelName?: string | null
    modelDescription?: string | null
    introduce?: string | null
    modelQaCount?: number | null
    sound?: number | null
    language?: number | null
    prologue?: string | null
    isPublic?: number | null
    type?: string | null
    tags?: string | null
    enableBackground?: boolean
    backgroundImage?: string | null
    isAiImage?: boolean
    creatorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delStatus?: string | null
  }

  export type AppUserModelUpdateWithoutAppuserInput = {
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: AppModelUpdateOneRequiredWithoutUsersNestedInput
    chatRecords?: ChatRecordUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelUncheckedUpdateWithoutAppuserInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRecords?: ChatRecordUncheckedUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelUncheckedUpdateManyWithoutAppuserInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppModelUpdateWithoutCreatorInput = {
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    users?: AppUserModelUpdateManyWithoutModelNestedInput
  }

  export type AppModelUncheckedUpdateWithoutCreatorInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
    users?: AppUserModelUncheckedUpdateManyWithoutModelNestedInput
  }

  export type AppModelUncheckedUpdateManyWithoutCreatorInput = {
    modelId?: IntFieldUpdateOperationsInput | number
    modelImage?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    modelDescription?: NullableStringFieldUpdateOperationsInput | string | null
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    modelQaCount?: NullableIntFieldUpdateOperationsInput | number | null
    sound?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableIntFieldUpdateOperationsInput | number | null
    prologue?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    enableBackground?: BoolFieldUpdateOperationsInput | boolean
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    isAiImage?: BoolFieldUpdateOperationsInput | boolean
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppUserModelCreateManyModelInput = {
    userId: number
    isPinned?: boolean | null
    updatedAt?: Date | string | null
  }

  export type AppUserModelUpdateWithoutModelInput = {
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appuser?: AppUserUpdateOneRequiredWithoutModelsNestedInput
    chatRecords?: ChatRecordUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelUncheckedUpdateWithoutModelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRecords?: ChatRecordUncheckedUpdateManyWithoutUserModelNestedInput
  }

  export type AppUserModelUncheckedUpdateManyWithoutModelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRecordCreateManyUserModelInput = {
    id?: number
    message: string
    role: string
    createdAt?: Date | string
    delStatus?: string | null
  }

  export type ChatRecordUpdateWithoutUserModelInput = {
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRecordUncheckedUpdateWithoutUserModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRecordUncheckedUpdateManyWithoutUserModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AppUserCountOutputTypeDefaultArgs instead
     */
    export type AppUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppModelCountOutputTypeDefaultArgs instead
     */
    export type AppModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppUserModelCountOutputTypeDefaultArgs instead
     */
    export type AppUserModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppUserDefaultArgs instead
     */
    export type AppUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppModelDefaultArgs instead
     */
    export type AppModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppUserModelDefaultArgs instead
     */
    export type AppUserModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRecordDefaultArgs instead
     */
    export type ChatRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRecordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}