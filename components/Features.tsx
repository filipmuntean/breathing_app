import React from "react";

const features = [
  {
    title: "Scientifically Proven Techniques",
    description: "Evidence-based breathing exercises including 4-7-8, box breathing, and diaphragmatic breathing to effectively reduce anxiety and stress.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    description: "Monitor your breathing practice with detailed weekly progress charts and session history to stay motivated and build healthy habits.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Customizable Sessions",
    description: "Adjust breathing patterns, timing, and visual effects to match your preferences and comfort level for a personalized experience.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Clean & Minimal Design",
    description: "No distractions, no clutter. Just a beautiful, calming interface that helps you focus on what matters - your breathing.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Embeddable Widget",
    description: "Add our breathing exercises to your website, app, or workspace to help others manage stress and anxiety wherever they are.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Free & Accessible",
    description: "No subscriptions, no ads, no barriers. Mental health tools should be accessible to everyone, everywhere, at any time.",
    icon: (
      <svg className="w-8 h-8 text-[#bc6c25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-[#fefae0] text-[#283618]" id="features">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-[#283618]">
              Everything you need to breathe better
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#283618]/80">
            Simple, effective tools designed by an AI student to help you manage anxiety and stress through the power of controlled breathing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#dda15e]/20 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#283618]">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-[#283618]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#283618] mb-2">
                Ready to start your breathing journey?
              </h3>
              <p className="text-[#283618]/80 mb-4">
                Try our breathing exercises now - no signup required
              </p>
              <a 
                href="#breathe" 
                className="btn bg-[#dda15e] text-[#283618] hover:bg-[#c98f4f] hover:text-[#606c38]"
              >
                Start Breathing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;