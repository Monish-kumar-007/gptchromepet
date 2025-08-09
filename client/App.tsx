import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";

// Import all pages
import Index from "./pages/Index";
import Admission from "./pages/Admission";
import Departments from "./pages/Departments";
import Staff from "./pages/Staff";
import Gallery from "./pages/Gallery";
import Committee from "./pages/Committee";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
