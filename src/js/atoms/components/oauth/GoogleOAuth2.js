import { google } from 'googleapis';

// NOTE: client secret の情報取得に「strategy method」を採用し,
//       取得方法(interface)を統一する
export default class GoogleOAuth2 extends google.auth.OAuth2 {
  constructor(clientSecretStrategy, servises = ['calendar']) {
    super('dummy', 'dummy', 'dummy');
    let client_id;
    let client_secret;
    let redirect_uris;
    clientSecretStrategy.getStrategy((err, clientSecret) => {
      client_id = clientSecret.installed.client_id;
      client_secret = clientSecret.installed.client_secret;
      redirect_uris = clientSecret.installed.redirect_uris;

      // HACK: super の属性を直接代入
      this._clientId = client_id;
      this._clientSecret = client_secret;
      this.redirectUri = redirect_uris[0];
      // TODO: 一括代入のやりかたを調べる
      this.clientId = client_id;
      this.clientSecret = client_secret;
      this.redirectUri = redirect_uris[0];
      const baseAccessTockenUri = 'https://www.googleapis.com/auth';
      this.uriOptions = {
        access_type: 'offline',
        scope: servises.map(servise => `${baseAccessTockenUri}/${servise}`)
      };
    });
  }

  setAccessToken(authorizateStrategy, accessTokenStrategy) {
    const authUrl = this.generateAuthUrl(this.uriOptions);
    // TODO: Webサイトのリンクにリダイレクトできる Alexa card にする
    console.log(`Authorize this app by visiting this url: ${authUrl}`);
    authorizateStrategy.strategy(code => {
      console.log('gefdafsad');
      console.log(code);
      this.getToken(code, (err, token) => {
        if (err) {
          return console.error('Error retrieving access token', err);
        }
        this.setCredentials(token);
        accessTokenStrategy.setStrategy(token);
        return token;
      });
    });
  }
}
