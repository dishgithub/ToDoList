
const { default: mongoose } = require("mongoose");


const taskSchema = new mongoose.Schema({
    taskId:{type:String,required:true,unique:true},
    tasktitle:{type:String,required:true},
    taskDesc:{type:String},
    dateOfCreation:{type:String},
    taskCategory:{type:String},
    taskPriority:{type:String},
    taskDeadline:{type:String},
    taskStatus:{type:Boolean}
})


const taskModel = mongoose.model('taskDatas',taskSchema);


module.exports = taskModel;