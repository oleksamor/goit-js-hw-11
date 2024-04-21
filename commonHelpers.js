import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="43441081-c9c9daac9af91d4227dda2db1";function y(s){const a=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}/?${a}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})}let l=document.querySelector(".css-loader");window.addEventListener("load",()=>{l.classList.add("hide"),setTimeout(()=>{l.remove()},600)});function b(s){return s.map(({tags:a,likes:t,views:n,comments:e,downloads:r,webformatURL:o,largeImageURL:p})=>`<li class="gallery-item">
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
                 <span class = "info">${t}</span>
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
            </li>`).join("")}function v(s){s.style.display="block"}function d(s){s.style.display="none"}const m=document.querySelector(".form"),c=document.querySelector(".css-loader"),u=document.querySelector(".gallery");m.addEventListener("submit",L);function L(s){s.preventDefault(),u.innerHTML="";const a=s.currentTarget.elements.data.value.trim();if(a==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});v(c),y(a).then(t=>{if(console.log(t.hits),t.hits.length===0)return d(c),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});d(c),u.innerHTML=b(t.hits),S.refresh()}).catch(t=>{i.error({message:`${t}`})}).finally(()=>{m.reset()})}const S=new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
