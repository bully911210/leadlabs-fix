import { Shield, Key, Repeat } from "lucide-react";

const RiskSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Once-off build",
      description: "Pay once. No subscriptions. No hidden fees. No ongoing commitments.",
    },
    {
      icon: Key,
      title: "You own everything",
      description: "Full ownership of your website. Transfer it anywhere, anytime.",
    },
    {
      icon: Repeat,
      title: "Optional future services",
      description: "Need ongoing help later? Available but never required.",
    },
  ];

  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">No risk. No lock-in.</h2>
            <p className="body-large max-w-xl mx-auto">
              We build it. You own it. That simple.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;