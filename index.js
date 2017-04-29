var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var taskCtrl = require('./controllers/task.ctrl');
var taskRouter = require('./routes/task.router.js');


var app = express();

var db = "admin:admin@ds125481.mlab.com:25481/taskdb";
var localDb = "mongodb://localhost/taskDb";

mongoose.connect(db);

app.use(cors());  //allow access to all the origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var port = process.env.port || 4000;

app.listen(port, function () {
    console.log('Server is running on port 4000');
});

app.use('/tasks', taskRouter);

















// var http = require('http');   //importing modules commonjs.  ES6 import {Component} form '@angular/core'

// var port = process.env.port || 4000;

// var server = http.createServer(function (req, res) {

//     if (req.url === '/') {
//         res.write("Task Manager API");
//     }
//     else if (req.url === '/tasks') {
//         res.write("List of tasks");
//     }
//     res.end();
// });

// server.listen(port, function () {
//     console.log('server is running on port ' + port);
// });





