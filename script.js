$(document).ready(function () {
  let cart = [];

  // Function to add item to cart.
  $(".add-to-cart").click(function () {
    let name = $(this).data("name");
    let price = $(this).data("price");
    cart.push({ name: name, price: price });
    showCart();
  });

  // Function to remove item from cart.
  $(document).on("click", ".remove-from-cart", function () {
    let index = $(this).data("index");
    cart.splice(index, 1);
    showCart();
  });

  // Function to display cart items.
  function showCart() {
    let cartElement = $("#cart");
    cartElement.empty();
    if (cart.length === 0) {
      cartElement.append('<h3 id="cart-empty-message">Cart is empty</h3>');
    } else {
      $("#cart-empty-message").remove();
      cart.forEach(function (item, index) {
        cartElement.append(
          '<div class="cart-item">' +
            '<div class="item-name"><h4 class="cart-item-name">' +
            item.name +
            "</h4></div>" +
            '<div class="item-price-del-btn"><div class="item-price"><h4 class="cart-item-price">' +
            item.price +
            "</h4></div>" +
            '<div class="del-btn"><button class="btn btn-danger remove-from-cart" data-index="' +
            index +
            '"><i class="fa-solid fa-trash"></i></button></div>' +
            "</div></div>"
        );
      });
    }
  }
});

// Following code scrolls through the page, taking the user to the section. he/she chooses from options in navbar.
document.querySelectorAll(".navbar-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});