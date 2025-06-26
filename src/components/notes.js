// // // components/ui/card.jsx
// export const Card = ({ children, className }) => (
//     <div className={`rounded-2xl shadow bg-white ${className}`}>{children}</div>
//   );
  
//   export const CardContent = ({ children, className }) => (
//     <div className={`p-4 ${className}`}>{children}</div>
//   );
  
//   // components/ui/button.jsx
//   export const Button = ({ children, onClick, className, variant = "default" }) => {
//     const variants = {
//       default: "bg-blue-500 text-white hover:bg-blue-600",
//       ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
//     };
//     return (
//       <button
//         onClick={onClick}
//         className={`px-4 py-2 rounded-xl font-semibold ${variants[variant]} ${className}`}
//       >
//         {children}
//       </button>
//     );
//   };
  
//   // components/ui/input.jsx
//   export const Input = ({ value, onChange, placeholder, className }) => (
//     <input
//       type="text"
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
//     />
//   );
  
//   // Main dashboard file (same as before)
//   import React, { useState } from "react";
//   import { Card, CardContent } from "@/components/ui/card";
//   import { Button } from "@/components/ui/button";
//   import { Input } from "@/components/ui/input";
//   import { Check, Trash2, LayoutDashboard, ListTodo, CheckCircle, User, LogIn, Hourglass, Users, PlusCircle } from "lucide-react";
  
//   const TaskManagerDashboard = () => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");
  
//     const addTask = () => {
//       if (newTask.trim() !== "") {
//         setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//         setNewTask("");
//       }
//     };
  
//     const toggleComplete = (id) => {
//       setTasks(tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       ));
//     };
  
//     const deleteTask = (id) => {
//       setTasks(tasks.filter((task) => task.id !== id));
//     };
  
//     const totalTasks = tasks.length;
//     const completedTasks = tasks.filter((t) => t.completed).length;
//     const pendingTasks = totalTasks - completedTasks;
  
//     return (
//       <div className="min-h-screen flex flex-col bg-gray-100">
//         {/* Navbar */}
//         <nav className="bg-white shadow-md flex justify-between items-center px-6 py-4">
//           <h1 className="text-2xl font-bold flex items-center gap-2"><LayoutDashboard /> Task Manager</h1>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" className="flex items-center gap-1"><LogIn /> Login</Button>
//             <Button variant="ghost" className="flex items-center gap-1"><User /> Profile</Button>
//           </div>
//         </nav>
  
//         <div className="flex flex-1">
//           {/* Sidebar */}
//           <div className="w-64 bg-white shadow-lg p-4 flex flex-col gap-4">
//             <h2 className="text-xl font-bold flex items-center gap-2"><LayoutDashboard /> Dashboard</h2>
//             <nav className="flex flex-col gap-2">
//               <Button variant="ghost" className="justify-start"><ListTodo /> Tasks</Button>
//               <Button variant="ghost" className="justify-start"><CheckCircle /> Completed</Button>
//               <Button variant="ghost" className="justify-start"><Hourglass /> In Progress</Button>
//               <Button variant="ghost" className="justify-start"><Users /> Team</Button>
//               <Button variant="ghost" className="justify-start"><PlusCircle /> Create Task</Button>
//             </nav>
//           </div>
  
//           {/* Main content */}
//           <div className="flex-1 p-6">
//             <header className="mb-6">
//               <h1 className="text-3xl font-bold">Welcome to Your Task Manager</h1>
//             </header>
  
//             {/* Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <Card><CardContent className="p-4"><p className="text-gray-500">Total Tasks</p><p className="text-2xl font-bold">{totalTasks}</p></CardContent></Card>
//               <Card><CardContent className="p-4"><p className="text-gray-500">Completed</p><p className="text-2xl font-bold">{completedTasks}</p></CardContent></Card>
//               <Card><CardContent className="p-4"><p className="text-gray-500">Pending</p><p className="text-2xl font-bold">{pendingTasks}</p></CardContent></Card>
//             </div>
  
//             {/* Add Task */}
//             <div className="flex gap-2 mb-4">
//               <Input
//                 placeholder="Add a new task..."
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 className="w-full"
//               />
//               <Button onClick={addTask}>Add</Button>
//             </div>
  
//             {/* Task List */}
//             <div className="space-y-2">
//               {tasks.length === 0 && (
//                 <p className="text-center text-gray-500">No tasks yet. Add one!</p>
//               )}
//               {tasks.map((task) => (
//                 <Card key={task.id} className="flex items-center justify-between p-2">
//                   <CardContent className="flex items-center gap-2 w-full p-0">
//                     <button
//                       onClick={() => toggleComplete(task.id)}
//                       className={`flex items-center gap-2 ${task.completed ? "line-through text-gray-500" : ""}`}
//                     >
//                       <Check className={`h-5 w-5 ${task.completed ? "text-green-500" : "text-gray-400"}`} />
//                       {task.text}
//                     </button>
//                     <Button variant="ghost" onClick={() => deleteTask(task.id)}>
//                       <Trash2 className="h-5 w-5 text-red-500" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default TaskManagerDashboard;


//error when i use value = {taskdata.title}
// ✅ **Good observation!**

// Let’s break it down carefully.

// ---

// ### 💥 **Why does `value={taskData.title}` give errors sometimes?**

// Because **if `taskData.title` is ever `undefined` or `null`**, React treats the input as *uncontrolled* at first.

// For example:

// * First render: `taskData.title` is `undefined` → input is uncontrolled.
// * Later render: `taskData.title` becomes `"some value"` → input becomes controlled.

// React **warns** when an input *switches between uncontrolled and controlled*.

// ---

// ### 🕵 **Why does this happen in your app?**

// From your code:

// ```js
// const [taskData, setTaskData] = useState({
//   title: "",
//   description: "",
//   subTasks: [],
//   status: "",
//   teamMember: []
// });

// // Later:
// if (updateTask) {
//   setTaskData(updateTask);
// }
// ```

// ➡ Problem:
// If `updateTask` **doesn’t include all the same fields** (`title`, `description`, etc.),
// when you call `setTaskData(updateTask)`, you overwrite the state **with an object missing keys**, and `taskData.title` becomes **undefined**.

// Example:

// ```js
// updateTask = { id: 2, status: "Pending" }  // missing title, description!
// ```

// Now:

// ```js
// taskData.title === undefined  // ⚠ triggers warning when passed to input value
// ```

// ---

// ### ✅ **How to fix this properly**

// Instead of blindly copying `updateTask` into `taskData`, **merge it carefully** with fallback defaults:

// ```js
// useEffect(() => {
//   if (updateTask) {
//     setTaskData({
//       title: updateTask.title || "",
//       description: updateTask.description || "",
//       subTasks: updateTask.subTasks || [],
//       status: updateTask.status || "",
//       teamMember: updateTask.teamMember || [],
//     });
//   }
// }, [updateTask]);
// ```

// This guarantees **all fields always exist** in the state,
// so `taskData.title` will *never* be `undefined`.

// ---

// ### 🔒 **Also: Always fallback in the JSX**

// Even with clean state, it’s good practice to **fallback in the input value**:

// ```js
// <input
//   type="text"
//   name="title"
//   value={taskData.title || ""}
//   onChange={handleOnChange}
// />
// ```

// Why?

// * Protects against accidental bad states.
// * Prevents future errors if the data shape changes.

// ---

// ### 💡 **Final Tip**

// React input rule:

// > **Always give controlled inputs a defined value (string, number, or empty string), never undefined or null.**

// If you want, I can help refactor your full form component to make it bulletproof! Want me to send a cleaned-up, fixed version? 🚀
