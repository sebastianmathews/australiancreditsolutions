"use client";

import IntroSection from "../IntroSection";
import TrustBadges from "../TrustBadges";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import CreditScoreTransformation from "./CreditScoreTransformation";
import FAQ from "./FAQ";
import LenderLogos from "./LenderLogos";
import PainPoints from "./PainPoints";
import Process from "./Process";
import Services from "./Services";
import Testimonials from "./Testimonials";

const HomeClient = () => {
  return (
    <div>
      <Banner />
      <TrustBadges />
      <IntroSection />
      <LenderLogos />
      <PainPoints />
      <Services />
      <ClientReview />
      <CreditScoreTransformation />
      <Process />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomeClient;
