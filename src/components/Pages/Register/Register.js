import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import register from "../../../assets/register-animation.json";
import google from "../../../assets/google.svg";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { ScaleLoader } from "react-spinners";
import useTitle from "../../../Hooks/useTitle";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
useTitle('Register')

  // context and states
  const {
    createNewUser,
    updateUserProfile,
    googleLogIn,
    setUser,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const [error, setError] = useState("");

  // location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please Provide a Valid Email");
    }

    if (password.length < 6) {
      setError("Password Must Be 6 Character or More");
      return;
    }

    if (confirm !== password) {
      setError("Your Password Did Not Match");
      return;
    }

    createNewUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      setError("");
      setLoading(false);
      toast.success("Registration Successful");
      handleUpdateUserProfile(name, photo);
      navigate(from, { replace: true });
    });

    const handleUpdateUserProfile = (name, photo) => {
      const profile = {displayName: name, photoURL: photo};

      updateUserProfile(profile)
        .then(() => {})
        .catch((e) => console.error(e));
    };
  };

  // Register With google
  const handleGoogleRegister = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="hero w-full my-20">
        {loading && (
          <div className="z-20 absolute top-40">
            <ScaleLoader color="#36d7b7" size={100} />
          </div>
        )}
        <div className="hero-content grid md:grid-cols-2 gap-2 flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left">
            <Lottie animationData={register} loop={true} />
          </div>
          <div className="card rounded py-10 lg:w-9/12 border border-gray-200 shadow-md">
            <h1 className="text-3xl md:text-5xl text-center font-bold">
              Register
            </h1>

            <form onSubmit={handleCreateUser} className="card-body pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  name="name"
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
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">PhotoURL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Enter Your PhotoURL"
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
                  placeholder="Type Your Password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                  name="confirm"
                  type="password"
                  placeholder="Confirm Your Password"
                  className="input input-bordered"
                  required
                />
              </div>
              {error && (
                <p className="text-Red font-bold text-center mb-3">{error}</p>
              )}
              <div className="form-control mt-6">
                <button
                  className="btn bg-purple-600 hover:bg-success border-none"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="font-semibold">Or Continue With Google</p>
              <Link onClick={handleGoogleRegister}>
                <img
                  className="h-12 w-12 bg-gray-300 rounded-full"
                  src={google}
                  alt=""
                  title="Register With Google"
                />
              </Link>
              <p className="text-center mt-4 ">
                {" "}
                Already Have An Account ?{" "}
                <Link
                  to="/login"
                  className="text-brightRed font-bold hover:link pl-3"
                >
                  Login{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
