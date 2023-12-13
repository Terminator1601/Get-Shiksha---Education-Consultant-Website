import React from "react";
// import styles from "@/components/styles/MovingText.module.css"

const Header = () => {
  return (
    <div className="flex" style={{textAlign:"center"}}>
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/assets/logo.png" // Update the path to your image
          alt="Example Image"
          className="w-28 h-auto  px-py"
        />
      </div>

      {/* <div className="flex-1 p-4 flex flex-col"> */}
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <a href="/" className="" style={{ textDecoration: "none" }}>
            <label className="block text-lg font-medium px-6 py-3">Home</label>
          </a>
        </div>
      </div>
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <a
            href="/StudyInIndia"
            className=""
            style={{ textDecoration: "none" }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              Study In India
            </label>
          </a>
        </div>
      </div>
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <a href="/" className="" style={{ textDecoration: "none" }}>
            <label className="block text-lg font-medium px-6 py-3">
              Study In Abroad
            </label>
          </a>
        </div>
      </div>
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <a href="/" className="" style={{ textDecoration: "none" }}>
            <label className="block text-lg font-medium px-6 py-3">
              Predict Your College
            </label>
          </a>
        </div>
      </div>
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <a href="/" className="" style={{ textDecoration: "none" }}>
            <label className="block text-lg font-medium px-6 py-3">
              About Us
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
