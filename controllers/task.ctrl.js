var tasks = function (req, res) {
    var tasks = [
        {
            "id": 4,
            "name": "Recharg",
            "category": "General",
            "priority": "Medium",
            "created": "2017-04-25T01:27:36.223Z",
            "isCompleted": false
        },
        {
            "id": 5,
            "name": "Shop",
            "category": "personal",
            "priority": "Low",
            "created": "2017-04-28T01:27:35.026Z",
            "isCompleted": false
        }];

    res.status(200);
    res.send(tasks);
};

var taskById = function (req, res) {
    res.send("Task " + req.params.id);
}

var add = function (req, res) {
    console.log(req.body);
    res.status(201);
    res.send();
};

module.exports = {
    tasks: tasks,
    taskById: taskById,
    add:add
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
