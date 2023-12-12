import React from "react";
import Header from "@/components/Header";
import MovingText from "@/components/MovingText";
import LowerHeader from "@/components/LowerHeader";
import ControlledCarousel from "@/components/ControlledCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import WhyGS from "@/components/WhyGS";
import CoursesSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      {/* <div>App</div> */}
      <MovingText />
      <hr />
      <Header />
      <hr />
      <LowerHeader />
      <hr />
      <ControlledCarousel />
      <hr />
      <WelcomeSection />
      <hr />
      <WhyGS />
      <hr />
      <CoursesSection />
      <hr />
      <TestimonialsSection />
      <hr />
      <Footer />
    </>
  );
};

export default App;
