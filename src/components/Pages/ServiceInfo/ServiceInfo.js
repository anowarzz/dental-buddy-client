import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceInfo = () => {

    const serviceInfo = useLoaderData();
    console.log(serviceInfo);
    

    return (
        <div>
            <h3>This is the servide info area {serviceInfo?.title}</h3>
        </div>
    );
};

export default ServiceInfo;