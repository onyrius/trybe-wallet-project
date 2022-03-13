// Coloque aqui suas actions
import apiExchange from '../services/apiExchange';

export const INSERT_EMAIL = 'INSERT_EMAIL';

// ------------Login-----------------------------------
const loginEmail = (email) => ({
  type: INSERT_EMAIL,
  email,
});
export default loginEmail;

// ------------Wallet----------------------------------
export const SEND_EXPENSES_FORMS = 'SEND_EXPENSES_FORMS';
export const sendExpensesForms = (payload) => ({
  type: SEND_EXPENSES_FORMS,
  payload,
});

/* export const GET_CURRENCY_NAME = 'GET_CURRENCY_NAME';
export const getCurrencyName = (objJson) => ({
  type: GET_CURRENCY_NAME,
  payload: Object.keys(objJson),
}); */
export const FETCH_EXCHANGE_CURRENCY = 'FETCH_EXCHANGE_CURRENCY';
export const FETCH_EXCHANGE_CURRENCY_SUCCESS = 'FETCH_EXCHANGE_CURRENCY_SUCCESS';
export const FETCH_EXCHANGE_CURRENCY_ERROR = 'FETCH_EXCHANGE_CURRENCY_ERROR';

export const fetchExchangeCurrencyError = (payload) => ({
  type: FETCH_EXCHANGE_CURRENCY_ERROR,
  payload,
});

export const fetchExchangeCurrencySuccess = (objJson) => ({
  type: FETCH_EXCHANGE_CURRENCY_SUCCESS,
  payload: Object.keys(objJson),
});

/* export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const getExchangeRates = (payload) => ({
  type: GET_EXCHANGE_RATES,
  payload,
});
 */
export const fetchExchangeCurrencyThunk = () => (dispatch) => {
  apiExchange()
    .then((response) => (dispatch(fetchExchangeCurrencySuccess(response))))
    .catch((error) => {
      dispatch(dispatch(fetchExchangeCurrencyError(error)));
    });
};
