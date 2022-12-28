export const environment = {
  production: true,
  apiQhatu: {
    baseUrl: 'http://localhost:2705/api/v1/',
    signInPath: 'security/signIn',
    signUpPath: 'security/signUp',
    getRoles: 'security/getRoles',
    getProducts: 'product',
  },
  webStorage: {
    tokenKey: 'QHATU_TOKEN',
    userKey: 'QHATU_USER',
  },
  jwtConfig: {
    keyValueHeader: 'Authorization',
    keyToken: 'Bearer',
  },
  recaptchaConfig: {
    keyWeb: '6Lei87EjAAAAALs93Hn8dS5lXNWqbrPneeJ7KHdH',
    keyApi: '6Lei87EjAAAAAJAK3J3Sj2DHRXVjoayjh-6T2aCc',
  },
};
