export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* <h2 className="text-4xl font-bold mb-4 text-left">About This Breathing Timer</h2> */}
          <p className="text-lg mb-6 text-left">
            I created this breathing timer because I often have anxious moments, and I wanted a simple, plug-and-play tool 
            to help me calm down. Nothing complicated—just an easy way to guide my breathing when I needed it.
          </p>
          <p className="text-lg mb-6 text-left">
            The default setting is the <strong>4-4-4</strong> method (inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds), 
            but you can customize it to fit what works best for you. Just breathe and let the timer do the rest.
          </p>
          <p className="text-lg text-left">
            If it helps even one person feel a little more in control during stressful moments, then it was worth making.
          </p>
        </div>
      </section>
    );
}
