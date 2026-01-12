import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemRecognition from "@/components/ProblemRecognition";
import CoreMethod from "@/components/CoreMethod";
import Comparison from "@/components/Comparison";
import SupportLevels from "@/components/SupportLevels";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemRecognition />
        <CoreMethod />
        <Comparison />
        <SupportLevels />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
