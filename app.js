const iceCreams = [
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
];

const vessels = [
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

const toppings = [
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
];

let products = {
  iceCreams: [],
  toppings: [],
  vessels: [],
};

let toppingsTable = document.getElementById("toppingsTable");
let iceCreamTable = document.getElementById("iceCreamTable");
let vesselsTable = document.getElementById("vesselsTable");

// NOTE this is a button click event
function addToCart(name) {
  let iceCreamsProducts = iceCreams.find(
    (iceCreamsProduct) => iceCreamsProduct.name == name
  );

  let VesselProduct = vessels.find(
    (vesselProduct) => vesselProduct.name == name
  );
  if (iceCreamsProducts) {
    iceCreamsProducts.quantity++;

    console.log("button clicked nice", iceCreamsProducts);
  }
  if (VesselProduct){
    VesselProduct.quantity++
  }
    drawCart();
  
}
// NOTE addToCart will be passing through this function to draw them to the screen
function drawCart() {
  let cartTable = document.getElementById("cart");
  let template = "";

  iceCreams.forEach((iceCream) => {
    if (iceCream.quantity > 0) {
      template += `<div class="row">
                  <i class="mdi mdi-delete col-3" onclick="removeItem('${iceCream.name}')"></i>
                  <div class="col-3">${iceCream.name}</div>
                  <div class="col-3">${iceCream.quantity}x</div>
                  <div class="col-3">${iceCream.price}</div>
                </div>`;
    }
  });
  cartTable.innerHTML = template;
  drawTotal();
}

function drawTotal() {
  let total = 0;

  iceCreams.forEach(
    (iceCream) => (total += iceCream.price * iceCream.quantity)
  );
  console.log("i got the total", total);

  document.getElementById("total").innerText = (total * 1.6).toFixed(2);
}

function purchase() {
  if (window.confirm("would you like anything else today?")) {
    iceCreams.forEach((iceCream) => {
      iceCream.quantity = 0;
    });
  }
  drawCart();
}

function removeItem(name) {
  let iceCream = iceCreams.find((iceCream) => iceCream.name == name);

  if (iceCream) {
    iceCream.quantity--;
    console.log("r u working?");
    drawCart();
  }
}
