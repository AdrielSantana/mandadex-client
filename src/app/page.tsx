import Cards from "@/components/cards/Cards";
import FiltersArea from "@/components/filtersArea/FiltersArea";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

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
