function addToCart(name, price, restaurant) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let image = event.target.closest('.dish').querySelector('img').src;
  cart.push({ name, price, restaurant, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}