import React from "react";
import logo from "./logo.svg";
import "./styles/App.scss";

import { Header, Footer } from "./components/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Aboutus, Scicams, Contacts } from "./routers/index";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Router> */}
        <Switch>
          <Route exact path="/aboutus" component={Aboutus} />
          {/* Оба /roster и /roster/:number начинаются с /roster */}
          <Route path="/scicams" component={Scicams} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        {/* </Router> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
