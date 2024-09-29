import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const configFileName = {
  development: 'dev',
  test: 'test',
  production: 'prod',
};

const env = process.env.NODE_ENV || 'development';

console.log('环境',env);

export default () => {
  return yaml.load(readFileSync(join(__dirname, `./${configFileName[env]}.yml`), 'utf8')) as Record<string, any>;
};