const storedCartItems = JSON.parse(localStorage.getItem("cart"));
console.log(storedCartItems);

let cartItems = storedCartItems ? storedCartItems : [];
// console.log(cart);

const cartNo = document.querySelector(".allCartItems");
// console.log(cartNo);

cartNo.innerHTML = cartItems.length;

function renderCartItems(cartItems) {
  cartItems.forEach((cart) => {
    const cartContainer = document.querySelector("#cartContainer");

    const CartHtml = `
   <div class="cart">
    <div class="imgcontainer"> 
      <img src="${cart.thumbnail}" alt="">
    </div>
    <div class="description">
    <h2 class="cartName text-slate-900 text-2xl font-extrabold">  ${cart.title}</h2>
    <p class="cartrPrice text-slate-900 text-2xl font-extrabold">$${cart.price}</p>

    </div>
    <button class="deleteBtn  " data-id="${cart.id}">
      <i class='bx bxs-x-circle text-red-600 hover:text-red-800'>

      </i></button>
  </div>
`;
    cartContainer.insertAdjacentHTML("beforeend", CartHtml);
  });
}

renderCartItems(cartItems);

const deleteBtns = document.querySelectorAll(".deleteBtn");
// console.log(deleteBtns);
deleteBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(cartItems);
    const CartId = event.target.dataset.id;
    // console.log(cartItems);
    const cartIndex = cart.findindex((cartItem) => {
      cartItem.id == catId;
      console.log(cartIndex);
    });
  });
});
console.log(cart);
