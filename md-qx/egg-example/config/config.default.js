/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574210803656_2383';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql:{
      client:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"1705b-md"
      },
      app:true,
      agent:false
    },
    security:{
      csrf:false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
