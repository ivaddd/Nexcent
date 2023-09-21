import React from "react";
import tu from "./tu.png";
const Body3 = () => {
  return (
    <div className="pr-[10%] pl-[10%] py-10 bg-[#F5F7FA]">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="items-center">
          <h1 className="text-[#4D4D4D] font-medium lg:text-3xl text-2xl">
            Helping a local
          </h1>
          <h1 className="text-[#4CAF4F] font-medium lg:text-3xl text-2xl">
            business reinvent itself
          </h1>
          <h1 className="text-[#18191F] font-inter pt-1">
            We reached here with our hard work and dedication
          </h1>
        </div>
        <div className="grid grid-cols-2 items-center justify-center pr-4  lg:pr-12">
          <div className="flex items-center px-4 py-5">
            <img src={tu} className="" />
            <div>
              <h1 className="font-bold lg:text-xl text-sm text-[#4D4D4D]">
                46,328
              </h1>
              <h1 className="font-medium text-[#717171]">Clubs</h1>
            </div>
          </div>
          <div className="flex items-center px-4 py-5">
            <img src={tu} className="" />
            <div>
              <h1 className="font-bold lg:text-xl text-sm text-[#4D4D4D]">
                46,328
              </h1>
              <h1 className="font-medium text-[#717171] ">Clubs</h1>
            </div>
          </div>
          <div className="flex items-center px-4 py-5">
            <img src={tu} className="" />
            <div>
              <h1 className="font-bold lg:text-xl text-sm text-[#4D4D4D]">
                46,328
              </h1>
              <h1 className="font-medium text-[#717171]">Clubs</h1>
            </div>
          </div>
          <div className="flex items-center px-4 py-5">
            <img src={tu} className="" />
            <div>
              <h1 className="font-bold lg:text-xl text-sm text-[#4D4D4D]">
                46,328
              </h1>
              <h1 className="font-medium text-[#717171]">Clubs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;
