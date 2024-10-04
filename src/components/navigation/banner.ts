import { queryElement } from '$utils/queryElement';

import type { Selectors } from './index.d';

export const banner = (SELECTORS: Selectors) => {
  // eslint-disable-next-line no-console
  console.log('banner');

  const component = queryElement<HTMLDivElement>(SELECTORS.BANNER.COMPONENT);
  if (!component) return;

  const close = queryElement<HTMLButtonElement>(SELECTORS.BANNER.CLOSE, component);
  if (!close) return;

  if (sessionStorage.getItem('bannerClosed')) {
    closeBanner(component);
    return;
  }

  close.addEventListener('click', () => closeBanner(component));

  function closeBanner(component: HTMLDivElement) {
    component.style.display = 'none';
    sessionStorage.setItem('bannerClosed', 'true');

    const bannerClosedEvent = new CustomEvent('bannerClosed');
    document.dispatchEvent(bannerClosedEvent);
  }
};
