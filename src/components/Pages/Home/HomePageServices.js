import React from "react";
import { Link } from "react-router-dom";

const HomePageServices = ({ service }) => {
  return (
    <div className="mx-auto">
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-xl p-2 border border-gray-200">
        <img
          className="object-cover w-full h-64"
          src={service?.img}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <h3 className="block text-2xl font-bold text-gray-800 text-center mb-4">
            {service?.title}
          </h3>
          <p className="text-lg">
            {service?.description.length > 100
              ? service.description.slice(0, 100) + "....."
              : service?.description}
          </p>
        </div>
        <div className="text-center m-4">
          <Link to={`services/${service?._id}`}>
            <button className="btn-sm btn-primary text-white bg-purple-500 rounded-sm">
              Service Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
