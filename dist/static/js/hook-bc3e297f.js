import{ak as c}from"./index-5df52834.js";import{g as p}from"./system-f36ab06b.js";function h(){const i=Vue.reactive({user:"",status:""}),n=Vue.ref([]),t=Vue.ref(!0),l=[{type:"selection",width:55,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",minWidth:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:e,props:d})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:d.size,type:e.status===1?"danger":"success",effect:"plain"},{default:()=>[e.status===0?"关闭":"开启"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:200},{label:"操作",fixed:"right",width:160,slot:"operation"}];function o(e){}function r(e){}function s(e){}function u(e){e&&(e.resetFields(),a())}async function a(){t.value=!0;const{data:e}=await p();n.value=c(e),setTimeout(()=>{t.value=!1},500)}return Vue.onMounted(()=>{a()}),{form:i,loading:t,columns:l,dataList:n,onSearch:a,resetForm:u,handleUpdate:o,handleDelete:r,handleSelectionChange:s}}export{h as useDept};
