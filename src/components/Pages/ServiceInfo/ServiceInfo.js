import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import dental from '../../../assets/dental-icons.png'
const ServiceInfo = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


  const serviceInfo = useLoaderData();
  console.log(serviceInfo);

  return (
    <div className="border border-gray-200 shadow-inner">
        <div className="card-body">
        <div className="flex justify-center items-center">
     <img className="h-64  border-transparent md:h-auto md:w-5/6 md:max-w-2xl lg:max-w-4xl" src={serviceInfo?.img} alt="" />
    </div>
    <div className="mt-12 ">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-center font-Merry">{serviceInfo?.title}</h2>
        <div className="flex flex-col justify-center items-center gap-4 mt-8">
            <img src={dental} alt="" className="w-96"/>
            <p className="font-semibold font-Merry bg-black rounded-xl inline w-fit text-white px-1 md:text-2xl">Price : ${serviceInfo?.price}</p>
            <p className="font-semibold font-Merry bg-black rounded-xl text-white w-fit px-1 md:text-2xl inline">Ratings : {serviceInfo?.ratings}</p>
          </div>
        <p className="text-justify text-lg font-Merry  mt-8 md:mt-12 tracking-wide w-full leading-relaxed mx-auto md:w-[90%]">{serviceInfo.description}</p>

        </div>
    </div>
    </div>
  );
};

export default ServiceInfo;
