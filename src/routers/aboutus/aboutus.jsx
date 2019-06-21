import React from "react";
import "./aboutus.scss";
import Article from "./../../components/article/article";
import { Img1, Img2, Img3 } from "./../../media/img/index";

class Aboutus extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    const aticles = [
      {
        title: "Lorem ipsum",
        text: ` Quo fuga
      ducimus vero aliquam incidunt exercitationem provident ex omnis
      dignissimos! Quas est, eos aliquam excepturi non eaque atque`,
        img: Img1
      },
      {
        title: "Lorem ipsum 2",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga
      ducimus vero aliquam.`,
        img: Img2
      },
      {
        title: "Lorem ipsum 3",
        text: ` Quas est, eos aliquam excepturi non eaque atque autem
      doloribus molestias.`,
        img: Img3
      }
    ];
    const articlesEl = aticles.map(articl => (
      <div className="articleWrap col-lg-4 col-md-4 col-sm-6 col-12">
        <Article title={articl.title} text={articl.text} img={articl.img} />
      </div>
    ));
    return (
      <section className="aboutUs">
        <div className="container">
          <div className="row">{articlesEl}</div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
