const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
mongoose.Promise = global.Promise;
let app = express();

const PRODUCTION_KEY = require('./client/src/config/mongoDB/db_config');

const DEV_KEY = 'mongodb://localhost/saveSchema';

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//Toggle NODE_ENV by commenting out the two lines of code below depending on desired ENV/to switch between Prod vs Devl/Local
process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'development';

if (process.env.NODE_ENV === 'production') {
    mongoose.connect(PRODUCTION_KEY);
} else {
    mongoose.connect("mongodb://localhost/saveSchema", {
  	useMongoClient: true
	});
}

let db = mongoose.connection;

// Show any mongoose errors
db.on("error", err => console.log(`Mongoose Error: ${err}`) );
// Once logged in to the db through mongoose, log a success message
db.once("open", () => console.log('Mongoose connection successful') );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/client/public'));
}

app.use('/', routes);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}
    Visit localhost:${PORT} in your browser`));
