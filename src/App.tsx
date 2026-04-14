
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import History from "./pages/History";
import EarTreatments from "./pages/services/EarTreatments";
import NoseSinusTreatments from "./pages/services/NoseSinusTreatments";
import ThroatVoiceTreatments from "./pages/services/ThroatVoiceTreatments";
import PaediatricENT from "./pages/services/PaediatricENT";
import SinusSurgery from "./pages/services/SinusSurgery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Fees from "./pages/Fees";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ear" element={<EarTreatments />} />
          <Route path="/services/nose" element={<NoseSinusTreatments />} />
          <Route path="/services/throat" element={<ThroatVoiceTreatments />} />
          <Route path="/services/pediatric" element={<PaediatricENT />} />
          <Route path="/services/sinus-surgery" element={<SinusSurgery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
