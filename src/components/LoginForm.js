import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = {
      email: '',
      password: '',
      isDisable: true,
    }

    /** Source: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
     * /\S+@\S+\.\S+/ ===> (qualquer string @ qualquer string. qualquer string)/
    */
    handleOnChange = ({ target: { value, name } }) => this.setState({
      [name]: value,
    }, () => {
      const { password, email } = this.state;
      const MAXLENGTH = 6;
      if (password.length >= MAXLENGTH && /\S+@\S+\.\S+/.test(email)) {
        this.setState({ isDisable: false });
      } else if (password.length < MAXLENGTH) {
        this.setState({ isDisable: true });
      }
    });

    handleOnClick = (event) => {
      event.preventDefault();
    }

    render() {
      const { email, password, isDisable } = this.state;
      // console.log('this.state', this.state);
      // console.log('props LoginForm', this.props);
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
                onChange={ this.handleOnChange }
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
                onChange={ this.handleOnChange }
              />
            </label>

            <button
              className="btn-login"
              type="submit"
              disabled={ isDisable }
              onClick={ this.handleOnClick }
            >
              Entrar
            </button>

          </form>

        </div>
      );
    }
}

/* LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
}; */

/* const mapStateToProps = state => ({
    email: state.myReducer.state}); */

export default connect()(LoginForm);
