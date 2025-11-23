import React from "react";
import "./Home.css";    

import HeroSection from "../components/HeroSection";
import ClientsSection from "../components/ClientsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import SecuritySection from "../components/SecuritySection";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingSection from "../components/PricingSection";
import ReadyToTransform from "../components/ReadyToTransform";

const Home = () => {
  return (
    <div className="page-home">

      <section id="home">
        <HeroSection />
      </section>

      <section id="clients">
        <ClientsSection />
      </section>

      <section id="whychoose">
        <WhyChooseSection />
      </section>

      <section id="security">
        <SecuritySection />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="transform">
        <ReadyToTransform />
      </section>

    </div>
  );
};

export default Home;
