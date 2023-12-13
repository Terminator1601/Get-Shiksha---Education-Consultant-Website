// components/CoursesSection.js

import React from "react";
import CourseCard from "./Carousel/CourseCard";
// import { useRouter } from "next/navigation";

const CoursesSection = () => {
  // const router = useRouter()
  // const category = router.query.category
  
  return (
    <section id="courses">
      <h1>Popular courses to get enrolled.</h1>
      <div className="row" style={{ margin: "0 -5px" }}>
        <div className="col-sm-6 col-lg-4">
          
            <CourseCard
              imagePath="/assets/images/engineer.png"
              altText="engineering"
              title="Engineering"
              link="/Select-Country?program=Engineering"
            />
          
        </div>
        <div className="col-sm-6 col-lg-4">
          <CourseCard
            imagePath="/assets/images/doctor.png"
            altText="medical"
            title="Medical"
            link="/Select-Country?program=Medical"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CourseCard
            imagePath="/assets/images/mba.png"
            altText="management"
            title="Management"
            link="/Select-Country?program=MBA"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
