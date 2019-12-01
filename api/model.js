const database = require('./databaseHelper');

const Model = {
  async createTables(req,res){
    try {
      let finalResponse = []
      const response = await helpers.createUsers()

      finalResponse.push(response)
      return res.send({response: finalResponse})
    } catch (error) {
      console.log(error)
    }
  },

  // Helpers
  
};

const helpers = {
  async createUsers(){
    try {
      console.log('oi2')
      const query = "CREATE TABLE users (name varchar)"
      const response = await database.query(query);
      return response
    } catch (error) {
      return 'User exists'
    }
  },
  async algumaCOisa(){

  }
}

module.exports = Model;