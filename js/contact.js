const inquiryButton = document.getElementById('inquiry');
const careersButton = document.getElementById('careers');

const inquiryForm = document.querySelector('.form');
const careersContent = document.querySelector('.careers-content');

inquiryButton.addEventListener('click', () => {
  careersButton.classList.remove('active');
  inquiryButton.classList.add('active');
  inquiryForm.style.display = 'block';
  careersContent.style.display = 'none';
});

careersButton.addEventListener('click', () => {
  inquiryButton.classList.remove('active');
  careersButton.classList.add('active');
  inquiryForm.style.display = 'none';
  careersContent.style.display = 'block';
});