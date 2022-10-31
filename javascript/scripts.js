/* const bookmark = document.querySelector('[data-js="bookmark-button"]');

bookmark.addEventListener("click", function bookmarkButton() {
  bookmark.src = "/images/bookmark-red.png";
}); */

//character count

const charCountQuestion = document.querySelector(
  '[data-js="form__character-count-questions"]'
);
const charCountAnswer = document.querySelector(
  '[data-js="form__character-count-answers"]'
);
const textareaQuestion = document.querySelector(
  '[data-js="form__textarea-questions"]'
);
const textareaAnswer = document.querySelector(
  '[data-js="form__textarea-answers"]'
);

// submit form
const form = document.querySelector('[data-js="form__submit-question"]');
const ul = document.querySelector('[data-js="form__ul-list"]');
if (form) {
  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newCard = {
      questionFromForm: data.question,
      answerFromForm: data.answer,
      tagFromForm: data.tag,
    };

    console.log(
      newCard.questionFromForm,
      newCard.answerFromForm,
      newCard.tagFromForm
    );

    const card = document.createElement("li");
    const bookmark = document.createElement("img");
    const question = document.createElement("div");
    const answer = document.createElement("div");
    const tag = document.createElement("ul");
    const li = document.createElement("li");

    card.classList.add("question-card");
    question.classList.add("question-card__question");
    answer.classList.add("question-card__answer", "spoiler");
    tag.classList.add("tag-list");
    /* li.classList.add("tag-list"); */

    question.textContent = newCard.questionFromForm;
    answer.textContent = newCard.answerFromForm;
    li.textContent = newCard.tagFromForm;
    bookmark.innerHTML = `
    
            data-js="bookmark-button"
            class="question-card__bookmark"
            src="/images/bookmark-light.png"
            alt="bookmarks dark"
            width="50px"
            height="50px"
        
    `;

    card.append(bookmark);
    card.append(question);
    card.append(answer);
    tag.appendChild(li);
    card.append(tag);

    ul.appendChild(card);
  }
}

if (textareaQuestion) {
  textareaQuestion.addEventListener("input", (event) => {
    const value = countChar(event);
    charCountQuestion.textContent = value + " characters left";
  });
}
if (textareaAnswer) {
  textareaAnswer.addEventListener("input", (e) => {
    const value = countChar(e);
    charCountAnswer.textContent = value + " characters left";
  });
}
function countChar(e) {
  const result = 150 - e.target.value.length;
  return result;
}

//Dark-theme

const currentTheme = localStorage.getItem("theme");
const btnPosition = localStorage.getItem("btnPosition");
const switchButton = document.querySelector('[data-js="switch-btn"]');

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}
if (btnPosition == "on") {
  switchButton.classList.add("switch-on");
}
if (switchButton) {
  switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    switchButton.classList.toggle("switch-on");
    let theme = "light";
    let btnPos = "off";

    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    if (switchButton.classList.contains("switch-on")) {
      btnPos = "on";
    }
    localStorage.setItem("theme", theme);
    localStorage.setItem("btnPosition", btnPos);
  });
}
