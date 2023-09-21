import React from "react";
import l from "./Logo.png";
import t from "./t.png";
import f from "./Frame 35.png";
const Body2 = () => {
  return (
    <div className="pr-[10%] pl-[10%] py-10">
      <div className="">
        <div className="text-center">
          <h1 className="font-medium lg:text-3xl text-2xl text-[#4D4D4D]">
            Our Clients
          </h1>
          <h1 className="font-medium text-slate-700 py-3">
            We have been working with some Fortune 500+ clients
          </h1>
        </div>
        <div className="grid grid-cols-7 py-6">
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
          <div className="flex justify-center">
            <img src={l} />
          </div>
        </div>
        <div className="text-center pt-4">
          <h1 className="font-medium lg:text-3xl text-2xl text-[#4D4D4D]">
            Manage your entire community
          </h1>
          <h1 className="font-medium lg:text-3xl text-2xl py-1 text-[#4D4D4D]">
            in a single system
          </h1>
          <h1 className="font-medium text-[#717171] py-1">
            Who is Nextcent suitable for?
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col pt-10 items-center justify-center lg:gap-24">
          <div className="flex flex-col items-center rounded shadow-lg w-52 lg:w-72 mb-10 bg-white">
            <img src={t} />
            <div className="px-6 py-4">
              <div className="font-bold lg:text-xl text-sm mb-2 text-[#4D4D4D]">
                <h1 className="text-center">Clubs And</h1>
                <h1 className="text-center">Groups</h1>
              </div>
              <p className="text-center font-inter text-sm text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded shadow-lg w-52 lg:w-72 mb-10 bg-white">
            <img src={t} />
            <div className="px-6 py-4">
              <div className="font-bold lg:text-xl text-sm mb-2 text-[#4D4D4D]">
                <h1 className="text-center">Clubs And</h1>
                <h1 className="text-center">Groups</h1>
              </div>
              <p className="text-center font-inter text-sm text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded shadow-lg w-52 lg:w-72 mb-10 bg-white">
            <img src={t} />
            <div className="px-6 py-4">
              <div className="font-bold lg:text-xl text-sm mb-2 text-slate-700">
                <h1 className="text-center">Clubs And</h1>
                <h1 className="text-center">Groups</h1>
              </div>
              <p className="text-center font-inter text-sm text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between pt-10 items-center lg:gap-44">
          <div className="md:w-[40%]">
            <img src={f} className="w-full" />
          </div>
          <div className="md:w-[60%]">
            <h1 className="text-[#4D4D4D]  font-medium lg:text-3xl text-2xl">
              The unseen of spending three
            </h1>
            <h1 className="text-[#4D4D4D]  font-medium lg:text-3xl text-2xl">
              years at Pixelgrade
            </h1>
            <h1 className="text-left text-sm pt-4 font-inter text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </h1>
            <div className="pt-5">
              <button className="bg-[#4CAF4F] py-3 px-8 text-white rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
