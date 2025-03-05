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
import Head from 'next/head';

export default function Home() {
  return (
    <>
    {/* <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
     crossOrigin="anonymous"></script>
      </Head> */}

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