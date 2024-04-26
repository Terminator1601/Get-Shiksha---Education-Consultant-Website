// import React from "react";
// import { useRouter } from "next/router";
// import Header from "@/components/Header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";

// const index = () => {
//   const router = useRouter();
//   const program = router.query.program;
//   const category = router.query.category;
//   return (
//     <>
//       <Header />
//       <h1>Program: {program}</h1>
//       <h1>category: {category}</h1>
//     </>
//   );
// };

// export default index;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../../../Database/firebaseconfig";
import CollegeList from "../../../components/CollegeCard/CollegeList"

const Index = () => {
  const router = useRouter();
  const program = router.query.program;
  const category = router.query.category;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Choose the collection based on the category
        const collectionRef =
          category === "India"
            ? collection(db, "Study-in-India")
            : collection(db, "Study-in-Abroad");

        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = [];
        console.log(fetchData);
        console.log(collectionRef);

        querySnapshot.forEach((doc) => {
          fetchedData.push(doc.data());
        });

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Header />
      <h1>Program: {program}</h1>
      <h1>Category: {category}</h1>
      <div>
      </div>
    </>
  );
};

export default Index;
