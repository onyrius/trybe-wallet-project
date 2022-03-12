// Esse reducer será responsável por tratar as informações da pessoa usuária

import { INSERT_EMAIL } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
};

const user = (state = INITIAL_STATE_USER, action) => {
  console.log('action', action);
  switch (action.type) {
  case INSERT_EMAIL:
    return action.email;
  default:
    return state;
  }
};

export default user;
