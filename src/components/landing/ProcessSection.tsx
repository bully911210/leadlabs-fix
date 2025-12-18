const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit your details",
      description: "Fill out the form with your business information and current website URL.",
    },
    {
      number: "02",
      title: "We review and confirm",
      description: "We assess your needs and confirm the project scope within 24 hours.",
    },
    {
      number: "03",
      title: "Payment processed",
      description: "Once confirmed, payment is processed and work begins immediately.",
    },
    {
      number: "04",
      title: "Website delivered",
      description: "Your new website is live within 7 business days. Ready to work.",
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">How it works</h2>
            <p className="body-large max-w-xl mx-auto">
              Simple. Linear. No surprises.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-border -translate-x-1/2"></div>
                )}
                
                {/* Number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;