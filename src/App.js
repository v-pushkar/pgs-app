import React from "react";
import logo from "./logo.svg";
import "./styles/App.scss";

import { Header, Footer } from "./components/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Aboutus, Scicams, Contacts } from "./routers/index";
const Notfound = () => (
  <div className="container">
    <h1>Page not found</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Router> */}
        <Switch>
          <Route exact path="/aboutus" component={Aboutus} />          
          <Route path="/scicams" component={Scicams} />
          <Route path="/contacts" component={Contacts} />
          <Route component={Notfound} />
        </Switch>
        {/* </Router> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
