const express = require('express');
const routes = express.Router();

const Model = require('../model');
const companyController = require('../controllers/companyController');

// Company
routes.post('/companies', companyController.create);

// Create tables
routes.get('/create-tables', Model.createTables);



routes.get('/', (req, res) => {
  console.log('oi')
  res.send({ message: 'endpoint working' });
});

module.exports = routes
