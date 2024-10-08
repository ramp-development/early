import { detectDeviceType } from '$utils/detectDeviceType';
import { queryElements } from '$utils/queryElements';

export const extensions = () => {
  // eslint-disable-next-line no-console
  console.log('extensions');

  const deviceType = detectDeviceType();
  if (deviceType !== 'Desktop') return;

  const links = queryElements<HTMLAnchorElement>('a[data-extension]');
  links
    .filter((link) => !!link.dataset.extension)
    .forEach((link) => {
      const { extension } = link.dataset;
      if (!extension) return;
      link.href = extension;
    });
};
