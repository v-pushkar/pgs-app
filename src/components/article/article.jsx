import React from "react";
import { Img1 } from "./../../media/img/index";
import "./article.scss";

class Article extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
    
  }

  render() {
    return (
      <article>
        <div className="articleImg">
          <img src={this.props.img} alt="article 1" />
        </div>
        <div className="artickeText">
          <h3 className="title">{this.props.title}</h3>
          <p className="textBlock">
           {this.props.text}
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
