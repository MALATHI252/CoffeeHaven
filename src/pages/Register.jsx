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
                                    <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number
                                    </label>
                                    <input type="tel" className="form-control" placeholder="Enter 10-digit phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} maxLength="10"required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Create password" value={password} onChange={(e)=>setPassword(e.target.value)}minLength="6" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}required/>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Register</button>
                                <p className="text center mt-3">Already have an account?{""}
                                    <Link to='/login'>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
};
export default Register;