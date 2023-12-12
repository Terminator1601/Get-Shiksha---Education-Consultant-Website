import React from "react";
import Header from "@/components/Header/Header";
import MovingText from "@/components/Header/MovingText";
import LowerHeader from "@/components/Header/LowerHeader";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import WhyGS from "@/components/WhyGS";
import CoursesSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const imagePaths = [
    '/assets/images/banner/page-1.png',
    '/assets/images/banner/page-1.png',
    '/assets/images/banner/page-1.png',
  ];
  return (
    <>
      {/* <div>App</div> */}
      <MovingText />
      <hr />
      <Header />
      <hr />
      <ImageCarousel imagePaths={imagePaths} />
      <hr />
      <LowerHeader />
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
