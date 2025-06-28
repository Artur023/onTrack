import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constants.js';

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimeLineItemsValid(timelineItems) {
  return timelineItems.every(isTimeLineItemValid);
}
export function isTimeLineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY;
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid);
}

function isSelectOptionValid({ value, label }) {
  return ({ value, label }) => typeof value === 'number' && typeof label === 'string';
}