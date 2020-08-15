import { TAX_BANDS } from './constants';

export const calculatePostTaxIncome = (income) => {
  let earnedIncome;
  TAX_BANDS.forEach((band) => {
    if (band.min <= income && income <= band.max) {
      earnedIncome += (income - band.min) * (1 - band.rate);
    } else if (band.min <= income && income > band.max) {
      earnedIncome += (band.max - band.min) * (1 - band.rate);
    }
    return earnedIncome;
  });
};

export const scrollToRef = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};
