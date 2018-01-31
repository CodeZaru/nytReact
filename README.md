# New York Times Article Search: Built with MERN

### Features:

* Search for articles by keyword (still need to add exception code for articles that done have jpgs associated with them)
* Supply a start year & end year for your search (optional)
* Save articles from your search to read at a later date

### Technologies Used:

* Node.js w/ Express.js Framework
* MongoDB w/ Mongoose Object Modeling
* React.js w/ create-react-app, react-router-v4 & react-bootstrap
* Axios - HTTP/AJAX requests
* Heroku deployed


### Instructions:
*Start local Mongo db, or generate Mongo URI KEY for heroku deployment and in the server.js file set the const PRODUCTION_KEY = your Mongo URI Key (in place of the code that says: require('./client/src/config/mongoDB/db_config');).  ALSO, in the server.js file, see comment: //Toggle NODE_ENV by commenting out the two lines of code.

*Get your API Key from NYT and include it as appropriate.  Paste it in the API.js file in the utils directory setting the const API_KEY = to you API key (in place of the code that says: require('../config/nytApiKey/nytApiKey')).

*Run npm install (as needed) and then npm start for the Express server from the main app directory: \nytReact>npm start

*Also run npm start for the react client svr: \nytReact\client>npm start

*the app should open up automatically in your browser.
