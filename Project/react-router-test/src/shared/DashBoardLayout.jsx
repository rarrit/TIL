import React from 'react'
import Layout from "./Layout";
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
  return (
    <div>
      <h1>대시보두임</h1>
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout
