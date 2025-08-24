const root = document.getElementById("root");
const main = document.createElement("main");
const pages = ["news", "create story"];

root.appendChild(GenNavbar(pages));
root.appendChild(main);

function loadPage(pageName = "news") {
  const main = document.querySelector("main");
  main.innerHTML = "";
  let page;
  switch (pageName) {
    case "news":
      page = News();
      main.appendChild(page);
      break;
    case "create story":
      page = CreateStory();
      main.appendChild(page);
      break;
    default:
      page = News();
      main.appendChild(page);
      break;
  }
}
