function CreateStory() {
  const formDiv = BuildCreateNewsForm();

  const newsForm = formDiv.getElementsByClassName("news_form")[0];
  const titleInput = newsForm.querySelector("#title_input");
  const authorInput = newsForm.querySelector("#author_input");
  const imageInput = newsForm.querySelector("#image_input");
  const contentTextarea = newsForm.querySelector("#content_text_area");
  const submitBtn = newsForm.querySelector(".submit_news_btn");
  console.log(newsForm);

  const formData = {};

  function updateFormData() {
    formData.title = titleInput.value;
    formData.author = authorInput.value;
    formData.urlToImage = imageInput.value;
    formData.content = contentTextarea.value;
  }

  titleInput.addEventListener("change", updateFormData);
  authorInput.addEventListener("change", updateFormData);
  imageInput.addEventListener("change", updateFormData);
  contentTextarea.addEventListener("change", updateFormData);

  updateFormData();

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Save formData to localStorage
    const newsData = JSON.parse(localStorage.getItem("news")) || [];

    newsData.articles.unshift(formData);
    console.log(`news data:`, newsData.articles);

    localStorage.setItem("news", JSON.stringify(newsData));

    alert("Story saved!");
  });

  return formDiv;
}
