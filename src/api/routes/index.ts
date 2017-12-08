import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import user from './users';

export default () => compose([
  user(),
]);
