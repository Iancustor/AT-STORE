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
    // console.log(cartContainer);
    cartContainer.innerHTML = ``;
    const CartHtml = ` <div class="cart">
    <div
      id="cart"
      class="flex lg:gap-[2rem] gap-8 align-center justify-center text-center rounded-lg bg-slate-900 w-[23rem] lg:w-[35rem] lg:px-11 p-[1rem]"
    >
      <div class="imgContainer">
        <img src="${cart.thumbnail} "/>
      </div>
      <div id="itemDescriptions" class="flex gap-10">
        <h2 id="product-title" class="text-slate-50 font-extrabold">
        ${cart.title}
        </h2>
        <p id="product-price" class="text-slate-50 font-extrabold">
          $${cart.price}
        </p>
      </div>
      <div class="deleteBtn">
        <button
          id="product-btn"
          class="text-slate-50 bg-red-500 hover:bg-red-700 px-[.5rem] py-1 rounded-md ]"
        >
          delete
        </button>
      </div>
    </div>
  </div>`;
    cartContainer.insertAdjacentHTML("beforebegin", CartHtml);
  });
}

renderCartItems(cartItems);
