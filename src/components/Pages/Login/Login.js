import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../../assets/login-animation.json";
import google from "../../../assets/google.svg";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";



const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // Contest
  const { user, setUser, logIn, googleLogIn} =
    useContext(AuthContext);

  // Error State
  const [error, setError] = useState("");

  // Location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Login Successful");
        navigate(from, { replace: true });
         
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

// Login With google 
const handleGoogleLogin = () => {
  googleLogIn(googleProvider)

  .then(result => {
    const user = result.user;
    setUser(user);
    toast.success('Login Successful')
    navigate(from, {replace:true})
  })
  .catch(err => {
    console.error(err)
    setError(err.message)
  })
}


  return (
    <div className="hero w-full my-20">
      <div className="mx-auto hero-content grid md:grid-cols-2 flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="card py-10  rounded border border-gray-200 shadow-md lg:w-3/4">
          <h1 className="text-3xl md:text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogIn} className="card-body pb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
            </div>

            <div className="text-end mt-5">
              <label className="">
                <Link to="" alt="" className="label-text-alt  text-center">
                  <button className="hover:link">Forgot password?</button>
                </Link>
              </label>
            </div>
            {error && (
              <p className="text-Red font-bold text-center mb-3">{error}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-info hover:btn-primary border-none" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="font-semibold">Or Continue With Google</p>
            <Link onClick={handleGoogleLogin}>
              <img
                className="h-12 w-12 bg-gray-300 rounded-full"
                src={google}
                alt="google logo"
                title="Sign In With Google"
              />
            </Link>
            <p className="text-center mt-4 ">
              New To Dental Buddy ?
              <Link
                to="/register"
                className="font-bold hover:link pl-3"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
