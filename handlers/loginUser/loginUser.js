const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const usersTable = process.env.usersTable;
const tempLoginTable = process.env.tempLoginTable;

module.exports.handler = async (event) => {
  console.log('loginUser event:', event);
  //TODO: change this to not pass in ID
  if (!event.body)
    return utils.createResponse(400, {
      message: 'Missing event body',
    });
  let body = JSON.parse(event.body);
  if (!body.email || !body.password)
    return utils.createResponse(400, {
      message: 'Missing or incorrect username and/or password',
    });
  let email = body.email;
  let password = body.password;
  //TODO: add password validation to the query
  //for now, fetch from temp table ==> eventually, change validation to Cognito User Pools
  const userValidation = await Dynamo.get(email, tempLoginTable).catch(
    (err) => {
      console.log('loginUser DynamoDB Error:', err);
      return null;
    }
  );
  if (!userValidation)
    return utils.createResponse(400, {
      message: `Error: failed to retrieve tempLoginTable row with ID '${userId}'`,
    });
  if (userValidation.password !== password)
    return utils.createResponse(400, {
      message: `Incorrect password`,
    });
  const user = await Dynamo.get(email, usersTable).catch((err) => {
    console.log('loginUser DynamoDB Error:', err);
    return null;
  });
  if (!user)
    return utils.createResponse(400, {
      message: `Error: failed to retrieve usersTable row with ID '${userId}'`,
    });
  return utils.createResponse(200, { user });
  //TODO: pass in a username/password combo and get a response accordingly
  // check if a row exists in the users table
  // if a matching row exists, return the login response
  // if username/password is incorrect, return the failed response
};
