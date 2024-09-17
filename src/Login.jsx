import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate();
    const[userName,setUserName] = useState('');
    const[password,setpassword] =useState('');
    const loginHandler = (e) => {
       e.preventDefault();
       const users = JSON.parse(localStorage.getItem("userdata")) || [];
    //    const user = users.find(user => user.userName === userName && user.password === password);
    let newuser=users.find((i)=>{
        return i?.contact==userName&& i.password == password
    })
    //    console.log(user)

       if(newuser){
        alert("Login Successful");
        navigate("/home");
       }
       else{
        alert("User not found")
       }
    };
    return (
        <>
            <div className='container-fluid logcontainer'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='bgimage'> <br /><form action="">
                        <h1 className='heading1'>Sign In</h1>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>

                                <label htmlFor="" className='row'>Username</label>
                                <input type="Email"
                                 name='Email'
                                  className='form-control inpt'
                                   placeholder='Enter Contact No.'
                                   value={userName}
                                   onChange={(e) => setUserName(e.target.value)}
                                   required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Password</label>
                                <input type="password" 
                                name='Email' 
                                className='form-control inpt'
                                 placeholder='Enter password'
                                 value={password}
                                 onChange={(e) => setpassword(e.target.value)}
                                 required />
                                <a href="#" className='anch'>Forget Password?</a>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                        <br />
                        <div className="">
                            <div className='text-center'>
                                <button onClick={loginHandler} type='Submit' className='btn btn-success'>Submit </button> <br />
                                <Link to='/' className=''>Sign Up </Link>
                            </div>    
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
