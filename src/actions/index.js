// Coloque aqui suas actions
export const INSERT_EMAIL = 'INSERT_EMAIL';

const loginEmail = (email) => ({
  email,
  type: { INSERT_EMAIL },
});

export default loginEmail;
