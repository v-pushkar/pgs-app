import React from "react";

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "CONTACT US" };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }
}

export default Contacts;
