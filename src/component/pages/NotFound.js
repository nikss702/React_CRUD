import React from "react";
import { Link } from "react-router-dom";
const NotFound=()=>
{
    return (
    <div className="notfound">
        <div className="container">
            <div className="py-4"> 
                <h1>NotFound Page</h1>
                <Link to='/' className='btn btn-primary'>Home</Link>
            </div>
        </div>
    </div>
    );
}
export default NotFound