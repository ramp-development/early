import { buttons } from './buttons';
import { navigation } from './navigation';
import { sliders } from './sliders';

export const components = () => {
  // eslint-disable-next-line no-console
  console.log('components');

  navigation();
  sliders();
  buttons();
};
