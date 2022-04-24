import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpensesForms, editExpensesForms } from '../actions';

export class TableExpenses extends Component {
 eraseButton = (e) => {
   const { expenses, deleteExpenses } = this.props;
   const listExpense = expenses
     .filter((expense) => Number(e.target.id) !== Number(expense.id));
   deleteExpenses(listExpense);
 };

 editButton = (e) => {
   const { expenses, editExpenses } = this.props;

   const listExpense = expenses
     .filter((expense) => Number(e.target.id) === Number(expense.id));

   editExpenses(listExpense);
 };

 render() {
   const { expenses } = this.props;
   return (
     <div className="table-container">
       <table border="1">
         <tbody border="1">
           <tr>
             <th>Descrição</th>
             <th>Tag</th>
             <th>Método de pagamento</th>
             <th>Valor</th>
             <th>Moeda</th>
             <th>Câmbio utilizado</th>
             <th>Valor convertido</th>
             <th>Moeda de conversão</th>
             <th>Editar/Excluir</th>
           </tr>
           {
             expenses.length !== 0
               ? expenses.map((expenseList) => (
                 <tr key={ expenseList.id }>
                   <td>{expenseList.description }</td>
                   <td>{expenseList.tag}</td>
                   <td>{expenseList.method}</td>
                   <td>{Number(expenseList.value).toFixed(2)}</td>
                   <td>
                     {expenseList.exchangeRates[expenseList.currency].name
                       .split('/')[0]}
                   </td>
                   <td>
                     { Number(expenseList.exchangeRates[expenseList.currency].ask)
                       .toFixed(2) }
                   </td>
                   <td>
                     { Number(expenseList.value
                      * expenseList.exchangeRates[expenseList.currency].ask).toFixed(2) }
                   </td>
                   <td>Real</td>
                   <td
                     id={ expenses.id }
                     button={ expenses.id }
                   >
                     <input
                       type="image"
                       id={ expenseList.id }
                       onClick={ this.editButton }
                       src="https://cdn-icons-png.flaticon.com/512/104/104668.png"
                       alt="imagem com a letra x branca e fundo vermelho"
                       className="row-image"
                     />
                     <input
                       type="image"
                       id={ expenseList.id }
                       onClick={ this.eraseButton }
                       src="https://www.svgrepo.com/show/79440/delete-button.svg"
                       alt="imagem com a letra x branca e fundo vermelho"
                       className="row-image"

                     />
                   </td>
                 </tr>
               ))
               : ''
           }
         </tbody>
       </table>
     </div>
   );
 }
}
TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  })).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
  editExpenses: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExpenses: (state) => dispatch(deleteExpensesForms(state)),
  editExpenses: (state) => dispatch(editExpensesForms(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
