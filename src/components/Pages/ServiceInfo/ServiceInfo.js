import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import clinic from "../../../assets/clinic.jpg";
import { AuthContext } from "../../../context/AuthProvider";

const ServiceInfo = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { user } = useContext(AuthContext);

  const serviceInfo = useLoaderData();
  console.log(serviceInfo);

  return (
    <div className="border border-gray-200 shadow-inner">
      <div className="md:card-body">
        <div className="flex justify-center items-center">
          <img
            className="h-64  border-transparent md:h-auto md:w-5/6 md:max-w-2xl lg:max-w-4xl"
            src={serviceInfo?.img}
            alt=""
          />
        </div>
        <div className="mt-12 ">
          <h2 className="text-2xl font-semibold md:text-4xl lg:text-6xl text-center font-Merry">
            {serviceInfo?.title}
          </h2>
          <div className="flex flex-col justify-center items-center gap-4 mt-8">
            <img src={serviceInfo?.iconImg} alt="" className="w-72" />
            <p className="font-semibold font-Merry bg-black rounded-xl inline w-fit text-white px-1 md:text-xl">
              Price : ${serviceInfo?.price}
            </p>
            <p className="font-semibold font-Merry bg-black rounded-xl text-white w-fit px-1 md:text-xl inline">
              Ratings : {serviceInfo?.ratings}
            </p>
          </div>

          <div className="my-12">
            <p className="text-lg font-Merry md:mt-12 tracking-wide   leading-relaxed w-[95%] md:w-[90%] mx-auto mb-8 ">
              {serviceInfo?.description}
            </p>
          </div>
          <div className="">
            <h4 className="text-2xl md:text-4xl font-semibold text-center font-Merry">
              Service Reviews By My Patients
            </h4>

            {user?.uid ? (
              <div className="flex flex-col gap-4 justify-center items-center mt-8">
                <textarea
                  id="review"
                  type="text"
                  placeholder="Write Your Review"
                  className="block w-3/5 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-info bg-gray-100"
                ></textarea>

                <button className="btn btn-info py-0">Submit Review</button>
              </div>
            ) : (
              <div className="px-4 py-2 bg-purple-700 text-white mt-8 w-3/5 mx-auto ">
                <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-around">
                    <h2 className="text-center text-xl text-gray-50 tracking-tighter font-bold">
                      Pleas Login To Add A Review
                    </h2>
                    <Link
                      to="/login"
                      className="px-6 font-Merry font-semibold mt-4 lg:mt-0 py-3 rounded-md border block bg-white text-gray-800"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Leroy Jenkins</h4>
                      <span className="text-xs text-gray-600">2 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                  <p>
                    Vivamus sit amet turpis leo. Praesent varius eleifend elit,
                    eu dictum lectus consequat vitae. Etiam ut dolor id justo
                    fringilla finibus.
                  </p>
                  <p>
                    Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                    eu mauris cursus venenatis. Maecenas gravida urna vitae
                    accumsan feugiat. Vestibulum commodo, ante sit urna purus
                    rutrum sem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;

{
  /* <img src={clinic} alt="" className="pt-12 w-[95%] h-fit"/> */
}
