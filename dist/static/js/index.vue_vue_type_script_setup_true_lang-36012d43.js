import{useColumns as l}from"./columns-be0de74a.js";const c={class:"flex"},r={class:"w-[700px]"},m=Vue.defineComponent({__name:"index",setup(s){const{columns:e,dataList:o,columnsDrag:t}=l();return(a,_)=>{const n=Vue.resolveComponent("el-scrollbar"),u=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createVNode(n,{height:"700px"},{default:Vue.withCtx(()=>[Vue.createElementVNode("code",null,[Vue.createElementVNode("pre",r," "+Vue.toDisplayString(Vue.unref(t)),1)])]),_:1}),Vue.createVNode(u,{"row-key":"id",data:Vue.unref(o),columns:Vue.unref(e)},null,8,["data","columns"])])}}});export{m as _};
