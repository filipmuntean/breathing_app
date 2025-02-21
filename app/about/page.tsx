import Breathe from "@/components/Breathe";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

const BreathePage = () => {
  // You can add any page-level logic here if needed,
  // but for now, we simply render the Breathe component.
  return (
    <>
    <Hero />
    <Problem />
    <FeaturesAccordion />
    </>
  );
};

export default BreathePage;
