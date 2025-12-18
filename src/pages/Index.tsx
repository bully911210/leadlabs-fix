import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SolutionSection from "@/components/landing/SolutionSection";
import OfferSection from "@/components/landing/OfferSection";
import PriceJustificationSection from "@/components/landing/PriceJustificationSection";
import QualificationSection from "@/components/landing/QualificationSection";
import ProcessSection from "@/components/landing/ProcessSection";
import RiskSection from "@/components/landing/RiskSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import FormDialog from "@/components/landing/FormDialog";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleCtaClick = () => {
    setFormOpen(true);
  };

  return (
    <>
      {/* SEO Meta */}
      <title>LeadLabs | Fix Your Business Website Foundation | R2999</title>
      <meta 
        name="description" 
        content="Your business website looks fine but fails completely. LeadLabs rebuilds the foundation with tracking, indexing, and AI visibility. 5-page website. R2999 once-off." 
      />

      <main className="min-h-screen bg-background">
        <HeroSection onCtaClick={handleCtaClick} />
        <TrustStrip />
        <ProblemSection />
        <AuthoritySection />
        <SolutionSection />
        <OfferSection onCtaClick={handleCtaClick} />
        <PriceJustificationSection />
        <QualificationSection />
        <ProcessSection />
        <RiskSection />
        <FinalCtaSection onCtaClick={handleCtaClick} />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container-narrow text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeadLabs. All rights reserved.
          </p>
        </div>
      </footer>

      <FormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default Index;