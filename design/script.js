/*stores all the questions and the minus sign*/
const allQuestions = document.querySelectorAll(".question");
const plusIcons = document.querySelectorAll(".plus");
const minusIcons = document.querySelectorAll(".minus");
const allParas = document.querySelectorAll(".para");

/*iterates over the elements in the Minus icons and the paragraphs and hides them*/
minusIcons.forEach(minus => minus.style.display = "none");
allParas.forEach(para => para.style.display = "none");

allQuestions.forEach((question, index) => {
  const header = question.querySelector("h2");

  header.addEventListener("click", () => {
    const para = allParas[index];
    const plusIcon = plusIcons[index];
    const minusIcon = minusIcons[index];

    /* Toggles the display of the paragraph and icons */
    if (para.style.display === "none") {
      para.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    } else {
      para.style.display = "none";
      plusIcon.style.display = "inline";
      minusIcon.style.display = "none";
    }
  });
});