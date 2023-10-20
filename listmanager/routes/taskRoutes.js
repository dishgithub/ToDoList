const {Router} =  require('express');
const { createTaskController, getAllTask , getTask, updateTask,deleteTask} = require('../controller/taskController');

const taskRouter = Router();

//taskRouter.get('/getalltask',);---only used for specific task

taskRouter.post('/gettasks',(request,response)=>{getAllTask(request,response)});
taskRouter.post('/createtask',(request,response)=>{createTaskController(request,response)});
taskRouter.get('/getmytask',(request,response)=>{getTask(request,response)});

taskRouter.put('/updatetask',(request,response)=>{updateTask(request,response)});
 taskRouter.delete('/deletetask',(request,response)=>{deleteTask(request,response)});


module.exports = taskRouter;

