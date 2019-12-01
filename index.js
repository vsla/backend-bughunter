const express = require('express');

// new: import User
const User = require('./api/controllers/user');
const Model = require('./api/model');
const rebootConfig = require('./api/config/config')


const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' });
});

app.get('/users', User.createTable);
app.get('/create-tables', Model.createTables);

// Enable to drop all tables
const reboot = false

app.listen(PORT, () => {
  if (reboot) {
    rebootConfig.migrate()
  }
  console.log(`Server running at: http://localhost:${PORT}/`);
});