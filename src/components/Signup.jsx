import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    let [username, setusername] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let[password,setpassword] = useState("")
    let [contact, setContact] = useState("");
    let [dob, setDob] = useState("");
    let [arr, setarr] = useState(
        () => {
            let getdata = localStorage.getItem("userdata")
            
            if (getdata) {
                return JSON.parse(getdata)
            } else {
                return[]
            }
        }
    );
    function formsubmit_handel() {
        let obj = {
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "password" : password,
            "contact": contact,
            "dob": dob 
        }
       let userExist = arr.some((user) => user.username === username);
       if(userExist){
        alert("User already exist");
       }
       else{
        let newArr = [...arr,obj];
        setarr(newArr);
        localStorage.setItem("userdata",JSON.stringify(newArr));
        alert("User signup successfully");
       }
    }

    useEffect(() => {
        // console.log("hello", arr)
        localStorage.setItem("userdata", JSON.stringify(arr))
   
    }, [arr])

    function deleteItem(del_index) {
        let newarr = arr.filter((items, index) => index != del_index);
        setarr(newarr);
        localStorage.setItem("userdata", JSON.stringify(newarr))
    }
    return (
        <>
            <div className='container-fluid logcontainer'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='bgimage'> <br />
                        <h1 className='heading1'>Sign Up</h1>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Username</label>
                                <input type="Email"
                                 name='Email'
                                  className='form-control inpt'
                                   placeholder='Enter Username' 
                                   onChange={(event) => setusername(event.target.value)}
                                    required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>First Name</label>
                                <input type="Email" name='Email' className='form-control inpt' placeholder='Enter your first name' onChange={(event) => setFirstName(event.target.value)} required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Last Name</label>
                                <input type="Email" name='Email' className='form-control inpt' placeholder='Enter your last name' onChange={(event) => setLastName(event.target.value)} required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Contact No.</label>
                                <input type='number' name='Email' className='form-control inpt' onChange={(event) => setContact(event.target.value)} placeholder='Enter your number' required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Password</label>
                                <input type="password" 
                                name='Email' 
                                className='form-control inpt'
                                 placeholder='Enter password'
                                 onChange={(event) => setpassword(event.target.value)}
                                  required />
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>DOB</label>
                                <input type="date" name='Email' className='form-control inpt' onChange={(event) => setDob(event.target.value)} required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className="">
                            <div className='text-center'></div>
                            <button onClick={formsubmit_handel} type='Submit' className='btn btn-success'>Submit </button> <br />
                            <Link to='/login' className=''>Sign In </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {arr?.map((items, index) => {
                    return (
                        <div key={index} className='col-lg-4 mt-3 mb-3'>
                            <div class="card">
                                <div>User Name  : {items?.username}</div>
                                <div>First Name : {items?.firstName} </div>
                                <div>Last Name  : {items?.lastName} </div>
                                <div>Contact    : {items?.contact}</div>
                                <button onClick={() => deleteItem(index)} type='submit'>Delete</button>
                                <button type='submit' onClick={() => editItem(index)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Signup;
