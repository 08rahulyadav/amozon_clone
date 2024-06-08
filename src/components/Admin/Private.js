import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
function Private() {
  const authToken=sessionStorage.getItem("token")
  return authToken ? <Outlet></Outlet> : <Navigate to="/admin-login"/>
}

export default Private