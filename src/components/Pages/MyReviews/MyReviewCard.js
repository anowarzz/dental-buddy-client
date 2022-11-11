import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyReviewCard = ({review, handleReviewDelete, handleReviewUpdate}) => {



return (
        <div className='bg-gray-100 text-gray-800 mb-6 w-[95%] mx-auto max-w-lg'>
            <div className='mt-6 flex flex-col justify-center items-center gap-5'>
                <h2 className='text-center font-Merry font-semibold text-xl'>{review?.serviceTitle}</h2>
                <img src={review?.serviceImg} className="w-32" alt="" />
            </div>
          
      <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-400 ">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={review?.userImg}
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
              
            </div>
            <div>
              <h4 className="font-bold">{review?.userName}</h4>
              <span className="text-xs font-semibold text-gray-600">Date : {review.created.slice(0,10)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
          
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-600">
          <p className="text-sm">
          {review?.reviewText}
          </p>
        </div>
       
      </div>
      <div className="text-center flex flex-col md:flex-row gap-4 justify-center items-center">
         
          <Link>
          <button className="btn-sm bg-info font-semibold">Edit Review
          </button>
          </Link>
          <button onClick={() => handleReviewDelete(review._id)} className="btn-sm bg-Red font-semibold">Delete Review</button>
        </div>

{/* The button to open modal */}
<label htmlFor="editReview" className="btn">Edit Review</label>

{/* Modal Body */}
<input type="checkbox" id="editReview" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

  <form onSubmit={(event) => handleReviewUpdate(event, review._id)} className=''>
             
              <div className="flex flex-col justify-center items-center">
                <textarea name="reviewText" defaultValue={review?.reviewText} 
                  className="textarea textarea-bordered focus:textarea-accent h-24 w-full text-center"
                  placeholder="Please Write Your Review" required
                ></textarea>
    
                <input
                  type="submit"
                  value="Submit Review"
                  className="btn bg-success my-8 border-none md:w-3/5"
                />
              </div>
            </form>
    <div className="modal-action">
      <label htmlFor="editReview" className="btn bg-Red border-none">Close</label>
    </div>
  </div>
</div>



        </div>
    );
};

export default MyReviewCard;