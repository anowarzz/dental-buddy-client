import React from 'react';

const DoctorSection = () => {
    return (
        <div>
            <div className="relative">
      <img
        src="https://i.ibb.co/LZk1pb3/clinic.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-60">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                Meet Your Dentist<br className="" />
                <span className="text-teal-400">Zahir Ahmed</span>
              </h2>
           
              <p className="max-w-xl mb-4 text-base text-gray-50 md:text-lg">
                Always Looking Forward to provide you the best dental service and Provide you the brightest smile that you deserved .
              </p>
              
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <img src="https://i.ibb.co/VB4f0cD/dentist.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DoctorSection;