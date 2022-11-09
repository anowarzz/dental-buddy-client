import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    return (
        <div className='mx-auto'>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={service?.img} alt="avatar"/>
    
        <div className="py-5 text-center">
            <h3  className="block text-2xl font-bold text-gray-800">{service?.title}</h3>
            <span className="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
        </div>
    </div>
        </div>
    );
};

export default ServiceCard;