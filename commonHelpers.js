import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="43441081-c9c9daac9af91d4227dda2db1";function y(t){const a=new URLSearchParams({key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}/?${a}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})}let l=document.querySelector(".css-loader");window.addEventListener("load",()=>{l.classList("hide"),setTimeout(()=>{l.remove()},600)});function b(t){return t.map(({tags:a,likes:s,views:n,comments:e,downloads:r,webformatURL:o,largeImageURL:p})=>`<li class="gallery-item">
                <a class="gallery-link" href="${p}" >
                   <img
                     class = "gallery-image"
                     src = "${o}"
                     alt = "${a}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${s}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${n}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${r}</span>
                 </div>
                 </div>
            </li>`).join("")}function v(t){t.style.display="block"}function d(t){t.style.display="none"}const m=document.querySelector(".form"),c=document.querySelector(".css-loader"),u=document.querySelector(".gallery");m.addEventListener("submit",L);function L(t){t.preventDefault(),u.innerHTML="";const a=t.currentTarget.elements.data.value.trim();if(a==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});v(c),y(a).then(s=>{if(s.hits.length===0)return d(c),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});d(c),u.innerHTML=b(s.hits),S.refresh()}).catch(s=>{i.error({message:`${s}`})}).finally(()=>{m.reset()})}const S=new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
