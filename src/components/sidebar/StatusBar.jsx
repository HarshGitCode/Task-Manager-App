import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function StatusBar() {
  const data = [
    { name: 'Completed', value: 12 },
    { name: 'In Progress', value: 7 },
    { name: 'Pending', value: 5 },
    { name: 'On Hold', value: 3 },
  ];
  
  const COLORS = ['#4ade80', '#60a5fa', '#facc15', '#f87171'];
  
  const totalTasks = data.reduce((acc, curr) => acc + curr.value, 0);
  return (


    <div className="w-full flex-1 p-4 space-y-6 bg-white">
      {/* Status Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="bg-white shadow rounded-2xl p-4 text-center flex-1 min-w-[150px]">
          <h3 className="text-gray-500 text-sm">All Tasks</h3>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-green-100 shadow rounded-2xl p-4 text-center flex-1 min-w-[150px]">
          <h3 className="text-green-700 text-sm">Completed</h3>
          <p className="text-2xl font-bold text-green-700">{data[0].value}</p>
        </div>
        <div className="bg-blue-100 shadow rounded-2xl p-4 text-center flex-1 min-w-[150px]">
          <h3 className="text-blue-700 text-sm">In Progress</h3>
          <p className="text-2xl font-bold text-blue-700">{data[1].value}</p>
        </div>
        <div className="bg-yellow-100 shadow rounded-2xl p-4 text-center flex-1 min-w-[150px]">
          <h3 className="text-yellow-700 text-sm">Pending</h3>
          <p className="text-2xl font-bold text-yellow-700">{data[2].value}</p>
        </div>
        <div className="bg-red-100 shadow rounded-2xl p-4 text-center flex-1 min-w-[150px]">
          <h3 className="text-red-700 text-sm">On Hold</h3>
          <p className="text-2xl font-bold text-red-700">{data[3].value}</p>
        </div>
      </div>

      {/* Graph */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Task Status Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

  )
}

export default StatusBar