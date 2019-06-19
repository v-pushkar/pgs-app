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
        <div className="row">
          <div className="continer">
            <div className="articleWrap">
              <Article />
            </div>
            <div className="articleWrap">
              <Article />
            </div>
            <div className="articleWrap">
              <Article />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
