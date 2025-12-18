const StatsSection = () => {
  const stats = [
    {
      value: "247+",
      label: "Websites Delivered",
      description: "For South African businesses",
    },
    {
      value: "7",
      label: "Days Average",
      description: "From start to live",
    },
    {
      value: "4.9",
      label: "Google Rating",
      description: "From verified clients",
    },
    {
      value: "R2999",
      label: "Fixed Price",
      description: "No hidden costs",
    },
  ];

  return (
    <section className="py-16 bg-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-background mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-background/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;