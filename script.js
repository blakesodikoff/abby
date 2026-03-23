let unlocked = {
  club185: false,
  beach: false,
  pool: false,
  fall: false,
  cubsreds: false,
  wedding: false,
  halloween: false,
  skating: false,
  jade: false,
  whiskersescape: false,
  fireworks: false,
  wisdom: false
};

const introMessage =
  "It is your birthday. A tiny world has opened just for you. It is full of cozy magic, strange choices, sweet memories, and a Goose who is very obviously in love with you.";

const endingMessage =
  "Happy 23rd Birthday, Chicken. This whole little world was just a way of saying I love you.";

const gooseLines = [
  "Goose is proud of this decision.",
  "This feels like something Chicken would do.",
  "Mr. Whiskers is silently judging.",
  "This path feels correct.",
  "Goose approves.",
  "This is getting suspiciously romantic.",
  "Dr. Pepper energy remains strong.",
  "You are doing amazing, birthday girl."
];

function showScene(sceneId, event) {
  if (event) {
    createHeart(event.clientX, event.clientY);
  }

  const scenes = document.querySelectorAll(".scene");
  scenes.forEach((scene) => scene.classList.remove("active"));

  const nextScene = document.getElementById(sceneId);
  if (nextScene) {
    nextScene.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  trackMemory(sceneId);

  if (sceneId === "scene-ending") {
    typeWriter("ending-text", endingMessage, 28);
  }
}

function trackMemory(sceneId) {
  if (sceneId === "scene-club185") unlocked.club185 = true;
  if (sceneId === "scene-beach") unlocked.beach = true;
  if (sceneId === "scene-pool") unlocked.pool = true;
  if (sceneId === "scene-fall") unlocked.fall = true;
  if (sceneId === "scene-cubsreds") unlocked.cubsreds = true;
  if (sceneId === "scene-wedding") unlocked.wedding = true;
  if (sceneId === "scene-halloween") unlocked.halloween = true;
  if (sceneId === "scene-skating") unlocked.skating = true;
  if (sceneId === "scene-jade") unlocked.jade = true;
  if (sceneId === "scene-whiskersescape") unlocked.whiskersescape = true;
  if (sceneId === "scene-fireworks") unlocked.fireworks = true;
  if (sceneId === "scene-wisdom") unlocked.wisdom = true;

  updateCounter();
}

function updateCounter() {
  const count = Object.values(unlocked).filter((value) => value).length;
  const counter = document.getElementById("memory-counter");

  if (counter) {
    counter.textContent = `Memories unlocked: ${count} / 12`;
  }

  if (count === 12) {
    unlockSpecialEnding();
  }
}

function unlockSpecialEnding() {
  const trueEnding = document.getElementById("true-ending");
  if (trueEnding) {
    trueEnding.style.display = "block";
  }
}

function typeWriter(elementId, text, speed = 25) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

function showRandomLine(event) {
  if (event) {
    createHeart(event.clientX, event.clientY);
  }

  const line = gooseLines[Math.floor(Math.random() * gooseLines.length)];
  const lineBox = document.getElementById("goose-line");

  if (lineBox) {
    lineBox.textContent = line;
  }
}

function mrWhiskersMessage(event) {
  if (event) {
    createHeart(event.clientX, event.clientY);
  }

  const lineBox = document.getElementById("goose-line");
  if (lineBox) {
    lineBox.textContent = "Mr. Whiskers has decided this website is acceptable.";
  }
}

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 900);
}

window.onload = () => {
  typeWriter("intro-text", introMessage, 24);
  updateCounter();
};
