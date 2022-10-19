import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';



const SignUp = () => {
    const {signUp} = useContext(AuthContext);
    const [error, setError]= useState(null)
    const handleSignUp = event =>
    {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
       
        if(password.length < 6)
        {
            setError('your password length less than 6 digit');
            return;
        }
        else if(password !== confirm)
        {
            setError('your password is not match');
            return;
        }

        signUp(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            form.reset()
            
          })
          .catch((error) => {
           console.error('error',error)
            // ..
          });

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6"></p>
    </div>
    <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered " required/>
        </div>
        <div className="form-control mt-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"  >Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered" name='confirm' required />
        </div>
        <p className='text-rose-700 my-5'>{error}</p>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </form>
    <p>Already have an account? <Link to='/login'>Login</Link> </p>
  </div>
</div>
    );
};

export default SignUp;