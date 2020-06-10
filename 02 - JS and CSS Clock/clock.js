const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand')

const degrees = (time, interval) => ((time / interval) * 360) + 90;

const clockHands = () => {
  const now = new Date();

  let hours = now.getHours();
  if (hours > 12) hours = hours - 12;

  secondHand.style.transform = `rotate(${degrees(now.getSeconds(), 60)}deg)`;
  minuteHand.style.transform = `rotate(${degrees(now.getMinutes(), 60)}deg)`;
  hourHand.style.transform = `rotate(${degrees(hours, 12)}deg)`;
};

setInterval(clockHands, 1000);
