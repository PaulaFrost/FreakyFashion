import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SmallSpots from "./Components/SmallSpots";
import Footer from "./Components/Footer";

let menuItemList = [
  { id: 1, name: "Nyheter", url: "#" },
  { id: 2, name: "Kategorier", url: "#" },
  { id: 3, name: "Topplistan", url: "#" },
  { id: 4, name: "Rea", url: "#" },
  { id: 5, name: "Kampanjer", url: "#" },
  { id: 6, name: "Varumärke", url: "#" },
  { id: 7, name: "Shop", url: "#" },
  { id: 8, name: "Instagram", url: "#" }
];

ReactDOM.render(
  <div>
    <Header menuItem={menuItemList} />

    <Hero />

    <SmallSpots />

    <Footer />
  </div>,
  document.querySelector("#root")
);
