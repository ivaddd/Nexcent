import React from "react";
import i from "./Illustration.png";
const Body1 = () => {
  return (
    <div className="pr-[10%] pl-[10%]  bg-[#F5F7FA]">
      <div className="flex lg:flex-row flex-col justify-between mt-10 pt-16 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-medium text-[#4D4D4D]">
            Lesson and insights
          </h1>
          <h1 className="text-[#4CAF4F] text-4xl lg:text-5xl font-medium py-2">
            from 8 years
          </h1>
          <h1 className="py-3 font-medium lg:text-1xl text-slate-700">
            Where to grow your business as a photographer: site or social media?
          </h1>
          <button className="bg-[#4CAF4F] py-2 px-2 rounded text-white">
            Register
          </button>
        </div>

        <div className="pl-8">
          <img src={i} className="lg:w-96 w-80 bg-contain" />
        </div>
      </div>
    </div>
  );
};

export default Body1;
