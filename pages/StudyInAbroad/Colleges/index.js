import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
// import styles from "@/components/Header.css"
import "bootstrap/dist/css/bootstrap.min.css";


const index = () => {
  const router = useRouter();
  const program = router.query.program;
  const category = router.query.category;
  return (
    <>
      <Header />
      <h1>Program: {program}</h1>
      <h1>category: {category}</h1>
    </>
  );
};

export default index;
