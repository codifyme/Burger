const mysql = require('mysql');
var connection;

const dotenv = require('dotenv');
dotenv.config();
const inquirer = require('inquirer');

const MYSQL_PASS = process.env.MYSQL_PASS;

if (process.env.JAWSDB_URL) {
  //Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //Database is local
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MYSQL_PASS',
    database: 'burgers_db'
  });
}
//Make the connection to MYSQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  } else {
    console.log(
      'Connected to MySQL database as id ' + connection.threadId + '\n\n'
    );
  }
});
//Export connection for ORM use
module.exports = connection;

// connection.connect(function(error) {
//   if (!error) {
//     console.error('error connecting:' + error.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;
