import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navi=useNavigate();
    const red=()=>{
        navi("/")
    }
  return (
    <>
        <h1>404 Error- Page Not Found</h1>
        <button onClick={red}>Go to Home</button>
    </>
  )
}

export default NotFound