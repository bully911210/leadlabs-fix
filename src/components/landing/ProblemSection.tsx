const ProblemSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-8">
          <h2 className="headline-secondary text-center">
            Your website is not broken.
            <br />
            <span className="text-muted-foreground">It is unfinished.</span>
          </h2>

          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="body-large">
              Most business websites were launched without the systems that make them work.
            </p>
            
            <div className="space-y-4 text-left bg-background-muted rounded-xl p-8 border border-border">
              <p className="body-regular">
                <span className="font-semibold text-foreground">No tracking installed.</span> You cannot see what visitors do or where they come from.
              </p>
              <p className="body-regular">
                <span className="font-semibold text-foreground">Not indexed properly.</span> Search engines cannot find your pages.
              </p>
              <p className="body-regular">
                <span className="font-semibold text-foreground">Invisible to AI systems.</span> Tools like ChatGPT and Google's AI Overview cannot recommend you.
              </p>
              <p className="body-regular">
                <span className="font-semibold text-foreground">Paying for ads without clarity.</span> Your money goes somewhere. You cannot tell where.
              </p>
            </div>

            <p className="body-regular text-muted-foreground">
              None of this means your website looks bad. It means your website cannot do its job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;