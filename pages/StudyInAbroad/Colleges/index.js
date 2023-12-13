import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const program = router.query.program;
  const category = router.query.category;
  return (
    <>
      <h1>Program: {program}</h1>
      <h1>category: {category}</h1>
    </>
  );
};

export default index;
