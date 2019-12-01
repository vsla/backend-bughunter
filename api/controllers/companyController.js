const database = require('../databaseHelper');

const CompanyController = {
  async create(req, res) {
    try {
      console.log(req.body)
      const { name, description, phone, password, email, cnpj } = req.body
      const query =
        "INSERT INTO companies(name, description, phone, password, email, cnpj) VALUES($1, $2, $3, $4, $5, $6) RETURNING *"
      const values = [name, description, phone, password, email, cnpj]
      console.log(query, values)
      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },
  async getAll(req, res) {
    try {
      const query =
        "SELECT * FROM companies"

      const response = await database.query(query);
      return res.send(response.rows)
    } catch (error) {
      return res.send(error)
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params
      const query =
        "SELECT * FROM companies where id = $1"
      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows)
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { name, description, phone, password, email, cnpj } = req.body

      const query =
        `
        UPDATE companies 
        SET name = $1, description = $2, phone = $3, password = $4, email = $5, cnpj = $6 
        where id = $7 RETURNING *
      `
      const values = [name, description, phone, password, email, cnpj, id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params

      const query =
        `
        DELETE FROM companies 
        where id = $1
      `

      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send({ response: 'Deletado com sucesso' })
    } catch (error) {
      return res.send(error)
    }
  }
};

module.exports = CompanyController;