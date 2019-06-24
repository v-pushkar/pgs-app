import React from "react";
import axios from "axios";
import "./scicam.scss";

let www;

class Skicam extends React.Component {
  constructor() {
    super();
    this.state = {
      cams2: " sdfsdf",
      date2: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    };
  }

  render() {
    const cameras = [
      {
        name: "andalo",
        cams: [
          "http://srv2.realcam.it/live/pub/5-4.jpg",
          "http://srv2.realcam.it/live/pub/5-3.jpg"
        ]
      },
      {
        name: "Monte Bondone",
        cams: [
          "http://srv2.realcam.it/live/pub/6-1.jpg",
          "http://srv2.realcam.it/live/pub/6-3.jpg"
        ]
      }
    ];
    const CamsBlock = cameras.map(item => (
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="camsBlock">
          <div className="title">
            <label>{`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`}</label>
            <h3>{item.name}</h3>
          </div>
          <div className="imgWrapp">
            <img src={item.cams[0]} />
          </div>
          <div className="imgWrapp">
            <img src={item.cams[1]} />
          </div>
        </div>
      </div>
    ));
    return <div className="row">{CamsBlock}</div>;
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://makevoid-skicams.p.mashape.com/cams.json",
      "X-RapidAPI-Host": "https://makevoid-skicams.p.mashape.com/cams.json",
      "X-RapidAPI-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw",
      "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
    }).then(function(response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  }
}

export default Skicam;
