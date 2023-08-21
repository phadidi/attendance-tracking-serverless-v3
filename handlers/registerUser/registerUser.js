const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const usersTable = process.env.usersTable;
const tempLoginTable = process.env.tempLoginTable;

// create a template user as teacher or student, then add default courses
// generate uuids [v4] or save unique emails
// auto-confirm users in dev, scrap that for prod
module.exports.handler = async (event) => {
  console.log('loginUser event:', event);
  //TODO: change this to not pass in ID
  if (!event.body)
    return utils.createResponse(400, {
      message: 'Missing event body',
    });
  let body = JSON.parse(event.body);
  if (!body.email || !body.password || !body.role)
    return utils.createResponse(400, {
      message:
        'Missing or incorrect username, password and/or student/teacher role',
    });
  let email = body.email;
  let password = body.password;
  //TODO: add password validation
  let role = body.role;
  if (role !== 'student' && role !== 'teacher')
    return utils.createResponse(400, {
      message: 'User role must be student or teacher',
    });
  if (!body.firstName || !body.lastName)
    return utils.createResponse(400, {
      message: "User's full name is required",
    });
  let firstName = body.firstName;
  let lastName = body.lastName;
  const paramsUser = {
    ID: email,
    role: role,
    firstName: firstName,
    lastName: lastName,
  };
  //TODO: phase this into Cognito user pools
  const paramsLogin = {
    ID: email,
    password: password,
  };
  const newUserTemp = await Dynamo.write(paramsLogin, tempLoginTable).catch(
    (err) => {
      console.log('createUser DynamoDB Error:', err);
      return null;
    }
  );
  if (!newUserTemp)
    return utils.createResponse(400, {
      message: 'Failed to save user login info',
    });
  const newUser = await Dynamo.write(paramsUser, usersTable).catch((err) => {
    console.log('createUser DynamoDB Error:', err);
    return null;
  });
  return utils.createResponse(200, { newUser });
};
