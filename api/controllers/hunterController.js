const database = require('../databaseHelper');

const CompanyController = {
  async create(req, res) {
    try {
      const { name, phone, password, email, cpf } = req.body
      const query =`
        INSERT INTO hunters
          (name, phone, password, email, cpf, authentication_token) 
          VALUES($1, $2, $3, $4, $5, 123) RETURNING *
      `
      const values = [name, phone, password, email, cpf]
      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },
  async getAll(req, res) {
    try {
      const query =
        "SELECT * FROM hunters"

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
        "SELECT * FROM hunters where id = $1"
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
      const { name, phone, password, email, cpf } = req.body

      const query =
        `
        UPDATE hunters 
        SET name = $1, phone = $2, password = $3, email = $4, cpf = $5
        where id = $6 RETURNING *
      `
      const values = [name, phone, password, email, cpf, id]

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
        DELETE FROM hunters 
        where id = $1
      `

      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send({ response: 'Deletado com sucesso' })
    } catch (error) {
      return res.send(error)
    }
  },
  async auth(req, res) {
    try {
      const { email, password } = req.body
      const query =
        "SELECT * FROM hunters where email = $1 and password = $2 "
      const values = [email, password]

      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  }
};

module.exports = CompanyController;