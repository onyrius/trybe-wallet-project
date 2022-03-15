import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // console.log(expenses);
    const total = expenses.reduce((acc, expense) => {
      if (expense !== []) {
        const { exchangeRates, currency, value } = expense;
        const { ask } = exchangeRates[currency];
        return acc + Number(value).toFixed(2) * Number(ask).toFixed(2);
      }
      if (expense === []) return acc;
      return acc;
    }, 0);
    console.log(this.props);
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
            {''}
            {
              total
            }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(Header);
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
