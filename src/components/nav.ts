import { queryElement } from '$utils/queryElement';

import type { Selectors } from './index.d';

export const nav = (SELECTORS: Selectors) => {
  // eslint-disable-next-line no-console
  console.log('nav');

  navMenuMaxHeight();
  window.addEventListener('resize', () => navMenuMaxHeight());
  document.addEventListener('bannerClosed', () => navMenuMaxHeight());

  function navMenuMaxHeight() {
    const nav = queryElement<HTMLDivElement>(SELECTORS.NAV.COMPONENT);
    if (!nav) return;

    const mobileNav = queryElement<HTMLDivElement>(SELECTORS.NAV.MOBILE, nav),
      banner = queryElement<HTMLDivElement>(SELECTORS.BANNER.COMPONENT);
    if (!mobileNav || !banner) return;

    const navMenu = queryElement<HTMLDivElement>(SELECTORS.NAV.MENU, mobileNav);
    if (!navMenu) return;

    navMenu.style.maxHeight = `${window.innerHeight - nav.offsetHeight - banner.offsetHeight}px`;
  }
};
