import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
      // email: '',
      password: '',
      isDisable: true,
    }

    handleOnChange = ({ target: { value, name } }) => this.setState({
      [name]: value,
    }, () => {
      const { password, isDisable } = this.state;
      const MAXLENGTH = 6;
      if (password.length < MAXLENGTH) return isDisable;
      return !isDisable;
    });

    render() {
      const { email, password, isDisable } = this.props;
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
                value={ email }
              />
            </label>
            <label htmlFor="password">
              <input
                data-testid="password-input"
                placeholder="Senha"
                type="password"
                name="password"
                id="password"
                value={ password }
              />
            </label>

            <input
              className="btn-login"
              type="submit"
              value="Entrar"
              disabled={ isDisable }
              onChange={ this.handleOnChange }
            />

          </form>

        </div>
      );
    }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
};