(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2107f928"],{4316:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"payment-status"},[!t.isWeixin||t.orderInfo.paid||"offline"==t.orderInfo.pay_type?e("div",{staticClass:"iconfont icon-duihao2 bg-color-red"}):e("div",{staticClass:"iconfont icon-iconfontguanbi fail"}),!t.isWeixin&&"weixin"==t.orderInfo.pay_type||"offline"==t.orderInfo.pay_type?e("div",{staticClass:"status"},[t._v("\n    订单创建成功\n  ")]):t.orderInfo.paid?e("div",{staticClass:"status"},[t._v("订单支付成功")]):e("div",{staticClass:"status"},[t._v("订单支付失败")]),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"item acea-row row-between-wrapper"},[e("div",[t._v("订单编号")]),e("div",{staticClass:"itemCom",domProps:{textContent:t._s(t.orderInfo.order_id)}})]),e("div",{staticClass:"item acea-row row-between-wrapper"},[e("div",[t._v("下单时间")]),e("div",{staticClass:"itemCom",domProps:{textContent:t._s(t.orderInfo.add_time)}})]),e("div",{staticClass:"item acea-row row-between-wrapper"},[e("div",[t._v("支付方式")]),"weixin"==t.orderInfo.pay_type&&2==t.orderInfo.is_channel?e("div",{staticClass:"itemCom"},[t._v("\n        H5微信支付\n      ")]):t._e(),"weixin"==t.orderInfo.pay_type&&0==t.orderInfo.is_channel?e("div",{staticClass:"itemCom"},[t._v("\n        微信支付\n      ")]):t._e(),"yue"==t.orderInfo.pay_type?e("div",{staticClass:"itemCom"},[t._v("余额支付")]):t._e(),"offline"==t.orderInfo.pay_type?e("div",{staticClass:"itemCom"},[t._v("\n        线下支付\n      ")]):t._e()]),e("div",{staticClass:"item acea-row row-between-wrapper"},[e("div",[t._v("支付金额")]),e("div",{staticClass:"itemCom",domProps:{textContent:t._s(t.orderInfo.pay_price)}})]),0==t.orderInfo.paid&&"offline"!=t.orderInfo.pay_type&&t.isWeixin&&t.msgContent?e("div",{staticClass:"item acea-row row-between-wrapper"},[e("div",[t._v("失败原因")]),e("div",{staticClass:"itemCom",domProps:{textContent:t._s(t.msgContent)}})]):t._e()]),"weixin"==t.orderInfo.pay_type&&2==t.orderInfo.is_channel?e("div",[e("div",{staticClass:"returnBnt bg-color-red",on:{click:function(n){return t.goPages()}}},[t._v("查看支付结果")]),e("div",{staticClass:"returnBnt cart-color",on:{click:function(n){return t.goPages()}}},[t._v("\n      支付失败重新支付\n    ")])]):e("div",[e("div",{staticClass:"returnBnt bg-color-red",on:{click:function(n){return t.goPages()}}},[t._v("查看订单")]),e("div",{staticClass:"returnBnt cart-color",on:{click:function(n){return t.goPages("/")}}},[t._v("返回首页")])])])},o=[],i=e("cebc"),s=(e("7f7f"),e("2f62")),a=e("f8b7"),d=e("ed08"),u="PayMentStatus",c={name:u,props:{},data:function(){return{id:"",status:0,msgContent:"",orderInfo:{},isWeixin:Object(d["d"])()}},watch:{$route:function(t){t.query.msg&&(this.msgContent=t.query.msg),t.name===u&&this.id!==t.params.id&&(this.id=t.params.id,this.status=parseInt(t.params.status),this.getOrderInfo())}},computed:Object(i["a"])({},Object(s["b"])(["userInfo"])),mounted:function(){this.id=this.$route.params.id,this.msgContent=this.$route.query.msg,this.status=parseInt(this.$route.params.status),this.getOrderInfo()},methods:{goPages:function(t){var n=void 0!==t?t:"/order/detail/"+this.orderInfo.order_id;return 5===this.status&&void 0===t&&(n="/order/list/0"),this.$router.push({path:n})},getOrderInfo:function(){var t=this;Object(a["i"])(this.id).then(function(n){t.orderInfo=n.data,t.isWeixin?document.title=t.orderInfo.paid?"支付成功":"支付失败":document.title="订单创建成功"})}}},f=c,p=e("2877"),l=Object(p["a"])(f,r,o,!1,null,null,null);n["default"]=l.exports},f8b7:function(t,n,e){"use strict";e.d(n,"l",function(){return o}),e.d(n,"k",function(){return i}),e.d(n,"e",function(){return s}),e.d(n,"b",function(){return a}),e.d(n,"f",function(){return d}),e.d(n,"g",function(){return u}),e.d(n,"a",function(){return c}),e.d(n,"i",function(){return f}),e.d(n,"h",function(){return p}),e.d(n,"m",function(){return l}),e.d(n,"n",function(){return v}),e.d(n,"c",function(){return m}),e.d(n,"d",function(){return _}),e.d(n,"j",function(){return C});var r=e("b775");function o(t){return r["a"].post("/order/confirm",{cartId:t})}function i(t,n){return r["a"].post("/order/computed/"+t,n)}function s(t){return r["a"].get("/coupons/order/"+(parseFloat(t)||0))}function a(t,n){return r["a"].post("/order/create/"+t,n||{})}function d(){return r["a"].get("/order/data")}function u(t){return r["a"].get("/order/list",t)}function c(t){return r["a"].post("/order/cancel",{id:t})}function f(t){return r["a"].get("/order/detail/"+t)}function p(){return r["a"].get("/order/refund/reason")}function l(t){return r["a"].post("/order/refund/verify",t)}function v(t){return r["a"].post("/order/take",{uni:t})}function m(t){return r["a"].post("/order/del",{uni:t})}function _(t){return r["a"].get("order/express/"+t)}function C(t,n,e){return r["a"].post("order/pay",{uni:t,paytype:n,from:e})}}}]);
//# sourceMappingURL=chunk-2107f928.a047a5de.js.map