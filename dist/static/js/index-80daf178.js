const o=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"通过iframe引入按钮页面")],-1),r=["src"],a=Vue.defineComponent({name:"Button"}),s=Vue.defineComponent({...a,setup(u){const{VITE_PUBLIC_PATH:e}={VITE_PORT:"8848",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"true",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},t=Vue.ref(`${e}html/button.html`);return(_,c)=>{const n=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(n,{shadow:"never"},{header:Vue.withCtx(()=>[o]),default:Vue.withCtx(()=>[Vue.createElementVNode("iframe",{src:t.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,r)]),_:1})}}});export{s as default};
