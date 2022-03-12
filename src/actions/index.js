// Coloque aqui suas actions
export const INSERT_EMAIL = 'INSERT_EMAIL';

const loginEmail = (email) => ({
  type: INSERT_EMAIL,
  email,
});
export default loginEmail;

export const ADD_EXPENSE_ID = 'ADD_EXPENSE';
export const addExpenseID = (id) => ({
  type: ADD_EXPENSE_ID,
  id,
});

export const ADD_EXPENSE_VALUE = 'ADD_EXPENSE_VALUE';
export const addExpenseValues = (expenseValues) => ({
  type: ADD_EXPENSE_ID,
  expenseValues,
});

export const ADD_EXPENSE_DESCRIPTION = 'ADD_EXPENSE_DESCRIPTION';
export const addExpenseDescription = (description) => ({
  type: ADD_EXPENSE_ID,
  description,
});

export const ADD_METHOD = 'ADD_METHOD';
export const addMethod = (method) => ({
  type: ADD_METHOD,
  method,
});

export const ADD_TAG = 'ADD_TAG';
export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
});

export const ADD_CURRENCY = 'ADD_TAG';
export const addCurrency = (currency) => ({
  type: ADD_CURRENCY,
  currency,
});

export const SEND_EXPENSES_FORMS = 'SEND_EXPENSES_FORMS';
export const sendExpensesForms = (state) => ({
  type: SEND_EXPENSES_FORMS,
  state,
});
