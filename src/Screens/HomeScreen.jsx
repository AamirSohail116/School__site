import React from "react";
import Categories from "../components/Categories/Categories";
import Courses from "../components/Courses/Courses";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Testimonial from "../components/Testimonial/Testimonial";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Courses />
      <Faqs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeScreen;
