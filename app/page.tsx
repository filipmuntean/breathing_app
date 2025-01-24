// app/page.tsx

import { ArrowRight, Users, Mail, BarChart2, CheckCircle, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
 return (
   <div className="min-h-screen bg-white">
     {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-between items-center h-16">
           <div className="text-2xl font-bold text-blue-600">ServiceCRM</div>
           <div className="hidden md:flex space-x-6">
             <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
             <a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</a>
             <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
           </div>
           <Button className="bg-blue-600 text-white hover:bg-blue-700">
             Start Free Trial
           </Button>
         </div>
       </div>
     </nav>

     {/* Hero Section */}
     <section className="relative pt-32 pb-32 bg-gradient-to-b from-blue-50 to-white">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center">
           <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
             Trusted by 500+ Service Businesses
           </div>
           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
             Keep Your Clients Happy, <br className="hidden md:block" />
             Without the Complexity
           </h1>
           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             The first relationship management platform built specifically for service businesses. 
             Monitor client happiness, track service quality, and strengthen relationships - all in one place.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
             <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg h-12 px-8">
               Start Free Trial
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
             <Button variant="outline" className="text-lg h-12 px-8">
               Watch Demo
             </Button>
           </div>
           <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
             <div className="flex items-center">
               <Star className="h-5 w-5 mr-2" />
               <span>40% Better Client Retention</span>
             </div>
             <div className="flex items-center">
               <Clock className="h-5 w-5 mr-2" />
               <span>15 Hours Saved Weekly</span>
             </div>
             <div className="flex items-center">
               <Users className="h-5 w-5 mr-2" />
               <span>2,000+ Happy Clients</span>
             </div>
           </div>
         </div>
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

     {/* Features Section */}
     <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Built Differently for Service Businesses
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Unlike traditional CRMs that focus on closing sales, ServiceCRM is designed 
             specifically for maintaining strong ongoing client relationships.
           </p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
           {/* Feature 1 */}
           <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
               <Users className="h-6 w-6 text-blue-600" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Smart Relationship Monitoring</h3>
             <p className="text-gray-600 mb-4">
               Our AI-powered system tracks every client interaction to identify potential 
               issues before they become problems.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Relationship health scoring</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Early warning alerts</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Engagement tracking</span>
               </li>
             </ul>
           </div>

           {/* Feature 2 */}
           <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
               <Mail className="h-6 w-6 text-blue-600" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Automated Communication</h3>
             <p className="text-gray-600 mb-4">
               Never miss an important follow-up or update. Keep every client engaged 
               with smart communication tools.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Smart follow-up reminders</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Communication tracking</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Email templates</span>
               </li>
             </ul>
           </div>

           {/* Feature 3 */}
           <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
               <BarChart2 className="h-6 w-6 text-blue-600" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Service Excellence</h3>
             <p className="text-gray-600 mb-4">
               Deliver consistently great service by tracking project progress and 
               client satisfaction in one place.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Project milestone tracking</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Quality metrics</span>
               </li>
               <li className="flex items-center text-gray-600">
                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                 <span>Team collaboration</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </section>

     {/* Social Proof */}
     <section className="py-20 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Trusted by Leading Service Businesses
           </h2>
           <p className="text-xl text-gray-600">
             Join hundreds of companies already delivering exceptional client experiences
           </p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
           {/* Testimonial cards would go here */}
         </div>
       </div>
     </section>

     {/* CTA Section */}
     <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4">
         <div className="bg-blue-600 rounded-2xl p-12 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">
             Ready to Transform Your Client Relationships?
           </h2>
           <p className="text-xl text-blue-100 mb-8">
             Join hundreds of service businesses already using ServiceCRM to deliver 
             exceptional experiences.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
               Start Your Free Trial
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
             <Button variant="outline" className="text-white border-white hover:bg-blue-700 text-lg px-8 py-6">
               Schedule Demo
             </Button>
           </div>
         </div>
       </div>
     </section>

     {/* Footer */}
     <footer className="bg-gray-900 text-white py-12">
       <div className="max-w-7xl mx-auto px-4 text-center">
         <p className="text-gray-400">© {new Date().getFullYear()} ServiceCRM. All rights reserved.</p>
       </div>
     </footer>
   </div>
 )
}