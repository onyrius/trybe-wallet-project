import React, { Component } from 'react';
import TableExpenses from './TableExpenses';

export default class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: 'Dinheiro',
      taInput: 'Alimentação',
      currency: '',
    };
  }

  componentDidMount() {
    console.log('oi');
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value })

 handleOnClick = () => {
   console.log('enviou forms');
 }

 render() {
   const { expensesValueInput,
     descriptionInput, methodInput, taInput, currency, id } = this.state;
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
             name="taInput"
             value={ taInput }
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
