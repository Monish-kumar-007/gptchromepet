import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function Admission() {
  const handleAdmissionClick = (admissionType: "first" | "second") => {
    window.open("https://tnpoly.in/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-6 shadow-lg">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Admission{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Portal
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join Government Polytechnic College and start your journey towards a
            successful engineering career
          </p>
        </div>

        {/* Admission Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 group"
            onClick={() => handleAdmissionClick("first")}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center justify-center gap-2">
                First Year Admission
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                For students who have completed 10th standard and want to join
                directly in the first year
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Minimum 35% in 10th standard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Age limit: 15-20 years
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Merit-based selection
                </li>
              </ul>
              <div className="mt-4 text-center">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Click to apply online →
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 group"
            onClick={() => handleAdmissionClick("second")}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center justify-center gap-2">
                Second Year Admission
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                For students who have completed 12th standard and want to join
                directly in the second year
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Minimum 50% in 12th standard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  PCM subjects mandatory
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Lateral entry program
                </li>
              </ul>
              <div className="mt-4 text-center">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Click to apply online →
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
              <FileText className="h-5 w-5 mr-2 text-yellow-600" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mark sheets and certificates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Transfer certificate
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Community certificate (if applicable)
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Income certificate (if applicable)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Passport size photographs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Aadhar card copy
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
