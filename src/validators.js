import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constants.js';

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimeLineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY;
}

export function isOptionsValid(options) {
  return options.every(
    ({ value, label }) => typeof value === 'number' && typeof label === 'string',
  );
}
