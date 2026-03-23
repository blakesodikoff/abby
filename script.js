let unlocked = {
  club185: false,
  beach: false,
  pool: false,
  fall: false
};

function showScene(sceneId) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach((scene) => scene.classList.remove("active"));

  const nextScene = document.getElementById(sceneId);
  if (nextScene) {
    nextScene.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  trackMemory(sceneId);
}

function trackMemory(sceneId) {
  if (sceneId === "scene-club185") unlocked.club185 = true;
  if (sceneId === "scene-beach") unlocked.beach = true;
  if (sceneId === "scene-pool") unlocked.pool = true;
  if (sceneId === "scene-fall") unlocked.fall = true;

  updateCounter();
}

function updateCounter() {
  const count = Object.values(unlocked).filter((value) => value).length;
  const counter = document.getElementById("memory-counter");

  if (counter) {
    counter.textContent = `Memories unlocked: ${count} / 4`;
  }

  if (count === 4) {
    unlockSpecialEnding();
  }
}

function unlockSpecialEnding() {
  const trueEnding = document.getElementById("true-ending");
  if (trueEnding) {
    trueEnding.style.display = "block";
  }
}
const introMessage = "It is your birthday. A tiny world has opened just for you. It is full of cozy magic, strange choices, sweet memories, and a Goose who is very obviously in love with you.";

function typeWriter(elementId, text, speed = 25) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

window.onload = () => {
  typeWriter("intro-text", introMessage);
};


document.addEventListener("click", function (e) {
  createHeart(e.clientX, e.clientY);
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}
