import React from "react";

class Skicam extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <section>
        <div className="continer">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img src="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skicam;
