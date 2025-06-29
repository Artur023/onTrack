import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constants.js';

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid);
}

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimeLineItemsValid(timelineItems) {
  return timelineItems.every(isTimeLineItemValid);
}
export function isTimeLineItemValid({ hour }) {
  return isHourValid(hour);
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value);
}

function isSelectOptionValid({ value, label }) {
  return ({ value, label }) => isNumber(value) && isString(label);
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
}

export function isBetween(value, start, end) {
  return value >= start && value <= end;
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNull(value) {
  return value === null;
}

export function isUndefined(value) {
  return value === undefined;
}


