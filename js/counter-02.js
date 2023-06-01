// Добавляем прослушку на всем окне
// const btn_activ = document.querySelector('[data-action="plus"]');  ЭТУ Переменную используем для активации кнопки

window.addEventListener('click',function (event){

    //обьявляем переменную для счетчика
    let counter;
// Условие на то что клик совершен внутри счетчика
    if (event.target.dataset.action === 'plus'||event.target.dataset.action === 'minus'){
            const counterWrapper =  event.target.closest('.counter-wrapper');
            counter = counterWrapper.querySelector('[data-counter]');
    }
 //Проверяем явл ли элемент кнопкной +
    /* Обращаемся к тому элементу по которму мы кликнули event.target , потом мы обращаемся к его дата атрибуту экш через сво-во
    * dataset .action */

    if(event.target.dataset.action === 'plus'){

        // const btn_activ = document.querySelector('[data-cart]');
        // const btn_activ1 = document.querySelector('[data-cart1]');
        // const btn_input = document.querySelector('.details-wrapper');
        //
        // btn_activ.classList.add('none');
        // btn_activ1.classList.remove('none');
        // btn_input.classList.remove('none');

        // Находим обертку счетчика
        /* метод closest находит ближайщего родителя по селектору  по классу через точку .counter-wrapper  по id походу # или []  */
         // const counterWrapper =  event.target.closest('.counter-wrapper');

        //  const counter1 = event.target.closest('[data-id]');
        // console.log(counter1);            тоже пригодиться
        // Находим див с числом счетчика
        // const counter = counterWrapper.querySelector('[data-counter]');
       counter.innerText = ++counter.innerText
        // btn_activ.classList.add('none'); ДЛЯ АКТИВАЦИИ исчезнованеия кнопки
    }

    //Проверяем явл ли элемент кнопкной -
    if(event.target.dataset.action === 'minus'){
        //       const counterWrapper =  event.target.closest('.counter-wrapper');
        // const counter = counterWrapper.querySelector('[data-counter]');
        if (parseInt(counter.innerText) > 1 ) {
            // Изменяем текст в счетчике
            counter.innerText = --counter.innerText;
            //Проверка на товар котор находиться в корзине && - И если данное число ранвно 1
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            // таким образом удаляем товар из корзины
            // событие с родителем карт-айтем и вызываем метод ремув
            event.target.closest('.cart-item').remove();

            //  Отображение статуса  корзина Пустая / Полная
            toggleCartStatus();

            // Запускаем  пересчет общей стоимости  товаров в корзине
            calcCartPriceAndDelivery();
        }

        }
    // Проверялем клик на + или - внутри корзины
       // усл если тот элеем по которому был совершен клик  имеет атрибут котор  сооответсв  назв 'data-action'
    // И в тоже время  элемент по котор мы кликнули имеет родителя по селектору '.cart-wrapper' (т.е. наход внутри корзины)
     if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
         // Запускаем  пересчет общей стоимости  товаров в корзине
         calcCartPriceAndDelivery();

     }

});
