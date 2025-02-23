import{a as q,S,i}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const P="https://pixabay.com/api/",M="48861034-650d0692db40a28ff83f5fb54";async function m(r){let e={key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const s=await q.get(P,{params:e});return s.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),s.data}catch(s){throw console.error(s),s}}function I(r){const{largeImageURL:e,webformatURL:s,tags:c,likes:t,views:a,comments:n,downloads:L}=r,w=r.tags.split(",")[0];return`
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
  <p class="detail-info">Comments<br><span class="detail-value"> ${n}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${L}</span> </p>

  </div>
    </li>
    `}function y(r){return r.map(I).join("")}const g=document.querySelector(".search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".loader-more"),d=document.querySelector(".load-button-style"),b=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),o={query:"",page:1,perPage:40,total:0};l();p();g.addEventListener("submit",async r=>{if(r.preventDefault(),o.page=1,o.query=g.elements.searchQuery.value.trim(),o.query===""){i.warning({message:"Please, fill the form!",position:"topRight"});return}u.innerHTML="",l(),p(),f.classList.add("visible");try{const e=await m(o.query,o.page,o.perPage);if(o.total=e.totalHits,e.hits.length===0){i.info({message:"No images found. Try another query.",position:"topRight"});return}u.insertAdjacentHTML("beforeend",y(e.hits)),b.refresh(),v()}catch(e){i.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{f.classList.remove("visible")}r.target.reset()});d.addEventListener("click",async r=>{r.preventDefault(),o.page+=1,l(),B();try{const e=await m(o.query,o.page,o.perPage);u.insertAdjacentHTML("beforeend",y(e.hits)),b.refresh(),E(),v()}catch(e){i.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{p()}});function $(){d.style.display="block"}function l(){d.style.display="none"}function B(){h.classList.add("visible")}function p(){h.classList.remove("visible")}function v(){const r=Math.ceil(o.total/o.perPage);o.page<r?$():(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topLeft"}))}function E(){console.log("Прокручування виконується...");const e=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
