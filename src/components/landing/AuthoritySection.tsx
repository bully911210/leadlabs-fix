const AuthoritySection = () => {
  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-narrow">
        <div className="space-y-8 text-center">
          <h2 className="headline-secondary">
            This is a setup problem.
            <br />
            <span className="text-muted-foreground">Not a design problem.</span>
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="body-large">
              Modern websites are infrastructure. They connect your business to the systems that bring in customers.
            </p>
            
            <p className="body-regular">
              Design makes your website look good. Setup makes it visible, measurable, and reachable. Most agencies focus on design because it is easy to sell. Setup is harder to explain and easier to skip.
            </p>
            
            <p className="body-regular">
              That is why most business websites are beautiful but invisible. The foundation was never installed.
            </p>
            
            <p className="body-regular font-medium text-foreground">
              Your past decisions were not wrong. The work was simply incomplete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;