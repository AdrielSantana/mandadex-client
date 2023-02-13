"use client";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import FiltersArea from "@/components/filtersArea/FiltersArea";
import Cards from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FiltersArea />
      <Cards />
      <Footer />
    </>
  );
}
