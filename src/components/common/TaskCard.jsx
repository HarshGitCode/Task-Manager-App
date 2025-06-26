import React from "react";
import { User, CheckSquare, Pencil, Trash2, Eye } from "lucide-react";

const TaskCard = ({ task = {}, onEdit, onDelete, onView }) => {
  const safeTask = {
    title: task.title || "Untitled Task",
    description: task.description || "No description",
    status: task.status || "Not specified",
    createdAt: task.createdAt || "Unknown",
    team: Array.isArray(task.team) ? task.team : [],
    // todos: Array.isArray(task.todos) ? task.todos : [],
    subtasks: Array.isArray(task.subtasks) ? task.subtasks : [],
    id: task._id || null,
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
            <CheckSquare className="text-green-500" /> {safeTask.title}
          </h2>
          <p className="text-gray-600 text-sm mt-1">{safeTask.description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onView && onView(safeTask)}
            className="bg-blue-100 text-blue-600 rounded-full p-2 hover:bg-blue-200"
          >
            <Eye size={18} />
          </button>
          <button
            onClick={() => onEdit && onEdit(safeTask)}
            className="bg-green-100 text-green-600 rounded-full p-2 hover:bg-green-200"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDelete && onDelete(safeTask.id)}
            className="bg-red-100 text-red-600 rounded-full p-2 hover:bg-red-200"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500">Status</p>
          <p className="text-sm font-medium text-gray-700">{safeTask.status}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Created At</p>
          <p className="text-sm font-medium text-gray-700">{safeTask.createdAt}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Team Members</h3>
        <div className="flex flex-wrap gap-2">
          {safeTask.team.length > 0 ? (
            safeTask.team.map((member, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"
              >
                <User size={12} /> {member}
              </span>
            ))
          ) : (
            <p className="text-xs text-gray-400">No team members</p>
          )}
        </div>
      </div>

      {/* <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Todos</h3>
        {safeTask.todos.length > 0 ? (
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {safeTask.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
          </ul>
        ) : (
          <p className="text-xs text-gray-400">No todos</p>
        )}
      </div> */}

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Subtasks</h3>
        {safeTask.subtasks.length > 0 ? (
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {safeTask.subtasks.map((subtask, idx) => <li key={idx}>{subtask}</li>)}
          </ul>
        ) : (
          <p className="text-xs text-gray-400">No subtasks</p>
        )}
      </div>
    </div>
  );
};

export default TaskCard