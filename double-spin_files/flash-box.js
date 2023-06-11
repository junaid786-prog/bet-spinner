!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.FlashBox=e(t)}("undefined"!=typeof global?global:this.window||this.global,(function(t){"use strict";!!document.querySelector&&t.addEventListener;var e={fonts:[],lightSpeed:500,lightsOff:1,direction:"clockwise",fadeLights:!1,responsive:!1,sizeFromCanvas:!1,assets:{},objectPaint:{rail:{stroke:"#ffc700",strokeWeight:2,fill:"#ffc700"},content:{stroke:"#ffc700",strokeWeight:2,fill:"#000000"}},outerRadius:35,innerRadius:20,edgeGap:19,lightSettings:{minMargin:0,lightDiam:38,gapHorizontal:30,gapVertical:30},canvasSettings:{width:400,height:400,margin:10}},i=function(t,e,i){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(i,t[n],n,t);else for(var a=0,s=t.length;a<s;a++)e.call(i,t[a],a,t)},n=function(t){return!t||0===t.length};return function(t,a){var s,r,o,g,l,h,c,f,d,u,p,v,m,S,w,k,y,b={},P=!1;function C(){clearInterval(c),c=window.setInterval((function(){if(l.clearRect(0,0,g.width,g.height),f<=0){d=1;for(var t=JSON.parse(JSON.stringify(h)),e=0;e<h.length;e++)t[e].on&&(h[e].on=!1,"anti-clockwise"==s.direction?e-1>=0?h[e-1].on=!0:h[h.length-1].on=!0:"clockwise"==s.direction&&(e+1<=h.length-1?h[e+1].on=!0:h[0].on=!0))}f>=100&&(d=0),1==d&&(f+=u),0==d&&(f-=u),z()}),p)}function D(){clearInterval(c),c=window.setInterval((function(){l.clearRect(0,0,g.width,g.height);for(var t=JSON.parse(JSON.stringify(h)),e=0;e<h.length;e++)t[e].on&&(h[e].on=!1,"anti-clockwise"==s.direction?e-1>=0?h[e-1].on=!0:h[h.length-1].on=!0:"clockwise"==s.direction&&(e+1<=h.length-1?h[e+1].on=!0:h[0].on=!0));z()}),s.lightSpeed)}function I(){(o=r)&&s.responsive&&(o.offsetWidth&&(s.canvasSettings.width=o.offsetWidth),o.offsetHeight&&(s.canvasSettings.height=o.offsetHeight)),g||((g=document.createElement("canvas")).setAttribute("id","flashBoxCanvas"),r.appendChild(g)),l=g.getContext("2d"),s.sizeFromCanvas&&(s.canvasSettings.width=g.offsetWidth,s.canvasSettings.height=g.offsetHeight),g.setAttribute("width",s.canvasSettings.width),g.setAttribute("height",s.canvasSettings.height),h=[],j("top",s.lightSettings),j("right",s.lightSettings),j("bottom",s.lightSettings),j("left",s.lightSettings);for(var t=0;t<h.length;t++)t%(s.lightsOff+1)==0?h[t].on=!0:h[t].on=!1}function z(){x({shape:"roundedRectangle",shapeData:[s.canvasSettings.width-2*s.canvasSettings.margin,s.canvasSettings.height-2*s.canvasSettings.margin,s.canvasSettings.margin,s.canvasSettings.margin,s.outerRadius],fill:s.objectPaint.rail.fill,stroke:s.objectPaint.rail.stroke,strokeWeight:s.objectPaint.rail.strokeWeight}),"railTile"in s.assets&&!n(s.assets.railTile)&&x({shape:"roundedRectangle",shapeData:[s.canvasSettings.width-2*s.canvasSettings.margin,s.canvasSettings.height-2*s.canvasSettings.margin,s.canvasSettings.margin,s.canvasSettings.margin,s.outerRadius],fillImage:"railTile",stroke:s.objectPaint.rail.stroke,strokeWeight:s.objectPaint.rail.strokeWeight}),x({shape:"roundedRectangle",shapeData:[s.canvasSettings.width-2*v,s.canvasSettings.height-2*v,v,v,s.innerRadius],fill:s.objectPaint.content.fill,stroke:s.objectPaint.content.stroke,strokeWeight:s.objectPaint.content.strokeWeight}),"contentTile"in s.assets&&!n(s.assets.contentTile)&&x({shape:"roundedRectangle",shapeData:[s.canvasSettings.width-2*v,s.canvasSettings.height-2*v,v,v,s.innerRadius],fillImage:"contentTile",stroke:s.objectPaint.content.stroke,strokeWeight:s.objectPaint.content.strokeWeight});for(var t=0;t<h.length;t++){O(h[t])}}(r="string"==typeof t?document.querySelector(t):t,b.destroy=function(){clearInterval(c),P=!0},b.init=function(){P=!1,s=function(t,e){var n={};return i(t,(function(e,i){n[i]=t[i]})),i(e,(function(t,i){n[i]=e[i]})),n}(e,a||{}),"gapHorizontal"in s.lightSettings||(s.lightSettings.gapHorizontal=e.lightSettings.gapHorizontal),"gapVertical"in s.lightSettings||(s.lightSettings.gapVertical=e.lightSettings.gapVertical),"none"===window.getComputedStyle(r).display&&1==s.sizeFromCanvas||(v=2*s.edgeGap-s.canvasSettings.margin,s.lightSettings.edgeGap=s.edgeGap,p=10,f=0,u=1/s.lightSpeed*p*100,function(){var t=[];for(var e in s.assets)t.push(new Promise((function(t,i){var a=e;n(s.assets[a])&&t();var r=document.createElement("img");r.src=s.assets[a],r.onload=function(){s.assets[a]=r,t()}})));return Promise.all(t)}().then((function(){I(),z(),s.lightSpeed>0&&(s.fadeLights?C():D())})))},b.init(),b.refreshSize=function(){"none"===window.getComputedStyle(r).display&&1==s.sizeFromCanvas||P||l&&(l.clearRect(0,0,g.width,g.height),I(),z(),s.lightSpeed>0&&(s.fadeLights?C():D()))},s.responsive)&&(window.addEventListener("resize",(function(){clearTimeout(y),y=setTimeout((function(){b.refreshSize()}),250)})),window.onload=function(){b.refreshSize()},s.fonts.length>0&&WebFont.load({custom:{families:s.fonts},active:function(){b.refreshSize()}}));function O(t){var e,i=t.shapeData[0],a=t.shapeData[1],r=t.shapeData[2];"lightOn"in s.assets&&!n(s.assets.lightOn)&&"lightOff"in s.assets&&!n(s.assets.lightOff)&&(l.drawImage(s.assets.lightOff,i-r/2,a-r/2,r,r),s.fadeLights?(l.save(),l.globalAlpha=(e=f/100)*(2-e),t.on&&l.drawImage(s.assets.lightOn,i-r/2,a-r/2,r,r),l.restore()):t.on&&l.drawImage(s.assets.lightOn,i-r/2,a-r/2,r,r))}function j(t,e){"top"!=t&&"bottom"!=t||(m=e.gapHorizontal,S=s.canvasSettings.width-e.gapHorizontal),"top"==t&&(w=e.edgeGap,k=e.edgeGap),"bottom"==t&&(w=s.canvasSettings.height-e.edgeGap,k=s.canvasSettings.height-e.edgeGap),"left"!=t&&"right"!=t||(w=e.gapVertical,k=s.canvasSettings.height-e.gapVertical),"left"==t&&(m=e.edgeGap,S=e.edgeGap),"right"==t&&(m=s.canvasSettings.width-e.edgeGap,S=s.canvasSettings.width-e.edgeGap);var i=S-m,n=k-w,a=i>n?"horizontal":"vertical";if("horizontal"==a){e.lightCount=0,e.margin=e.minMargin,e.dirChange=i,e=R(e),s.lightSettings.horizontalCount=e.lightCount;for(var r=[],o=0;o<e.lightCount;o++){(g=[]).push(m+e.lightDiam/2+o*(e.lightDiam+e.margin)),g.push(w),g.push(e.lightDiam),r.push({shapeData:g,on:!1})}"bottom"==t&&(r=r.reverse()),h=h.concat(r)}else if("vertical"==a){e.lightCount=0,e.margin=e.minMargin,e.dirChange=n,e=R(e),s.lightSettings.verticalCount=e.lightCount;for(r=[],o=0;o<e.lightCount;o++){var g;(g=[]).push(m),g.push(w+e.lightDiam/2+o*(e.lightDiam+e.margin)),g.push(e.lightDiam),r.push({shapeData:g,on:!1})}"left"==t&&(r=r.reverse()),h=h.concat(r)}}var W=0,G=0;function R(t){return W>G&&(G=W),t.gap=t.dirChange-t.lightCount*(t.lightDiam+t.margin),0==W&&(t.gap<t.lightDiam+t.margin?t.traverse="down":t.traverse="up"),W++,"up"==t.traverse&&t.gap>t.lightDiam+t.margin&&(t.lightCount++,t=R(t)),"down"==t.traverse&&t.gap<t.lightDiam+t.margin&&(t.lightCount--,t=R(t)),0==--W&&(t.margin+=t.gap/t.lightCount,t.margin+=t.margin/t.lightCount),t}function x(t){if(Array.isArray(t.stroke)){for(var e=l.createLinearGradient(a.x+a.w/2,a.y,a.x+a.w/2,a.y+a.h),i=1/(t.stroke.length-1),n=0;n<t.stroke.length;n++)e.addColorStop(i*n,t.stroke[n]);l.strokeStyle=e}else l.strokeStyle=t.stroke;l.lineWidth=t.strokeWeight;var a=function(t,e){if("roundedRectangle"==t){return function(t,e,i,n,a){var s=Math.min(t,e);a>s/2&&(a=s/2);return l.beginPath(),l.arc(a+i,a+n,a,1*Math.PI,1.5*Math.PI),l.lineTo(t-a+i,n),l.arc(t-a+i,a+n,a,1.5*Math.PI,0),l.lineTo(t+i,e-a+n),l.arc(t-a+i,e-a+n,a,0,.5*Math.PI),l.lineTo(a+i,e+n),l.arc(a+i,e-a+n,a,.5*Math.PI,1*Math.PI),l.lineTo(0+i,a+n),l.closePath(),{w:t,h:e,x:i,y:n}}(e[0],e[1],e[2],e[3],e[4])}if("circle"==t){return function(t,e,i){var n=i;i>n/2&&(i=n/2);return l.beginPath(),l.arc(t,e,i,0,2*Math.PI),l.closePath(),{w:i,h:i,x:t,y:e}}(e[0],e[1],e[2])}if("square"==t){return function(t,e,i){return l.beginPath(),l.rect(t-i/2,e-i/2,i,i),l.closePath(),{w:i,h:i,x:t,y:e}}(e[0],e[1],e[2])}}(t.shape,t.shapeData);if(t.fillImage){var r=l.createPattern(s.assets[t.fillImage],"repeat");l.fillStyle=r}else if(Array.isArray(t.fill)){for(e=l.createLinearGradient(a.x+a.w/2,a.y,a.x+a.w/2,a.y+a.h),i=1/(t.fill.length-1),n=0;n<t.fill.length;n++)e.addColorStop(i*n,t.fill[n]);l.fillStyle=e}else l.fillStyle=t.fill;("fill"in t||"fillImage"in t)&&l.fill(),"stroke"in t&&l.stroke()}return b}}));