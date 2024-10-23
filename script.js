const items = document.querySelectorAll('.item');
let item_num_target = document.getElementById('cart-num');
console.log(item_num_target); 
let item_counter = 0;

let storedCart = sessionStorage.getItem('curr_cart')
let cart = storedCart ? JSON.parse(storedCart) : [];

item_num_target.innerText = cart.length;

items.forEach(item => {
    item.querySelector('.add-to-cart').addEventListener('click', () => {
        const itemImage = item.getAttribute('data-img');
        const itemLabel = item.getAttribute('data-label');
        const itemPrice = item.getAttribute('data-price');
        addToCart(itemImage, itemLabel, itemPrice);
    });
});

console.log(items.length);
console.log(items[1].getAttribute('data-img'));

//let cart = [];
//let cart_num_display = document.getElementById('cart-num');
sessionStorage.setItem("curr_cart_length", JSON.stringify(cart.length));
let curr_cart_length_data = sessionStorage.getItem("curr_cart_length");
//item_num_target.innerText = curr_cart_length_data;


function addToCart(image, label, price) {
    const item = {
        image: image,
        label: label,
        price: price
    };
    cart.push(item);
    console.log('Cart: ', cart);

    sessionStorage.setItem("curr_cart", JSON.stringify(cart));
    //const curr_cart_data = sessionStorage.getItem("curr_cart");
    

    item_num_target.innerText = cart.length;
    sessionStorage.setItem("curr_cart_length", JSON.stringify(cart.length));
    //curr_cart_length_data = sessionStorage.getItem("curr_cart_length");
    //item_num_target.innerText = curr_cart_length_data;
    
/*
    localStorage.setItem("curr_cart_length", JSON.stringify(cart.length));
    const curr_cart_length_data = localStorage.getItem("curr_cart_length");
    item_num_target.innerText = curr_cart_length_data;
*/

    
}