const Task = require("../models/Task");
const User = require("../models/User");
const Project = require("../models/Project");


exports.createProject = async(req, res)=>{
    try {
        // const userId = req.body; if i use it it assign all body data into userId
        const {userId} = req.body;
        console.log(userId);
        //id shoud be with 24 character and hexa for mongo model otherwise it give error Cast to ObjectId failed for value "680" (type string) at path "_id" for model "User"
        //   //if i use new Objedt(req.body) it's gives error:BSONError: Argument passed in does not match the accepted types
        const{projectName} = req.body
        if(!userId || !projectName){
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
        const project = await Project.create({
            projectName,
            createdAt: Date.now(),
        })
        
        console.log("Project created");

        res.json({
            success: true,
            message: "Project Created  successfully",
            data: project,    
        })
        
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to Created Project",
          error: error.message,
        })
    }
}

exports.updateTask = async (req, res)=>{
    try {
        const updates = {
            title: "harsh is a good coder",
            description: "he knew a all languages"
        }
        const {projectId, userId} = req.body
        if(!userId || !projectId || !updates){
            return res.status(400).send({
                success: false,
                meassage: "please login "
            }
            )
        }

        //user validation
        console.log("find user")
        const user = await User.findById(userId);
        console.log("user founded")
        
        if(!user){
            return res.status(400).json({
                success: false,
                meassage: "please login "
            })
        }
        console.log("taksid filled");
        const  updatedProject= await Project.findByIdAndUpdate(projectId, updates, {new:true});
        //if i don't use if condition here it gives success true and in data it's give null when i pass wrong task id
        if(!updatedProject){
            return res.json({
                success: false,
                message: "task id not found",
            })
        }
        console.log("task updated")
        res.json({
            success: true,
            message: "Prject updated successfully",
            data: updatedProject,
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

