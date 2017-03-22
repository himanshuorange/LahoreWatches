/**
 * Created by himanshu on 21/3/17.
 */


var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', express.static(__dirname + '/public_html'));


app.listen(port, function () {

    console.log("Server started on port " + port);
});