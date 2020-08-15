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

export const YEARLY_RETURNS_TITLE = 'Expected yearly returns';
export const YEARLY_RETURNS_INFO = 'Over the last 40 years, super has returned an average of 10.4% per year, or 6.2% adjusted for CPI';
export const CONTRIBUTIONS_TITLE = 'Super contribtuions';
export const CONTRIBUTIONS_INFO = 'Currently your employer is required to contribute at least 9.5% of your salary to your super. If you are able to make larger contributions you can greatly increase your super!\n\nNote that if you contribute more than $25,000/year you will not get the same tax benefits on the full amount.';
