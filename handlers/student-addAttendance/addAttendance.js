const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const fetchAttendance = require('../../common/fetchAttendance').fetchAttendance;
const usersTable = process.env.usersTable;
const attendanceTable = process.env.attendanceTable;
module.exports.handler = async (event) => {
  //Check if a student is taking a course section, and the attendance isn't previously marked/verified/rejected

  if (!event.body)
    return utils.createResponse(400, {
      message: 'Missing event body',
    });

  let body = JSON.parse(event.body);
  /*const attendance = await Dynamo.get(
    body.email + '|' + body.courseSection + '|' + body.date,
    attendanceTable
  ).catch((err) => {
    console.log('addAttendance DynamoDB Error:', err);
    return null;
  });*/
  const attendance = await fetchAttendance(
    body.email,
    body.courseSection,
    body.date
  );
  if (!attendance)
    return utils.createResponse(400, {
      message: 'Missing or empty attendance parameters',
    });
  console.log('fetched Attendance:', attendance);

  // TODO: implement the operation below with the correct parameters
  // Check if there is an attendance for the provided section + date, and if it can be updated
  // Update the table accordingly
  //   const res = await Dynamo.update({
  //     attendanceTable,
  //     primaryKey: 'ID',
  //     primaryKeyValue: 'your email + course section + date?',
  //     updateKey: 'attended',
  //     updateValue: 'marked',
  //   });
  return utils.createResponse(200, {
    message: 'This feature is still in development',
    ...attendance,
  });
};
