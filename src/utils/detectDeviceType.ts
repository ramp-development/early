export const detectDeviceType = () => {
  // eslint-disable-next-line no-console
  console.log('detectDeviceType');

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check for mobile devices first
  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
  ) {
    // Differentiate between mobile and tablet
    if (
      /tablet|ipad/i.test(userAgent.toLowerCase()) ||
      (screen.width >= 768 && screen.height >= 768)
    ) {
      return 'Tablet';
    }
    return 'Mobile';
  }

  // Check for specific tablet user agents
  if (/tablet|ipad/i.test(userAgent.toLowerCase())) {
    return 'Tablet';
  }

  // If not mobile or tablet, assume it's desktop
  return 'Desktop';
};
