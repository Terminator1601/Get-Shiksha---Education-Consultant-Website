import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center">
      {/* Navigation Section */}
      <nav className="text-lg flex flex-col sm:flex-row mt-1 sm:mt-0">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/StudyInIndia?category=India">Study In India</NavLink>
        <NavLink href="/StudyInAbroad?category=Abroad">Study In Abroad</NavLink>
        <NavLink href="/PredictYourCollege">Predict Your College</NavLink>
        <NavLink href="/BookAnAppointment">Book An Appointment</NavLink>
        <NavLink href="/AboutUs">About Us</NavLink>
        {/* Add other navigation links */}
      </nav>
    </div>
  );
};

// Custom NavLink component to handle Link
const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="no-underline">
      <div className="block text-lg font-medium px-4 py-1 sm:px-6 sm:py-1 cursor-pointer text-amber-900 hover:text-blue-400 ">
        {children}
      </div>
    </Link>
  );
};

export default Header;
