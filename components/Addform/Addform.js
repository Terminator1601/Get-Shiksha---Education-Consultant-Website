import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { db } from "../../Database/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

const CollegeForm = () => {
  const [collegeData, setCollegeData] = useState({
    name: "",
    country: "",
    image: "",
    course: "",
    location: "",
  });

  const formFields = [
    { label: "College Name", type: "text", name: "name" },
    {
      label: "College Country",
      type: "select",
      name: "country",
      options: [
        { value: "", label: "Default" },
        { value: "india", label: "India" },
        { value: "abroad", label: "Abroad" },
      ],
    },
    { label: "College Image URL", type: "text", name: "image" },
    { label: "Location", type: "text", name: "location" },
    {
      label: "Select Course",
      type: "select",
      name: "course",
      options: [
        { value: "eng", label: "Engineering" },
        { value: "med", label: "Medical" },
        { value: "mba", label: "MBA" },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionName =
        collegeData.country === "india" ? "Study-in-India" : "Study-in-Abroad";

      await addDoc(collection(db, collectionName), {
        name: collegeData.name,
        image: collegeData.image,
        location: collegeData.location,
        course: collegeData.course,
      });

      window.alert(
        `Data successfully added to Firestore in the ${collectionName} collection`
      );
      console.log("Data successfully added to Firestore");
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };

  return (
    <div className="text-center p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}:
            </label>
            {field.type === "text" ? (
              <input
                type="text"
                name={field.name}
                value={collegeData[field.name]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            ) : (
              <select
                name={field.name}
                value={collegeData[field.name]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md outline-none"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CollegeForm;
