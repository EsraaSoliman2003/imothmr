import React from "react";
import Card from "./Card";

const FruitfulProducts = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <span className="text-center block md:text-lg text-[#FF8F3F]">
          {"منتجات مثمرة"}
        </span>
        <h2 className="text-white text-center mt-2 md:mt-5 text-2xl md:text-4xl">
          {"منتجات رقمية تساعدك في اثمار أعمالك"}
        </h2>
        {/* cards */}
        <div className="mt-10 md:mt-20 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </section>
  );
};

export default FruitfulProducts;
