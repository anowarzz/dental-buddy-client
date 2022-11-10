import React from "react";

const EditReview = () => {





  return (
    <div>
      <form>
        <div className="flex flex-col justify-center items-center">
         
          <textarea
            name="reviewText"
            className="textarea textarea-bordered focus:textarea-accent h-40 md:h-52 w-4/5 md:w-3/5 text-center"
            placeholder="Please Write Your Review"
            required
          ></textarea>

          <input
            type="submit"
            value="Submit Review"
            className="btn bg-success my-8 border-none md:w-3/5"
          />
        </div>
      </form>
    </div>
  );
};

export default EditReview;
