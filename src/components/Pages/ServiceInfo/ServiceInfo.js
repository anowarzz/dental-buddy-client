import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceInfo = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  
  const serviceInfo = useLoaderData();
  console.log(serviceInfo);

  return (
    <div>
      <h3>This is the servide info area {serviceInfo?.title}</h3>
    </div>
  );
};

export default ServiceInfo;
