import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const router = useRouter();
  const program = router.query.program;

  return (
    <>
      {/* <Header/> */}
      <h1>program : {program}</h1>
      <div className="row">
        <div className="col">
          <Link href={`/StudyInIndia/Colleges?program=${program}&category=India`}>
            India
          </Link>
        </div>
        <div className="col">
          <Link href={`/StudyInAbroad/Colleges?program=${program}&category=Abroad`}>
            Abroad
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
