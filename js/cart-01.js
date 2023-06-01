 // Div внутри корзины , в которой мы добавляем товары
const cartWrapper  = document.querySelector('.cart-wrapper');

//  // var inp3 = document.querySelector('[details-wrapper]');
 var inp1 = document.querySelectorAll('[data-cart]');
 for( var i=0; i< inp1.length; i ++){
     inp1[i].onclick = function (){
         const cardBody = this.closest('.card-body');
         const dtlWrap= cardBody.querySelector('.details-wrapper');
         dtlWrap.classList.remove('none');
         this.classList.add('none');
         this.nextElementSibling.classList.remove('none');
         // const num1 =document.querySelector('input[name=num1]');
         // const a =  parseInt(num1.value);

//             const inp = document.querySelector('[data-cart]');
//                     console.log(inp.closest(".card-body"));

//          var inp2 = document.querySelectorAll('[data-cart1]');
//          for( var i=0; i< inp2.length; i ++){
//              inp2[i].onclick = function (){
//              console.log(inp2);
//              }
//          };
//          console.log(a1);
             }}





 //Отслеживаем клик на странице

   window.addEventListener('click',function (event) {

//        //Проверяем что клик был совершен на кнопке "Добавить в корзину"
//        //елемент по которому был совешен клик есть ли у него атрибут дата - карт
       // от event через target - получаем  тот элемент через который был сделан клик
       // event.target.hasAttribute('data-cart') т.к hasAttribute то для запроса data-cart [] не нужны  [data-cart]- не надо
              if (event.target.hasAttribute('data-cart1')) {

//
//                   // console.log('Click on cart button');
//
//                   // btn_activ1.classList.remove("none");
//                   // btn_actions.classList.add('none');
//
//                   // находим див с чилом счетчика
//
//                   const id_card = event.target.closest('[data-id]');
//                   const id = parseInt(id_card.dataset.id)
//                   console.log(id)
//                   if (id == '1') {
//                       // console.log('da')
//                       document.getElementById('1').classList.add("none");
//                       document.getElementById('11').classList.remove("none");
//                       document.getElementById('111').classList.remove("none");
//                   } else {
//                       if (id == '2') {
//                           document.getElementById('2').classList.add("none");
//                           document.getElementById('22').classList.remove("none");
//                           document.getElementById('222').classList.remove("none");
//                       } else {
//                           if (id == '3') {
//                               document.getElementById('3').classList.add("none");
//                               document.getElementById('33').classList.remove("none");
//                               document.getElementById('333').classList.remove("none");
//                           } else {
//                               document.getElementById('4').classList.add("none");
//                               document.getElementById('44').classList.remove("none");
//                               document.getElementById('444').classList.remove("none");
//                           }
//                       }
//                   }
//               }
//            var inp11 = document.querySelectorAll('input[name=num1]');
//            for( var i=0; i< inp1.length; i ++){
//                inp11[i].oninput = function (){
//                    var a = document.querySelector('input[name=num1]');
//                    let b = parseInt(a.value)
//                     // var res = document.querySelector('input[name=num1]').innerText;
//                    // this.classList.remove('err')
//                    // return b;
//                    console.log(b);
//                    console.log(inp11);
//                }
//            }
//
//
//                   if (event.target.hasAttribute('data-cart1')) {
//            // Находим карточку с товаром, внутри которо был совершен клик
                  // мы знаем куда мы кликнули и с помощью метода мы находим ближайшего к ней родителя  div class = card  от тега button
           const card = event.target.closest('.card');
                            console.log(card);

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
           counter: card.querySelector('input[name=num1]').value,
           // counter: card.querySelector('[data-counter]').innerText = res,
       };
       // console.log(productInfo);
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
//        const cartItemHTML = `
// \t\t\t\t\t\t\t<div class="cart-item" data-id="${productInfo.id}">
// \t\t\t\t\t\t\t\t<div class="cart-item__top">
// \t\t\t\t\t\t\t\t\t<div class="cart-item__img">
// \t\t\t\t\t\t\t\t\t\t<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
// \t\t\t\t\t\t\t\t\t</div>
// \t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
// \t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${productInfo.title}</div>
// \t\t\t\t\t\t\t\t\t\t<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight} </div>
//
// \t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
// \t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">
//
// \t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
// \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
// \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter="">${productInfo.counter}</div>
// \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
// \t\t\t\t\t\t\t\t\t\t\t</div>
//
// \t\t\t\t\t\t\t\t\t\t\t<div class="price">
// \t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${productInfo.price}</div>
// \t\t\t\t\t\t\t\t\t\t\t</div>
//
// \t\t\t\t\t\t\t\t\t\t</div>
// \t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->
//
// \t\t\t\t\t\t\t\t\t</div>
// \t\t\t\t\t\t\t\t</div>
// \t\t\t\t\t\t\t</div> `;

//        //Отобразим товар в корзине
//            // insertAdjacentHTML  этот метод позволяеит нам вставлять кусок розметки внутрь элемента ,  он принимает 2 аргумента
//            //1ый куда именно , 2 что
           cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
//                       ;
//                       if ( res  >= '0') {
//                           // console.log('da')
//                           document.getElementById('1').classList.remove("none");
//                           document.getElementById('11').classList.add("none");
//                           document.getElementById('111').classList.add("none");
//                           document.getElementById('2').classList.remove("none");
//                           document.getElementById('22').classList.add("none");
//                           document.getElementById('222').classList.add("none");
//                           document.getElementById('3').classList.remove("none");
//                           document.getElementById('33').classList.add("none");
//                           document.getElementById('333').classList.add("none");
//                           document.getElementById('4').classList.remove("none");
//                           document.getElementById('44').classList.add("none");
//                           document.getElementById('444').classList.add("none");
//
//
//                       };
//
//
//                       res ='0';
//                       console.log(res);
//
//            }
           }
//            );
 // document.addEventListener('submit', (res) => {
 //     res.prevent.Default();
 //     console.log('a');
 });
