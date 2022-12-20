import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ClockLoader } from 'react-spinners';
import RotateLoader from 'react-spinners/RotateLoader';
import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
useTitle('Add Service')

const [loading, setLoading] = useState(false)


const handleAddService = event => {
  setLoading(true)
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const img = form.serviceImg.value;
  const price = form.price.value;
  const description = form.description.value;

  const service = {
    title,
    img,
    price,
    description,
    created: new Date()
  }

  fetch('https://dental-buddy-server.vercel.app/services', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body:JSON.stringify(service)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.acknowledged){
      setLoading(false)
      toast.success('Service Added Successfully')
      form.reset();
    } 
  })
  .catch(err => {
    console.error(err)
    setLoading(false)
  })

}








    return (
        <div>
          {
            loading && <div className='flex justify-center items-center'>
              <RotateLoader color='blue'/>
            </div>
          }

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

        <form onSubmit={handleAddService} className=''>
          <div className="flex flex-col justify-center  items-center gap-3  p-20">
            <input 
              type="text" name="title"
              placeholder="Enter Service Title"
              className="input input-success focus:input-accent md:w-3/5 w-5/6" required
            />
            <input
              type="number" name="price"
              placeholder="Enter Service Price $"
              className="input input-success focus:input-accent md:w-3/5 w-5/6" required
            />
            <input
              type="text" name="serviceImg"
              placeholder="Enter Service PhotoURL"
              className="input input-success focus:input-accent md:w-3/5 w-5/6" required
            />

          </div>

          <div className="flex flex-col justify-center items-center">
            <textarea name="description"
              className="textarea textarea-success focus:textarea-accent h-24 w-5/6 md:w-3/5 text-center"
              placeholder="Add Service Description" required
            ></textarea>

            <button  type="submit"
              className="btn bg-dark-500 hover:bg-zinc-600 my-8 border-none md:w-3/5 w-5/6"> 
              Add Service
              </button>
             
      
          </div>
        </form>
      </div>
  
    );
};

export default AddService;