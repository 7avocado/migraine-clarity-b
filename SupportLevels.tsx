import { Button } from "@/components/ui/button";

const SupportLevels = () => {
  const options = [
    {
      title: "Already have your data?",
      subtitle: "Request a Report of Findings",
      description: "Submit your migraine journals and any prior test results (such as blood work or imaging). We organize the information, identify patterns, and summarize key findings in a clear report.",
    },
    {
      title: "Don't know where to start?",
      subtitle: "Schedule a Consultation",
      description: "We provide a structured list of basic and advanced tests to discuss with your doctor, then organize and review the resulting data using AI-assisted pattern recognition and human synthesis to deliver a Report of Findings.",
    },
  ];

  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Two Pathways
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif">
              Choose Your Starting Point
            </h2>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {options.map((option, index) => (
              <div 
                key={index}
                className="space-y-4"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{option.title}</p>
                <h3 className="text-lg font-serif font-medium">{option.subtitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-border">
            <Button variant="cta" size="lg" asChild>
              <a href="https://calendly.com/migrainedetective">
                Schedule a Conversation
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Start learning from your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportLevels;
