import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/dental-banner.jpg'
import useTitle from '../../../Hooks/useTitle';
import HomePageServices from './HomePageServices';


const Home = () => {
useTitle('Home')


const [services, setServices] = useState([]);

useEffect( () => {
  fetch('https://dental-buddy-server.vercel.app/top-services')
  .then(res => res.json())
  .then(data => setServices(data))
}, [])



    return (
        <div>
          <div className="hero min-h-screen mb-24" style={{ backgroundImage: `url(${banner})` }}>

        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white font-Merry"> Your Great <span className='text-secondary'>Smile</span> Begins </h1>
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white font-Merry">With A Great <span className='text-secondary'>Dentist</span></h1>
            <p className="mb-5 text-lg"> Experience the best of dentistry and perfect your smile. I am Here to ensure that you receive the best treatment that you require at a very time that suits you.</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
      <div className='text-center mb-14 relative'>
           <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
           <p className='text-sm bg-secondary text-white inline p-1 rounded-xl font-serif'>I care For Your Smile</p>
           <p className='text-sm bg-secondary text-white inline p-1 rounded-xl font-serif'>Committed To Excellence</p>
           <p className='text-sm bg-secondary text-white inline p-1 rounded-xl font-serif'>Creating Brighter Smiles</p>
           </div>
           <h2 className='text-5xl font-semibold mt-5 font-Merry' >My Services</h2>
           <p className='p-6 text-lg'>
           Adults and kids, I welcome patients of all ages! <br className='hidden md:block'/> I am passionate about building lifetime relationships <br className='hidden md:block'/> through positive experience.
        </p>
           </div>

     <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-10'>
     {
        services.map(service => <HomePageServices key={service._id} service={service}/>)
      }
     </div>

     <div className='text-center mb-20'>
     <Link to='/services'>
     <button className="btn hover:bg-primary  relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-800 ">

     <FontAwesomeIcon icon={faTooth}/>
      <p className='px-2'>
      View All Services
      </p>
      <FontAwesomeIcon icon={faTooth}/>
</button>
</Link>
      </div>
  
        </div>
    );
};

export default Home;