const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3500;

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const routes = require('./routers/router')
routes(app)

app.listen(PORT, () => console.log("work"));

