import React from "react";
import img from "./image 9.png";
import me from "./Frame 10.png";
const Body5 = () => {
  return (
    <div className="pr-[10%] pl-[10%] py-10 bg-[#F5F7FA]">
      <div className="flex lg:flex-row flex-col justify-between pt-10 items-center lg:gap-44">
        <div className="md:w-[40%]">
          <img src={img} className="w-full" />
        </div>
        <div className="md:w-[60%]">
          <h1 className="text-left text-sm pt-4 font-inter text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </h1>
          <h1 className="text-[#4CAF4F] font-medium pt-3">Tim Smith</h1>
          <h1 className="text-[#89939E] font-inter font-normal pt-2">
            British Dragon Boat Racing Association
          </h1>
          <div className="flex flex-row">
            <div>
              <img src={me} className="pt-7" />
            </div>
            <div className="pt-5">
              <button className="text-[#4CAF4F] pt-3 pl-4 font-medium">
                Meet all customers →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body5;
