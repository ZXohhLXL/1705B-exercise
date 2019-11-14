'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/registry', controller.user.registry);
  router.get("/api/list",controller.user.list)
  router.post("/api/login",controller.user.login)
  //所有项
};
