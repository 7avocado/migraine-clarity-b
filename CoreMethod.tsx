const CoreMethod = () => {
  const steps = [
    {
      number: "01",
      title: "Gather Your Clues™",
      description: "Build your complete migraine case file — symptoms, timeline, whole-body patterns, what you've tried, and key life variables.",
      output: "Your Case File",
    },
    {
      number: "02",
      title: "Migraine Detective™",
      description: "Analyze your case file using AI-assisted pattern recognition to surface patterns, explore plausible pathways, and generate a prioritized Hypothesis Map™.",
      output: "Your Hypothesis Map™",
    },
    {
      number: "03",
      title: "Test Your Hypotheses™",
      description: "Run structured wellness experiments one at a time, track outcomes, and feed results back into Migraine Detective™.",
      output: "Updated clarity with each cycle",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            The Method
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            The MigraineClarity Method™
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card border border-border/60 rounded-sm p-8 md:p-10 shadow-sm"
            >
              {/* Step number */}
              <span className="text-sm font-medium text-muted-foreground/50 font-mono block mb-6">
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>
              
              {/* Output */}
              <p className="text-sm">
                <span className="text-muted-foreground/50">Output:</span>{" "}
                <span className="text-muted-foreground">{step.output}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreMethod;
