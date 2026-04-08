import React from "react";
import bookImg from '../../assets/banner.png'

const Banner = () => {
  return (
  
        
    <div className="hero bg-base-300   min-h-[70vh] rounded-2xl my-8 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-10">
        <img
           src={bookImg}
           className="max-w-sm bg-base-300 rounded-lg  p-5"
           />
        <div className=" space-y-16">
          <h1 className="text-7xl font-bold ">
            {" "}
            Books to freshen up <br />your bookshelf
          </h1>

          <button className="btn btn-success text-white"> View The List</button>
        </div>
      </div>
    </div>
 
  );
};

export default Banner;
