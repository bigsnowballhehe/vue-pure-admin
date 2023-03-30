import{M as a}from"./motion-a9ba222e.js";import{m as N}from"./message-5a54ef00.js";import{u as f,a as y}from"./verifyCode-1803b551.js";import{t as p,ab as v,$ as c}from"./index-5df52834.js";import{u as d}from"./hooks-a73423ff.js";import{L as w}from"./lock-fill-128c1e11.js";import{I as b}from"./iphone-89710f1a.js";const R={class:"w-full flex justify-between"},$=Vue.defineComponent({__name:"update",setup(k){const{t}=VueI18n.useI18n(),n=Vue.ref(!1),o=Vue.reactive({phone:"",verifyCode:"",password:"",repeatPassword:""}),s=Vue.ref(),{isDisabled:C,text:m}=f(),x=[{validator:(V,e,u)=>{e===""?u(new Error(p(c("login.passwordSureReg")))):o.password!==e?u(new Error(p(c("login.passwordDifferentReg")))):u()},trigger:"blur"}],_=async V=>{n.value=!0,V&&await V.validate((e,u)=>{if(e)setTimeout(()=>{N(p(c("login.passwordUpdateReg")),{type:"success"}),n.value=!1},2e3);else return n.value=!1,u})};function g(){f().end(),v().SET_CURRENTPAGE(0)}return(V,e)=>{const u=Vue.resolveComponent("el-input"),l=Vue.resolveComponent("el-form-item"),i=Vue.resolveComponent("el-button"),h=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock(h,{ref_key:"ruleFormRef",ref:s,model:o,rules:Vue.unref(y),size:"large"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(a),null,{default:Vue.withCtx(()=>[Vue.createVNode(l,{prop:"phone"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{clearable:"",modelValue:o.phone,"onUpdate:modelValue":e[0]||(e[0]=r=>o.phone=r),placeholder:Vue.unref(t)("login.phone"),"prefix-icon":Vue.unref(d)(Vue.unref(b))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),Vue.createVNode(Vue.unref(a),{delay:100},{default:Vue.withCtx(()=>[Vue.createVNode(l,{prop:"verifyCode"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",R,[Vue.createVNode(u,{clearable:"",modelValue:o.verifyCode,"onUpdate:modelValue":e[1]||(e[1]=r=>o.verifyCode=r),placeholder:Vue.unref(t)("login.smsVerifyCode"),"prefix-icon":Vue.unref(d)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),Vue.createVNode(i,{disabled:Vue.unref(C),class:"ml-2",onClick:e[2]||(e[2]=r=>Vue.unref(f)().start(s.value,"phone"))},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(m).length>0?Vue.unref(m)+Vue.unref(t)("login.info"):Vue.unref(t)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),Vue.createVNode(Vue.unref(a),{delay:150},{default:Vue.withCtx(()=>[Vue.createVNode(l,{prop:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{clearable:"","show-password":"",modelValue:o.password,"onUpdate:modelValue":e[3]||(e[3]=r=>o.password=r),placeholder:Vue.unref(t)("login.password"),"prefix-icon":Vue.unref(d)(Vue.unref(w))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),Vue.createVNode(Vue.unref(a),{delay:200},{default:Vue.withCtx(()=>[Vue.createVNode(l,{rules:x,prop:"repeatPassword"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{clearable:"","show-password":"",modelValue:o.repeatPassword,"onUpdate:modelValue":e[4]||(e[4]=r=>o.repeatPassword=r),placeholder:Vue.unref(t)("login.sure"),"prefix-icon":Vue.unref(d)(Vue.unref(w))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),Vue.createVNode(Vue.unref(a),{delay:250},{default:Vue.withCtx(()=>[Vue.createVNode(l,null,{default:Vue.withCtx(()=>[Vue.createVNode(i,{class:"w-full",size:"default",type:"primary",loading:n.value,onClick:e[5]||(e[5]=r=>_(s.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(t)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),Vue.createVNode(Vue.unref(a),{delay:300},{default:Vue.withCtx(()=>[Vue.createVNode(l,null,{default:Vue.withCtx(()=>[Vue.createVNode(i,{class:"w-full",size:"default",onClick:g},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(t)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{$ as _};
