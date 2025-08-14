import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Users,
  Heart,
  Scale,
  Award,
  Lightbulb,
  Briefcase,
  Download,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

const committees = {
  "anti-ragging": {
    title: "Anti-Ragging Committee",
    icon: Shield,
    color: "from-red-500 to-red-600",
    description:
      "Ensuring a safe and harassment-free environment for all students",
    purpose:
      "To prevent any occurrence of ragging and to create awareness about anti-ragging policies.",
    objectives: [
      "Monitor and prevent ragging activities in the college",
      "Create awareness about anti-ragging policies and their consequences",
      "Provide a safe platform for students to report incidents",
      "Conduct orientation programs for new students",
      "Implement strict disciplinary actions against violators",
    ],
    members: [
      {
        name: "Senthil Kumaran S",
        designation: "Principal",
        role: "Chairman",
        image: "/images/committee/anti-ragging/senthilkumaran.jpg",
      },
      {
        name: "Sridhar P",
        designation: "HOD - Computer Engineering",
        role: "Convener",
        image: "/images/committee/anti-ragging/sridhar.png",
      },
      { 
        name: "Thangavelu S", 
        designation: "HOD - ECE", 
        role: "Member",
        image: "/images/committee/anti-ragging/thangavelu.jpg",
      },
      {
        name: "Student Representative",
        designation: "Final Year Student",
        role: "Student Member",
        image: "/images/committee/anti-ragging/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765",
      email: "antiragging@gpc.edu.in",
      helpline: "1800-180-5522",
    },
    guidelines:
      "Anti-ragging guidelines and complaint procedures are available for download.",
  },
  "anti-drugs": {
    title: "Anti-Drugs Committee",
    icon: Heart,
    color: "from-green-500 to-green-600",
    description:
      "Promoting drug-free campus and healthy lifestyle among students",
    purpose:
      "To create awareness about the harmful effects of drugs and maintain a drug-free campus environment.",
    objectives: [
      "Conduct awareness programs about harmful effects of drugs",
      "Monitor campus premises for any drug-related activities",
      "Organize counseling sessions for affected students",
      "Collaborate with law enforcement agencies when necessary",
      "Promote healthy lifestyle and recreational activities",
    ],
    members: [
      {
        name: "Dr. Palaniyappa R",
        designation: "Lecturer - Mathematics",
        role: "Chairman",
        image: "/images/committee/anti-drug/palaniyappa.jpg",
      },
      {
        name: "Tamilarasi R",
        designation: "HOD - EEE",
        role: "Convener",
        image: "/images/committee/anti-drug/tamilarasi.jpg",
      },
      {
        name: "Anand S",
        designation: "HOD - Mechanical",
        role: "Member",
        image: "/images/committee/anti-drug/anand.jpg",
      },
      {
        name: "Medical Officer",
        designation: "Campus Health Center",
        role: "Health Advisor",
        image: "/images/committee/anti-drug/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765",
      email: "antidrugs@gpc.edu.in",
      helpline: "104 (Drug De-addiction Helpline)",
    },
    guidelines:
      "Anti-drug policies and support resources are available for students and parents.",
  },
  icc: {
    title: "Internal Complaints Committee (ICC)",
    icon: Scale,
    color: "from-purple-500 to-purple-600",
    description: "Addressing workplace harassment and ensuring gender equality",
    purpose:
      "To provide a safe working environment free from sexual harassment for all employees and students.",
    objectives: [
      "Investigate complaints of sexual harassment at workplace",
      "Conduct awareness programs on gender sensitization",
      "Provide support and guidance to complainants",
      "Ensure fair and timely resolution of complaints",
      "Maintain confidentiality throughout the process",
    ],
    members: [
      {
        name: "Kavitha B",
        designation: "Lecturer - Computer Engineering",
        role: "Presiding Officer",
        image: "/images/committee/internal-complaints/kavitha.jpg",
      },
      {
        name: "Aruna M",
        designation: "Lecturer - Chemistry",
        role: "Member",
        image: "/images/committee/internal-complaints/aruna.jpg",
      },
      {
        name: "External Expert",
        designation: "Legal Advisor",
        role: "External Member",
        image: "/images/committee/internal-complaints/empty.png",
      },
      {
        name: "Student Representative",
        designation: "Final Year Student",
        role: "Student Member",
        image: "/images/committee/internal-complaints/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765 Ext: 101",
      email: "icc@gpc.edu.in",
      helpline: "181 (Women Helpline)",
    },
    guidelines:
      "Sexual harassment prevention policies and complaint procedures as per UGC guidelines.",
  },
  sgrc: {
    title: "Student Grievance Redressal Committee (SGRC)",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    description: "Addressing student concerns and ensuring fair resolution",
    purpose:
      "To address student grievances promptly and ensure fair treatment for all academic and administrative issues.",
    objectives: [
      "Receive and investigate student grievances",
      "Provide timely and fair resolution to complaints",
      "Maintain transparency in the grievance process",
      "Suggest improvements in college policies and procedures",
      "Ensure student rights are protected",
    ],
    members: [
      {
        name: "Senthil Kumaran S",
        designation: "Principal",
        role: "Chairman",
        image: "/images/committee/SGRC/senthilkumaran.jpg",
      },
      {
        name: "Thangavelu S",
        designation: "HOD - ECE",
        role: "Convener",
        image: "/images/committee/SGRC/thangavelu.jpg",
      },
      {
        name: "Kavitha Sridhar B",
        designation: "Lecturer - ECE",
        role: "Member",
        image: "/images/committee/SGRC/kavithasridhar.jpg",
      },
      {
        name: "Student Council President",
        designation: "Student Representative",
        role: "Student Member",
        image: "/images/committee/SGRC/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765 Ext: 102",
      email: "grievance@gpc.edu.in",
      helpline: "9444-XXX-XXX",
    },
    guidelines:
      "Student grievance procedures and forms are available for download.",
  },
  iqac: {
    title: "Internal Quality Assurance Cell (IQAC)",
    icon: Award,
    color: "from-yellow-500 to-yellow-600",
    description:
      "Ensuring and enhancing quality in academic and administrative services",
    purpose:
      "To develop a system for conscious, consistent and catalytic improvement in the performance of institutions.",
    objectives: [
      "Develop and apply quality benchmarks for academic activities",
      "Facilitate creation of learner-centric environment",
      "Arrange for feedback from students and stakeholders",
      "Disseminate information on quality parameters",
      "Organize workshops and seminars on quality enhancement",
    ],
    members: [
      {
        name: "Senthil Kumaran S",
        designation: "Principal",
        role: "Chairperson",
        image: "/images/committee/IQAC/senthilkumaran.jpg",
      },
      {
        name: "Sridhar P",
        designation: "HOD - Computer Engineering",
        role: "Coordinator",
        image: "/images/committee/IQAC/sridhar.png",
      },
      { 
        name: "All HODs", 
        designation: "Department Heads", 
        role: "Members",
        image: "/images/committee/IQAC/empty.png",
      },
      {
        name: "Industry Expert",
        designation: "External Expert",
        role: "External Member",
        image: "/images/committee/IQAC/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765 Ext: 103",
      email: "iqac@gpc.edu.in",
      helpline: "N/A",
    },
    guidelines:
      "Quality assurance policies and assessment criteria are available for reference.",
  },
  iic: {
    title: "Institution's Innovation Council (IIC)",
    icon: Lightbulb,
    color: "from-orange-500 to-orange-600",
    description: "Promoting innovation and entrepreneurship among students",
    purpose:
      "To create an innovation ecosystem and promote entrepreneurial mindset among students and faculty.",
    objectives: [
      "Conduct innovation and entrepreneurship activities",
      "Organize workshops on idea generation and startup development",
      "Provide mentorship for student innovators",
      "Facilitate collaboration with industry and research organizations",
      "Support students in developing prototypes and business plans",
    ],
    members: [
      {
        name: "Anand S",
        designation: "HOD - Mechanical",
        role: "President",
        image: "/images/committee/IIC/anand.jpg",
      },
      {
        name: "Juliet Thessalonica",
        designation: "Lecturer - Computer Engineering",
        role: "Convener",
        image: "/images/committee/IIC/juliet.jpg",
      },
      {
        name: "Priya V",
        designation: "Lecturer - Computer Engineering",
        role: "Innovation Ambassador",
        image: "/images/committee/IIC/priya.jpg",
      },
      {
        name: "Industry Mentor",
        designation: "Startup Founder",
        role: "External Mentor",
        image: "/images/committee/IIC/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765 Ext: 104",
      email: "iic@gpc.edu.in",
      helpline: "N/A",
    },
    guidelines:
      "Innovation policies and startup support guidelines are available for aspiring entrepreneurs.",
  },
  wec: {
    title: "Women Empowerment Committee (WEC)",
    icon: Users,
    color: "from-pink-500 to-pink-600",
    description:
      "Empowering women students and staff through various initiatives",
    purpose:
      "To create a supportive environment for women and promote gender equality in education and workplace.",
    objectives: [
      "Organize programs for women empowerment and skill development",
      "Provide counseling and support services for women",
      "Conduct awareness programs on women's rights and safety",
      "Facilitate career guidance and mentorship for women students",
      "Promote participation of women in leadership roles",
    ],
    members: [
      {
        name: "Tamilarasi R",
        designation: "HOD - EEE",
        role: "Chairperson",
        image: "/images/committee/WEC/tamilarasi.jpg",
      },
      {
        name: "Rajarajeshwari V",
        designation: "Lecturer - Chemistry",
        role: "Convener",
        image: "/images/committee/WEC/rajeswari.jpg",
      },
      {
        name: "Kavitha B",
        designation: "Lecturer - Computer Engineering",
        role: "Member",
        image: "/images/committee/WEC/kavitha.jpg",
      },
      {
        name: "Women Student Representative",
        designation: "Student Council",
        role: "Student Member",
        image: "/images/committee/WEC/empty.png",
      },
    ],
    contact: {
      phone: "044-22650765 Ext: 105",
      email: "wec@gpc.edu.in",
      helpline: "181 (Women Helpline)",
    },
    guidelines:
      "Women empowerment policies and support services information available for download.",
  },
};

export default function Committee() {
  const [selectedCommittee, setSelectedCommittee] =
    useState<string>("anti-ragging");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            College{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Committees
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our dedicated committees ensure a safe, fair, and progressive
            environment for all students and staff
          </p>
        </div>

        {/* Committee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Object.entries(committees).map(([key, committee]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 group ${
                selectedCommittee === key
                  ? "border-indigo-500 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-800/30"
                  : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"
              }`}
              onClick={() => setSelectedCommittee(key)}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${committee.color} rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <committee.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm text-gray-900 dark:text-white leading-tight">
                  {committee.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-xs text-center leading-relaxed">
                  {committee.description}
                </p>
                <div className="mt-3 flex justify-center">
                  <Badge
                    variant={
                      selectedCommittee === key ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {committee.members.length} Members
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Committee Details */}
        <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader
            className={`bg-gradient-to-r ${committees[selectedCommittee]?.color} text-white rounded-t-lg`}
          >
            <div className="flex items-center space-x-4">
              {(() => {
                const IconComponent = committees[selectedCommittee].icon;
                return <IconComponent className="h-8 w-8" />;
              })()}
              <div>
                <CardTitle className="text-2xl">
                  {committees[selectedCommittee]?.title}
                </CardTitle>
                <p className="text-white/90 mt-2">
                  {committees[selectedCommittee]?.description}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-indigo-600" />
                        Purpose
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {committees[selectedCommittee]?.purpose}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-indigo-600" />
                        Key Objectives
                      </h3>
                      <ul className="space-y-2">
                        {committees[selectedCommittee]?.objectives.map(
                          (objective, index) => (
                            <li
                              key={index}
                              className="flex items-start text-gray-700 dark:text-gray-300"
                            >
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {objective}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      className={`bg-gradient-to-br ${committees[selectedCommittee]?.color.replace("from-", "from-").replace("to-", "to-")}/10 p-6 rounded-lg border border-gray-200 dark:border-gray-700`}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Quick Info
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Members:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {committees[selectedCommittee]?.members.length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Type:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            Institutional
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Status:
                          </span>
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="members" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-indigo-600" />
                    Committee Members
                  </h3>
                  <Badge variant="secondary">
                    {committees[selectedCommittee]?.members.length} Members
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {committees[selectedCommittee]?.members.map(
                    (member, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center">
                                  <Users className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {member.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                {member.designation}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {member.role}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-indigo-600" />
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {committees[selectedCommittee]?.contact.phone}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {committees[selectedCommittee]?.contact.email}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Phone className="h-8 w-8 text-red-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Helpline
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {committees[selectedCommittee]?.contact.helpline}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                    <FileText className="h-5 w-5 mr-2 text-indigo-600" />
                    Guidelines & Documents
                  </h3>

                  <div
                    className={`bg-gradient-to-br ${committees[selectedCommittee]?.color.replace("from-", "from-").replace("to-", "to-")}/10 p-8 rounded-lg border border-gray-200 dark:border-gray-700`}
                  >
                    <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                      {committees[selectedCommittee]?.guidelines}
                    </p>
                    <Button
                      className={`bg-gradient-to-r ${committees[selectedCommittee]?.color} hover:opacity-90`}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Guidelines PDF
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="mt-12 bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Emergency Contacts</h3>
              <p className="text-red-100">
                Important helpline numbers for immediate assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">100</div>
                <div className="text-red-100">Police</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">181</div>
                <div className="text-red-100">Women Helpline</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">1800-180-5522</div>
                <div className="text-red-100">Anti-Ragging</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">104</div>
                <div className="text-red-100">Medical Emergency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
