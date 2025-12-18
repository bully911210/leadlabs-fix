import { X, Check, ArrowRight } from "lucide-react";

const BeforeAfterSection = () => {
  const beforeItems = [
    "No tracking installed",
    "Not indexed by Google",
    "Invisible to AI assistants",
    "No conversion measurement",
    "Slow page load times",
  ];

  const afterItems = [
    "Meta & Google Pixels active",
    "Fully indexed and discoverable",
    "AI Overview optimised",
    "Every click tracked",
    "Sub-3 second load times",
  ];

  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">
              The difference is measurable
            </h2>
            <p className="body-large max-w-xl mx-auto">
              See what changes when your website foundation is properly built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Before */}
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-destructive">Before</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">Typical Business Website</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 bg-card rounded-xl border-2 border-primary relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">After LeadLabs</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">Your Rebuilt Website</h3>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Arrow connector for desktop */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-4 px-6 py-3 bg-card rounded-full border border-border">
              <span className="text-sm text-muted-foreground">Transformation in</span>
              <span className="text-lg font-bold text-primary">7 Days</span>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;