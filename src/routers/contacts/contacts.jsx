import React from "react";
import "./contacts.scss";

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "CONTACT US" };
  }

  render() {
    return (
      <section className="contacts">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-sm-8 col-12 formWrapp">
              <div className="contactform">
                <form>
                  <div class="group required">
                    <input type="text" required />
                    <span class="highlight" />
                    <span class="bar" />
                    <label>Name</label>
                  </div>

                  <div class="group required">
                    <input type="email" required />
                    <span class="highlight" />
                    <span class="bar" />
                    <label>Email</label>
                  </div>
                  <div class="group">
                    <input type="text" required />
                    <span class="highlight" />
                    <span class="bar" />
                    <label>Message</label>
                  </div>
                  <div className="btn-wrapp">
                    <button className="btn-def">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
