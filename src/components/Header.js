import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // console.log(expenses);
    const total = expenses.reduce((acc, expense) => {
      if (expense.length !== 0) {
        const { exchangeRates, currency, value } = expense;
        const { ask } = exchangeRates[currency];
        return acc + Number(value) * Number(ask);
      }
      if (expense.length === 0) return acc;
      return acc;
    }, 0);

    return (
      <div className="header-container">
        <h1 className="wallet-title">My Wallet</h1>
        <section className="user-Infos">
          <p
            data-testid="email-field"
            className="email-field"
          >
            E-mail:
            {' '}
            { email }
          </p>
          <span>Despesas</span>
          <span
            data-testid="total-field"
            className="total-field"
          >
            {''}
            {
              total.toFixed(2)
            }
          </span>
          <span
            data-testid="header-currency-field"
            className="header-currency-field"
          >
            BRL
          </span>
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
