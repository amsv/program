/*! For license information please see stats.js.LICENSE.txt */
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=430)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.querySelector=function(t,e){(0,i.isString)(t)&&([e,t]=[t,document]);return t.querySelector(e)},e.querySelectorAll=function(t,e){(0,i.isString)(t)&&([e,t]=[t,document]);return t.querySelectorAll(e)};var i=n(2)},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=function(t){return Array.isArray(t)},e.isDesktop=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;return window.matchMedia("(min-width: "+t+"px )").matches},e.isFunction=function(t){return"function"==typeof t},e.isString=function(t){return"string"==typeof t},e.isTouchDevice=function(){return"ontouchstart"in window||"DocumentTouch"in window&&document instanceof DocumentTouch}},20:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.request=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new XMLHttpRequest;n.open(e.method||"get",t),(0,i.isFunction)(e.success)||(e.success=s.dummy);(0,i.isFunction)(e.failure)||(e.failure=s.dummy);if(e.headers)for(let t in e.headers)e.headers.hasOwnProperty(t)&&n.setRequestHeader(t,e.headers[t]);n.addEventListener("readystatechange",(function(){4===n.readyState&&(200===n.status?e.success(n.responseText,n.status):e.failure(n.responseText,n.status))})),n.send(e.data||null)};var i=n(2),s=n(21)},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dummy=function(){}},430:function(t,e,n){t.exports=n(431)},431:function(t,e,n){"use strict";var i=n(20),s=n(0);const r="haStats",o="task-stats",a={COURSE_TASK:1,BLOG_TASK:2,PERFORMANCE:3},u={init(t){const{apiUrl:e,token:n,startTime:i,uniqId:s,userId:a,minEventsCnt:u,minSendTime:d}=t;this._apiUrl=e,this._token=n,this._expiresIn=n?1e3*JSON.parse(atob(/\.(.*?)\./.exec(n)[1])).exp:Date.now(),this._userId=Number.parseInt(a,10),this._uniqId=s,this._defaultMinEventsCnt=u?Number.parseInt(u,10):20,this._defaultMinSendTime=d?1e3*Number.parseInt(d,10):2e4,this._minEventsCnt=this._defaultMinEventsCnt,this._minSendTime=this._defaultMinSendTime,this._startAt=Date.now(),this._serverStartTime=i?1e3*Number.parseInt(i,10):this._startAt,this._timeDiff=this._serverStartTime-this._startAt,this._storageKey="task-stats."+Date.now()+String(Math.random()).slice(2),this._lastSentAt=this._startAt,this._sendingNow=!1,this._unloadingNow=!1,this._listeners={},this._eventLog=[],window.addEventListener("pagehide",(()=>this._onUnload())),window.addEventListener("unload",(()=>this._onUnload()));try{const t=Object.keys(localStorage).filter((t=>t.startsWith(o)));if(t.length){const e=t.map((t=>JSON.parse(localStorage.getItem(t)))).reduce(((t,e)=>t.concat(...e)),[]);this._eventLog.unshift(...e),this._keepStats(!0),t.forEach((t=>localStorage.removeItem(t)))}}catch(t){}this._exploreProp(r)},add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{defer:n,force:i}=e;this._logEvent(t),n||this._keepStats(i)},on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)},_emit(t){this._listeners[t]&&this._listeners[t].forEach((t=>t()))},_exploreProp(t){window[t]&&(window[t].on&&Array.isArray(window[t].on.q)&&window[t].on.q.forEach((t=>this.on(...t))),window[t].add&&Array.isArray(window[t].add.q)&&window[t].add.q.forEach((t=>this.add(...t))))},_logEvent(t){const{type:e,eventTime:n}=t;delete t.eventTime;const i=Object.assign({},t,{type:a[e],event_time:this._normalizeTS(n),uniq_id:this._uniqId,user_id:this._userId,url:location.href});this._eventLog.push(i),this._storeEventLog()},_keepStats(t){if(this._shouldSendEventLog(t)){this._sendingNow=!0;const t=JSON.stringify({events:this._eventLog,token:this._token}),e=this._eventLog.length;if(!(!this._unloadingNow||!navigator.sendBeacon||!navigator.sendBeacon(this._apiUrl,t)))return void this._handleSent(!0,200,e);(0,i.request)(this._apiUrl,{method:"POST",headers:{"Content-Type":"text/plain; charset=utf-8"},data:t,success:(t,n)=>this._handleSent(!0,n,e),failure:(t,e)=>this._handleSent(!1,e)})}},_shouldSendEventLog(t){if(this._isSendingForbidden)return!1;if(performance.now()+this._serverStartTime>this._expiresIn-1e4)return!1;const e=this._eventLog.length;return!(this._sendingNow||!e)&&(t||Date.now()-this._lastSentAt>this._minSendTime||e>=this._minEventsCnt)},_handleSent(t,e,n){this._sendingNow=!1,t?(this._lastSentAt=Date.now(),this._eventLog=this._eventLog.slice(n),this._storeEventLog(),this._minSendTime=this._defaultMinSendTime,this._minEventsCnt=this._defaultMinEventsCnt):401===e?this._isSendingForbidden=!0:(this._minSendTime=Date.now()-this._lastSentAt+this._defaultMinSendTime,this._minEventsCnt=this._eventLog.length+this._defaultMinEventsCnt)},_onUnload(){this._unloadingNow||"prerender"===document.visibilityState||(this._unloadingNow=!0,this._isSendingForbidden=!0,this._emit("unload"),this._isSendingForbidden=!1,this._keepStats(!0))},_storeEventLog(){try{this._eventLog.length?localStorage.setItem(this._storageKey,JSON.stringify(this._eventLog)):localStorage.removeItem(this._storageKey)}catch(t){}},_normalizeTS(t){return Math.floor((t+this._timeDiff)/1e3)}},d=(0,s.querySelector)("#ha-stats-script"),h=d?d.dataset:{};u.init(h),window.haStats=u}});