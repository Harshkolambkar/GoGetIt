// Retrieving cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = 0;

// Display cart items and calculate total price in the checkout page
const cartItemsDiv = document.querySelector('.cart-items');

cartItems.forEach(item => {
    // Calculate total price
    totalPrice += item.price;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <button class="remove-from-cart">Remove</button>
    `;
    cartItemsDiv.appendChild(cartItemDiv);
    
    // event listener for remove button
    cartItemDiv.querySelector('.remove-from-cart').addEventListener('click', function() {
        // Remove item from cartItems array
        const index = cartItems.findIndex(cartItem => cartItem.name === item.name);
        if (index !== -1) {
            const removedItem = cartItems.splice(index, 1)[0];
            // Subtract removed item's price from total price
            totalPrice -= removedItem.price;
        }

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update total price display
        updateTotalPrice();

        // Remove the item's div from the DOM
        cartItemDiv.remove();
    });
});

// Function to update total price display
function updateTotalPrice() {
    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
}

// Call the function to initially display the total price
updateTotalPrice();
