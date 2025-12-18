import { useState } from "react";
import Header from "@/components/landing/Header";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import TrustedBySection from "@/components/landing/TrustedBySection";
import ProblemSection from "@/components/landing/ProblemSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SolutionSection from "@/components/landing/SolutionSection";
import ResultsProof from "@/components/landing/ResultsProof";
import GoogleReviews from "@/components/landing/GoogleReviews";
import VideoTestimonial from "@/components/landing/VideoTestimonial";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PriceJustificationSection from "@/components/landing/PriceJustificationSection";
import QualificationSection from "@/components/landing/QualificationSection";
import ProcessSection from "@/components/landing/ProcessSection";
import RiskSection from "@/components/landing/RiskSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import StatsSection from "@/components/landing/StatsSection";
import SocialProofBadges from "@/components/landing/SocialProofBadges";
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

      <Header onCtaClick={handleCtaClick} />
      <UrgencyBanner />
      
      <main className="min-h-screen bg-background">
        <HeroSection onCtaClick={handleCtaClick} />
        <TrustStrip />
        <TrustedBySection />
        <StatsSection />
        <ProblemSection />
        <BeforeAfterSection />
        <VideoTestimonial />
        <AuthoritySection />
        <SolutionSection />
        <ResultsProof />
        <GoogleReviews />
        <OfferSection onCtaClick={handleCtaClick} />
        <GuaranteeSection />
        <PriceJustificationSection />
        <QualificationSection />
        <ProcessSection />
        <RiskSection />
        <FAQSection />
        <FinalCtaSection onCtaClick={handleCtaClick} />
        <SocialProofBadges />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-foreground border-t border-border">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">LL</span>
              </div>
              <span className="text-xl font-bold text-background">LeadLabs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>© {new Date().getFullYear()} LeadLabs</span>
              <a href="#" className="hover:text-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-background transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <FormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default Index;