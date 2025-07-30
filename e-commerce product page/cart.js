function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const name = item.name || "Unknown Product";
    const price = item.price || "0";
    const image = item.image || "https://via.placeholder.com/60";

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
    <img src="${image}" />
    <div class="cart-details">
      <strong>${name}</strong><br/>
      ₹${price}
    </div>
    <button onclick="removeItem(${index})">Remove</button>
  `;
    total += Number(price);
    cartItemsContainer.appendChild(div);
  });

  document.getElementById("total-price").innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

window.onload = loadCart;
function addToCart(name, price, image) {
  const product = {
    name: name,
    price: parseFloat(price),
    image: image,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}
if (cart.length === 0) {
  cartContainer.innerHTML = `
    <div class="empty-cart">
      <p>Your cart is empty 🛒</p>
      <a href="index.html" class="continue-btn">Continue Shopping</a>
    </div>
  `;
  checkoutBtn.style.display = "none";
  document.querySelector(".total").style.display = "none";
}
if (cart.length === 0) {
  cartContainer.innerHTML = `
    <div class="empty-cart">
      <div class="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="100" viewBox="0 0 24 24" width="100" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1.35 2.7A1 1 0 007 17h12m-2 4a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
      </div>
      <p>Your cart is empty 🛒</p>
      <a href="index.html" class="continue-btn">Continue Shopping</a>
    </div>
  `;
  checkoutBtn.style.display = "none";
  document.querySelector(".total").style.display = "none";
}
