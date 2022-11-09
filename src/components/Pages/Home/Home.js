import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/dental-banner.jpg'
import HomePageServices from './HomePageServices';


const Home = () => {

const [services, setServices] = useState([]);

useEffect( () => {
  fetch('http://localhost:5000/top-services')
  .then(res => res.json())
  .then(data => setServices(data))
}, [])



    return (
        <div>
          <div className="hero min-h-screen mb-24" style={{ backgroundImage: `url(${banner})` }}>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white"> Your Great <span className='text-yellow-500'>Smile</span> Begins </h1>
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">With A Great <span className='text-yellow-500'>Dentist</span></h1>
            <p className="mb-5"> Experience the best of dentistry and perfect your smile</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
      <div className='text-center mb-14'>
           
           <h2 className='text-5xl font-semibold mt-5' >My Services</h2>
           <p className='p-6'>
           The majority have suffered alteration in some form, by injected humour <br /> or randomised words which don't look even slightly believable. 
        </p>
           </div>

     <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-10'>
     {
        services.map(service => <HomePageServices key={service._id} service={service}/>)
      }
     </div>

     <div className='text-center mb-20'>
     <Link to='/services'>
     <button className="btn btn-primary relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-gray-50">View All Services
	<span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-Red"></span>
</button>
</Link>
      </div>
  
        </div>
    );
};

export default Home;