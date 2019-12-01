const express = require('express');
const routes = express.Router();

const Model = require('../model');
const companyController = require('../controllers/companyController');
const projectController = require('../controllers/projectController');
const hunterController = require('../controllers/hunterController');
const bugRequestController = require('../controllers/bugRequestController');
const adminController = require('../controllers/adminController');

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
routes.get('/companies/:companyId/projects', projectController.getByCompany);
routes.put('/projects/:id', projectController.update);
routes.delete('/projects/:id', projectController.delete);

// Hunters
routes.post('/hunters', hunterController.create);
routes.get('/hunters', hunterController.getAll);
routes.get('/hunters/:id', hunterController.getOne);
routes.put('/hunters/:id', hunterController.update);
routes.delete('/hunters/:id', hunterController.delete);

// Projects
routes.post('/bug_requests', bugRequestController.create);
routes.get('/bug_requests', bugRequestController.getAll);
routes.get('/bug_requests/:id', bugRequestController.getOne);
routes.get('/projects/:id/bug_requests', bugRequestController.getByProject);
routes.get('/hunters/:id/bug_requests', bugRequestController.getByHunter);
routes.put('/bug_requests/:id', bugRequestController.update);
routes.delete('/bug_requests/:id', bugRequestController.delete);

// Admins
routes.post('/admins', adminController.create);
routes.get('/admins', adminController.getAll);
routes.get('/admins/:id', adminController.getOne);
routes.put('/admins/:id', adminController.update);
routes.delete('/admins/:id', adminController.delete);

// Create tables
routes.get('/create-tables', Model.createTables);


routes.get('/', (req, res) => {
  console.log('oi')
  res.send({ message: 'endpoint working' });
});

module.exports = routes
