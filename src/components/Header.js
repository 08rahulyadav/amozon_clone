import React from 'react'
import {Link, useNavigate} from "react-router-dom"
function Header() {
  const redirect=useNavigate();
  const eml=sessionStorage.getItem("emailId")
  const pic=sessionStorage.getItem("profile")
  const authToken=sessionStorage.getItem("token")
  const logoutUser=()=>{
    sessionStorage.clear();
    redirect("/admin-login");
  }
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
     {
      authToken?
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
        <Link className="nav-link" to="/fetch">Fetch All</Link>
      </li>
      <li className="nav-item">
        <button className='btn btn-info' onClick={logoutUser}>Logout</button>
        <button className='btn btn-primary'>Welcome 
        <img src={`http://localhost:5000/${pic}`} style={{borderRadius:"100%",width:"50px",height:"30px"}} />: {eml}</button>
      </li>
      
     
    </ul>
    :
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About Us</Link>
    </li>
   
    <li className="nav-item">
      <Link className="nav-link" to="/register">Register Here</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact Us</Link>
    </li>
   
  </ul>
     }
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Header