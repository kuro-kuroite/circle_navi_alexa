import GoogleOAuth2 from './GoogleOAuth2';

// implements AbstractOAuth2
export default class GoogleOAuth2AbstractOAuth2Adapter {
  constructor(
    clientSecretStrategy,
    authorizateStrategy,
    accessTokenStrategy,
    servises = ['calendar']
  ) {
    this.adaptee = new GoogleOAuth2(clientSecretStrategy, servises);
    this.authorizateStrategy = authorizateStrategy;
    this.accessTokenStrategy = accessTokenStrategy;
  }

  // NOTE: OAuth2 は，認可に基づく認証を行うため
  authorize(callback) {
    // TODO: Promise 化する
    console.log('werty');
    this.accessTokenStrategy.getStrategy((err, token) => {
      console.log('rew  qrwqe');
      console.log(token);
      if (err) {
        console.log('afeafd');
        return this.adaptee.setAccessToken(
          this.authorizateStrategy,
          this.accessTokenStrategy
        );
        // TODO: refresh token に対応する
        // oauth2client.on('tokens', (tokens) => {
        //   if (tokens.refresh_token) {
        //     // store the refresh_token in my database!
        //     console.log(tokens.refresh_token);
        //   }
        //   console.log(tokens.access_token);
        // });
      }
      this.adaptee.setCredentials(token);
      return callback(this.adaptee);
    });
  }
}
