// Coloque aqui suas actions
export const INSERT_EMAIL = 'INSERT_EMAIL';

const loginEmail = (email) => ({
  type: { INSERT_EMAIL },
  email,
});

export default loginEmail;
