import{d as r,I as f,aG as i,aH as s,aI as u}from"./index-16a5163c.js";function l(e,t){const o=/^IF-/;if(o.test(e)){const n=e.split(o)[1],c=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),I=n.slice(n.indexOf(" ")+1,n.length);return r({name:"FontIcon",render(){return f(i,{icon:c,iconType:I,...t})}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?e:typeof e=="object"?r({name:"OfflineIcon",render(){return f(s,{icon:e,...t})}}):r({name:"Icon",render(){const n=e&&e.includes(":")?u:s;return f(n,{icon:e,...t})}})}export{l as u};