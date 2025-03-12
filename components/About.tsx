export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl">
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
        </div>
      </section>
    );
}
