(this["webpackJsonpp5-churmd"]=this["webpackJsonpp5-churmd"]||[]).push([[0],{29:function(t,e,n){"use strict";var i=n(28),s=n(5),o=n(8),r=n(18),c=n(17),a=n(0),h=n.n(a),u=n(3),l=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).toggleCavasFullScreen=function(){var e=document.getElementById("canvas");e===document.fullscreenElement?t.exitFullScreen(e):t.openFullScreen(e)},t.openFullScreen=function(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},t.exitFullScreen=function(t){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",Object(i.a)(Object(i.a)({},this.props),{},{onClick:this.toggleCavasFullScreen}))}}]),n}(h.a.Component);e.a=l},35:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),o=(n(35),n(31)),r=n(6),c=n(9),a=n(3),h=function(){return Object(a.jsx)("h1",{children:"Not found my app"})},u=n(5),l=n(8),p=n(18),f=n(17),d=n(4),b=n.n(d),v=n(2),j=function(){function t(e,n,i,s){Object(u.a)(this,t),this.p=e,this.x=n,this.y=i,this.r=s}return Object(l.a)(t,[{key:"getPos",value:function(){return this.p.createVector(this.x,this.y)}},{key:"show",value:function(){this.p.push(),this.p.fill(255),this.p.circle(this.x,this.y,this.r),this.p.pop()}}]),t}();j.proptypes={p5Instance:b.a,x:v.number,y:v.number,r:v.number};var y=j,O=function t(e,n,i,s){Object(u.a)(this,t),this.abLerp=b.a.Vector.lerp(e,n,s),this.bcLerp=b.a.Vector.lerp(n,i,s),this.combinedLerp=b.a.Vector.lerp(this.abLerp,this.bcLerp,s)};O.proptypes={a:Object(v.instanceOf)(b.a.Vector),b:Object(v.instanceOf)(b.a.Vector),c:Object(v.instanceOf)(b.a.Vector)};var m=O,g=function(){function t(e,n,i,s){Object(u.a)(this,t),this.p=e,this.pointA=n,this.pointB=i,this.pointC=s,this.iterations=25}return Object(l.a)(t,[{key:"show",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=this.createCurve();e&&this.showCurveDots(i,n),t&&this.showLines(i,n)}},{key:"showLines",value:function(t,e){var n=this;this.p.push();var i=360*e;this.p.colorMode(this.p.HSL,360),this.p.strokeWeight(2),t.forEach((function(e,s){var o=s/t.length*360,r=n.p.color(o,250,200,i);n.p.stroke(r),n.p.line(e.abLerp.x,e.abLerp.y,e.bcLerp.x,e.bcLerp.y)})),this.p.pop()}},{key:"showCurveDots",value:function(t,e){var n=this;this.p.push(),this.p.stroke(255,e),t.forEach((function(t){n.p.circle(t.combinedLerp.x,t.combinedLerp.y,10)})),this.p.pop()}},{key:"createCurve",value:function(){for(var t=[],e=1/this.iterations,n=0;n<=this.iterations;n++){var i=n*e,s=new m(this.pointA.getPos(),this.pointB.getPos(),this.pointC.getPos(),i);t[n]=s}return t}}]),t}();g.proptypes={p5Instance:b.a,pointA:Object(v.instanceOf)(y),pointB:Object(v.instanceOf)(y),pointC:Object(v.instanceOf)(y)};var k=g,w=function t(e,n,i){Object(u.a)(this,t),this.a=e,this.b=n,this.lerpPoint=b.a.Vector.lerp(e.combinedLerp,n.combinedLerp,i)};w.proptypes={a:Object(v.instanceOf)(m),b:Object(v.instanceOf)(m),lerpPerc:v.number};var x=w,C=function(){function t(e,n,i,s,o){Object(u.a)(this,t),this.p=e,this.pointA=n,this.pointB=i,this.pointC=s,this.pointD=o,this.curveA=new k(e,n,i,s),this.curveB=new k(e,i,s,o)}return Object(l.a)(t,[{key:"show",value:function(){var t=this.createCurve();this.showQuadCurves(),this.showLines(t),this.showDots(t)}},{key:"createCurve",value:function(){for(var t=this.curveA.createCurve(),e=this.curveB.createCurve(),n=t.length,i=1/n,s=[],o=0;o<n;o++){var r=new x(t[o],e[o],o*i);s[o]=r}return s}},{key:"showDots",value:function(t){var e=this;this.p.push(),this.p.stroke(255),t.forEach((function(t){e.p.circle(t.lerpPoint.x,t.lerpPoint.y,10)})),this.p.pop()}},{key:"showLines",value:function(t){var e=this;this.p.push();this.p.colorMode(this.p.HSL,360),this.p.strokeWeight(2),t.forEach((function(n,i){var s=i/t.length*360,o=e.p.color(s,250,200);e.p.stroke(o),e.p.line(n.a.combinedLerp.x,n.a.combinedLerp.y,n.b.combinedLerp.x,n.b.combinedLerp.y)})),this.p.pop()}},{key:"showQuadCurves",value:function(){this.curveA.show(!0,!1,.1),this.curveB.show(!0,!1,.1)}}]),t}();C.proptypes={p5Instance:b.a,pointA:Object(v.instanceOf)(y),pointB:Object(v.instanceOf)(y),pointC:Object(v.instanceOf)(y),pointD:Object(v.instanceOf)(y)};var L=C,R=n(29),I=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).sketch=function(t){var e,n,i,s,o,r=10,c=10;t.setup=function(){var r=t.createCanvas(h(),a());r.parent("canvas"),r.style("display","block"),e=new y(t,0,a()/2,50),n=new y(t,h()/3,a(),50),i=new y(t,2*h()/3,0,50),s=new y(t,h(),a()/2,50),o=new L(t,e,n,i,s)},t.draw=function(){t.background(51),e.show(),n.show(),i.show(),s.show(),o.show(),n.y>a()&&(r=-10),n.y<0&&(r=10),n.y+=r,i.y>a()&&(c=-10),i.y<0&&(c=10),i.y+=c,t.noLoop()},t.windowResized=function(){t.resizeCanvas(h(),a())};var a=function(){return window.innerHeight},h=function(){return window.innerWidth}},i.myRef=s.a.createRef(),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new b.a(this.sketch,this.myRef.current)}},{key:"render",value:function(){return Object(a.jsx)("div",{ref:this.myRef,children:Object(a.jsx)(R.a,{id:"canvas"})})}}]),n}(s.a.Component),S=function(t,e){return(t%e+e)%e},P=function(){function t(e,n,i,s){Object(u.a)(this,t),this.p=e,this.position=this.p.createVector(n,i),this.heading=s,this.walkSpeed=.05,this.turnSpeed=.075}return Object(l.a)(t,[{key:"turnRight",value:function(){this.heading-=this.turnSpeed,this.heading=S(this.heading,this.p.TWO_PI)}},{key:"turnLeft",value:function(){this.heading+=this.turnSpeed,this.heading=S(this.heading,this.p.TWO_PI)}},{key:"moveForward",value:function(){var t=b.a.Vector.fromAngle(-this.heading);t.mult(this.walkSpeed),this.position.add(t)}},{key:"moveBackward",value:function(){var t=b.a.Vector.fromAngle(-this.heading);t.mult(-this.walkSpeed),this.position.add(t)}},{key:"moveLeft",value:function(){var t=b.a.Vector.fromAngle(-(this.heading+this.p.HALF_PI));t.mult(this.walkSpeed),this.position.add(t)}},{key:"moveRight",value:function(t){var e=b.a.Vector.fromAngle(-(this.heading-this.p.HALF_PI));e.mult(this.walkSpeed),this.position.add(e)}},{key:"getPixelXY",value:function(t){var e=this.p.round(this.position.x*t),n=this.p.round(this.position.y*t);return this.p.createVector(e,n)}},{key:"show",value:function(t){var e=this.getPixelXY(t);this.p.push(),this.p.stroke(0),this.p.fill(255),this.p.translate(e.x,e.y),this.p.rotate(-(this.heading-this.p.HALF_PI)),this.p.triangle(-10,10,0,-10,10,10),this.p.pop()}}]),t}();P.propTypes={p5Instance:b.a,x:v.number,y:v.number,heading:v.number};var F=P,_=function(){function t(e,n){Object(u.a)(this,t),this.p=e,this.player=n,this.blockSize=64,this.blocks=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,1,0,0,0,1],[1,1,1,1,1,1,1]]}return Object(l.a)(t,[{key:"getWidth",value:function(){return this.blocks[0].length*this.blockSize}},{key:"getHeight",value:function(){return this.blocks.length*this.blockSize}},{key:"isCoordWall",value:function(t,e){return t=this.p.floor(t),e=this.p.floor(e),t<this.blocks[0].length&&t>=0&&e<this.blocks.length&&e>=0&&1===this.blocks[e][t]}},{key:"show",value:function(t){var e=this;this.p.push();for(var n=0;n<this.blocks.length;n++)for(var i=0;i<this.blocks[0].length;i++){var s=n*this.blockSize,o=i*this.blockSize;0===this.blocks[n][i]?this.p.fill(150):this.p.fill(51,204,255),this.p.rect(o,s,this.blockSize,this.blockSize)}this.player.show(this.blockSize),t.forEach((function(t){if(t.didCollide){var n=b.a.Vector.fromAngle(-t.angle),i=b.a.Vector.mult(n,t.distance),s=b.a.Vector.add(t.playerPosition,i).mult(e.blockSize);e.p.fill(0,51,204),e.p.noStroke(),e.p.circle(s.x,s.y,10)}})),this.p.pop()}}]),t}();_.propTypes={p5Instance:Object(v.instanceOf)(b.a),player:Object(v.instanceOf)(F)};var z=_,A=n(47),W=function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;Object(u.a)(this,t),this.didCollide=e,this.playerPosition=n,this.angle=s,this.distance=o,this.distanceWithoutFishEye=o*Object(A.a)(i-s)};W.propTypes={didCollide:v.bool,playerPosition:Object(v.instanceOf)(b.a.Vector),playerHeading:Object(v.instanceOf)(b.a.Vector),distance:v.number};var V=W,E=function(){function t(e,n,i,s){Object(u.a)(this,t),this.p=e,this.width=n,this.height=i,this.distanceToPlane=n/2/this.p.tan(s/2),this.fov=s,this.angleBetweenRays=s/n}return Object(l.a)(t,[{key:"showProjection",value:function(t,e){this.p.push(),this.p.noStroke(),this.p.fill(204,255,255),this.p.rect(0,0,this.width,this.height/2),this.p.fill(150),this.p.rect(0,this.height/2,this.width,this.height/2),this.p.rectMode(this.p.CENTER);for(var n=0;n<t.length;n++)this.__drawWallInColumn(t[n],e.blockSize,n);this.p.pop()}},{key:"__drawWallInColumn",value:function(t,e,n){if(t.didCollide){this.p.push();var i=e/this.p.round(t.distanceWithoutFishEye*e)*this.distanceToPlane,s=this.p.map(t.distanceWithoutFishEye,0,6,100,0,!0),o=this.p.color("hsb(195, 100%, ".concat(s,"%)"));this.p.stroke(o),this.p.fill(o),this.p.rect(n,this.height/2,1,i),this.p.pop()}}},{key:"findRayCollisions",value:function(t,e){for(var n=t.heading+this.fov/2,i=[],s=0;s<this.width;s++){var o=S(n,this.p.TWO_PI),r=this.__distanceToWall(t,o,e);i.push(r),n-=this.angleBetweenRays}return i}},{key:"__distanceToWall",value:function(t,e,n){for(var i=t.position,s=b.a.Vector.fromAngle(e,1),o=this.p.sqrt(1+this.p.sq(s.y/s.x)),r=this.p.sqrt(1+this.p.sq(s.x/s.y)),c=this.__getXYDirectionMultipliers(e),a=c.x,h=c.y,u=this.__getXInitOffset(i.x,a),l=this.__getYInitOffset(i.y,h),p=i.x,f=i.y,d=u*o,v=l*r,j=this.p.min(d,v),y=this.p.sqrt(this.p.sq(n.getWidth())+this.p.sq(n.getHeight()));this.p.min(d,v)<=y;){if(n.isCoordWall(p,f))return new V(!0,i,t.heading,e,j);d<v?(p+=a,j=d,d+=o):(f+=h,j=v,v+=r)}return new V}},{key:"__getXYDirectionMultipliers",value:function(t){var e={x:1,y:1};return t<this.p.PI&&(e.y=-1),t>=this.p.HALF_PI&&t<this.p.PI+this.p.HALF_PI&&(e.x=-1),e}},{key:"__getXInitOffset",value:function(t,e){return-1===e?t%1:1-t%1}},{key:"__getYInitOffset",value:function(t,e){return-1===e?t%1:1-t%1}}]),t}();E.propTypes={p5Instance:Object(v.instanceOf)(b.a),width:v.number,height:v.number,fov:v.number};var T=E,D=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).sketch=function(t){var e,n,i;t.setup=function(){t.frameRate(30),t.angleMode(t.RADIANS),n=new F(t,1.5,1.5,0),e=new z(t,n),i=new T(t,e.getWidth(),e.getHeight(),t.radians(60));var s=t.createCanvas(2*e.getWidth(),e.getHeight());s.style("display","block"),s.parent("canvas")},t.draw=function(){s(n);var o=i.findRayCollisions(n,e);t.background(0),e.show(o),t.translate(e.getWidth(),0),i.showProjection(o,e)};var s=function(e){t.keyIsDown(t.LEFT_ARROW)?e.turnLeft():t.keyIsDown(t.RIGHT_ARROW)&&e.turnRight(),t.keyIsDown(87)&&e.moveForward(),t.keyIsDown(65)&&e.moveLeft(),t.keyIsDown(83)&&e.moveBackward(),t.keyIsDown(68)&&e.moveRight()};t.windowResized=function(){t.resizeCanvas(window.innerWidth,window.innerHeight)}},i.myRef=s.a.createRef(),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new b.a(this.sketch,this.myRef.current)}},{key:"render",value:function(){return Object(a.jsxs)("div",{ref:this.myRef,children:[Object(a.jsx)("div",{id:"canvas"}),Object(a.jsx)("p",{children:"Controls:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"move with w, a, s, d"}),Object(a.jsx)("li",{children:"turn with left and right arrow keys"})]})]})}}]),n}(s.a.Component),H=Object(i.lazy)((function(){return n.e(14).then(n.bind(null,75))})),B=Object(i.lazy)((function(){return n.e(15).then(n.bind(null,76))})),q=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,85))})),M=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,86))})),X=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,83))})),Y=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,77))})),N=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,84))})),G=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,78))})),J=Object(i.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,80))})),Q=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,79))})),K=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,81))})),U=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,82))})),Z=Object(a.jsx)(o.a,{children:Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)("div",{children:"Page is Loading..."}),children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:c.g,component:J}),Object(a.jsx)(r.a,{exact:!0,path:c.b,component:I}),Object(a.jsx)(r.a,{exact:!0,path:c.m,component:D}),Object(a.jsx)(r.a,{exact:!0,path:c.d,component:U}),Object(a.jsx)(r.a,{exact:!0,path:c.l,component:H}),Object(a.jsx)(r.a,{exact:!0,path:c.n,component:B}),Object(a.jsx)(r.a,{exact:!0,path:c.e,component:q}),Object(a.jsx)(r.a,{exact:!0,path:c.h,component:M}),Object(a.jsx)(r.a,{exact:!0,path:c.i,component:X}),Object(a.jsx)(r.a,{exact:!0,path:c.j,component:Y}),Object(a.jsx)(r.a,{exact:!0,path:c.k,component:N}),Object(a.jsx)(r.a,{exact:!0,path:c.c,component:G}),Object(a.jsx)(r.a,{exact:!0,path:c.a,component:Q}),Object(a.jsx)(r.a,{exact:!0,path:c.f,component:K}),Object(a.jsx)(r.a,{component:h})]})})});var $=function(){return Object(a.jsx)(s.a.StrictMode,{children:Z})},tt=n(23),et=document.getElementById("root");et.hasChildNodes()?Object(tt.hydrate)(Object(a.jsx)($,{}),et):Object(tt.render)(Object(a.jsx)($,{}),et)},9:function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return b})),n.d(e,"n",(function(){return v}));var i="/",s="/bezierCurve",o="/chaosGame",r="/cuneiformNumberConverter",c="/beautifulTrigonometry",a="/flockingSimulation",h="/hexes",u="/lissajousCurveTable",l="/matrixRain",p="/maurerRose",f="/mazeGenerator",d="/moduloTimesTable",b="/RayCastingFps",v="/snowflakeGenerator"}},[[44,1,2]]]);
//# sourceMappingURL=main.6244eb88.chunk.js.map