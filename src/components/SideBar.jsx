import React, { useState } from 'react'
import { LayoutDashboard, ListTodo, CheckCircle, Hourglass, Users, ChartNoAxesColumnIncreasing } from "lucide-react";
import { Button } from './common/Button';
import { useNavigate, useLocation } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-60 bg-white shadow-lg p-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold flex items-center gap-2"><LayoutDashboard /> Dashboard</h2>
          <nav className="flex flex-col gap-2">
            {/* here bg-black background doesn't work */}
            <Button variant="ghost" className={`flex gap-2 ${location.pathname.includes("status") ? "bg-yellow-300" : ""}`} onClick={()=> {navigate("dashboard/status")}}><ChartNoAxesColumnIncreasing/> Status</Button>
            <Button variant="ghost" className={`flex gap-2 ${location.pathname.includes("tasks") ? "bg-yellow-300" : ""}`} onClick={()=> {navigate("dashboard/tasks")}}><ListTodo /> Tasks</Button>
            <Button variant="ghost" className={`flex gap-2 ${location.pathname.includes("complete") ? "bg-yellow-300" : ""}`} onClick={()=> {navigate("dashboard/complete")}}><CheckCircle /> Completed</Button>
            <Button variant="ghost" className={`flex gap-2 ${location.pathname.includes("inProgress") ? "bg-yellow-300" : ""}`} onClick={()=> {navigate("dashboard/inProgress")}}><Hourglass /> In Progress</Button>
            <Button variant="ghost" className={`flex gap-2 ${location.pathname.includes("team") ? "bg-yellow-300" : ""}`} onClick={()=> {navigate("dashboard/team")}}><Users /> Team</Button>
          </nav>
        </div>
  )
}

export default SideBar