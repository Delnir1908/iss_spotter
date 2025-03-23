const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('42', (error, data) => {
  if (error) {
    console.log(`It didn't work! `, error.message);
    return;
  }

  console.log(`It worked! Your geolocation: {latitude: ${data.latitude}, longitude: ${data.longitude}`);
});
