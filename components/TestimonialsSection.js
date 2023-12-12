// components/TestimonialsSection.js

import React from 'react';
import testimonialsData from './TestimonialsData';

const Testimonial = ({ imageSrc, altText, content, name }) => (
  <div className="col-md-4 testimonial-three-col">
    <div className="testimonial-inner">
      <div className="testimonial-image" itemprop="image">
        <img className="testi-image" width="180" height="180" src={imageSrc} alt={altText} />
      </div>
      <div className="testimonial-content">
        <p>{content}</p>
      </div>
      <div className="testimonial-meta">
        <strong className="testimonial-name" itemprop="name">{name}</strong>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <>
    {/* ... (unchanged) ... */}

    <section className="section-primary t-bordered">
      <div className="container">
        <div className="row testimonial-three testimonial-three--col-three">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TestimonialsSection;
