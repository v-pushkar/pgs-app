import React from "react";
import "./navmain.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { isTemplateElement } from "@babel/types";

const links = [
  { to: "/aboutus", text: "about us" },
  { to: "/scicams", text: "sckicams" },
  { to: "/contacts", text: "contacts" }
];
const LinksEl = links.map(link => (
  <NavLink className="navLink" activeClassName="active" to={link.to}>
    {link.text}
  </NavLink>
));

class Navmaim extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <nav className="mainNav">{LinksEl}</nav>;
  }
}

export default Navmaim;
