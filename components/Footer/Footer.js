// // components/Footer.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';

// const SocialMediaLink = ({ icon, href }) => (
//   <a href={href} className="me-4 link-secondary">
//     <i className={icon}></i>
//   </a>
// );

// const UsefulLink = ({ text, href }) => (
//   <p>
//     <a href={href} className="text-reset">{text}</a>
//   </p>
// );

// const ContactInfo = ({ icon, text }) => (
//   <p>
//     <i className={`${icon} me-3 text-secondary`}></i> {text}
//   </p>
// );

// const socialMediaLinks = [
//   { icon: 'fab fa-facebook-f', href: '#' },
//   { icon: 'fab fa-twitter', href: '#' },
//   { icon: 'fab fa-google', href: '#' },
//   { icon: 'fab fa-instagram', href: 'https://instagram.com/_get_shiksha_?igshid=ZGUzMzM3NWJiOQ==' },
//   { icon: 'fab fa-linkedin', href: '#' },
// ];

// const usefulLinks = [
//   { text: 'Home', href: '#' },
//   { text: 'Study in India', href: '#courses' },
//   { text: 'Study Abroad', href: '#courses' },
//   { text: 'Contact us', href: '' },
// ];

// const contactInfo = [
//   { icon: 'fas fa-home', text: 'N4/243, Gill Complex, Nayapally, Bhubaneswar, India' },
//   { icon: 'fas fa-envelope', text: 'getshiksha101@gmail.com' },
//   { icon: 'fas fa-phone', text: '+91 9777170076' },
//   { icon: 'fas fa-phone', text: '+91 9777170091' },
//   { icon: 'fas fa-phone', text: '+91 9777174314' },
// ];

// const Footer = () => (
//   <footer id="contact" className="text-center text-lg-start bg-black text-muted">
//     {/* Section: Social media */}
//     <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//       {/* Left */}
//       <div className="me-5 d-none d-lg-block">
//         <span>Get connected with us on social networks:</span>
//       </div>
//       {/* Left */}

//       {/* Right */}
//       <div>
//         {socialMediaLinks.map((link, index) => (
//           <SocialMediaLink key={index} {...link} />
//         ))}
//       </div>
//       {/* Right */}
//     </section>
//     {/* Section: Social media */}

//     {/* Section: Links  */}
//     <section>
//       <div className="container text-center text-md-start mt-5">
//         {/* Grid row */}
//         <div className="row mt-3">
//           {/* Grid column */}
//           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//             {/* Content */}
//             <h6 className="text-uppercase fw-bold mb-4">
//               <img src="/assets/images/getshiksha.png" width="150px" alt="GetShiksha Logo" />
//             </h6>
//           </div>
//           {/* Grid column */}

//           {/* Grid column */}
//           <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//             {/* Links */}
//             <h6 className="text-uppercase fw-bold mb-4">
//               Useful Links
//             </h6>
//             {usefulLinks.map((link, index) => (
//               <UsefulLink key={index} {...link} />
//             ))}
//           </div>
//           {/* Grid column */}

//           {/* Grid column */}
//           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//             {/* Links */}
//             <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//             {contactInfo.map((info, index) => (
//               <ContactInfo key={index} {...info} />
//             ))}
//           </div>
//           {/* Grid column */}
//         </div>
//         {/* Grid row */}
//       </div>
//     </section>
//     {/* Section: Links  */}

//     {/* Copyright */}
//     <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
//       © 2023 Copyright:
//       <a className="text-reset fw-bold" href="#">Terminator16</a>
//     </div>
//     {/* Copyright */}
//   </footer>
// );

// export default Footer;




import React from 'react';

const SocialMediaLink = ({ icon, href }) => (
  <a href={href} className="inline-block me-4 text-secondary">
    <i className={icon}></i>
  </a>
);

const UsefulLink = ({ text, href }) => (
  <p>
    <a href={href} className="text-secondary hover:text-blue-500">{text}</a>
  </p>
);

const ContactInfo = ({ icon, text }) => (
  <p className="flex items-center text-secondary">
    <i className={`${icon} me-3`}></i> {text}
  </p>
);

const socialMediaLinks = [
  { icon: 'fab fa-facebook-f', href: '#' },
  { icon: 'fab fa-twitter', href: '#' },
  { icon: 'fab fa-google', href: '#' },
  { icon: 'fab fa-instagram', href: 'https://instagram.com/_get_shiksha_?igshid=ZGUzMzM3NWJiOQ==' },
  { icon: 'fab fa-linkedin', href: '#' },
];

const usefulLinks = [
  { text: 'Home', href: '#' },
  { text: 'Study in India', href: '#courses' },
  { text: 'Study Abroad', href: '#courses' },
  { text: 'Contact us', href: '' },
];

const contactInfo = [
  { icon: 'fas fa-home', text: 'N4/243, Gill Complex, Nayapally, Bhubaneswar, India' },
  { icon: 'fas fa-envelope', text: 'getshiksha101@gmail.com' },
  { icon: 'fas fa-phone', text: '+91 9777170076' },
  { icon: 'fas fa-phone', text: '+91 9777170091' },
  { icon: 'fas fa-phone', text: '+91 9777174314' },
];

const Footer = () => (
  <footer id="contact" className="text-center text-lg-start bg-gray-900 text-gray-400">
    {/* Section: Social media */}
    <section className="py-4 border-b border-gray-600">
      <div className="container mx-auto flex justify-center lg:justify-between">
        <span className="lg:hidden">Get connected with us on social networks:</span>
        <div>
          {socialMediaLinks.map((link, index) => (
            <SocialMediaLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
    {/* Section: Social media */}

    {/* Section: Links  */}
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h6 className="text-xs uppercase font-bold mb-4">
              <img src="/assets/images/getshiksha.png" width="150px" alt="GetShiksha Logo" />
            </h6>
          </div>

          <div>
            <h6 className="text-xs uppercase font-bold mb-4">
              Useful Links
            </h6>
            {usefulLinks.map((link, index) => (
              <UsefulLink key={index} {...link} />
            ))}
          </div>

          <div>
            <h6 className="text-xs uppercase font-bold mb-4">Contact</h6>
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* Section: Links  */}

    {/* Copyright */}
    <div className="py-4 bg-gray-200">
      <div className="container mx-auto text-sm text-gray-600 text-center">
        © 2023 Terminator16
      </div>
    </div>
    {/* Copyright */}
  </footer>
);

export default Footer;
