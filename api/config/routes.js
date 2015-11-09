export const routes = [{
method: 'GET',
  path: '/',
  handler: {
    view: 'index',
  },
}, {
  method: 'GET',
  path: '/static/{param*}',
  handler: {
    directory: {
      path: 'web/static',
    },
  },
}];

