const database = require('../databaseHelper');

const User = {
  async createTable(req,res){
    try {
      console.log('oi')
      const query = "CREATE TABLE users (name varchar)"
      const response = await database.query(query);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  },
  async readAll(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  }
};

module.exports = User;