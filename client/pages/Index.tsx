import { GraduationCap, Users, BookOpen, Award, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Index() {
  const featuredCourses = [
    {
      title: "Computer Engineering",
      description: "Advanced programming, software development, and system design",
      icon: "💻",
      duration: "3 Years",
      intake: "60 Students"
    },
    {
      title: "Electronics and Communications Engineering",
      description: "Modern electronics, communication systems, and embedded technology",
      icon: "📡",
      duration: "3 Years",
      intake: "60 Students"
    },
    {
      title: "Mechanical Engineering",
      description: "Design, manufacturing, and mechanical systems engineering",
      icon: "⚙️",
      duration: "3 Years",
      intake: "60 Students"
    },
    {
      title: "Electrical and Electronics Engineering",
      description: "Power systems, control engineering, and electrical machines",
      icon: "⚡",
      duration: "3 Years",
      intake: "60 Students"
    }
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: Award },
    { number: "1000+", label: "Graduates", icon: GraduationCap },
    { number: "50+", label: "Expert Faculty", icon: Users },
    { number: "4", label: "Departments", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Government Polytechnic College
                  <span className="block text-blue-600 gradient-text">Chromepet-Chennai</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Formerly Institute of Road Transport Polytechnic College
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/admission">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/departments">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Explore Courses
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>17.35 Acres Campus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Since 1992-93</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl glow-effect floating-animation">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <GraduationCap className="h-24 w-24 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">College Campus Image</p>
                    <p className="text-sm opacity-75">Placeholder for actual campus photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            About Our Institution
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Government Polytechnic College, Chromepet-Chennai (Formerly Institute of Road Transport Polytechnic College, Chennai) was started by the Institute of Road Transport, Taramani in the year 1992-93. Three Polytechnics in Chennai, Bargur, and Tirunelveli were started with the idea of imparting Technical Education to the wards of the Transport Corporation employees.
            </p>
            <p>
              The Polytechnic functions in the campus with an area of 17.35 acres. Education is all about creating an environment of academic freedom, where bright minds meet, discover and learn. One would experience top of the world living and learning experience at Government Polytechnic College.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive engineering programs designed to prepare students for successful careers in technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Intake:</span>
                      <span className="font-medium text-gray-900">{course.intake}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/departments">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Departments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
              <p className="text-blue-100">
                Join thousands of successful graduates who started their engineering careers with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>044 22650765</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>irtpolychennai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
