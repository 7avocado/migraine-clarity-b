import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this medical care?",
      answer: "No. Migraine Detective™ is an educational, non-medical program. We help you organize information, identify patterns, and generate working hypotheses. We do not provide medical diagnosis, treatment, or medication guidance. The program is designed to work alongside medical care, not replace it."
    },
    {
      question: "Do you diagnose root causes of migraine?",
      answer: "No. We don't diagnose medical root causes. Instead, we help identify plausible underlying driver patterns based on your data. These are framed as working hypotheses, not medical conclusions, and are used to guide structured exploration and discussion with your clinician."
    },
    {
      question: "Will this work for chronic migraine?",
      answer: "We don't make guarantees. Migraine Detective™ is a process, not a promise. The value is in replacing guesswork with a structured investigative method that helps you learn from your data over time."
    },
    {
      question: "Do you tell me what medications or supplements to take?",
      answer: "We don't prescribe medications or supplements. However, we do educate on options commonly discussed in migraine research and patient experience, including how and why people explore them."
    },
    {
      question: "Do you order or interpret medical tests?",
      answer: "No. We do not order, perform, or interpret medical tests. When helpful, we provide educational examples of clinical data that may be useful to discuss with your clinician. All testing decisions, orders, and interpretations are handled by licensed healthcare providers."
    },
    {
      question: "What kinds of tests might be discussed?",
      answer: "This varies by individual. Examples may include previously completed blood work, imaging reports, or other clinical records. Any testing is discussed and decided on with your clinician. We do not recommend or require specific tests."
    },
    {
      question: "What happens during the conversation?",
      answer: "The conversation is exploratory and low-pressure. We review your situation at a high level, explain how the MigraineClarity Method™ works, and determine whether Migraine Detective™ is a good fit. There is no obligation to continue."
    },
    {
      question: "Is this an app or tracking program?",
      answer: "No. Migraine Detective™ is not a tracking app. Tracking and journals are used selectively as part of a structured investigative process, not as an end in itself."
    },
    {
      question: "How long does the process take?",
      answer: "Most people engage with the method over several months. Because the system is iterative, insights compound over time as new information is added and hypotheses are tested."
    },
    {
      question: "Who is this best suited for?",
      answer: "Migraine Detective™ is best suited for people who have tried multiple approaches without clear answers, want structure instead of generic protocols, are comfortable with an investigative, data-driven process, and are working alongside medical care."
    },
    {
      question: "Is AI making medical decisions about me?",
      answer: "No. AI is used to assist with pattern recognition and organization, not diagnosis or medical decision-making. All outputs are educational and designed to support human understanding and clinician conversations."
    },
    {
      question: "How is this different from generic migraine advice?",
      answer: "Most advice is one-size-fits-all. Migraine Detective™ is pattern-driven. We identify which underlying driver hypotheses are most relevant for you, test one area at a time, and learn from your actual response before moving on."
    },
  ];

  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Questions
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif">
              Frequently Asked
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border py-1"
              >
                <AccordionTrigger className="text-left text-foreground/90 hover:text-foreground font-normal py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom note */}
          <div className="text-center mt-14 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Structured investigation - not more generic advice.
            </p>
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

export default FAQ;
