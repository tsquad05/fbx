import React from "react";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";
import PopularItems from "../Popular Items/PopularItems.jsx";
import { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.css";
const ServicesComponent = lazy(() =>
  import("../Popular Services/Services.jsx")
);
function Home() {
  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      >
        <ServicesComponent />
      </Suspense>
      <PopularItems />
      <Footer />
    </>
  );
}

export default Home;
