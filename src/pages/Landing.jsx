import React from "react";
import Card from "../components/Card"; // Your Card component
import img1 from "../assets/img1.jpg"; // Replace with your image paths
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col px-4 sm:px-6 py-4">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="text-2xl font-extrabold mb-4 sm:mb-0">
          <Link to="/">AFFINITY</Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/login">
            <button className="bg-stone-700 w-24 hover:bg-stone-600 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-[#ff0059] w-24 hover:bg-red-500 text-white px-4 py-2 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          <Typewriter
            words={[
              "Find love in the dark... it's less awkward that way.",
              "Swipe right... because love at first sight is overrated.",
              "Heartbreak? There's a website for that.",
              "Single? There's someone out there as twisted as you.",
              "Swipe left on loneliness... you deserve better.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-8">
          Meet your match in a world that understands you.
        </p>
        <Link to="/register">
          <button className="w-48 text-xl bg-[#ff0059] hover:bg-red-500 text-white px-4 py-2 rounded-md mb-12">
            Get Started
          </button>
        </Link>

        {/* Image Cards Section */}
        <motion.div
          className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-64 h-80 sm:w-72 sm:h-96"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card image={img1} name="Emily" age={25} />
          </motion.div>

          <motion.div
            className="w-64 h-80 sm:w-72 sm:h-96"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card image={img2} />
          </motion.div>
        </motion.div>
      </main>

      {/* Footer with Social Media Icons */}
      <footer className="flex justify-center mt-8">
        <div className="flex flex-row text-3xl sm:text-4xl opacity-70 gap-5 cursor-pointer">
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
        </div>
      </footer>
    </div>
  );
};

export default Landing;
