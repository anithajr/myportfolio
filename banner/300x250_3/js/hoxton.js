!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).hoxton=t()}(this,(function(){"use strict";var e=window,t=e.EB,a=e.EBG,n=e.Enabler,o=e.studio,c=e.dynamicContent;window.Creative||(window.Creative={});var i={data:{},dom:{},styles:{},ready:null,timeline:null,backup:window.location.href.indexOf("hoxtonBackup")>=0,get:function(e){return i.data[e]&&i.data[e].value},id:function(e){return document.getElementById(e)},exit:function(e,a){var o=e;switch(e||(o="Exit"),i.data.platform){case"sizmek":t&&t.clickthrough(o);break;case"doubleclick":n&&(a?n.exitOverride(o,a):n.exit(o));break;case"generic":window.open(window.clickTag);break;default:window.open(window.clickTag)}},setState:function(e){i.data[e.name]=e,Array.isArray(e.value)&&e.value.forEach((function(t){t.selected&&(i.data[e.name].selected=t.label)})),s()},getState:function(e){if(0===Object.keys(i.data).length)return console.warn("hoxton.js: getState called before DOM ready"),{};var t=e||{};return Object.keys(i.data).forEach((function(a){e&&e[a]&&console.warn('hoxton.js: "'.concat(a,'" already exists on supplied getState object, and has been overwritten')),t[a]=i.data[a].selected||i.data[a].value||i.data[a],""===i.data[a].value&&(t[a]="")})),t}},d=function(e){return new Promise((function(t,a){var n=new Image;n.onload=function(){t(n)},n.onerror=a,n.src=e}))},r=function(){var e=[];Object.keys(i.data).forEach((function(t){"image"===i.data[t].type&&e.push(i.data[t].value)})),function(e){return Promise.all(e.map(d))}(e).then((function(){return f()})).catch((function(e){return console.error("Failed Preload",e)}))},l=function(){switch(i.data.platform){case"doubleclick":var e={hoxton:[{}]};Object.keys(i.data).forEach((function(t){switch(i.data[t].type){case"image":e.hoxton[0][t]={},e.hoxton[0][t].Type="file",e.hoxton[0][t].Url=i.data[t].value;break;case"text":"exiturl"===t.toLowerCase()?(e.hoxton[0][t]={},e.hoxton[0][t].Url=i.data[t].value):e.hoxton[0][t]=i.data[t].value}})),n.setDevDynamicContent(e);var t=c.hoxton[0];Object.keys(i.data).forEach((function(e){i.data[e]&&i.data[e].value&&(i.data[e].value=t[e].Url?t[e].Url:t[e])})),t.hoxtonSettings&&(i.styles=t.hoxtonSettings),r();break;default:r()}},u=function(e){(i.dom[e]||i.styles[e])&&(i.dom[e].style=i.styles[e])},s=function(){var e=document.getElementById("hox-css");e||((e=document.createElement("style")).id="hox-css",document.body.prepend(e));var t="";Object.keys(i.data).forEach((function(e){"css"===i.data[e].type&&(t+=" ".concat(i.data[e].value))})),e.innerHTML=t},f=function(){Object.keys(i.data).forEach((function(e){switch(i.data[e].type){case"image":!function(e,t){var a=document.querySelector("#".concat(e));if(a)switch(i.dom[e]=a,a.tagName){case"DIV":a.style.background="url(".concat(t.value,")");break;case"IMG":a.src=t.value;break;default:a.src=t.value}}(e,i.data[e]),u(e,i.data[e]);break;case"backgroundImage":t=e,a=i.data[e],(n=document.querySelector("#".concat(t)))&&(i.dom[t]=n,n.style.background="url(".concat(a.value,")")),u(e,i.data[e]);break;case"video":!function(e){var t=document.querySelector("#".concat(e));t&&(i.dom[e]=t)}(e,i.data[e]),u(e,i.data[e]);break;case"text":!function(e,t){var a=document.querySelector("#".concat(e));a&&(a.innerHTML=t.value)}(e,i.data[e]),u(e,i.data[e]);break;case"array":Array.isArray(i.data[e].value)?i.data[e].value.forEach((function(t){t.selected&&(i.data[e].selected=t.label)})):i.data[e].selected=i.data[e].value}var t,a,n;s()})),document.body.style.display="block",document.body.dispatchEvent(i.ready),i.isInitialized&&"function"==typeof i.isInitialized?i.isInitialized():console.warn("Could not find an init function to call after preload. Set one with: hoxton.isInitialized = myFunction")};return window.addEventListener("load",(function(){switch(i.timeline?window.Creative.tl=i.timeline:console.warn("hoxton.js: A Greensock Timeline was not supplied to Hoxton. Set with hoxton.timeline = myTimeline"),document.body.style.display="none","function"==typeof Event?i.ready=new Event("hoxton-ready"):(i.ready=document.createEvent("Event"),i.ready.initEvent("hoxton-ready",!0,!0)),i.data=function(e){if(!document.getElementsByTagName(e)[0])return{error:"No Hoxton Tag Detected"};var t=document.getElementsByTagName(e)[0].getAttribute("data");try{t=decodeURIComponent(unescape(t))}catch(e){return{error:e}}return JSON.parse(t)}("hoxton"),i.data.platform){case"sizmek":t.isInitialized()?r():t.addEventListener(a.EventName.EB_INITIALIZED,r());break;case"doubleclick":n.isInitialized()?l():n.addEventListener(o.events.StudioEvent.INIT,(function(){return n.isPageLoaded()?l():n.addEventListener(o.events.StudioEvent.PAGE_LOADED,l)}));break;default:r()}}),!1),i}));