import React from "react";
import CourseCard from "./Carousel/CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      program: "Engineering",
      imagePath: "/assets/images/engineer.png",
      altText: "engineering",
    },
    {
      program: "Medical",
      imagePath: "/assets/images/doctor.png",
      altText: "medical",
    },
    {
      program: "MBA",
      imagePath: "/assets/images/mba.png",
      altText: "management",
    },
  ];

  return (
    <section id="courses">
      <h1>Popular courses to get enrolled.</h1>
      <div className="row" style={{ margin: "0 -5px" }}>
        {courses.map((course, index) => (
          <div key={index} className="col-sm-6 col-lg-4">
            <CourseCard
              imagePath={course.imagePath}
              altText={course.altText}
              title={course.program}
              link={`/Select-Country?program=${course.program}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
