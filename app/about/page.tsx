import FeaturesAccordion from "@/components/FeaturesAccordion";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Link from "next/link";

const About = () => {
  // You can add any page-level logic here if needed,
  // but for now, we simply render the Breathe component.
  
  return (
     <div className="p-5 bg-[#fefae0] text-[#283618]">
      <main className="max-w-xl mx-auto ">
     
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
  
          <h2 className="text-4xl font-bold mb-6 text-left">About Just Breathe</h2>

          <p className="text-lg mb-6 text-left">
            I created this breathing timer because I often have anxious moments, and I wanted a simple, plug-and-play tool 
            to help me calm down. Nothing complicated—just an easy way to guide my breathing when I needed it.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-left">What is this app?</h3>
          <p className="text-lg mb-6 text-left">
            This is a simple breathing timer designed to help people regulate their breathing and reduce stress. 
            The default setting follows the <strong>4-4-4</strong> method (inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds), 
            but you can customize it to fit your needs.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-left">How to use it?</h3>
          <p className="text-lg mb-6 text-left">
            - Select your preferred breathing pattern.<br/>
            - Press <strong>Start</strong> to begin the guided breathing session.<br/>
            - Stop at any point when you feel it was enough.<br/>
            {/* - Follow the visual and audio cues to sync your breath.<br/> */}
            - Adjust the settings anytime for a personalized experience.<br/>
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-left">Why did I make this?</h3>
          <p className="text-lg mb-6 text-left">
            I personally struggle with anxiety and needed a quick and accessible way to regulate my breathing. 
            I wanted something simple, effective, and distraction-free, so I built this breathing timer for myself and others 
            who might find it helpful.
          </p>
        
      </main>
      </div>
  );
};

export default About;
