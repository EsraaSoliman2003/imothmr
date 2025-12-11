// import FruitfulProducts from "@/components/fruitfulProducts/FruitfulProducts";
import FruitfulWorks from "@/components/fruitfulWorks/FruitfulWorks";
import HowWork from "@/components/howWork/HowWork";
import Landing from "@/components/landing/Landing";
import Services from "@/components/services/Services";
import WorkSteps from "@/components/workSteps/WorkSteps";
import React from "react";
import PageClone from "./PageClone";

const HomePage = () => {
  return (
    <PageClone>
      <section id="home">
        <Landing />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="how-work">
        <HowWork />
      </section>

      <section id="works">
        <FruitfulWorks />
      </section>
      
      {/* <FruitfulProducts /> */}
      <section id="contact">
        <WorkSteps />
      </section>
    </PageClone>

  );
};

export default HomePage;
