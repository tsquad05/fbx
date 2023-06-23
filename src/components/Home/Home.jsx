import React from "react";
import Hero from "../Hero/Hero.jsx";
import Services from "../Popular Services/Services.jsx";
import Footer from "../Footer/Footer.jsx";
import PopularItems from "../Popular Items/PopularItems.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PopularItems />
      <Footer />
    </>
  );
}

export default Home;
