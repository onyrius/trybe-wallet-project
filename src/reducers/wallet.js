// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY_NAME,
  /* ADD_EXPENSE_ID,
  ADD_EXPENSE_VALUE,
  ADD_EXPENSE_DESCRIPTION,
  ADD_METHOD,
  ADD_TAG,
  ADD_CURRENCY, */
  SEND_EXPENSES_FORMS,
} from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [
    {
      id: 0,
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
      currency: '',
      exchangeRates: '',
    },
  ],
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case SEND_EXPENSES_FORMS:
    return {
      ...state,
      expenses: [...state.expenses, action.state] };
  case GET_CURRENCY_NAME:
    return {
      ...state,
      currencies: [action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
