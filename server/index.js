var express = require('express');
var bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/movie', movieRoutes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
