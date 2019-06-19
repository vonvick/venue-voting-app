require('dotenv').config({ silent: true });

export default {
  apiUrl: 'https://api.foursquare.com/v2/search/recommendations',
  clientId: process.env.REACT_APP_CLIENT_ID,
  secretKey: process.env.REACT_APP_CLIENT_SECRET,
  venueDetailsUrl: 'https://api.foursquare.com/v2/venues'
};
