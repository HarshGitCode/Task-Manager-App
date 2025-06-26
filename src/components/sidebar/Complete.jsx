import {useState,useEffect} from 'react'
import CreateTask from '../CreateTask'
import TaskCard from "../common/TaskCard"
import {Button} from "../common/Button"
import { getAllTasks } from '../../Services/taskApi'
import { useSelector } from 'react-redux'


function Complete() {
   const user = useSelector(state=>state.user.user);
    const tasks = useSelector(state=>state.user.tasks);
  console.log(user);
  const userId = user._id;
  console.log(userId);
  const [activeCreateTask, setActiveCreateTask] = useState(false)
  const [updateTask, setUpdateTask] = useState();
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


  //  useEffect(() => {
  //   const fetchTasks = async () => {
  //     const tasks = await getAllTasks(userId);
  //     console.log(tasks);
  //     setTasks(tasks);
  //   };
  
  //   fetchTasks();
  // }, [activeCreateTask,updateTask]);
  console.log(tasks);

  const handleEdit = (task) => {
    setUpdateTask(task)
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleView = (task) => {
    console.log("View task:", task);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* <div className="m-2 p-2">
        <Button onClick={() => setActiveCreateTask(true)}>Create Task</Button>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {tasks.map((task) =>
          task.status === "Completed" ? (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ) : null
        )}
      </div>
      {activeCreateTask || updateTask ? (<CreateTask setActiveCreateTask={setActiveCreateTask} updateTask={updateTask} setUpdateTask={setUpdateTask} />) : ("")}
    </div>
  )
}

export default Complete