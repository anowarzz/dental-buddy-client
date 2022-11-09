import React from 'react';
import { Link } from 'react-router-dom';

const HomePageServices = ({service}) => {
    return (
        <div className="card card-compact w-[95%] mx-auto md:w-full border border-gray-300 shadow-lg p-4">
        <figure><img src=
        {service?.img} alt="img"/></figure>
        <div className="card-body">

          <h2 className="card-title text-2xl text-center"> {service?.title}</h2>

          <div className='flex justify-center items-center'>
          <p className='text-brightRed text-xl font-bold'>Price : ${service?.price}</p>

         <Link >
         
            </Link>
          </div>
        </div>
      </div>
    );
};

export default HomePageServices;