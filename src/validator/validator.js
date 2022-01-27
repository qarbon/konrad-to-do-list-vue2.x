import moment from 'moment';

export const validator = {
  isRequire: (value) => (!(value !== null && value !== undefined && value.length) ? 'Field is required' : null),
  isStringMax100: (value) => validator.isRequire(value) || (value.length >= 100 ? 'Title is too long (max 100)' : null),
  isDate: (value) => (!(value && moment(value, 'YYYY-M-D', true).isValid()) ? 'Date is invalid' : null),
  isTodayOrAfter: (value) => validator.isDate(value) || (moment(value).isBefore(moment().subtract(1, 'day')) ? 'Date cannot be from the past' : null),
};

export const validatorByName = (name) => validator[name] || (() => false);
