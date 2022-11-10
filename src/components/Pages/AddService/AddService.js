import React from 'react';

const AddService = () => {
    return (
        <div>
      <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-center pt-10">
            <span className="">
             Add A New Service
            </span>
          </h2>
          
          <p className="text-center mt-3 md:mt-6">
            Please Provide Service Details
          </p>
        </div>

        <form className=''>
          <div className="flex flex-col justify-center  items-center gap-3  p-20">
            <input 
              type="text" name="title"
              placeholder="Service Title"
              className="input input-bordered focus:input-accent md:w-3/5"
            />
            <input
              type="text" name="price"
              placeholder="Service Price"
              className="input input-bordered focus:input-accent md:w-3/5"
            />
            <input
              type="text" name="servicePhoto"
              placeholder="Service PhotoURL"
              className="input input-bordered focus:input-accent md:w-3/5"
            />

          </div>

          <div className="flex flex-col justify-center items-center">
            <textarea name="serviceDescription"
              className="textarea textarea-bordered focus:textarea-accent h-24 w-3/5 text-center"
              placeholder="Add Service Description"
            ></textarea>

            <input
              type="submit"
              value="Add Service"
              className="btn bg-success my-8 border-none md:w-3/5"
            />
          </div>
        </form>
      </div>
  
    );
};

export default AddService;