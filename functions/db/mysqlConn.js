const mysql = require('mysql');

const connectionName = process.env.INSTANCE_CONNECTION_NAME || 'test-project-44166:us-central1:root';
const dbUser = process.env.SQL_USER || 'root';
const dbPassword = process.env.SQL_PASSWORD || 'skdltm1303';
const dbName = process.env.SQL_NAME || 'test';
const host = '104.198.153.83';

let mysqlConfig = {
    connectionLimit: 1,
    user: dbUser,
    password: dbPassword,
    database: dbName,
};

// in order to connect sql from cloud functions socketPatth should be defined when the application on the production mode
if (process.env.NODE_ENV === 'production') {
    mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
} else {
    mysqlConfig.host = host;
}

const pool = mysql.createPool(mysqlConfig);


module.exports = pool;


