import{S as c}from"./sortable.esm-fa38c9a5.js";import{n as s}from"./index-4b813511.js";import{a as m}from"./data-e9fe60c1.js";function v(){const o=Vue.ref(s(m,!0)),e=Vue.ref([{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}]),t=Vue.ref([{label:"ID",prop:r=>e.value[r].prop},{label:"\u65E5\u671F",prop:r=>e.value[r].prop},{label:"\u59D3\u540D",prop:r=>e.value[r].prop}]),l=r=>{r.preventDefault(),Vue.nextTick(()=>{const p=document.querySelector(".el-table__header-wrapper tr");c.create(p,{animation:300,delay:0,onEnd:({newIndex:n,oldIndex:a})=>{const u=e.value[a];e.value.splice(a,1),e.value.splice(n,0,u)}})})};return Vue.onMounted(()=>{Vue.nextTick(()=>{l(event)})}),{columns:t,dataList:o,columnsDrag:e}}export{v as useColumns};
