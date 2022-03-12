import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpenses from './TableExpenses';
import { sendExpensesForms } from '../actions';

export class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
      currency: '',
    };
  }

  componentDidMount() {
    console.log('oi');
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value })

 handleOnClick = () => {
   const { dispatch } = this.props;
   dispatch(sendExpensesForms(this.state));
 }

 render() {
   const { expensesValueInput,
     descriptionInput, methodInput, tagInput, currency, id } = this.state;
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
           >
             <option
               name="currencyInput"
               value={ currency }
               onChange={ this.handleOnChange }
             >
               BRL
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

       <TableExpenses id={ id } />

     </div>
   );
 }
}

ExpensesForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/* const mapStateToProps = (state) => ({
  email: state.wallet.email,
  id: state.wallet.id,
  expensesValueInput: state.wallet.expensesValueInput,
  descriptionInput: state.wallet.descriptionInput,
  methodInput: state.wallet.methodInput,
  tagInput: state.wallet.tagInput,
  currency: state.wallet.currency,
}); */

export default connect()(ExpensesForm);
