// components/CourseCard.js

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ imagePath, altText, title, link }) => {
  return (
    <div className="course-card card" style={{ textAlign: "center" }}>
      <Link href={link}>
        <div className="card-body">
          <Image src={imagePath} width={250} height={250} alt={altText} />
          <h5 className="card-title">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
