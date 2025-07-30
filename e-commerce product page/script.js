const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    img: "photo-1505740420928-5e560c06d30e.jpeg",
  },
  {
    id: 2,
    name: "Men's T-Shirt",
    category: "Clothing",
    price: 499,
    img: "men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg",
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 14999,
    img: "download.jpeg",
  },
  {
    id: 4,
    name: "Romantic Novel",
    category: "Books",
    price: 299,
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    id: 5,
    name: "Winter Jacket",
    category: "Clothing",
    price: 1299,
    img: "download (1).jpeg",
  },
  {
    id: 6,
    name: "Notebook Journal",
    category: "Books",
    price: 199,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    id: 7,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    img: "photo-1505740420928-5e560c06d30e.jpeg",
  },
  {
    id: 8,
    name: "Men's T-Shirt",
    category: "Clothing",
    price: 499,
    img: "men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg",
  },
  {
    id: 9,
    name: "Smartphone",
    category: "Electronics",
    price: 14999,
    img: "download.jpeg",
  },
  {
    id: 10,
    name: "Romantic Novel",
    category: "Books",
    price: 299,
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    id: 11,
    name: "Winter Jacket",
    category: "Clothing",
    price: 1299,
    img: "download (1).jpeg",
  },
  {
    id: 12,
    name: "Notebook Journal",
    category: "Books",
    price: 199,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(filterCats = [], sort = "default") {
  let filtered = [...products];

  if (filterCats.length > 0) {
    filtered = filtered.filter((p) => filterCats.includes(p.category));
  }

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  const container = document.getElementById("products");
  container.innerHTML = "";

  filtered.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}" />
      <h4>${prod.name}</h4>
      <p>₹${prod.price}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-count").innerText = cart.length;
  alert("Added to cart!");
}

document.querySelectorAll(".filter").forEach((chk) => {
  chk.addEventListener("change", () => {
    const filters = Array.from(
      document.querySelectorAll(".filter:checked")
    ).map((f) => f.value);
    const sort = document.getElementById("sort").value;
    renderProducts(filters, sort);
  });
});

document.getElementById("sort").addEventListener("change", () => {
  const filters = Array.from(document.querySelectorAll(".filter:checked")).map(
    (f) => f.value
  );
  const sort = document.getElementById("sort").value;
  renderProducts(filters, sort);
});

if (document.getElementById("cart-count")) {
  document.getElementById("cart-count").innerText = cart.length;
}

renderProducts();
