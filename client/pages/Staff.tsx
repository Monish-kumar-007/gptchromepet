import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Users,
  Search,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

const staffData = {
  "basic-engineering": {
    title: "Basic Engineering",
    color: "from-green-500 to-green-600",
    icon: "📐",
    staff: [
      {
        name: "SENTHIL KUMARAN. S",
        subject: "Physics",
        education: "M.Sc, M.phil",
        occupation: "Principal",
        email: "senthil.kumaran@gpc.edu.in",
        phone: "+91 9444123456",
        experience: "15+ Years",
        specialization: "Quantum Physics, Modern Physics",
      },
      {
        name: "THANGADURAI .C",
        subject: "Physics",
        education: "M.Sc ., M.Ed., M.Phil",
        occupation: "Lecturer",
        email: "thangadurai.c@gpc.edu.in",
        phone: "+91 9444234567",
        experience: "12+ Years",
        specialization: "Applied Physics, Electronics",
      },
      {
        name: "Dr.PALANIYAPPA .R",
        subject: "Maths",
        education: "M.Sc., M.Phil, Ph.D",
        occupation: "Lecturer",
        email: "palaniyappa.r@gpc.edu.in",
        phone: "+91 9444345678",
        experience: "18+ Years",
        specialization: "Applied Mathematics, Statistics",
      },
      {
        name: "ARUNA .M",
        subject: "Chemistry",
        education: "M.Sc, M.Phil",
        occupation: "Lecturer",
        email: "aruna.m@gpc.edu.in",
        phone: "+91 9444456789",
        experience: "10+ Years",
        specialization: "Organic Chemistry, Environmental Chemistry",
      },
      {
        name: "RAJARAJESHWARI .V",
        subject: "Chemistry",
        education: "M.Sc, M.Phil",
        occupation: "Lecturer",
        email: "rajarajeshwari.v@gpc.edu.in",
        phone: "+91 9444567890",
        experience: "8+ Years",
        specialization: "Inorganic Chemistry, Analytical Chemistry",
      },
    ],
  },
  "computer-engineering": {
    title: "Computer Engineering",
    color: "from-blue-500 to-blue-600",
    icon: "💻",
    staff: [
      {
        name: "SRIDHAR P",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "HOD",
        email: "sridhar.p@gpc.edu.in",
        phone: "+91 9444678901",
        experience: "20+ Years",
        specialization: "Software Engineering, Database Systems",
      },
      {
        name: "KAVITHA B",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "kavitha.b@gpc.edu.in",
        phone: "+91 9444789012",
        experience: "15+ Years",
        specialization: "Web Development, Programming Languages",
      },
      {
        name: "MANGA V",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "manga.v@gpc.edu.in",
        phone: "+91 9444890123",
        experience: "12+ Years",
        specialization: "Data Structures, Algorithms",
      },
      {
        name: "JULIET THESSALONICA",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "juliet.thessalonica@gpc.edu.in",
        phone: "+91 9444901234",
        experience: "10+ Years",
        specialization: "Computer Networks, Cybersecurity",
      },
      {
        name: "PRIYA V",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "priya.v@gpc.edu.in",
        phone: "+91 9444012345",
        experience: "8+ Years",
        specialization: "Mobile App Development, UI/UX",
      },
      {
        name: "VAIRAM M",
        subject: "Computer Engineering",
        education: "I.T.I, NATC, NTC",
        occupation: "Lecturer",
        email: "vairam.m@gpc.edu.in",
        phone: "+91 9444123450",
        experience: "25+ Years",
        specialization: "Hardware Maintenance, Networking",
      },
    ],
  },
  ece: {
    title: "Electronics and Communications Engineering",
    color: "from-purple-500 to-purple-600",
    icon: "📡",
    staff: [
      {
        name: "THANGAVELU.S",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "HOD",
        email: "thangavelu.s@gpc.edu.in",
        phone: "+91 9444234501",
        experience: "18+ Years",
        specialization: "Communication Systems, Signal Processing",
      },
      {
        name: "KAVITHA SRIDHAR B",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "kavitha.sridhar@gpc.edu.in",
        phone: "+91 9444345012",
        experience: "14+ Years",
        specialization: "Digital Electronics, VLSI Design",
      },
      {
        name: "SAGAYA AROKIARIJ .X",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "Lecturer",
        email: "sagaya.arokiarij@gpc.edu.in",
        phone: "+91 9444456123",
        experience: "11+ Years",
        specialization: "Microprocessors, Embedded Systems",
      },
    ],
  },
  eee: {
    title: "Electrical and Electronics Engineering",
    color: "from-yellow-500 to-yellow-600",
    icon: "⚡",
    staff: [
      {
        name: "TAMILARASI .R",
        subject: "Electrical and Electronics Engineering",
        education: "M.E",
        occupation: "HOD",
        email: "tamilarasi.r@gpc.edu.in",
        phone: "+91 9444567234",
        experience: "16+ Years",
        specialization: "Power Systems, Electrical Machines",
      },
      {
        name: "RAJAKUMARI .R",
        subject: "Electrical and Electronics Engineering",
        education: "B.E",
        occupation: "Lecturer",
        email: "rajakumari.r@gpc.edu.in",
        phone: "+91 9444678345",
        experience: "12+ Years",
        specialization: "Control Systems, Power Electronics",
      },
      {
        name: "SINGARAM.T",
        subject: "Electrical and Electronics Engineering",
        education: "I.T.I & NTC NATC, M.E",
        occupation: "Lecturer",
        email: "singaram.t@gpc.edu.in",
        phone: "+91 9444789456",
        experience: "20+ Years",
        specialization: "Industrial Automation, Renewable Energy",
      },
    ],
  },
  mechanical: {
    title: "Mechanical Engineering",
    color: "from-red-500 to-red-600",
    icon: "⚙️",
    staff: [
      {
        name: "ANAND S",
        subject: "Mechanical Engineering",
        education: "M.E",
        occupation: "HOD",
        email: "anand.s@gpc.edu.in",
        phone: "+91 9444890567",
        experience: "19+ Years",
        specialization: "Manufacturing Technology, Machine Design",
      },
      {
        name: "VENKATESAN .J",
        subject: "Mechanical Engineering",
        education: "M.E",
        occupation: "I.T.I & NTC",
        email: "venkatesan.j@gpc.edu.in",
        phone: "+91 9444901678",
        experience: "22+ Years",
        specialization: "Automobile Engineering, CAD/CAM",
      },
    ],
  },
  office: {
    title: "Office Staff",
    color: "from-gray-500 to-gray-600",
    icon: "🏢",
    staff: [
      {
        name: "RAJESH KUMAR",
        subject: "Administration",
        education: "M.Com",
        occupation: "Administrative Officer",
        email: "rajesh.kumar@gpc.edu.in",
        phone: "+91 9444012789",
        experience: "15+ Years",
        specialization: "College Administration, Student Affairs",
      },
      {
        name: "PRIYA SHARMA",
        subject: "Accounts",
        education: "M.Com, CA",
        occupation: "Accountant",
        email: "priya.sharma@gpc.edu.in",
        phone: "+91 9444123890",
        experience: "12+ Years",
        specialization: "Financial Management, Auditing",
      },
      {
        name: "KUMAR RAVI",
        subject: "Library",
        education: "M.Lib.Sc",
        occupation: "Librarian",
        email: "kumar.ravi@gpc.edu.in",
        phone: "+91 9444234901",
        experience: "10+ Years",
        specialization: "Library Management, Digital Resources",
      },
    ],
  },
};

