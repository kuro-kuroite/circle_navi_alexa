import { google } from 'googleapis';

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
const listEvents = auth => {
  const calendar = google.calendar('v3');
  calendar.events.list(
    {
      auth,
      calendarId: 'primary',

      timeMin: new Date(Date.parse('2018-07-16')).toISOString(),
      timeMax: new Date(Date.parse('2018-07-19')).toISOString(),

      singleEvents: true,
      orderBy: 'startTime'
    },
    (err, response) => {
      if (err) {
        console.log(`The API returned an error: ${err}`);
        return;
      }
      // HACK: API jsonの仕様変更
      const events = response.data.items;
      if (events.length === 0) {
        console.log('No upcoming events found.');
      } else {
        // stdout events
        console.log(events);
        console.log('upcoming events found.');
      }
    }
  );
};

export default listEvents;
