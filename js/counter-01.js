// Находим элементы на странице
 const btnMinus = document.querySelector('[data-action="minus"]');  /*Когда ищем по дата атрибуру используем [] дата атрибут  имеет зрначение минус data-action="minus"*/
 const btnPlus = document.querySelector('[data-action="plus"]');
 const counter01 = document.querySelector('[data-counter]');

 // Отслеживаем клик на кнопку Плюс
 /* отслеживаем клик ('click') по кнопке btnMinus через метод addEventListener. Потом через запятую функция (круглые скобки для передачи  аргументов ), Фигурные { для тела функции}  */
 btnMinus.addEventListener('click',function(){
console.log('Minus click');
 // Проверяем чтобы счетчик был больше 1
     if (parseInt(counter01.innerText) > 1 ) {
         // Изменяем текст в счетчике
         counter01.innerText = --counter01.innerText;
     }

 });

 // Отслеживаем клик на кнопку Плюс
 btnPlus.addEventListener('click',function(){
     console.log('Plus click');
     /* innerText свой-во которое отвечает за тот текст котор написан внутри данного тега  */
     // counter.innerText = '789';
     counter01.innerText = ++counter01.innerText;
 });


