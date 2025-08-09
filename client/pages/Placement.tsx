import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Target, Users, Building2, TrendingUp, Phone, Mail, Award, CheckCircle, ArrowRight, Star } from "lucide-react";

const placementStats = [
  { title: "Placement Rate", value: "95%", description: "Students placed successfully", icon: TrendingUp },
  { title: "Partner Companies", value: "50+", description: "Recruiting organizations", icon: Building2 },
  { title: "Average Package", value: "₹3.5 LPA", description: "Annual compensation", icon: Award },
  { title: "Highest Package", value: "₹8 LPA", description: "Maximum offer received", icon: Star }
];

const placementTeam = [
  {
    name: "Tmt. KAVITHA B",
    designation: "Lecturer/CE",
    role: "Placement Officer",
    mobile: "9444190646",
    email: "placement.gptchr@gmail.com",
    department: "Computer Engineering"
  },
  {
    name: "Tmt. KAVITHA B",
    designation: "Lecturer/ECE", 
    role: "Placement Coordinator",
    mobile: "9444359441",
    email: "sridhar.kavitha@gmail.com",
    department: "Electronics & Communication"
  },
  {
    name: "Thiru ANAND S",
    designation: "Lecturer/MECH",
    role: "Placement Coordinator",
    mobile: "7010878240",
    email: "irtanand@gmail.com",
    department: "Mechanical Engineering"
  },
  {
    name: "Tmt. RAJAKUMARI A",
    designation: "Lecturer/EEE",
    role: "Placement Coordinator",
    mobile: "9445204146",
    email: "rajakumari1996@gmail.com",
    department: "Electrical & Electronics"
  },
  {
    name: "Tmt. JULIET THESSALONICA D",
    designation: "Lecturer/COMPUTER",
    role: "Placement Coordinator",
    mobile: "9444365032",
    email: "juliet.jsamuel@gmail.com",
    department: "Computer Engineering"
  }
];

const recruiters = [
  { name: "Precision Group", sector: "Manufacturing", logo: "precision" },
  { name: "BK System", sector: "IT Services", logo: "bk-system" },
  { name: "Apollo Tyres", sector: "Automotive", logo: "apollo" },
  { name: "Delphi TVS", sector: "Automotive", logo: "delphi" },
  { name: "K2 Cranes & Components", sector: "Heavy Machinery", logo: "k2" },
  { name: "Igarashi", sector: "Electronics", logo: "igarashi" },
  { name: "TAFE", sector: "Agricultural Machinery", logo: "tafe" },
  { name: "Zauba Corp", sector: "Data Analytics", logo: "zauba" },
  { name: "Royal Enfield", sector: "Automotive", logo: "royal-enfield" },
  { name: "TVS", sector: "Automotive", logo: "tvs" },
  { name: "Jayair", sector: "Aviation", logo: "jayair" },
  { name: "Autotech", sector: "Automotive", logo: "autotech" }
];

const placementProcess = [
  {
    step: 1,
    title: "Registration",
    description: "Students register with placement cell and submit required documents",
    icon: Users
  },
  {
    step: 2,
    title: "Training & Preparation",
    description: "Aptitude training, soft skills development, and interview preparation",
    icon: Target
  },
  {
    step: 3,
    title: "Company Visits",
    description: "Companies conduct campus recruitment drives and interviews",
    icon: Building2
  },
  {
    step: 4,
    title: "Final Selection",
    description: "Selected candidates receive offer letters and join companies",
    icon: Award
  }
];

export default function Placement() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Cell</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between education and employment, ensuring successful career launches for our graduates
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">{stat.title}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Briefcase className="h-6 w-6 mr-3" />
              Placement Services & Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">Placement Team</TabsTrigger>
                <TabsTrigger value="recruiters">Recruiters</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* Mission */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
                    "To provide comprehensive training, guidance, and support to students, enhancing their employability and securing successful placements in leading organizations."
                  </p>
                </div>

                {/* About Placement Cell */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <Target className="h-5 w-5 mr-2 text-green-600" />
                      About Our Placement Cell
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every diploma student aspires to work for a renowned organization. It is evident from considering this important issue that diploma students require training to enhance their career prospects and secure respectable employment in a variety of industries.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      At our college, students not only receive technical instruction but are also cultivated into well-rounded persons with life skills to address global issues. In order to provide career opportunity to our students we are having a Placement Cell, which is effectively functioning in our Institution with a Placement Officer and Placement coordinators to achieve consistently high placement rates.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Key Objectives
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Achieve high placements",
                        "Develop strong industry relationships and partnerships",
                        "Provide career counseling, training and mentorship",
                        "Facilitate industrial visit, internships, and projects",
                        "Enhance student employability skills",
                        "Organize recruitment drives and networking events",
                        "Monitor and improve placement processes"
                      ].map((objective, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Placement Team
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Dedicated professionals committed to your career success
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placementTeam.map((member, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                          <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{member.designation}</p>
                          <p className="text-xs text-green-600 dark:text-green-400 mb-4">{member.department}</p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                              <Phone className="h-3 w-3 mr-2" />
                              <span>{member.mobile}</span>
                            </div>
                            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                              <Mail className="h-3 w-3 mr-2" />
                              <span className="truncate">{member.email}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recruiters" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-center">
                    <Building2 className="h-5 w-5 mr-2 text-green-600" />
                    Our Recruitment Partners
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Leading companies that trust our graduates
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {recruiters.map((company, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <Building2 className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{company.name}</h4>
                        <Badge variant="outline" className="text-xs">{company.sector}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    <Building2 className="h-4 w-4 mr-2" />
                    Partner With Us
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="process" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-600" />
                    Placement Process
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Step-by-step guide to our placement procedure
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {placementProcess.map((step, index) => (
                    <Card key={index} className="relative hover:shadow-lg transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
                      <CardContent className="p-6 text-center">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                        <div className="mt-4">
                          <step.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Ready to Start Your Career Journey?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    Join our placement program and let us help you achieve your career goals
                  </p>
                  <div className="flex justify-center">
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Register for Placements
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-green-100">Contact our placement team for any queries or assistance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Phone</div>
                <div className="text-green-100">044 22650765</div>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-green-100">placement.gptchr@gmail.com</div>
              </div>
              <div>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Office Hours</div>
                <div className="text-green-100">Mon - Fri: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
