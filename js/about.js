document.addEventListener('DOMContentLoaded', function () {
  // navbar hamburger logic
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks = document.getElementById('nav-links');

  hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // accordion for faq
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
});
