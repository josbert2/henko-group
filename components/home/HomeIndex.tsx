import ParallaxSection from '@/components/home/ParallaxSection';
import Services from '@/components/home/Services';
import StatsSection from '@/components/home/StatsSection';
import StatsCards from '@/components/home/StatsCards';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WhyChooseUsAlt from '@/components/home/WhyChooseUsAlt';

import ProcessSection from '@/components/home/ProcessSection';
import ContactSection from '@/components/home/ContactSection';
import CTASection from '@/components/home/CTASection';
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      <ParallaxSection />
       
      <Services />
      <StatsCards />
     
      <ProcessSection />
      <WhyChooseUsAlt />
      <Testimonials id="testimonials" locale={dict.Testimonials} />
      <ContactSection />
      <CTASection />
    </>
  );
}
