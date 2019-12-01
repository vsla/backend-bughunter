const database = require('./databaseHelper');

const Model = {
  async createTables(req, res) {
    try {
      let finalResponse = []
      const companies = await helpers.createCompanies()
      const projects = await helpers.createProject()
      const hunters = await helpers.createHunters()

      finalResponse.push(companies)
      finalResponse.push(projects)
      finalResponse.push(hunters)

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
      return 'Companies is created already'
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
      return 'Projects is created already'
    }
  },

  async createHunters() {
    try {
      const query = `
        CREATE TABLE hunters ( 
          name varchar NOT NULL, 
          email varchar NOT NULL,  
          cpf varchar NOT NULL, 
          phone varchar NOT NULL, 
          password varchar NOT NULL, 
          id SERIAL PRIMARY KEY NOT NULL
        )
      `

      const response = await database.query(query);

      return response
    } catch (error) {
      return 'Hunters is created already'
    }
  },
}

module.exports = Model;