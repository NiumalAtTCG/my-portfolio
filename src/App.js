import React, { useState, useRef, useEffect } from "react";

import profileImage from "./assets/profile_large.svg";
import profileImage2 from "./assets/profile_2.svg";
import html from "./assets/html_5.svg";
import css from "./assets/cSS3.svg";
import java from "./assets/java.svg";
import js from "./assets/javaScript.svg";
import c from "./assets/C++.svg";
import php from "./assets/PHP.svg";
import mysql from "./assets/mySQL Logo.svg";
import mongodb from "./assets/mongo Db.svg";
import firebase from "./assets/Firebase.svg";
import react from "./assets/React.svg";
import node from "./assets/Nodejs.svg";
import boostrap from "./assets/Bootstrap.svg";
import tailwind from "./assets/Tailwind CSS.svg";
import figma from "./assets/Figma.svg";
import photoshop from "./assets/Adobe Photoshop.svg";
import goku from "./assets/goku.svg";
import eventfi from "./assets/eventfi.svg";
import smarthome from "./assets/smarthome.svg";
import chat from "./assets/chat.svg";
import hospital from "./assets/hospitalsvg.svg";
import raula from "./assets/raula.svg";
import footer from "./assets/footer 26.svg";

import "./styles/fonts.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projects = [
  { id: 1, type: "web", image: goku },
  { id: 2, type: "web", image: eventfi },
  { id: 3, type: "mobile", image: smarthome },
  { id: 4, type: "mobile", image: chat },
  { id: 5, type: "desktop", image: hospital },
  { id: 6, type: "mobile", image: raula },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filterProjects = (type) => {
    if (type === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.type === type));
    }
  };

  const handleWheelScroll = (e) => {
    e.preventDefault();
    const scrollContainer = scrollRef.current;

    // Check if horizontal scrolling is at the end or beginning
    if (
      (scrollContainer.scrollLeft === 0 && e.deltaY < 0) || // Start of horizontal scroll
      (scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth &&
        e.deltaY > 0) // End of horizontal scroll
    ) {
      window.scrollBy(0, e.deltaY); // Perform vertical scrolling
    } else {
      scrollContainer.scrollLeft += e.deltaY; // Perform horizontal scrolling
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("wheel", handleWheelScroll);
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    try {
      // Send the form data as a JSON request to the backend
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Parse the response from the backend
      const result = await response.json();

      // Handle the response (e.g., show a success message)
      console.log(result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className=" bg-black text-white min-h-screen ">
      {/* Navigation Bar */}
      <nav className="bg-black text-white w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-0 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">NIUMAL</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed w-auto inset-0 bg-black flex flex-col md:gap-4 items-center justify-center text-white text-2xl z-40  md:text-6xl font-lexendSemiBold">
          <a
            href="#home"
            onClick={(e) => {
              handleScroll(e, "home");
              setIsOpen(false);
            }}
            className="block py-4 hover:bg-gray-600 w-96 rounded-2xl text-center "
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              handleScroll(e, "about");
              setIsOpen(false);
            }}
            className="block py-4 hover:bg-gray-600 w-96 rounded-2xl text-center"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              handleScroll(e, "skills");
              setIsOpen(false);
            }}
            className="block py-4 hover:bg-gray-600 w-96 rounded-2xl text-center   "
          >
            Skills
          </a>
          <a
            href="#myprojects"
            onClick={(e) => {
              handleScroll(e, "myProjects");
              setIsOpen(false);
            }}
            className="block py-4 hover:bg-gray-600 w-96 rounded-2xl text-center "
          >
            My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              handleScroll(e, "contact");
              setIsOpen(false);
            }}
            className="block py-4 hover:bg-gray-600 w-96 rounded-2xl text-center "
          >
            Contact
          </a>
        </div>
      )}

      {/* Main Content */}
      <div
        id="home"
        className="container h-full mx-auto flex flex-col md:flex-row justify-evenly px-16   md:py-5 active:"
        style={{ paddingTop: "calc(6rem + 16px)" }} // Adjust this to the navbar height + any padding
      >
        <div className="text-center md:text-left">
          <div className="relative w-[320px] sm:w-[400px] md:w-[550px] lg:w-[750px] h-auto mx-auto">
            {/* Profile Image */}
            <img
              src={profileImage2}
              alt="Profile"
              className="w-full h-auto object-contain"
            />

            {/* Overlayed Typewriter Text */}
            <div className="absolute inset-0 flex items-center justify-start px-16 md:ps-36">
              <h1 className=" sm:text-3xl md:text-5xl font-bold text-[#E0E0E0] ps-3 rounded-lg">
                <span
                  style={{
                    background: "linear-gradient(to right, #00FFFF, #FFFFFF)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                       "UI/UX Designer",
                    ]}
                    loop={0} // Set to 0 for infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
          </div>
          <div className="text-start py-6 md:py-14 flex flex-col gap-2 md:gap-6">
            <h1 className="text-2xl font-lexendThin">Hi, I am</h1>
            <h1 className="text-4xl md:text-6xl font-lexendSemiBold text-[#C7D9E7]">
              NIUMAL SILVA
            </h1>

            <div className="flex flex-row md:gap-6 py-2  gap-2 text-2xl md:text-2xl">
              {/* Social Links */}
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/hirusha-silva-a35021184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/NiumalAtTCG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-700"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/niumal_silva_?igsh=YzhtenRyZW5objd4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://niumalattcg.github.io/my-portfolio/assets/Niumal.pdf"; // Full URL
              link.download = "Niumal.pdf"; // Name of the downloaded file
              link.click();
            }}
            className="mt-6 w-full md:w-auto bg-[#00FFFF] hover:bg-[#57ffff] text-gray-700 font-bold font-lexendSemiBold px-16 py-3 rounded-lg transition-all"
          >
            Download CV
          </button>
        </div>
        <div className="hidden md:block mt-6 md:mt-5">
          <img
            src={profileImage}
            alt="Profile Image"
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
      <div
        id="about"
        className="w-full h-screen flex items-center justify-center"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-center px-16 md:px-40 font-lexendSemiBold">
          I am a skilled software developer. I have a passion for building
          clean, efficient, and user-friendly applications. I am always looking
          for new opportunities to learn and grow as a developer.
        </h1>
      </div>

      <div
        id="skills"
        className="w-full min-h-screen flex flex-col items-center md:items-start justify-start bg-black text-white"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold px-16 md:px-16 font-lexendSemiBold mt-10 pt-10">
          My Skills
        </h1>

        {/* Skill Categories */}
        <div className="flex flex-col gap-6 px-16 md:px-16 py-10 w-full">
          {/* Languages */}
          <div className="w-full rounded-lg border border-white flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-6">
            <h1 className="text-xl md:text-2xl font-bold font-lexendSemiBold mb-4 md:mb-0">
              Languages
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src={html}
                alt="HTML"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={css}
                alt="CSS"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={js}
                alt="JavaScript"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={java}
                alt="Java"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={c}
                alt="C"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={php}
                alt="PHP"
                className="w-10 md:w-14 h-auto object-contain"
              />
            </div>
          </div>

          {/* Frameworks */}
          <div className="w-full rounded-lg border border-white flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-6">
            <h1 className="text-xl md:text-2xl font-bold font-lexendSemiBold mb-4 md:mb-0">
              Frameworks
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src={react}
                alt="React"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={node}
                alt="Node.js"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={boostrap}
                alt="Bootstrap"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={tailwind}
                alt="Tailwind CSS"
                className="w-10 md:w-14 h-auto object-contain"
              />
            </div>
          </div>

          {/* Databases */}
          <div className="w-full rounded-lg border border-white flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-6">
            <h1 className="text-xl md:text-2xl font-bold font-lexendSemiBold mb-4 md:mb-0">
              Databases
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src={mysql}
                alt="MySQL"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={mongodb}
                alt="MongoDB"
                className="w-10 md:w-14 h-auto object-contain"
              />
               <img
                src={firebase}
                alt="MongoDB"
                className="w-10 md:w-14 h-auto object-contain"
              />
            </div>
          </div>

          {/* Other */}
          <div className="w-full rounded-lg border border-white flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-6">
            <h1 className="text-xl md:text-2xl font-bold font-lexendSemiBold mb-4 md:mb-0">
              Other
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src={figma}
                alt="Figma"
                className="w-10 md:w-14 h-auto object-contain"
              />
              <img
                src={photoshop}
                alt="Photoshop"
                className="w-10 md:w-14 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="myProjects"
        className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 py-8"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-start font-lexendSemiBold mb-6 md:mb-8">
          My Projects
        </h1>

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-2">
          <button
            onClick={() => filterProjects("web")}
            className="px-4 py-2 bg-[#00FFFF] hover:bg-[#57ffff] text-gray-700 font-bold font-lexendSemiBold rounded-md transition duration-300"
          >
            Web Projects
          </button>
          <button
            onClick={() => filterProjects("mobile")}
            className="px-4 py-2 bg-[#00FFFF] hover:bg-[#57ffff] text-gray-700 font-bold font-lexendSemiBold rounded-md transition duration-300"
          >
            Mobile Projects
          </button>
          <button
            onClick={() => filterProjects("desktop")}
            className="px-4 py-2 bg-[#00FFFF] hover:bg-[#57ffff] text-gray-700 font-bold font-lexendSemiBold rounded-md transition duration-300"
          >
            Desktop Apps
          </button>
          <button
            onClick={() => filterProjects("all")}
            className="px-4 py-2 bg-[#00FFFF] hover:bg-[#57ffff] text-gray-700 font-bold font-lexendSemiBold rounded-md transition duration-300"
          >
            All Projects
          </button>
        </div>

        {/* Horizontal Scroll View for Projects */}
        <div className="w-full overflow-x-auto py-4" ref={scrollRef}>
          <div className="flex space-x-4 md:space-x-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-11/12 sm:w-9/12 md:w-6/12 h-48 sm:h-80 md:h-96 bg-cover bg-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="w-full min-h-screen  flex flex-col items-center py-16 px-8"
      >
        <h1 className="text-3xl md:text-6xl font-bold self-center md:self-start font-lexendSemiBold text-white px-6  py-10">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 self-center md:self-start max-w-4xl mb-10 px-6 font-lexendSemiBold ">
          Feel free to reach out for collaborations, project inquiries, or just
          to say hello! I'm always excited to connect and work on new ideas.
        </p>
        <div className="w-full max-w-3xl bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}

          {/* Contact Form */}
          <div className="flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 bg-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 bg-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 bg-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#00FFFF] text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-[#57ffff] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
        </div>
      </div>
      <footer className="w-full bg-black text-white relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={footer}
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center px-4 py-8 text-white">
          {/* Branding or About Section */}
          <div className="px-4 sm:px-8 lg:px-32 py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-lexendSemiBold">
              Building ideas into reality. Let's create something
            </h2>
            <p className="mt-2 py-2 sm:py-4 text-lg sm:text-3xl lg:text-5xl font-lexendSemiBold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Amazing
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-6">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 font-lexendSemiBold">
              <li>
                <a
                  href="#about"
                  className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-lg hover:bg-purple-800 transition-colors shadow-md"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#myProjects"
                  className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-lg hover:bg-purple-800 transition-colors shadow-md"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-lg hover:bg-purple-800 transition-colors shadow-md"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-lg hover:bg-purple-800 transition-colors shadow-md"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mb-6">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 text-xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourgithubusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-700 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-pink-500 text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div>
            <p className="text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Niumal Silva. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
