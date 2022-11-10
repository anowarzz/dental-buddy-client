import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {

  
  return (
    <div className="mx-auto">
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-xl p-2 border border-gray-200">
      <PhotoProvider>
      <PhotoView src={service?.img}>
      <img
          className="object-cover w-full h-64  hover:border-accent-content hover:border-transparent hover:border-4"
          src={service?.img}
          alt="avatar"
        />
      </PhotoView>
    </PhotoProvider>

        <div className="py-5 text-center">
          <h3 className="block text-2xl font-bold text-gray-800 text-center mb-4">
            {service?.title}
          </h3>
          <p className="text-lg">
            {service?.description.length > 100
              ? service.description.slice(0, 100) + "....."
              : service?.description}
          </p>
          <div className="flex justify-around mt-3">
            <p className="font-semibold font-Merry bg-success rounded-lg px-1">Price : ${service.price}</p>
            {/* <p className="font-semibold font-Merry rounded-xl px-1">Ratings : {service.ratings}</p> */}
          </div>
        </div>
        <div className="text-center m-4">
          <Link to={`/services/${service?._id}`}>
            <button className="btn-sm btn-primary text-white bg-purple-500 rounded-sm">
              Service Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
