import React from "react";

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "CONTACT US" };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>CONTACTS</h2>
          </div>
        </div>
      </div>
      );
  }
}

export default Contacts;
