"use client";

import EmbeddableBreathingWidget from "@/components/EmbeddableBreathingWidget";


export default function EmbedPage() {
  const embedCode = `<iframe 
  src="https://justbreathe.baby/widget" 
  width="300" 
  height="400" 
  frameborder="0" 
  title="Breathing Exercise Widget">
</iframe>`;


  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Embed Our Breathing Widget</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help your website visitors reduce anxiety and stress with our free, embeddable breathing exercise widget.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Widget Preview */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Widget Preview</h2>
          <div className="flex justify-center">
            <EmbeddableBreathingWidget />
          </div>
        </div>

        {/* Embed Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">How to Embed</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Copy the embed code</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{embedCode}</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText(embedCode)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Copy Code
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. Paste into your website</h3>
              <p className="text-gray-600">
                Paste the code anywhere in your HTML where you want the breathing widget to appear.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Customization Options</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Adjust width and height in the iframe</li>
                <li>• Add ?branding=false to hide branding</li>
                <li>• Fully responsive design</li>
                <li>• No JavaScript required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Add This Widget?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Reduce User Stress</h3>
            <p className="text-sm text-gray-600">Help visitors manage anxiety with proven breathing techniques</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Increase Engagement</h3>
            <p className="text-sm text-gray-600">Interactive wellness tools keep users on your site longer</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Easy Integration</h3>
            <p className="text-sm text-gray-600">Simple iframe embed with no coding required</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join hundreds of websites helping their users breathe better and reduce anxiety.
        </p>
        <a 
          href="/breathe" 
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try the Full Experience
        </a>
      </div>
    </div>
  );
}