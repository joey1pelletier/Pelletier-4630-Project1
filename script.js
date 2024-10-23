const items = document.querySelectorAll('.item');
let item_num_target = document.getElementById('cart-num');
console.log(item_num_target); 


let storedCart = sessionStorage.getItem('curr_cart')
let cart = storedCart ? JSON.parse(storedCart) : [];

item_num_target.innerText = cart.length;

let total_cost_target = document.getElementById('total-cost');
let total_cost = parseInt(sessionStorage.getItem('total')) || 0;
total_cost_target.innerText = total_cost;

let curr_item_info = document.getElementById('added-cart-items');
const saved_cart_html = sessionStorage.getItem("cart_html");

curr_item_info.innerHTML = saved_cart_html;

items.forEach(item => {
    item.querySelector('.add-to-cart').addEventListener('click', () => {
        const itemImage = item.getAttribute('data-img');
        const itemLabel = item.getAttribute('data-label');
        const itemPrice = item.getAttribute('data-price');
        addToCart(itemImage, itemLabel, itemPrice);
    });
});

sessionStorage.setItem("curr_cart_length", JSON.stringify(cart.length));
let curr_cart_length_data = sessionStorage.getItem("curr_cart_length");

function addToCart(image, label, price) {
    const item = {
        image: image,
        label: label,
        price: price
    };
    cart.push(item);
    console.log('Cart: ', cart);

    sessionStorage.setItem("curr_cart", JSON.stringify(cart));
    

    item_num_target.innerText = cart.length;
    sessionStorage.setItem("curr_cart_length", JSON.stringify(cart.length));

    const num_price = parseInt(price);
    total_cost += num_price;
    console.log(total_cost);

    sessionStorage.setItem("total", total_cost);
    total_cost_target.innerText = total_cost;
    
    let item_info = document.getElementById('added-cart-items');


    /*
    example html code to be added

    <div class="cart-item">
        <img src="https://i.ibb.co/yfqXqtN/black-jacket.jpg" alt="black jacket" class="cart-item-img">
        <p class="cart-item-label">Women's Black Jacket</p>
        <p class="cart-item-price">$120</p>
        <p>X</p>
    </div>
    */
    let item_info_div = document.createElement('div');
    item_info_div.className = 'cart-item';

    let item_info_img = document.createElement('img');
    item_info_img.src = image;
    item_info_img.alt = label;
    item_info_img.className = 'cart-item-img';

    let item_info_label = document.createElement('p');
    item_info_label.className = 'cart-item-label';
    item_info_label.textContent = label;

    let item_info_price = document.createElement('p');
    item_info_price.className = 'cart-item-price';
    item_info_price.textContent = `$${price}`;

    let item_remove_icon = document.createElement('p');
    item_remove_icon.textContent = 'X';

    item_info_div.appendChild(item_info_img);
    item_info_div.appendChild(item_info_label);
    item_info_div.appendChild(item_info_price);
    item_info_div.appendChild(item_remove_icon);

    item_info.appendChild(item_info_div);

    sessionStorage.setItem("cart_html", item_info.innerHTML);

}

let cart_button = document.getElementById('cart-area');
let popup = document.getElementById('popup-cart');
console.log(popup);
cart_button.addEventListener("click", openPopup);

let close_popup_button = document.getElementById('close-popup');
close_popup_button.addEventListener("click", closePopup);

function openPopup() {
    popup.style.visibility = 'visible';

}

function closePopup() {
    popup.style.visibility = 'hidden';
}