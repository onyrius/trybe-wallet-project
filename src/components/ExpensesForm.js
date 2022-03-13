import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { fetchExchangeCurrencySuccess, sendExpensesForms } from '../actions';

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
      exchangeRates: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  apiExchange = async () => {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const exchangesRequest = await fetch(URL);
    const exchangesResponseJSON = await exchangesRequest.json();
    return exchangesResponseJSON;
  }

 handleOnClick = async () => {
   const { dispatch } = this.props;
   const state = { ...this.state };
   this.setState({ exchangeRates: await this.apiExchange() }, () => {
     this.setState({
       id: state.id + 1,
       expensesValueInput: '',
       descriptionInput: '',
       methodInput: 'Dinheiro',
       tagInput: Alimentação,
       currency: '',
     });
   });
   dispatch(sendExpensesForms(this.state));
 }

 render() {
   const { expensesValueInput,
     descriptionInput, methodInput, tagInput, currency /* exchangeRates */ } = this.state;
   // console.log(typeof exchangeRates);
   return (
     <div>
       <form className="expenses-container">
         <label htmlFor="expensesValue">
           Valor:
           <input
             data-testid="value-input"
             name="expensesValueInput"
             id="expensesValueInput"
             type="number"
             value={ expensesValueInput }
             onChange={ this.handleOnChange }
           />
         </label>

         <label htmlFor="currencyInput">
           Moeda
           <select
             data-testid="currency-input"
             id="currencyInput"
             value={ currency }
             onChange={ this.handleOnChange }
           >
             <option>
               { currency }
               {/* {
                 exchangeRates.map((exchangeRate) => (
                   <option key={ exchangeRate }>
                     {' '}
                     { exchangeRate }
                   </option>))
               } */}
             </option>
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
  dispatch: PropTypes.func.isRequired,
  // exchangeRates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchExchangeCurrencySuccess: () => dispatch(fetchExchangeCurrencySuccess),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
