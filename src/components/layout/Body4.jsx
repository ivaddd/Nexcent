import React from "react";
import pana from "./pana.png";
const Body4 = () => {
  return (
    <div className="pr-[10%] pl-[10%] py-10">
      <div className="flex lg:flex-row flex-col justify-between pt-10 items-center lg:gap-44">
        <div className="md:w-[40%]">
          <img src={pana} className="w-full" />
        </div>
        <div className="md:w-[60%]">
          <h1 className="text-[#4D4D4D] font-medium lg:text-3xl text-2xl pt-5">
            How to design your site footer like
          </h1>
          <h1 className="text-[#4D4D4D] font-medium lg:text-3xl text-2xl">
            we did
          </h1>
          <h1 className="text-left text-sm pt-4 font-inter text-[#717171]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </h1>
          <div className="pt-5">
            <button className="bg-[#4CAF4F] py-3 px-8 text-white rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body4;
