(function(e){function t(t){for(var n,l,u=t[0],s=t[1],r=t[2],c=0,f=[];c<u.length;c++)l=u[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,r||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,u=1;u<a.length;u++){var s=a[u];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={index:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/v-animation/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var r=0;r<u.length;r++)t(u[r]);var m=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("2414")},"0adf":function(e,t,a){},2414:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"views"},[n("div",{staticClass:"el"},[n("v-animation",{staticClass:"logo",attrs:{name:e.playAnimation,duration:e.forms.duration,delay:e.forms.delay,count:e.forms.count,infinite:e.forms.infinite,direction:e.forms.direction}},[n("img",{staticClass:"el__img_absolute",attrs:{alt:"VAnimation",src:a("54b3")}}),n("img",{staticClass:"el__img_shadow",attrs:{alt:"VAnimation",src:a("54b3")}})]),n("v-animation",{attrs:{name:["fadeInLeft"],delay:2}},[n("h1",{staticClass:"el__title"},[e._v("v")])]),n("v-animation",{attrs:{name:"fadeInTopLeft",delay:1.8}},[n("h1",{staticClass:"el__title"},[e._v("A")])]),n("v-animation",{attrs:{name:"backInDown",delay:1.6}},[n("h1",{staticClass:"el__title"},[e._v("n")])]),n("v-animation",{attrs:{name:"zoomInRight",delay:1,duration:2}},[n("h1",{staticClass:"el__title"},[e._v("i")])]),n("v-animation",{attrs:{name:"zoomInUp",delay:1,duration:2}},[n("h1",{staticClass:"el__title"},[e._v("m")])]),n("v-animation",{attrs:{name:"zoomInDown",delay:1,duration:2}},[n("h1",{staticClass:"el__title"},[e._v("a")])]),n("v-animation",{attrs:{name:"zoomInLeft",delay:1,duration:2}},[n("h1",{staticClass:"el__title"},[e._v("t")])]),n("v-animation",{attrs:{name:"bounceIn",delay:1}},[n("h1",{staticClass:"el__title"},[e._v("i")])]),n("v-animation",{attrs:{name:"bounceInDown",delay:.4}},[n("h1",{staticClass:"el__title"},[e._v("o")])]),n("v-animation",{attrs:{name:"bounceInLeft",delay:0}},[n("h1",{staticClass:"el__title"},[e._v("n")])])],1)]),n("attr",{staticClass:"attr-wrap",on:{"on-change":e.onAttrChange,"on-copy":e.onCopy}}),n("type",{staticClass:"type-wrap",attrs:{value:e.playAnimation},on:{"on-change":e.onTypeChange}})],1)},i=[],l=(a("a15b"),a("2909")),u=a("5530"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("suspend",[a("template",{slot:"title"},[e._v("动画")]),e._l(e.animationData,(function(t,n){return a("div",{key:n,staticClass:"list",class:e.isChecked(t.value),attrs:{title:t.name},on:{click:function(a){return e.handleChecked(t)}}},[a("div",{staticClass:"list__icon"}),a("p",{staticClass:"list__name"},[e._v(e._s(t.name))])])}))],2)},r=[],m=(a("caad"),a("c975"),a("a434"),a("2532"),[{name:"bounce",value:"bounce"},{name:"flash",value:"flash"},{name:"pulse",value:"pulse"},{name:"rubberBand",value:"rubberBand"},{name:"shakeX",value:"shakeX"},{name:"shakeY",value:"shakeY"},{name:"headShake",value:"headShake"},{name:"swing",value:"swing"},{name:"tada",value:"tada"},{name:"wobble",value:"wobble"},{name:"jello",value:"jello"},{name:"heartBeat",value:"heartBeat"},{name:"backInDown",value:"backInDown"},{name:"backInLeft",value:"backInLeft"},{name:"backInRight",value:"backInRight"},{name:"backInUp",value:"backInUp"},{name:"backOutDown",value:"backOutDown"},{name:"backOutLeft",value:"backOutLeft"},{name:"backOutRight",value:"backOutRight"},{name:"backOutUp",value:"backOutUp"},{name:"bounceIn",value:"bounceIn"},{name:"bounceInDown",value:"bounceInDown"},{name:"bounceInLeft",value:"bounceInLeft"},{name:"bounceInRight",value:"bounceInRight"},{name:"bounceInUp",value:"bounceInUp"},{name:"bounceOut",value:"bounceOut"},{name:"bounceOutDown",value:"bounceOutDown"},{name:"bounceOutLeft",value:"bounceOutLeft"},{name:"bounceOutRight",value:"bounceOutRight"},{name:"bounceOutUp",value:"bounceOutUp"},{name:"fadeIn",value:"fadeIn"},{name:"fadeInDown",value:"fadeInDown"},{name:"fadeInDownBig",value:"fadeInDownBig"},{name:"fadeInLeft",value:"fadeInLeft"},{name:"fadeInLeftBig",value:"fadeInLeftBig"},{name:"fadeInRight",value:"fadeInRight"},{name:"fadeInRightBig",value:"fadeInRightBig"},{name:"fadeInUp",value:"fadeInUp"},{name:"fadeInUpBig",value:"fadeInUpBig"},{name:"fadeInTopLeft",value:"fadeInTopLeft"},{name:"fadeInTopRight",value:"fadeInTopRight"},{name:"fadeInBottomLeft",value:"fadeInBottomLeft"},{name:"fadeInBottomRight",value:"fadeInBottomRight"},{name:"fadeOut",value:"fadeOut"},{name:"fadeOutDown",value:"fadeOutDown"},{name:"fadeOutDownBig",value:"fadeOutDownBig"},{name:"fadeOutLeft",value:"fadeOutLeft"},{name:"fadeOutLeftBig",value:"fadeOutLeftBig"},{name:"fadeOutRight",value:"fadeOutRight"},{name:"fadeOutRightBig",value:"fadeOutRightBig"},{name:"fadeOutUp",value:"fadeOutUp"},{name:"fadeOutUpBig",value:"fadeOutUpBig"},{name:"fadeOutTopLeft",value:"fadeOutTopLeft"},{name:"fadeOutTopRight",value:"fadeOutTopRight"},{name:"fadeOutBottomRight",value:"fadeOutBottomRight"},{name:"fadeOutBottomLeft",value:"fadeOutBottomLeft"},{name:"flip",value:"flip"},{name:"flipInX",value:"flipInX"},{name:"flipInY",value:"flipInY"},{name:"flipOutX",value:"flipOutX"},{name:"flipOutY",value:"flipOutY"},{name:"lightSpeedInRight",value:"lightSpeedInRight"},{name:"lightSpeedInLeft",value:"lightSpeedInLeft"},{name:"lightSpeedOutRight",value:"lightSpeedOutRight"},{name:"lightSpeedOutLeft",value:"lightSpeedOutLeft"},{name:"rotateIn",value:"rotateIn"},{name:"rotateInDownLeft",value:"rotateInDownLeft"},{name:"rotateInDownRight",value:"rotateInDownRight"},{name:"rotateInUpLeft",value:"rotateInUpLeft"},{name:"rotateInUpRight",value:"rotateInUpRight"},{name:"rotateOut",value:"rotateOut"},{name:"rotateOutDownLeft",value:"rotateOutDownLeft"},{name:"rotateOutDownRight",value:"rotateOutDownRight"},{name:"rotateOutUpLeft",value:"rotateOutUpLeft"},{name:"rotateOutUpRight",value:"rotateOutUpRight"},{name:"hinge",value:"hinge"},{name:"jackInTheBox",value:"jackInTheBox"},{name:"rollIn",value:"rollIn"},{name:"rollOut",value:"rollOut"},{name:"zoomIn",value:"zoomIn"},{name:"zoomInDown",value:"zoomInDown"},{name:"zoomInLeft",value:"zoomInLeft"},{name:"zoomInRight",value:"zoomInRight"},{name:"zoomInUp",value:"zoomInUp"},{name:"zoomOut",value:"zoomOut"},{name:"zoomOutDown",value:"zoomOutDown"},{name:"zoomOutLeft",value:"zoomOutLeft"},{name:"zoomOutRight",value:"zoomOutRight"},{name:"zoomOutUp",value:"zoomOutUp"},{name:"slideInDown",value:"slideInDown"},{name:"slideInLeft",value:"slideInLeft"},{name:"slideInRight",value:"slideInRight"},{name:"slideInUp",value:"slideInUp"},{name:"slideOutDown",value:"slideOutDown"},{name:"slideOutLeft",value:"slideOutLeft"},{name:"slideOutRight",value:"slideOutRight"},{name:"slideOutUp",value:"slideOutUp"}]),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"suspend"},[e.$slots.title?a("div",{staticClass:"suspend__title"},[e._t("title")],2):e._e(),a("div",{staticClass:"suspend__content"},[e._t("default")],2)])},f=[],d={},v=d,p=(a("ecd5"),a("2877")),h=Object(p["a"])(v,c,f,!1,null,"2b091dce",null),g=h.exports,b={components:{suspend:g},props:{value:{type:Array,default:function(){return[]}}},data:function(){return{checkeds:[],animationData:m,menuList:["复制"],isInit:!1}},mounted:function(){var e;this.value&&this.value.length&&(e=this.checkeds).push.apply(e,Object(l["a"])(this.value))},methods:{isChecked:function(e){if(this.checkeds.includes(e))return"list_active"},handleChecked:function(e){var t=this.checkeds.indexOf(e.value);-1===t?this.checkeds.push(e.value):this.checkeds.splice(t,1),this.$emit("on-change",this.checkeds)}}},O=b,I=(a("8f34"),Object(p["a"])(O,s,r,!1,null,"11649088",null)),_=I.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("suspend",[a("el-form",{staticClass:"side__form",attrs:{model:e.forms,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"时间:"}},[a("el-slider",{attrs:{min:0,max:10,step:.5},model:{value:e.forms.duration,callback:function(t){e.$set(e.forms,"duration",t)},expression:"forms.duration"}})],1),a("el-form-item",{attrs:{label:"延迟:"}},[a("el-slider",{attrs:{min:0,max:10,step:.5},model:{value:e.forms.delay,callback:function(t){e.$set(e.forms,"delay",t)},expression:"forms.delay"}})],1),a("el-form-item",{attrs:{label:"次数:"}},[a("div",{staticClass:"count"},[a("span",{staticClass:"count__item"},[a("el-checkbox",{attrs:{border:"",size:"mini"},model:{value:e.forms.infinite,callback:function(t){e.$set(e.forms,"infinite",t)},expression:"forms.infinite"}},[e._v(" 无限播放 ")])],1),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.forms.infinite,expression:"!forms.infinite"}],staticClass:"count__item"},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right",size:"mini"},model:{value:e.forms.count,callback:function(t){e.$set(e.forms,"count",t)},expression:"forms.count"}})],1)])]),a("el-form-item",{attrs:{label:"复制动画:"}},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.handleCopy}},[e._v("复制已选动画")])],1)],1)],1)},w=[],L={components:{suspend:g},data:function(){return{forms:{duration:1.4,delay:0,count:1,infinite:!1,direction:0}}},watch:{forms:{handler:function(){this.onChange()},deep:!0}},methods:{onChange:function(){this.$emit("on-change",this.forms)},handleCopy:function(){this.$emit("on-copy")}}},k=L,C=(a("8fd7"),Object(p["a"])(k,y,w,!1,null,"1adcc8a3",null)),R=C.exports,D={components:{type:_,attr:R},data:function(){return{forms:{duration:1,delay:2.8,count:1,infinite:!1,direction:0},playAnimation:["bounceIn"]}},methods:{onCopy:function(){if(this.playAnimation.length<=0)return!1;var e=document.createElement("textarea");e.value=this.playAnimation.join(" "),e.style.cssText="position: fixed;left:-10000px;top: -10000px;z-index: -1;",e.value=this.playAnimation.join(" "),document.body.appendChild(e),e.select(),e.setSelectionRange(0,e.value.length);var t=document.execCommand("Copy");t&&this.$notify.success("复制成功"),document.body.removeChild(e)},onAttrChange:function(e){this.forms=Object(u["a"])(Object(u["a"])({},this.forms),e)},onTypeChange:function(e){var t;this.playAnimation.length=0,(t=this.playAnimation).push.apply(t,Object(l["a"])(e))}}},U=D,x=(a("5e97"),Object(p["a"])(U,o,i,!1,null,null,null)),B=x.exports,z=a("5c96"),j=a.n(z),S=(a("0fae"),a("97f9")),T=a.n(S);a("5cf3");n["default"].use(T.a),n["default"].use(j.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(B)}}).$mount("#app")},"472c":function(e,t,a){},"54b3":function(e,t,a){e.exports=a.p+"img/logo.5284d12d.png"},"5e97":function(e,t,a){"use strict";var n=a("97b3"),o=a.n(n);o.a},"866d":function(e,t,a){},"8f34":function(e,t,a){"use strict";var n=a("866d"),o=a.n(n);o.a},"8fd7":function(e,t,a){"use strict";var n=a("472c"),o=a.n(n);o.a},"97b3":function(e,t,a){},ecd5:function(e,t,a){"use strict";var n=a("0adf"),o=a.n(n);o.a}});
//# sourceMappingURL=index.5daeaf3c.js.map