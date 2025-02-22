import{a as L,S as w,i}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const P="https://pixabay.com/api/",q="48861034-650d0692db40a28ff83f5fb54";async function y(r){let e={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const o=await L.get(P,{params:e});return o.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),o.data.hits}catch(o){throw console.error(o),o}}function S(r){const{largeImageURL:e,webformatURL:o,tags:u,likes:t,views:a,comments:n,downloads:b}=r,v=r.tags.split(",")[0];return`
    <li class="gallery-item">
    <div class="wrapper"> 

     <a href="${e}" class="gallery-link" >
    <img src="${o}"
      class="gallery-image"
      alt="${v}"
    />
  </a>
  
    </div>
<div class="details">
  <p class="detail-info">Likes<br><span class="detail-value"> ${t}</span></p>
  <p class="detail-info">Views<br><span class="detail-value"> ${a}</span> </p>
  <p class="detail-info">Comments<br><span class="detail-value"> ${n}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${b}</span> </p>

  </div>
    </li>
    `}function p(r){return r.map(S).join("")}const m=document.querySelector(".search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),f=document.querySelector(".load-button-style"),h=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),s={query:"",page:null,perPage:40,total:""};g();m.addEventListener("submit",async r=>{if(r.preventDefault(),s.page=1,s.query=m.elements.searchQuery.value.trim(),s.query===""){i.warning({message:"Please, fill the form!",position:"topRight"});return}d.classList.add("visible"),g();try{const e=await y(s.query,s.page,s.perPage);s.total=e.totalHits,console.log(e);const o=p(e);l.insertAdjacentHTML("beforeend",p(e)),h.refresh(),c()}catch(e){l.innerHTML="",i.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{d.classList.remove("visible")}c(),r.target.reset()});f.addEventListener("click",async r=>{r.preventDefault(),s.page+=1,c();try{const e=await y(s.query,s.page,s.perPage);console.log(e);const o=p(e);l.insertAdjacentHTML("beforeend",o),h.refresh(),c()}catch(e){l.innerHTML="",i.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{d.classList.remove("visible")}});function M(){f.style.display="block"}function g(){f.style.display="none"}function c(){const e=Math.ceil(s.total/40);s.page<e?M():(g(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topLeft"}))}
//# sourceMappingURL=index.js.map
