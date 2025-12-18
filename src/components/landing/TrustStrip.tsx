import { Building2, Target, Zap } from "lucide-react";

const TrustStrip = () => {
  const items = [
    {
      icon: Building2,
      text: "Built for business owners",
    },
    {
      icon: Target,
      text: "Designed for ads and search",
    },
    {
      icon: Zap,
      text: "Delivered fast",
    },
  ];

  return (
    <section className="py-8 bg-background-muted border-y border-border">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;