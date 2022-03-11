import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <form className="login-form-component">
          <label htmlFor="loginEmail">
            <input type="text" name="email" id="loginEmail" />
          </label>
          <input type="submit" value="Enviar" />
        </form>

      </div>
    );
  }
}
