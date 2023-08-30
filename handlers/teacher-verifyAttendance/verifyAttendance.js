const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const fetchAttendance = require('../../common/fetchAttendance').fetchAttendance;
const attendanceTable = process.env.attendanceTable;
module.exports.handler = async (event) => {
  //Check if an attendance record exists
  //Return a professor approval or rejection of an attendance, and update the table accordingly
  if (!event.body)
    return utils.createResponse(400, {
      message: 'Missing event body',
    });

  let body = JSON.parse(event.body);
  if (
    !body.attended ||
    (body.attended !== 'verified' && body.attended !== 'declined')
  )
    return utils.createResponse(400, {
      message: 'Missing or incorrect attendance status',
    });
  const attendance = await fetchAttendance(
    body.email,
    body.courseSection,
    body.date
  );
  if (!attendance)
    return utils.createResponse(400, {
      message:
        'Missing/empty attendance parameters, or no such attendance exists',
    });
  console.log('fetched Attendance:', attendance);
  const ID = body.email + '|' + body.courseSection + '|' + body.date;

  // TODO: implement the operation below with the correct parameters, add validation operations
  // Check if there is an attendance for the provided section + date, and if it can be updated
  // Update the table accordingly
  const res = await Dynamo.update({
    TableName: attendanceTable,
    primaryKey: 'ID',
    primaryKeyValue: ID,
    updateKey: 'attended',
    updateValue: body.attended, // the attended field should be an enum ['unmarked', 'marked', 'verified', 'rejected']
  });
  if (!res)
    return utils.createResponse(400, {
      message: 'Missing or empty update parameters',
    });
  return utils.createResponse(200, {
    message: 'This feature requires validation',
    ...res,
  });
};
