// // components/CourseCard.js
// 'use client'
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const CourseCard = ({ imagePath, altText, title, link }) => {
//   return (
//     <div className="course-card card " style={{ textAlign: "center" }} >
//       <Link href={link} className="no-underline">
//         <div className="card-body">
//           <Image src={imagePath} width={250} height={250} alt={altText} />
//           <h5 className="card-title">{title}</h5>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default CourseCard;




// components/CourseCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ imagePath, altText, title, link }) => {
  return (
    <div className="course-card card text-center">
      <Link href={link} className="no-underline">
        <div className="card-body flex flex-col items-center justify-center">
          <Image src={imagePath} width={250} height={250} alt={altText} />
          <h5 className="card-title mt-4">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
