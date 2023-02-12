"use client";
import { Container } from "react-bootstrap";
import Filters from "./Filters";
import Order from "./Order";

const FiltersArea = () => {
  return (
    <>
      <section className="filtersArea-section">
        <Container className="filtersArea-container">
          <h1 className="filtersArea-title">
            Encontre seu <span>Pokemon!</span>
          </h1>

          <Order />
          <Filters />
        </Container>
      </section>
    </>
  );
};

export default FiltersArea;
