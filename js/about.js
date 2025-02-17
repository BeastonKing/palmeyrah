// accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');

    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector('.plus-icon');
    const crossIcon = question.querySelector('.cross-icon');

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      plusIcon.style.display = 'block';
      crossIcon.style.display = 'none';
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      crossIcon.style.display = 'block';
    }
  });
});

// const faqIcons = document.querySelectorAll('.faq-icon');
// faqIcons.forEach((icon) => {
//   if (icon.classList.contains('active')) {
//     icon.textContent = 'x';
//   } else {
//     icon.textContent = '+';
//   }
// });