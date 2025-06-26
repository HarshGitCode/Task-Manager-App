import { useEffect, useState } from "react"
import TaskCard from "../common/TaskCard"
import CreateTask from "../CreateTask";
import {Button} from "../common/Button"
import { deleteTask, getAllTasks, updatedTask } from "../../Services/taskApi";
import { useSelector,useDispatch } from "react-redux";
import { setTasks } from "../../Services/redux/userSlice";

function Tasks() {
  const user = useSelector(state=>state.user.user);
  const tasks = useSelector(state=>state.user.tasks);
  const token = useSelector(state=>state.user.token);
  // console.log(tasks[0]);
  const dispatch = useDispatch();
  // console.log(user);
  const userId = user._id;
  // console.log(userId);
  const [activeCreateTask, setActiveCreateTask] = useState(false)
  const [ updateTask, setUpdateTask] = useState(false);
  const [Tasks, setTask] = useState([]);
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Design Homepage",
  //     description: "Create wireframes and final UI",
  //     status: "In Progress",
  //     createdAt: "2025-05-05",
  //     team: ["Alice", "Bob"],
  //     // todos: ["Wireframe header", "Wireframe footer"],
  //     subtasks: ["Mockup buttons", "Pick color palette"],
  //   },
  //   {
  //     id: 2,
  //     title: "Setup Backend",
  //     description: "Initialize database and API routes",
  //     status: "Pending",
  //     createdAt: "2025-05-04",
  //     team: ["Charlie"],
  //     // todos: ["Create tables", "Seed data"],
  //     subtasks: ["API route for users"],
  //   },
  //   {
  //     id: 3,
  //     title: "Write Documentation",
  //     description: "Draft project documentation",
  //     status: "Completed",
  //     createdAt: "2025-05-03",
  //     team: ["Dana", "Eli"],
  //     // todos: ["Write README", "API docs"],
  //     subtasks: ["Describe endpoints", "Usage examples"],
  //   },
  //   {
  //     id: 4,
  //     title: "Test Features",
  //     description: "Run integration and unit tests",
  //     status: "In Review",
  //     createdAt: "2025-05-02",
  //     team: ["Frank"],
  //     // todos: ["Integration tests", "Unit tests"],
  //     subtasks: ["Mock API calls"],
  //   },
  //   {
  //     id: 5,
  //     title: "Deploy App",
  //     description: "Deploy to production server",
  //     status: "Scheduled",
  //     createdAt: "2025-05-01",
  //     team: ["Grace", "Hank"],
  //     // todos: ["Prepare server", "Deploy code"],
  //     subtasks: ["Configure SSL", "Monitor logs"],
  //   },
  //   {
  //     id: 6,
  //     title: "Client Feedback",
  //     description: "Gather feedback from client meeting",
  //     status: "Pending",
  //     createdAt: "2025-04-30",
  //     team: ["Ivy"],
  //     // todos: ["Meeting notes", "Prepare action plan"],
  //     subtasks: ["Follow-up email"],
  //   },
  // ]);
  // console.log(tasks);

  
  //React's useEffect expects a synchronous cleanup function or undefined, but async functions always return a Promise, which can cause issues or warnings.
// useEffect(async function(){
// const tasks = await getAllTasks(userId);
// console.log(tasks);
// setTasks(tasks);
// })

  //that's why we use useeffect this way

// You're calling setTasks(allTasks) immediately after dispatching, but getAllTasks is likely asynchronous (e.g., uses thunk or createAsyncThunk) and will not have updated allTasks yet.
// This causes tasks to not reflect the latest state from Redux.
console.log(token);
useEffect(()=>{
  console.log("i am first")
  const fetchData =async()=>{
    const result = await getAllTasks(userId,token);
    setTask(result);
    
  }
  fetchData();
  // dispatch(getAllTasks(userId));
  //setTasks(allTasks) //// <- This will still be the *old* value from Redux
  console.log("i am second")
},[userId,activeCreateTask,updateTask,dispatch])

dispatch(setTasks(Tasks));


// useEffect(() => {
//   if (allTasks) {
//     setTasks(allTasks);
//   }
// }, [allTasks]);

  const handleEdit = (task) => {
    console.log("i am in edit task function");
    console.log(task);
    setUpdateTask(task);
  };

  const handleDelete = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    deleteTask(id,userId);
    window.location.reload();
   
  };

  const handleView = (task) => {
    console.log("View task:", task);
  };

  return (
    <div className="flex flex-col gap-2">
    <div className="m-2 p-2">
      <Button onClick={()=>setActiveCreateTask(true)}>Create Task</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
      {/* if i use redux state then i have to not pass redux state to local state */}
      {Tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      ))}
    </div>
    {activeCreateTask || updateTask ? (<CreateTask setActiveCreateTask={setActiveCreateTask} updateTask={updateTask} setUpdateTask={setUpdateTask}/>): ("")}
    </div>
    )
}

export default Tasks