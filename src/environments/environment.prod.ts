export const environment = {
  production: true,
  apiQhatu: {
    baseUrl: 'http://localhost:2705/api/v1/',
    signInPath: 'security/signIn',
    signUpPath: 'security/signUp',
    getRoles: 'security/getRoles',
  },
  webStorage: {
    tokenKey: 'QHATU_TOKEN',
    userKey: 'QHATU_USER',
  },
  jwtConfig: {
    keyValueHeader: 'Authorization',
    keyToken: 'Bearer',
  },
  reCaptchaConfig: {
    keyWebSite: '6LfDuLEjAAAAAId6A5mb4NLCsK9IooZrInPpuccV',
    keySecret: '6LfDuLEjAAAAALfEXjh4KJvQFxjJp5hOoAtrs0Gp',
  },
};
