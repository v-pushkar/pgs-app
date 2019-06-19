import React from "react";

class Scicams extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "SCICAMS" };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  
}

export default Scicams;
