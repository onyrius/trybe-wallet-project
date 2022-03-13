import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    // console.log(this.props);
    const { email, id } = this.props;
    return (
      <div className="header-container">
        <h1 className="wallet-title">My Wallet</h1>
        <section className="user-Infos">
          <p data-testid="email-field">
            E-mail:
            {' '}
            { email }
          </p>
          <p data-testid="total-field" id={ id }>
            total:
            {' '}
            { id }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  id: state.wallet.expenses[0].id,
  // expensesValueInput: state.wallet.expensesValueInput
});
export default connect(mapStateToProps, null)(Header);
