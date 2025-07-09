const countDownDate = new Date("Aug 2, 2025 20:00:00").getTime();

const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    timer.innerHTML = "¡La fiesta comenzó!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);
