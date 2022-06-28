import axios from "axios";
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateUser=()=>
{
    const navigate = useNavigate();
    const [userInfo,setUserInfo]=useState({
        name:"",
        username:"",
        phone:"",
        email:""
    });
    const {name,username,phone,email}=userInfo;
    const changeInput=(e)=>
    {
        setUserInfo({...userInfo,[e.target.name]:e.target.value});
    }
    const getFormData=async(e)=>
    {
        e.preventDefault();
        const res=await axios.post("http://localhost:3001/users",userInfo);
        if(res.status==201)
        {
            navigate("/");
        }
        else
        {
            alert("Error in API");
        }
    }
    return (
    <div className="container">
        <div className="py-4"> 
            <h2>Create New User </h2>
            <div className="card col-6 mx-auto">
            <div className="card-header">
                  User Information
            </div>
            <div className="card-body">
            <form onSubmit={getFormData}>
                <div className=" form-group mt-2 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" value={name} onChange={changeInput} className="col-md-4 form-control"   />
                    </div>
                </div>
                <div className=" form-group mt-2 row">
                    <label className="col-sm-2 col-form-label">User Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="username" value={username} onChange={changeInput} className="col-md-4 form-control"   />
                    </div>
                </div>
                <div className=" form-group mt-2 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" value={email} onChange={changeInput} className="col-md-4 form-control"   />
                    </div>
                </div>
                <div className=" form-group mt-2 row">
                    <label className="col-sm-2 col-form-label">phone</label>
                    <div className="col-sm-10">
                        <input type="text" name="phone" value={phone}  onChange={changeInput} className="col-md-4 form-control"   />
                    </div>
                </div>
                <div className=" form-group mt-2 row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
                </form>
                
                </div>
                </div>
        </div>
    </div>)
}
export default CreateUser;