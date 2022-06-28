import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home=()=>
{

    const [users,getUsers]=useState([]);
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>
    {
        const result=await axios.get("http://localhost:3001/users");
        console.log(result.data);
        getUsers(result.data.reverse());
    }
    return (
    <div className="container">
        <div className="py-4"> 
            <h1>Home Page</h1>
            
            <table class="table table-responsible table-hover table-bordered text-center">
            <thead class="thead-light">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary m-2" to="/" >View</Link>
                                    <Link className="btn btn-info m-2" to="/edit" >Edit</Link>
                                    <Link className="btn btn-danger m-2" to="/delete" >Delete</Link>    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
</table>


            </div>
        </div>
  
    );
}
export default Home