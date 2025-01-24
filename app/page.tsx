import { ArrowRight, Users, Mail, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Simple Way to Keep <br className="hidden md:block" />
              Service Clients Happy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stop juggling multiple tools. Start delivering exceptional client experiences with the only CRM built
              specifically for service businesses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-16">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-32 bottom-0 z-10" />
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="ServiceCRM Dashboard"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Keep Clients Happy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitor Relationships</h3>
              <p className="text-gray-600">
                Know exactly how happy each client is with automatic relationship health tracking and early warning
                alerts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Never Miss Follow-ups</h3>
              <p className="text-gray-600">
                Keep every client happy with automatic follow-up reminders and communication tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Service Quality</h3>
              <p className="text-gray-600">
                Deliver consistently great service by tracking project milestones and client satisfaction in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your Clients Happier?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of service businesses already using ServiceCRM to deliver exceptional experiences.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ServiceCRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

