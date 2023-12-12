// components/ImageDropdownLayout.js
import React from "react";

const Header = () => {
  return (
    <div className="flex">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/assets/logo.png" // Update the path to your image
          alt="Example Image"
          className="w-auto h-auto"
        />
      </div>

      {/* Dropdown Section */}
      {/* <div className="flex-1 p-4 flex flex-col"> */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Home</label>
      </div>

      {/* Dropdown 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Dropdown 1
        </label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your dropdown options and logic here
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Dropdown 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Dropdown 2
        </label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your dropdown options and logic here
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Dropdown 3 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Dropdown 3
        </label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your dropdown options and logic here
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    // </div>
  );
};

export default Header;
