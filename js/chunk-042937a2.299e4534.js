(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-042937a2"],{"05ed":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1}},[e("div",{staticClass:"chart-card-header"},[e("div",{staticClass:"meta"},[e("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),e("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),e("div",{staticClass:"total"},[e("span",[t._v(t._s(t.total))])])]),e("div",{staticClass:"chart-card-content"},[e("div",{staticClass:"content-fix"},[t._t("default")],2)]),e("div",{staticClass:"chart-card-footer"},[e("div",{staticClass:"field"},[t._t("footer")],2)])])},i=[],n={name:"ChartCard",props:{title:{type:String,default:""},total:{type:String,default:""},loading:{type:Boolean,default:!1}}},s=n,l=(e("7227"),e("2877")),o=Object(l["a"])(s,r,i,!1,null,"bc1c776e",null);a["default"]=o.exports},"0923":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank"},[e("h4",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(a,r){return e("li",{key:r},[e("span",{class:r<3?"active":null},[t._v(t._s(r+1))]),e("span",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.total))])])})),0)])},i=[],n=(e("c5f6"),{name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}}),s=n,l=(e("cd1e"),e("2877")),o=Object(l["a"])(s,r,i,!1,null,"83c80048",null);a["default"]=o.exports},"1d43":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"antv-chart-mini"},[e("div",{staticClass:"chart-wrapper",style:{height:46}},[e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,padding:[36,0,18,0]}},[e("v-tooltip"),e("v-smooth-area",{attrs:{position:"x*y"}})],1)],1)])},i=[],n=[],s=(new Date).getTime(),l=0;l<10;l++)n.push({x:dayjs(new Date(s+864e5*l)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var o={name:"MiniArea",props:{dataSource:{type:Array,default:function(){return[]}},x:{type:String,default:"x"},y:{type:String,default:"y"}},data:function(){return{data:[],height:100}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){0===this.dataSource.length?this.data=n:this.data=this.dataSource}},c=o,d=(e("e0e1"),e("2877")),u=Object(d["a"])(c,r,i,!1,null,"0334746e",null);a["default"]=u.exports},2375:function(t,a,e){},"35c0":function(t,a,e){},"3c24":function(t,a,e){"use strict";var r=e("ab12"),i=e.n(r);i.a},"3f2c":function(t,a,e){"use strict";var r=e("6620e"),i=e.n(r);i.a},"4ec6":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[e("v-tooltip"),e("v-axis"),e("v-legend"),e("v-line",{attrs:{position:"type*y",color:"x"}}),e("v-point",{attrs:{position:"type*y",color:"x",size:4,"v-style":t.style,shape:"circle"}})],1)],1)},i=[],n=(e("ac4d"),e("8a81"),e("ac6a"),e("c5f6"),e("7104")),s=e("c917"),l={name:"LineChartMultid",mixins:[s["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jan",jeecg:7,jeebt:3.9},{type:"Feb",jeecg:6.9,jeebt:4.2},{type:"Mar",jeecg:9.5,jeebt:5.7},{type:"Apr",jeecg:14.5,jeebt:8.5},{type:"May",jeecg:18.4,jeebt:11.9},{type:"Jun",jeecg:21.5,jeebt:15.2},{type:"Jul",jeecg:25.2,jeebt:17},{type:"Aug",jeecg:26.5,jeebt:16.6},{type:"Sep",jeecg:23.3,jeebt:14.2},{type:"Oct",jeecg:18.3,jeebt:10.3},{type:"Nov",jeecg:13.9,jeebt:6.6},{type:"Dec",jeecg:9.6,jeebt:4.8}]}},fields:{type:Array,default:function(){return["jeecg","jeebt"]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{scale:[{dataKey:"x",min:0,max:1}],style:{stroke:"#fff",lineWidth:1}}},computed:{data:function(){var t=this,a=(new n["DataSet"].View).source(this.dataSource);a.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var e=a.rows;return e.forEach((function(a){var e=!0,r=!1,i=void 0;try{for(var n,s=t.aliases[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var l=n.value;if(l.field===a.x){a.x=l.alias;break}}}catch(o){r=!0,i=o}finally{try{e||null==s.return||s.return()}finally{if(r)throw i}}})),e}}},o=l,c=e("2877"),d=Object(c["a"])(o,r,i,!1,null,"7ba9da5d",null);a["default"]=d.exports},"6620e":function(t,a,e){},7227:function(t,a,e){"use strict";var r=e("2375"),i=e.n(r);i.a},"81d1":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head-info",class:t.center&&"center"},[e("span",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.content))]),t.bordered?e("em"):t._e()])},i=[],n={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},s=n,l=(e("c002"),e("2877")),o=Object(l["a"])(s,r,i,!1,null,"35671dcd",null);a["default"]=o.exports},"942d":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{width:null==t.width?"auto":t.width+"px"}},[e("v-chart",{attrs:{forceFit:null==t.width,height:t.height,data:t.data,padding:"0"}},[e("v-tooltip"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],n=(e("c5f6"),[]),s=(new Date).getTime(),l=0;l<10;l++)n.push({x:dayjs(new Date(s+864e5*l)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var o=["x*y",function(t,a){return{name:t,value:a}}],c=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],d={name:"MiniBar",props:{dataSource:{type:Array,default:function(){return[]}},width:{type:Number,default:null},height:{type:Number,default:200}},created:function(){0===this.dataSource.length?this.data=n:this.data=this.dataSource},data:function(){return{tooltip:o,data:[],scale:c}}},u=d,f=(e("3f2c"),e("2877")),p=Object(f["a"])(u,r,i,!1,null,"d7bf08d4",null);a["default"]=p.exports},"94bb":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总销售额",total:"￥126,560"}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n            12%\n          ")]),e("trend",{attrs:{flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            11%\n          ")])],1),e("template",{slot:"footer"},[t._v("日均销售额"),e("span",[t._v("￥ 234.56")])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"订单量",total:t._f("NumberFormat")(8846)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-area")],1),e("template",{slot:"footer"},[t._v("日订单量"),e("span",[t._v(" "+t._s(t._f("NumberFormat")("1234")))])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"支付笔数",total:t._f("NumberFormat")(6560)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-bar",{attrs:{height:40}})],1),e("template",{slot:"footer"},[t._v("转化率 "),e("span",[t._v("60%")])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"运营活动效果",total:"78%"}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:8}})],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("同周比")]),t._v("\n            12%\n          ")]),e("trend",{attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日环比")]),t._v("\n            80%\n          ")])],1)],2)],1)],1),e("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("div",{staticClass:"extra-item"},[e("a",[t._v("今日")]),e("a",[t._v("本周")]),e("a",[t._v("本月")]),e("a",[t._v("本年")])]),e("a-range-picker",{style:{width:"256px"}})],1),e("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"销售额"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额排行",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1),e("a-tab-pane",{key:"2",attrs:{tab:"销售趋势"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额趋势",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1)],1)],1)]),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"最近一周访问量统计"}},[e("a-row",[e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日IP",content:t.loginfo.todayIp}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"environment"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日访问",content:t.loginfo.todayVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"team"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"总访问量",content:t.loginfo.totalVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"rise"},slot:"indicator"})],1)],1)],1),e("line-chart-multid",{attrs:{fields:t.visitFields,dataSource:t.visitInfo}})],1)],1)],1)],1)},i=[],n=(e("456d"),e("ac6a"),e("05ed")),s=e("da05"),l=e("3896"),o=e("1d43"),c=e("942d"),d=e("bf13"),u=e("0923"),f=e("edd9"),p=e("4ec6"),h=e("81d1"),y=e("611e"),g=e("4ec3"),v=[],m=0;m<7;m++)v.push({name:"白鹭岛 "+(m+1)+" 号店",total:1234.56-100*m});for(var x=[],b=0;b<12;b+=1)x.push({x:"".concat(b+1,"月"),y:Math.floor(1e3*Math.random())+200});var _={name:"IndexChart",components:{ATooltip:l["a"],ACol:s["a"],ChartCard:n["default"],MiniArea:o["default"],MiniBar:c["default"],MiniProgress:d["default"],RankList:u["default"],Bar:f["default"],Trend:y["a"],LineChartMultid:p["default"],HeadInfo:h["default"]},data:function(){var t=this.$createElement;return{loading:!0,center:null,rankList:v,barData:x,loginfo:{},visitFields:["ip","visit"],visitInfo:[],indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px"})}},created:function(){var t=this;setTimeout((function(){t.loading=!t.loading}),1e3),this.initLogInfo()},methods:{initLogInfo:function(){var t=this;Object(g["t"])(null).then((function(a){a.success&&(Object.keys(a.result).forEach((function(t){a.result[t]=a.result[t]+""})),t.loginfo=a.result)})),Object(g["A"])().then((function(a){a.success&&(console.log("aaaaaa",a.result),t.visitInfo=a.result)}))}}},C=_,j=(e("fcd5"),e("2877")),w=Object(j["a"])(C,r,i,!1,null,"26521da6",null);a["default"]=w.exports},"969f":function(t,a,e){},ab12:function(t,a,e){},be4e:function(t,a,e){},bf13:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-mini-progress"},[e("div",{staticClass:"target",style:{left:t.target+"%"}},[e("span",{style:{backgroundColor:t.color}}),e("span",{style:{backgroundColor:t.color}})]),e("div",{staticClass:"progress-wrapper"},[e("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},i=[],n=(e("c5f6"),{name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}}),s=n,l=(e("3c24"),e("2877")),o=Object(l["a"])(s,r,i,!1,null,"bc81620e",null);a["default"]=o.exports},c002:function(t,a,e){"use strict";var r=e("facf"),i=e.n(r);i.a},c917:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var r={methods:{handleClick:function(t,a){this.handleEvent("click",t,a)},handleEvent:function(t,a,e){this.$emit(t,a,e)}}}},cd1e:function(t,a,e){"use strict";var r=e("be4e"),i=e.n(r);i.a},e0e1:function(t,a,e){"use strict";var r=e("35c0"),i=e.n(r);i.a},edd9:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[e("v-tooltip"),e("v-axis"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],n=(e("c5f6"),e("ca00")),s={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(n["s"])()}},l=s,o=e("2877"),c=Object(o["a"])(l,r,i,!1,null,null,null);a["default"]=c.exports},facf:function(t,a,e){},fcd5:function(t,a,e){"use strict";var r=e("969f"),i=e.n(r);i.a}}]);