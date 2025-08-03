import React from "react";

const OurServiceProvider = () => {
  return (
    <div className="bg-gradient-to-r from-[#22d3ee] via-[#0c3b4a] to-[#104b5f]">
      <div className="max-w-7xl p-8 mx-auto text-center text-white">
        <h1 className="text-3xl font-semibold text-white my-4">
          Worldwide largest home service provider
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
          <div className="border-r border-white pr-4">
            <h4 className="font-semibold text-xl">19500+</h4>
            <p className="font-semibold text-xl">Happy Customers</p>
          </div>
          <div>
            <h4 className="font-semibold text-xl">10000+</h4>
            <p className="font-semibold text-xl"> Service Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceProvider;
