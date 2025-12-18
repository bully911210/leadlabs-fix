const TrustedBySection = () => {
  // Industries served rather than specific logos
  const industries = [
    "Law Firms",
    "Medical Practices",
    "Construction",
    "Financial Services",
    "Retail",
    "Hospitality",
    "Professional Services",
    "Manufacturing",
  ];

  return (
    <section className="py-12 bg-background-muted border-y border-border">
      <div className="container-wide">
        <div className="text-center space-y-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by business owners across South Africa
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="text-foreground/60 font-medium text-sm hover:text-foreground transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["DM", "SV", "TN", "MF", "JP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-semibold text-primary">{initials}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+240 business owners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;