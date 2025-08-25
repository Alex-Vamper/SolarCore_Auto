import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/SolarCore-1.svg"

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-gray-300 py-12 px-3 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left description section */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            {/* Logo + Brand name */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 px-2">
                <img
                  src={logo} // <-- replace with the inside logo (dark version so it shows on white)
                  alt="SolarCore Logo"
                  className="h-12 w-12"
                />
              </div>
              <span className="text-yellow-600 text-xl font-bold">SolarCore</span>
            </div>

            <p className="text-sm leading-relaxed">
              Revolutionizing homes and businesses with intelligent solar-power
              automation technology. Experience the future of smart living today.
            </p>
          </div>

          {/* Message buttons */}
          <div className="mt-6">
            <p className="text-yellow-600 font-semibold mb-2">Message</p>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-yellow-500 text-black text-sm font-semibold py-1 px-4 rounded-full hover:bg-yellow-500 transition">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </button>
              <button className="flex items-center space-x-2 bg-yellow-500 text-black text-sm font-semibold py-1 px-4 rounded-full hover:bg-yellow-500 transition">
                <FaTelegramPlane />
                <span>Telegram</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-yellow-600 font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Smart Central Control Panel</li>
            <li>Smart Switches</li>
            <li>Smart Lighting</li>
            <li>Home Security and Sensors</li>
            <li>HVAC</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-yellow-600 font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Smart Home Solutions</li>
            <li>Smart Real Estate Solutions</li>
            <li>Smart Office Solutions</li>
            <li>Smart Institution Solutions</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-yellow-600 font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>User Guide</li>
            <li>App Download</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-yellow-600 font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>About SolarCore</li>
            <li>Why Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center space-x-6 text-xl">
            <FaYoutube className="text-white hover:text-yellow-400 cursor-pointer" />
            <FaFacebookF className="text-white hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="text-white hover:text-yellow-400 cursor-pointer" />
            <FaXTwitter className="text-white hover:text-yellow-400 cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SolarCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
