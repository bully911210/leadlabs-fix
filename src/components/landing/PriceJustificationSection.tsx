import { Cog, Target, MessageSquareOff, Palette } from "lucide-react";

const PriceJustificationSection = () => {
  const reasons = [
    {
      icon: Cog,
      title: "Systemised delivery",
      description: "We built a process. Every website follows the same proven structure.",
    },
    {
      icon: Target,
      title: "Narrow scope",
      description: "We do one thing well. Foundation and setup. Nothing else.",
    },
    {
      icon: MessageSquareOff,
      title: "No meetings",
      description: "No strategy workshops. No endless calls. You provide input. We build.",
    },
    {
      icon: Palette,
      title: "No creative debates",
      description: "Clean, professional templates. Not custom art projects.",
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">
              Why this does not cost more
            </h2>
            <p className="body-large max-w-xl mx-auto">
              We removed everything that inflates agency pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="p-6 bg-background-muted rounded-xl border border-border"
              >
                <reason.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground body-regular">
            The price reflects operational efficiency. Not reduced quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceJustificationSection;