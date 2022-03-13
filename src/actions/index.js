// Coloque aqui suas actions
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

export const FETCH_EXCHANGE_CURRENCY = 'FETCH_EXCHANGE_CURRENCY';
export const FETCH_EXCHANGE_CURRENCY_SUCCESS = 'FETCH_EXCHANGE_CURRENCY_SUCCESS';
export const FETCH_EXCHANGE_CURRENCY_ERROR = 'FETCH_EXCHANGE_CURRENCY_ERROR';
export const fetchExchangeCurrency = (payload) => ({
  type: SEND_EXPENSES_FORMS,
  payload,
});
