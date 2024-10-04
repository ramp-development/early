import Splide from '@splidejs/splide';

import { queryElement } from '$utils/queryElement';

export const banners = () => {
  // eslint-disable-next-line no-console
  console.log('banners');

  const component = queryElement<HTMLDivElement>('.banner-slider_component');
  if (!component) return;

  console.log(component);

  const slider = new Splide(component, {
    type: 'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
  });

  slider.mount();
};