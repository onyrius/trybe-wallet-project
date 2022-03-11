import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Trybe Wallet</h1>
        <form className="login-form-component">
          <label htmlFor="loginEmail">
            <input
              data-testid="email-input"
              placeholder="Email"
              type="email"
              name="email"
              id="loginEmail"
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              placeholder="Senha"
              type="password"
              name="password"
              id="password"
            />
          </label>
          <input className="btn-login" type="submit" value="Enviar" />
        </form>

      </div>
    );
  }
}
