import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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
    { name: "FAQs", href: "/faq" },
  ];

  const otherBranches = [
    "Government Polytechnic College - Bargur",
    "Government Polytechnic College - Tirunelveli",
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  GOVERNMENT POLYTECHNIC
                  <br />
                  <span className="text-base">COLLEGE</span>
                </h3>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Providing quality technical education since 1992-93 with modern facilities and experienced faculty.
            </p>
          </div>

          {/* Featured Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Featured Links</h4>
            <ul className="space-y-2">
              {featuredLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100 text-sm">044 22650765</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100 text-sm">irtpolychennai@gmail.com</span>
              </div>
            </div>

            <h5 className="text-md font-semibold mt-6 mb-3 text-yellow-400">Other Branches</h5>
            <ul className="space-y-1">
              {otherBranches.map((branch, index) => (
                <li key={index} className="text-blue-100 text-sm">
                  {branch}
                </li>
              ))}
            </ul>
          </div>

          {/* Photos & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Connect With Us</h4>
            
            {/* Photos Section */}
            <div className="mb-6">
              <h5 className="text-md font-semibold mb-3 text-blue-100">Campus Photos</h5>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-blue-700 rounded-md"></div>
                <div className="aspect-square bg-blue-700 rounded-md"></div>
                <div className="aspect-square bg-blue-700 rounded-md"></div>
                <div className="aspect-square bg-blue-700 rounded-md"></div>
                <div className="aspect-square bg-blue-700 rounded-md"></div>
                <div className="aspect-square bg-blue-700 rounded-md"></div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-md font-semibold mb-3 text-blue-100">Social Media</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-blue-700 hover:bg-yellow-400 hover:text-blue-900 transition-all duration-200 p-2 rounded-lg group"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} Government Polytechnic College, Chennai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
