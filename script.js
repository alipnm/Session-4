const rootElement = document.getElementById("root");
const cartContainerElement = document.getElementById("cart");
const products = [
  {
    id: 1,
    imgUrl:
      "https://www.paytakhteketab.com/wp-content/uploads/2014/11/riazi-6-j1-morshed-mobtakeran-min.jpg",
    title: "Morshed Book 6th grade",
    price: 1000000,
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDwoZLvXJ_zcsln8FC3txNuawxPprin1wowBZGuGyBw&s",
    title: "Complex Book 6th grade",
    price: 1350000,
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiYolwt0DipUqbwtrNQJImy6lQQYN5RrorRkqnPMaaQ&s=10",
    title: "Panoramic Book",
    price: 1200000,
  },
  {
    id: 4,
    imgUrl: "https://adosphere.hachettefle.fr/covers/adosphere-2.jpg",
    title: "Adosphere 2",
    price: 1500000,
  },
];
const cardsElement = document.createElement("div");
rootElement.append(cardsElement);
let cart = [];
const productsElements = products.map(
  (p) =>
    `<div class="card">
      <h2>${p.title}</h2>
      <img src=${p.imgUrl} />
      <span>price: ${p.price}</span>
      <div class="buttons">
        <button onclick="addToCart(${p.id})">Add to cart</button>
        <button>More details</button>
      </div>
  </div>`,
);
productsElements.forEach((p) => {
  rootElement.innerHTML += p;
});

let showCart = () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let result = cart
    .map(
      (p) => `
    <div class="product">
      <h2>${p.title}</h2>
      <span>Count: ${p.count}</span>
      <span>Price to pay: ${p.count * p.price}</span>
    </div>
    `,
    )
    .join("");
  let altogether = 0;
  cart.forEach((p) => {
    let price = p.price * p.count;
    altogether += price;
  });
  result += `<h1>Altogether: ${altogether}</h1>`;
  cartContainerElement.innerHTML = result;
};

let addToCart = (pid) => {
  const product = products.find((product) => product.id === pid);
  const cartSearchResult = cart.findIndex((p) => p.productId === product.id);

  if (cartSearchResult === -1) {
    const newProduct = {
      id: Date.now(),
      productId: pid,
      title: product.title,
      price: product.price,
      count: 1,
    };
    cart.push(newProduct);
  } else {
    cart[cartSearchResult].count++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
};

showCart();
