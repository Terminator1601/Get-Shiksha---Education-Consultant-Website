// components/CoursesSection.js

import React from "react";
import CourseCard from "./Carousel/CourseCard";

const CoursesSection = () => {
  return (
    <section id="courses">
      <h1>Popular courses to get enrolled.</h1>
      <div className="row" style={{ margin: "0 -5px" }}>
        <div className="col-sm-6 col-lg-4">
          
            <CourseCard
              imagePath="/assets/images/engineer.png"
              altText="engineering"
              title="Engineering"
              link="/Engineering"
            />
          
        </div>
        <div className="col-sm-6 col-lg-4">
          <CourseCard
            imagePath="/assets/images/doctor.png"
            altText="medical"
            title="Medical"
            link="#"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CourseCard
            imagePath="/assets/images/mba.png"
            altText="management"
            title="Management"
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
