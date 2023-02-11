"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Search from "./Search";

import logo from "/public/images/header/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <Container className="header-container">
          <Search />
          <a href="#">
            <Image alt="Logo" src={logo} className="logo" priority />
          </a>
        </Container>
      </header>
    </>
  );
};

export default Header;
