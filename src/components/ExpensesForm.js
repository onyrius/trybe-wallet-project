import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { deleteExpensesForms, editExpensesForms,
  fetchExchangeCurrencyThunk, sendExpensesForms }
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
      method: 'Dinheiro',
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
   const { value } = this.state;
   if (value === '') {
     global.alert('Por favor, insira um valor válido');
   } else {
     const exchangeRatesapi = await apiExchange();
     this.setState((prevState) => ({
       id: prevState.id + 1,
       exchangeRates: exchangeRatesapi,
     }), () => {
     });

     sendExpenses(this.state);
     this.setState({ value: '', currency: 'USD', tag: Alimentação, description: '',
     });
   }
 }

 editHandleOnClick = async () => {
   const { editExpenses, newExpenses, expenses, expenseToEdit } = this.props;
   // const { value, description, currency, method, tag, exchangeRates } = expenseToEdit[0];
   this.setState(expenseToEdit[0]);
   // eslint-disable-next-line react/prop-types
   console.log(this.state);

   this.handleOnChange = ({ target: { value: values, name } }) => this.setState({
     [name]: values,
   });

   console.log('obj para modificar', expenseToEdit[0]);
   console.log(this.state);
   // console.log('Objeto para acrescentar ao novo array', editedObject);
   const editedList = [...expenses
     // eslint-disable-next-line react/prop-types
     .filter((expense) => expense.id !== expenseToEdit[0].id), this.state];
   newExpenses(editedList);
   editExpenses({});
   this.setState({
     value: '',
     currency: 'USD',
     tag: Alimentação,
     description: '',
   });
 }

 render() {
   const { currencies, isToEdit } = this.props;
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

         {
           isToEdit
             ? (
               <button
                 className="edit-expenses"
                 type="button"
                 id="addExpenses"
                 onClick={ this.editHandleOnClick }
               >
                 Editar Despesa
               </button>
             )

             : (
               <button
                 className="add-expenses"
                 type="button"
                 id="addExpenses"
                 onClick={ this.handleOnClick }
               >
                 Adicionar despesa
               </button>
             )
         }
       </form>

       <TableExpenses />

     </div>
   );
 }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editExpenses: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  expenses: PropTypes.shape({
    filter: PropTypes.func.isRequired,
  }).isRequired,
  fetchExchange: PropTypes.func.isRequired,
  isToEdit: PropTypes.bool.isRequired,
  newExpenses: PropTypes.func.isRequired,
  sendExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isToEdit: state.wallet.edit,
  expenseToEdit: state.wallet.expensesToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchange: () => (dispatch(fetchExchangeCurrencyThunk())),
  sendExpenses: (state) => dispatch(sendExpensesForms(state)),
  editExpenses: (state) => dispatch(editExpensesForms(state)),
  newExpenses: (state) => dispatch(deleteExpensesForms(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
