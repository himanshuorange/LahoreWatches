
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./dbhandler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/public_html'));

app.post('/new-user',function (req,res) {
    db.new_user(req.body,function (result) {
        res.end();
    });
});

app.post('/add_watch_details',function (req,res) {
    db.add_watch_details(req.body,function (result) {
        res.end();
    })
});


app.listen(port, function () {

    console.log("Server started on port " + port);
});