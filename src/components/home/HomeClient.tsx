"use client";

import IntroSection from "../IntroSection";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import TrustBadges from "../TrustBadges";

const HomeClient = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <TrustBadges/>
      <IntroSection/>
    </div>
  );
};

export default HomeClient;
