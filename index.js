const express = require('express');
const cors = require('cors');
const departmentsRoutes = require('./settings/departmentsRouter');
const employeesRouter = require('./settings/employeesRouter');

const app = express();
const PORT = 3500;

app.use(express.json());

departmentsRoutes(app);
employeesRouter(app);

app.use(cors());

app.listen(PORT, () => console.log("work"));

