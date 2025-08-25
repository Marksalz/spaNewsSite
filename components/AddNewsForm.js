function BuildCreateNewsForm() {
  const div = document.createElement("div");
  div.classList.add("add_news");

  const newsForm = document.createElement("form");
  newsForm.classList.add("news_form");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.id = "title_input";
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.required = true;

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author:";
  const authorInput = document.createElement("input");
  authorInput.id = "author_input";
  authorInput.type = "text";
  authorInput.name = "author";
  authorInput.required = true;

  const imageLabel = document.createElement("label");
  imageLabel.textContent = "Image URL:";
  const imageInput = document.createElement("input");
  imageInput.id = "image_input";
  imageInput.type = "url";
  imageInput.name = "image";
  imageInput.placeholder = "https://example.com/image.jpg";

  const contentLabel = document.createElement("label");
  contentLabel.textContent = "Content:";
  const contentTextarea = document.createElement("textarea");
  contentTextarea.id = "content_text_area";
  contentTextarea.name = "content";
  contentTextarea.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit_news_btn");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";

  newsForm.appendChild(titleLabel);
  newsForm.appendChild(titleInput);

  newsForm.appendChild(authorLabel);
  newsForm.appendChild(authorInput);

  newsForm.appendChild(imageLabel);
  newsForm.appendChild(imageInput);

  newsForm.appendChild(contentLabel);
  newsForm.appendChild(contentTextarea);

  newsForm.appendChild(submitBtn);

  div.appendChild(newsForm);

  return div;
}
