import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../../assets/login-animation.json";
import google from "../../../assets/google.svg";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { ScaleLoader } from "react-spinners";
import useTitle from "../../../Hooks/useTitle";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  useTitle("Login");

  // Context
  const { setUser, logIn, googleLogIn, loading, setLoading } =
    useContext(AuthContext);

  // Error State
  const [error, setError] = useState("");

  // Location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // Get Jwt token
        fetch("https://dental-buddy-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Storing Jwt in local storage
            localStorage.setItem("dental-token", data.token);
            setError("");
            form.reset();
            setLoading(false);
            navigate(from, { replace: true });
            toast.success("Login Successful");
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Login With google
  const handleGoogleLogin = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // Get Jwt token
        fetch("https://dental-buddy-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Storing Jwt in local storage
            localStorage.setItem("dental-token", data.token);
            setError("");
            setLoading(false);
            navigate(from, { replace: true });
            toast.success("Login Successful");
          });
   
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="hero w-full my-20 ">
      {loading && (
        <div className="z-20 absolute top-40">
          <ScaleLoader color="#36d7b7" size={100} />
        </div>
      )}
      <div className="mx-auto hero-content grid md:grid-cols-2 flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left ">
      <div>
        <p className="text-center text-blue-500 text-lg font-bold"> Easy Login</p>
        <p className="text-center text-lg"> <span className="text-blue-600">Email :</span> john@doe.com</p>
        <p className="text-center text-gray-700 text-lg"><span className="text-blue-600">Password: </span> John@1</p>
      </div>


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
                required
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
                required
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
              <button
                className="btn bg-purple-600 hover:bg-success  border-none"
                type="submit"
              >
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
              <Link to="/register" className="font-bold hover:link pl-3">
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
