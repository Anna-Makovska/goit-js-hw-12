import{a as q,S,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const P="https://pixabay.com/api/",M="48861034-650d0692db40a28ff83f5fb54";async function m(r){let e={key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const s=await q.get(P,{params:e});return s.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),s.data}catch(s){throw console.error(s),s}}function E(r){const{largeImageURL:e,webformatURL:s,tags:c,likes:t,views:a,comments:i,downloads:L}=r,w=r.tags.split(",")[0];return`
    <li class="gallery-item">
    <div class="wrapper"> 

     <a href="${e}" class="gallery-link" >
    <img src="${s}"
      class="gallery-image"
      alt="${w}"
    />
  </a>
  
    </div>
<div class="details">
  <p class="detail-info">Likes<br><span class="detail-value"> ${t}</span></p>
  <p class="detail-info">Views<br><span class="detail-value"> ${a}</span> </p>
  <p class="detail-info">Comments<br><span class="detail-value"> ${i}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${L}</span> </p>

  </div>
    </li>
    `}function y(r){return r.map(E).join("")}const f=document.querySelector(".search-form"),d=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".loader-more"),u=document.querySelector(".load-button-style"),b=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),o={query:"",page:1,perPage:40,total:0};l();p();f.addEventListener("submit",async r=>{if(r.preventDefault(),o.page=1,o.query=f.elements.searchQuery.value.trim(),o.query===""){n.warning({message:"Please, fill the form!",position:"topRight"});return}d.innerHTML="",l(),p(),g.classList.add("visible");try{const e=await m(o.query,o.page,o.perPage);if(o.total=e.totalHits,e.hits.length===0){n.info({message:"No images found. Try another query.",position:"topRight"});return}d.insertAdjacentHTML("beforeend",y(e.hits)),b.refresh(),v()}catch(e){n.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{g.classList.remove("visible")}r.target.reset()});u.addEventListener("click",async r=>{r.preventDefault(),o.page+=1,l(),B();try{const e=await m(o.query,o.page,o.perPage);d.insertAdjacentHTML("beforeend",y(e.hits)),b.refresh(),O(),v()}catch(e){n.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{p()}});function $(){u.style.display="block"}function l(){u.style.display="none"}function B(){h.classList.add("visible")}function p(){h.classList.remove("visible")}function v(){const r=Math.ceil(o.total/o.perPage);o.page<r?$():(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topLeft"}))}function O(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
