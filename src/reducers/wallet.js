// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCH_EXCHANGE_CURRENCY_ERROR,
  FETCH_EXCHANGE_CURRENCY_SUCCESS,
  GET_EXCHANGE_RATES,
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
  error: null,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case SEND_EXPENSES_FORMS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload] };
  case GET_EXCHANGE_RATES:
    return {
      ...state,
      expenses: [...state.expenses, { exchangeRates: action.payload }],
    };
  case FETCH_EXCHANGE_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case FETCH_EXCHANGE_CURRENCY_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
