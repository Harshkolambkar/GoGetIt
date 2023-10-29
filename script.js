document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
// Products for male section
const products = [
        { name: 'Local hero Tshirt', price: 499.00, image: 'images/mens/tshirt_1.jfif', category: 'tshirts' },
        { name: 'Naruto Tshirt', price: 599.00, image: 'images/mens/tshirt_2.jfif', category: 'tshirts' },
        { name: 'Brown Leather Jackets', price: 2599.00, image: 'images/mens/jacket.jfif', category: 'jackets' },
        { name: 'Blue Jackets', price: 1599.00, image: 'images/mens/jacket1.jfif', category: 'jackets' },
        { name: 'Red Satin Shirt', price: 799.00, image: 'images/mens/shirt1.jfif', category: 'shirts' },
        { name: 'Checks Shirt', price: 599.00, image: 'images/mens/shirt2.jfif', category: 'shirts' }
    ];

    const maleFlexContainer = document.getElementById('male-flex');
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let cartCount = cartItems.length;

// Update the cart count displayed on the page
document.getElementById('cart-count').textContent = cartCount;

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-image">
            <img src="${product.image}" alt="">
        </div>
        <div class="card-content">
            <h2>${product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;

    const addToCartButton = card.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        addToCart(product);
    });

    maleFlexContainer.appendChild(card);
});

function addToCart(product) {
    // Store product details in cartItems array using localStorage
    cartItems.push({ name: product.name, price: product.price, image: product.image });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart count displayed on the page
    cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}
//--------------------------------------------------------------------------------------


// Products1 stands for the product in female section
const products1 = [
    { name: 'Local hero Tshirt', price: 499.00, image: 'images/female/crop1.jpg', category: 'tshirts' },
    { name: 'Naruto Tshirt', price: 599.00, image: 'images/female/crop2.png', category: 'tshirts' },
    { name: 'Brown Leather Jackets', price: 2599.00, image: 'images/female/shirtf1.jpg', category: 'jackets' },
    { name: 'Blue Jackets', price: 1599.00, image: 'images/female/shirtf2.jpg', category: 'jackets' },
    { name: 'Red Satin Shirt', price: 799.00, image: 'images/female/tees1.1.jpg', category: 'shirts' },
    { name: 'Checkes Shirt', price: 599.00, image: 'images/female/tees1.2.jpg', category: 'shirts' }
];

const femaleFlexContainer = document.getElementById('female-flex');

// Update the cart count displayed on the page
document.getElementById('cart-count').textContent = cartCount;

products1.forEach(product1 => {
const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
    <div class="card-image">
        <img src="${product1.image}" alt="">
    </div>
    <div class="card-content">
        <h2>${product1.name}</h2>
        <p>${product1.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
`;

const addToCartButton = card.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    addToCart(product1);
});

femaleFlexContainer.appendChild(card);
});

function addToCart(product1) {
// Store product details in cartItems array using localStorage
cartItems.push({ name: product1.name, price: product1.price, image: product1.image });
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Update the cart count displayed on the page
cartCount = cartItems.length;
document.getElementById('cart-count').textContent = cartCount;
}


//--------------------------------------------------------------------------------------

// kids stands for the product in female section
const kids = [
    { name: 'kiddo', price: 499.00, image: 'images/kids/kids1.1.jpg', category: 'tshirts' },
    { name: 'Naruto Tshirt', price: 599.00, image: 'images/kids/kids1.2.jpg', category: 'tshirts' },
    { name: 'Brown Leather Jackets', price: 2599.00, image: 'images/kids/kids1.3.jpg', category: 'jackets' },
    { name: 'Blue Jackets', price: 1599.00, image: 'images/kids/kids1.4.jpg', category: 'jackets' },
    
];

const kidsFlexContainer = document.getElementById('kids-flex');

// Update the cart count displayed on the page
document.getElementById('cart-count').textContent = cartCount;

kids.forEach(kids => {
const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
    <div class="card-image">
        <img src="${kids.image}" alt="">
    </div>
    <div class="card-content">
        <h2>${kids.name}</h2>
        <p>${kids.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
`;

const addToCartButton = card.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    addToCart(kids);
});

kidsFlexContainer.appendChild(card);
});

