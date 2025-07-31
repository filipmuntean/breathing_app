import { Suspense } from 'react'
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Breathe from '@/components/Breathe';
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Progress from '@/components/Progress';
import Testimonials11 from '@/components/Testimonials11';
import Features from '@/components/Features';
import { renderSchemaTags } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Suspense>
        <Header />
      </Suspense>
      <main>
      
        <Suspense>
        <Progress />
        <Breathe />
        </Suspense>
        {/* <WithWithout /> */}
        
        {/* <Pricing /> */}
       
        {/* <About /> */}
        <Problem />
        
        <Features />
        
        <Testimonials11 />
        
        <FAQ />
        {/* <FeaturesAccordion /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}