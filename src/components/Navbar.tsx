import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import solarcore from "../assets/SolarCore-1.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-2">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center space-x-3 ">
          <img
            src={solarcore} // replace with your logo path
            alt="SolarCore Logo"
            className="h-14 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-bg-[#0B111F]">SolarCore</span>
            <span className="text-sm text-gray-800">Smart Home Control</span>
          </div>
        </Link>

        {/* Get Started Button */}
        <Link
          to="/signup"
          className="flex items-center gap-2 bg-[#0B111F] text-white px-1 py-1 rounded-lg font-medium hover:bg-[#0B111F] transition"
        >
          Get Started
          <ArrowRight size={18} />
        </Link>
      </div>
    </nav>
  );
}
