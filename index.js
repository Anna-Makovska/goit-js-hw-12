import{a as d,S as f,i as l}from"./assets/vendor-BG8zX51N.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",g="48861034-650d0692db40a28ff83f5fb54";function h(s){let a={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:a}).then(t=>(t.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),t.data.hits)).catch(t=>{throw console.error(t),t})}function y(s){const{largeImageURL:a,webformatURL:t,tags:o,likes:e,views:r,comments:i,downloads:u}=s,p=s.tags.split(",")[0];return`
    <li class="gallery-item">
    <div class="wrapper"> 

     <a href="${a}" class="gallery-link" >
    <img src="${t}"
      class="gallery-image"
      alt="${p}"
    />
  </a>
  
    </div>
<div class="details">
  <p class="detail-info">Likes<br><span class="detail-value"> ${e}</span></p>
  <p class="detail-info">Views<br><span class="detail-value"> ${r}</span> </p>
  <p class="detail-info">Comments<br><span class="detail-value"> ${i}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${u}</span> </p>

  </div>
    </li>
    `}function v(s){return s.map(y).join("")}const n=document.querySelector(".search-form"),b=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.addEventListener("submit",s=>{s.preventDefault();const a=n.elements.searchQuery.value.trim();if(a===""){l.warning({message:"Please, fill the form!",position:"topRight"});return}c.classList.add("visible"),h(a).then(t=>{console.log(t);const o=v(t);b.innerHTML=o,L.refresh()}).catch(t=>{l.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(t)}).finally(()=>{c.classList.remove("visible")}),s.target.reset()});
//# sourceMappingURL=index.js.map
