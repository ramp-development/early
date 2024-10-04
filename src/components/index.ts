import { banner } from './banner';
import type { Selectors } from './index.d';
import { nav } from './nav';

export const components = () => {
  // eslint-disable-next-line no-console
  console.log('components');

  const ATTRS = {
    BANNER: 'data-banner',
    NAV: 'data-nav',
  };

  const SELECTORS: Selectors = {
    BANNER: {
      COMPONENT: `[${ATTRS.BANNER}="component"]`,
      CLOSE: `[${ATTRS.BANNER}="close"]`,
    },
    NAV: {
      COMPONENT: `[${ATTRS.NAV}="component"]`,
      DESKTOP: `[${ATTRS.NAV}="desktop"]`,
      MOBILE: `[${ATTRS.NAV}="mobile"]`,
      MENU: `[${ATTRS.NAV}="menu"]`,
    },
  };

  banner(SELECTORS);
  nav(SELECTORS);
};
