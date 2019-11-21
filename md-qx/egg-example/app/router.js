'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/list', controller.user.list);
  router.post('/api/login', controller.user.login);
  //请求权限
  router.get('/api/menu', controller.user.menu);
  // router.get('/api/registry', controller.user.registry);
};
