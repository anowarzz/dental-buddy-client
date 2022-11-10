import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/dental-logo.jpg";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);




const logOutHandler = () => {
  logOut()
  .then(() => {})
  .catch((err) => console.error(err))
};


  return (
    <div>
      <div className="z-20 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            title="Providing Best Dental Service"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="h-16 md:h-20 " />
            <h2 className="ml-2 text-black font-bold tracking-wide text-2xl uppercase font-Merry">
              <span className="">DENTAL</span> BUDDY
            </h2>
          </NavLink>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
              >
                Blog
              </NavLink>
            </li>

            {user?.uid ? (
              <>
               <li>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
              >
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-service"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
              >
                Add Service
              </NavLink>
            </li>
                { user?.photoURL ? <>
                  <img
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                    className="rounded-full mb-4 md:mb-0"
                    src={user?.photoURL}
                    title={user?.displayName}
                  />
                  </> : <FontAwesomeIcon className="text-lg" icon={faUser} title={user?.displayName}/>
                }
                  <li>
                    <NavLink onClick={logOutHandler}
                      className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-Red hover:bg-[#ac2121] focus:shadow-outline focus:outline-none"
                      aria-label="Log Out"
                      title="Log Out"
                    >
                    Log Out
                    </NavLink>
                  </li>
                
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 focus:shadow-outline focus:outline-none hover:bg-success"
                    aria-label="Login"
                    title="Login"
                  >
                    Login
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/register"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 focus:shadow-outline focus:outline-none hover:bg-success"
                    aria-label="Register"
                    title="Register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <div className="lg:hidden z-20">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        className="inline-flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <img src={logo} alt="" className="h-16 md:h-20 " />
                        <h2 className="ml-2 text-black font-bold tracking-wide text-2xl uppercase">
                          DENTAL BUDDY
                        </h2>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                    <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>

            {user?.uid ? (
              <>
               <li>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
                onClick={() => setIsMenuOpen(false)}
              >
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-service"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide text-success transition-colors duration-200 hover:text-emerald-500 hover:outline p-1": "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-500 hover:outline p-1"
              }
                onClick={() => setIsMenuOpen(false)}
              >
                Add Service
              </NavLink>
            </li>
                { user?.photoURL ?
                  <img
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                    className="rounded-full mb-4 md:mb-0"
                    src={user?.photoURL}
                  />
                :  <FontAwesomeIcon className="text-lg" icon={faUser} />
                }
                  <li>
                    <NavLink 
                      className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-Red hover:bg-[#ac2121] focus:shadow-outline focus:outline-none"
                      aria-label="Log Out"
                      title="Log Out"
                      onClick={() => {
                        setIsMenuOpen(false)
                        logOutHandler()
                      }}
                    >
                    
                      Log Out
                  
                      
                    </NavLink>
                  </li>
                
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 focus:shadow-outline focus:outline-none hover:bg-success"
                    aria-label="Login"
                    title="Login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/register"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 focus:shadow-outline focus:outline-none hover:bg-success"
                    aria-label="Register"
                    title="Register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
