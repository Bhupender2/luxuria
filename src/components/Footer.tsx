import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
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
            <p className="text-sm leading-relaxed text-gray-600">
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
            <h3 className="text-warmdark text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Shop All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Gift Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-warmdark text-lg font-semibold">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-warmdark text-sm text-gray-600 transition-colors"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-warmdark text-lg font-semibold">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-warmdark" />
                <span className="text-sm text-gray-600">9211378406</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-warmdark" />
                <span className="text-sm text-gray-600">
                  luxuriagifting@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-warmdark mt-0.5" />
                <span className="text-sm text-gray-600">
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© 2024 Luxuria Pvt Ltd. All Rights Reserved</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" /> in India
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="hover:text-warmdark text-gray-600 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#"
                className="hover:text-warmdark text-gray-600 transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#"
                className="hover:text-warmdark text-gray-600 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
