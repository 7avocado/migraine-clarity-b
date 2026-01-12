import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-heading-sm md:text-heading font-serif mb-6">
            Stop guessing. Start testing — with a system.
          </h2>
          
          <Button variant="cta" size="lg" asChild>
            <a href="https://calendly.com/migrainedetective">
              Schedule a Conversation
            </a>
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            You'll leave with clearer direction on what's worth testing next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
