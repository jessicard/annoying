window.addEventListener("DOMContentLoaded", (event) => {

  const cancelWindow = document.getElementById("cancel-window");

  const windowWidth = window.innerWidth - cancelWindow.offsetWidth;
  const windowHeight = window.innerHeight - cancelWindow.offsetHeight;

  const cancelButton = document.getElementById("cancel-btn");
  const countdownEl = document.getElementById("countdown");

  cancelButton.addEventListener("mouseenter", e => {
    if (parseInt(countdownEl.innerText) > 0) {
      cancelWindow.style.left = (Math.random() * windowWidth) + "px";
      cancelWindow.style.top = (Math.random() * windowHeight) + "px";
    }
  });

  function countdown() {
    let currentCount = parseInt(countdownEl.innerText);
    if (currentCount > 0) {
      countdownEl.innerText = parseInt(countdownEl.innerText) - 1;
    } else {
      clearInterval(countdownInterval);
      cancelButton.remove();
      document.getElementById("message").innerText = "just kidding :)";
    }
  };

  let countdownInterval = setInterval(countdown, 1000);
});
