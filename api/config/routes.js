const express = require('express');
const routes = express.Router();

const Model = require('../model');
const companyController = require('../controllers/companyController');
const projectController = require('../controllers/projectController');

// Company
routes.post('/companies', companyController.create);
routes.get('/companies', companyController.getAll);
routes.get('/companies/:id', companyController.getOne);
routes.patch('/companies/:id', companyController.update);
routes.delete('/companies/:id', companyController.delete);


// Projects
routes.post('/projects', projectController.create);
routes.get('/projects', projectController.getAll);
routes.get('/projects/:id', projectController.getOne);
routes.get('/companies/:companyId/projects/:id', projectController.getByCompany);
routes.put('/projects/:id', projectController.update);
routes.delete('/projects/:id', projectController.delete);

// Create tables
routes.get('/create-tables', Model.createTables);


routes.get('/', (req, res) => {
  console.log('oi')
  res.send({ message: 'endpoint working' });
});

module.exports = routes
