import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Breathe from '@/components/Breathe';
import WithWithout from '@/components/WithWithout';
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import About from '@/components/About';
import Footer from "@/components/Footer";
import Progress from '@/components/Progress';

export default function Home() {
  return (
    <>

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
        
        <FAQ />
        {/* <FeaturesAccordion /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}