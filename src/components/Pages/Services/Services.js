import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

 const allServices = useLoaderData();

    return (
        <div className='mb-24'>
             <div className='text-center mb-14'>
           <p className='text-2xl font-bold text-Red'>Services</p>
           <h2 className='text-5xl font-semibold mt-5' >Browse Our Products </h2>
           <p className='p-6'>
           The majority have suffered alteration in some form, by injected humour <br /> or randomised words which don't look even slightly believable. 
        </p>
           </div>
       <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
       {
            allServices.map(service => <ServiceCard key={service._id} service={service}/>)
        }
       </div>
        </div>
    );
};

export default Services;