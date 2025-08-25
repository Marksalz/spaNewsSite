function BuildNewsComponent() {
  const div = document.createElement("div");
  div.classList.add("news_card");
  const title = document.createElement("h1");
  title.classList.add("news_title");
  const author = document.createElement("h2");
  author.classList.add("news_author");
  const img = document.createElement("img");
  img.classList.add("news_img");
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(img);
  return div;
}
