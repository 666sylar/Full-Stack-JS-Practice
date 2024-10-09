/*
За допомогою API https://fakestoreapi.com/ зробити запит за 20 продуктами, отримати дані (результат запиту - масив) і динамічно створити 20 карточок товару однакового вигляду з наступними обов’язковими полями:
- Картинка
- Назва
- Ціна
- Рейтинг (просто цифрою і поряд іконка зірочки)

Стиль карточок має бути однаковим, розміри теж (візуальне оформлення - на власний смак).
*/

const LIMIT = 20;

async function fetchProducts() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${LIMIT}`);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.querySelector("div");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${product.price}`;

    const rating = document.createElement("div");
    rating.classList.add("rating");
    rating.textContent = product.rating.rate;

    const star = document.createElement("i");
    star.classList.add("fa");
    star.classList.add("fa-star");

    rating.append(star);
    card.append(image, title, price, rating);

    productsContainer.append(card);
  });
}

fetchProducts();
