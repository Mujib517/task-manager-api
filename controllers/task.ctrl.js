var taskModel = require('./../models/task.model');


var tasks = function (req, res) {

    taskModel.find(function (err, tasks) {
        if (!err) {
            res.status(200);
            res.json(tasks);
        }
        else {
            res.status(500);  //internal server error
            res.send("Internal Server Error");
        }
    });


};

var taskById = function (req, res) {
    taskModel.find({ 'id': req.params.id }, function (err, task) {
        if (!task.id) {
            res.status(404);
            res.send("not found");
        }
        else {
            res.status(200);
            res.json(task);
        }
    });
}

var add = function (req, res) {
    var task = new taskModel(req.body);

    task.save(function (err, task) {
        if (!err) {
            res.status(201); //Created
            res.send("Success");
        }
        else {
            res.status(500);
            res.send("Internal Server error");
        }
    });
};

module.exports = {
    tasks: tasks,
    taskById: taskById,
    add: add
}







// function TaskCtrl() {

//     var tasks = function (req, res) {
//         var tasks = [
//             {
//                 "id": 4,
//                 "name": "Recharg",
//                 "category": "General",
//                 "priority": "Medium",
//                 "created": "2017-04-25T01:27:36.223Z",
//                 "isCompleted": false
//             },
//             {
//                 "id": 5,
//                 "name": "Shop",
//                 "category": "personal",
//                 "priority": "Low",
//                 "created": "2017-04-28T01:27:35.026Z",
//                 "isCompleted": false
//             }];

//         res.status(200);
//         res.json(tasks);
//     };

//     var taskById = function (req, res) {
//         res.send("Task " + req.params.id);
//     }

//     //revealing module design pattern
//     return {
//         tasks: tasks,
//         taskById: taskById
//     }
// }

// module.exports = TaskCtrl();



//var obj={};
// constructor
