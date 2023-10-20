//TASKS CRUD

const taskModel=require("../models/taskModel");

const {v4}=require('uuid');

const createTaskController = async(request,response)=>{
    try {
        
        const uuid= v4();

        const dateOfCreation=new Date();

        const {title,desc,category,priority,deadline,status}=request.body;

        const task= await taskModel.create({
           taskId:uuid,
           tasktitle:title,
           taskDesc:desc,
           dateOfCreation:dateOfCreation.toString(),
           taskCategory:category,
           taskPriority:priority,
           taskDeadline:deadline,
           taskStatus:status


        })

        if(task && task._id){
            response.status(201).json({message:"Task Created"})
        }
        else{
            response.status(404).json({message:"Task Not Created"});
        }
    } 
    catch (error) {
        response.status(500).json({message:"Internal server error"})
    }
}


const getAllTask=async(request,response)=>{
    try {
        
       const {priority}=request.body;
       const allTask=await taskModel.find({taskPriority:priority});

        if(allTask){
            response.status(200).json([{message:"Task Found"},{allTask : allTask}]);
        }
        else{
            response.status(404).json({message:"Task Not Found"});
        }
    } 
    catch (error) {
        response.status(500).json({message:"Internal server error"})
    }
}

const getTask=async(request,response)=>{
    try {
        
       const Task=await taskModel.find({});

        if(Task){
            response.status(200).json([{message:"Task Found"},{Task : Task}]);
        }
        else{
            response.status(404).json({message:"Task Not Found"});
        }
    } 
    catch (error) {
        response.status(500).json({message:"Internal server error"})
    }
}

const updateTask=async(request,response)=>{
    try{

       const {title}=request.body;
       const {new_title,new_desc,new_category,new_priority,new_deadline,new_status}=request.body;

       const dateOfUpdation=new Date();

        const updateData= await taskModel.updateOne(
            {tasktitle:title},
            {
                $set:
                {
                    tasktitle:new_title,
                    taskDesc: new_desc,
                    dateOfCreation:dateOfUpdation.toString(),
                    taskCategory:new_category,
                    taskPriority:new_priority,
                    taskDeadline:new_deadline,
                    taskStatus:new_status
                }
            },
            {upsert: true}
        )

        if(updateData){
            response.status(200).json({message:"task updated"});
        }

        else{
         response.status(404).json({message:"task not updated"});
        }
        
    }
    catch(error){
        response.status(500).json({message:"Internal server error"});

   }

}

const deleteTask=async(request,response)=>{

    try{
        const {title}=request.body;
        
        const taskResponse= await taskModel.deleteOne({tasktitle:title})

        if(taskResponse){
            response.status(200).json({message:"task deleted"});
        }

        else{
         response.status(404).json({message:"task not deleted"});
        }


    }

    catch(error){
         response.status(500).json({message:"Internal server error"});

    }
}


module.exports={createTaskController,getAllTask,getTask,updateTask,deleteTask};