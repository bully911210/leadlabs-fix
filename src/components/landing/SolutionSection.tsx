import { ArrowRight, Globe, BarChart3, Search, Users } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">
              We fix the foundation.
              <br />
              <span className="text-muted-foreground">Completely.</span>
            </h2>
            
            <p className="body-large max-w-xl mx-auto">
              LeadLabs installs structure, tracking, and indexing. Not branding. Not content strategy. Not marketing campaigns.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="bg-background-muted rounded-xl p-8 border border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Traffic Enters</span>
                <span className="text-xs text-muted-foreground mt-1">Ads, search, referrals</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-border-strong flex-shrink-0" />
              <div className="md:hidden w-6 h-6 border-l-2 border-border-strong"></div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Website</span>
                <span className="text-xs text-muted-foreground mt-1">Structured properly</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-border-strong flex-shrink-0" />
              <div className="md:hidden w-6 h-6 border-l-2 border-border-strong"></div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <BarChart3 className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Tracking</span>
                <span className="text-xs text-muted-foreground mt-1">Every action measured</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-border-strong flex-shrink-0" />
              <div className="md:hidden w-6 h-6 border-l-2 border-border-strong"></div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Visibility</span>
                <span className="text-xs text-muted-foreground mt-1">Search and AI indexed</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-primary flex-shrink-0" />
              <div className="md:hidden w-6 h-6 border-l-2 border-primary"></div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-bold">Leads</span>
                </div>
                <span className="text-sm font-semibold text-foreground">Conversion</span>
                <span className="text-xs text-muted-foreground mt-1">Real business results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;