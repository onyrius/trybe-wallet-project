// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [
    {
      id: 0,
      expensesValueInput: '',
      descriptionInput: '',
      methodInput: 'Dinheiro',
      taInput: 'Alimentação',
      currency: '',
      exchangeRates: {},
    },
  ],
};

const wallet = (state = INITIAL_STATE_WALLET) => ({
  state,
});

export default wallet;
