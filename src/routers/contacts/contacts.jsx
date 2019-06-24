import React, { Component } from "react";
import "./contacts.scss";

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <div key={i}>
            {fieldName} {formErrors[fieldName]}
          </div>
        );
      } else {
        return "";
      }
    })}
  </div>
);

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      names: "",
      mess: "",
      formErrors: { email: "", names: "", mess: "" },
      emailValid: false,
      namesValid: false,
      messValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(f, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let namesValid = this.state.namesValid;
    let messValid = this.state.messValid;

    switch (f) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : " is invalid e-mail adress";
        break;
      case "names":
        namesValid = value.length >= 3;
        fieldValidationErrors.names = namesValid
          ? ""
          : " is too short, must have more than 3 characters";
        break;
      case "mess":
        messValid = value.length >= 10;
        fieldValidationErrors.mess = messValid
          ? ""
          : " is too short, must have more than 10 characters";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        namesValid: namesValid,
        messValid: messValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.namesValid && this.state.messValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <section className="contacts">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6 col-md-6 col-sm-8 col-12 formWrapp">
              <div className="contactform">
                <div className="formWrapper">
                  <form>
                    <div
                      className={`group required ${
                        this.state.names ? "hastext" : ""
                      }`}
                    >
                      <input
                        type="text"
                        required
                        value={this.state.names}
                        name="names"
                        onChange={this.handleUserInput}
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Name</label>
                    </div>

                    <div
                      className={`group required ${
                        this.state.email ? "hastext" : ""
                      }`}
                    >
                      <input
                        type="email"
                        required
                        value={this.state.email}
                        name="email"
                        onChange={this.handleUserInput}
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Email</label>
                    </div>
                    <div
                      className={`group message ${this.state.mess ? "hastext" : ""}`}
                    >
                      <textarea
                    
                        type="text"
                        required
                        value={this.state.mess}
                        name="mess"
                        onChange={this.handleUserInput}
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Message</label>
                    </div>
                    
                    <div className="btn-wrapp">
                      <button
                        type="submit"
                        className="btn-def"
                        onClick={this.inputValidation}
                        disabled={!this.state.formValid}
                      >
                        SEND
                      </button>
                    </div>
                    <FormErrors formErrors={this.state.formErrors} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
