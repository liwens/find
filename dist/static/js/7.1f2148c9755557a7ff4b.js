webpackJsonp([7],{"3cXf":function(t,e,n){t.exports={default:n("4rP4"),__esModule:!0}},"4rP4":function(t,e,n){var a=n("UusJ"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},E1fY:function(t,e,n){var a=n("X9rZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("3f284bb6",a,!0)},ED6X:function(t,e,n){function a(t){n("E1fY")}var i=n("AVtK")(n("opD+"),n("cnjM"),a,"data-v-b81337e4",null);t.exports=i.exports},Eg9T:function(t,e,n){function a(t){n("bet7")}var i=n("AVtK")(n("r0xs"),n("xmCG"),a,"data-v-64d6b816",null);t.exports=i.exports},KxPr:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,"#show[data-v-7ef007d8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto}","",{version:3,sources:["E:/find/src/base/ckplayer/ckplayer.vue"],names:[],mappings:"AACA,uBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAEhC,aAAe,CAChB",file:"ckplayer.vue",sourcesContent:["\n#show[data-v-7ef007d8]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  margin: 0 auto;\n}\n"],sourceRoot:""}])},X9rZ:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,".title[data-v-b81337e4]{text-align:center;position:relative;height:40px;border:1px solid #fff;width:100%}.title p[data-v-b81337e4]{position:absolute;height:40px;width:100px;background-color:#fff;left:50%;margin-left:-50px}.title hr[data-v-b81337e4]{margin-top:25px}","",{version:3,sources:["E:/find/src/base/myTitle/myTitle.vue"],names:[],mappings:"AACA,wBACE,kBAAmB,AACnB,kBAAmB,AACnB,YAAa,AACb,sBAAuB,AACvB,UAAY,CACb,AACD,0BACI,kBAAmB,AACnB,YAAa,AACb,YAAa,AACb,sBAAuB,AACvB,SAAU,AACV,iBAAmB,CACtB,AACD,2BACI,eAAiB,CACpB",file:"myTitle.vue",sourcesContent:["\n.title[data-v-b81337e4] {\n  text-align: center;\n  position: relative;\n  height: 40px;\n  border: 1px solid #fff;\n  width: 100%;\n}\n.title p[data-v-b81337e4] {\n    position: absolute;\n    height: 40px;\n    width: 100px;\n    background-color: #fff;\n    left: 50%;\n    margin-left: -50px;\n}\n.title hr[data-v-b81337e4] {\n    margin-top: 25px;\n}\n"],sourceRoot:""}])},Yz0Y:function(t,e,n){function a(t){n("ymlu")}var i=n("AVtK")(n("vO9Z"),n("wlrN"),a,"data-v-7ef007d8",null);t.exports=i.exports},bet7:function(t,e,n){var a=n("tcZR");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("5fca6eb6",a,!0)},cnjM:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._t("default",[n("p",[t._v("请传入内容")])]),t._v(" "),n("hr")],2)},staticRenderFns:[]}},"opD+":function(t,e){},r0xs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("3cXf"),i=n.n(a),r=n("ED6X"),o=n.n(r),s=n("Yz0Y"),l=n.n(s);n("W/7t");e.default={components:{MyTitle:o.a,ckplayer:l.a},filters:{toStringDegree:function(t){return t=[0,"初中","高中","大专","本科","研究生","博士"][Number(t)]}},props:{jobHunterData:{required:!0,type:Array}},data:function(){return{leftCount:1,rightCount:3,leftFlagArr:[1],rightFlagArr:[3],FlagMaximun:100,ckVisible:!1,rtmpUrl:"",liveTitle:"",screenWdith:.5*window.innerWidth,screenHeight:.5*window.innerHeight}},computed:{},methods:{clickResume:function(t){sessionStorage.setItem("showResume",i()(t)),this.$router.push("/resumeShow")},createFlagArr:function(){for(var t=0;t<this.FlagMaximun;t++)this.leftCount+=1,this.leftFlagArr.push(this.leftCount),this.leftCount+=3,this.leftFlagArr.push(this.leftCount),this.rightCount+=1,this.rightFlagArr.push(this.rightCount),this.rightCount+=3,this.rightFlagArr.push(this.rightCount)},judge:function(t){return this.leftFlagArr.indexOf(t)>-1?1:this.rightFlagArr.indexOf(t)>-1?2:void 0},onlive:function(t){var e=this;this.ckVisible=!0,this.rtmpUrl=this.jobHunterData[t-1].rtmp,console.log(this.rtmpUrl),this.$nextTick(function(){console.log(e.$refs.ck),e.$refs.ck.play()})},handleClose:function(){this.ckVisible=!1}},created:function(){},mounted:function(){this.createFlagArr()}}},tcZR:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.job-container[data-v-64d6b816]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.img-wrap[data-v-64d6b816]{width:250px;height:300px;display:inline-block;background-size:cover;background-position:50%;box-shadow:inset 0 0 25px 0 rgba(0,0,0,.22)}.info-detail[data-v-64d6b816],.info-video[data-v-64d6b816]{text-align:center;height:145px;width:250px}.info-detail[data-v-64d6b816]{position:relative;box-shadow:inset 0 0 25px 0 rgba(0,0,0,.22)}.leftpage .info-detail[data-v-64d6b816],.rightpage .info-detail[data-v-64d6b816]{text-align:left}.info-detail div[data-v-64d6b816]{padding:3px;margin:0 20px}.info-video[data-v-64d6b816]{background-color:#11919a;margin-top:10px;cursor:pointer;border-bottom-left-radius:20px 500px;border-bottom-right-radius:600px 30px;border-top-right-radius:5px 100px;text-align:center;line-height:150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.info-video .icon-class[data-v-64d6b816]{font-size:60px;color:#42b983}.info-video:hover .icon-class[data-v-64d6b816]:before{box-shadow:0 0 25px 0 rgba(0,0,0,.22);background-color:#0f838b;border-radius:50%}.inline-block[data-v-64d6b816],.leftpage[data-v-64d6b816],.rightpage[data-v-64d6b816]{display:inline-block;vertical-align:text-bottom;margin:6px}.leftpage[data-v-64d6b816],.rightpage[data-v-64d6b816]{margin:6px;box-shadow:2px 2px 3px rgba(0,0,0,.16);position:relative;background-color:#e9e9e9;transition:all .5s}.leftpage[data-v-64d6b816]:after,.leftpage[data-v-64d6b816]:before{content:"";position:absolute;z-index:-2;-webkit-transform:rotate(-2deg);transform:rotate(-2deg);bottom:15px;box-shadow:0 15px 10px rgba(0,0,0,.7);height:50%;left:10px;max-height:100px;max-width:300px;width:50%}.leftpage[data-v-64d6b816]:before{-webkit-transform:rotate(1deg);transform:rotate(1deg);left:auto;right:10px}.rightpage[data-v-64d6b816]:after,.rightpage[data-v-64d6b816]:before{content:"";position:absolute;z-index:-2;-webkit-transform:rotate(-2deg);transform:rotate(-2deg);bottom:15px;box-shadow:0 15px 10px rgba(0,0,0,.7);height:50%;left:10px;max-height:100px;max-width:300px;width:50%}.rightpage[data-v-64d6b816]:before{-webkit-transform:rotate(1deg);transform:rotate(1deg);left:auto;right:10px}.leftpage:hover .name[data-v-64d6b816],.rightpage:hover .name[data-v-64d6b816]{color:#5f9ea0}.ring[data-v-64d6b816]{position:absolute;bottom:5px;left:200px;display:none}.ring li[data-v-64d6b816]{list-style:none;width:40px;height:20px;border:4px solid rgba(0,13,1,.8);border-radius:200px 200px 0 0;border-bottom:none;-webkit-transform:rotateX(60deg);transform:rotateX(60deg);display:block;margin:20px 0}.hole[data-v-64d6b816],.ring li[data-v-64d6b816]:after,.ring li[data-v-64d6b816]:before{content:"";position:absolute;width:5px;height:13px;background-color:rgba(0,13,1,.8);border:1px solid #363636;box-shadow:1px 2px 3px #363636;border-radius:50%;z-index:-10}.ring li[data-v-64d6b816]:after{margin-top:10px;margin-left:-6px}.ring li[data-v-64d6b816]:before{margin-top:10px;margin-left:40px}.name[data-v-64d6b816]{color:#42b983;font-size:20px;font-weight:700;font-transition:all 5s}.live-class[data-v-64d6b816]{width:700px}.live-class .el-dialog__body[data-v-64d6b816]{padding:30px 0}#ckplayer_a1[data-v-64d6b816]{display:table;margin:0 auto}',"",{version:3,sources:["E:/find/src/components/jobhunter/jobhunter.vue"],names:[],mappings:"AAEA,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,mBAAoB,AAChB,cAAgB,CACrB,AACD,2BACE,YAAa,AACb,aAAc,AACd,qBAAsB,AACtB,sBAAuB,AACvB,wBAA4B,AAC5B,2CAAmD,CACpD,AACD,2DAEE,kBAAmB,AACnB,aAAc,AACd,WAAa,CACd,AACD,8BACE,kBAAmB,AACnB,2CAAmD,CACpD,AAID,iFACI,eAAiB,CACpB,AACD,kCACI,YAAa,AACb,aAAe,CAClB,AACD,6BACE,yBAA0B,AAC1B,gBAAiB,AACjB,eAAgB,AAEhB,qCAAsC,AACtC,sCAAuC,AACvC,kCAAmC,AACnC,kBAAmB,AACnB,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,yCACI,eAAgB,AAChB,aAAe,CAClB,AACD,sDACI,sCAA6C,AAC7C,yBAA0B,AAC1B,iBAAmB,CACtB,AACD,sFAEE,qBAAsB,AACtB,2BAA4B,AAC5B,UAAY,CACb,AAGD,uDAEE,WAAY,AACZ,uCAA4C,AAC5C,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,mEAEE,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,gCAAiC,AACzB,wBAAyB,AACjC,YAAa,AACb,sCAA2C,AAC3C,WAAY,AACZ,UAAW,AACX,iBAAkB,AAClB,gBAAiB,AACjB,SAAW,CACZ,AACD,kCACE,+BAAgC,AACxB,uBAAwB,AAChC,UAAW,AACX,UAAY,CACb,AACD,qEAEE,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,gCAAiC,AACzB,wBAAyB,AACjC,YAAa,AACb,sCAA2C,AAC3C,WAAY,AACZ,UAAW,AACX,iBAAkB,AAClB,gBAAiB,AACjB,SAAW,CACZ,AACD,mCACE,+BAAgC,AACxB,uBAAwB,AAChC,UAAW,AACX,UAAY,CACb,AACD,+EAEE,aAAe,CAChB,AAGD,uBACE,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,YAAc,CACf,AACD,0BACE,gBAAiB,AACjB,WAAY,AACZ,YAAa,AACb,iCAAsC,AACtC,8BAA+B,AAC/B,mBAAoB,AACpB,iCAAkC,AAC1B,yBAA0B,AAElC,cAAe,AACf,aAAe,CAChB,AAGD,wFACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,YAAa,AACb,iCAAsC,AACtC,yBAA0B,AAC1B,+BAAgC,AAChC,kBAAmB,AACnB,WAAa,CACd,AACD,gCACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,iCACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,uBACE,cAAe,AACf,eAAgB,AAChB,gBAAkB,AAClB,sBAAwB,CACzB,AACD,6BACE,WAAa,CACd,AACD,8CACI,cAAgB,CACnB,AACD,8BACE,cAAe,AACf,aAAe,CAChB",file:"jobhunter.vue",sourcesContent:['\n@charset "UTF-8";\n.job-container[data-v-64d6b816] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.img-wrap[data-v-64d6b816] {\n  width: 250px;\n  height: 300px;\n  display: inline-block;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.22) inset;\n}\n.info-detail[data-v-64d6b816],\n.info-video[data-v-64d6b816] {\n  text-align: center;\n  height: 145px;\n  width: 250px;\n}\n.info-detail[data-v-64d6b816] {\n  position: relative;\n  box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.22) inset;\n}\n.leftpage .info-detail[data-v-64d6b816] {\n    text-align: left;\n}\n.rightpage .info-detail[data-v-64d6b816] {\n    text-align: left;\n}\n.info-detail div[data-v-64d6b816] {\n    padding: 3px;\n    margin: 0 20px;\n}\n.info-video[data-v-64d6b816] {\n  background-color: #11919a;\n  margin-top: 10px;\n  cursor: pointer;\n  /*纸张曲边效果*/\n  border-bottom-left-radius: 20px 500px;\n  border-bottom-right-radius: 600px 30px;\n  border-top-right-radius: 5px 100px;\n  text-align: center;\n  line-height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.info-video .icon-class[data-v-64d6b816] {\n    font-size: 60px;\n    color: #42B983;\n}\n.info-video:hover .icon-class[data-v-64d6b816]:before {\n    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.22);\n    background-color: #0F838B;\n    border-radius: 50%;\n}\n.inline-block[data-v-64d6b816], .leftpage[data-v-64d6b816],\n.rightpage[data-v-64d6b816] {\n  display: inline-block;\n  vertical-align: text-bottom;\n  margin: 6px;\n}\n\n/*纸张*/\n.leftpage[data-v-64d6b816],\n.rightpage[data-v-64d6b816] {\n  margin: 6px;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);\n  position: relative;\n  background-color: #e9e9e9;\n  transition: all .5s;\n}\n.leftpage[data-v-64d6b816]:after,\n.leftpage[data-v-64d6b816]:before {\n  content: "";\n  position: absolute;\n  z-index: -2;\n  -webkit-transform: rotate(-2deg);\n          transform: rotate(-2deg);\n  bottom: 15px;\n  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);\n  height: 50%;\n  left: 10px;\n  max-height: 100px;\n  max-width: 300px;\n  width: 50%;\n}\n.leftpage[data-v-64d6b816]:before {\n  -webkit-transform: rotate(1deg);\n          transform: rotate(1deg);\n  left: auto;\n  right: 10px;\n}\n.rightpage[data-v-64d6b816]:after,\n.rightpage[data-v-64d6b816]:before {\n  content: "";\n  position: absolute;\n  z-index: -2;\n  -webkit-transform: rotate(-2deg);\n          transform: rotate(-2deg);\n  bottom: 15px;\n  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);\n  height: 50%;\n  left: 10px;\n  max-height: 100px;\n  max-width: 300px;\n  width: 50%;\n}\n.rightpage[data-v-64d6b816]:before {\n  -webkit-transform: rotate(1deg);\n          transform: rotate(1deg);\n  left: auto;\n  right: 10px;\n}\n.rightpage:hover .name[data-v-64d6b816],\n.leftpage:hover .name[data-v-64d6b816] {\n  color: #5F9EA0;\n}\n\n/*钢圈效果*/\n.ring[data-v-64d6b816] {\n  position: absolute;\n  bottom: 5px;\n  left: 200px;\n  display: none;\n}\n.ring li[data-v-64d6b816] {\n  list-style: none;\n  width: 40px;\n  height: 20px;\n  border: 4px solid rgba(0, 13, 1, 0.8);\n  border-radius: 200px 200px 0 0;\n  border-bottom: none;\n  -webkit-transform: rotateX(60deg);\n          transform: rotateX(60deg);\n  /*position: relative;*/\n  display: block;\n  margin: 20px 0;\n}\n\n/*钢圈的洞*/\n.hole[data-v-64d6b816], .ring li[data-v-64d6b816]:after, .ring li[data-v-64d6b816]:before {\n  content: "";\n  position: absolute;\n  width: 5px;\n  height: 13px;\n  background-color: rgba(0, 13, 1, 0.8);\n  border: 1px solid #363636;\n  box-shadow: 1px 2px 3px #363636;\n  border-radius: 50%;\n  z-index: -10;\n}\n.ring li[data-v-64d6b816]:after {\n  margin-top: 10px;\n  margin-left: -6px;\n}\n.ring li[data-v-64d6b816]:before {\n  margin-top: 10px;\n  margin-left: 40px;\n}\n.name[data-v-64d6b816] {\n  color: #42B983;\n  font-size: 20px;\n  font-weight: bold;\n  font-transition: all 5s;\n}\n.live-class[data-v-64d6b816] {\n  width: 700px;\n}\n.live-class .el-dialog__body[data-v-64d6b816] {\n    padding: 30px 0;\n}\n#ckplayer_a1[data-v-64d6b816] {\n  display: table;\n  margin: 0 auto;\n}\n'],sourceRoot:""}])},vO9Z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("vY1q");e.default={data:function(){return{params:{bgcolor:"red",allowFullScreen:!0,allowScriptAccess:"always",wmode:"transparent"}}},computed:{flashvars:function(){return{f:this.rtmp,c:0}}},props:{rtmp:{required:!0},width:{default:"800"},height:{default:"800"}},methods:{handleClose:function(){this.$store.store.commit("toggleLiveDia",!1)},play:function(){this.$nextTick(function(){a.a.embedSWF("../../../static/ckplayer/ckplayer.swf",this.$refs.show,"ckplayer_a1",this.width,this.height,this.flashvars,this.params)})}},mounted:function(){this.$nextTick(function(){})}}},vY1q:function(module,__webpack_exports__,__webpack_require__){"use strict";function ckcpt(){return""}function ckstyle(){return{cpath:"",language:"",flashvars:"",setup:"1,1,1,1,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,1,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,0,1,250,0,90,0,0,0",pm_bg:"0x000000,100,230,180",mylogo:"logo.swf",pm_mylogo:"1,1,-100,-55",logo:"cklogo.png",pm_logo:"2,0,-100,20",control_rel:"related.swf,ckplayer/related.xml,0",control_pv:"Preview.swf,105,2000",pm_repc:"",pm_spac:"|",pm_fpac:"file->f",pm_advtime:"2,0,-110,10,0,300,0",pm_advstatus:"1,2,2,-200,-40",pm_advjp:"1,1,2,2,-100,-40",pm_padvc:"2,0,-13,-13",pm_advms:"2,2,-46,-67",pm_zip:"1,1,-20,-8,1,0,0",pm_advmarquee:"1,2,50,-70,50,20,0,0x000000,50,0,20,1,30,2000",pm_glowfilter:"1,0x01485d, 100, 6, 3, 10, 1, 0, 0",advmarquee:escape('{a href="http://www.ckplayer.com"}{font color="#FFFFFF" size="12" face="Microsoft YaHei"}这里可以放文字广告，播放器默认使用这里设置的广告内容，如果不想在这里使用可以清空这里的内容，如果想在页面中实时定义滚动文字广告内容，可以清空这里的内容，然后在页面中设置广告函数。{/font}{/a}'),mainfuntion:"",flashplayer:"",calljs:"ckplayer_status,ckadjump,playerstop,ckmarqueeadv",myweb:escape(""),cpt_lights:"1",cpt_share:"ckplayer/share.xml",cpt_list:ckcpt()}}__webpack_require__.d(__webpack_exports__,"a",function(){return CKobject});var CKobject={_K_:function(t){return document.getElementById(t)},_T_:!1,_M_:!1,_G_:!1,_Y_:!1,_I_:null,_J_:0,_O_:{},uaMatch:function(t,e,n,a,i,r,o,s,l){var d=e.exec(t);return null!=d?{b:"IE",v:d[2]||"0"}:null!=(d=n.exec(t))?{b:d[1]||"",v:d[2]||"0"}:null!=(d=a.exec(t))?{b:d[1]||"",v:d[2]||"0"}:null!=(d=i.exec(t))?{b:d[1]||"",v:d[2]||"0"}:null!=(d=r.exec(t))?{b:d[2]||"",v:d[1]||"0"}:null!=(d=o.exec(t))?{b:d[1]||"",v:d[2]||"0"}:null!=(d=s.exec(t))?{b:d[1]||"",v:d[2]||"0"}:(d=l.exec(t),null!=d?{b:d[1]||"",v:d[2]||"0"}:{b:"unknown",v:"0"})},browser:function(){var t=navigator.userAgent,e=/(msie\s|trident.*rv:)([\w.]+)/,n=/(firefox)\/([\w.]+)/,a=/(opera).+version\/([\w.]+)/,i=/(chrome)\/([\w.]+)/,r=/version\/([\w.]+).*(safari)/,o=/(safari)\/([\w.]+)/,s=/(mozilla)\/([\w.]+)/,l=/(mobile)\/([\w.]+)/,d=t.toLowerCase(),c=this.uaMatch(d,e,n,a,i,r,o,s,l);if(c.b)var A=c.b,p=c.v;return{B:A,V:p}},Platform:function(){var t="",e=navigator.userAgent,n=(navigator.appVersion,{iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,webKit:e.indexOf("AppleWebKit")>-1,trident:e.indexOf("Trident")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),presto:e.indexOf("Presto")>-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),webApp:-1==e.indexOf("Safari")});for(var a in n)if(n[a]){t=a;break}return t},isHTML5:function(){return!!document.createElement("video").canPlayType},getType:function(){return this._T_},getVideo:function(){var t="",e=this._E_.v;if(e&&e.length>1)for(var n=0;n<e.length;n++){var a=e[n].split("->");a.length>=1&&""!=a[0]&&(t+='<source src="'+a[0]+'"'),a.length>=2&&""!=a[1]&&(t+=' type="'+a[1]+'"'),t+=">"}return t},getVars:function(t){var e=this._A_;return void 0===e?null:t in e?e[t]:null},getParams:function(){var t="";return this._A_&&(1==parseInt(this.getVars("p"))&&(t+=' autoplay="autoplay"'),1==parseInt(this.getVars("e"))&&(t+=' loop="loop"'),2==parseInt(this.getVars("p"))&&(t+=' preload="metadata"'),this.getVars("i")&&(t+=' poster="'+this.getVars("i")+'"')),t},getpath:function(t){var e=t.substr(0,1);if("CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz".indexOf(e)>-1&&(t.substr(0,4)==e+"://"||t.substr(0,4)==e+":\\"))return t;var n=unescape(window.location.href).replace("file:///",""),a=parseInt(document.location.port),i=document.location.protocol+"//"+document.location.hostname,r="",o="",s="",l=0,d=unescape(t).split("//");d.length>0&&(r=d[0]+"//");var c="http|https|ftp|rtsp|mms|ftp|rtmp|file",A=c.split("|");80!=a&&a&&(i+=":"+a);for(var p=0;p<A.length;p++)if(A[p]+"://"==r){l=1;break}if(0==l)if("/"==t.substr(0,1))s=i+t;else{o=n.substring(0,n.lastIndexOf("/")+1).replace("\\","/");var e=t.replace("../","./"),i=e.split("./"),f=i.length,d=e.replace("./",""),h=o.split("/"),u=h.length-f;for(p=0;p<u;p++)s+=h[p]+"/";s+=d}else s=t;return s},getXhr:function(){var t;try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=!1}}return t||"undefined"==typeof XMLHttpRequest||(t=new XMLHttpRequest),t},getX:function(){var f="ckstyle()";this.getVars("x")&&1!=parseInt(this.getVars("c"))&&(f=this.getVars("x")+"()");try{"object"==typeof eval(f)&&(this._X_=eval(f))}catch(e){try{"object"==typeof eval(ckstyle)&&(this._X_=ckstyle())}catch(t){this._X_=ckstyle()}}},getSn:function(t,e){return e>=0?this._X_[t].split(",")[e]:this._X_[t]},getUrl:function(t,e){var n=this,a=["get","utf-8"];if(t&&2==t.length){var i=t[0],r=t[1].split("/");r.length>=2&&(a[0]=r[1]),r.length>=3&&(a[1]=r[2]),this.ajax(a[0],a[1],i,function(t){if(t&&"error"!=t){var a="",i=t;if(t.indexOf("}")>-1){for(var r=t.split("}"),o=0;o<r.length-1;o++){a+=r[o]+"}";var s=r[o].replace("{","").split("->");2==s.length&&(n._A_[s[0]]=s[1])}i=r[r.length-1]}n._E_.v=i.split(","),e?n.showHtml5():(n.changeParams(a),n.newAdr())}})}},getflashvars:function(t){var e="",n=0;if(t)for(var a in t)n>0&&(e+="&"),"f"==a&&t[a]&&!this.getSn("pm_repc",-1)&&(t[a]=this.getpath(t[a]),t[a].indexOf("&")>-1&&(t[a]=encodeURIComponent(t[a]))),"y"==a&&t[a]&&(t[a]=this.getpath(t[a])),e+=a+"="+t[a],n++;return e},getparam:function(t){var e="",n="",a={allowScriptAccess:"always",allowFullScreen:!0,quality:"high",bgcolor:"#000"};if(t)for(var i in t)a[i]=t[i];for(var r in a)e+=r+'="'+a[r]+'" ',n+='<param name="'+r+'" value="'+a[r]+'" />';return e=e.replace("movie=","src="),{w:e,v:n}},getObjectById:function(t){var e=this;if(e._T_)return e._V_=e._K_(t),e;var n=null,a=e._K_(t);if(a&&"OBJECT"==a.nodeName)if(void 0!==a.SetVariable)n=a;else{var i=a.getElementsByTagName("embed")[0];i&&(n=i)}return n},ajax:function(t,e,n,a){var i=this.getXhr(),r=[],o="";"get"==t?(o=n.indexOf("?")>-1?n+"&t="+(new Date).getTime():n+"?t="+(new Date).getTime(),i.open("get",o)):(r=n.split("?"),n=r[0],o=r[1],i.open("post",n,!0)),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("charset",e),"post"==t?i.send(o):i.send(null),i.onreadystatechange=function(){if(4==i.readyState){var t=i.responseText;a(""!=t?t:null)}}},addListener:function(e,f){var o=this._V_;switch(e){case"time":e="timeupdate",this.AT=f,f=this.addListenerTime;break;case"totaltime":return void(this.ATAll=f)}if("string"==typeof f&&(f=eval(f)),o.addEventListener)try{o.addEventListener(e,f,!1)}catch(e){this.getNot()}else if(o.attachEvent)try{o.attachEvent("on"+e,f)}catch(e){this.getNot()}else o["on"+e]=f},removeListener:function(e,f){var o=this._V_;switch(e){case"time":e="timeupdate",this.AT=null;break;case"totaltime":return void(this.ATAll=null)}if("string"==typeof f&&(f=eval(f)),o.removeEventListener)try{o.removeEventListener(e,f,!1)}catch(e){this.getNot()}else if(o.detachEvent)try{o.detachEvent("on"+e,f)}catch(e){this.getNot()}else o["on"+e]=null},Flash:function(){var t=!1,e=0;if(document.all||this.browser().B.toLowerCase().indexOf("ie")>-1)try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");t=!0;var a=n.GetVariable("$version");e=parseInt(a.split(" ")[1].split(",")[0])}catch(t){}else if(navigator.plugins&&navigator.plugins.length>0){var n=navigator.plugins["Shockwave Flash"];if(n){t=!0;for(var i=n.description.split(" "),r=0;r<i.length;++r)isNaN(parseInt(i[r]))||(e=parseInt(i[r]))}}return{f:t,v:e}},embed:function(t,e,n,a,i,r,o,s,l,d){var c=["all"];r?this.isHTML5()?this.embedHTML5(e,n,a,i,s,o,c,d):this.embedSWF(t,e,n,a,i,o,l):this.Flash().f&&parseInt(this.Flash().v)>10?this.embedSWF(t,e,n,a,i,o,l):this.isHTML5()?this.embedHTML5(e,n,a,i,s,o,c,d):this.embedSWF(t,e,n,a,i,o,l)},embedSWF:function(t,e,n,a,i,r,o){n||(n="ckplayer_a1"),o||(o={bgcolor:"#FFF",allowFullScreen:!0,allowScriptAccess:"always",wmode:"transparent"}),this._A_=r,this.getX();var s="undefined",l=!1,c=document,A="http://www.macromedia.com/go/getflashplayer",p='<a href="'+A+'" target="_blank">请点击此处下载安装最新的flash插件</a>',f={w:"您的网页不符合w3c标准，无法显示播放器",f:"您没有安装flash插件，无法播放视频，"+p,v:"您的flash插件版本过低，无法播放视频，"+p},h=typeof c.getElementById!=s&&typeof c.getElementsByTagName!=s&&typeof c.createElement!=s,u='id="'+n+'" name="'+n+'" ',g="",_="";o.movie=t,o.flashvars=this.getflashvars(r),-1==a&&(d=!0,e.style.width="100%",a="100%"),g+='<object pluginspage="http://www.macromedia.com/go/getflashplayer" ',g+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',g+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" ',g+='width="'+a+'" ',g+='height="'+i+'" ',g+=u,g+='align="middle">',g+=this.getparam(o).v,g+="<embed ",g+=this.getparam(o).w,g+=' width="'+a+'" height="'+i+'" name="'+n+'" id="'+n+'" align="middle" '+u,g+='type="application/x-shockwave-flash" pluginspage="'+A+'" />',g+="</object>",h?this.Flash().f?this.Flash().v<11?(_=f.v,l=!0):(_=g,this._T_=!1):(_=f.f,l=!0):(_=f.w,l=!0),_&&(e.innerHTML=_),l&&(e.style.color="#0066cc",e.style.lineHeight=e.style.height,e.style.textAlign="center")},embedHTML5:function(e,i,r,o,l,d,c,A){this._E_={c:e,p:i,w:r,h:o,v:l,s:c,j:!(void 0!=A&&!A)},this._A_=d,this.getX(),b=this.browser().B,v=this.browser().V,x=v.split("."),t=x[0],m=b+v,n=b+t,w="",s=!1,f=this.Flash().f,a=!1,c||(c=["iPad","iPhone","ios"]);for(var p=0;p<c.length;p++){if(w=c[p],"all"==w.toLowerCase()){s=!0;break}if("all+false"==w.toLowerCase()&&!f){s=!0;break}if(w.indexOf("+")>-1?(w=w.split("+")[0],a=!0):a=!1,this.Platform()==w||m==w||n==w||b==w){if(!a){s=!0;break}if(!f){s=!0;break}}}if(s){if(l){var h=l[0].split("->");if(h&&2==h.length&&h[1].indexOf("ajax")>-1)return void this.getUrl(h,!0)}this.showHtml5()}},status:function(){this._H_=parseInt(this.getSn("setup",20));var f="ckplayer_status";""!=this.getSn("calljs",0)&&(f=this.getSn("calljs",0));try{if("function"==typeof eval(f))return this._L_=eval(f),this._M_=!0,!0}catch(e){try{if("function"==typeof eval(ckplayer_status))return this._L_=ckplayer_status,this._M_=!0,!0}catch(t){return!1}}return!1},showHtml5:function(){var C=this,p=C._E_.p,a=C._E_.v,c=C._E_.c,j="",b=!1,s=this._E_.v,w=C._E_.w,h=C._E_.h,d=!1,r="";1==s.length&&(r=' src="'+s[0].split("->")[0]+'"'),-1==w&&(d=!0,C._K_(c).style.width="100%",w="100%"),w.toString().indexOf("%")>-1&&(w="100%"),h.toString().indexOf("%")>-1&&(h="100%"),C._E_.j&&(j=' controls="controls"');var v="<video"+j+r+' id="'+p+'" width="'+w+'" height="'+h+'"'+C.getParams()+" webkit-playsinline>"+C.getVideo()+"</video>";if(C._K_(c).innerHTML=v,C._K_(c).style.backgroundColor="#000",C._V_=C._K_(p),d||(C._K_(c).style.width=C._E_.w.toString().indexOf("%")>-1?C._K_(c).offsetWidth*parseInt(C._E_.w)*.01+"px":C._V_.width+"px",C._K_(c).style.height=C._E_.h.toString().indexOf("%")>-1?C._K_(c).offsetHeight*parseInt(C._E_.h)*.01+"px":C._V_.height+"px"),C._P_=!1,C._T_=!0,""!=C.getVars("loaded")){var f=C.getVars("loaded")+"()";try{"function"==typeof eval(f)&&eval(f)}catch(e){try{"function"==typeof eval(loadedHandler)&&loadedHandler()}catch(t){}}}C.status(),C.addListener("play",C.playHandler),C.addListener("pause",C.playHandler),C.addListener("error",C.errorHandler),C.addListener("emptied",C.errorHandler),C.addListener("loadedmetadata",C.loadedMetadataHandler),C.addListener("ended",C.endedHandler),C.addListener("volumechange",C.volumeChangeHandler),(""!=C.getVars("m")&&null!=C.getVars("m")||parseInt(C.getSn("setup",0))>0)&&(C._K_(c).style.cursor="pointer"),(""!=C.getVars("m")&&null!=C.getVars("m")||1==parseInt(C.getSn("setup",1)))&&C.addListener("click",C.html5Click)},addListenerTime:function(){var t=CKobject;t.AT&&t.AT(t._V_.currentTime)},videoPlay:function(){this._T_&&this._V_.play()},videoPause:function(){this._T_&&this._V_.pause()},playOrPause:function(){this._T_&&(this._V_.paused?this._V_.play():this._V_.pause())},fastNext:function(){this._T_&&(this._V_.currentTime=this._V_.currentTime+10)},fastBack:function(){this._T_&&(this._V_.currentTime=this._V_.currentTime-10)},changeVolume:function(t){t<0||t>100||this._T_&&(this._V_.volume=.01*t)},videoSeek:function(t){this._T_&&(this._V_.currentTime=t)},newAddress:function(t){var e=[];if(t&&(e=this.isHtml5New(t))&&this._T_){this.changeParams(t);var n=e[0].split("->");if(n&&2==n.length&&n[1].indexOf("ajax")>-1)return void this.getUrl(n,!1);this._E_.v=e,this.newAdr()}},quitFullScreen:function(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()},changeStatus:function(t){this._H_=t},newAdr:function(){var t=this._E_.v;this._V_.pause(),1==t.length?this._V_.src=t[0].split("->")[0]:this._V_.innerHTML=this.getVideo(),this._V_.load()},isHtml5New:function(t){if(-1==t.indexOf("html5"))return!1;for(var e=t.replace(/{/g,""),n=e.split("}"),a="",i=0;i<n.length;i++)if(n[i].indexOf("html5")>-1){a=n[i].replace("html5->","").split(",");break}return a},changeParams:function(t){if(t)for(var e=t.replace(/{/g,""),n=e.split("}"),a=0;a<n.length;a++){var i=n[a].split("->");if(2==i.length)switch(i[0]){case"p":1==parseInt(i[1])?this._V_.autoplay=!0:2==parseInt(i[1])?this._V_.preload="metadata":(this._V_.autoplay=!1,null!=this._I_&&(clearInterval(this._I_),this._I_=null));break;case"e":1==parseInt(i[1])?this._V_.loop=!0:this._V_.loop=!1;break;case"i":this._V_.poster=i[1]}}},frontAdPause:function(t){this.getNot()},frontAdUnload:function(){this.getNot()},changeFace:function(t){this.getNot()},plugin:function(t,e,n,a,i,r,o){this.getNot()},videoClear:function(){this.getNot()},videoBrightness:function(t){this.getNot()},videoContrast:function(t){this.getNot()},videoSaturation:function(t){this.getNot()},videoSetHue:function(t){this.getNot()},videoWAndH:function(t,e){this.getNot()},videoWHXY:function(t,e,n,a){this.getNot()},changeFlashvars:function(t){this.getNot()},changeMyObject:function(t,e){this.getNot()},getMyObject:function(t,e){this.getNot()},changeeFace:function(){this.getNot()},changeStyle:function(t,e){this.getNot()},promptLoad:function(){this.getNot()},promptUnload:function(){this.getNot()},marqueeLoad:function(t,e){this.getNot()},marqueeClose:function(t){this.getNot()},videoError:function(t){this.getNot()},formatUrl:function(t){this.getNot()},sendJS:function(t){this.getNot()},plugAttribute:function(t){this.getNot()},errorTextShow:function(t){this.getNot()},openUrl:function(t){window.open(t)},jsonParse:function(t){this.getNot()},promptShow:function(t,e,n){this.getNot()},screenShot:function(t,e,n,a,i){this.getNot()},fullScreen:function(){this.getNot()},allowFull:function(){this.getNot()},loadButton:function(){this.getNot()},getFile:function(){this.getNot()},textBoxShow:function(){this.getNot()},loadElement:function(){this.getNot()},textBoxClose:function(){this.getNot()},textBoxTween:function(){this.getNot()},getNot:function(){return"The ckplayer's API for HTML5 does not exist"},volumeChangeHandler:function(){var t=CKobject;t._V_.muted?(t.returnStatus("volumechange:0",1),t._O_.volume=0,t._O_.mute=!0):(t._O_.mute=!1,t._O_.volume=100*t._V_.volume,t.returnStatus("volumechange:"+100*t._V_.volume,1))},endedHandler:function(){var C=CKobject,e=parseInt(C.getVars("e"));if(C.returnStatus("ended",1),C._I_&&(clearInterval(C._I_),C._I_=null),0==e||4==e||6==e){6==e&&this.quitFullScreen();var f="playerstop()";""!=C.getSn("calljs",2)&&(f=C.getSn("calljs",2)+"()");try{if("function"==typeof eval(f))return void eval(f)}catch(e){try{if("function"==typeof eval(playerstop))return void playerstop()}catch(e){return}}}},loadedMetadataHandler:function(){var t=CKobject;t.returnStatus("loadedmetadata",1),t._O_.totalTime=t._V_.duration,t._O_.width=t._V_.width,t._O_.height=t._V_.height,t._O_.awidth=t._V_.videoWidth,t._O_.aheight=t._V_.videoHeight,t._V_.defaultMuted?(t.returnStatus("volumechange:0",1),t._O_.mute=!0,t._O_.volume=0):(t._O_.mute=!1,t._O_.volume=100*t._V_.volume,t.returnStatus("volumechange:"+100*t._V_.volume,1)),1==parseInt(t.getVars("p"))&&t.playHandler(),t.ATAll&&t.ATAll(t._V_.duration)},errorHandler:function(){CKobject.returnStatus("error",1)},playHandler:function(){var t=CKobject;if(t._V_.paused)t.returnStatus("pause",1),t.addO("play",!1),null!=t._I_&&(clearInterval(t._I_),t._I_=null);else{if(t.returnStatus("play",1),t.addO("play",!0),t._P_||(t.returnStatus("play",1),t._P_=!0),t._I_=setInterval(t.playTime,parseInt(t.getSn("setup",37))),!t._G_){t._G_=!0;for(var e in t._A_)if("g"==e&&t._A_[e]){var n=parseInt(t._A_[e]);t.videoSeek(n)}}if(!t._Y_){t._Y_=!0;for(var e in t._A_)if("j"==e&&t._A_[e]){var a=parseInt(t._A_[e]);t._J_=a>0?a:parseInt(t._O_.totalTime)+a}}}},html5Click:function(){var t=CKobject;""!=t.getVars("m")&&null!=t.getVars("m")&&window.open(t.getVars("m"))},returnStatus:function(t,e){var n=t;3==this._H_&&(n=this._E_.p+"->"+n),this._M_&&e<=this._H_&&this._L_(n)},addO:function(t,e){this._O_[t]=e},getStatus:function(){return this._O_},playTime:function(){var t=CKobject,e=t._V_.currentTime;t._O_.time=e,t._J_>0&&e>t._J_&&(t._J_=0,t.videoSeek(t._O_.totaltime)),t.returnStatus("time:"+e,1)}};window.CKobject=CKobject},wlrN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"show",attrs:{id:"show"}})},staticRenderFns:[]}},xmCG:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"job-container"},[n("my-title",[n("p",[t._v("求职者")])]),t._v(" "),t._l(t.jobHunterData,function(e,a){return[1==t.judge(a)?n("div",{staticClass:"leftpage",on:{click:function(n){t.clickResume(e)}}},[n("div",{staticClass:"img-wrap inline-block",style:{backgroundImage:"url("+e.headImg+")"}}),t._v(" "),n("div",{staticClass:"inline-block"},[n("div",{staticClass:"info-detail"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",[t._v(t._s(e.job))]),t._v(" "),n("div",[t._v(t._s(e.school))]),t._v(" "),n("div",[t._v(t._s(t._f("toStringDegree")(e.degree)))]),t._v(" "),n("div",[t._v(t._s(e.experienceYear)+"年工作经验")])]),t._v(" "),n("div",{staticClass:"info-video",on:{click:function(e){t.onlive(a)}}},[n("i",{staticClass:"iconfont icon-shipin icon-class"})])])]):t._e(),t._v(" "),2==t.judge(a)?n("div",{staticClass:"rightpage",on:{click:function(n){t.clickResume(e)}}},[n("div",{staticClass:"inline-block"},[n("div",{staticClass:"info-detail"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",[t._v(t._s(e.job))]),t._v(" "),n("div",[t._v(t._s(e.school))]),t._v(" "),n("div",[t._v(t._s(t._f("toStringDegree")(e.degree))+"学历")]),t._v(" "),n("div",[t._v(t._s(e.experienceYear)+"年工作经验")])]),t._v(" "),n("div",{staticClass:"info-video",on:{click:function(e){t.onlive(a)}}},[n("i",{staticClass:"iconfont icon-shipin icon-class"})])]),t._v(" "),n("div",{staticClass:"img-wrap inline-block",style:{backgroundImage:"url("+e.headImg+")"}})]):t._e()]}),t._v(" "),n("el-dialog",{ref:"ckDia",attrs:{title:t.liveTitle,visible:t.ckVisible,size:"small","before-close":t.handleClose,"custom-class":"live-class",top:"12%"}},[n("ckplayer",{ref:"ck",attrs:{rtmp:t.rtmpUrl,width:t.screenWdith,height:t.screenHeight}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("确 定")])],1)],1)],2)])},staticRenderFns:[]}},ymlu:function(t,e,n){var a=n("KxPr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("43584b6e",a,!0)}});
//# sourceMappingURL=7.1f2148c9755557a7ff4b.js.map