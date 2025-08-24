function News() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Latest News Here!";
  div.appendChild(h1);
  return div;
}
