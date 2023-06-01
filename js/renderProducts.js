    const productsContainer = document.querySelector('#products-container');

    //Запускаем getProducts
    getProducts();

    //Асинхронная функция получения данных из файла products.json
    async function getProducts() {
        // Получаем данные из products.json
          const response = await fetch('./js/products.json');
          // console.log(response);
        // Парисим данные из JSON формата в JS
            const productsArray = await response.json();
            // console.log(productsArray);
        // Запускаем ф-ю рендера (отображения товаров)
        renderProducts(productsArray);
    }


     function renderProducts(productsArray) {
         productsArray.forEach(function (item) {
             const productHTML = `
             <div class="col-md-6">
\t\t\t\t\t\t<div class="card mb-4" data-id="${item.id}">
\t\t\t\t\t\t\t<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
\t\t\t\t\t\t\t<div class="card-body text-center">
\t\t\t\t\t\t\t\t<h4 class="item-title">${item.title}</h4>

\t\t\t\t\t\t\t\t<div class="details-wrapper none" id="11">
                                   <!-- Счетчик-->
                                    <div class="items counter-wrapper ">
<!--\t\t\t\t\t\t\t\t\t<div class="items counter-wrapper none">-->
\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
                                        <input type="text" name="num1" class="items__current" data-counter >
<!--\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter >1</div>-->
\t\t\t\t\t\t\t\t\t\t<div class="items__control " data-action="plus" >+</div>
\t\t\t\t\t\t\t\t\t</div>
                                    <!--// Счетчик-->

\t\t\t\t\t\t\t\t\t<div class="price">
\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${item.price}</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<button data-cart type="button" class="btn btn-block btn-outline-warning" id="1">+ в корзину</button>
             <button data-cart1 type="button" class="btn btn-block btn-outline-warning none" id="111">Оформить</button>


\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>  `;
             productsContainer.insertAdjacentHTML('beforeend', productHTML);

         });
     }
