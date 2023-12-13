import React from "react";
import Header from "@/components/Header/Header";
import MovingText from "@/components/Header/MovingText";
import CoursesSection from "@/components/CourseSection";
import Footer from "@/components/Footer/Footer";
import "@/components/styles/Header.css"

const StudyInAbroad = () => {
  return (
    <>
      <Header />
      <MovingText />
      <CoursesSection />
      <Footer />
    </>
  );
};

export default StudyInAbroad;
