const express = require('express');

const rebootConfig = require('./api/config/config')

const routes = require('./api/config/routes')

const app = express();
const PORT = 8080;

app.use(express.json());
// Routes on config
app.use('/', routes);

// Enable to drop all tables
const reboot = false

app.listen(PORT, () => {
  if (reboot) {
    rebootConfig.migrate()
  }
  console.log(`Server running at: http://localhost:${PORT}/`);
});