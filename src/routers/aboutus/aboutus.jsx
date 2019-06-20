import React from "react";
import "./aboutus.scss";
import Article from "./../../components/article/article";

class Aboutus extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <section className="aboutUs">
        <div className="container">
          <div className="row">
            <div className="articleWrap col-lg-4 col-md-4 col-sm-2 col-1">
              <Article />
            </div>
            <div className="articleWrap col-lg-4 col-md-4 col-sm-2 col-1">
              <Article />
            </div>
            <div className="articleWrap col-lg-4 col-md-4 col-sm-2 col-1">
              <Article />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
