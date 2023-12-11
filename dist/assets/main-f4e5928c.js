import"./products-f511eac6.js";const a=document.querySelector(".catiesContainer");console.log(a);const n="categories.json";async function l(t){try{const s=await(await fetch(t)).json();i(s)}catch(e){console.log(e)}}function i(t){a.innerHTML="",t.forEach(e=>{const s=`
<a href="/category.html?id=${e.id}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-black">
<img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${e.image}"
alt="${e.title}">
<div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${e.title}</h5>
    <p class="mb-3 font-normal text-gray-700  dark:text-gray-400">${e.description}</p>
</div>
</a>
  `;a.insertAdjacentHTML("afterbegin",s)})}l(n);const r=document.querySelector("#recommendedContainer");r.innerHTML="";const d="data.json";async function g(t){try{const s=await(await fetch(t)).json(),{products:o}=s,c=o.splice(2,4);x(c)}catch(e){console.log(e)}}g(d);function x(t){t.forEach(e=>{const s=`
    <div class="product grid">
    <div
      class="bg-slate-900 w-[11rem] h-[20rem] lg:w-[18rem] lg:h-[23rem] rounded-2xl "
    >
      <a
        href="/product.html?id=${e.id}&&category=${e.category}&&cat_id=${e.cat_id}"
      >
        <img class="productImage p-8 rounded-t-lg " src="${e.thumbnail}"
        alt="product image"/>
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            ${e.title}
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
            ${e.category}
          </h5>
        </div>
        <div class="flex items-center justify-between">
          <span
            class="lg:text-3xl font-bold text-gray-900 dark:text-white"
            >$${e.price}</span
          >
          <button
            data-id="${e.id}"
            class="add-to-cart text-white bg-blue-700 hover:bg-blue-800 sm:font-normal sm:p-1 lg:font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-1.5 py-[.3rem] text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  `;r.insertAdjacentHTML("beforeend",s)})}
