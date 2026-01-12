import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <section className="py-16 md:py-20">
          <div className="container px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A structured, non-medical investigative process for understanding migraine patterns - alongside medical care.
            </p>
          </div>
        </section>

        {/* Section 1 — The MigraineClarity Method™ */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Orientation
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                The MigraineClarity Method™
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border/60 rounded-sm p-8 shadow-sm">
                <span className="text-sm font-medium text-muted-foreground/50 font-mono block mb-4">01</span>
                <h3 className="text-xl font-serif text-foreground mb-3">Gather Your Clues™</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build a longitudinal case file from your history, symptoms, and existing clinical data.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-sm p-8 shadow-sm">
                <span className="text-sm font-medium text-muted-foreground/50 font-mono block mb-4">02</span>
                <h3 className="text-xl font-serif text-foreground mb-3">Migraine Detective™</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyze patterns across time and generate a short list of testable hypotheses.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-sm p-8 shadow-sm">
                <span className="text-sm font-medium text-muted-foreground/50 font-mono block mb-4">03</span>
                <h3 className="text-xl font-serif text-foreground mb-3">Test Your Hypotheses™</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test hypotheses one at a time, track outcomes, and learn from each result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — What an Investigation Looks Like */}
        <section className="py-16 md:py-24">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                What an Investigation Looks Like
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {/* Card Group 1 — Overview */}
              <div className="bg-card border border-border/60 rounded-sm p-8 md:p-10 shadow-sm">
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
                  Sample Report of Findings (Illustrative Example)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This example shows how the MigraineClarity Method™ is applied in practice. It is shared for educational purposes only and does not represent medical advice, diagnosis, or treatment.
                </p>
              </div>

              {/* Card Group 2 — Step 1: Gather Your Clues™ */}
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                  Step 1: Gather Your Clues™
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Case Context</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      10+ years of migraines with extensive prior testing, treatments, and lifestyle changes.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Data Collected</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Multi-year blood work, MRI/MRA imaging, medication and supplement history, symptom timing, diet, hydration, sleep, and hormonal context.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Key Insight</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The goal was not more data, but reviewing existing data together and over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Group 3 — Step 2: Migraine Detective™ */}
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                  Step 2: Migraine Detective™
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Fluid & Vascular Pattern</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A persistently altered BUN-to-creatinine ratio appeared across multiple years. While initially dismissed as situational (e.g., dehydration), its consistency over time suggested a recurring signal rather than a one-time issue.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Histamine-Related Pattern</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A histamine-related pattern was considered despite the absence of classic allergy symptoms, informed by dietary exposure and genetic context. Follow-up 24-hour urine histamine testing, requested through a licensed clinician, returned values ~30% above the laboratory reference range.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Hormonal Modulation</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Symptom timing shifted with hormonal phases and changes such as HRT, suggesting hormones acted as modulators rather than a single cause.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Drainage & Sleep Factors</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Review of prior imaging showed MRI and MRA results reported as within normal limits, but no MRV had been performed. Additional imaging filled this gap and revealed venous flow irregularities associated with positional and morning symptoms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Group 4 — Step 3: Test Your Hypotheses™ */}
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                  Step 3: Test Your Hypotheses™
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">A. Hypotheses Explored</h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Histamine-related pathway
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Fluid & vascular regulation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Drainage & sleep-related factors
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Hormonal modulation across cycle phases
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">B. Data Used to Evaluate Each Hypothesis (with a clinician)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        24-hour urine histamine testing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Renin and aldosterone levels
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        MRV (magnetic resonance venography)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        Estradiol levels measured in follicular and luteal phases
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">C. Guiding Principle</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Hypotheses were explored one at a time. Each result informed the next decision, and all changes were treated as temporary experiments, not permanent solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Group 5 — Outcome */}
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Outcome
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">What Changed</h4>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      Migraines became interpretable rather than random. Patterns replaced guesswork, and testing became intentional.
                    </p>
                  </div>

                  <div className="bg-card border border-border/60 rounded-sm p-6 shadow-sm">
                    <h4 className="text-lg font-serif text-foreground mb-3">Why This Matters</h4>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      When there is no single definitive test, progress comes from structured investigation and learning from each experiment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-muted-foreground/70 text-center pt-8">
                This example is illustrative and educational. Individual experiences vary, and all medical decisions are made with a licensed clinician.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="text-center">
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                See how this applies to your data →
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://calendly.com/migrainedetective">
                  Schedule a Conversation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
