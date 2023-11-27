//CATEGORIES
const categoryContainer = document.querySelector("#productsContainer");
// console.log(categoryContainer);

const catAPI = "categories.json";

async function fetchCategories(catAPI) {
  try {
    const response = await fetch(catAPI);
    const categories = await response.json();

    //Call a function to render the data
    renderCategories(categories);
  } catch (error) {
    console.log(error);
  }
}

function renderCategories(categories) {
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryHtml = `
  <a href="/category.html?id=${category.id}" class="category">
  <div class="catImg-container">
    <img
      src="${category.image}"
      alt="${category.title}"
    />
  </div>
  <p class="categoryName text-slate-900 font-extrabold text-center">${category.title}</p>
</a>
  `;
    categoryContainer.insertAdjacentHTML("afterbegin", categoryHtml);
  });
}

fetchCategories(catAPI);

// recommended
const recommendedProducts = document.querySelector("#recommendedContainer");
// console.log(recommendedProducts);
recommendedProducts.innerHTML = ``;

const API = "data.json";
async function fetchData(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const { products } = data;
    const recommendedPdts = products.splice(2, 4);
    // console.log(recommendedPdts);
    renderProducts(recommendedPdts);
  } catch (error) {
    console.log(error);
  }
}
fetchData(API);
function renderProducts(recommendedPdts) {
  recommendedPdts.forEach((product) => {
    const productHTML = `
    <div class="product grid">
    <div
      class="bg-slate-900 w-[11rem] h-[20rem] lg:w-[18rem] lg:h-[23rem] rounded-2xl "
    >
      <a
        href="/product.html?id=${product.id}&&category=${product.category}&&cat_id=${product.cat_id}"
      >
        <img class="productImage p-8 rounded-t-lg " src="${product.thumbnail}"
        alt="product image"/>
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            ${product.title}
          </h5>
        </a>
        <div class="flex gap-10 items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <i class="bx bxs-star text-yellow-300"></i>
            <i class="bx bxs-star text-yellow-300"></i>
            <i class="bx bxs-star text-yellow-300"></i>
            <i class="bx bxs-star text-yellow-300"></i>
            <i class="bx bxs-star text-gray-300"></i>
          </div>
          <h5 class="OriginalPrice text-slate-50 font-bold">
            ${product.category}
          </h5>
        </div>
        <div class="flex items-center justify-between">
          <span
            class="lg:text-3xl font-bold text-gray-900 dark:text-white"
            >$${product.price}</span
          >
          <button
            data-id="${product.id}"
            class="add-to-cart text-white bg-blue-700 hover:bg-blue-800 sm:font-normal sm:p-1 lg:font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-1.5 py-[.3rem] text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
    recommendedProducts.insertAdjacentHTML("beforeend", productHTML);
  });
}
