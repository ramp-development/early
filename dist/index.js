"use strict";(()=>{var o=(n,e=document)=>e.querySelector(n)??void 0;var l=()=>{console.log("banner");let n="data-banner",e=o(`[${n}="component"]`);if(!e)return;let t=o(`[${n}="close"]`,e);if(!t)return;if(localStorage.getItem("bannerClosed")){r(e);return}t.addEventListener("click",()=>r(e));function r(m){m.style.display="none",localStorage.setItem("bannerClosed","true")}};var c=()=>{console.log("components"),l()};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{c()});})();