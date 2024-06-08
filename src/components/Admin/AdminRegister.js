import React, { useState } from 'react'

const AdminRegister = () => {
    const intVal = { name: "", email: "", password: "", conpassword: "",img:"" }
    const [adminData, setData] = useState(intVal)
    const handler = (e) => {
        setData({ ...adminData, [e.target.name]: e.target.value })
    }
    const fileHandler=(e)=>{
       // console.log(e.target.files[0])
       setData({...adminData,img:e.target.files[0]})
    }
    const submit = () => {
        const { name, email, password, conpassword,img } = adminData
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("conpassword", conpassword);
        formData.append("img",img);
      
        if(password===conpassword){
            fetch('http://localhost:5000/admin-register', {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(data.message)
                    setData(intVal)
                })
                .catch((err)=>console.log(err));
        }
       else{
            alert("password and confirm password is not match")
       }

    }
    return (
        <div className='container'>
            <h1 className='text-center text-danger'>Admin Register Page</h1>
            <form  encType="multipart/form-data" method='post'>
                Name<input placeholder='Your Name' type="text" className='form-control my-3' name='name' value={adminData.name} onChange={handler} />
                <br />
                EmaiL<input type="email" placeholder='Your Email' name='email'  className='form-control my-3' value={adminData.email} onChange={handler} />
                <br />
                Password<input type="password" placeholder='Your Password' name='password'  className='form-control my-3' value={adminData.password} onChange={handler} />
                <br />
                Confirm Password<input type="password" placeholder='Your Confirm Password' name='conpassword' className='form-control my-3' value={adminData.conpassword} onChange={handler} />
                <br />
                Profile: <input type='file' name='img' onChange={fileHandler} required/><br/>
                <button type="button" className="btn btn-danger" onClick={submit} >Admin Register</button>
            </form>
        </div>
    )
}
export default AdminRegister
