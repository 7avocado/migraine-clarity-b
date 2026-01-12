import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Brand label */}
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Migraine Detective™
          </p>

          {/* Headline - elegant serif */}
          <h1 className="text-display-sm md:text-display font-serif mb-6 animate-fade-in-up">
            Stop Guessing. Start Testing.
          </h1>

          {/* Subheadline - softer, lighter */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8 animate-fade-in-delay-1">
            A structured migraine investigation method that helps you gather clues, 
            generate working hypotheses, and test them systematically — alongside medical care.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-delay-2">
            <Button variant="cta" size="lg" asChild>
              <a href="https://calendly.com/migrainedetective">
                Schedule a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
