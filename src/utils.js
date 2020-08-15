import { TAX_BANDS } from './constants';

export const calculatePostTaxIncome = (income) => {
  let earnedIncome = 0;
  TAX_BANDS.forEach((band) => {
    if (band.min <= income && income <= band.max) {
      earnedIncome += (income - band.min) * (1 - band.rate);
    } else if (band.min <= income && income > band.max) {
      earnedIncome += (band.max - band.min) * (1 - band.rate);
    }
  });
  return earnedIncome;
};

export const scrollToRef = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatMoney = (amount) => {
  const decimalCount = 0;
  const decimal = '.';
  const thousands = ',';
  const negativeSign = amount < 0 ? '-' : '';

  const i = parseInt(Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString();
  const j = (i.length > 3) ? i.length % 3 : 0;

  return `$${negativeSign}${(j ? i.substr(0, j) + thousands : '')}${i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`)}${(decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')}`;
};
