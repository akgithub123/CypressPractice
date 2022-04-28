/// <reference types="Cypress"/>

import { getDefaultUser } from '../config/auth';
const { getEnv, isLocalEnv } = require("../project_det/envUtils");
import './login';

before(()=>{
    if(!isLocalEnv()){
        cy.getCookie('project-cookies').then((exe)=>{
             if(exe){
                cy.login()
            }
        })
    }
})
