import"./products-f511eac6.js";const o=JSON.parse(localStorage.getItem("cart"));let t=o||[];const a=document.querySelector(".allCartItems");a.textContent=t.length;const l=document.querySelector("#cartContainer");function d(n){n.forEach(e=>{const c=`
   <div class="cart">
    <div class="imgcontainer"> 
      <img src="${e.thumbnail}" alt="">
    </div>
    <div class="description">
    <h2 class="cartName text-slate-900 text-2xl font-extrabold">  ${e.title}</h2>
    <p class="cartrPrice text-slate-900 text-2xl font-extrabold">$${e.price}</p>

    </div>
    <button  class="deleteBtn" >
      <i data-id=${e.id}  class='bx bxs-x-circle text-red-600 hover:text-red-800'>

      </i></button>
  </div>
`;l.insertAdjacentHTML("beforeend",c)})}d(t);const x=document.querySelectorAll(".deleteBtn");x.forEach(n=>{n.addEventListener("click",e=>{const c=e.target.dataset.id,s=t.findIndex(i=>i.id==c);t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)),l.innerHTML=t.length,a.textContent=t.length,u("product deleted")})});const r=document.querySelector(".note");function u(n){r.textContent=n,r.style.left="70px",setTimeout(()=>{r.style.left="-600px"},3e3)}
