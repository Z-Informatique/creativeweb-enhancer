
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import WebDevelopment from "./pages/services/web-development";
import UiUxDesign from "./pages/services/ui-ux-design";
import Ecommerce from "./pages/services/e-commerce";
import WebApplications from "./pages/services/web-applications";
import Trainings from "./pages/services/trainings";

// Legal Pages
import MentionsLegales from "./pages/legal/mentions-legales";
import Confidentialite from "./pages/legal/confidentialite";
import ConditionsUtilisation from "./pages/legal/conditions-utilisation";
import Cookies from "./pages/legal/cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/e-commerce" element={<Ecommerce />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/services/trainings" element={<Trainings />} />
          
          {/* Legal Routes */}
          <Route path="/legal/mentions-legales" element={<MentionsLegales />} />
          <Route path="/legal/confidentialite" element={<Confidentialite />} />
          <Route path="/legal/conditions-utilisation" element={<ConditionsUtilisation />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
