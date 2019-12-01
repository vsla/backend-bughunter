const database = require('./databaseHelper');

const Model = {
  async createTables(req, res) {
    try {
      let finalResponse = []
      const companies = await helpers.createCompanies()
      const projects = await helpers.createProject()

      finalResponse.push(companies)
      finalResponse.push(projects)
      return res.send({ response: finalResponse })
    } catch (error) {
      console.log(error)
    }
  },
};

const helpers = {
  async createCompanies() {
    try {
      const query = `
        CREATE TABLE companies ( 
          name varchar, 
          email varchar, 
          description varchar,  
          cnpj varchar, 
          phone varchar, 
          password varchar, 
          id SERIAL PRIMARY KEY NOT NULL
        )
      `

      const response = await database.query(query);

      return response
    } catch (error) {
      return error
    }
  },
  async createProject() {
    try {
      const query = `
      CREATE TABLE projects ( 
        name varchar, 
        description varchar, 
        status varchar,
        shortDescription varchar,
        tableAmount varchar,
        company_id integer, 
        link1 varchar, 
        link2 varchar, 
        category varchar, 
        id SERIAL NOT NULL, 
        PRIMARY KEY (id),
        FOREIGN KEY (company_id) REFERENCES companies (id)
      )
      `

      const response = await database.query(query);
      return response
    } catch (error) {
      return error
    }
  }
}

module.exports = Model;