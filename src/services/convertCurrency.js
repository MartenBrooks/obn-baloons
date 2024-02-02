export function convertCurrency(amount) {
  if (isNaN(Number(amount))) throw new Error('NaN passed to convert currency');

  return `${amount} ₽`;
}
