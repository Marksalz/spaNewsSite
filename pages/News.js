function loadNewsToWindow(news) {
  const articles = news["articles"];
  const newsContainer = document.createElement("section");
  newsContainer.classList.add("news_container");

  for (const article of articles) {
    const newsComponent = BuildNewsComponent();

    const news_title = newsComponent.getElementsByClassName("news_title")[0];
    news_title.textContent = article.title;

    const news_author = newsComponent.getElementsByClassName("news_author")[0];
    if (article.author === null) {
      news_author.textContent = "No author found";
    } else {
      news_author.textContent = article.author;
    }

    const news_img = newsComponent.getElementsByClassName("news_img")[0];
    news_img.src = article.urlToImage;

    newsComponent.addEventListener("click", (e) => {
      console.log(`clicked`);
      const main = document.querySelector("main");
      main.innerHTML = "";
      const newsArticle = LoadArticle(article);
      main.appendChild(newsArticle);
      document.title = article.title;
    });

    newsContainer.appendChild(newsComponent);
  }
  return newsContainer;
}
