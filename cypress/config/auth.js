///<reference types="Cypress"/>

import { flow, get } from "lodash/fp"

const { getEnv } = require("../project_det/envUtils")

const qaUserConfig = {
    defaultUser: {
        email:"anay.patil@yopmail.com",
        password:"anay.patil",
    }

}
const devUserConfig = {
    defaultUser: {
        email:"",
        password:"",

    }
}

const getEnvUserConfig = () => {
    const envi = getEnv()
    switch (envi){
        case 'QA':
            return qaUserConfig;
        case 'dev':
            return devUserConfig;
        default:
            return {};
        
    }
}

export const getDefaultUser = flow(
    getEnvUserConfig,
    get('defaultUser')
);
    
