export const environment = {
  production: false,
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
};
