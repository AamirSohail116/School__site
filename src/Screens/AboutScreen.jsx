import React from "react";
import Achievement from "../components/aboutComponents/Achievement/Achievement";
import Team from "../components/aboutComponents/Team/Team";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function AboutScreen() {
  return (
    <div>
      <Header />
      <Achievement />
      <Team />
      <Footer />
    </div>
  );
}

export default AboutScreen;
