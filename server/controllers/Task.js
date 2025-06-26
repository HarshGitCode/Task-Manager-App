const Task = require("../models/Task");
const User = require("../models/User");



exports.createTask = async(req, res)=>{
    try {
        // const userId = req.body; if i use it it assign all body data into userId
        const {userId} = req.body;
        console.log(userId);
        //id shoud be with 24 character and hexa for mongo model otherwise it give error Cast to ObjectId failed for value "680" (type string) at path "_id" for model "User"
        //   //if i use new Objedt(req.body) it's gives error:BSONError: Argument passed in does not match the accepted types
        const{title, description,subtasks,status} = req.body
        if(!userId){
            return res.status(400).json({
                success: false,
                meassage: "please login "
            }
            )
        }

        console.log("find user")
        const user = await User.findById(userId);
        console.log("user founded")
        
        if(!user){
            return res.status(400).json({
                success: false,
                meassage: "please login "
            })
        }

        console.log("user successfully founded")
        const task = await Task.create({
            title,
            description,
            createdAt: Date.now(),
            status,
            subtasks,
            userId
        })
        console.log("task created");

        res.json({
            success: true,
            message: "Task Created successfully",
            data: task,    
        })
        
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to Created Task",
          error: error.message,
        })
    }
}

exports.updateTask = async (req, res)=>{
    try {
        const {updatedTaskData,userId} = req.body;
        console.log("i am in updatetask");

        if(!userId||!updatedTaskData){
            return res.status(400).send({
                success: false,
                meassage: "please login "
            }
            )
        }

        //user validation
         console.log("find user")
                const user = await User.findById(userId);
                console.log("user founded"+user);
                
                if(!user){
                    return res.status(400).json({
                        success: false,
                        meassage: "please login "
                    })
                }
        console.log("taksid filled");
        const updatedTask = await Task.findByIdAndUpdate(updatedTaskData.id, updatedTaskData, {new:true});
        //if i don't use if condition here it gives success true and in data it's give null when i pass wrong task id
        if(!updatedTask){
            return res.json({
                success: false,
                message: "task id not found",
            })
        }
        console.log("task updated")
        res.json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask,
          })
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to update task",
          error: error.message,
        })
    }
}

exports.deleteTask = async (req, res)=>{
        try {
            const {taskId,userId} = req.body;
            if(!taskId||!userId){
                console.log("ufhhkhhf");
                return res.status(400).send({
                    success: false,
                    meassage: "please login "
                }
                )

            }

            console.log("it reached here");
            const response = await Task.findByIdAndDelete(taskId);
            console.log("task deleted",response);
            // if(!response){
            //     return res.json({
            //         success: false,
            //         messaage: "Task id not found"
            //     })
            // }
            console.log("task deleted2",response);

            // const tasks = await Task.find({userId: userId})
            res.status(200).send({
                success: true,
                message: "Task is Successfully Delete",
                data: response,
            })

        } catch (error) {

            console.error(error)
            res.status(500).json({
              success: false,
              message: "Failed to delete task",
              error: error.message,
            })
            
        }
}

exports.getTaskDetails = async (req, res)=>{
    try {
        const {taskId} = req.body;
            if(!taskId){
                return res.status(400).send({
                    success: false,
                    meassage: "please login "
                }
                )
            }
        const taskDetails = await Task.findById(taskId);
        if(!taskDetails){
            return res.json({
                success: false,
                message: "Task id is not found",
              })
        }
        res.json({
            success: true,
            message: "get task details successfully",
            data: taskDetails
          })
    } catch (error) {
        console.error(error)
            res.status(500).json({
              success: false,
              message: "Failed to delete task",
              error: error.message,
            })
    }
}

exports.getAllTasks = async(req, res)=>{
    try {
        const {userId} = req.body;
        console.log(userId);
        //if you want find content with value than use key and value don't use only value
        const tasks = await Task.find({userId: userId});
        console.log("get all tasks",tasks);
        res.json({
            success: true,
            message: "Get all Tasks Successfully",
            data: tasks
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to get All Taskes",
          error: error.message,
        })  
    }
}