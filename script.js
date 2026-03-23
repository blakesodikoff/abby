function showScene(sceneId) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach(scene => scene.classList.remove("active"));

  const nextScene = document.getElementById(sceneId);
  if (nextScene) {
    nextScene.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}