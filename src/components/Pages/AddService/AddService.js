import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {

const handleAddService = event => {
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
    description
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
      toast.success('Service Added Successfully')
      form.reset();
    } 
  })
  .catch(err => console.error(err))

}








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

        <form onSubmit={handleAddService} className=''>
          <div className="flex flex-col justify-center  items-center gap-3  p-20">
            <input 
              type="text" name="title"
              placeholder="Service Title"
              className="input input-bordered focus:input-accent md:w-3/5" required
            />
            <input
              type="number" name="price"
              placeholder="Service Price"
              className="input input-bordered focus:input-accent md:w-3/5" required
            />
            <input
              type="text" name="serviceImg"
              placeholder="Service PhotoURL"
              className="input input-bordered focus:input-accent md:w-3/5" required
            />

          </div>

          <div className="flex flex-col justify-center items-center">
            <textarea name="description"
              className="textarea textarea-bordered focus:textarea-accent h-24 w-3/5 text-center"
              placeholder="Add Service Description" required
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