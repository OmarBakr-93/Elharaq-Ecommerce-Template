let categoryNavList = document.querySelector(".category-nav-list");

function openCategory() {
  categoryNavList.classList.toggle("active");
}

let cart = document.querySelector(".cart");

let navLinks = document.querySelector(".nav-links");
function openMenu() {
  navLinks.classList.toggle("active");
}

function OpenCart() {
  cart.classList.toggle("active");
}

fetch('../products.json')
.then( res => res.json() )
.then( data => {
  const addToCartButton = document.querySelectorAll(".btn-add-cart");

  addToCartButton.forEach( item => {
    item.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-id");
      const selectedProduct = data.find(product => product.id == productId);
      
      addToCart(selectedProduct);

      const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);

      allMatchingButtons.forEach(btn => {
        btn.classList.add("active");
        btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in cart`;
      })
    })
})
})

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({...product, quantity: 1});
  localStorage.setItem("cart", JSON.stringify(cart));

  UpdateCart();
}

function UpdateCart() {

  // checkout items
  const checkout_items = document.getElementById("checkout-items");

  const cartItemsContainer = document.getElementById("cart-items");

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (checkout_items) {
    checkout_items.innerHTML = "";
  }


  let totalPrice = 0;
  let totalCount = 0;

  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {

    let totalPriceItem = item.price * item.quantity
    totalPrice += totalPriceItem;
    totalCount += item.quantity

    cartItemsContainer.innerHTML += `
      <div class="item-cart">
          <img src="${item.img}" alt="">
          <div class="content">
            <h4>${item.name}</h4>
            <p class="price-cart">$ ${totalPriceItem}</p>
            <div class="quantity-control">
              <button class="decrease-btn" data-index="${index}">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="increase-btn" data-index="${index}">+</button>
            </div>
          </div>
          <button class="delete-item" data-index="${index}" ><i class="fa-solid fa-trash"></i>
          </button>
      </div>
    `
      if (checkout_items) {
        checkout_items.innerHTML += `
          <div class="item-cart">
                <div class="img-name">
                  <img src="${item.img}" alt="">
                  <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price">$ ${totalPriceItem}</p></p>
                    <div class="quantity-control">
                      <button class="decrease-btn" data-index="${index}">-</button>
                      <span class="quantity">${item.quantity}</span>
                      <button class="increase-btn" data-index="${index}">+</button>
                    </div>
                  </div>
                </div>
                <button class="delete-item"><i class="fa-solid fa-trash"></i></button>
              </div>
        `
      }
  });

  const price_cart_total = document.querySelector(".price-cart-item");
  const count_item_cart = document.querySelector(".count-item-cart");
  const count_item_header = document.querySelector(".count-item-header");

  price_cart_total.innerHTML = `$ ${totalPrice}`;
  count_item_cart.innerHTML = totalCount;
  count_item_header.innerHTML = totalCount;


  if (checkout_items) {
    const Subtotal_checkout = document.querySelector(".Subtotal-checkout");
    const total_checkout = document.querySelector(".total-checkout");

    Subtotal_checkout.innerHTML = `$ ${totalPrice}`
    total_checkout.innerHTML = `$ ${totalPrice +20}`
  }

  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");

  increaseButtons.forEach(button => {
    button.addEventListener("click" , (event) =>{
        const itemIndex = event.target.getAttribute("data-index")
        increaseQuantity(itemIndex)
    })
  })

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute('data-index')
      decreaseQuantity(itemIndex);
    })
  })

  
  const deleteItemButtons = document.querySelectorAll(".delete-item");
  deleteItemButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.closest('button').getAttribute('data-index')
      removeFromCart(itemIndex)
    })
  })


}



function increaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity++;
  localStorage.setItem('cart', JSON.stringify(cart));
  UpdateCart();
}

function decreaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  UpdateCart();
}


function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const removeProduct = cart.splice(index , 1)[0];
  localStorage.setItem('cart', JSON.stringify(cart));
  UpdateCart();
  UpdateButtonsState(removeProduct.id);
}

function UpdateButtonsState(productId) {
  const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);

  allMatchingButtons.forEach(button => {
    button.classList.remove('active');
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`;
  })
}

UpdateCart();