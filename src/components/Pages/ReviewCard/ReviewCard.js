import React from 'react';

const ReviewCard = ({review}) => {
    return (
        
        <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
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
                <span className="text-xs text-gray-600">Date : {review?.created?.slice(0,10)}</span>
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
   

    );
};

export default ReviewCard;