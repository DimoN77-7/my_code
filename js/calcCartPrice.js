 function calcCartPriceAndDelivery(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    // общая стоимость товаров
    // let totalPrice = 0;
      let priceTotal = 0 ;
    //  Обходим все блоки с ценами в корзине
     priceElements.forEach(function (item){
    // cartItems.forEach(function (item){

         //Находим кол-во товара
         // const amountEl = item.querySelector('[data-counter]');
         const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

         // const priceEl = item.querySelector('.price__currency');
         // const currentPrice =  parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
         priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
        // totalPrice = totalPrice + currentPrice;
        // totalPrice += currentPrice;
    })
     // console.log(totalPrice);
         // Отображем цену на странице
  totalPriceEl.innerText = priceTotal;

     //Скрываем или показываем блок со стоимостью доставки
     if (priceTotal > 0 ){
         cartDelivery.classList.remove('none');
     } else {
         cartDelivery.classList.add('none');
     }
   //Указываем стоимость доставки
      if (priceTotal >= 600) {

    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно'
      } else {
          deliveryCost.classList.remove('free');
          deliveryCost.innerText = '250 ₽';


      }

 }