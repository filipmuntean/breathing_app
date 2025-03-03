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
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>

        <Suspense>
        <Breathe />
        </Suspense>
        {/* <WithWithout /> */}
       
        {/* <Pricing /> */}
        <Hero />
        <Problem />
        <FAQ />
        {/* <FeaturesAccordion /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}