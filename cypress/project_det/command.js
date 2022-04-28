///<reference types="Cypress"/>
const envConfig = require('../config/envConf');
const cypress = require('cypress');

async function openTests(){
    const { RUN_AGAINST } = process.env;
    console.log(RUN_AGAINST)
    const { config, env }= envConfig[RUN_AGAINST];
    
cypress.open({
    config: {
        ...config,
    },
    // env: {
    //     ...env,
    // },
  });
}
module.exports = {
  openTests,
};