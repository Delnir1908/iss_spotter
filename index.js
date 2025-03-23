const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.80.48.124', (error, pas) => {
//   if (error) {
//     console.log(`It didn't work! `, error.message);
//     return;
//   }

//   console.log(`It worked! Your geolocation: {latitude: ${pas.latitude}, longitude: ${pas.longitude}}`);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, pas) => {
//   if (error) {
//     console.log(`It didn't work! `, error.message);
//     return;
//   }

//   console.log(`It worked!`, JSON.stringify(pas, null, 2));
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let i = 0; i < passTimes.length; i++) {
    console.log(`Next pass at ${Date(passTimes[i].risetime)} for ${passTimes[i].duration} seconds!`);
  }
});

