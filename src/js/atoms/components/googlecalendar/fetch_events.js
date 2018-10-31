import GoogleOAuth2AbstractOAuth2Adapter from '../oauth/GoogleOAuth2AbstractOAuth2Adapter';
import JSONFileStrategy from '../strategy/JSONFileStrategy';
import ReadlineStrategy from '../strategy/ReadlineStrategy';
import StdinStrategy from '../strategy/StdinStrategy';
import StdoutStrategy from '../strategy/StdoutStrategy';
import listEvents from './list_events';

export default async function main() {
  const oauth = new GoogleOAuth2AbstractOAuth2Adapter(
    new JSONFileStrategy('client_secret.json'),
    new ReadlineStrategy(new StdinStrategy(), new StdoutStrategy()),
    new JSONFileStrategy('token.json'),
    ['calendar']
  );
  console.log(await oauth.authorize(listEvents));
}
