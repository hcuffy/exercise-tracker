const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes =  require('./routes');

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/voting');


app.use(express.static('public'));
app.use('/', routes);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log('Express server has started on', port);

});
