import React from "react";
import Logo from "../logo/logo";
import Navmain from "../navmain/navmaim";
import "./header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <header>
        <div className="container">
          <Logo />

          <Navmain />
        </div>
      </header>
    );
  }
}

export default Header;
