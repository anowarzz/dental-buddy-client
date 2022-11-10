import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

 const services = useLoaderData();
 useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    

    return (
        <div className='mb-24'>
             <div className='text-center mb-14'>
           <p className='text-sm text-white py-1 rounded px-3 bg-gray-600 inline'>Your Dental Health is in Good Hands</p>
           <h2 className='text-5xl font-semibold mt-5 font-Merry' >My All Services</h2>
           <p className='p-6'>
           You won’t find a better dental experience in Town. <br className='hidden md:block'/>
           Let’s work together to give you the brand-new smile you deserve. 
        </p>
           </div>
       <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
       {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
       </div>
        </div>
    );
};

export default Services;