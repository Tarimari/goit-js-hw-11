import{i as n}from"./assets/vendor-4d6948b9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".submit-form"),u=document.querySelector(".gallery");c.addEventListener("submit",d);function d(o){const s=o.currentTarget.elements.search.value;f(s).then(i=>u.innerHTML=h(i.hits)).catch(i=>console.log(i))}function h(o){if(o.total===0)n.show({message:"❌ Sorry, there are no images matching your search query. Please try again!"});else return o.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:a,downloads:l})=>`
        <li class="gallery-item">
          <img
            srcset='${s} 1x, ${i} 2x'
            src='${s}'
            alt='${r}'
          />
        </li>
         <div class="gallery-stats">
            <li class="gallery-stats-item">
              <h3 class="stats-head">Likes</h3>
              <p class="stats-indicator">${e}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Views</h3>
              <p class="stats-indicator">${t}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Comments</h3>
              <p class="stats-indicator">${a}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Downloads</h3>
              <p class="stats-indicator">${l}</p>
            </li>
          </div>`).join("")}function f(o){return fetch(`https://pixabay.com/api/?key=41768952-3eb5a1819d194e4ebd739434d&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.statusText);return console.dir(r),r.json()})}
//# sourceMappingURL=commonHelpers.js.map
