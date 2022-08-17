const { Website } = require("../utils/Constants");
const express = require("express");
const app = express();
const session = require("express-session");
const Idx = require('../Websocket/Index');
const bodyParser = require('body-parser');
const Server = require('../Websocket/Server');
const Admin = require('../Websocket/Admin');
const Shield = require('../Websocket/Shield');

module.exports = function(client) {
  app.set('port', Website['Websocket'].port);
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(session({
    secret: "48738924783748273742398747238",
    resave: false,
    saveUninitialized: false,
    expires: 604800000
  }));
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use('/', Idx(client));
  app.use('/server', Server(client));
  app.use('/admin', Admin(client));
  app.use('/shield', Shield(client));
  app.get('*', (req, res) => {
    res.render('404.ejs', {
      client,
      user: req.session.user
    });
  });
  
  const listener = app.listen(app.get('port'), function() {
    console.info('App listening as port ' + listener.address().port)
  });
};