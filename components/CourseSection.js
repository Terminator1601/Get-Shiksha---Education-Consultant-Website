// import React from "react";
// import CourseCard from "./Carousel/CourseCard";

// const CoursesSection = () => {
//   const courses = [
//     {
//       program: "Engineering",
//       imagePath: "/assets/images/engineer.png",
//       altText: "engineering",
//     },
//     {
//       program: "Medical",
//       imagePath: "/assets/images/doctor.png",
//       altText: "medical",
//     },
//     {
//       program: "MBA",
//       imagePath: "/assets/images/mba.png",
//       altText: "management",
//     },
//   ];

//   return (
//     <section id="courses">
//       <h1>Popular courses to get enrolled.</h1>
//       <div className="row" style={{ margin: "0 -5px" }}>
//         {courses.map((course, index) => (
//           <div key={index} className="col-sm-6 col-lg-4">
//             <CourseCard
//               imagePath={course.imagePath}
//               altText={course.altText}
//               title={course.program}
//               link={`/Select-Country?program=${course.program}`}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CoursesSection;

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
    <section id="courses" className="px-4 lg:px-0 py-12 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left mb-8 lg:mb-12">
        Popular courses to get enrolled.
      </h1>
      <div className="flex flex-wrap -mx-4">
        {courses.map((course, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
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
