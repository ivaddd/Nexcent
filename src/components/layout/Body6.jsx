import React from "react";
import mg from "./image 20.png";
const Body6 = () => {
  return (
    <div className="pr-[10%] pl-[10%] py-10">
      <div className="text-center">
        <h1 className="text-[#4D4D4D] font-medium lg:text-3xl text-2xl">
          Caring is the new marketing
        </h1>
        <h1 className="text-center font-inter text-[#717171]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </h1>
      </div>
      <div className=" flex lg:flex-row  flex-col justify-center lg:gap-24">
        <div className="relative py-4 pb-10">
          <div className="overflow-hidden">
            <img src={mg} className="w-full rounded-lg" />
          </div>
          <div className="bg-white w-[90%] rounded-lg shadow-lg absolute left-4 lg:top-36 top-40 py-5">
            <h1 className="font-medium text-[#717171] text-center">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <h1 className="text-[#4CAF4F] text-center font-medium pt-3">
              Readmore →
            </h1>
          </div>
        </div>
        <div className="relative py-4 pb-10">
          <div className="overflow-hidden">
            <img src={mg} className="w-full rounded-lg" />
          </div>
          <div className="bg-white w-[90%] rounded-lg shadow-lg absolute left-4 lg:top-36 top-40 py-5">
            <h1 className="font-medium text-[#717171] text-center">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <h1 className="text-[#4CAF4F] text-center font-medium pt-3">
              Readmore →
            </h1>
          </div>
        </div>
        <div className="relative py-4 pb-10">
          <div className="overflow-hidden">
            <img src={mg} className="w-full rounded-lg" />
          </div>
          <div className="bg-white w-[90%] rounded-lg shadow-lg absolute left-4 lg:top-36 top-40 py-5">
            <h1 className="font-medium text-[#717171] text-center">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <h1 className="text-[#4CAF4F] text-center font-medium pt-3">
              Readmore →
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body6;
