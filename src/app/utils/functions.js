
export function secondsToTime(seconds) {
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;

  return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}