import React from "react";
import Header from "@/components/Header/Header";
import MovingText from "@/components/Header/MovingText";
import CoursesSection from "@/pages/StudyInIndia/CourseSectionUpdated";
import Footer from "@/components/Footer/Footer";
import "@/components/styles/Header.css";
import { useRouter } from "next/router";

const StudyInAbroad = () => {
  const router = useRouter();
  var country = router.query.category;

  return (
    <>
      <Header />
      <MovingText />
      <h1>Selected country : {country}</h1>
      <CoursesSection />
      <Footer />
    </>
  );
};

export default StudyInAbroad;
