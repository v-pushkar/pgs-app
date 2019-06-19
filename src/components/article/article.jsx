import React from "react";
import { Img1 } from "./../../media/img/index";

class Article extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <article>
        <div className="articleImg">
          <img src={Img1} alt="article 1" />
        </div>
        <div className="artickeText">
          <h3>lorem ipsum </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga
            ducimus vero aliquam incidunt exercitationem provident ex omnis
            dignissimos! Quas est, eos aliquam excepturi non eaque atque autem
            doloribus molestias.
          </p>
        </div>
      </article>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Article;
