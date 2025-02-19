document.addEventListener('DOMContentLoaded', function () {
  // navbar hamburger logic
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks = document.getElementById('nav-links');

  hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // add logic for showing Business Inquiry and Careers elements when its corresponding button is clicked
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

  // custom logic for submitting form
  // document
  //   .getElementById('inquiry-form')
  //   .addEventListener('submit', function (event) {
  //     event.preventDefault(); // Prevent default form submission

  //     // Gather form data
  //     const formData = new FormData(this);
  //     const data = {
  //       firstname: formData.get('firstname'),
  //       lastname: formData.get('lastname'),
  //       email: formData.get('email'),
  //       category: formData.get('category'),
  //       subject: formData.get('subject'),
  //       message: formData.get('message'),
  //       file: formData.get('file-upload'), // File handling is optional
  //     };

  //     // Basic validation
  //     if (
  //       !data.email ||
  //       !data.firstname ||
  //       !data.lastname ||
  //       !data.subject ||
  //       !data.message ||
  //       !data.category
  //     ) {
  //       alert('Please fill in all required fields.');
  //       return;
  //     }

  //     // Format data for email or API
  //     const emailBody = `
  //     First Name: ${data.firstname}
  //     Last Name: ${data.lastname}
  //     Email: ${data.email}
  //     Category: ${data.category}
  //     Subject: ${data.subject}
  //     Message: ${data.message}
  //   `;

  //     // Simulate sending email or API request
  //     console.log('Sending the following data:');
  //     console.log(emailBody);
  //     console.log(data.file)

  //     // Optionally, you can add code here to send this to a server or an email service
  //     alert('Your inquiry has been submitted. Thank you!');

  //     // Optionally clear form
  //     this.reset();
  //   });
});
