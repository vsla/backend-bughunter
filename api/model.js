const database = require('./databaseHelper');

const Model = {
  async createTables(req, res) {
    try {
      let finalResponse = []
      const users = await helpers.createUsers()
      const companies = await helpers.createCompanies()

      finalResponse.push(users)
      finalResponse.push(companies)
      return res.send({ response: finalResponse })
    } catch (error) {
      console.log(error)
    }
  },

  // Helpers

};

const helpers = {
  async createUsers() {
    try {
      console.log('oi2')
      const query = "CREATE TABLE users (name varchar)"
      const response = await database.query(query);
      return response
    } catch (error) {
      return 'User table exists'
    }
  },
  async createCompanies() {
    try {
      const query =
        "CREATE TABLE companies (" +
        "name varchar, email varchar, description varchar, " +
        "cnpj varchar, phone varchar, password varchar" +
        ")"
      const response = await database.query(query);
      return response
    } catch (error) {
      return 'Companies table exists'
    }
  }
}

module.exports = Model;