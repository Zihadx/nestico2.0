import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="py-3">
            <Link href="/">
              <Image
                src="/images/logo/nesticologo.png"
                alt="Neu-Logo"
                width={142}
                height={142}
              />
            </Link>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Building trust and security for your home improvement needs.
            Quality work, transparent service, and your satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p>123 Home St, City, Country</p>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +880 123 456 7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-400">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-400">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
