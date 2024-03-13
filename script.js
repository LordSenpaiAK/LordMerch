// Sample product data
const products = [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 25 },
    { name: "T-shirt", price: 15 }
];

// Initialize cartItems array
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName) {
    console.log("Adding product to cart:", productName); // Log message
    // Find the product in the products array
    const product = products.find(item => item.name === productName);
    
    // If the product is found, add it to the cartItems array
    if (product) {
        cartItems.push(product);
        console.log("Cart items:", cartItems); // Log message
        alert(productName + " added to cart!");
    } else {
        alert("Product not found!");
    }
}

// Function to display products in the cart
function displayCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; // Clear previous content
    
    // Loop through the products in the cart and generate HTML for each
    cartItems.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-item");
        productElement.innerHTML = `
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
        `;
        cartItemsContainer.appendChild(productElement);
    });
}

// Function to handle the checkout process
function checkout() {
    alert("Thank you for your purchase! Your items will be shipped shortly.");
    window.location.href = "thankyou.html";
}

// Call displayCart function when the page loads
window.onload = displayCart;




//////

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}