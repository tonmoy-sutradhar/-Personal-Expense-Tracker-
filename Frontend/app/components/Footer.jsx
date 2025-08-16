"use client";

import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white rounded-t-3xl">
      {/* Call-to-action Section at Top */}
      <section className="py-16 px-4 bg-purple-700 text-white text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Managing Your Expenses Today!
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Take control of your finances and never lose track of your spending
          again.
        </p>
        <Link
          href="/Home"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </Link>
      </section>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-8">
        {/* Logo / Site Name */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          Personal Expenses Tracker
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-300 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Personal Expenses Tracker. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
