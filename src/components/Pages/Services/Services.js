import React, { useContext, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../../context/AuthProvider";
import { ScaleLoader } from "react-spinners";




const Services = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


  const {loading, setLoading} = useContext(AuthContext)
  const [services, setServices] = useState([])



  useEffect( () => {
    setLoading(true)
    fetch("https://dental-buddy-server.vercel.app/services")
    .then(res => res.json())
    .then(data => {
      setServices(data)
      setLoading(false)
    })
  
  }, [])



  return (
    <div className="mb-24">

  {loading && (
          <div className="z-20 absolute top-2/4 left-2/4 w-96 min-h-screen">
            <ScaleLoader color="#36d7b7" size={150} />
          </div>

        )}

      <div className="text-center mb-14">
        <p className="text-sm text-white py-1 rounded px-3 bg-gray-600 inline">
          Your Dental Health is in Good Hands
        </p>
        <h2 className="text-5xl font-semibold mt-5 font-Merry">
          My All Services
        </h2>
        <p className="p-6">
          You won’t find a better dental experience in Town.{" "}
          <br className="hidden md:block" />
          Let’s work together to give you the brand-new smile you deserve.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
