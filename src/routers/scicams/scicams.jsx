import React from "react";
import Skicam from "./../../components/skicam/skicam";
import "./scicams.scss";

class Scicams extends React.Component {
  render() {
    return (
      <section className="skiCams">
        <div className="container">
          <Skicam />
        </div>
      </section>
    );
  }
}

export default Scicams;
