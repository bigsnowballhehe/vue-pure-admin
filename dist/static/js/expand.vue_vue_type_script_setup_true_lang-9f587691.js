import{c as r}from"./data-5a3a6e7f.js";const u={class:"m-4"},p={class:"mb-2"},c={class:"mb-2"},V={class:"mb-2"},i={class:"mb-4"},m=Vue.createElementVNode("h3",null,"Family",-1),h=Vue.defineComponent({__name:"expand",setup(_){const a=Vue.ref(!1),l=Vue.ref(!1),s=[{type:"expand",slot:"expand"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}],d=[{label:"Name",prop:"name"},{label:"State",prop:"state"},{label:"City",prop:"city"},{label:"Address",prop:"address"},{label:"Zip",prop:"zip"}];return(b,t)=>{const o=Vue.resolveComponent("el-switch"),n=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createTextVNode(" switch parent border: "),Vue.createVNode(o,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},null,8,["modelValue"]),Vue.createTextVNode(" switch child border: "),Vue.createVNode(o,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,8,["modelValue"]),Vue.createVNode(n,{data:Vue.unref(r),columns:s,border:a.value},{expand:Vue.withCtx(({row:e})=>[Vue.createElementVNode("div",u,[Vue.createElementVNode("p",p,"State: "+Vue.toDisplayString(e.state),1),Vue.createElementVNode("p",c,"City: "+Vue.toDisplayString(e.city),1),Vue.createElementVNode("p",V,"Address: "+Vue.toDisplayString(e.address),1),Vue.createElementVNode("p",i,"Zip: "+Vue.toDisplayString(e.zip),1),m,Vue.createVNode(n,{data:e.family,columns:d,border:l.value},null,8,["data","border"])])]),_:1},8,["data","border"])])}}});export{h as _};
