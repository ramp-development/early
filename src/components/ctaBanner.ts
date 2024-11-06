import { queryElement } from '$utils/queryElement';

export const ctaBanner = () => {
  // eslint-disable-next-line no-console
  console.log('ctaBanner');

  const attr = 'data-cta-banner';
  const component = queryElement<HTMLDivElement>(`[${attr}="component"]`);
  if (!component) return;

  const close = queryElement<HTMLButtonElement>(`[${attr}="close"]`, component);
  if (!close) return;

  const isHiddenToken = 'ctaBannerHidden';
  const isHidden = sessionStorage.getItem(isHiddenToken);

  if (isHidden) {
    component.style.display = 'none';
    return;
  }

  component.style.display = 'block';
  close.addEventListener('click', () => {
    component.style.display = 'none';
    sessionStorage.setItem(isHiddenToken, 'true');
  });
};
