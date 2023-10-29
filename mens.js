const products = [
    { name: 'Local hero Tshirt', price: 499.00, image: 'images/mens/tshirt_1.jfif', category: 'tshirts' },
    { name: 'Naruto Tshirt', price: 599.00, image: 'images/mens/tshirt_2.jfif', category: 'tshirts' },
    { name: 'Brown Leather Jackets', price: 2599.00, image: 'images/mens/jacket.jfif', category: 'jackets' },
    { name: 'Blue Jackets', price: 1599.00, image: 'images/mens/jacket1.jfif', category: 'jackets' },
    { name: 'Red Satin Shirt', price: 799.00, image: 'images/mens/shirt1.jfif', category: 'shirts' },
    { name: 'Checkes Shirt', price: 599.00, image: 'images/mens/shirt2.jfif', category: 'shirts' }
    
    // Add more products as needed
];

const productContainer = document.getElementById('product-container');

// Retrieve cart items from localStorage when the page loads
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let cartCount = cartItems.length;

// Update the cart count displayed on the page
document.getElementById('cart-count').textContent = cartCount;

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.classList.add(product.category); // Add category class to the product card
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;
    productCard.querySelector('.add-to-cart').addEventListener('click', function() {
        addToCart(product);
    });
    productContainer.appendChild(productCard);
});

function addToCart(product) {
    // Store product details in cartItems array using localStorage
    cartItems.push({ name: product.name, price: product.price, image: product.image });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart count displayed on the page
    cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Checkout Page functionality
document.querySelector('.cart-icon').addEventListener('click', function() {
    // Redirect to checkout page
    window.location.href = 'checkout.html';
});



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const productCards = document.querySelectorAll('.product-card');

function updateProductVisibility() {
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.name);

    if (selectedCategories.length === 0) {
        // If no checkbox is checked, show all product cards
        productCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        // If checkboxes are checked, show product cards for the selected categories and hide others
        productCards.forEach(card => {
            const cardCategories = card.classList;
            const hasCommonCategory = [...cardCategories].some(category => selectedCategories.includes(category));
            card.style.display = hasCommonCategory ? 'block' : 'none';
        });
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProductVisibility);
});

// Initial call to display all products since no checkboxes are selected initially
updateProductVisibility();
