const express = require('express');
const PORT = 3500;

const app = express();
app.use(express.json())

const routes = require('./settings/departmentsRouter')
routes(app)

app.listen(PORT, () => console.log("work"));

