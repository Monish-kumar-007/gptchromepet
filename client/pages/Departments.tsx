import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  FileText,
  Download,
  GraduationCap,
  Clock,
  Award,
} from "lucide-react";

const departments = {
  "basic-engineering": {
    title: "Basic Engineering",
    icon: "📐",
    color: "from-green-500 to-green-600",
    description:
      "The Basic Engineering Program provides a high-quality, uniform first-year program of study for all engineering branches.",
    fullDescription:
      "Students are introduced to Maths, Physics, Chemistry and the concept of Engineering Design. The department inculcate students who have decided on a specific engineering discipline.",
    certification:
      "Students of all discipline must undergo the subjects offered by the Department of Basic Engineering",
    staff: [
      {
        name: "SENTHIL KUMARAN. S",
        subject: "Physics",
        education: "M.Sc, M.phil",
        occupation: "Principal",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "THANGADURAI .C",
        subject: "Physics",
        education: "M.Sc ., M.Ed., M.Phil",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "Dr.PALANIYAPPA .R",
        subject: "Maths",
        education: "M.Sc., M.Phil, Ph.D",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "ARUNA .M",
        subject: "Chemistry",
        education: "M.Sc, M.Phil",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "RAJARAJESHWARI .V",
        subject: "Chemistry",
        education: "M.Sc, M.Phil",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
    ],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Engineering Drawing",
      "Basic Mechanical Engineering",
    ],
  },
  "computer-engineering": {
    title: "Computer Engineering",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    description:
      "The Computer Engineering Department was started in the year 1995-1996, with the intake 60 students.",
    fullDescription:
      "40 Systems in the multimedia lab, and for programming lab, 20 systems for Hardware & Networking lab. Students are participated in interpolytechnic seminars & quiz competitions conducted by Various colleges and won many prizes. They also have won many prizes in extra curricular activities. Every semester one day workshop is conducted for Installation & servicing and Network & Administration subjects.",
    certification:
      "Courses offered by the Department are Computer Engineering (Regular)",
    staff: [
      {
        name: "SRIDHAR P",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "HOD",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "KAVITHA B",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "MANGA V",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "JULIET THESSALONICA",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "PRIYA V",
        subject: "Computer Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "VAIRAM M",
        subject: "Computer Engineering",
        education: "I.T.I, NATC, NTC",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
    ],
    subjects: [
      "Programming in C",
      "Data Structures",
      "Database Management",
      "Web Development",
      "Networking",
      "Software Engineering",
    ],
  },
  ece: {
    title: "Electronics and Communications Engineering",
    icon: "📡",
    color: "from-purple-500 to-purple-600",
    description:
      "Electronics Department spectacular results show the Diligence of our staff members.",
    fullDescription:
      "ECE students manage to balance both Academic and social activities. We encourage the Students to develop their potential to the optimum and to provide opportunity to them beyond technical training to develop communication skills, team and leadership competence, Conceptual and strategic thinking and awareness of responsibility. Local visits and workshop are arranged periodically to give them an exposure in their areas. To develop students in the new era of Electronics, ECE department as established VLSI/ Embedded lab to its credit.",
    certification:
      "Courses offered by the Department are Electronic Communication Engineering (Regular)",
    staff: [
      {
        name: "THANGAVELU.S",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "HOD",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "KAVITHA SRIDHAR B",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "SAGAYA AROKIARIJ .X",
        subject: "Electronics and Communications Engineering",
        education: "M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
    ],
    subjects: [
      "Analog Electronics",
      "Digital Electronics",
      "Communication Systems",
      "Microprocessors",
      "VLSI Design",
      "Embedded Systems",
    ],
  },
  eee: {
    title: "Electrical and Electronics Engineering",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-600",
    description:
      "The Electrical and Electronic Engineering Department was started in the year 1992, with the intake 60 students.",
    fullDescription:
      "Students are participated in interpolytechnic seminars & quiz competitions conducted by Various colleges and won many prizes. They also have won many prizes in extra curricular activities. Every semester one day workshop is conducted for Related subjects.",
    certification:
      "Courses offered by the Department are Electrical and Electronic Engineering (Regular)",
    staff: [
      {
        name: "TAMILARASI .R",
        subject: "Electrical and Electronics Engineering",
        education: "M.E",
        occupation: "HOD",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "RAJAKUMARI .R",
        subject: "Electrical and Electronics Engineering",
        education: "B.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "SINGARAM.T",
        subject: "Electrical and Electronics Engineering",
        education: "I.T.I & NTC NATC, M.E",
        occupation: "Lecturer",
        image: "/placeholder-staff.jpg",
      },
    ],
    subjects: [
      "Electrical Machines",
      "Power Systems",
      "Control Systems",
      "Power Electronics",
      "Renewable Energy",
      "Industrial Automation",
    ],
  },
  mechanical: {
    title: "Mechanical Engineering",
    icon: "⚙️",
    color: "from-red-500 to-red-600",
    description:
      "The Mechanical Engineering Department was started in the year 1992, with the intake 60 students.",
    fullDescription:
      "Students are participated in interpolytechnic seminars & quiz competitions conducted by Various colleges and won many prizes. They also have won many prizes in extra curricular activities. Every semester one day workshop is conducted for Related subjects.",
    certification:
      "Courses offered by the Department are Mechanical Engineering (Regular)",
    staff: [
      {
        name: "ANAND S",
        subject: "Mechanical Engineering",
        education: "M.E",
        occupation: "HOD",
        image: "/placeholder-staff.jpg",
      },
      {
        name: "VENKATESAN .J",
        subject: "Mechanical Engineering",
        education: "M.E",
        occupation: "I.T.I & NTC",
        image: "/placeholder-staff.jpg",
      },
    ],
    subjects: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Manufacturing Technology",
      "Machine Design",
      "Automobile Engineering",
      "CAD/CAM",
    ],
  },
};

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState<string>("basic-engineering");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Departments
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our diverse engineering departments, each offering
            comprehensive education and excellent career opportunities
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(departments).map(([key, dept]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 group ${
                selectedDept === key
                  ? "border-purple-500 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-800/30"
                  : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
              }`}
              onClick={() => setSelectedDept(key)}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{dept.icon}</span>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white leading-tight">
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
                  {dept.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge
                    variant={selectedDept === key ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {dept.staff.length} Faculty Members
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Department Details */}
        <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader
            className={`bg-gradient-to-r ${departments[selectedDept]?.color} text-white rounded-t-lg`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{departments[selectedDept]?.icon}</div>
              <div>
                <CardTitle className="text-3xl">
                  {departments[selectedDept]?.title}
                </CardTitle>
                <p className="text-white/90 mt-2">
                  {departments[selectedDept]?.description}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                      Course Description
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {departments[selectedDept]?.fullDescription}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <Award className="h-5 w-5 mr-2 text-purple-600" />
                      Certification
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {departments[selectedDept]?.certification}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Quick Facts
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Faculty:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {departments[selectedDept]?.staff.length} Members
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Duration:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            3 Years
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Intake:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            60 Students
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Type:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            Diploma
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="staff" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                    Faculty Members
                  </h3>
                  <Badge variant="secondary">
                    {departments[selectedDept]?.staff.length} Members
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments[selectedDept]?.staff.map((member, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                          {member.occupation}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {member.subject}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {member.education}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="subjects" className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                  Core Subjects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments[selectedDept]?.subjects.map((subject, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {subject}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="syllabus" className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                    <FileText className="h-5 w-5 mr-2 text-purple-600" />
                    Syllabus & Curriculum
                  </h3>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg border border-purple-200 dark:border-purple-800">
                    <FileText className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Detailed syllabus and curriculum documents are available
                      for download
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus PDF
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
