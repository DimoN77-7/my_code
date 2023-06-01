    function toggleCartStatus() {
    // console.log('toggleCartStatus.js');

    // находим селектор по классу '.cart-wrapper'
    const cartWrapper = document.querySelector('.cart-wrapper');
        // Поиск по атрибуту [data-cart-empty]
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
        // Поиск по id  '#order-form'
        const orderForm = document.querySelector('#order-form');
        if (cartWrapper.children.length > 0) {
            cartEmptyBadge.classList.add('none');
            orderForm.classList.remove('none');
            // console.log('full');
           }
        else {
            cartEmptyBadge.classList.remove('none');
            orderForm.classList.add('none');

        }
    }
