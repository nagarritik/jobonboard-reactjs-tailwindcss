import React from "react";
import Header from "./Header";
import HomeHero1 from "./HomeHero1";
import HomeHero2 from "./HomeHero2";
import HomeHero3 from "./HomeHero3";
import HomeTestimonial from "./HomeTestimonial";
import HomeFeaturedImage from "./HomeFeaturedImage";
import Footer from "./Footer";
import HomeHero4 from "./HomeHero4";
import HomeHero5 from "./HomeHero5";
import HomeArticle from "./HomeArticle";

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
      <HomeHero4/>
      <HomeHero5/>
      <HomeArticle/>
      <Footer/>
    </>
  );
}

export default Home;
