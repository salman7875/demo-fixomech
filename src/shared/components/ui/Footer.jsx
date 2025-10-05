import Subscribe from "./Subscribe";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f4f4f4]">
      <Subscribe />

      <div
        className="pt-28 md:pt-32 pb-6 bg-gray-300"
        style={{
          backgroundImage: "url('/assets/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
            {/* Brand Section */}
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/78205495?v=4"
                alt="Fixomech Logo"
                className="h-8 mb-3"
              />
              <p className="text-gray-600 mb-3">
                Let’s <span className="text-red-600 font-bold">Connect.</span>
              </p>
              <div className="flex gap-3 text-gray-700 text-xl">
                <Instagram />
                <Linkedin />
                <Youtube />
                <Twitter />
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Links</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About us</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Products</h4>
              <ul className="space-y-2">
                <li>Hydraulic Cylinder Repair</li>
                <li>Hydraulic Repair</li>
                <li>Tyre handling</li>
              </ul>
            </div>

            {/* Reach Us */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Reach at us</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line text-red-600"></i> +91 8088050837
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line text-red-600"></i>{" "}
                  info@fixomech.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-300 mt-10 pt-6 text-xs flex flex-col sm:flex-row items-center justify-between text-gray-600">
            <div className="flex gap-4 mb-2 sm:mb-0">
              <span>Privacy Policy</span>
              <span>Terms of Services</span>
            </div>
            <div className="text-center">
              © Copyright Fixomech All Rights Reserved
            </div>
            <div className="text-right">
              Designed & Developed by{" "}
              <span className="font-medium">PluzBuzz.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
