import { Construction, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-yellow-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Construction className="h-12 w-12 text-yellow-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Continue Building
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            This page is ready for content! Continue prompting to add the specific content and functionality for this section.
          </p>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <ArrowRight className="w-4 h-4 mr-2" />
            Let's Build This Page
          </Button>
        </div>
      </div>
    </div>
  );
}
