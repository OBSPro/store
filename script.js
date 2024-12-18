// Simple cart functionality to log items added to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        const productPrice = event.target.previousElementSibling.textContent;
        console.log(`Added to cart: ${productName} - ${productPrice}`);
    });
});
