import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import login from '../../assets/login-animation.json'
import google from '../../assets/google.svg'

const Login = () => {
        return (
            <div className="hero w-full my-20">
              <div className="mx-auto hero-content grid md:grid-cols-2 gap-2 flex-col lg:flex-row items-center justify-center">
                <div className="text-center lg:text-left">
               
               <Lottie animationData={login} loop={true}/>
               
                </div>
                <div className="card py-10  rounded border border-gray-200 shadow-md lg:w-3/4">
                  <h1 className="text-3xl md:text-5xl text-center font-bold">Login</h1>
                  <form  className="card-body pb-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Email</span>
                      </label>
                      <input name="email" 
                        type="text"
                        placeholder="Your Email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Password</span>
                      </label>
                      <input name="password" 
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered"
                      />
                    </div>
                   
                    <div className="text-end mt-5">
                    <label className="">
                      <Link
                        to=""
                        alt=""
                        className="label-text-alt  text-center"
                      >
                        <button  className="hover:link">Forgot password?</button>
                      </Link>
                    </label>
                    </div>
                    {/* { 
                      error &&
                      <p className="text-brightRed font-bold text-center mb-3">{error}</p>
                    } */}
                    <div className="form-control mt-6">
                      <button className="btn bg-purple-700 border-none"
                        type="submit"
                        value="Login">
                            Login
                      </button>
                   
                    </div>
                  </form>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                   <p className='font-semibold'>Or Continue With Google</p>
                    <Link>
                    <img className='h-12 w-12 bg-gray-300 rounded-full' src={google} alt="" />
                    </Link>
                    <p className="text-center mt-4 ">New Here? <Link to='/register' className="text-brightRed font-bold hover:link pl-3">
                 Sign Up </Link> </p>

                  </div>
                  
                </div>
              </div>
            </div>
    );
};

export default Login;