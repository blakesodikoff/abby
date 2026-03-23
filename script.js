let unlocked = {
  club185: false,
  beach: false,
  pool: false,
  fall: false
};

function showScene(sceneId) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach(scene => scene.classList.remove("active"));

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
  const count = Object.values(unlocked).filter(value => value).length;
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
