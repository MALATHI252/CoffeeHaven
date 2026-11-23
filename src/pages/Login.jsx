import {useState} from 'react';
import{Link} from 'react-router-dom';
function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    function handleLogin(event){
        event.preventDefault();
        if (email===''||password===''){
            alert("Please all the fiels");
            return;
        }
        alert("Login form submitted successfully!");
    }
    return(
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='card shadow'>
                    <div className='card-bofy p-4'>
                        <h2 className='text-center mb-4'>
                            Welcome Back</h2>
                            <form onSubmit={{handleLogin}}>
                                <div className='mb-3'>
                                    <label className='form-label'>Email Address</label>
                                    <input type='email' className='form-control'placeholder='Enter your email'
                                    value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Password</label>
                                    <input type='password' className='form-control'placeholder='Enter your password'value={password}
                                    onChange={(e)=>setPassword(e.target.value)}required/>         
                                                           </div>
                                                           <button type='submit'className='btn btn-warning w-100'>
                                                            Login
                                                           </button>
                            </form>
                            <p className='text-center mt-3'>Dont have an account?{''}
                                <Link to='/register'>
                                Register here</Link>
                            </p>
                            </div>
                            </div>          
                                  </div>
            </div>
        </div>
    );
}
export default Login;