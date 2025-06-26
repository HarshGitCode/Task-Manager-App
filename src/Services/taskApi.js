import { apiConnector } from "./apiConnector";
import { setTasks } from "./redux/userSlice";
const CREATE_TASK = "http://localhost:3000/api/tasks/createtask"
const UPDATE_TASK = "http://localhost:3000/api/tasks/update"
const DELETE_TASK = "http://localhost:3000/api/tasks/delete"
const GET_ALL_TASK = "http://localhost:3000/api/tasks/get"

export async function createTask(taskData,user,setActiveCreateTask,token){
    try {
        console.log(user)
        const userId = user._id;
        const response = await apiConnector("POST",CREATE_TASK,{...taskData,userId,token});

        console.log(response);

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        console.log("here i am");

        setActiveCreateTask(false);
    } catch (error) {
        console.log("CREATE_TASK API ERROR............", error)
    }
}


export async function updatedTask(updatedTaskData,userId,setUpdateTask,token){
    try {
        console.log(userId);
        console.log(updatedTaskData);
        const response =  await apiConnector("POST",UPDATE_TASK,{updatedTaskData,userId,token});
        console.log("update is done");
        if(!response){
            throw new Error(response.message)
        }
        console.log("response true");


        console.log(response.message);

        setUpdateTask(false);
    } catch (error) {
        console.log("UPDATE_TASK API ERROR............", error)
    }
}


export async function deleteTask(taskId,userId,token){
    try {
        
        const response = await apiConnector("POST",DELETE_TASK,{taskId,userId,token});
        console.log("deleted",response);
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        // const tasks = response.tasks;
        // console.log(tasks);
        return response

    } catch (error) {
        console.log("Delete_TASK API ERROR............", error)
    }
    }


export async function getAllTasks(userId,token){
    try {
        const response = await apiConnector("POST",GET_ALL_TASK,{userId,token});
        console.log(response);
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        const tasks = response.data.data;
        return tasks
    } catch (error) {
         console.log("UPDATE_TASK API ERROR............", error)
         return response.data.message
    }
}

// export function getAllTasks(userId){
//     return async (dispatch)=>{
//     try {
//         const response = await apiConnector("POST",GET_ALL_TASK,{userId});
//         console.log(response);
//         if(!response.data.success){
//             throw new Error(response.data.message)
//         }

//         const tasks = response.data.data;
//         dispatch(setTasks(tasks))
//         return tasks
//     } catch (error) {
//          console.log("UPDATE_TASK API ERROR............", error)
//          return response.data.message
//     }
//     }
// }
