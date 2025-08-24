function CreateStory() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Create a new story!";
  div.appendChild(h1);
  return div;
}
