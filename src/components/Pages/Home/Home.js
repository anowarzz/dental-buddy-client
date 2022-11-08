import React, { useEffect } from 'react';
import banner from '../../../assets/dental-banner.jpg'
import banner2 from '../../../assets/dental.jpg'
const Home = () => {



    return (
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>

        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Let Me Brighten Your Smile</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  
        </div>
    );
};

export default Home;