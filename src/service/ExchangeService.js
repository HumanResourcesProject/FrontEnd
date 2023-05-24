
export const ExchangeService = async () => {
  const response = await fetch('https://api.exchangerate.host/latest?base=TRY')

  return response.json();
};
