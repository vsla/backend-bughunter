const database = require('../databaseHelper');

const CompanyController = {
  async create(req, res) {
    try {
      console.log(req.body)
      const query = ""

      const response = await database.query(query);
      return res.send({ oi: 'oi' })
    } catch (error) {
      return res.send(error)
    }
  }

};

module.exports = CompanyController;