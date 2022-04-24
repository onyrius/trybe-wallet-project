import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (

      <section className="background-container-wallet">

        <Header />
        <ExpensesForm />
      </section>);
  }
}

export default Wallet;
