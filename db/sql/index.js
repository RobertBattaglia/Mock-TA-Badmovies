const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

module.exports = mysql.createConnection(mysqlConfig);

module.exports.connect(err => {
  if (err) {
    throw console.log(err);
  } else {
    console.log('Connected to MySQL db...');
  }
});
