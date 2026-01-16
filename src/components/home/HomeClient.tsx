"use client";

import IntroSection from "../IntroSection";
import TrustBadges from "../TrustBadges";
import Banner from "./Banner";

const HomeClient = () => {
  return (
    <div>
      <TrustBadges/>
      <IntroSection/>
      <Banner />
    </div>
  );
};

export default HomeClient;