export default function Staff() {
  const [selectedDept, setSelectedDept] = useState<string>("basic-engineering");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStaff =
    staffData[selectedDept]?.staff.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.occupation.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  const totalStaff = Object.values(staffData).reduce(
    (total, dept) => total + dept.staff.length,
    0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Faculty & Staff
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Meet our dedicated team of experienced educators and support staff
            committed to your academic success
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-indigo-600" />
              <span>{totalStaff} Total Faculty & Staff</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" />
              <span>6 Departments</span>
            </div>
          </div>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(staffData).map(([key, dept]) => (
            <Button
              key={key}
              variant={selectedDept === key ? "default" : "outline"}
              className={`h-auto px-4 py-3 flex flex-col items-center justify-center min-w-[140px] transition-all duration-300 ${
                selectedDept === key
                  ? `bg-gradient-to-br ${dept.color} text-white shadow-lg transform scale-105`
                  : "hover:shadow-md hover:scale-102"
              }`}
              onClick={() => setSelectedDept(key)}
            >
              <span className="text-xl mb-1">{dept.icon}</span>
              <span className="text-xs text-center leading-tight font-medium">
                {dept.title}
              </span>
              <Badge
                variant={selectedDept === key ? "secondary" : "outline"}
                className="text-xs mt-1"
              >
                {dept.staff.length}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search faculty by name, subject, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400"
            />
          </div>
        </div>

        {/* Department Header */}
        <Card className="mb-8 shadow-xl border-0 overflow-hidden">
          <CardHeader
            className={`bg-gradient-to-r ${staffData[selectedDept]?.color} text-white`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{staffData[selectedDept]?.icon}</div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    {staffData[selectedDept]?.title}
                  </CardTitle>
                  <p className="text-white/90 text-lg">
                    {filteredStaff.length} Faculty Members
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Staff Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStaff.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-indigo-200 dark:hover:border-indigo-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:-translate-y-2 h-full flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Profile Section - Fixed Height */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gradient-to-r ${staffData[selectedDept]?.color} text-white text-xs rounded-full shadow-md whitespace-nowrap`}
                    >
                      {member.occupation}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight text-center min-h-[3.5rem] flex items-center">
                    {member.name}
                  </h3>
                </div>

                {/* Information Section - Flexible Height */}
                <div className="flex-1 space-y-4">
                  {/* Subject and Education */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center text-sm text-indigo-600 dark:text-indigo-400">
                      <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{member.subject}</span>
                    </div>

                    <div className="flex justify-center">
                      <Badge variant="outline" className="text-xs">
                        {member.education}
                      </Badge>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{member.experience}</span>{" "}
                      Experience
                    </div>
                  </div>

                  {/* Specialization - Fixed Height */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-medium">
                      Specialization:
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed min-h-[2.5rem] flex items-center">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                {/* Contact Section - Fixed at Bottom */}
                <div className="mt-auto pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">
                      <Mail className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="truncate" title={member.email}>
                        {member.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">
                      <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${staffData[selectedDept]?.color} hover:opacity-90 transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:scale-105`}
                  >
                    <Mail className="h-3 w-3 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredStaff.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No staff members found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or browse different departments
              </p>
            </div>
          </div>
        )}

        {/* Statistics Footer */}
        <Card className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold">{totalStaff}</div>
                <div className="text-indigo-100">Total Faculty & Staff</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-indigo-100">Average Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">5</div>
                <div className="text-indigo-100">Ph.D. Holders</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-indigo-100">Qualified Faculty</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
