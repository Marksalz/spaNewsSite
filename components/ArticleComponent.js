function BuildArticleComponent() {
  const div = document.createElement("div");
  div.classList.add("article");
  const img = document.createElement("img");
  img.classList.add("article_img");
  const title = document.createElement("h1");
  title.classList.add("article_title");
  const author = document.createElement("h2");
  author.classList.add("article_author");
  const content = document.createElement("p");
  content.classList.add("article_content");
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(content);
  return div;
}
