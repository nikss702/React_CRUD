import axios from "axios";
import React,{useState,useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";

const EditUser=()=>
{
    const {id}=useParams();
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
    const loadUser=async(e)=>
    {
        const res=await axios.get(`http://localhost:3001/users/${id}`);
        if(res.status==200)
        {
            setUserInfo(res.data);
        }
        else
        {
            alert("Error in API");
        }
    }
    useEffect(()=>
    {
        loadUser();
    },[]);
    const getFormData=async(e)=>
    {
        e.preventDefault();
        const res=await axios.put(`http://localhost:3001/users/${id}`,userInfo);
        if(res.status==200)
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
            <h2>Edit User Info {id}</h2>
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
                <button type="submit" className="btn btn-success">Update</button>
                </div>
                </div>
                </form>
                
                </div>
                </div>
        </div>
    </div>)
}
export default EditUser;