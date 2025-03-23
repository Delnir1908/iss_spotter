const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.80.48.124', (error, data) => {
//   if (error) {
//     console.log(`It didn't work! `, error.message);
//     return;
//   }

//   console.log(`It worked! Your geolocation: {latitude: ${data.latitude}, longitude: ${data.longitude}}`);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log(`It didn't work! `, error.message);
//     return;
//   }

//   console.log(`It worked!`, JSON.stringify(data, null, 2));
// });