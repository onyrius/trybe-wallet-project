// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE_WALLET) => ({
  state,
});

export default wallet;
