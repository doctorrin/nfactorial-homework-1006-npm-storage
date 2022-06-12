const minus = document.querySelector('[data-action="minus"]');
const plus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');


minus.addEventListener('click', function(){
    counter.innerText -- 
});

plus.addEventListener('click', function(){
    counter.innerText ++
    
})

const checkout = document.getElementsByClassName('btn btn-primary')[0]
checkout.addEventListener('click', function (){
    alert('Вы оформили заказ!');
});

const cartWrapper =  document.querySelector('.cart-wrapper');
window.addEventListener('click', function(event){

    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');

    
        const product = {

            title: card.querySelector('.item-title').innerText,
            price: parseInt(card.querySelector('.price__currency').innerText) * parseInt(card.querySelector('[data-counter]').innerText),
            counter: card.querySelector('[data-counter]').innerText
        }
    		// Собранные данные подставим в шаблон для товара в корзине
		const cartItemHTML = `
                <div class="cart-item__title">${product.title}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items_current" data-counter="">${product.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price_currency">Итого: ${product.price}
                         </div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>`;


        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
}
})



