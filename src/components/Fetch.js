import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
function Fetch() {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    fetch("http://localhost:5000/fetch")
    .then(res=>res.json())
    .then(da=>{
    //  console.log(da)
      setData(da)
    })
    .catch(err=>console.log(err))
  }
  const deleted=async(id)=>{
    //console.log(id)
    let d=await fetch('http://localhost:5000/delete/'+id, {
      method: 'DELETE',
    });
    if(d){
      getData()
    }
  }
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">DOR</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((v,i)=>
      <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{v.name.toUpperCase()}</td>
        <td>{v.email.toUpperCase()}</td>
        <td>{v.address.toUpperCase()}</td>
        <td>{v.mobile}</td>
        <td>{v.date.slice(0,10)}</td>
        <td>
          <button className='btn btn-danger' onClick={()=>deleted(v._id)}>Delete</button>
          <Link to={`/update/${v._id}`}><button className='btn btn-warning'>Update</button></Link>
        </td>
      </tr>
    )
   }
 
  </tbody>
</table>
    </>
  )
}

export default Fetch