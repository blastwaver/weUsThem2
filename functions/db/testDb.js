const pool = require('./mysqlConn.js');
const csv = require('./csv/csv');

let testDb = {};

testDb.getAll = () => {
  return new Promise((resolve,reject) => {
    return resolve(csv);
  })
}

testDb.getOne = (name) => {
  return new Promise((resolve,reject) => {
    return resolve(csv[name]);
  })
}

testDb.createContact = (body) => {
  return new Promise((resolve,reject) => {
      const {email, name, content} = body;
      // return resolve(body);
      pool.query(`INSERT INTO contact (email, name, content) VALUES (?, ?, ?)`, [email, name, content], (err, results) => {
          if(err) {
              return reject(err);
          }
          return resolve(results);
      })
  });
}

module.exports = testDb;
