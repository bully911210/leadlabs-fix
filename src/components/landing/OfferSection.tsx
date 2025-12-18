import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FileText, BarChart, Search, Smartphone, Zap, Clock } from "lucide-react";

interface OfferSectionProps {
  onCtaClick: () => void;
}

const OfferSection = ({ onCtaClick }: OfferSectionProps) => {
  const pages = [
    "Home page",
    "About page",
    "Services page",
    "Contact page",
    "One additional page of your choice",
  ];

  const technicalInclusions = [
    { icon: BarChart, text: "Meta Pixel installed" },
    { icon: BarChart, text: "Google Pixel installed" },
    { icon: Search, text: "Search-ready structure" },
    { icon: Search, text: "Google Discovery enabled" },
    { icon: Zap, text: "AI Overview readable" },
    { icon: Smartphone, text: "Mobile responsive" },
    { icon: Zap, text: "Fast load optimized" },
  ];

  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-narrow">
        <div className="bg-card rounded-2xl border-2 border-primary shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-8 py-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              5-Page Custom Website
            </h2>
            <p className="text-5xl md:text-6xl font-bold text-primary-foreground mt-2">
              R2999
            </p>
            <p className="text-primary-foreground/80 mt-1">once-off</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Pages */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Your 5 Pages
              </h3>
              <ul className="space-y-3">
                {pages.map((page, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{page}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Technical Inclusions</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {technicalInclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hosting */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">3 Months Hosting Included</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    After 3 months, hosting continues at R199/month. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* Revisions */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Up to 3 Revisions</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Revisions cover layout adjustments and text changes within the agreed scope.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full"
                onClick={onCtaClick}
              >
                Fix My Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;