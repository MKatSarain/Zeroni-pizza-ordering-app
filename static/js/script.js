let cart = [];

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartBox = document.getElementById("cart-box");

    if (cartIcon && cartBox) {
        cartIcon.addEventListener("click", () => {
            cartBox.classList.toggle("hidden");
        });
    }
});

// Add item to cart
function addToCart(name, price) {
    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}

// Update cart display
function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;

        let row = document.createElement("div");
        row.classList.add("cart-item");

        row.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <div class="cart-controls">
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
            </div>
        `;
        cartItems.appendChild(row);
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Change item quantity (+/-)
function changeQuantity(name, delta) {
    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(p => p.name !== name);
        }
    }
    updateCartUI();
}

// Send cart to backend
function checkout() {
    fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
    })
    .then(res => res.json())
    .then(data => console.log("Checkout response:", data))
    .catch(err => console.error("Checkout error:", err));
}
