import React from "react";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="px-4 lg:px-0 py-12 lg:py-5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left text-blue-900 font-bold mb-4 lg:mb-6">
            Where do you want to study?
          </h1>
          <p className="text-lg lg:text-xl text-center lg:text-left text-gray-700 mb-6 lg:mb-8">
            We are here to help you get your Shiksha. We will help you get into
            your DREAM College with your DREAM Course.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="/CourseSectionUpdated?category=Abroad"
              className="btn anibtn btn-dark btn-lg mb-4 lg:mb-0 lg:mr-4"
            >
              Abroad
            </a>
            <a
              href="/CourseSectionUpdated?category=India"
              className="btn anibtn btn-secondary btn-lg mb-4 lg:mb-0 lg:mr-4"
            >
              India
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            className="welcome-image mx-auto lg:mx-0"
            src="/assets/images/homepage.jpeg"
            alt="iphone-mockup"
          />
        </div>
      </div>
      {/* <div className="row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00E7FF"
            fillOpacity="1"
            d="M0,96L48,80C96,64,192,32,288,53.3C384,75,480,149,576,165.3C672,181,768,139,864,149.3C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default WelcomeSection;
