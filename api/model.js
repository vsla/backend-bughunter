const database = require('./databaseHelper');

const Model = {
  async createTables(req, res) {
    try {
      let finalResponse = []
      const companies = await helpers.createCompanies()
      const projects = await helpers.createProject()
      const hunters = await helpers.createHunters()
      const bugRequest = await helpers.createBugRequest()
      const admins = await helpers.createAdmins()

      finalResponse.push(companies)
      finalResponse.push(projects)
      finalResponse.push(hunters)
      finalResponse.push(bugRequest)
      finalResponse.push(admins)

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
          email varchar UNIQUE, 
          description varchar,  
          cnpj varchar UNIQUE, 
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
      return 'Projects is created already'
    }
  },

  async createHunters() {
    try {
      const query = `
        CREATE TABLE hunters ( 
          name varchar NOT NULL, 
          email varchar UNIQUE NOT NULL,  
          cpf varchar UNIQUE NOT NULL, 
          phone varchar NOT NULL, 
          password varchar NOT NULL, 
          authentication_token varchar,
          id SERIAL PRIMARY KEY NOT NULL
        )
      `

      const response = await database.query(query);

      return response
    } catch (error) {
      return 'Hunters is created already'
    }
  },

  async createBugRequest() {
    try {
      const query = `
      CREATE TABLE bugRequests ( 
        title varchar, 
        category varchar, 
        repository_link varchar, 
        live_link varchar, 
        status varchar,
        description varchar, 
        value varchar,
        project_id integer, 
        hunter_id integer, 
        authentication_token varchar,
        id SERIAL NOT NULL, 
        PRIMARY KEY (id),
        FOREIGN KEY (hunter_id) REFERENCES hunters (id),
        FOREIGN KEY (project_id) REFERENCES projects (id)
      )
      `

      const response = await database.query(query);
      return response
    } catch (error) {
      return 'BugRequest is created already'
    }
  },

  async createAdmins() {
    try {
      const query = `
        CREATE TABLE admins ( 
          name varchar NOT NULL, 
          authentication_token varchar,
          email varchar UNIQUE NOT NULL,
          status varchar,
          password varchar NOT NULL, 
          id SERIAL PRIMARY KEY NOT NULL
        )
      `

      const response = await database.query(query);

      return response
    } catch (error) {
      return 'Admins is created already'
    }
  },
}

module.exports = Model;