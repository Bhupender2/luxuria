import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src="/Logo.png"
              width={140}
              height={140}
              alt="Luxuria Logo"
              className="mb-4"
            />
            <p className="text-xs leading-relaxed text-gray-600 lg:text-sm">
              Curating luxury gifts and home decor pieces that speak to the
              heart. Each item is handpicked to create moments of joy and
              lasting memories.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-warmdark rounded-full p-2 transition-colors hover:text-white"
              >
                <Facebook size={18} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-warmdark rounded-full p-2 transition-colors hover:text-white"
              >
                <Instagram size={18} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-warmdark rounded-full p-2 transition-colors hover:text-white"
              >
                <Twitter size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-warmdark text-sm font-semibold lg:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Shop All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Gift Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-warmdark text-sm font-semibold lg:text-lg">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-xs text-gray-600 transition-colors lg:text-sm"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-warmdark text-sm font-semibold lg:text-lg">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-warmdark" />
                <span className="text-xs text-gray-600 lg:text-sm">
                  9211378406
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-warmdark" />
                <span className="text-xs text-gray-600 lg:text-sm">
                  luxuriagifting@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-warmdark mt-0.5" />
                <span className="text-xs text-gray-600 lg:text-sm">
                  728 , jawahar colony
                  <br />
                  faridabad , Haryana 121005
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
              <h4 className="mb-2 text-sm font-semibold text-gray-800">
                Stay Updated
              </h4>
              <p className="mb-3 text-xs text-gray-600">
                Get exclusive offers and new arrivals
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="focus:ring-warmdark flex-1 rounded-md border border-gray-300 px-3 py-2 text-xs focus:ring-1 focus:outline-none"
                />
                <Button
                  size="sm"
                  className="bg-warmdark hover:bg-warmdark/90 px-3 text-xs text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
