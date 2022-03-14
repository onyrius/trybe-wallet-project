import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    // console.log(this.props);
    const { email, expenses } = this.props;
    console.log(expenses);

    return (
      <div className="header-container">
        <h1 className="wallet-title">My Wallet</h1>
        <section className="user-Infos">
          <p data-testid="email-field">
            E-mail:
            {' '}
            { email }
          </p>
          <p data-testid="total-field">
            total:
            {/* { expenses === undefined
              ? ''
              : expenses.reduce((acc, {
                currency,
                value,
                exchangeRates,
              }) => acc + value * exchangeRates[currency].ask, 0).toFixed(2)} */}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,

};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(Header);
