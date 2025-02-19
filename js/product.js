document.addEventListener('DOMContentLoaded', function () {
  // navbar hamburger logic
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks = document.getElementById('nav-links');

  hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // Quantity logic
  const productCards = document.querySelectorAll('.product-card');

  // get all cards, get its buttons, and put add/minus logic into it, display the result
  productCards.forEach((card) => {
    const minusButton = card.querySelector('.minus-button');
    const plusButton = card.querySelector('.plus-button');
    const quantityDisplay = card.querySelector('.quantity-display');
    let quantity = 0; // Initialize quantity for each product card

    minusButton.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });

    plusButton.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  });

  // More Info logic

  // get all more info buttons
  const moreInfoButtons = document.querySelectorAll('.more-info');
  // get all less info buttons
  const lessInfoButtons = document.querySelectorAll('.less-info');

  // add logic to all more buttons
  // if more button is clicked =>
      // 1. show the .right div
      // 2. hide the more button
      // 3. show the less button
  moreInfoButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productCard = button.closest('.product-card');
      const rightDiv = productCard.querySelector('.right');

      rightDiv.style.display = 'block';

      button.style.display = 'none';
      const lessButton = productCard.querySelector('.less-info');
      lessButton.style.display = 'inline';
    });
  });

  // do similar logic for less buttons, just the other way around
  lessInfoButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productCard = button.closest('.product-card');
      const rightDiv = productCard.querySelector('.right');

      rightDiv.style.display = 'none';

      button.style.display = 'none';
      const moreButton = productCard.querySelector('.more-info');
      moreButton.style.display = 'inline';
    });
  });

  // hides all less info buttons initially
  lessInfoButtons.forEach((button) => (button.style.display = 'none'));
});
