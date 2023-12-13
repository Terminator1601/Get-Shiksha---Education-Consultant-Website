// Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex" style={{ textAlign: "center" }}>
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/assets/logo.png"
          alt="Example Image"
          className="w-28 h-auto px-py"
        />
      </div>

      {/* Navigation Section */}
      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link href="/">
            <label className="block text-lg font-medium px-6 py-3">Home</label>
          </Link>
        </div>
      </div>

      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link
            href={{ pathname: "/StudyInIndia", query: { category: "India" } }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              Study In India
            </label>
          </Link>
        </div>
      </div>

      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link
            href={{ pathname: "/StudyInAbroad", query: { category: "Abroad" } }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              Study In Abroad
            </label>
          </Link>
        </div>
      </div>

      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link
            href={{ pathname: "/StudyInAbroad", query: { category: "Abroad" } }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              Predict Your College
            </label>
          </Link>
        </div>
      </div>

      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link
            href={{ pathname: "/StudyInAbroad", query: { category: "Abroad" } }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              Book An Appointment
            </label>
          </Link>
        </div>
      </div>

      <div className="text-lg flex">
        <div className="mb-4 text-lg">
          <Link
            href={{ pathname: "/StudyInAbroad", query: { category: "Abroad" } }}
          >
            <label className="block text-lg font-medium px-6 py-3">
              About Us
            </label>
          </Link>
        </div>
      </div>

      {/* ... other navigation links ... */}
    </div>
  );
};

export default Header;
