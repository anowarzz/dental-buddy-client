import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Error from '../../assets/error.jpg'
const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <section className="flex items-center h-screen p-16 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto mt-16">
        <img src={Error} alt="" className="lg:h-96"/>
         
        <div className="max-w-md text-center mt-4">
          <h2 className="mb-2 font-semibold text-xl">
            <span className="sr-only">Error</span> {error.status}
          </h2>
          <h2 className="mb-8 font-semibold text-xl">{error.statusText}</h2>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-900 text-white hover:bg-blue-500"
          >
            <button>Go Back To Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
