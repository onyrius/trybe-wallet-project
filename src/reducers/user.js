// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE_USER = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE_USER) => ({
  state,
});

export default user;
