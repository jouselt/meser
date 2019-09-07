import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  render() {
    return (
      <div className="container-fluid row m-0 p-0">
        <div className=" App__Aside col-xs-12 col-md-7">
          <h1 className="text-center">Bienvenido a Meser</h1>
        </div>
        <div className="App__Login App__Aside col-xs-12 col-md-5">
          <div className="FormCenter">
            <div className="FormTitle">
              <h2>
                Login
              </h2>
            </div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Indica tu Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Ingrese contraseña"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20">Inicia Sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user, totalization: state.totalization })
export default withRouter(connect(mapStateToProps, { login })(Login));