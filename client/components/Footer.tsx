import { Link } from "react-router-dom";
import {
  GraduationCap,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const featuredLinks = [
    { name: "Home", href: "/" },
    { name: "Admission", href: "/admission" },
    { name: "Departments", href: "/departments" },
    { name: "Staff", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/contact" },
  ];

  const otherBranches = [
    "Government Polytechnic College - Bargur",
    "Government Polytechnic College - Tirunelveli",
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
        }
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  GOVERNMENT POLYTECHNIC
                  <br />
                  <span className="text-base text-yellow-400">COLLEGE</span>
                </h3>
              </div>
            </div>
            <p className="text-blue-100 dark:text-gray-300 text-sm leading-relaxed">
              Providing quality technical education since 1992-93 with modern
              facilities and experienced faculty committed to excellence in
              engineering education.
            </p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>

          {/* Featured Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
              <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
              Featured Links
            </h4>
            <ul className="space-y-3">
              {featuredLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
              <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
              Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-700 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-yellow-400 group-hover:text-blue-900" />
                </div>
                <span className="text-blue-100 dark:text-gray-300 text-sm">
                  044 22650765
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-700 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-yellow-400 group-hover:text-blue-900" />
                </div>
                <span className="text-blue-100 dark:text-gray-300 text-sm">
                  irtpolychennai@gmail.com
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="text-md font-semibold mb-3 text-yellow-400">
                Other Branches
              </h5>
              <ul className="space-y-2">
                {otherBranches.map((branch, index) => (
                  <li
                    key={index}
                    className="text-blue-100 dark:text-gray-300 text-sm flex items-start"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {branch}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photos & Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
              <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
              Connect With Us
            </h4>

            {/* Photos Section */}
            <div>
              <h5 className="text-md font-semibold mb-3 text-blue-100 dark:text-gray-300">
                Campus Photos
              </h5>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <img
                      src={`/images/footer-img/f${index}.jpg`}
                      alt={`Campus photo ${index}`}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-md font-semibold mb-3 text-blue-100 dark:text-gray-300">
                Social Media
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`bg-blue-700 dark:bg-gray-700 ${social.color} text-white transition-all duration-300 p-3 rounded-lg group transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-100 dark:text-gray-300 text-sm">
                © {currentYear} Government Polytechnic College, Chennai. All
                rights reserved.
              </p>
              <p className="text-blue-200 dark:text-gray-400 text-xs mt-1">
                Empowering minds, building futures since 1992
              </p>
            </div>

            {/* Achievement Badge */}
            <div className="flex items-center space-x-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-semibold">
                30+ Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 opacity-10 rounded-full animate-pulse floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300 opacity-10 rounded-full animate-pulse floating-animation delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-yellow-300 opacity-10 rounded-full animate-pulse floating-animation delay-500"></div>

      {/* Developer Credit Bar */}
      <div className="relative bg-blue-950 dark:bg-gray-950 border-t border-blue-800 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-blue-200 dark:text-gray-400 text-sm font-medium">
              Developed by <span className="text-yellow-400 font-semibold">MONISH KUMAR S</span> - <span className="text-yellow-400">COMPUTER DEPARTMENT (2023-2026)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
