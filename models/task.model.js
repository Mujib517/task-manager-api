const mongoose = require('mongoose');

var schema = mongoose.Schema;

var taskSchema=new schema({
    id:Number,
    name:String,
    category:String,
    priority:String,
    created:Date,
    isCompleted:Boolean
});

module.exports=mongoose.model('Task',taskSchema);

