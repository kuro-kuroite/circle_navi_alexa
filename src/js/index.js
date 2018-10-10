import '@babel/polyfill';

import oauth_authorize from './atoms/components/googlecalendar/oauth_client';

import authorize, {
  listEvents
} from './atoms/components/googlecalendar/googlecalendar';

oauth_authorize();
