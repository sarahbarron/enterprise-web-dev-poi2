/*!
 * MCAFEE RESTRICTED CONFIDENTIAL
 *             Copyright (c) 2019 McAfee, LLC
 *             
 *             The source code contained or described herein and all documents related
 *             to the source code ("Material") are owned by McAfee or its
 *             suppliers or licensors. Title to the Material remains with McAfee
 *             or its suppliers and licensors. The Material contains trade
 *             secrets and proprietary and confidential information of McAfee or its
 *             suppliers and licensors. The Material is protected by worldwide copyright
 *             and trade secret laws and treaty provisions. No part of the Material may
 *             be used, copied, reproduced, modified, published, uploaded, posted,
 *             transmitted, distributed, or disclosed in any way without McAfee's prior
 *             express written permission.
 *             
 *             No license under any patent, copyright, trade secret or other intellectual
 *             property right is granted to or conferred upon you by disclosure or
 *             delivery of the Materials, either expressly, by implication, inducement,
 *             estoppel or otherwise. Any license under such intellectual property rights
 *             must be expressed and approved by McAfee in writing.
 *             
 */!function(e){var t={};function s(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=12)}([function(e,t,s){"use strict";const a=chrome;t.a=a},function(e,t,s){"use strict";const a={TabDataList:new Map,logger:null,useNativeLogger:!1,MEDIA_PATTERN:new RegExp("\\.(mp3|MP3|mpeg|MPEG|mp4|MP4|mp2t|MP2T|ogv|OGV|ogx|OGX|ogg|OGG|webm|WEBM)","i"),EXTERNAL_EXTNS:new class{constructor(){this._extnMap=new Map,this._extnMap.set("WebAdvisor","fheoggkfdfchfphceeifdbepaooicaho")}isWhiteListed(e){for(const t of this._extnMap.values())if(t===e)return!0;return!1}get(e){return this._extnMap.get(e)}}};t.a=a},function(e,t,s){"use strict";t.a={Block:"Block",Clear:"Clear",SetUserLastClickDetails:"SetUserLastClickDetails",GetUserLastClickDetails:"GetUserLastClickDetails",GetVersionDetails:"GetVersionDetails",IsWhitelisted:"IsWhitelisted",GetAllAutoPauseData:"GetAllAutoPauseData",UpdateWhitelist:"UpdateWhitelist",LiveVideoFound:"LiveVideoFound",TurnOffWelcomePopup:"TurnOffWelcomePopup",UpdateGlobalAutoPause:"UpdateGlobalAutoPause",IsAutoPauseEnabled:"IsAutoPauseEnabled",HasResponseStarted:"HasResponseStarted",AddResponseCaching:"AddResponseCaching",SendTelemetry:"SendTelemetry",GetId:"GetId",LogMsg:"LogMsg",GetBackgroundGlobals:"GetBackgroundGlobals"}},function(e,t,s){"use strict";class a{static getAutoPauseData(e){const t=[{BandWidthSaved:0,IsWhiteListed:!0,Url:"youtube.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"netflix.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"microsoft.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"webex.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"bluejeans.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"zoom.us",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"zoho.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"gotomeeting.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"clickmeeting.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"vonage.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"adobe.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"intermedia.net",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"ringcentral.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"evoice.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"u.cyberlink.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"digium.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"slack.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"skype.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"twitch.tv",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"sharepoint.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"mixer.com",VideosPaused:0,UserModified:!1},{BandWidthSaved:0,IsWhiteListed:!0,Url:"pluralsight.com",VideosPaused:0,UserModified:!1}],s=new XMLHttpRequest;s.open("GET","https://www.siteadvisor.com/webboost/defaultwhitelist.json",!0),s.responseType="json",s.onreadystatechange=function(){if(4===s.readyState&&200===s.status)try{e(!1,null!==s.response?s.response:t)}catch(s){e(!0,t)}},s.onerror=function(){e(!0,t)},s.send()}}var i=s(0),o=s(9);s.d(t,"a",function(){return r});const n={LastFetchedTime:"LastFetchedTime",AutoPausedUrls:"AutoPausedUrls",AutoPauseEnabled:"AutoPauseEnabled",ShowWelcomePopup:"ShowWelcomePopup",ClientId:"ClientId",WhitelistFetchInterval:864e5};class r{static _initfromlocalstorage(e){i.a.storage.local.get(n.AutoPausedUrls,t=>{this._autopausedata=void 0===t.AutoPausedUrls?[]:t.AutoPausedUrls,i.a.storage.local.get(n.AutoPauseEnabled,t=>{this._autopauseenabled=void 0===t.AutoPauseEnabled||!0===t.AutoPauseEnabled,i.a.storage.local.get(n.ShowWelcomePopup,t=>{this._showWelcomePopup=t.ShowWelcomePopup,void 0!==e&&e()})})}),i.a.storage.local.get(n.ClientId,e=>{this._clientId=e.ClientId}),i.a.storage.local.get("InstalledTime",e=>{if(void 0===e.InstalledTime){const e=Date.now();r.setInstalledTime(e),this._installedTime=e}else this._installedTime=e.InstalledTime})}static _hasDomain(e,t){for(let s=0;s<t.length;++s)if(void 0!==t[s].Url&&e===t[s].Url)return t[s];return null}static _verifiedPauseData(e){const t={BandWidthSaved:0,IsWhiteListed:!0,Url:"",VideosPaused:0,UserModified:!1};return t.Url=e.Url,t}static _mergeAutoPauseData(e){if(void 0!==e&&void 0!==e.length){for(let t=this._autopausedata.length-1;t>=0;--t)if(!0!==this._autopausedata[t].UserModified){if(null===r._hasDomain(this._autopausedata[t].Url,e)){const{bandWidthSaved:e,videosPaused:s}=this._autopausedata[t];e>0||s>0?this._autopausedata[t].IsWhiteListed=!1:this._autopausedata.splice(t,1)}}for(let t=0;t<e.length;++t)if(void 0!==e[t].Url){if(null===r._hasDomain(e[t].Url,this._autopausedata)){const s=r._verifiedPauseData(e[t]);this._autopausedata.push(s)}}i.a.storage.local.set({AutoPausedUrls:e})}}static _fetchData(e){i.a.storage.local.set({LastFetchedTime:Date.now()}),a.getAutoPauseData((t,s)=>{t&&!e||(r._initfromlocalstorage(()=>{r._mergeAutoPauseData(s),i.a.storage.local.set({AutoPausedUrls:this._autopausedata})}),e&&(i.a.storage.local.set({AutoPauseEnabled:!0}),this._autopauseenabled=!0,i.a.storage.local.set({ShowWelcomePopup:!0}),this._showWelcomePopup=!0))})}static _fetchPeriodically(e){setInterval(()=>{r._fetchData(!1)},e)}static init(){i.a.storage.local.get(n.LastFetchedTime,e=>{const t=Date.now();if(void 0===e.LastFetchedTime||e.LastFetchedTime+n.WhitelistFetchInterval<t)r._fetchData(void 0===e.LastFetchedTime),r._fetchPeriodically(n.WhitelistFetchInterval);else{r._initfromlocalstorage();const s=n.WhitelistFetchInterval-(t-e.LastFetchedTime);setTimeout(()=>{r._fetchData(!1),r._fetchPeriodically(n.WhitelistFetchInterval)},s)}})}static setClientId(e){this._clientId=e,i.a.storage.local.set({ClientId:e})}static getClientId(){return this._clientId}static setInstalledTime(e){this._installedTime=e,i.a.storage.local.set({InstalledTime:e})}static getInstalledTime(){return this._installedTime}static getShowWelcomePopup(){return this._showWelcomePopup}static setShowWelcomePopup(){this._showWelcomePopup=!1,i.a.storage.local.set({ShowWelcomePopup:!1})}static setAutoPauseEnabled(e){this._autopauseenabled=e,i.a.storage.local.set({AutoPauseEnabled:this._autopauseenabled})}static getAutoPauseEnabled(){return this._autopauseenabled}static getAllAutoPauseData(){return this._autopausedata}static getAutoPauseData(e){const t=o.a.getDomainName(e);if(!t)return null;for(let e=0;e<this._autopausedata.length;++e){if(t.endsWith(this._autopausedata[e].Url))return this._autopausedata[e];if(this._autopausedata[e].Url.endsWith(t))return this._autopausedata[e].Url=t,i.a.storage.local.set({AutoPausedUrls:this._autopausedata}),this._autopausedata[e]}return null}static setAutoPauseData(e,t,s,a){const n=o.a.getDomainName(e);if(null===n||void 0===n)return;const l=r.getAutoPauseData(e);if(null===l){const e={BandWidthSaved:s,IsWhiteListed:void 0!==a&&a,Url:n,VideosPaused:t,UserModified:!1};this._autopausedata.push(e)}else l.BandWidthSaved+=s,l.VideosPaused+=t,void 0!==a&&(l.IsWhiteListed=a,l.UserModified=!0);i.a.storage.local.set({AutoPausedUrls:this._autopausedata})}static getTotalVideosPaused(){let e=0;for(let t=0;t<this._autopausedata.length;++t)e+=this._autopausedata[t].VideosPaused;return e}static getTotalBandwidthSaved(){let e=0;for(let t=0;t<this._autopausedata.length;++t)e+=this._autopausedata[t].BandWidthSaved;return e}static get(e,t){i.a.storage.local.get(e,s=>{t(s[e])})}}},function(e,t,s){"use strict";t.a={UseNativeLogger:"UseNativeLogger",ClickPlayInterval:4e3,BannerId:"webboost_bannerid",VideoId:"webboost_videoid",UserPlayed:"webboost_userplayed",ProcessedVideo:"webboost_processed",FoundPaused:"webboost_found_paused"}},function(e,t,s){"use strict";t.a={logger:null,isLive:!1}},function(e,t,s){"use strict";var a=s(1),i=s(3),o=s(9);class n{constructor(){this._blockedUrls=[],this._lastClickTime=0,this._lastClickCoordinates={x:0,y:0},this._videosPaused=0,this._m3u8MasterFileList=[],this._liveVideoNotified=!1,this._whitelistedFrameIds=[],this._hlsUserClickedPlay=[],this._responses=new Map,this._responseCacheVideos=new Set,this._claimData=new Map}addResponse(e,t,s){this._responses.set(e,{initiator:t,responseHeaders:s})}getResponse(e){return this._responses.get(e)}deleteResponse(e){this._responses.delete(e)}incrementVideosPaused(){this._videosPaused+=1}decreaseVideosPaused(){this._videosPaused-=1}getTotalVideosPaused(){return this._videosPaused}addBlockedUrl(e){this._blockedUrls.push(e)}containsBlockedUrl(e){return void 0!==this._blockedUrls.find(t=>t._blockedUrl===e)}addWhitelistedFrameId(e){this._whitelistedFrameIds.push(e)}containsWhitelistedFrameId(e){return void 0!==this._whitelistedFrameIds.find(t=>t===e)}setUserLastClickDetails(e,t){this._lastClickTime=e,this._lastClickCoordinates=t}getUserLastClickDetails(){return{lastClickTime:this._lastClickTime,lastClickCoordinates:this._lastClickCoordinates}}removeBlockedUrl(e){for(let t=0;t<this._blockedUrls.length;++t)if(this._blockedUrls[t]===e)return this._blockedUrls.splice(t,1),!0;return!1}addVideoForResponseCaching(e){this._responseCacheVideos.add(e)}hasVideoForResponseCaching(e){return this._responseCacheVideos.has(e)}addClaimData(e,t){0!==t&&this._claimData.set(e,t)}getClaimData(e){const t=this._claimData.get(e);return this._claimData.delete(e),t>0?t:0}}var r=s(0),l=s(8);s.d(t,"a",function(){return d}),s.d(t,"b",function(){return c});class d{static isInArray(e,t){for(let s=0;s<e.length;++s)if(e[s]===t)return!0;return!1}static resetTabData(e){a.a.TabDataList.set(e,new n),this.updateBadge(e)}static updateBadge(e){let t="";const s=a.a.TabDataList.get(e);s._videosPaused>0&&(t=s._videosPaused.toString()),r.a.browserAction.setBadgeText({text:t,tabId:e})}static getDomainName(e){return o.a.getDomainName(e)}static setAutoPauseData(e,t,s,a){i.a.setAutoPauseData(e,t,s,a);const o=d.getDomainName(e);if(""===o||void 0===o||null===o)return;const n=[{UniqueIdentifier:"WebBoost.Video.Pause"},{"Event.Value":t},{"Event.Label":o},{Metric1:s}],c={extension_id:r.a.runtime.id,payload:n},u=l.a.ExternalMsgDispatcher;u.sendExternalMessage(0,u._nativeCommands.AggregateData,c)}static isWhitelisted(e){a.a.logger.log(`Checking whether url ${e} is whitelisted`);const t=i.a.getAutoPauseData(e);return null!==t&&t.IsWhiteListed}}const c=function(e){const t=e.getBoundingClientRect(),s=window.pageYOffset,a=window.pageXOffset;return{top:Math.round(t.top+s),left:Math.round(t.left+a),bottom:Math.round(t.bottom+s),right:Math.round(t.right+a)}}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});var a=s(2),i=s(5),o=s(0);class n{static addVideoForResponseCaching(e){o.a.runtime.sendMessage({action:a.a.AddResponseCaching,src:e})}static blockVideo(e,t){o.a.runtime.sendMessage({action:a.a.Block,src:e},t)}static unblockVideo(e,t){o.a.runtime.sendMessage({action:a.a.Clear,src:e},t)}static setUserLastClickDetails(e,t){o.a.runtime.sendMessage({action:a.a.SetUserLastClickDetails,time:e,coordinates:t})}static getUserLastClickDetails(e){o.a.runtime.sendMessage({action:a.a.GetUserLastClickDetails},e)}static isWhitelisted(e,t){o.a.runtime.sendMessage({action:a.a.IsWhitelisted,src:e},t)}static isAutoPauseEnabled(e){o.a.runtime.sendMessage({action:a.a.IsAutoPauseEnabled},e)}static sendTelemetry(e){o.a.runtime.sendMessage({action:a.a.SendTelemetry,telemetry:e})}static logMsg(e){o.a.runtime.sendMessage({action:a.a.LogMsg,logDetails:e})}static getBackgroundGlobals(e){o.a.runtime.sendMessage({action:a.a.GetBackgroundGlobals},e)}static init(){o.a.runtime.onMessage.addListener((e,t,s)=>{switch(e.request_type){case a.a.LiveVideoFound:i.a.logger.log("Found live video"),i.a.isLive=!0}})}}},function(e,t,s){"use strict";var a=s(1),i=s(0),o=s(4);const n={ExternalMsgDispatcher:new class{constructor(){this._externalCommands={PING:0},this._responseCommands={PONG:0},this._nativeCommands={LogMsg:6,HandshakeGreeting:9,AggregateData:11,Telemetry:14},this._extensionCommands={HandshakeGreeting:8},this._extPort=null}init(){const e={request_type:this._externalCommands.PING,payload:{}};this._sendExtnMsg(a.a.EXTERNAL_EXTNS.get("WebAdvisor"),e)}_isvalidRequestType(e){let t=!1;for(const s in this._externalCommands)this._externalCommands[s]===e&&(t=!0);for(const s in this._nativeCommands)this._nativeCommands[s]===e&&(t=!0);return t}_validateMsg(e,t){return!(void 0===e||void 0===t||!this._isvalidRequestType(e))||(a.a.logger.logLocal("Invalid msg to be sent externally"),!1)}sendExternalMessage(e,t,s){if(!this._validateMsg(t,s))return;const i={id:e,request_type:t,payload:s};if(!this._extPort)try{this._sendExtnMsg(a.a.EXTERNAL_EXTNS.get("WebAdvisor"),i)}catch(e){a.a.logger.logLocal(`Sending external msg: ${JSON.stringify(i)}`)}this._extPort||this._sendExtnMsg(a.a.EXTERNAL_EXTNS.get("WebAdvisor"),i);try{this._extPort.postMessage(i)}catch(e){this._extPort=null,a.a.logger.logLocal(`Error sending message to native: ${e.message}`)}}logMsg(e){this.sendExternalMessage(0,this._nativeCommands.LogMsg,{process_type:0===e.processType?"ct":"bg",browser_type:e.browserType,extension_type:e.extensionType,log_level:e.logLevel,msg:e.msg})}_processNativeMessage(e){switch(a.a.logger.log(`Processing message from binary: ${e.request_type} ${JSON.stringify(e.payload)}`),e.request_type){case this._extensionCommands.HandshakeGreeting:this._handleNativeSettings(e.payload.settings),a.a.logger.log(`Binary version: ${e.payload.version}`)}}_handleNativeSettings(e){void 0!==e&&e[o.a.UseNativeLogger]&&(a.a.useNativeLogger=!0,a.a.logger.setNativeLoggingEnabled(!0,1))}_disconnectNative(){this._extPort&&(this._extPort.disconnect(),this._extPort=null)}_connectNative(){if(this._extPort=i.a.runtime.connectNative("siteadvisor.mcafee.chrome.extension"),null===this._extPort)return;this._extPort.onDisconnect.addListener(()=>{a.a.logger.log("Failed to make connection or we got disconnected from native"),this._extPort=null}),this._extPort.onMessage.addListener(e=>{if("request_type"in e&&"id"in e&&"payload"in e)try{this._processNativeMessage(e)}catch(t){a.a.logger.log(`Native json message may be missing some keys: ${JSON.stringify(e)} + ${t.message} `)}else a.a.logger.log(`Invalid native json message: ${JSON.stringify(e)} `)});const e=i.a.runtime.getManifest();this._extPort.postMessage({id:0,request_type:this._nativeCommands.HandshakeGreeting,payload:{extn_version:e.version,browser_type:2,user_agent:navigator.userAgent,extn_id:i.a.runtime.id}})}_sendExtnMsg(e,t){i.a.runtime.sendMessage(e,t,e=>{e?(a.a.logger.log(`Message received in external dispatcher: ${JSON.stringify(e)}`),e.useNativeLogger&&(a.a.useNativeLogger=!0,a.a.logger.setNativeLoggingEnabled(!0,1))):this._connectNative()})}}};t.a=n},function(e,t,s){"use strict";s.d(t,"a",function(){return a});class a{static getDomainName(e){let t=e;/^(https?:|chrome:|about:)/.test(e)||(t=`https://${e}`);const s=new URL(t);return s.hostname.startsWith("www.")?s.hostname.substr(4):s.hostname}}},function(e,t,s){"use strict";var a={None:0,Info:1,Err:2,All:3},i=s(7);class o{static getBrowserTypes(){return{unknown:-1,firefox:1,chrome:2,ironSource:3,edge:4}}static toBrowserTypeInt(e){return this.getBrowserTypes()[e]}}var n=s(3),r=s(8);s.d(t,"a",function(){return l});class l{constructor(e){this.logLevel=e,this.nativeLoggingEnabled=!1,this.processType=-1,this.browserType=o.toBrowserTypeInt("chrome"),this.extensionType="wb",n.a.get("ExtensionLogging",e=>{void 0!==e&&Number.isInteger(e)&&e>=0&&e<=3&&(this.logLevel=e)})}setNativeLoggingEnabled(e,t){void 0!==t&&(this.processType=t),this.nativeLoggingEnabled=e}log(e){if(this.nativeLoggingEnabled){const t={processType:this.processType,browserType:this.browserType,extensionType:this.extensionType,logLevel:a.Info,msg:e};0===this.processType?i.a.logMsg(t):r.a.ExternalMsgDispatcher.logMsg(t)}if(a.Info&&this.logLevel){const t=new Date;console.log(`${t.toLocaleString()} ${e}`)}}error(e){if(this.nativeLoggingEnabled){const t={processType:this.processType,browserType:this.browserType,extensionType:this.extensionType,logLevel:a.Err,msg:e};0===this.processType?i.a.logMsg(t):r.a.ExternalMsgDispatcher.logMsg(t)}if(a.Err&&this.logLevel){const t=new Date;console.error(`${t.toLocaleString()} ${e}`)}}logLocal(e){if(a.Info&&this.logLevel){const t=new Date;console.log(`${t.toLocaleString()} ${e}`)}}}},,function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(2),o=s(6),n=s(3);class r{static calculateSavings(e,t,s,a){const i=s.find(e=>"content-type"===e.name.toLowerCase()),o=new RegExp("^(video)/(?:x-)?([^; ]+)"),n=new RegExp("^(application)/(vnd.apple.mpegurl|octet-stream)");i&&(o.exec(i.value)||n.exec(i.value))&&-1===e.indexOf("m3u8")&&this._bandwidthSaved(e,t,s,a)}static _bandwidthSaved(e,t,s,i){const n=s.find(e=>"content-length"===e.name.toLowerCase()),r=new RegExp("^bytes [0-9]+-[0-9]+/([0-9]+)$");if(a.a.MEDIA_PATTERN.test(e)){let e=null;const l=s.find(e=>"content-range"===e.name.toLowerCase());if(l){const t=r.exec(l.value);t&&([,e]=t)}e||(e=n.value),e=parseInt(e,10),a.a.logger.log(`TabID: ${i}, MainURL: ${t}, SavedData: ${e}`),o.a.setAutoPauseData(t,0,e)}}static _claimHLSDataSaved(e,t){const s=a.a.TabDataList.get(t).getClaimData(e);o.a.setAutoPauseData(e,0,s)}}var l=s(0),d=s(8);class c{init(){l.a.runtime.onMessage.addListener(this._messageRequestListener.bind(this))}_setUserLastClickDetails(e,t,s){return a.a.TabDataList.get(e).setUserLastClickDetails(t,s),!1}_getUserLastClickDetails(e,t){return t(a.a.TabDataList.get(e).getUserLastClickDetails()),!1}_blockStreaming(e,t){a.a.logger.log(`Blocking video : ${t}  from tab ${e}`);const s=a.a.TabDataList.get(e);return!s.containsBlockedUrl(t)&&void 0!==s&&(l.a.tabs.get(e,i=>{s.incrementVideosPaused(),s.addBlockedUrl(t),o.a.updateBadge(e),o.a.setAutoPauseData(i.url,1,0);const n=s.getResponse(t);void 0!==n?(a.a.logger.log(`Calculating bandwidth from block streaming for video ${t}`),r.calculateSavings(t,i.url,n.responseHeaders,e)):r._claimHLSDataSaved(i.url,e)}),!1)}_unblockStreaming(e,t,s,i){a.a.logger.log(`Unblocking video ${s} from tab id ${e} from frameid ${t}`);const n=a.a.TabDataList.get(e);return void 0!==n&&(t>0&&n.addWhitelistedFrameId(t),a.a.MEDIA_PATTERN.test(s)||n._hlsUserClickedPlay.push(s),!!n.removeBlockedUrl(s)&&(n.decreaseVideosPaused(),o.a.updateBadge(e),void 0!==i&&i(),!0))}_getVersionDetails(e){return e({extVersion:l.a.runtime.getManifest().version}),!1}_toUrlForOptionsUI(e){return e.startsWith("http")?e:""}_getAllAutoPauseData(e,t){return l.a.tabs.get(e,s=>{const i=a.a.TabDataList.get(e).getTotalVideosPaused();this._isWhitelisted(s.url,e=>{const a={totalVideosPaused:n.a.getTotalVideosPaused(),pausedInThisSession:i,autoPausedDataList:n.a.getAllAutoPauseData(),totalBandwidthSaved:n.a.getTotalBandwidthSaved(),globalAutoPauseEnabled:n.a.getAutoPauseEnabled(),isHostWhiteListed:e,currentUrl:void 0===s||void 0===s.url?"":this._toUrlForOptionsUI(s.url),showWelcomePopup:n.a.getShowWelcomePopup()};t(a)})}),!0}_isWhitelistedFrame(e,t){const s=a.a.TabDataList.get(e);return void 0===s?(a.a.logger.log(`Frame ${t} of tab ${e} is not whitelisted`),!1):s.containsWhitelistedFrameId(t)?(a.a.logger.log(`Frame ${t} of tab ${e} is whitelisted`),!0):(a.a.logger.log(`Frame ${t} of tab ${e} is not whitelisted`),!1)}_isWhitelisted(e,t){t(o.a.isWhitelisted(e))}_isAutoPauseEnabled(e){return e(n.a.getAutoPauseEnabled()),!1}_getActiveTabId(e){l.a.tabs.query({active:!0,currentWindow:!0},t=>{void 0!==t&&t.length>0&&e(t[0].id)})}_updateWhitelist(e,t){o.a.setAutoPauseData(e,0,0,t)}_updateGlobalAutoPause(e){n.a.setAutoPauseEnabled(e)}_turnOffWelcomePopup(){n.a.setShowWelcomePopup()}_addResponseCaching(e,t){const s=a.a.TabDataList.get(e);void 0!==s&&s.addVideoForResponseCaching(t)}_sendTelemetry(e){const t=d.a.ExternalMsgDispatcher;d.a.ExternalMsgDispatcher.sendExternalMessage(0,t._nativeCommands.Telemetry,{telemetryData:e})}_logMsg(e){d.a.ExternalMsgDispatcher.logMsg(e)}_messageRequestListener(e,t,s){let o=!1;const r=t.tab&&t.tab.id;switch(e.action){case i.a.AddResponseCaching:this._addResponseCaching(r,e.src);break;case i.a.SetUserLastClickDetails:o=this._setUserLastClickDetails(r,e.time,e.coordinates);break;case i.a.GetUserLastClickDetails:o=this._getUserLastClickDetails(r,s);break;case i.a.Block:o=this._blockStreaming(r,e.src),s(!0);break;case i.a.Clear:o=this._unblockStreaming(r,t.frameId,e.src,s);break;case i.a.GetVersionDetails:o=this._getVersionDetails(s);break;case i.a.IsWhitelisted:this._isWhitelisted(e.src,e=>{if(e)s(e);else{const e=this._isWhitelistedFrame(r,t.frameId);s(e)}});break;case i.a.IsAutoPauseEnabled:o=this._isAutoPauseEnabled(s);break;case i.a.GetAllAutoPauseData:this._getActiveTabId(e=>{this._getAllAutoPauseData(e,s)}),o=!0;break;case i.a.UpdateWhitelist:this._updateWhitelist(e.whiteListedUrl,e.whiteListedStatus);break;case i.a.UpdateGlobalAutoPause:this._updateGlobalAutoPause(e.enabled);break;case i.a.TurnOffWelcomePopup:this._turnOffWelcomePopup();break;case i.a.SendTelemetry:this._sendTelemetry(e.telemetry);break;case i.a.GetId:s(n.a.getClientId());break;case i.a.LogMsg:this._logMsg(e.logDetails);break;case i.a.GetBackgroundGlobals:s(a.a)}return o}}class u{constructor(){this.EXTENDED_FILE_STRING="#EXTINF:",this.EXTENDED_FILE_ENDLIST_STRING="#EXT-X-ENDLIST",this.isLive=!0,this.totalDuration=0}parse(e,t){try{for(let s=e;s<t.length;s++){if(t[s].includes(this.EXTENDED_FILE_ENDLIST_STRING)){this.isLive=!1;continue}if(!t[s].includes(this.EXTENDED_FILE_STRING))continue;const e=t[s].indexOf(","),a=t[s].substring(t[s].indexOf(":")+1,-1!==e?e:t[s].length-1);let i=parseFloat(a);i=Number.isNaN(i)?0:i,this.totalDuration=this.totalDuration+i}return!0}catch(e){return a.a.logger.error(`Failed to parse Extended M3U8 file: ${e.message}`),!1}}}class g{constructor(){this._streamList=[],this.MASTER_FILE_STRING="#EXT-X-STREAM-INF:"}parse(e,t){try{for(let s=e;s<t.length;s++)if(t[s].includes(this.MASTER_FILE_STRING)){const e={URL:t[s+1],details:t[s].substring(this.MASTER_FILE_STRING.length)};this._streamList.push(e)}return!0}catch(e){return a.a.logger.error(`Failed to parse Master M3U8 file: ${e.message}`),!1}}getSpecificDetail(e,t){const s=this._streamList[e].details.split(",").find(e=>e.includes(t));return void 0===s?null:s.substring(s.indexOf("=")+1)}}class h{static createM3U8(e,t,s,o){const n=s.split("\n");let r=!1;const d=n.findIndex(e=>e.includes("#EXT-X-STREAM-INF:")?(a.a.logger.log(`Master: ${t}`),r=!0,!0):!!e.includes("#EXTINF:")&&(a.a.logger.log(`Extended: ${t}`),r=!1,!0));if(-1===d)return!1;const c=r?new g:new u;if(!c.parse(d,n))return!1;const h=a.a.TabDataList.get(e);return r?h._m3u8MasterFileList.push(c):(h._liveVideoNotified||(h._liveVideoNotified=!0,c.isLive&&l.a.tabs.sendMessage(e,{request_type:i.a.LiveVideoFound})),this.startProcessingM3U8Savings(e,t,o,c.totalDuration)),!0}static startProcessingM3U8Savings(e,t,s,i){const o=t.substring(t.lastIndexOf("/")+1),n=a.a.TabDataList.get(e);let r=-1;const l=n._m3u8MasterFileList.find(e=>-1!==(r=e._streamList.findIndex(e=>e.URL.includes(o))));let d=0;if(void 0===l&&1===n._m3u8MasterFileList.length){const e=Math.floor(n._m3u8MasterFileList[0]._streamList.length/2);d=n._m3u8MasterFileList[0].getSpecificDetail(e,"BANDWIDTH")}else void 0!==l&&(d=l.getSpecificDetail(r,"BANDWIDTH"));const c=Math.floor(d*i/8);n.addClaimData(s,c),n._m3u8MasterFileList=[]}}class p{init(){l.a.webRequest.onHeadersReceived.addListener(e=>{if(e.tabId<0||!n.a.getAutoPauseEnabled())return;e.url.includes("m3u8")&&this._hlsVideoStartProcess(e.tabId,e.url);const t=this._shouldBlock(e.tabId,e.url);return l.a.tabs.get(e.tabId,s=>{if(t)r.calculateSavings(e.url,s.url,e.responseHeaders,e.tabId);else{const t=a.a.TabDataList.get(e.tabId);void 0!==t&&t.hasVideoForResponseCaching(e.url)&&t.addResponse(e.url,s.url,e.responseHeaders)}}),{cancel:t}},{urls:["<all_urls>"]},["responseHeaders","blocking"])}_shouldBlock(e,t){if(-1===e)return!1;const s=a.a.TabDataList.get(e);return void 0!==s&&s.containsBlockedUrl(t)}_hlsVideoStartProcess(e,t){l.a.tabs.get(e,s=>{const i=n.a.getAutoPauseData(s.url);if(null!==i&&i.IsWhiteListed)return;if(a.a.TabDataList.get(e)._hlsUserClickedPlay.some(e=>e.includes(s.url)))return;const o=new XMLHttpRequest;o.open("GET",t,!0),o.onreadystatechange=function(){4===o.readyState&&200===o.status&&h.createM3U8(e,t,o.responseText,s.url)},o.send()})}}class m{init(){l.a.tabs.query({},e=>{e.forEach(e=>{o.a.resetTabData(e.id)})}),l.a.tabs.onRemoved.addListener(this._onRemovedListener),l.a.tabs.onCreated.addListener(this._onCreatedListener)}_onRemovedListener(e,t){a.a.TabDataList.has(e)&&a.a.TabDataList.delete(e)}_onCreatedListener(e){o.a.resetTabData(e.id)}}class _{init(){l.a.webNavigation.onCommitted.addListener(e=>{!1!==n.a.getAutoPauseEnabled()&&l.a.tabs.get(e.tabId,t=>{if(void 0===t)return;o.a.isWhitelisted(t.url)||(0===e.frameId&&o.a.resetTabData(e.tabId),a.a.logger.log(`Attempting to inject content script to url ${t.url} for tabid ${e.tabId} and frame id ${e.frameId}`),l.a.tabs.executeScript(e.tabId,{allFrames:!1,file:"js/content.js",frameId:e.frameId,matchAboutBlank:!0},()=>{l.a.runtime.lastError&&a.a.logger.log(`Failed to inject content script to frame ${e.frameId} for top level url: ${t.url}, error: ${l.a.extension.lastError.message}`)}))})},{url:[{schemes:["http","https","about"]}]})}}class f{constructor(){this._externalCommands={DISCONNECT_NATIVE:1}}init(){l.a.runtime.onMessageExternal.addListener((e,t,s)=>!(void 0===t.id||!a.a.EXTERNAL_EXTNS.isWhiteListed(t.id))&&this.processMessage(t.id,e,s))}processMessage(e,t,s){let i=!1;if(!("request_type"in t&&"payload"in t))return i;const{request_type:o}=t;switch(o){case this._externalCommands.DISCONNECT_NATIVE:d.a.ExternalMsgDispatcher._disconnectNative(),i=!1;break;default:a.a.logger.log("Invalid request")}return i}}class v{static getListeners(){const e=[];return e.push(new c),e.push(new p),e.push(new m),e.push(new _),e.push(new f),e}}const b={AccountId:"AccountId",ClientId:"ClientId"},L={Accepted:"Accepted",Rejected:"Rejected"},P={Implicit:"Implicit",Explicit:"Explicit"},T={Inline:"Inline",Popup:"Popup"},I={Registration:"Registration",ProductDownload:"ProductDownload",Purchase:"Purchase",ProductInstallation:"ProductInstallation",ProductActivation:"ProductActivation"},D={Salt:"4157A795-1451-4fe3-BA59-0C4C98676668",EULAService:"https://home.mcafee.com/webservices/eulaservice.asmx",EULASoapAction:"http://home.mcafee.com/SaveEulaTrackingDetails"};class A{static get(e,t){const s=new TextEncoder("utf-8").encode(e);return crypto.subtle.digest("SHA-256",s).then(e=>{t(A._hex(e))})}static _hex(e){const t=[],s=new DataView(e);for(let e=0;e<s.byteLength;e+=4){const a="00000000",i=(a+s.getUint32(e).toString(16)).slice(-a.length);t.push(i)}return t.join("")}}class E{setContextType(e){this.ContextType=e}setContext(e){this.ContextTypeValue=e}setEULAVersion(e){this.EulaVersion=e}setActionType(e){this.ActionType=e}setAcceptanceType(e){this.AcceptanceType=e}setViewType(e){this.ViewType=e}setCulture(e){this.Culture=e}setApplication(e){this.Application=e}setAffId(e){this.AffiliateId=e}setPackageId(e){this.PackageId=e}setFunctionality(e){this.Functionality=e}setContextAdditionalInfo(e){this.ContextAdditionalInfo=e}_toHash(e){const t=this.AffiliateId+this.ContextTypeValue+D.Salt;A.get(t,e)}toXml(e){let t='<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">';t+="<s:Body>",t+='<SaveEulaTrackingDetails xmlns="http://home.mcafee.com/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">',t+="<eulaTrackingRequestInfo>";const s=Object.getOwnPropertyNames(this);for(let e=0;e<s.length;++e)t+="<",t+=s[e],t+=">",t+=this[s[e]],t+="</",t+=s[e],t+=">";t+="<HashedInput>",this._toHash(s=>{t+=s,t+="</HashedInput>",t+="</eulaTrackingRequestInfo >",t+="</SaveEulaTrackingDetails >",t+="</s:Body >",e(t+="</s:Envelope >")})}}class U{static _isResponseValid(e){const t=e.getElementsByTagName("SaveEulaTrackingDetailsResult");return void 0!==t&&void 0!==t[0]&&"true"===t[0].innerHTML}static submit(e,t){const s=new XMLHttpRequest;s.open("POST",D.EULAService),s.setRequestHeader("SOAPAction",D.EULASoapAction),s.setRequestHeader("Content-Type","text/xml; charset=utf-8"),e.toXml(i=>{s.send(i),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status)try{U._isResponseValid(s.responseXML)?(a.a.logger.log("EULA Acceptance send to server successfully"),t(!0,e.ContextTypeValue)):(a.a.logger.log("EULA Acceptance response denotes that the acceptance request failed"),t(!1))}catch(e){a.a.logger.error(`Failed to send EULA Acceptance ${e}`)}},s.onerror=function(){a.a.logger.error("Failed to make EULA Acceptance request"),t(!1)}})}}class y{static newGuid(){const e=new Uint8Array(24);window.crypto.getRandomValues(e);let t=Date.now().toString()+Math.random().toString().substring(2);for(let s=0;s<24;++s)t+=e[s].toString();let s="{";for(let e=0;e<36;++e)if(8===e||13===e||18===e||23===e)s+="-";else{s+=t[Math.floor(Math.random()*t.length)]}return s+="}"}}class M{static submit(e,t,s,a){const i=new Date(s),o=`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`,n=new E;n.setAcceptanceType(P.Implicit),n.setActionType(L.Accepted),n.setAffId(e),n.setApplication("McAfee WebBoost"),n.setContextType(b.ClientId);const r=void 0!==t?t:y.newGuid();n.setContext(r),n.setCulture("Default"),n.setEULAVersion("EULA"),n.setFunctionality(I.ProductInstallation),n.setPackageId(0),n.setViewType(T.Inline),n.setContextAdditionalInfo(`AcceptanceDate : ${o}; Affid :${e}`),U.submit(n,a)}}var S=s(10);(new class{init(){a.a.logger=new S.a(0),n.a.init();const e=v.getListeners();for(let t=0;t<e.length;++t)e[t].init();setTimeout(()=>{if(void 0===n.a.getClientId()){const e=n.a.getInstalledTime();void 0!==e&&M.submit(0,void 0,e,(e,t)=>{e&&n.a.setClientId(t)})}},5e3),setTimeout(()=>{d.a.ExternalMsgDispatcher.init()},1e3)}}).init()}]);
//# sourceMappingURL=../../sourceMap/chrome/background.map