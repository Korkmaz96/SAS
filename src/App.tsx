import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import WebDesignPage from "./pages/services/WebDesign";
import SoftwareSolutionsPage from "./pages/services/SoftwareSolutions";
import MaintenancePage from "./pages/services/Maintenance";
import IndustriesPage from "./pages/Industries";
import ProcessPage from "./pages/Process";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-engineering" element={<WebDesignPage />} />
            <Route path="/services/software-solutions" element={<SoftwareSolutionsPage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
