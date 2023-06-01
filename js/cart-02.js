 // Div внутри корзины , в которой мы добавляем товары
const cartWrapper  = document.querySelector('.cart-wrapper');
 let dtlWrap ;
 let inp2;

 // // var inp3 = document.querySelector('[details-wrapper]');
 // var inp1 = document.querySelectorAll('[data-cart]');
 // console.log(inp1);
 // for( var i=0; i< inp1.length; i ++){
 //     inp1[i].onclick = function (){
 //         const cardBody = this.closest('.col-mb-4');
 //         console.log(cardBody);
 //         // const cardBody = this.closest('.row');
 //         dtlWrap = cardBody.querySelector('.details-wrapper');
 //         dtlWrap.classList.remove('none');
 //         this.classList.add('none');
 //         this.nextElementSibling.classList.remove('none');
 //         console.log('2');
 //             }}

 //Отслеживаем клик на странице
   window.addEventListener('click',function (event) {
        var inp1 = document.querySelectorAll('[data-cart]');

       // console.log(inp1);
       for( var i=0; i< inp1.length; i ++){


           inp1[i].onclick = function (){
               const cardBody = this.closest('.col-md-6');
               // console.log(cardBody);
               // const cardBody = this.closest('.row');
               dtlWrap = cardBody.querySelector('.details-wrapper');
               dtlWrap.classList.remove('none');
               this.classList.add('none');
               this.nextElementSibling.classList.remove('none');
               // console.log('2');
           }}

       // console.log('1');
//        //Проверяем что клик был совершен на кнопке "Добавить в корзину"
//        //елемент по которому был совешен клик есть ли у него атрибут дата - карт
       // от event через target - получаем  тот элемент через который был сделан клик
       // event.target.hasAttribute('data-cart') т.к hasAttribute то для запроса data-cart [] не нужны  [data-cart]- не надо
              if (event.target.hasAttribute('data-cart1')) {

                   inp2 = event.target.closest('[data-cart1]');
                  // console.log(inp2);
                //    if (event.target.hasAttribute('data-cart1')) {
//            // Находим карточку с товаром, внутри которо был совершен клик
                  // мы знаем куда мы кликнули и с помощью метода мы находим ближайшего к ней родителя  div class = card  от тега button
           const card = event.target.closest('.card');
                            // console.log(card);

//        // Собираем данные с этого товара и записываем их в единый обьект productInfo
       const productInfo = {
           /* чтобы получить id  мы обращаемся к карточке card  . dataset к  датаатрибуты и к id - значение атрибута */
           id: card.dataset.id,
           /* получаем путь к картинке , работаем от card через  querySelector  чтобы найти ТЕГ IMG ,
             ТЕГ IMG найдем  по классу ('.product-img'), получить значение атрибута src,  getAttribute(метод котор возращает значение атрибута) */
           imgSrc: card.querySelector('.product-img').getAttribute('src'),
           /*title ищем через селектор item-title и обращаемся к его свойству innerText   */
           title: card.querySelector('.item-title').innerText,
           // itemsInBox: card.querySelector('[data-items-in-box]').innerText,
           // weight: card.querySelector('.price__weight').innerText,
           price: card.querySelector('.price__currency').innerText,
           counter: card.querySelector('input[name=num1]').value ,
           // counter: card.querySelector('[data-counter]').innerText = res,
       };
       // console.log(productInfo);

                  //Проверим если ли такой товар в корзине
                  // ищем по дата атрибуту, но ВНИМАНИЕ
                  // cartWrapper.querySelector('[data-id="' + productInfo.id  + '"]')
                  // [data-id=""] "" - HTML ковычки - так называемые
                   let itemInCart = cartWrapper.querySelector(`[data-id ="${productInfo.id}"]`)
                  // console.log(itemInCart);

                   // Если товар есть в корзине
                   // условие ЕСЛИ itemInCart есть  - true (иначе  false , null, default и тп - код не сработает )
                   if (itemInCart) {
                     const counterElement = itemInCart.querySelector('[data-counter]');
                       counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
                   } else {
                       // Если товара нет в корзине
                       const cartItemHTML = `
\t\t\t\t\t\t\t<div class="cart-item" data-id="${productInfo.id}">
\t\t\t\t\t\t\t\t<div class="cart-item__top">
\t\t\t\t\t\t\t\t\t<div class="cart-item__img">
\t\t\t\t\t\t\t\t\t\t<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
\t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${productInfo.title}</div>

\t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
\t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">

\t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter="">${productInfo.counter}</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t\t<div class="price">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${productInfo.price}</div>
\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->

\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div> `;
// Сбрасываем счетчик на "1"
//                        card.querySelector('[data-counter]').innerText = '1';
//        //Отобразим товар в корзине
//            // insertAdjacentHTML  этот метод позволяеит нам вставлять кусок розметки внутрь элемента ,  он принимает 2 аргумента
//            //1ый куда именно , 2 что
           cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
                   }
                   // сбрасываем счетчик добавленного товара на "1"
                   card.querySelector('input[name=num1]').value= ' ';
                   // console.log(card);
                  dtlWrap.classList.add('none');
                  inp2.classList.add('none');
                  inp2.previousElementSibling.classList.remove('none');

                  //  Отображение статуса корзины Пустая / полная
                                   toggleCartStatus();
                                   // Пересчет общей стоимости товаров в корзине
                  calcCartPriceAndDelivery();

         }
       // const btnPrimary  = document.querySelectorAll('#btn');
       //
       //        // const cartWrapper1 = toString(cartWrapper);
       // for( var i=0; i< inp1.length; i ++){
       //     btnPrimary[i].onclick = function (){
       //         confirm('Ваш заказ :' + cartWrapper1);
       //         }
       // }


              // }
       // const cartWrapper1 = cartWrapper.querySelector('.cart-item');
       // const productInfo1 = {
       //     title: cartWrapper1.querySelector('.cart-item__title').innerText,
       //     price: cartWrapper1.querySelector('.price__currency').innerText,
       //     counter: cartWrapper1.querySelector('[data-counter]').innerText,
       // };
       // console.log(cartWrapper1);
       // console.log(productInfo1);

 const btnPrimary  = document.querySelector('.btn1').onclick = function() {
     const totalPrice1 = document.querySelector('.total-price');
     // const cartWrapper2   = document.querySelectorAll('.cart-item');
     // for ( key in cartWrapper2 ){
     //     // alert(cartWrapper2[1])
     //     console.log(cartWrapper2[key])
     // }
     const cartWrapper1 = cartWrapper.querySelector('.cart-item');
     const cartWrapper2  = document.querySelector('.cart-wrapper');
     // const cartWrapper2  = cartWrapper.querySelectorAll('.cart-item');
      const  cart2 = cartWrapper2.querySelectorAll('.cart-item');


     cart2.forEach(function (id) {
         // const a1 = {
         //     name: cartWrapper1.querySelector('.cart-item__title').innerText,
         //     counter: cartWrapper2.querySelector('[data-counter]').innerText,
         // };
         // console.log(this.id[value]);
         // console.log(item);
         // item
         // alert(item);
     }
 )


     // console.log(cart2);
     const productInfo1 = {
         title: cartWrapper1.querySelector('.cart-item__title').innerText,
         price: cartWrapper1.querySelector('.price__currency').innerText,
         counter: cartWrapper1.querySelector('[data-counter]').innerText,
     };
     // const productsContainer1 = document.querySelector('#products-container');

               alert('  Это Ваш заказ !!!   '  +
               '  скопируйте текст и отправьте  его менеджеру  '
               +   productInfo1.title+ ' ' + ' '  + productInfo1.counter  + ' шт'
               + ' Общая сумма ' +  ' ' + totalPrice1.innerText + 'Руб.');
           }




 // for( var i=0; i< inp1.length; i ++){
 //     btnPrimary[i].onclick = function (){
 //         alert('Ваш заказ :');
 //         }}
 })

 // var images = document.querySelectorAll(" .gallery1 .photos img");
 // var slider = new Slider(images);
 // this.images = images;