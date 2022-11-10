import React, { useEffect, useState } from "react";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {

const [reviews, setReviews] = useState([])

useEffect( () => {
    fetch(`https://dental-buddy-server.vercel.app/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [reviews])
  


  return (
    <div className="grid grid-cols md:grid-cols-2 gap-8">
        {
            reviews.map(review => <MyReviewCard key={review._id} review={review}/>)
        }
    </div>
  );
};

export default MyReviews;
