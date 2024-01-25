const coffeeItems = document.querySelectorAll('.coffee-item');
const totalAmountElement = document.getElementById('total-amount');

coffeeItems.forEach(item => {
  const addButton = item.querySelector('.add-button');
  const subtractButton = item.querySelector('.subtract-button');
  const quantityElement = item.querySelector('.quantity');

  let quantity = 0;

  addButton.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });

  subtractButton.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });

  function updateTotal() {
    let totalAmount = 0;
    coffeeItems.forEach(item => {
      const itemQuantity = item.querySelector('.quantity').textContent;
      totalAmount += itemQuantity * item.getAttribute('data-price');
    });
    totalAmountElement.textContent = totalAmount;
  }
});


