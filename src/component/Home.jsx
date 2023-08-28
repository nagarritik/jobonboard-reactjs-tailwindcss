import React from "react";
import Header from "./Header";
import HomeHero1 from "./HomeHero1";
import HomeHero2 from "./HomeHero2";
import HomeHero3 from "./HomeHero3";
import HomeTestimonial from "./HomeTestimonial";
import HomeFeaturedImage from "./HomeFeaturedImage";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <HomeHero1 />
      <HomeHero2 />
      <hr />
      <HomeHero3/>
      <HomeTestimonial/>
      <HomeFeaturedImage/>
      <hr />
      <Footer/>
    </>
  );
}

export default Home;
