import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutMethod = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="container px-6 mb-24">
          <div className="max-w-[700px] mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
              About the Method
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Why migraine is treated differently – and why this method exists
            </p>
          </div>
        </section>

        {/* Context - Framed Problem Statement */}
        <section className="container px-6 mb-28">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-muted/30 border border-border/40 rounded-lg p-8 md:p-10">
              <p className="text-foreground/85 leading-[1.85] mb-6">
                In many areas of medicine, pain is treated as a signal: something to investigate, explain, and contextualize. In migraine care, pain is often treated differently.
              </p>
              
              <p className="text-foreground/85 leading-[1.85] mb-6">
                Patients are frequently told there is no single definitive test for migraine. While that's true, the practical outcome is often that the question of <em>why</em> is not pursued in a structured way. Care can become an endless cycle of symptom suppression - often through escalating medication trials - without a systematic attempt to understand what patterns might be driving the attacks.
              </p>
              
              <p className="text-foreground/85 leading-[1.85] mb-6">
                The <strong>MigraineClarity Method™</strong> was created to address this gap - not by promising a single answer, but by restoring investigation to migraine care.
              </p>
              
              <p className="text-foreground/85 leading-[1.85]">
                At its core, the method treats migraine as a condition that benefits from <em>pattern-based analysis</em> and <em>systematic hypothesis testing</em>, not only medication trials.
              </p>
            </div>
          </div>
        </section>

        {/* Definition - What this is / is not */}
        <section className="container px-6 mb-28">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl md:text-[1.75rem] font-medium mb-12 text-center">
              What this is - and what it is not
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* This is */}
              <div className="bg-card border border-border/50 rounded-lg p-8 h-full">
                <h3 className="text-lg font-medium mb-6 text-foreground">
                  This is:
                </h3>
                <ul className="text-foreground/75 leading-[1.85] space-y-4">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>an educational, non-medical investigative framework</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a structured way to organize and interpret longitudinal health data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a method for generating testable hypotheses to discuss with a clinician</span>
                  </li>
                </ul>
              </div>

              {/* This is not */}
              <div className="bg-muted/20 border border-border/50 rounded-lg p-8 h-full">
                <h3 className="text-lg font-medium mb-6 text-foreground">
                  This is not:
                </h3>
                <ul className="text-foreground/75 leading-[1.85] space-y-4">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>medical diagnosis or treatment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a replacement for medical care</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a promise of cure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a protocol or medication plan</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>a rejection of medication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[120px] mx-auto border-t border-border/60 mb-28" />

        {/* Core Principle - Emphasis Card */}
        <section className="container px-6 mb-28">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-primary/[0.03] border-l-[3px] border-primary/30 rounded-r-lg py-10 px-8 md:px-10">
              <h2 className="text-2xl md:text-[1.75rem] font-medium mb-8">
                Core principle
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-10">
                Migraine pain is treated as <em>meaningful information</em>, not noise to be silenced.
              </p>
              
              <p className="text-foreground/75 leading-[1.85] mb-5">
                The method asks:
              </p>
              
              <ul className="text-foreground/75 leading-[1.85] space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>What patterns repeat across time?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>What systems appear to be involved?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>What hypotheses can be tested - and ruled out?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>What's the smallest next step that reduces uncertainty?</span>
                </li>
              </ul>
              
              <p className="text-foreground/75 leading-[1.85]">
                Progress comes from asking better questions, not simply adding more prescriptions.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[120px] mx-auto border-t border-border/60 mb-28" />

        {/* Evidence - What became clear - Emphasis Card */}
        <section className="container px-6 mb-28">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-primary/[0.03] border-l-[3px] border-primary/30 rounded-r-lg py-10 px-8 md:px-10">
              <h2 className="text-2xl md:text-[1.75rem] font-medium mb-8">
                What became clear through this process
              </h2>
              
              <ul className="text-foreground/80 leading-[1.85] space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>There are relevant tests that can be ordered</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>Individual findings often don't explain migraine in isolation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>But when viewed together, over time, they can form a coherent physiological picture</span>
                </li>
              </ul>
              
              <p className="text-foreground/80 leading-[1.85] mb-5">
                After significant iteration, consistent patterns emerged - and my overall symptom burden dropped substantially.
              </p>
              
              <p className="text-foreground/80 leading-[1.85]">
                That experience became the foundation of the <strong>MigraineClarity Method™</strong>: a repeatable investigative process that helps people learn from their own data instead of remaining stuck in trial-and-error.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[120px] mx-auto border-t border-border/60 mb-28" />

        {/* Origin Story - Narrative Section */}
        <section className="container px-6 mb-28">
          <div className="max-w-[580px] mx-auto">
            <h2 className="text-2xl md:text-[1.75rem] font-medium mb-10">
              Where the method came from
            </h2>
            
            <p className="text-foreground/80 leading-[1.9] mb-7">
              I lived with near-daily migraines for more than a decade. During that time, I tried - and failed - nearly every conventional and alternative approach available to me: dietary eliminations, acupuncture, neurological testing, chiropractic care, Botox, triptans, propranolol, CGRP inhibitors, and extensive supplement protocols. None produced durable relief.
            </p>
            
            <p className="text-foreground/80 leading-[1.9] mb-7">
              For years, I was in pain most days and increasingly dependent on expensive prescription options. Nurtec and Ubrelvy worked better than most, but even then, they mainly dulled the pain - often reducing it to a persistent 6/10 rather than resolving it.
            </p>
            
            <p className="text-foreground/80 leading-[1.9] mb-7">
              What became clear was that treatment focused almost entirely on suppression, not understanding.
            </p>
            
            <p className="text-foreground/80 leading-[1.9]">
              In search of a different approach, I studied migraine methodology with a neurologist trained in a more investigative tradition - one that treats pain as a signal and uses targeted testing to explore underlying drivers. Combined with advances in language models, this made it possible to do something that had previously been impractical: analyze years of fragmented health data as a single, longitudinal case.
            </p>
          </div>
        </section>

        <div className="max-w-[120px] mx-auto border-t border-border/60 mb-28" />

        {/* Method Mechanics - The Missing Piece - 3 Stacked Cards */}
        <section className="container px-6 mb-28">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-2xl md:text-[1.75rem] font-medium mb-14 text-center">
              The missing piece: longitudinal pattern analysis and hypothesis testing
            </h2>
            
            {/* Card 1: Types of data */}
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-9 mb-8">
              <h3 className="text-lg font-medium mb-5 text-foreground">
                Data migraine patients accumulate
              </h3>
              <p className="text-foreground/75 leading-[1.85] mb-5">
                Most people with chronic migraine aren't short on data. They have years of it:
              </p>
              <ul className="text-foreground/75 leading-[1.85] space-y-3">
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>pain logs and symptom notes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>blood panels across multiple clinicians and labs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>imaging reports (MRI/MRA, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>medication trials and side effects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>lifestyle experiments (diet, sleep, supplements)</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Why human attention struggles */}
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-9 mb-8">
              <h3 className="text-lg font-medium mb-5 text-foreground">
                Why traditional care struggles with longitudinal data
              </h3>
              <p className="text-foreground/75 leading-[1.85] mb-5">
                The problem is scale. Human attention doesn't reliably handle a decade of scattered information. Even motivated patients - and busy clinicians - can't realistically review thousands of entries and spot subtle patterns without getting lost.
              </p>
              <p className="text-foreground/75 leading-[1.85]">
                This approach applies even to people who have been told their labs are "normal." Individual findings may not explain migraine on their own - but patterns across time, systems, and context often do.
              </p>
            </div>

            {/* Card 3: How LLMs help */}
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-9">
              <h3 className="text-lg font-medium mb-5 text-foreground">
                How language models make pattern analysis practical
              </h3>
              <p className="text-foreground/75 leading-[1.85] mb-5">
                This is where modern language models changed what's practical.
              </p>
              <p className="text-foreground/75 leading-[1.85] mb-5">
                LLMs make it possible to:
              </p>
              <ul className="text-foreground/75 leading-[1.85] space-y-3">
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>consolidate messy, multi-format records into a single longitudinal case file</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>scan for repeated signals across time rather than isolated results</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>surface anomalies that were previously dismissed as one-offs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground/50 select-none">•</span>
                  <span>turn vague theories into testable hypotheses to discuss with a clinician</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer - Muted Footer Treatment */}
        <section className="container px-6 mt-20">
          <div className="max-w-[700px] mx-auto">
            <div className="pt-12">
              <p className="text-xs text-muted-foreground/50 text-center tracking-wide">
                All medical decisions remain with a licensed clinician.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMethod;
