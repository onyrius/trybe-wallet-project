import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { fetchExchangeCurrencyThunk, sendExpensesForms/*  getExchangeRates */ }
from '../actions';

const Alimentação = 'Alimentação';

export class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: 'Dinheiro',
      tagInput: Alimentação,
      currency: 'BRL',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchExchange/*  getExchanges */ } = this.props;

    fetchExchange();
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value });

 handleOnClick = async () => {
   console.log('***this.props', this.props);
   const { sendExpenses, fetchExchange } = this.props;

   const state = { ...this.state };
   this.setState({ exchangeRates: fetchExchange() }, () => {
     this.setState({
       id: state.id + 1,
       expensesValueInput: '',
       descriptionInput: '',
       methodInput: 'Dinheiro',
       tagInput: Alimentação,
       currency: '',
     });
   });
   sendExpenses(this.state);
 }

 render() {
   const { currencies } = this.props;
   // console.log('***render ExpenseForm this.props', this.props);
   const { expensesValueInput,
     descriptionInput, methodInput, tagInput, currency } = this.state;
   // console.log(currencies);

   return (
     <div className="form-container">
       <form className="expenses-container">
         <label htmlFor="expensesValue">
           Valor:
           <input
             data-testid="value-input"
             name="expensesValueInput"
             id="expensesValueInput"
             value={ expensesValueInput }
             onChange={ this.handleOnChange }
           />
         </label>
         <label htmlFor="currencyInput">
           Moeda
           <select
             data-testid="currency-input"
             id="currencyInput"
             name="currencyInput"
             value={ currency }
             onChange={ this.handleOnChange }
           >
             {
               currencies === null
                 ? <span>Loading</span>
                 : currencies.map((currencyOption) => (
                   <option
                     data-testid={ currencyOption }
                     key={ currencyOption }
                     value={ currencyOption }
                   >
                     { currencyOption }

                   </option>

                 ))
             }
           </select>
         </label>

         <label htmlFor="methodInput">
           Forma de pagamento:
           <select
             data-testid="method-input"
             id="methodInput"
             name="methodInput"
             value={ methodInput }
             onChange={ this.handleOnChange }
           >
             <option value="Dinheiro">Dinheiro</option>
             <option value="Cartão de crédito">Cartão de crédito</option>
             <option value="Cartão de débito">Cartão de débito</option>
           </select>
         </label>

         <label htmlFor="tagInput">
           Categoria:
           <select
             data-testid="tag-input"
             id="tagInput"
             name="tagInput"
             value={ tagInput }
             onChange={ this.handleOnChange }

           >
             <option value="Alimentação">Alimentação</option>
             <option value="Lazer">Lazer</option>
             <option value="Trabalho">Trabalho</option>
             <option value="Transporte">Transporte</option>
             <option value="Saúde">Saúde</option>
           </select>
         </label>

         <label htmlFor="descriptionInput">
           Descrição
           <input
             data-testid="description-input"
             id="descriptionInput"
             name="descriptionInput"
             value={ descriptionInput }
             onChange={ this.handleOnChange }
           />
         </label>

         <button
           className="add-expenses"
           type="button"
           id="addExpenses"
           onClick={ this.handleOnClick }
         >
           Adicionar despesa
         </button>
       </form>

       <TableExpenses />

     </div>
   );
 }
}

ExpensesForm.propTypes = {
  sendExpenses: PropTypes.func.isRequired,
  fetchExchange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
/*  getExchanges: PropTypes.func.isRequired, */
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.expenses[0].exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchange: () => (
    dispatch(fetchExchangeCurrencyThunk())),
  // getExchanges: (payload) => dispatch((getExchangeRates(payload))),
  sendExpenses: (state) => dispatch(sendExpensesForms(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
