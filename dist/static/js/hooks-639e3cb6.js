import{a3 as n}from"./index-4b813511.js";function h(){var i,o,s;const e=VueRouter.useRoute(),t=VueRouter.useRouter(),u=(i=e.query)!=null&&i.id?(o=e.query)==null?void 0:o.id:(s=e.params)==null?void 0:s.id;function r(a,m){m==="query"?(n().handleTags("push",{path:"/tabs/query-detail",name:"TabQueryDetail",query:{id:String(a)},meta:{title:{zh:`No.${a} - \u8BE6\u60C5\u4FE1\u606F`,en:`No.${a} - DetailInfo`},dynamicLevel:3}}),t.push({name:"TabQueryDetail",query:{id:String(a)}})):(n().handleTags("push",{path:"/tabs/params-detail/:id",name:"TabParamsDetail",params:{id:String(a)},meta:{title:{zh:`No.${a} - \u8BE6\u60C5\u4FE1\u606F`,en:`No.${a} - DetailInfo`}}}),t.push({name:"TabParamsDetail",params:{id:String(a)}}))}function l(a){Vue.onBeforeMount(()=>{u&&r(u,a)})}return{toDetail:r,initToDetail:l,id:u,router:t}}export{h as u};
