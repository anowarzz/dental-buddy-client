import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    //   Loading All Reviews of a User Using Email

    fetch(
      `https://dental-buddy-server.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("dental-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("dental-token");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviews, logOut]);

  //  Deleting Single Review Using Id
  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are You Sure Want To Delete This Review");
    if (proceed) {
      fetch(`https://dental-buddy-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${localStorage.getItem("dental-token")}`,
          },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount > 0) {
            console.log("deleted");

           toast.success('Review Deleted Successfuly')
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };



  return (
    <div className="">
      <div className="text-center mt-6 mb-12">
        <p className="inline rounded-lg p-1 text-2xl md:text-4xl text-center text-gray-50 font-semibold mb-12 bg-gray-800 text-white">
          Your All Reviews
        </p>
      </div>
      {reviews.length > 0 ? (
        <div className="grid grid-cols md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              handleReviewDelete={handleReviewDelete}
            />
          ))}
        </div>
      ) : (
        <div className="flex  flex-col gap-6 justify-center items-center mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 text-gray-400 text-center"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
          <h3 className="text-center font-semi bold font-Merry text-xl md:text-2xl">
            You Have Not Reviewed Any Services Yet
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
