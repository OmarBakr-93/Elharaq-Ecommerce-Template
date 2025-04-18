fetch('../products.json')
.then( res => res.json() )
.then( data => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const swiper_item_sale = document.getElementById('swiper_item_sale');

  const swiper_electronic = document.getElementById('swiper_electronic');

  const swiper_appliances = document.getElementById('swiper_appliances');

  const swiper_mobile = document.getElementById('swiper_mobile');


  data.forEach( product => {
    if(product.old_price){
      const isInCart = cart.some(CartItem => CartItem.id === product.id);
      const percent_sale = Math.floor((product.old_price - product.price) / product.old_price * 100);
      swiper_item_sale.innerHTML += `
        <div class="swiper-slide product">
              <span class="sale-percent">${percent_sale}%</span>
              <div class="img-product">
                <a href="#"><img src="${product.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-product"><a href="#">${product.name}</a></p>
              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old-price"><span>$${product.old_price}</span></p>
              </div>
              <div class="icons">
                <span class="btn-add-cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'add to cart'}
                </span>
                <span class="icon-product">
                  <i class="fa-regular fa-heart"></i>
                </span>  
              </div>
            </div>
      `;
  }
  });

  data.forEach( product => {
    if(product.category == 'electronics'){
      const isInCart = cart.some(CartItem => CartItem.id === product.id);
      const old_price_p = product.old_price ? `<p class="old-price"><span>$${product.old_price}</span></p>` : '';

      const percent_discount_div = product.old_price ? `<span class="sale-percent">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : '';


      swiper_electronic.innerHTML += `
        <div class="swiper-slide product">
              ${percent_discount_div}
              <div class="img-product">
                <a href="#"><img src="${product.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-product"><a href="#">${product.name}</a></p>
              <div class="price">
                <p><span>$${product.price}</span></p>
                ${old_price_p}
              </div>
              <div class="icons">
                <span class="btn-add-cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'add to cart'}
                </span>
                <span class="icon-product">
                  <i class="fa-regular fa-heart"></i>
                </span>  
              </div>
            </div>
      `;

    }
  });


  data.forEach( product => {
    if(product.category == 'appliances'){
      const isInCart = cart.some(CartItem => CartItem.id === product.id);

      const old_price_p = product.old_price ? `<p class="old-price"><span>$${product.old_price}</span></p>` : '';

      const percent_discount_div = product.old_price ? `<span class="sale-percent">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : '';


      swiper_appliances.innerHTML += `
        <div class="swiper-slide product">
              ${percent_discount_div}
              <div class="img-product">
                <a href="#"><img src="${product.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-product"><a href="#">${product.name}</a></p>
              <div class="price">
                <p><span>$${product.price}</span></p>
                ${old_price_p}
              </div>
              <div class="icons">
                <span class="btn-add-cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'add to cart'}
                </span>
                <span class="icon-product">
                  <i class="fa-regular fa-heart"></i>
                </span>  
              </div>
            </div>
      `;

    }
  });


  data.forEach( product => {
    if(product.category == 'mobiles'){

      const isInCart = cart.some(CartItem => CartItem.id === product.id);

      const old_price_p = product.old_price ? `<p class="old-price"><span>$${product.old_price}</span></p>` : '';

      const percent_discount_div = product.old_price ? `<span class="sale-percent">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : '';


      swiper_mobile.innerHTML += `
        <div class="swiper-slide product">
              ${percent_discount_div}
              <div class="img-product">
                <a href="#"><img src="${product.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-product"><a href="#">${product.name}</a></p>
              <div class="price">
                <p><span>$${product.price}</span></p>
                ${old_price_p}
              </div>
              <div class="icons">
                <span class="btn-add-cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'add to cart'}
                </span>
                <span class="icon-product">
                  <i class="fa-regular fa-heart"></i>
                </span>  
              </div>
            </div>
      `;

    }
  });

});
