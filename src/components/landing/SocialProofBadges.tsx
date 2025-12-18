import { Shield, Award, Clock, CheckCircle2 } from "lucide-react";

const SocialProofBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "SSL Secured",
    },
    {
      icon: Award,
      text: "Google Partner",
    },
    {
      icon: Clock,
      text: "24hr Response",
    },
    {
      icon: CheckCircle2,
      text: "Verified Business",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-background-muted rounded-full border border-border"
        >
          <badge.icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-foreground">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialProofBadges;