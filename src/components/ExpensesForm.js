import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { fetchExchangeCurrencyThunk, sendExpensesForms, getExchangeRates }
from '../actions';
import apiExchange from '../services/apiExchange';

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
      currency: '',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    const { fetchExchange/*  getExchanges */ } = this.props;

    fetchExchange();
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value });

 handleOnClick = async () => {
   const { sendExpenses } = this.props;
   console.log(await apiExchange);
   this.setState((prevState) => ({
     id: prevState.id + 1,
     expensesValueInput: '',
     descriptionInput: '',
     methodInput: 'Dinheiro',
     tagInput: Alimentação,
     currency: '',
   }));

   sendExpenses(this.state);
 }

 render() {
   const { currencies } = this.props;
   const { expensesValueInput,
     descriptionInput, methodInput, tagInput, currency } = this.state;

   return (
     <div className="form-container">
       <form className="expenses-container">
         <label htmlFor="expensesValue">
           Valor:
           <input
             data-testid="value-input"
             name="expensesValueInput"
             type="number"
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
                 : currencies
                   .filter((currencyFilter) => currencyFilter !== 'USDT')
                   .map((currencyOption) => (
                     <option
                       data-testid={ currencyOption }
                       key={ currencyOption }
                       value={ currencyOption }
                       onChange={ this.handleOnChange }
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
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchange: () => (dispatch(fetchExchangeCurrencyThunk())),
  getExchangeRatesProp: () => (dispatch(getExchangeRates())),
  sendExpenses: (state) => dispatch(sendExpensesForms(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
