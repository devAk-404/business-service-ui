// app/page.tsx

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseus";
import ServiceAreas from "@/components/ServiceAreas";
import ScrollTop from "@/components/controls/ScrollTop";

export default function Home() {
  return (
    <>
    <ScrollTop /> 
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}