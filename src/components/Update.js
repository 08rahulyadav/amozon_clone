import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const params=useParams();
    const red=useNavigate()
    // console.log(params)
  const [state, setState] = useState({ name: "", email: "", password: "", conpassword: "", address: "", mobile: "" })
  const handler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  useEffect(()=>{
    fetch("http://localhost:5000/getDeatils/"+params.id)
    .then(res=>res.json())
    .then(da=>{
    //  console.log(da)
    setState(da)
    })
    .catch(err=>console.log(err))
  },[])
  const submitData = () => {
    const { name, email, mobile, password, conpassword, address } = state
    if (password === conpassword) {
      fetch('http://localhost:5000/update/'+params.id, {
        method: 'PUT',
        body: JSON.stringify({ name, email, mobile, password, conpassword, address }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          alert(json.Message)
         red("/fetch")
        })
        .catch(err=>console.log(err))
      
    }
    else {
      alert('Your password and confirm password is not match')
    }
  }

  return (
    <>
      <div className='container'>
        <form>
          <input type='text' name='name' value={state.name} onChange={handler} className='form-control my-3' placeholder='Your Name' />
          <input type='email' name='email' value={state.email} onChange={handler} className='form-control my-3' placeholder='Your Email' />
          <input type='number' name='mobile' value={state.mobile} onChange={handler} className='form-control my-3' placeholder='Your Mobile' />
          <input type='password' name='password' value={state.password} onChange={handler} className='form-control my-3' placeholder='Your Password' />
          <input type='password' name='conpassword' value={state.conpassword} onChange={handler} className='form-control my-3' placeholder='Your Confirm Password' />
          <textarea name='address' placeholder='Your Address' value={state.address} onChange={handler} className='form-control my-3'></textarea>
          <button type='button' className='btn btn-danger' onClick={submitData}>Update</button>
        </form>

      </div>
    </>
  )
}

export default Update