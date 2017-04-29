var express = require('express');

var taskCtrl=require('./../controllers/task.ctrl');


var taskRouter = express.Router();


taskRouter.get('/', taskCtrl.tasks);
taskRouter.get('/:id', taskCtrl.taskById);
taskRouter.post('', taskCtrl.add);

module.exports=taskRouter;
