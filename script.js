const panels = document.querySelectorAll(".panel");
const audio = document.querySelector("audio");
function openActive() {
  audio.play();
  audio.currentTime = 0;
  
  const isOpen = this.classList.contains("open");

  panels.forEach((panel) => {
    panel.classList.remove("open");
    setTimeout(() => {
      panel.querySelector("p").textContent = panel.dataset.word.charAt(0);
    }, 700);
  });

  if (isOpen) return;

  this.classList.add("open");
  // this.classList.toggle("open", !isOpen);
  setTimeout(() => {
    this.querySelector("p").textContent = this.dataset.word;
  }, 700);
}

panels.forEach((panel) => panel.addEventListener("click", openActive));
