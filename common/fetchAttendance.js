//TODO: implement this to cut duplicate code from student/teacher lambdas
const Dynamo = require('./Dynamo');
const attendanceTable = process.env.attendanceTable;
const fetchAttendance = async (email, courseSection, date) => {
  if (
    !email ||
    email.empty ||
    !courseSection ||
    courseSection.empty ||
    !date ||
    date.empty
  )
    return null;
  const attendance = await Dynamo.get(
    email + '|' + courseSection + '|' + date,
    attendanceTable
  ).catch((err) => {
    console.log('fetchAttendance DynamoDB Error:', err);
    return null;
  });
  console.log('fetchAttendance output:', attendance);
  return attendance;
};

module.exports = { fetchAttendance };
