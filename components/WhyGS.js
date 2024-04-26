import React from "react";

const WhyGS = () => {
  return (
    <>
      <div className="px-4 lg:px-0 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">
              Why GetShiksha?
            </h3>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2 lg:mb-4">
              What makes us the trusted name in GetShiksha?
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8">
              GetShiksha's mission is to help every school student get into
              her/his dream university through our unrelenting effort in
              providing the most authentic and verified information about the
              university and country to students and thus create a bond of trust
              with thousands of students.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/assets/images/trust.png"
              className="mx-auto lg:mx-0"
              width="300px"
              alt="Trust Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyGS;
