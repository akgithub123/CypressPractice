export const getEnv = () => Cypress.env().RUN_AGAINST;

export const isLocalEnv = () => getEnv() === 'local';



