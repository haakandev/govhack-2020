export const TAX_BANDS = [{
  min: 0,
  max: 18200,
  rate: 0,
}, {
  min: 18201,
  max: 37000,
  rate: 0.19,
}, {
  min: 37001,
  max: 87000,
  rate: 0.325,
}, {
  min: 87001,
  max: 180000,
  rate: 0.37,
}, {
  min: 180001,
  max: Infinity,
  rate: 0.45,
}];

export const YEARLY_RETURNS_TOOLTIP = {
  title: 'Expected yearly returns',
  text: 'Over the last 40 years, super has returned an average of 10.4% per year, or 6.2% adjusted for CPI',
  sources: ['2'],
};
export const CONTRIBUTIONS_TOOLTIP = {
  title: 'Super contribtuions',
  text: `Currently your employer is required to contribute at least 9.5% of your salary to your super. If you are able to make larger contributions you can greatly increase your super!${'\n\n'}Note that if you contribute more than $25,000/year you will not get the same tax benefits on the full amount.`,
  sources: ['5'],
};
export const SALARY_TOOLTIP = {
  title: 'Typical salary',
  text: 'The average salary in Australia 2018 was $61,450. The median was $51,126.',
  sources: ['1'],
};
export const YEARS_OF_WORK_TOOLTIP = (income, postTaxIncome) => ({
  title: 'How did we calculate this',
  text: `With an income of ${income}, you would have ${postTaxIncome} left after tax (based on 2018 tax data). With that we calculated how many years it would take to earn the amount lost by withdrawing super early.`,
  sources: ['3'],
});
export const COFFEE_CUPS_TOOLTIP = {
  title: 'Australia loves coffee',
  text: 'A cup of coffee in Australia costs about $4. That\'s a lot of coffee.',
  sources: ['4'],
};
