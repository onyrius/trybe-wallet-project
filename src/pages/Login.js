import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginEmail from '../actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };
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

    handleOnClick = () => {
      const { email } = this.state;
      const { dispatch, history } = this.props;

      dispatch(loginEmail(email));
      history.push('/carteira');
    }

    render() {
      const { email, password, isDisable } = this.state;
      // console.log('this.state', this.state);
      // console.log('props Login', this.props);
      return (
        <div>
          <h1 className="title">Trybe Wallet</h1>
          <form className="login-form-component">
            <label htmlFor="loginEmail">
              <input
                data-testid="email-input"
                placeholder="E-mail"
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

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email });

/* const mapDispatchToProps = (dispatch) => ({
  INSERT_EMAIL: (email) => dispatch(loginEmail(email)) }); */

export default connect(mapStateToProps, null)(Login);
