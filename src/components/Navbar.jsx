import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './common/Button';
import { LayoutDashboard, User, LogIn, LogOut } from "lucide-react";
import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../Services/authApi';


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading)
  // const value = JSON.parse(localStorage.getItem("loading"));
  console.log(loading);
  // console.log("value"+value);
  return (
    <nav className="bg-white h-14 shadow-md flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold flex items-center gap-2"><LayoutDashboard /> Task Manager</h1>
      <div className="flex items-center gap-4">
        {
          !loading && (<Button variant="ghost" className="flex items-center gap-1" onClick={() => navigate('/signin')}><LogIn />Login</Button>)
        }
        {
          !loading && (<Button variant="ghost" className="flex items-center gap-1" onClick={() => navigate('/signup')}><LogIn />Sign Up</Button>)
        }
        {
          loading && (<div className="relative group inline-block">
            <Button variant="ghost" className="flex items-center gap-1"><User />Profile</Button>

            {/* <!-- Add 'group-hover:flex' and make sure it's not hidden when hovering --> */}
            <div className='absolute invisible group-hover:visible bg-white h-7 w-16 mt-2 rotate-45 right-1/2 translate-x-1/2'></div>
            <div className="absolute invisible group-hover:visible flex flex-col gap-2 transition-all duration-150 bg-white shadow-lg rounded-lg mt-2 w-28 z-10 py-2">
             <button className='hover:bg-gray-300 cursor-pointer'>User Name</button>
             <button className='hover:bg-gray-300 cursor-pointer' onClick={()=> dispatch(logOut(navigate))}>log Out</button>
             <button className='hover:bg-gray-300 cursor-pointer'>Setting</button>
            </div>
          </div>
          )
        }


      </div>
    </nav>
  )
}

export default Navbar
