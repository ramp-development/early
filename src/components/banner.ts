import { queryElement } from '$utils/queryElement';

export const banner = () => {
  // eslint-disable-next-line no-console
  console.log('banner');

  const attr = 'data-banner';
  const component = queryElement<HTMLDivElement>(`[${attr}="component"]`);
  if (!component) return;

  const close = queryElement<HTMLButtonElement>(`[${attr}="close"]`, component);
  if (!close) return;

  if (localStorage.getItem('bannerClosed')) {
    closeBanner(component);
    return;
  }

  close.addEventListener('click', () => closeBanner(component));

  function closeBanner(component: HTMLDivElement) {
    component.style.display = 'none';
    localStorage.setItem('bannerClosed', 'true');
  }
};
