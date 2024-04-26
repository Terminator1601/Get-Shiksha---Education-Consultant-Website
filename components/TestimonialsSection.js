// // components/TestimonialsSection.js

// import React from 'react';
// import testimonialsData from './TestimonialsData';

// const Testimonial = ({ imageSrc, altText, content, name }) => (
//   <div className="col-md-4 testimonial-three-col">
//     <div className="testimonial-inner">
//       <div className="testimonial-image" itemprop="image">
//         <img className="testi-image" width="180" height="180" src={imageSrc} alt={altText} />
//       </div>
//       <div className="testimonial-content">
//         <p>{content}</p>
//       </div>
//       <div className="testimonial-meta">
//         <strong className="testimonial-name" itemprop="name">{name}</strong>
//       </div>
//     </div>
//   </div>
// );

// const TestimonialsSection = () => (
//   <>
//     {/* ... (unchanged) ... */}

//     <section className="section-primary t-bordered">
//       <h1 className='text-center p-10'>testimonial</h1>
//       <div className="container">
//         <div className="row testimonial-three testimonial-three--col-three">
//           {testimonialsData.map((testimonial, index) => (
//             <Testimonial key={index} {...testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default TestimonialsSection;






import React from 'react';
import testimonialsData from './TestimonialsData';

const Testimonial = ({ imageSrc, altText, content, name }) => (
  <div className="col-md-4 testimonial-three-col">
    <div className="testimonial-inner">
      <div className="testimonial-image">
        <img className="testi-image w-48 h-48 rounded-full mx-auto" src={imageSrc} alt={altText} />
      </div>
      <div className="testimonial-content text-center mt-4">
        <p className="text-lg">{content}</p>
      </div>
      <div className="testimonial-meta text-center mt-4">
        <strong className="testimonial-name">{name}</strong>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <>
    {/* ... (unchanged) ... */}

    <section className="section-primary t-bordered py-10">
      <h1 className="text-center text-4xl mb-10">Testimonials</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TestimonialsSection;
