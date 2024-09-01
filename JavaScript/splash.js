document.addEventListener('DOMContentLoaded', () => {
  let progress = 0;
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const splashScreen = document.getElementById('splashScreen');

  const interval = setInterval(() => {
    progress += 20;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Adding fade-out effect
      setTimeout(() => {
        splashScreen.classList.add('fade-out');
      }, 1000);

      // Removing splash screen after animation ends
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 2000);
    }
  }, 1000);
});
