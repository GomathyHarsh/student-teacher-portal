import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';
const PortalLayout = () => {
  return (
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar/>
      <Outlet/>
    </div>
    </div>
    </div>
  )
}

export default PortalLayout