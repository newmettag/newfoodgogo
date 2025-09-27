function addToCart(name, price, restaurant) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let image = event.target.closest('.dish').querySelector('img').src;
  cart.push({ name, price, restaurant, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function addToCart(name, price, restaurant) {
  let dish = event.target.closest('.dish');
  let image = dish.querySelector('.dish__image').src;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, restaurant, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let badge = document.getElementById('cart-count');
  if (cart.length > 0) {
    badge.style.display = 'inline-block';
    badge.textContent = cart.length;
  } else {
    badge.style.display = 'none';
  }
}
window.onload = updateCartCount;

document.getElementById('search').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let dishes = document.querySelectorAll('.dish');
  dishes.forEach(dish => {
    let name = dish.querySelector('.dish__title').textContent.toLowerCase();
    dish.style.display = name.includes(query) ? 'block' : 'none';
  });
});
function updateCartIndicator() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  let indicator = document.getElementById('cartCount');

  if (count > 0) {
    indicator.style.display = "inline-block";
    indicator.textContent = count;
  } else {
    indicator.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", updateCartIndicator);