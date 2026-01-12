import { Circle } from "lucide-react";

const ProblemRecognition = () => {
  const painPoints = [
    "You've seen doctors, tried medications, supplements, diets, and lifestyle changes",
    "You've tracked triggers but don't know what to do with the data",
    "You're doing your best — but guessing is exhausting",
  ];

  return (
    <section className="py-28 md:py-36">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          {/* Headline */}
          <h2 className="text-heading-sm md:text-heading font-serif text-center mb-12">
            You've tried everything. The missing piece isn't effort — it's structure.
          </h2>

          {/* Pain points */}
          <ul className="space-y-5 mb-12">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <Circle className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 fill-muted-foreground/40 text-muted-foreground/40" />
                <span className="text-muted-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {/* Closing line */}
          <p className="text-center text-foreground/80">
            Migraine Detective™ replaces guesswork with a clear investigative process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemRecognition;
