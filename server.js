/**
 * @description node server serving express api
 * @author ritesh.patel
 * @email ritesh@line89.com
 */
var express = require('express'),
    app = express(),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    server,
    serverPort = 3000;

// set api directory / server port    
app.set('api', path.join(__dirname, '/app/api'));
app.set('port', process.env.PORT || 3000);

//configure body-parser for JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//error handlers
app.use(function(err, req, res, next){
	res.status(res.status || 500);
	res.render('Recipe API Error', {
		message:err.message,
		error:err.stack
	});
});

// launch configuration router
var router = express.Router();
var routes = require('./api/routes');

router.get('/', routes.welcomeAPI);
app.use('/', router);

//create server & listen on port 3000
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server Running!');
});

//export app
exports = module.exports = app;
