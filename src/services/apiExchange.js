const apiExchange = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const exchangesRequest = await fetch(URL);
  const exchangesResponseJSON = await exchangesRequest.json();
  // console.log('****exchangesResponseJSON', exchangesResponseJSON);
  return exchangesResponseJSON;
};

export default apiExchange;
