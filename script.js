/*
        document.addEventListener("DOMContentLoaded", function() {

        const cartBtn = document.getElementById("cart-btn");
        const closeBtn = document.getElementById("close-cart");
        const cart = document.getElementById("cart-overlay");
        const body = document.getElementById("bdy");

        // toggle cart function
        function toggleCart(e) {
        if(e) e.preventDefault();
        cart.classList.toggle("active");
        body.classList.toggle("no-scroll");
        }

        // open/close via cart buttons
        cartBtn.addEventListener("click", toggleCart);
        closeBtn.addEventListener("click", toggleCart);

        // open cart when clicking any add-to-cart button
        document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            if (!cart.classList.contains("active")) {
            toggleCart(); // open cart
            }
        });
        });

        });
*/

