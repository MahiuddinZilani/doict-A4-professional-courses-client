import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-300 py-10">
      <div className="w-full mx-auto px-4">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-8 text-center md:text-start">
          {/* Address Section */}
          <div className="mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Address
            </h3>
            <p className="text-gray-400">
              DevUp Academy
              <br />
              1234 Tech Park,
              <br />
              Innovation City, Dhaka
            </p>
          </div>

          {/* Contact Section */}
          <div className="mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:contact@devup.com" className="text-blue-400">
                zilani@devup.com
              </a>
              <br />
              Phone: +123-456-7890
            </p>
          </div>

          {/* Social Links Section */}
          <div className="mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex items-center space-x-6 font-semibold text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DevUp Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
