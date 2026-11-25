import { useState } from "react";
import { Link } from "react-router-dom";
function Register(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">
                             Create Account
                            </h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placehol
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
};
export default Register;