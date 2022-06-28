import React from "react";
const Contact=()=>
{
    return (
    <div className="container">
        <div className="py-4"> 
            <h1>Contact Page </h1>
            <form>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}
export default Contact