const database = require('../databaseHelper');

const tables = {
  async migrate() {
    try {
      console.log('Drop all tables')
      const query =
        "DROP SCHEMA public CASCADE;" +
        "CREATE SCHEMA public;" +
        "GRANT ALL ON SCHEMA public TO postgres;" +
        "GRANT ALL ON SCHEMA public TO public;"

      const response = await database.query(query);
      return response
    } catch (error) {
      return 'User table exists'
    }
  }
}

module.exports = tables