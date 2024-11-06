import { buttons } from './buttons';
import { countdown } from './countdown';
import { ctaBanner } from './ctaBanner';
import { navigation } from './navigation';
import { sliders } from './sliders';

export const components = () => {
  // eslint-disable-next-line no-console
  console.log('components');

  countdown();
  ctaBanner();
  navigation();
  sliders();
  buttons();
};
