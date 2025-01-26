// app/page.tsx

import { ArrowRight, Users, Mail, BarChart2, CheckCircle, Star, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
 return (
   <div className="min-h-screen bg-white">
     {/* Navigation - Updated with new branding */}
     <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-between items-center h-16">
           <div className="text-2xl font-bold text-blue-600">CRMFlow</div>
           <div className="hidden md:flex space-x-6">
             <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
             <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
             <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
           </div>
           <div className="flex items-center space-x-4">
             <a href="/login" className="text-gray-600 hover:text-gray-900">Sign In</a>
             <Button className="bg-blue-600 text-white hover:bg-blue-700">
               Start Free Trial
             </Button>
           </div>
         </div>
       </div>
     </nav>

     {/* Hero Section - Updated messaging */}
     <section className="relative pt-32 pb-32 bg-gradient-to-b from-blue-50 to-white">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center">
           <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
             Introducing CRMFlow for Service Teams
           </div>
           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
             Client Relationships <br className="hidden md:block" />
             That Flow Naturally
           </h1>
           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             The intelligent CRM that helps service businesses deliver exceptional 
             client experiences through automated relationship monitoring and 
             streamlined communication.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
             <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg h-12 px-8">
               Start Free Trial
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
             <Button variant="outline" className="text-lg h-12 px-8">
               See How It Works
               <Zap className="ml-2 h-5 w-5" />
             </Button>
           </div>
           <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
             <div className="flex items-center">
               <Star className="h-5 w-5 mr-2 text-yellow-400" />
               <span>40% Better Client Retention</span>
             </div>
             <div className="flex items-center">
               <Clock className="h-5 w-5 mr-2 text-green-500" />
               <span>15 Hours Saved Weekly</span>
             </div>
             <div className="flex items-center">
               <Users className="h-5 w-5 mr-2 text-blue-500" />
               <span>500+ Happy Teams</span>
             </div>
           </div>
         </div>

         {/* Enhanced dashboard preview */}
         <div className="relative mt-16">
           <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-32 bottom-0 z-10" />
           <div className="relative rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
             <Image
               src="/dashboard-preview.png"
               alt="CRMFlow Dashboard"
               width={1200}
               height={600}
               className="rounded-lg"
             />
           </div>
         </div>
       </div>
     </section>

     {/* Features Section - Updated value propositions */}
     <section className="py-20 bg-white" id="features">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Where Client Relationships Flow Naturally
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Unlike traditional CRMs focused on closing deals, CRMFlow is built for 
             maintaining strong, lasting client relationships that grow over time.
           </p>
         </div>

         {/* Enhanced feature cards */}
         <div className="grid md:grid-cols-3 gap-8">
           {/* Feature cards remain similar but with updated copy and styling */}
         </div>
       </div>
     </section>

     {/* New Solutions Section */}
     <section className="py-20 bg-gray-50" id="solutions">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Built for Service Teams Like Yours
           </h2>
           <p className="text-xl text-gray-600">
             Tailored solutions for different service businesses
           </p>
         </div>
         
         {/* Industry solutions cards */}
         <div className="grid md:grid-cols-3 gap-8">
           {/* Solution cards for different industries */}
         </div>
       </div>
     </section>

     {/* New Pricing Section */}
     <section className="py-20 bg-white" id="pricing">
       {/* Pricing content */}
     </section>

     {/* Enhanced CTA Section */}
     <section className="py-20 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4">
         <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">
             Ready to Make Client Relationships Flow?
           </h2>
           <p className="text-xl text-blue-100 mb-8">
             Join forward-thinking service teams already using CRMFlow to deliver 
             exceptional client experiences.
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

     {/* Enhanced Footer */}
     <footer className="bg-gray-900 text-white py-12">
       <div className="max-w-7xl mx-auto px-4">
         <div className="grid md:grid-cols-4 gap-8">
           {/* Footer content */}
         </div>
         <div className="border-t border-gray-800 mt-12 pt-8 text-center">
           <p className="text-gray-400">© {new Date().getFullYear()} CRMFlow.io. All rights reserved.</p>
         </div>
       </div>
     </footer>
   </div>
 )
}