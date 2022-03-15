import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { fetchExchangeCurrencyThunk, sendExpensesForms }
from '../actions';
import apiExchange from '../services/apiExchange';

const Alimentação = 'Alimentação';

export class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: Alimentação,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchExchange } = this.props;

    fetchExchange();
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value });

 handleOnClick = async () => {
   const { sendExpenses } = this.props;
   const exchangeRatesapi = await apiExchange();
   this.setState((prevState) => ({
     id: prevState.id + 1,
     exchangeRates: exchangeRatesapi,
   }), () => {
   });
   sendExpenses(this.state);
   this.setState({
     value: '',
     currency: 'USD',
     tag: Alimentação,
   });
 }

 render() {
   const { currencies } = this.props;
   const { value, description, currency, method, tag } = this.state;

   return (
     <div className="form-container">
       <form className="expenses-container">
         <label htmlFor="expensesValue">
           Valor:
           <input
             data-testid="value-input"
             name="value"
             type="number"
             id="value"
             value={ value }
             onChange={ this.handleOnChange }
           />
         </label>
         <label htmlFor="currency">
           Moeda
           <select
             data-testid="currency-input"
             id="currency"
             name="currency"
             value={ currency }
             onChange={ this.handleOnChange }
           >
             {
               currencies === []
                 ? <span>Loading</span>
                 : currencies
                   .filter((currencyOption) => currencyOption !== 'USDT')
                   .map((currencyOption) => (
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

         <label htmlFor="method">
           Forma de pagamento:
           <select
             data-testid="method-input"
             id="method"
             name="method"
             value={ method }
             onChange={ this.handleOnChange }
           >
             <option value="Dinheiro">Dinheiro</option>
             <option value="Cartão de crédito">Cartão de crédito</option>
             <option value="Cartão de débito">Cartão de débito</option>
           </select>
         </label>

         <label htmlFor="tag">
           Categoria:
           <select
             data-testid="tag-input"
             id="tag"
             name="tag"
             value={ tag }
             onChange={ this.handleOnChange }

           >
             <option value="Alimentação">Alimentação</option>
             <option value="Lazer">Lazer</option>
             <option value="Trabalho">Trabalho</option>
             <option value="Transporte">Transporte</option>
             <option value="Saúde">Saúde</option>
           </select>
         </label>

         <label htmlFor="description">
           Descrição
           <input
             data-testid="description-input"
             id="description"
             name="description"
             value={ description }
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
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchange: () => (dispatch(fetchExchangeCurrencyThunk())),
  sendExpenses: (state) => dispatch(sendExpensesForms(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