function addToCart(kids) {
// Store product details in cartItems array using localStorage
cartItems.push({ name: kids.name, price: kids.price, image: kids.image });
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Update the cart count displayed on the page
cartCount = cartItems.length;
document.getElementById('cart-count').textContent = cartCount;
}


//--------------------------------------------------------------------------------------

// kids stands for the product in female section
const accessories = [
    { name: 'kiddo', price: 499.00, image: 'images/accessories/acc1.1.png', category: 'tshirts' },
    { name: 'Naruto Tshirt', price: 599.00, image: 'images/accessories/acc1.2.png', category: 'tshirts' },
    { name: 'Brown Leather Jackets', price: 2599.00, image: 'images/accessories/acc1.3.png', category: 'jackets' },
    { name: 'Blue Jackets', price: 1599.00, image: 'images/accessories/acc1.4.png', category: 'jackets' },
    
];

const accessoriesFlexContainer = document.getElementById('accessories-flex');

// Update the cart count displayed on the page
document.getElementById('cart-count').textContent = cartCount;

accessories.forEach(accessories => {
const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
    <div class="card-image">
        <img src="${accessories.image}" alt="">
    </div>
    <div class="card-content">
        <h2>${accessories.name}</h2>
        <p>${accessories.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
`;

const addToCartButton = card.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    addToCart(accessories);
});

accessoriesFlexContainer.appendChild(card);
});

function addToCart(accessories) {
// Store product details in cartItems array using localStorage
cartItems.push({ name: accessories.name, price: accessories.price, image: accessories.image });
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Update the cart count displayed on the page
cartCount = cartItems.length;
document.getElementById('cart-count').textContent = cartCount;
}


// Checkout Page functionality
document.querySelector('.cart-icon').addEventListener('click', function(event) {
    // Prevent click event propagation to avoid conflicting with other click events
    event.stopPropagation();
    // Redirect to checkout page
    window.location.href = 'checkout.html';
});

const cards = document.querySelectorAll('.card');

// Loop through each card and attach click event listener
cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();
        showCardDetails(card);
    });
});

function showCardDetails(card) {
    const bigCard = document.querySelector('.big-card');
    const overlay = document.getElementById('overlay');
    const cardContent = card.querySelector('.card-content');
    const title = cardContent.querySelector('h2').innerText;
    const price = cardContent.querySelector('p').innerText;
    const imageSrc = card.querySelector('.card-image img').src;
    

    // Populate big card content
    document.getElementById('big-card-title').innerText = title;
    document.getElementById('big-card-price').innerText = price;
    document.getElementById('big-card-image').src = imageSrc;
    

    overlay.style.display = 'flex'; // Display the overlay
    bigCard.style.display = 'block'; // Display the big card

    // Close big card details when the overlay is clicked
    overlay.addEventListener('click', () => {
        closeCardDetails();
    });
}

function closeCardDetails() {
    const overlay = document.getElementById('overlay');
    const bigCard = document.querySelector('.big-card');
    overlay.style.display = 'none';
    bigCard.style.display = 'none';
}

// Prevent clicks inside big card from closing it
const bigCard = document.querySelector('.big-card');
bigCard.addEventListener('click', (event) => {
    event.stopPropagation();
});


document.getElementById("subscription_btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting (to keep the email in the URL)
        
        // Get the email value from the input field
        var email = document.getElementById("signupemail").value;

        // Redirect to the signup page with the email as a query parameter
        window.location.href = "registration_page.html?email=" + encodeURIComponent(email);
});

var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');

        // Display the email in the textbox
        var emailTextbox = document.getElementById("email");
        emailTextbox.value = decodeURIComponent(email);

