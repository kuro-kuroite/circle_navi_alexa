import fs from 'fs';
import listEvents from './list_events';
import authorize from './authorize';

const CLIENT_SECRET_PATH = 'client_secret.json';

const oauth_authorize = () => {
  // Load client secrets from a local file.
  fs.readFile(CLIENT_SECRET_PATH, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse(content).installed, listEvents);
  });
};

export default oauth_authorize;
