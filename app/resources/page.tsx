import Link from "next/link";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Free Breathing Exercise Resources | Just Breathe",
  description: "Download free guides, worksheets, and tools for breathing exercises, anxiety relief, and stress management. Perfect for therapists, educators, and wellness professionals.",
  canonicalUrlRelative: "/resources",
});

export default function ResourcesPage() {
  const resources = [
    {
      title: "4-7-8 Breathing Guide PDF",
      description: "Complete guide to the 4-7-8 breathing technique with step-by-step instructions and benefits.",
      type: "PDF Guide",
      size: "2.3 MB",
      downloadUrl: "#",
      category: "Breathing Techniques"
    },
    {
      title: "Anxiety Relief Worksheet",
      description: "Printable worksheet to track anxiety levels and breathing exercises for therapeutic use.",
      type: "Worksheet",
      size: "1.1 MB", 
      downloadUrl: "#",
      category: "Therapy Tools"
    },
    {
      title: "Breathing Exercise Poster",
      description: "High-resolution poster for classrooms, offices, or wellness centers showing breathing techniques.",
      type: "Poster",
      size: "5.2 MB",
      downloadUrl: "#",
      category: "Educational"
    },
    {
      title: "Meditation Timer Audio",
      description: "Guided breathing audio with gentle bell sounds for 5, 10, and 15-minute sessions.",
      type: "Audio",
      size: "12.4 MB",
      downloadUrl: "#",
      category: "Audio Guides"
    }
  ];

  const categories = ["All", "Breathing Techniques", "Therapy Tools", "Educational", "Audio Guides"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Free Breathing Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Download free tools, guides, and worksheets to help with anxiety relief and stress management. 
          Perfect for therapists, educators, and wellness professionals.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-blue-50 p-6 rounded-lg mb-12">
        <h2 className="text-lg font-semibold mb-3">📋 Usage Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-1">✅ Free to Use</h3>
            <p className="text-gray-600">Personal and professional use allowed</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">🔗 Attribution Required</h3>
            <p className="text-gray-600">Please credit &ldquo;justbreathe.baby&rdquo; when sharing</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">🚫 No Redistribution</h3>
            <p className="text-gray-600">Link to this page instead of hosting files</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                {resource.category}
              </span>
              <span className="text-gray-500 text-xs">{resource.size}</span>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{resource.type}</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Embed Widget Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔗 Embed Our Breathing Widget</h2>
        <p className="text-gray-600 mb-4">
          Add our interactive breathing exercise widget to your website for free. Perfect for wellness sites, 
          therapy practices, and educational platforms.
        </p>
        <Link 
          href="/embed" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Get Embed Code
        </Link>
      </div>

      {/* Professional Use Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">👩‍⚕️ For Healthcare Professionals</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Evidence-based breathing techniques</li>
            <li>• Printable patient handouts</li>
            <li>• Session tracking worksheets</li>
            <li>• Group therapy materials</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">🏫 For Educators</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Classroom-ready posters</li>
            <li>• Student wellness worksheets</li>
            <li>• Mindfulness curriculum support</li>
            <li>• Stress management tools</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Looking for More Resources?</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for new resources, research updates, and breathing technique guides.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}