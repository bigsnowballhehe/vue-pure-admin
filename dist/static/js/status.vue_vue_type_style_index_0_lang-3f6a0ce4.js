import{t as s}from"./data-5a3a6e7f.js";const l=Vue.defineComponent({__name:"status",setup(n){const t=({rowIndex:e})=>e===1||e===5?"pure-warning-row":e===3||e===7?"pure-success-row":"",a=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];return(e,r)=>{const u=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createBlock(u,{data:Vue.unref(s),columns:a,"row-class-name":t},null,8,["data"])}}});export{l as _};
