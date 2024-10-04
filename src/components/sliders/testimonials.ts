import Splide from '@splidejs/splide';

import { queryElement } from '$utils/queryElement';

export const testimonials = () => {
  // eslint-disable-next-line no-console
  console.log('testimonials');

  const component = queryElement<HTMLDivElement>('.testimonial-slider_component');
  if (!component) return;

  const slider = new Splide(component, {
    type: 'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
  });

  slider.mount();
};
