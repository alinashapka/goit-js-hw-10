import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".delay-input"),r=document.querySelector("button[type='submit']");r.addEventListener("click",f=>{f.preventDefault();const e=i.value,t=document.querySelector("input[name='state']:checked").value;new Promise((s,l)=>{setTimeout(()=>{t==="fulfilled"?s():t==="rejected"&&l()},e)}).then(()=>{o.show({title:"✅",message:`Fulfilled promise in ${e}ms`,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#59a10d"})}).catch(()=>{o.show({title:"❌",message:`Rejected promise in ${e}ms`,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#ef4040"})})});
//# sourceMappingURL=2-snackbar.js.map
