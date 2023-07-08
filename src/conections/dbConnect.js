const mysql = require('mysql');
const dataConection = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});
module.exports = dataConection;