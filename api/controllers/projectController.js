const database = require('../databaseHelper');

const ProjectController = {
  async create(req, res) {
    try {
      const { name, description, company_id, link1, link2, category, status, tableAmount, shortDescription } = req.body
      const query = `
        INSERT INTO projects 
        (name, description, company_id, link1, link2, category, status, tableAmount, shortDescription)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING *
      `
      const values = [name, description, company_id, link1, link2, category, status, tableAmount, shortDescription]

      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },

  async getAll(req, res) {
    try {
      const query =
        "SELECT * FROM projects"

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
        "SELECT * FROM projects where id = $1"
      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows)
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  },

  async getByCompany(req, res) {
    try {
      const { companyId } = req.params
      const query =
        "SELECT * FROM projects where company_id = $1"
      const values = [companyId]

      const response = await database.queryValues(query, values);
      return res.send(response.rows)
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, description, company_id, link1, link2, category, status, tableAmount, shortDescription } = req.body
      const values = [name, description, company_id, link1, link2, category, status, tableAmount, shortDescription, id]

      const query =
        `
        UPDATE projects 
        SET 
        name = $1, description = $2, company_id = $3, link1 = $4, 
        link2 = $5, category = $6, status = $7, tableAmount = $8, shortDescription = $9
        where id = $10 RETURNING *
      `
      console.log(values[9])

      const response = await database.queryValues(query, values);
      console.log(response)
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
        DELETE FROM projects 
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

module.exports = ProjectController;