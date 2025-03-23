const needle = require("needle");

needle.get('https://ipwho.is/42', (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.log(`Error Code: `, response.statusCode);
    return;
  }

  console.log(body);
  console.log(Array.isArray(body));
  console.log(body.success);
});
//just want to prove my point to Larry AI that the returned body from needle is already an object and JSON.parse() it again seems redundant