(window.webpackJsonpngx_snake=window.webpackJsonpngx_snake||[]).push([[222,179],{222:(t,e,n)=>{"use strict";let s;function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{CustomStrategy:()=>i}),function(t){t[t.left=37]="left",t[t.up=38]="up",t[t.right=39]="right",t[t.down=40]="down"}(s||(s={}));class i{constructor(){r(this,"steps",0),r(this,"current",s.left)}step(t){const e=s.left;if(this.steps++,this.steps%3==0){const t=Math.floor(1e3*Math.random())%4+e;2!==Math.abs(t-this.current)&&(this.current=t)}return this.current}}}}]);