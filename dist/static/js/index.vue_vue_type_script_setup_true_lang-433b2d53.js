import{useColumns as s}from"./columns-246fe7fa.js";const f=Vue.createElementVNode("p",null,"\u5206\u9875\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF1A",-1),h=Vue.defineComponent({__name:"index",setup(_){const{loading:t,columns:a,dataList:r,pagination:e,loadingConfig:l,paginationAlign:n,onSizeChange:i,onCurrentChange:V}=s();return(m,u)=>{const o=Vue.resolveComponent("el-radio-button"),c=Vue.resolveComponent("el-radio-group"),d=Vue.resolveComponent("el-space"),g=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(d,{class:"float-right mb-2"},{default:Vue.withCtx(()=>[f,Vue.createVNode(c,{modelValue:Vue.unref(n),"onUpdate:modelValue":u[0]||(u[0]=p=>Vue.isRef(n)?n.value=p:null)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{label:"right"},{default:Vue.withCtx(()=>[Vue.createTextVNode("right")]),_:1}),Vue.createVNode(o,{label:"center"},{default:Vue.withCtx(()=>[Vue.createTextVNode("center")]),_:1}),Vue.createVNode(o,{label:"left"},{default:Vue.withCtx(()=>[Vue.createTextVNode("left")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(g,{border:"","row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:Vue.unref(t),"loading-config":Vue.unref(l),height:440,data:Vue.unref(r).slice((Vue.unref(e).currentPage-1)*Vue.unref(e).pageSize,Vue.unref(e).currentPage*Vue.unref(e).pageSize),columns:Vue.unref(a),pagination:Vue.unref(e),onSizeChange:Vue.unref(i),onCurrentChange:Vue.unref(V)},null,8,["loading","loading-config","data","columns","pagination","onSizeChange","onCurrentChange"])])}}});export{h as _};
