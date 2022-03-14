import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class TableExpenses extends Component {
  render() {
    console.log(this.props);
    const { expenses } = this.props;
    const { currency, description, id, method, tag, value } = expenses;

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
          <tr>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{currency}</td>
            <td>
              {/* {valueExchanged} */}
            </td>
            <td />
            <td>BRL</td>
            <td id={ id } button={ id }>Editar/Excluir</td>
          </tr>
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
