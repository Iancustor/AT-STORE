(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const i=document.querySelector("#productsContainer");i.innerHTML="";const f="data.json";async function g(s){try{const n=await(await fetch(s)).json(),{products:o}=n;m(o)}catch(r){console.log(r)}}g(f);function m(s){s.forEach(e=>{const c=`
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
  `;i.insertAdjacentHTML("beforeend",c)});const r=document.querySelectorAll(".add-to-cart"),n=document.querySelector(".cart"),o=JSON.parse(localStorage.getItem("cart"));let t=o||[];console.log(o),n.textContent=t.length,r.forEach(e=>{e.addEventListener("click",c=>{const l=c.target.dataset.id;x("product added to cart");const d=s.find(u=>u.id==l);t.push(d),n.textContent=t.length,console.log(t),localStorage.setItem("cart",JSON.stringify(t)),console.log(JSON.stringify(t))})})}const a=document.querySelector(".note");function x(s){a.textContent=s,a.style.left="70px",setTimeout(()=>{a.style.left="-600px"},3e3)}
