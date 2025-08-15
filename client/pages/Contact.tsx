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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  HelpCircle,
  MessageSquare,
  Navigation,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Read env for both Next.js and Vite safely
// EmailJS configuration - Hardcoded values
const SERVICE_ID = "service_m59y9bc";   // <-- Replace with your actual EmailJS Service ID
const TEMPLATE_ID = "template_c4q6jwb"; // <-- Replace with your actual EmailJS Template ID
const PUBLIC_KEY = "mUUV3m42pJYg8vrKk";  // <-- Replace with your actual EmailJS Public Key

const contactInfo = {
  address: {
    line1: "Bharatha Matha St",
    line2: "Bharathi puram",
    city: "Chromepet",
    state: "Chennai",
    pincode: "Tamil Nadu-600044",
  },
  phone: "044 22650765",
  email: "irtpolychennai@gmail.com",
  hours: "Monday - Friday: 9:00 AM - 5:00 PM",
};

const faqs = [
  {
    question: "How to reach Government Polytechnic College - Chennai?",
    answer:
      "Government Polytechnic College is located at Bharatha Matha St, Bharathi puram, Chromepet, Chennai, Tamil Nadu-600044. You can reach us by bus, train, or private vehicle. The nearest railway station is Chromepet Railway Station. Several bus routes connect to our campus including routes 18G, 70, and 570.",
  },
  {
    question:
      "I have just completed my 3 year diploma course. I have some arrears. How many more chances will be given to me to pass all my arrears?",
    answer:
      "Students are typically given multiple opportunities to clear their arrears. Generally, you can appear for arrear examinations conducted by DOTE twice a year. However, there may be time limits, so it's advisable to contact the academic section or examination cell for specific details about your situation and the maximum number of attempts allowed.",
  },
  {
    question:
      "I am supplementary candidate. Can I pay my diploma exam fee directly at DOTE?",
    answer:
      "Yes, supplementary candidates can usually pay their exam fees directly at DOTE (Directorate of Technical Education) offices. However, payment methods and procedures may change, so we recommend contacting DOTE directly or visiting their official website for the most current information about fee payment procedures.",
  },
  {
    question: "How will you declare my result?",
    answer:
      "Results are typically declared through the official DOTE website and are also made available at the college. Students can check their results online using their register number and date of birth. Physical mark sheets are usually distributed through the college after verification. You'll be notified through official channels when results are declared.",
  },
  {
    question:
      "I am a supplementary candidate working outside Tamil Nadu. Can I download my diploma hall ticket directly from the website?",
    answer:
      "Yes, hall tickets for supplementary examinations are usually available for download from the official DOTE website. You'll need your register number and other required details to download your hall ticket. This facility is specifically designed to help outstation students who cannot visit the college in person.",
  },
  {
    question:
      "I am a supplementary candidate and would like to write some of my arrear subjects. Whom should I contact to know the equivalent subjects under the latest scheme?",
    answer:
      "For information about equivalent subjects under the latest scheme, you should contact the Academic Section of our college or the respective department head. You can also contact DOTE directly for official clarification on subject equivalency. It's important to get this clarified before the examination registration deadline.",
  },
];

const contactReasons = [
  "General Inquiry",
  "Admission Information",
  "Academic Query",
  "Examination Related",
  "Placement Assistance",
  "Technical Support",
  "Grievance/Complaint",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  reason: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reason: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple validations
    if (!formData.name || !formData.email || !formData.subject || !formData.reason || !formData.message) {
      toast({
        variant: "destructive",
        title: "Please fill all required fields.",
        description: "Name, Email, Reason, Subject, and Message are mandatory.",
      });
      return;
    }
    // quick email sanity check
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Invalid email address.",
        description: "Please enter a valid email (e.g., name@example.com).",
      });
      return;
    }
    // env check
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        variant: "destructive",
        title: "Email service not configured.",
        description: "Missing EmailJS keys. Set them in your .env and reload the app.",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "N/A",
      subject: formData.subject,
      reason: formData.reason,
      message: formData.message,
      // send to college inbox (can also be set inside the template)
      to_email: "kundukarthi88@gmail.com",
      to_name: "Government Polytechnic College - Chennai",
      reply_to: formData.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        reason: "",
        message: "",
      });
    } catch (err: any) {
      console.error("EmailJS error:", err);
      toast({
        variant: "destructive",
        title: "Failed to send message.",
        description: err?.text || err?.message || "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Help{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Desk
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for any questions, concerns, or assistance.
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details Card */}
            <Card className="shadow-lg border-2 border-cyan-100 dark:border-cyan-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.line2}
                      <br />
                      {contactInfo.address.city}
                      <br />
                      {contactInfo.address.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Office Hours
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg border-2 border-cyan-100 dark:border-cyan-800">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white">
                  <Navigation className="h-5 w-5 mr-2 text-cyan-600" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    {
                      title: "Admission Helpline",
                      subtitle: "For admission queries",
                    },
                    {
                      title: "Academic Section",
                      subtitle: "For academic matters",
                    },
                    {
                      title: "Examination Cell",
                      subtitle: "For exam related queries",
                    },
                    {
                      title: "Placement Cell",
                      subtitle: "For career guidance",
                    },
                  ].map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                          {link.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {link.subtitle}
                        </div>
                      </div>
                      <Phone className="h-4 w-4 text-cyan-600" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400"
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
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                        className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="reason"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Reason for Contact *
                      </Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) =>
                          updateFormData("reason", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400">
                          <SelectValue placeholder="Select reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason} value={reason}>
                              {reason}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        updateFormData("subject", e.target.value)
                      }
                      placeholder="Enter message subject"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        updateFormData("message", e.target.value)
                      }
                      placeholder="Enter your message here..."
                      required
                      rows={6}
                      className="border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 text-lg font-semibold shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12 shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <HelpCircle className="h-6 w-6 mr-3" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="text-left hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Emergency Contact</h3>
              <p className="text-red-100 mb-4">
                For urgent matters outside office hours
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Emergency: 100</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>principal@gpc.edu.in</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
