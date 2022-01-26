import moment from 'moment';

export const validator = {
  isRequire: (value) => (!(value !== null && value !== undefined && value.length) ? 'Field is required' : null),
  isDate: (value) => (!(value && moment(value, 'YYYY-M-D', true).isValid()) ? 'Date is invalid' : null),
};

export const validatorByName = (name) => validator[name] || (() => false);
