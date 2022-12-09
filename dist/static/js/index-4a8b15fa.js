import{n as N,d as E,av as v,e as D,a3 as s,g as d,aw as F}from"./index-4b813511.js";import{u as B}from"./hooks-639e3cb6.js";const _=Vue.createElementVNode("div",null,"\u6807\u7B7E\u9875\u590D\u7528\uFF0C\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED",-1),k={class:"flex flex-wrap items-center"},x=Vue.createElementVNode("p",null,"query\u4F20\u53C2\u6A21\u5F0F\uFF1A",-1),A={class:"flex flex-wrap items-center"},g=Vue.createElementVNode("p",null,"params\u4F20\u53C2\u6A21\u5F0F\uFF1A",-1),w=Vue.defineComponent({name:"Tabs"}),b=Vue.defineComponent({...w,setup(T){const{toDetail:r,router:i}=B(),c=N(E().wholeMenus,!0),a=Vue.computed(()=>v(D(c),0,{disabled:!0})),l=Vue.ref([]),V=Vue.computed(()=>{var t;return(t=s())==null?void 0:t.multiTags});function m(){l.value.length!==0&&l.value.forEach(t=>{var n;const u=(n=F(a.value,t).redirect)!=null?n:F(a.value,t).path;s().handleTags("splice",u),u==="/tabs/index"&&i.push({path:V.value[V.value.length-1].path})})}return(t,u)=>{const n=Vue.resolveComponent("el-button"),o=Vue.resolveComponent("el-divider"),C=Vue.resolveComponent("el-tree-select"),p=Vue.resolveComponent("el-link"),f=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(f,null,{header:Vue.withCtx(()=>[_]),default:Vue.withCtx(()=>[Vue.createElementVNode("div",k,[x,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(6,e=>Vue.createVNode(n,{class:"m-2",key:e,onClick:h=>Vue.unref(r)(e,"query")},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u6253\u5F00"+Vue.toDisplayString(e)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),Vue.createVNode(o),Vue.createElementVNode("div",A,[g,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(6,e=>Vue.createVNode(n,{class:"m-2",key:e,onClick:h=>Vue.unref(r)(e,"params")},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u6253\u5F00"+Vue.toDisplayString(e)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),Vue.createVNode(o),Vue.createVNode(C,{class:"w-[300px]","node-key":"uniqueId",placeholder:"\u8BF7\u9009\u62E9\u8981\u5173\u95ED\u7684\u6807\u7B7E",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>Vue.unref(d)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:Vue.unref(a),modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=e=>l.value=e)},{default:Vue.withCtx(({data:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(d)(e.meta.title)),1)]),_:1},8,["props","data","modelValue"]),Vue.createVNode(n,{class:"m-2",onClick:m},{default:Vue.withCtx(()=>[Vue.createTextVNode("\u5173\u95ED\u6807\u7B7E")]),_:1}),Vue.createVNode(o),Vue.createVNode(n,{onClick:u[1]||(u[1]=e=>t.$router.push({name:"Menu1-2-2"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350\uFF09 ")]),_:1}),Vue.createVNode(n,{onClick:u[2]||(u[2]=e=>t.$router.push("/nested/menu1/menu1-2/menu1-2-2"))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u76F4\u63A5\u4F20\u8981\u8DF3\u8F6C\u7684\u8DEF\u5F84\uFF09 ")]),_:1}),Vue.createVNode(n,{onClick:u[3]||(u[3]=e=>t.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20path\u5BF9\u8C61\uFF09 ")]),_:1}),Vue.createVNode(o),Vue.createVNode(n,{onClick:u[4]||(u[4]=e=>t.$router.push({name:"Menu1-2-2",query:{text:"\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350"}}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u643A\u53C2\u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350\uFF09 ")]),_:1}),Vue.createVNode(n,{onClick:u[5]||(u[5]=e=>t.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"\u4F20path\u5BF9\u8C61"}}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u643A\u53C2\u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20path\u5BF9\u8C61\uFF09 ")]),_:1}),Vue.createVNode(p,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u70B9\u51FB\u67E5\u770B\u66F4\u591A\u8DF3\u8F6C\u65B9\u5F0F ")]),_:1}),Vue.createVNode(o),Vue.createVNode(n,{onClick:u[6]||(u[6]=e=>t.$router.push({name:"Empty"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u8DF3\u8F6C\u65E0Layout\u7684\u7A7A\u767D\u9875\u9762 ")]),_:1})]),_:1})}}});export{b as default};
