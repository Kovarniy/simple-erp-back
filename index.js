const express = require('express');
const PORT = 3500;

const app = express();
app.use(express.json());

const departmentsRoutes = require('./settings/departmentsRouter');
departmentsRoutes(app);
const employeesRouter = require('./settings/employeesRouter');
employeesRouter(app);

app.listen(PORT, () => console.log("work"));

