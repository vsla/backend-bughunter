const { Pool } = require('pg');
// your credentials
DATABASE_URL = 'postgres://postgres:postgres@127.0.0.1:5432/bugbackend';

const pool = new Pool({
  connectionString: DATABASE_URL
});

// a generic query, that executes all queries you send to it
function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function queryValues(text, values) {
  return new Promise((resolve, reject) => {
    pool
      .query(text, values)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err)
        reject(err);
      });
  });
}

module.exports = {
  query,
  queryValues
};