const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

const routes = require('./routes')
app.use('/api', routes);

app.listen(8080, () => console.log("App listening on port 8080!"));
