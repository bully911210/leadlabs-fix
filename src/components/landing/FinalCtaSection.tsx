import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="section-spacing bg-foreground">
      <div className="container-narrow text-center">
        <div className="space-y-8">
          <h2 className="headline-primary text-background">
            Fix the foundation your business depends on.
          </h2>
          
          <p className="text-3xl md:text-4xl font-bold text-primary">
            5-page website. R2999 once-off.
          </p>
          
          <Button 
            variant="cta" 
            size="xl" 
            onClick={onCtaClick}
            className="bg-background text-foreground hover:bg-background/90"
          >
            Fix My Website
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;