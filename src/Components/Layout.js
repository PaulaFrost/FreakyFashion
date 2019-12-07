import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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

let headerIconList = [
  { id: 1, name: "eye", href: "fa fa-eye" },
  { id: 2, name: "heart", href: "fa fa-heart" },
  { id: 3, name: "shopping cart", href: "fa fa-shopping-cart" }
];

let languageList = [
  { id: 1, name: "Svenska" },
  { id: 2, name: "Danska" },
  { id: 3, name: "Norska" },
  { id: 4, name: "Engelska" }
];

let footerIconList = [
    { id: 1, name: "earth", href:"fa fa-globe-americas", titel: "Gratis frakt och returer"},
    { id: 2, name: "airplane", href:"fa fa-plane", titel:"Expressfrakt"},
    { id: 3, name: "shield", href:"fas fa-shield-alt", titel:"Säkra betalningar"},
    { id: 4, name: "smiley", href:"fa fa-smile", titel:"Nyheter varje dag"}
  ]

let shoppingList = [
    { id: 1, titel: "Vinterjackor", href:""},
    { id: 2, titel: "Pufferjackor", href:""},
    { id: 3, titel: "Kappa", href:""},
    { id: 4, titel: "Trenchcoats", href:""}
  ]
  
let myPageList = [
    { id: 1, titel: "Mina Ordar", href:""},
    { id: 2, titel: "Mitt Konto", href:""}
  ]
  
let supportList = [
    { id: 1, titel: "Returnpolicy", href:""},
    { id: 2, titel: "Inegritetspolicy", href:""}
  ]

  let countryList = [
    { id: 1, name: "Sverige"},
    { id: 2, name: "Danmark"},
    { id: 3, name: "Norge"},
    { id: 4, name: "England"}
  ];

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Header
          menuItem={menuItemList}
          language={languageList}
          icon={headerIconList}
        />
        <Container>{this.props.children}</Container>

        <Footer
            footerIcon={footerIconList} 
            shoppingList={shoppingList} 
            myPageList={myPageList} 
            supportList={supportList}
            languageList={languageList}
            countryList={countryList}
            />
      </div>
    );
  }
}
