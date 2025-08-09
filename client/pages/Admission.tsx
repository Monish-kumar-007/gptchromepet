import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import {
  GraduationCap,
  FileText,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function Admission() {
  const [selectedYear, setSelectedYear] = useState<"first" | "second" | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    previousEducation: "",
    marks: "",
    year: "",
    documents: false,
    terms: false,
  });

  const departments = [
    "Computer Engineering",
    "Electronics and Communications Engineering",
    "Mechanical Engineering",
    "Electrical and Electronics Engineering",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description:
        "Your admission application has been submitted successfully. You will receive a confirmation email shortly.",
    });

    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      department: "",
      previousEducation: "",
      marks: "",
      year: "",
      documents: false,
      terms: false,
    });
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
              selectedYear === "first"
                ? "border-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
                : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
            }`}
            onClick={() => setSelectedYear("first")}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                First Year Admission
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
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
              selectedYear === "second"
                ? "border-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
                : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
            }`}
            onClick={() => setSelectedYear("second")}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Second Year Admission
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
            </CardContent>
          </Card>
        </div>

        {/* Admission Form */}
        {selectedYear && (
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6" />
                <CardTitle className="text-2xl">
                  {selectedYear === "first" ? "First Year" : "Second Year"}{" "}
                  Admission Application
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="department"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Preferred Department *
                    </Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        updateFormData("department", value)
                      }
                    >
                      <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  >
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                    placeholder="Enter your complete address"
                    required
                    className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-700 dark:text-gray-300 font-medium">
                      {selectedYear === "first"
                        ? "10th Standard Details"
                        : "12th Standard Details"}{" "}
                      *
                    </Label>
                    <Input
                      value={formData.previousEducation}
                      onChange={(e) =>
                        updateFormData("previousEducation", e.target.value)
                      }
                      placeholder={`${selectedYear === "first" ? "School name and board" : "School name and board"}`}
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 dark:text-gray-300 font-medium">
                      Percentage/CGPA *
                    </Label>
                    <Input
                      value={formData.marks}
                      onChange={(e) => updateFormData("marks", e.target.value)}
                      placeholder="Enter your marks/percentage"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="documents"
                      checked={formData.documents}
                      onCheckedChange={(checked) =>
                        updateFormData("documents", !!checked)
                      }
                    />
                    <Label
                      htmlFor="documents"
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      I confirm that I have all required documents ready for
                      verification
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) =>
                        updateFormData("terms", !!checked)
                      }
                    />
                    <Label
                      htmlFor="terms"
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      I accept the terms and conditions and confirm that all
                      information provided is accurate *
                    </Label>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg"
                    disabled={!formData.terms}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Required Documents */}
        <Card className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
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
