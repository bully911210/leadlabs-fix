import { Check, X } from "lucide-react";

const QualificationSection = () => {
  const forYou = [
    "Business owners who sign payments",
    "Organisations running paid ads",
    "Businesses needing search visibility",
    "Companies ready to move forward",
  ];

  const notForYou = [
    "Personal projects or portfolios",
    "Requests for endless revisions",
    "Design exploration or experimentation",
    "Anyone not ready to commit",
  ];

  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          {/* This is for */}
          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-6">This is for</h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is not for */}
          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-6">This is not for</h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;