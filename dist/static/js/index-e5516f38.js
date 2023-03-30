import{useDept as y}from"./hook-bc3e297f.js";import{R,P as T,D as S}from"./refresh-0ada69da.js";import{u}from"./hooks-a73423ff.js";import{d as D}from"./edit-pen-37b5ced2.js";import{S as B}from"./search-4b9e88d3.js";import{A as U}from"./add-circle-line-5b89a592.js";import"./index-5df52834.js";import"./system-f36ab06b.js";import"./epTheme-5ae4c80f.js";const $={class:"main"},A=Vue.defineComponent({name:"Dept"}),J=Vue.defineComponent({...A,setup(F){const l=Vue.ref(),a=Vue.ref(),{form:t,loading:V,columns:d,dataList:p,onSearch:c,resetForm:m,handleUpdate:_,handleDelete:C,handleSelectionChange:h}=y();return(L,o)=>{var f;const x=Vue.resolveComponent("el-input"),r=Vue.resolveComponent("el-form-item"),i=Vue.resolveComponent("el-option"),b=Vue.resolveComponent("el-select"),n=Vue.resolveComponent("el-button"),w=Vue.resolveComponent("el-form"),N=Vue.resolveComponent("el-popconfirm"),v=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",$,[Vue.createVNode(w,{ref_key:"formRef",ref:l,inline:!0,model:Vue.unref(t),class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{label:"部门名称：",prop:"user"},{default:Vue.withCtx(()=>[Vue.createVNode(x,{modelValue:Vue.unref(t).user,"onUpdate:modelValue":o[0]||(o[0]=e=>Vue.unref(t).user=e),placeholder:"请输入部门名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),Vue.createVNode(r,{label:"状态：",prop:"status"},{default:Vue.withCtx(()=>[Vue.createVNode(b,{modelValue:Vue.unref(t).status,"onUpdate:modelValue":o[1]||(o[1]=e=>Vue.unref(t).status=e),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{label:"开启",value:"1"}),Vue.createVNode(i,{label:"关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(r,null,{default:Vue.withCtx(()=>[Vue.createVNode(n,{type:"primary",icon:Vue.unref(u)(Vue.unref(B)),loading:Vue.unref(V),onClick:Vue.unref(c)},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),Vue.createVNode(n,{icon:Vue.unref(u)(Vue.unref(R)),onClick:o[2]||(o[2]=e=>Vue.unref(m)(l.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),Vue.createVNode(Vue.unref(T),{title:"部门列表",tableRef:(f=a.value)==null?void 0:f.getTableRef(),onRefresh:Vue.unref(c)},{buttons:Vue.withCtx(()=>[Vue.createVNode(n,{type:"primary",icon:Vue.unref(u)(Vue.unref(U))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 新增部门 ")]),_:1},8,["icon"])]),default:Vue.withCtx(({size:e,checkList:g})=>[Vue.createVNode(v,{ref_key:"tableRef",ref:a,border:"","align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:Vue.unref(V),size:e,data:Vue.unref(p),columns:Vue.unref(d),checkList:g,"header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:Vue.unref(h)},{operation:Vue.withCtx(({row:s})=>[Vue.createVNode(n,{class:"reset-margin",link:"",type:"primary",size:e,onClick:k=>Vue.unref(_)(s),icon:Vue.unref(u)(Vue.unref(D))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 修改 ")]),_:2},1032,["size","onClick","icon"]),Vue.createVNode(N,{title:"是否确认删除?"},{reference:Vue.withCtx(()=>[Vue.createVNode(n,{class:"reset-margin",link:"",type:"primary",size:e,icon:Vue.unref(u)(Vue.unref(S)),onClick:k=>Vue.unref(C)(s)},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 删除 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","checkList","header-cell-style","onSelectionChange"])]),_:1},8,["tableRef","onRefresh"])])}}});export{J as default};
