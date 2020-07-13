/**
 * @file app.js
 * @description An example for using MySQL in a NodeJS applications
 * @author HalloSouf
 */

// Require the MySQL NPM package and our config file
const { createConnection } = require('mysql');
const config = require('./config.json');

// First we are going to prepare the MySQL connection with our credentials
let con = createConnection(config.mysql);

// Second we are going to connect to our MySQL database and will test on errors
con.connect(err => {
    if (err) return console.log(err);
    console.log(`MySQL is connected!`);
});


/**
 * After connecting with our MySQL database, you can now execute SQL queries
 */

// SELECT query
con.query(`SELECT * FROM table_name`, (err, row) => {
    // Return if there is an error
    if (err) return console.log(err);

    // Console log the output if there is NO error
    console.log(row);
});

// INSERT query with prepared statements
con.query(`INSERT INTO(column1, column2, column3) VALUES(?, ?, ?)`, ['nodejs', 'mysql', 'test'], (err, row) => {
    // Reutrn if there is an error
    if (err) return console.log(err);
});

// DELETE query
con.query(`DELETE FROM table_name WHERE column1 = 'test'`, (err, row) => {
    // Return if there is an error
    if (err) return console.log(err);
});