(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-prepareView-prepareView"],{"1b26":function(t,i,e){"use strict";e.r(i);var n=e("1cd5"),a=e("d245");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("936f");var r=e("828b"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"39a45cf2",null,!1,n["a"],void 0);i["default"]=c.exports},"1cd5":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:e("f2a4"),mode:"widthFix"},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imgload(i,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-image",{staticClass:"w-400",attrs:{src:"/static/kaishi.png",mode:"widthFix"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toDati.apply(void 0,arguments)}}})],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:e("6d6b"),mode:"widthFix"},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imgload(i,2)}}})],1)],1)},a=[]},"329a":function(t,i,e){var n=e("ef23");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("b53414a0",n,!0,{sourceMap:!1,shadowMode:!1})},"6d6b":function(t,i,e){t.exports=e.p+"static/datibottom.jpg"},"936f":function(t,i,e){"use strict";var n=e("329a"),a=e.n(n);a.a},d245:function(t,i,e){"use strict";e.r(i);var n=e("d49e"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},d49e:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1}},onLoad:function(){var t=uni.getSystemInfoSync(),i=t.screenWidth,e=t.screenHeight;console.log("屏幕的原始高");var n=750/i,a=n*e;this.screenHeightPx=a,console.log(n,i,e,a)},methods:{toDati:function(){uni.navigateTo({url:"/pages/dati/dati"})},imgload:function(t,i){console.log("阿萨德",t,i),1==i&&(this.img1=t.detail.height/2),2==i&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};i.default=n},ef23:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,".cenbterbg[data-v-39a45cf2]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-39a45cf2]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-39a45cf2]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-39a45cf2]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-39a45cf2]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}",""]),t.exports=i},f2a4:function(t,i,e){t.exports=e.p+"static/datitop.jpg"}}]);