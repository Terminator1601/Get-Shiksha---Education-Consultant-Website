// StudyInIndia.js
import React, { useEffect, useState } from "react";
import { db } from "../../Database/firebaseconfig";
import { collection, getDocs } from 'firebase/firestore';
import CollegeCard from "./CollegeCard";

const StudyInIndia = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Study-in-India'));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setColleges(data);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Colleges in Study-in-India</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <CollegeCard key={index} collegeData={college} />
        ))}
      </div>
    </div>
  );
};

export default StudyInIndia;
