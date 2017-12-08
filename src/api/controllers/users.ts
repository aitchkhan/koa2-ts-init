import { Context } from 'koa';
import { getUsers, getFirstUser } from '../../lib/services/users';

export const get = (ctx: Context) => {
  ctx.body = { users: getUsers(), time: Date.now() };
};

export const post = (ctx: Context) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT]: /user';
};

export const getFirst = (ctx: Context) => {
  ctx.body = { users: getFirstUser(), time: Date.now() };
};
