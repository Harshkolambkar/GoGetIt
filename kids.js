document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

const products = [
    { name: 'Skirt by Harsh', price: 499.00, image: 'images/kids/kids1.1.jpg', category: 'Skirt' },
    { name: 'Shop your skirt', price: 599.00, image: 'images/kids/kids1.2.jpg', category: 'Skirt' },
    { name: 'Classic Casuals', price: 2599.00, image: 'images/kids/kids1.3.jpg', category: 'Casual' },
    { name: 'Camo Classic', price: 1599.00, image: 'images/kids/kids1.4.jpg', category: 'Casual' },
   
    
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



