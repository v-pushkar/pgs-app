import React from "react";
import "./navmain.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navmaim extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <nav className="mainNav">
        <Link className="navLink active" to="/aboutus">
          about us
        </Link>
        <Link className="navLink" to="/scicams">
          scicams
        </Link>
        <Link className="navLink" to="contacts">
          contacts
        </Link>
      </nav>
    );
  }
}

export default Navmaim;
