import React, { useState } from "react";
 import {useNavigate} from "react-router-dom"
const AdminLogin = () => {
    const navigate=useNavigate();
  const [value, setValue] = useState({ email: "", password: "" });
  const handle = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
 
  const submit=async()=>{
    const {  email, password } = value
    if(email && password){
       let result=await fetch('http://localhost:5000/admin-login', {
        method: 'POST',
        body: JSON.stringify({
             email, password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
       .then(res=>res.json())
       .then(da=>{
        console.log(da)        
        if(da.message==="login success")
        {
          sessionStorage.setItem("emailId",da.user.email)
          sessionStorage.setItem("profile",da.user.img)
          sessionStorage.setItem("token",da.token)
          navigate("/fetch")
        }
        else{
          alert(da.message)
        }
       })        
    }
    else{
        alert('All field is required')
    }



  }
  return (
    <>
      <div className="m-5 ">
        <h1 className="text-center text-success">Admin Login</h1>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="form-control border-success border-3"
          id="email"
          onChange={handle}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="Your Password"
          className="form-control border-success border-3"
          id="password"
          onChange={handle}
        />
        <br/>
        <button type="button" onClick={submit} className="btn btn-success" >Admin Login</button>
 
      </div>
    </>
  );
};
 
export default AdminLogin;