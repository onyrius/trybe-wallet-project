// Coloque aqui suas actions
export const INSERT_EMAIL = 'INSERT_EMAIL';

//-----------------------------------------------------
// ------------Login-----------------------------------
const loginEmail = (email) => ({
  type: INSERT_EMAIL,
  email,
});
export default loginEmail;
//-----------------------------------------------------
// ------------Wallet----------------------------------
export const SEND_EXPENSES_FORMS = 'SEND_EXPENSES_FORMS';
export const sendExpensesForms = (state) => ({
  type: SEND_EXPENSES_FORMS,
  state,
});
