import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class TableExpenses extends Component {
  render() {
    console.log(this.props);
    const { expenses } = this.props;
    console.log(expenses);

    return (
      <div>
        <table border="1">
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
            expenses !== []
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
                    Editar/Excluir

                  </td>
                </tr>

              ))
              : ''
          }

        </table>
      </div>
    );
  }
}
// const mapStateToProps = (state) => console.log(state.wallet.expenses);
TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object).isRequired,
    id: PropTypes.number.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(TableExpenses);
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
