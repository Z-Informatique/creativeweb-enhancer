import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Realisations from "./pages/Realisations";

// Service Pages
import WebDevelopment from "./pages/services/web-development";
import UiUxDesign from "./pages/services/ui-ux-design";
import Ecommerce from "./pages/services/e-commerce";
import WebApplications from "./pages/services/web-applications";
import MobileApps from "./pages/services/mobile-apps";
import Trainings from "./pages/services/trainings";
import DataManagement from "./pages/services/data-management";
import MaintenanceInformatique from "./pages/services/maintenance-informatique";
import SupportInformatique from "./pages/services/support-informatique";

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
          <Route path="/realisations" element={<Realisations />} />
          
          {/* Service Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/e-commerce" element={<Ecommerce />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/trainings" element={<Trainings />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/maintenance-informatique" element={<MaintenanceInformatique />} />
          <Route path="/services/support-informatique" element={<SupportInformatique />} />
          
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
