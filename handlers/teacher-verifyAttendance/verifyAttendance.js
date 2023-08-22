const utils = require('../../common/utils');
const Dynamo = require('../../common/Dynamo');
const usersTable = process.env.usersTable;
// const attendanceTable = process.env.attendanceTable //TODO: provision & implement this table
module.exports.handler = async (event) => {
  //Check if a student has marked an attendance, and the professor matches the course section
  //Return a professor approval or rejection of an attendance, and update the table accordingly
};
