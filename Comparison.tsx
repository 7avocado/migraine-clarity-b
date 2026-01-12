const Comparison = () => {
  const differences = [
    "Based on actual data — your patterns, your history, your biology",
    "Structured investigation instead of trial-and-error",
    "AI-assisted pattern recognition with human interpretation",
    "Works alongside medical care, not in place of it",
  ];

  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Why This Is Different
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif mb-4">
              Migraine Detective™
            </h2>
            <p className="text-muted-foreground">
              Designed for conditions where there is no single definitive test.
            </p>
          </div>

          {/* Differences */}
          <ul className="space-y-4">
            {differences.map((item, index) => (
              <li 
                key={index}
                className="flex items-center gap-4 py-4 border-b border-border last:border-0"
              >
                <span className="w-6 h-px bg-accent flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
