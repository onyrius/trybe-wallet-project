import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="header-container">
        <h1 className="wallet-title">TrybeWallet</h1>
        <section className="user-Infos">
          <p data-testid="email-field">
            E-mail:
            {' '}
            { 'setEmail' }
          </p>
          <p data-testid="total-field">total: 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
