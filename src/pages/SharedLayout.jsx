import React from 'react'
import { Outlet, } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <Navbar /> */}
    </div>
  );
}

export default SharedLayout