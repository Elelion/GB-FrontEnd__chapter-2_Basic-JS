'use strict'

const cart = [];

const cartFill = (index, title, deal, price) => {
  if (cart.length === 0) {
    cartCreate(index, title, deal, price);
  } else {
    console.log('index: ' + index);


    // TODO: не доделал добавление товара если он уже есть в корзине
    cartCreate(index, title, deal, price);
  }
    // for (let i = 0; i <= index; i++) {
    //   for (let j = 0; j <= i; j++) {
    //     if (cart[i].id === cart[j].id) {
    //     if (cart[i].id === index) {
    //       console.log('i+ : ' + i)
    //       break;
    //     } else {
    //       console.log('i- : ' + i)
    //       break;
    //     }
    //   }
    // }
    //
    // for (let i = 0; i <= index; i++) {
    //   console.log('i: ' + i);
    //
    //   console.log(cart[i].id)
    //   console.log(cart[index].id)
    //   if (i === index) {
    //     if (Number(cart[i].id) === Number(cart[index].id)) {
    //       console.log('true');
    //     }
    //     console.log('catch');
    //   }
    // }
  // }

  console.log(cart);
  // console.log('index: ' + index);
}

const cartAdd = (index) => {
  console.log(cart[index]);
  //return cart[index].deal += 1;
}

function cartRenderAdd(id, title, deal, price, summary) {
  cartTable.insertAdjacentHTML('afterbegin', `
      <tr style="border-bottom: 1px solid #595959; height: 40px; text-align: center;">
        <td>id: ${id}</td>
        <td>${title}</td>
        <td>${deal}</td>
        <td>${price} $</td>
        <td>${summary} $</td>
      </tr>
    `);
}

const cartCreate = (index, title, deal, price) => {
  cartRenderAdd(index, title, deal, price, price * deal)

  return cart.push({
    id: index,
    title: title,
    deal: deal,
    price: price,
    summary: price * deal,
  });
}

const cartSummary = () => {
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i].summary);
  }

  return sum;
}


/**/


let buttonAddProduct = document.querySelectorAll('button');
let productTitles = document.querySelectorAll('.products__title');
let productPrices = document.querySelectorAll('.products__price');
let cartDeal = document.querySelector('.header__cart-amount');
let cartButton = document.querySelector('.header__cart');
let cartContent = document.querySelector('.header__cart-content');

cartContent.style.cssText = `
  position: absolute;
  top: 75px;
  right: 75px;
  display: none;
  z-index: 999;
  width: 500px;
  height: auto;
  border: 1px solid black;
  background: white;
`;

cartContent.insertAdjacentHTML('beforeend', `
  <table style="width: 100%; border-collapse:collapse; border-spacing:0; height: auto;">
    <thead>
      <tr style="border-bottom: 1px solid #595959; height: 40px;">
        <th>id</th>
        <th>Название</th>
        <th>Количество</th>
        <th>За шт</th>
        <th>Итого</th>
      </tr>
    </thead>
    <tbody class="header__cart-table">
  </table>
  <div>Итого: <span class="header__cart-summary"></span></div>
`);

let cartTable = document.querySelector('.header__cart-table');
let cartSummaryPrice = document.querySelector('.header__cart-summary');
cartSummaryPrice.innerHTML = 0 + ' $';

/**/

cartButton.addEventListener('click', (event) => {
  if (cartContent.style.display === 'block') {
    cartContent.style.display = 'none';
  } else {
    cartContent.style.display = 'block';
  }
})

/**/

buttonAddProduct.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let title = productTitles[index].innerHTML;
    let price = Number(productPrices[index].innerHTML.slice(1));

    cartFill(index, title, 1, price);

    cartDeal.innerHTML = String(cart.length);
    cartSummaryPrice.innerHTML = String(cartSummary()) + ' $';
  })
})
