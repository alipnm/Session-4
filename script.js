const rootElement = document.getElementById("root");
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
    price: "1350000",
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiYolwt0DipUqbwtrNQJImy6lQQYN5RrorRkqnPMaaQ&s=10",
    title: "Panoramic Book",
    price: 900000,
  },
];
let cart = [];
const productsElements = products.map(
  (p) =>
    `<div class="card">
      <h2>${p.title}</h2>
      <img src=${p.imgUrl} />
      <span>price: ${p.price}</span>
      <button onclick="addToCart(${p.id})">Add to cart</button>
      <button>More details</button>
  </div>`,
);
productsElements.forEach((p) => {
  rootElement.innerHTML += p;
});

let addToCart = (pid) => {
  const product = products.find((product) => product.id == p.id);
  const cartSearchResult = cart.findIndex((p) => p.productId === product.id);

  if (cartSearchResult !== -1) {
    const newProduct = {
      id: Date.now(),
      productId: pid,
    };
    cart.push(newProduct);
  } else {
  }
};
