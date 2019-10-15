var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the "Public" directory in the app directory
app.use(express.static(process.cwd() + '/public'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
