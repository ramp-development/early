import { queryElement } from '$utils/queryElement';

export const countdown = () => {
  // eslint-disable-next-line no-console
  console.log('countdown');

  const attr = 'data-countdown';
  const component = queryElement<HTMLDivElement>(`[${attr}="component"]`);
  if (!component) return;

  const { countdownDate } = component.dataset;
  const hours = queryElement<HTMLDivElement>(`[${attr}="hours"]`, component);
  const minutes = queryElement<HTMLDivElement>(`[${attr}="minutes"]`, component);
  const seconds = queryElement<HTMLDivElement>(`[${attr}="seconds"]`, component);

  console.log(component, countdownDate, hours, minutes, seconds);

  if (!countdownDate || !hours || !minutes || !seconds) return;

  const targetDate = new Date(countdownDate).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      clearInterval(timerInterval);
      return;
    }

    const hrs = Math.floor(timeRemaining / (1000 * 60 * 60));
    const mins = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const secs = Math.floor((timeRemaining / 1000) % 60);

    hours.textContent = hrs.toString().padStart(2, '0');
    minutes.textContent = mins.toString().padStart(2, '0');
    seconds.textContent = secs.toString().padStart(2, '0');
  };

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
};
