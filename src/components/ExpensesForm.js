import React, { Component } from 'react';

export default class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: '',
      taInput: '',
      currency: '',
    };
  }

  handleOnChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  // handleOnClick = () => {
  // console.log(this.props);
  // const { email } = this.state;
  // const { history, dispatch } = this.props;
  //  dispatch(loginEmail(email));
  /* console.log(emailDispatch(email));
        console.log(email); */
  // history.push('/carteira');
  //   };

  render() {
    const { expensesValueInput,
      descriptionInput, methodInput, taInput, currency } = this.state;
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
              <option name="currencyInput" value={ currency }>BRL</option>
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
          Adicionar despesa
          {/*    <button
            className="btn-login"
            type="button"
            onClick={ this.handleOnClick }
          /> */}
        </form>
      </div>
    );
  }
}
