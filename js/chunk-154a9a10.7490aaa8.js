(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154a9a10"],{"12c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"事项"}},[a("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.type,callback:function(t){e.$set(e.queryParam,"type",t)},expression:"queryParam.type"}},[a("a-select-option",{attrs:{value:"审批"}},[e._v("审批")]),a("a-select-option",{attrs:{value:"知会"}},[e._v("知会")])],1)],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"业务"}},[a("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}},e._l(e.tableNameList,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"主题"}},[a("a-input",{attrs:{placeholder:"请输入主题信息"},model:{value:e.queryParam.topic,callback:function(t){e.$set(e.queryParam,"topic",t)},expression:"queryParam.topic"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"时间"}},[a("a-range-picker",{attrs:{format:"YYYY-MM-DD"},model:{value:e.queryParam.time,callback:function(t){e.$set(e.queryParam,"time",t)},expression:"queryParam.time"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"流程发起人"}},[a("a-input",{attrs:{placeholder:"请输入流程发起人"},model:{value:e.queryParam.startman,callback:function(t){e.$set(e.queryParam,"startman",t)},expression:"queryParam.startman"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{staticStyle:{"margin-left":"0px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("a-col",{attrs:{md:24,sm:24}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:e.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:e.columns,dataSource:e.dataWaitList,pagination:!0},scopedSlots:e._u([{key:"type",fn:function(t,r){return a("a",{},[a("a-menu-item",[a("a",{attrs:{"data-info":JSON.stringify(r)},on:{click:function(t){return e.handleDetailWF(r)}}},[a("span",{domProps:{innerHTML:e._s(r.type)}})])])],1)}},{key:"topic",fn:function(t,r){return a("a",{},[a("a-menu-item",[a("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(r)},on:{click:function(t){return e.handleDetailWF(r)}}},[a("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:e._s(r.topic)}})])])],1)}},{key:"name",fn:function(t,r){return a("span",{},[a("a-tag",{key:r.name,attrs:{color:r.name.length>5?"geekblue":"green"},on:{click:function(t){return e.handleDetailWF(r)}}},[e._v(e._s(r.name.toUpperCase()))])],1)}},{key:"username",fn:function(t){return a("span",{},e._l(t,(function(t){return a("a-tag",{key:t,staticStyle:{"margin-top":"5px"},attrs:{color:"admin"===t?"volcano":t.length>5?"geekblue":"green"}},[e._v(e._s(t))])})),1)}},{key:"create_time",fn:function(t,r){return a("span",{},[a("a-tag",{key:r.create_time,attrs:{color:"red"}},[e._v(e._s(r.create_time))])],1)}}])})]],2)],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("da05"),o=a("290c"),u=a("261e"),c=a("0fea"),l=a("5d2d"),d=a("ca00"),m=a("c32d"),p=[{title:"办理事项",dataIndex:"type",key:"type",slots:{title:"type"},width:100,align:"center",scopedSlots:{customRender:"type"}},{title:"业务",width:100,align:"center",key:"name",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"主题",width:400,align:"left",key:"topic",dataIndex:"topic",scopedSlots:{customRender:"topic"}},{title:"操作人员",key:"username",width:150,align:"left",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"流程发起人",key:"proponents",width:150,align:"left",dataIndex:"proponents",scopedSlots:{customRender:"proponents"}},{title:"创建时间",width:100,align:"center",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}}],h={components:{ATextarea:u["a"],ARow:o["a"],ACol:s["a"]},name:"Printgzsld",props:{reBizCode:{type:String,default:""}},data:function(){return{columns:p,labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:8}},activeKey:1,dataWaitList:[],dataDoneList:[],tableNameList:[],queryParam:{},spinning:!1}},created:function(){this.loadData()},methods:{loadData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["e"]("cur_user"),e.next=3,c["queryTableAll"]("v_table_name");case 3:if(a=e.sent,this.tableNameList=a,this.queryParam=l["e"]("system_wait_list_user@".concat(t.username)),""!=this.queryParam&&null!=this.queryParam&&"{}"!=JSON.stringify(this.queryParam)&&'{"startman":""}'!=JSON.stringify(this.queryParam)){e.next=12;break}return this.queryParam={},e.next=10,this.getDate();case 10:e.next=15;break;case 12:return this.queryParam.time.length>0&&(this.queryParam.time[0]=d["i"](this.queryParam.time[0],"yyyy-MM-dd"),this.queryParam.time[1]=d["i"](this.queryParam.time[1],"yyyy-MM-dd"),this.queryParam.time=[m(this.queryParam.time[0],"YYYY-MM-DD"),m(this.queryParam.time[1],"YYYY-MM-DD")]),e.next=15,this.searchQuery();case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=this.activeKey&&2!=this.activeKey){e.next=14;break}if(t=l["e"]("cur_user"),a=t["username"],r=t["realname"],1!=this.activeKey){e.next=10;break}return e.next=7,c["queryProcessLogWaitAll"](a,r);case 7:this.dataWaitList=e.sent,e.next=14;break;case 10:if(2!=this.activeKey){e.next=14;break}return e.next=13,c["queryProcessLogDoneAll"](a,r);case 13:this.dataDoneList=e.sent;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCancel:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewVisible=!1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fileList,this.fileList=a;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleDetailWF:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=JSON.parse(JSON.stringify(t)),r=l["e"]("cur_user"),n=a["tname"],i="知会"==a["type"]?"notify":"workflow",s="/workflow/view?table_name=".concat(n,"&id=").concat(a.id,"&processLogID=").concat(a.pid,"&user=").concat(r.username,"&type=").concat(i),this.$router.push(s);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["e"]("cur_user"),a=t["username"],e.next=4,c["queryProcessLogWaitByParamAll"](a,this.queryParam);case 4:this.dataWaitList=e.sent,l["g"]("system_wait_list_user@".concat(t.username),JSON.stringify(this.queryParam),3600),console.log("dataWaitList :"+JSON.stringify(this.dataWaitList));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchReset:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParam={};case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},f=h,y=(a("8375"),a("2877")),g=Object(y["a"])(f,r,n,!1,null,"625089d3",null);t["default"]=g.exports},"261e":function(e,t,a){"use strict";var r=a("92fa"),n=a.n(r),i=a("6042"),s=a.n(i),o=a("41b2"),u=a.n(o),c=a("4d26"),l=a.n(c),d=a("0464"),m=a("6dd8"),p=a("c973"),h="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",f=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],y={},g=void 0;function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&y[a])return y[a];var r=window.getComputedStyle(e),n=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),i=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),s=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),o=f.map((function(e){return e+":"+r.getPropertyValue(e)})).join(";"),u={sizingStyle:o,paddingSize:i,borderSize:s,boxSizing:n};return t&&a&&(y[a]=u),u}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;g||(g=document.createElement("textarea"),document.body.appendChild(g)),e.getAttribute("wrap")?g.setAttribute("wrap",e.getAttribute("wrap")):g.removeAttribute("wrap");var n=b(e,t),i=n.paddingSize,s=n.borderSize,o=n.boxSizing,u=n.sizingStyle;g.setAttribute("style",u+";"+h),g.value=e.value||e.placeholder||"";var c=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER,d=g.scrollHeight,m=void 0;if("border-box"===o?d+=s:"content-box"===o&&(d-=i),null!==a||null!==r){g.value=" ";var p=g.scrollHeight-i;null!==a&&(c=p*a,"border-box"===o&&(c=c+i+s),d=Math.max(c,d)),null!==r&&(l=p*r,"border-box"===o&&(l=l+i+s),m=d>l?"":"hidden",d=Math.min(l,d))}return r||(m="hidden"),{height:d+"px",minHeight:c+"px",maxHeight:l+"px",overflowY:m}}var x=a("daa3"),w=a("4df5");function k(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)}function P(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}function S(e){return"undefined"===typeof e||null===e?"":e}function z(){}t["a"]={name:"ATextarea",model:{prop:"value",event:"change.value"},props:u()({},p["a"],{autosize:[Object,Boolean]}),inject:{configProvider:{default:function(){return w["a"]}}},data:function(){var e=this.$props,t=e.value,a=void 0===t?"":t,r=e.defaultValue,n=void 0===r?"":r;return{stateValue:S(Object(x["b"])(this,"value")?a:n),nextFrameActionId:void 0,textareaStyles:{}}},computed:{},watch:{value:function(e){var t=this;this.$nextTick((function(){t.resizeOnNextFrame()})),this.stateValue=S(e)},autosize:function(e){!e&&this.$refs.textArea&&(this.textareaStyles=Object(d["a"])(this.textareaStyles,["overflowY"]))}},mounted:function(){var e=this;this.$nextTick((function(){e.resizeTextarea(),e.updateResizeObserverHook(),e.autoFocus&&e.focus()}))},updated:function(){this.updateResizeObserverHook()},beforeDestroy:function(){this.resizeObserver&&this.resizeObserver.disconnect()},methods:{resizeOnNextFrame:function(){this.nextFrameActionId&&P(this.nextFrameActionId),this.nextFrameActionId=k(this.resizeTextarea)},updateResizeObserverHook:function(){!this.resizeObserver&&this.$props.autosize?(this.resizeObserver=new m["a"](this.resizeOnNextFrame),this.resizeObserver.observe(this.$refs.textArea)):this.resizeObserver&&!this.$props.autosize&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},handleKeyDown:function(e){13===e.keyCode&&this.$emit("pressEnter",e),this.$emit("keydown",e)},resizeTextarea:function(){var e=this.$props.autosize;if(e&&this.$refs.textArea){var t=e.minRows,a=e.maxRows,r=v(this.$refs.textArea,!1,t,a);this.textareaStyles=r}},handleTextareaChange:function(e){var t=e.target,a=t.value,r=t.composing;r||this.stateValue===a||(Object(x["b"])(this,"value")?this.$forceUpdate():(this.stateValue=a,this.resizeTextarea()),this.$emit("change.value",a),this.$emit("change",e),this.$emit("input",e))},focus:function(){this.$refs.textArea.focus()},blur:function(){this.$refs.textArea.blur()}},render:function(){var e=arguments[0],t=this.stateValue,a=this.handleKeyDown,r=this.handleTextareaChange,i=this.textareaStyles,o=this.$attrs,c=this.$listeners,m=this.prefixCls,p=this.disabled,h=Object(d["a"])(this.$props,["prefixCls","autosize","type","value","defaultValue","lazy"]),f=this.configProvider.getPrefixCls,y=f("input",m),g=l()(y,s()({},y+"-disabled",p)),b={directives:[{name:"ant-input"}],attrs:u()({},h,o),on:u()({},c,{keydown:a,input:r,change:z})};return e("textarea",n()([b,{domProps:{value:t},class:g,style:i,ref:"textArea"}]))}}},"290c":function(e,t,a){"use strict";var r=a("6042"),n=a.n(r),i=a("1098"),s=a.n(i),o=a("41b2"),u=a.n(o),c=a("4d91"),l=a("b488"),d=a("4df5"),m=null;if("undefined"!==typeof window){var p=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||p,m=a("8e95")}var h=c["a"].shape({xs:c["a"].number,sm:c["a"].number,md:c["a"].number,lg:c["a"].number,xl:c["a"].number,xxl:c["a"].number}).loose,f={gutter:c["a"].oneOfType([c["a"].number,h]),type:c["a"].oneOf(["flex"]),align:c["a"].oneOf(["top","middle","bottom"]),justify:c["a"].oneOf(["start","end","center","space-around","space-between"]),prefixCls:c["a"].string},y=["xxl","xl","lg","md","sm","xs"],g={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t["a"]={name:"ARow",mixins:[l["a"]],props:u()({},f,{gutter:c["a"].oneOfType([c["a"].number,h]).def(0)}),provide:function(){return{rowContext:this}},inject:{configProvider:{default:function(){return d["a"]}}},data:function(){return{screens:{}}},mounted:function(){var e=this;this.$nextTick((function(){Object.keys(g).map((function(t){return m.register(g[t],{match:function(){"object"===s()(e.gutter)&&e.setState((function(e){return{screens:u()({},e.screens,n()({},t,!0))}}))},unmatch:function(){"object"===s()(e.gutter)&&e.setState((function(e){return{screens:u()({},e.screens,n()({},t,!1))}}))},destroy:function(){}})}))}))},beforeDestroy:function(){Object.keys(g).map((function(e){return m.unregister(g[e])}))},methods:{getGutter:function(){var e=this.gutter;if("object"===("undefined"===typeof e?"undefined":s()(e)))for(var t=0;t<y.length;t++){var a=y[t];if(this.screens[a]&&void 0!==e[a])return e[a]}return e}},render:function(){var e,t=arguments[0],a=this.type,r=this.justify,i=this.align,s=this.prefixCls,o=this.$slots,u=this.configProvider.getPrefixCls,c=u("row",s),l=this.getGutter(),d=(e={},n()(e,c,!a),n()(e,c+"-"+a,a),n()(e,c+"-"+a+"-"+r,a&&r),n()(e,c+"-"+a+"-"+i,a&&i),e),m=l>0?{marginLeft:l/-2+"px",marginRight:l/-2+"px"}:{};return t("div",{class:d,style:m},[o["default"]])}}},"5fbf":function(e,t,a){},8375:function(e,t,a){"use strict";var r=a("5fbf"),n=a.n(r);n.a},c973:function(e,t,a){"use strict";var r=a("4d91");t["a"]={prefixCls:r["a"].string,inputPrefixCls:r["a"].string,defaultValue:[String,Number],value:[String,Number],placeholder:[String,Number],type:{default:"text",type:String},name:String,size:{validator:function(e){return["small","large","default"].includes(e)}},disabled:{default:!1,type:Boolean},readOnly:Boolean,addonBefore:r["a"].any,addonAfter:r["a"].any,prefix:r["a"].any,suffix:r["a"].any,spellCheck:Boolean,autoFocus:Boolean,allowClear:Boolean,lazy:{default:!0,type:Boolean}}}}]);