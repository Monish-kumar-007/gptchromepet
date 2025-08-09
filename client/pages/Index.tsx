import { GraduationCap, Users, BookOpen, Award, MapPin, Clock, Phone, Mail, Star, Zap, Target } from "lucide-react";
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
      intake: "60 Students",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Electronics and Communications Engineering",
      description: "Modern electronics, communication systems, and embedded technology",
      icon: "📡",
      duration: "3 Years",
      intake: "60 Students",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mechanical Engineering",
      description: "Design, manufacturing, and mechanical systems engineering",
      icon: "⚙️",
      duration: "3 Years",
      intake: "60 Students",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Electrical and Electronics Engineering",
      description: "Power systems, control engineering, and electrical machines",
      icon: "⚡",
      duration: "3 Years",
      intake: "60 Students",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: Award, color: "text-yellow-600" },
    { number: "1000+", label: "Graduates", icon: GraduationCap, color: "text-blue-600" },
    { number: "50+", label: "Expert Faculty", icon: Users, color: "text-green-600" },
    { number: "4", label: "Departments", icon: BookOpen, color: "text-purple-600" }
  ];

  const highlights = [
    { icon: Star, title: "AICTE Approved", description: "Government recognized institution" },
    { icon: Target, title: "95% Placement", description: "Excellent career opportunities" },
    { icon: Zap, title: "Modern Labs", description: "State-of-the-art facilities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233b82f6\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"}></div>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-xl animate-pulse floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 opacity-10 rounded-full blur-xl animate-pulse floating-animation delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-yellow-400 opacity-10 rounded-full blur-xl animate-pulse floating-animation delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Established 1992 • Government Institution</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Government Polytechnic College
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                    Chromepet-Chennai
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Formerly Institute of Road Transport Polytechnic College - Your gateway to engineering excellence
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/admission">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-gradient-x">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </Link>
                <Link to="/departments">
                  <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transform hover:scale-105 transition-all duration-300">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Courses
                  </Button>
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{highlight.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{highlight.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
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
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl shadow-2xl glow-effect floating-animation overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
                  
                  <div className="relative text-center text-white z-10">
                    <GraduationCap className="h-24 w-24 mx-auto mb-4 opacity-90 animate-pulse" />
                    <p className="text-lg font-semibold">College Campus</p>
                    <p className="text-sm opacity-75">Beautiful Learning Environment</p>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-500">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Institution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                Government Polytechnic College, Chromepet-Chennai (Formerly Institute of Road Transport Polytechnic College, Chennai) was started by the Institute of Road Transport, Taramani in the year 1992-93. Three Polytechnics in Chennai, Bargur, and Tirunelveli were started with the idea of imparting Technical Education to the wards of the Transport Corporation employees.
              </p>
              <p>
                The Polytechnic functions in the campus with an area of 17.35 acres. Education is all about creating an environment of academic freedom, where bright minds meet, discover and learn. One would experience top of the world living and learning experience at Government Polytechnic College.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Courses</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive engineering programs designed to prepare students for successful careers in technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
                <CardHeader className="text-center relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-500 dark:text-gray-400">Intake:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{course.intake}</span>
                    </div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-white shadow-lg`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/departments">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transform hover:scale-105 transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Departments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-2">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 text-lg">
                Join thousands of successful graduates who started their engineering careers with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Phone className="h-5 w-5" />
                <span>044 22650765</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
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
