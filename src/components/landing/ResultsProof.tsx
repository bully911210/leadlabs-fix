import { TrendingUp, Eye, MousePointer, Search } from "lucide-react";

const ResultsProof = () => {
  const results = [
    {
      icon: Eye,
      metric: "312%",
      label: "More visibility",
      description: "Average increase in search impressions within 30 days",
    },
    {
      icon: MousePointer,
      metric: "47%",
      label: "More clicks",
      description: "Average increase in website traffic from search",
    },
    {
      icon: Search,
      metric: "89%",
      label: "Indexed pages",
      description: "Of our clients' pages are indexed vs 34% industry average",
    },
    {
      icon: TrendingUp,
      metric: "2.1x",
      label: "Lead increase",
      description: "Average improvement in trackable lead generation",
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Measured Results
            </p>
            <h2 className="headline-secondary">
              Numbers don't lie
            </h2>
            <p className="body-large max-w-xl mx-auto">
              These are average results from our last 50 website rebuilds, measured 30 days after launch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background-muted rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-1">{result.metric}</p>
                <p className="font-semibold text-foreground mb-2">{result.label}</p>
                <p className="text-xs text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Results vary by industry and existing website state. These figures represent averages across all client projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsProof;