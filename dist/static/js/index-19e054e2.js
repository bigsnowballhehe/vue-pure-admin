import{ab as u,a8 as p,u as _,ah as v}from"./index-5df52834.js";const f={class:"card-header"},C=Vue.defineComponent({name:"PermissionPage"}),g=Vue.defineComponent({...C,setup(h){var n;const o=Vue.computed(()=>({width:"85vw",justifyContent:"start"})),t=Vue.ref((n=u())==null?void 0:n.username),r=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function s(){u().loginByUsername({username:t.value,password:"admin123"}).then(l=>{l.success&&(p().removeItem("async-routes"),_().clearAllCachePage(),v())})}return(l,a)=>{const c=Vue.resolveComponent("el-tag"),V=Vue.resolveComponent("el-option"),i=Vue.resolveComponent("el-select"),m=Vue.resolveComponent("el-card"),d=Vue.resolveComponent("el-space");return Vue.openBlock(),Vue.createBlock(d,{direction:"vertical",size:"large"},{default:Vue.withCtx(()=>[Vue.createVNode(c,{style:Vue.normalizeStyle(Vue.unref(o)),size:"large",effect:"dark"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ")]),_:1},8,["style"]),Vue.createVNode(m,{shadow:"never",style:Vue.normalizeStyle(Vue.unref(o))},{header:Vue.withCtx(()=>[Vue.createElementVNode("div",f,[Vue.createElementVNode("span",null,"当前角色："+Vue.toDisplayString(t.value),1)])]),default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),onChange:s},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r,e=>Vue.createVNode(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{g as default};
