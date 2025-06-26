import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideBar from './SideBar'
const loading = false;

function Home() {
  return (
    <>
    {!loading ? (<div className='text-white text-center items-center m-20 '>
        <Link to="/signin">Please Login</Link></div>)
        :(<div>wlecome to taks manager
        </div>)}
    </>
  )
}

export default Home