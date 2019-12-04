const database = require('../databaseHelper');

const CompanyController = {
  async create(req, res) {
    try {
      const { name, password, email } = req.body
      const query = `
        INSERT INTO admins
          (name, password, email) 
          VALUES($1, $2, $3) RETURNING *
      `
      const values = [name, password, email]
      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },
  async getAll(req, res) {
    try {
      const query =
        "SELECT * FROM admins"

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
        "SELECT * FROM admins where id = $1"
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
      const { name, password, email } = req.body

      const query =
        `
        UPDATE admins 
        SET name = $1, password = $2,  email= $3
        where id = $4 RETURNING *
      `
      const values = [name, password, email, id]

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
        DELETE FROM admins 
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
        "SELECT * FROM admins where email = $1 and password = $2 "
      const values = [email, password]

      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  }
};

module.exports = CompanyController;