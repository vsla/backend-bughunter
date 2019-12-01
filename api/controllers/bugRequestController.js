const database = require('../databaseHelper');

const BugRequestController = {
  async create(req, res) {
    try {
      const { title, description, project_id, repository_link, live_link, category, status, value, hunter_id } = req.body
      const query = `
        INSERT INTO bugRequests 
        (title, description, project_id, repository_link, live_link, category, status, value, hunter_id)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING *
      `
      const values = [title, description, project_id, repository_link, live_link, category, status, value, hunter_id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows[0])
    } catch (error) {
      return res.send(error)
    }
  },

  async getAll(req, res) {
    try {
      const query =
        "SELECT * FROM bugRequests"

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
        "SELECT * FROM bugRequests where id = $1"
      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows)
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  },

  async getByHunter(req, res) {
    try {
      const { id } = req.params
      const query =
        "SELECT * FROM bugRequests where hunter_id = $1"
      const values = [id]

      const response = await database.queryValues(query, values);
      return res.send(response.rows)
    } catch (error) {
      return res.send({ response: 'not found' })
    }
  },

  async getByProject(req, res) {
    try {
      const { id } = req.params
      const query =
        "SELECT * FROM bugRequests where project_id = $1"
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
      const { title, description, project_id, repository_link, live_link, category, status, value, hunter_id } = req.body
      const values = [title, description, project_id, repository_link, live_link, category, status, value, hunter_id, id]

      const query =
        `
        UPDATE bugRequests 
        SET 
        title = $1, description = $2, project_id = $3, repository_link = $4, 
        live_link = $5, category = $6, status = $7, value = $8, hunter_id = $9
        where id = $10 RETURNING *
      `

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
        DELETE FROM bugRequests 
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

module.exports = BugRequestController;