export type MethodsEnum = 'get' | 'post' | 'delete' | 'patch' | 'put';

export const MethodsEnum = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
} as const;
