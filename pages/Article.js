function LoadArticle(article) {
  const newArticle = BuildArticleComponent();
  const article_img = newArticle.getElementsByClassName("article_img")[0];
  article_img.src = article.urlToImage;

  const article_title = newArticle.getElementsByClassName("article_title")[0];
  article_title.textContent = article.title;

  const article_author = newArticle.getElementsByClassName("article_author")[0];
  if (article.author === null) {
    article_author.textContent = "No author found";
  } else {
    article_author.textContent = article.author;
  }

  const article_content =
    newArticle.getElementsByClassName("article_content")[0];
  article_content.innerHTML = article.content;

  return newArticle;
}
