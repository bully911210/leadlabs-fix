import { Shield, Clock, RefreshCw, BadgeCheck } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "7-Day Delivery Guarantee",
      description: "Your website goes live within 7 business days or we extend your free hosting by an additional month.",
    },
    {
      icon: RefreshCw,
      title: "Satisfaction Guarantee",
      description: "Not happy with the result? We'll revise until you are. Up to 3 rounds of changes included.",
    },
    {
      icon: BadgeCheck,
      title: "Setup Verification",
      description: "We provide proof that tracking, indexing, and AI readability are properly configured.",
    },
    {
      icon: Shield,
      title: "No Lock-In",
      description: "You own your website completely. Transfer it, change hosts, or cancel anytime after the build.",
    },
  ];

  return (
    <section className="section-spacing bg-primary/5">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Guarantees</span>
            </div>
            <h2 className="headline-secondary">
              Your investment is protected
            </h2>
            <p className="body-large max-w-xl mx-auto">
              We stand behind every website we build. These are not marketing promises. They are commitments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <guarantee.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;