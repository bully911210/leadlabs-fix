import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="headline-primary">
                Fix the one thing quietly costing your business money.
              </h1>
              <p className="body-large">
                Most business websites look fine and fail completely.
                <br />
                We rebuild the foundation so traffic, search, and AI can actually work.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={onCtaClick}
                className="w-full sm:w-auto"
              >
                Fix My Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="price-display">
                5-page website. R2999 once-off.
              </p>
            </div>
          </div>

          {/* Visual - System Diagram */}
          <div className="relative">
            <div className="bg-background-muted rounded-xl p-8 border border-border">
              {/* Wireframe Visual */}
              <div className="space-y-4">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-border-strong"></div>
                    <div className="w-3 h-3 rounded-full bg-border-strong"></div>
                    <div className="w-3 h-3 rounded-full bg-border-strong"></div>
                  </div>
                  <div className="flex-1 h-6 bg-background rounded-md border border-border mx-4"></div>
                </div>
                
                {/* Page Structure */}
                <div className="space-y-3">
                  {/* Header */}
                  <div className="h-12 bg-background rounded border border-border flex items-center px-4">
                    <div className="w-24 h-4 bg-primary/20 rounded"></div>
                    <div className="ml-auto flex gap-3">
                      <div className="w-12 h-3 bg-border-strong rounded"></div>
                      <div className="w-12 h-3 bg-border-strong rounded"></div>
                      <div className="w-12 h-3 bg-border-strong rounded"></div>
                    </div>
                  </div>
                  
                  {/* Hero */}
                  <div className="h-32 bg-background rounded border border-border p-4 flex flex-col justify-center">
                    <div className="w-3/4 h-4 bg-foreground/20 rounded mb-2"></div>
                    <div className="w-1/2 h-3 bg-muted-foreground/20 rounded mb-4"></div>
                    <div className="w-28 h-8 bg-primary rounded"></div>
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 bg-background rounded border border-border p-3">
                        <div className="w-8 h-8 bg-primary/20 rounded mb-2"></div>
                        <div className="w-full h-2 bg-border-strong rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">Tracking Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">Search Indexed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">AI Readable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;