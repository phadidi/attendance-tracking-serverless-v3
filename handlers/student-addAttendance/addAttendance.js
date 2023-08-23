const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const usersTable = process.env.usersTable;
const attendanceTable = process.env.attendanceTable; //TODO: provision & implement this table
module.exports.handler = async (event) => {
  //Check if a student is taking a course section, and the attendance isn't previously marked/verified/rejected
  //Update the table accordingly
  if (!event.body)
    return utils.createResponse(400, {
      message: 'Missing event body',
    });
  let body = JSON.parse(event.body);
  //   const res = await Dynamo.update({
  //     attendanceTable,
  //     primaryKey: 'ID',
  //     primaryKeyValue: 'your email + course section + date?',
  //     updateKey: 'attended',
  //     updateValue: 'marked',
  //   });
  return utils.createResponse(200, {
    message: 'This feature is still in development',
  });
};
