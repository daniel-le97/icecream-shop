const productItems = [
  {
    name: "Cookie Dough",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
    price: 3,
    quantity: 0,
  },
  {
    name: "Vanilla",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Strawberry",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 2,
    quantity: 0,
  },
  ,
  {
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Chocolate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    price: 2,
    quantity: 0,
  },
  ,
  {
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
    quantity: 0,
  },
  {
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
    quantity: 0,
  },
];

// NOTE this is a button click event
function drawCart() {
  let cartTable = document.getElementById("cart");
  let template = "";
  productItems.forEach((productItem) => {
    if (productItem.quantity > 0)
      template += `<div class="row">
                  <i class="mdi mdi-delete col-3" onclick="removeItem('${productItem.name}')"></i>
                  <div class="col-3">${productItem.name}</div>
                  <div class="col-3">${productItem.quantity}x</div>
                  <div class="col-3">${productItem.price}</div>
                </div>`;
  });
  cartTable.innerHTML = template;
  drawTotal();
}
function addToCart(name) {
  let product = productItems.find((product) => product.name == name);

  product.quantity++;
  drawCart();
}

function drawTotal() {
  let total = 0;

  productItems.forEach(
    (product) => (total += product.price * product.quantity)
  );
  console.log("i got the total", total);

  document.getElementById("total").innerText = (total * 1.6).toFixed(2);
}

function purchase() {
  if (window.confirm("would you like anything else today?")) {
    productItems.forEach((product) => {
      product.quantity = 0;
    });
  }
  drawCart();
}

function removeItem(name) {
  let product = productItems.find((product) => product.name == name);

  product.quantity--;
  console.log("r u working?");
  drawCart();
}
