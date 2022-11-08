import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import register from '../../assets/register-animation.json'

const Register = () => {
    return (
        <div>
           <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-2 flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left">
          <Lottie animationData={register} loop={true}/>
        </div>
        <div className="card pt-10 pb-20 lg:w-9/12 border border-gray-200 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-bold">Sign Up</h1>
          <form  className="card-body">


            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input name='name'  
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name='email' 
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered" required
              />
            </div>

           

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input name='password' 
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered" required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input name='confirm' 
                type="password"
                placeholder="Confirm Your Password"
                className="input input-bordered" required
              />
            </div>
            {/* { 
              error &&
              <p className="text-brightRed font-bold text-center mb-3">{error}</p>
            } */}
            <div className="form-control mt-6">
              <input
                className="btn bg-blue-500 border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">Already Have An Account ? <Link to='/login' className="text-brightRed font-bold hover:link pl-3">
         Login</Link> </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;