import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import register from '../../../assets/register-animation.json'
import google from '../../../assets/google.svg'
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

const {createNewUser} = useContext(AuthContext);
const [error, setError] = useState('');


const handleCreateUser = (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  console.log(email);
  // const PhotoURL = form.PhotoURL.value;
  const password = form.password.value;
  const confirm = form.confirm.value;



  console.log('clicked');
  

if(confirm !== password){
  setError("Your Password Did Not Match")
  toast.error("Password Should Be Same")  
}



createNewUser(email, password)
.then(result => {
  const user = result.user;
  console.log(user)

})



}



    return (
        <div>
           <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-2 flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left">
          <Lottie animationData={register} loop={true}/>
        </div>
        <div className="card rounded py-10 lg:w-9/12 border border-gray-200 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-bold">Register</h1>


          <form onSubmit={handleCreateUser} className="card-body pb-4">
             <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input name='name'  
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name='email' 
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered" required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">PhotoURL</span>
              </label>
              <input name='photoURL' 
                type="text"
                placeholder="Enter Your PhotoURL"
                className="input input-bordered"
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
            { 
              error &&
              <p className="text-brightRed font-bold text-center mb-3">{error}</p>
            }
            <div className="form-control mt-6">
              <button className="btn bg-purple-700 border-none"
                type="submit"
                value="Sign Up">
                    Register
              </button>
            </div>
          </form>
          <div className='flex flex-col gap-2 justify-center items-center'>
                   <p className='font-semibold'>Or Continue With Google</p>
                    <Link>
                    <img className='h-12 w-12 bg-gray-300 rounded-full' src={google} alt="" />
                    </Link>
                    <p className="text-center mt-4 "> Already Have An Account ? <Link to='/login' className="text-brightRed font-bold hover:link pl-3">
Login </Link> </p>

                  </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;