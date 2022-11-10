
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import ReviewCard from "../ReviewCard/ReviewCard";

const ServiceInfo = () => {
  //  scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


const [reviews, setReviews] = useState([]);

const { user } = useContext(AuthContext);
const serviceInfo = useLoaderData();

console.log(user);


useEffect( () => {
  fetch('https://dental-buddy-server.vercel.app/reviews')
  .then(res => res.json())
  .then(data => setReviews(data))
}, [reviews])

   
const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
          console.log(reviewText);
          

        const submitReview = {
          serviceId : serviceInfo._id,
          serviceTitle: serviceInfo.title,
          serviceImg: serviceInfo.img,
          userName: user.displayName,
          userImg :user.photoURL,
          email: user.email,
          reviewText,
          created: new Date()
        }

        fetch('https://dental-buddy-server.vercel.app/reviews', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(submitReview)
        })
        .then(res => res.json())
        .then(data =>  {
          console.log(data);
          if(data.acknowledged){
            toast.success('Review Submitted Successfully') 
            form.reset();
          }
        })
        .catch(err => console.error(err))

}

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
           {
            serviceInfo.ratings &&  <p className="font-semibold font-Merry bg-black rounded-xl text-white w-fit px-1 md:text-xl inline">
            Ratings : {serviceInfo?.ratings}
          </p>
           }
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
              <form onSubmit={handleAddReview} className=''>
              <div className="flex flex-col justify-center  items-center gap-3 mt-16 mb-10">
                
               
               
              </div>
    
              <div className="flex flex-col justify-center items-center">
              {/* <input
                  type="number" name="rating" min="1" max="5" 
                  placeholder="Enter Service Price $"
                  className="input input-bordered focus:input-accent md:w-3/5 my-6" required
                /> */}
     
                <textarea name="reviewText"
                  className="textarea textarea-bordered focus:textarea-accent h-24 w-3/5 text-center"
                  placeholder="Please Write Your Review" required
                ></textarea>
    
                <input
                  type="submit"
                  value="Submit Review"
                  className="btn bg-success my-8 border-none md:w-3/5"
                />
              </div>
            </form>
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

         <div className="grid grid-cols 1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {
            reviews.map(review => <ReviewCard key={review._id} review={review}/>)
           }

         </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;

