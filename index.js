var express = require('express');
const bodyParser = require('body-parser');

var taskCtrl = require('./controllers/task.ctrl');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(4000, function () {
    console.log('Server is running on port 4000');
});

//app.get('/', );

app.get('/tasks', taskCtrl.tasks);
app.get('/tasks/:id', taskCtrl.taskById);
app.post('/tasks', taskCtrl.add);















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





