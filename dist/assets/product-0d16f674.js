import"./products-f511eac6.js";const l=new URLSearchParams(window.location.search),d=l.get("id"),g="data.json";async function m(e){try{const s=await(await fetch(e)).json(),{products:i}=s,c=i.find(r=>r.id==d);b(c)}catch(t){console.log(t)}}function b(e){const t=document.querySelector("#singleProductContainer");t.innerHTML=`
  <div class="product grid">
    <div
      class="bg-slate-900 w-[11rem] h-[20rem] lg:w-[18rem] lg:h-[23rem] rounded-2xl grid"
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
        </div>
      </div>
    </div>
  </div>
  `}m(g);const u="products.json";l.get("id");const h=l.get("cat_id");async function f(e){try{const s=await(await fetch(e)).json(),{products:i}=s,c=i.find(a=>a.id==d),r=i.filter(a=>a.cat_id==h),o=c.id,n=r.filter(a=>a.id!==o);console.log(n),console.log(r),console.log(o),y(n)}catch(t){console.log(t)}}const x=document.querySelector("#SimilarProductsContainer");x.innerHTML="";function y(e){e.forEach(t=>{const s=`
    <div class="product grid">
    <div
      class="bg-slate-900 w-[11rem] h-[20rem] lg:w-[18rem] lg:h-[23rem] rounded-2xl grid"
    >
      <a
        href="/product.html?id=${t.id}&&category=${t.category}&&cat_id=${t.cat_id}"
      >
        <img class="productImage p-8 rounded-t-lg " src="${t.thumbnail}"
        alt="product image"/>
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            ${t.title}
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
            ${t.category}
          </h5>
        </div>
        <div class="flex items-center justify-between">
          <span
            class="lg:text-3xl font-bold text-gray-900 dark:text-white"
            >$${t.price}</span
          >
          <button
            data-id="${t.id}"
            class="add-to-cart text-white bg-blue-700 hover:bg-blue-800 sm:font-normal sm:p-1 lg:font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-1.5 py-[.3rem] text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
    `;x.insertAdjacentHTML("afterbegin",s)})}f(u);
