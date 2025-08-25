const root = document.getElementById("root");
const main = document.createElement("main");
const pages = ["news", "create story"];

root.appendChild(GenNavbar(pages));
root.appendChild(main);
loadPage();

async function loadNews() {
  const localStorage = window.localStorage;
  let news = null;
  // console.log(`local storage: `, localStorage);
  if (localStorage.length === 0) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=trump`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": config.API_KEY,
          },
        }
      );
      const newsFromApi = await response.json();
      news = newsFromApi;
      // console.log(`News:`, newsFromApi);
      localStorage.setItem("news", JSON.stringify(newsFromApi));
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  } else {
    const newsData = localStorage.getItem("news");
    if (newsData) {
      news = JSON.parse(newsData);
      console.log("Loaded news from localStorage:", news);
    } else {
      console.log("No news found in localStorage.");
    }
  }
  return news;
}

async function loadPage(pageName = "news") {
  const news = await loadNews();
  const main = document.querySelector("main");
  main.innerHTML = "";
  let page;
  switch (pageName) {
    case "news":
      page = loadNewsToWindow(news);
      main.appendChild(page);
      document.title = "News";
      break;
    case "create story":
      page = CreateStory();
      main.appendChild(page);
      document.title = "Create story";
      break;
    default:
      page = loadNewsToWindow(news);
      main.appendChild(page);
      document.title = "News";
      break;
  }
}
