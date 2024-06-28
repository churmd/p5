"use strict";(self.webpackChunkp5_churmd=self.webpackChunkp5_churmd||[]).push([[899],{899:(t,s,e)=>{e.r(s),e.d(s,{default:()=>g});var i=e(5043),h=e(6454),n=e.n(h);class o{constructor(t,s,e,i){this.p=t,this.x=s,this.y=e,this.maxSideLength=i,this.sideLength=i,this.growing=!1,this.growthRate=0,this.fillColour=t.color(255,255,255),this.outlineColour=t.color(0,0,0)}setSideLength(t){this.sideLength=t}grow(){this.growing=!0}shrink(){this.growing=!1}setColour(t,s){this.fillColour=t,this.outlineColour=s}update(){this.growthRate=.1,this.sideLength>=this.maxSideLength&&(this.growing=!1),this.sideLength<=1&&(this.growing=!0),this.growing?(this.sideLength+=this.growthRate,this.sideLength>this.maxSideLength&&(this.sideLength=this.maxSideLength)):(this.sideLength-=this.growthRate,this.sideLength<1&&(this.sideLength=1))}show(){let t=n().Vector.fromAngle(this.p.radians(-90),this.sideLength);t.add(this.x,this.y);let s=n().Vector.fromAngle(this.p.radians(-30),this.sideLength);s.add(this.x,this.y);let e=n().Vector.fromAngle(this.p.radians(30),this.sideLength);e.add(this.x,this.y);let i=n().Vector.fromAngle(this.p.radians(90),this.sideLength);i.add(this.x,this.y);let h=n().Vector.fromAngle(this.p.radians(150),this.sideLength);h.add(this.x,this.y);let o=n().Vector.fromAngle(this.p.radians(210),this.sideLength);o.add(this.x,this.y),this.p.push(),this.p.fill(this.fillColour),this.p.strokeWeight(1),this.p.stroke(this.outlineColour),this.p.beginShape(),this.p.vertex(t.x,t.y),this.p.vertex(s.x,s.y),this.p.vertex(e.x,e.y),this.p.vertex(i.x,i.y),this.p.vertex(h.x,h.y),this.p.vertex(o.x,o.y),this.p.endShape(this.p.CLOSE),this.p.pop()}}class r{constructor(t,s,e,i){this.p=t,this.canvasWidth=s,this.canvasHeight=e,this.hexSideLength=i;const h=t.sin(60)*i*2,n=2*i*.75,o=s/2+h/2,r=e/2+n/2;this.hexes=this.__createHexes(h,n,o,r)}__createHexes(t,s,e,i){let h=[],n=[],r=[];for(r.push({x:0,y:0});r.length>0;){let h=r.pop();const o=t=>{let s=Math.abs(t.x-h.x),e=Math.abs(t.y-h.y);return s<2&&e<2};if(n.some(o))continue;if(h.x>e||h.x<-e||h.y>i||h.y<-i)continue;n.push(h);let a=this.__getSurroundingHexes(h,t,s);r=r.concat(a)}return n.forEach((t=>{let s=new o(this.p,t.x,t.y,this.hexSideLength);h.push(s)})),h}__getSurroundingHexes(t,s,e){let i=[];return i.push({x:t.x-s,y:t.y}),i.push({x:t.x+s,y:t.y}),i.push({x:t.x-s/2,y:t.y+e}),i.push({x:t.x+s/2,y:t.y+e}),i.push({x:t.x-s/2,y:t.y-e}),i.push({x:t.x+s/2,y:t.y-e}),i}update(){this.hexes.forEach((t=>{t.update()}))}show(){this.p.push(),this.p.translate(this.canvasWidth/2,this.canvasHeight/2),this.hexes.forEach((t=>{t.show()})),this.p.pop()}}const a=60/255*1e3;class p extends r{constructor(t,s,e,i){super(t,s,e,i),this.lastHueIncrementTime=Date.now(),this.setCenterOutPattern()}setCenterOutPattern(){this.p.push(),this.p.colorMode(this.p.HSL,255);const t=this.p.dist(this.canvasWidth/2,this.canvasHeight/2,0,0);this.hexes.forEach((s=>{const e=this.p.dist(s.x,s.y,0,0),i=this.p.map(e,0,t,this.hexSideLength,0);s.setSideLength(i),s.grow();const h=this.p.map(e,0,t,180,50),n=this.p.color(0,150,h),o=this.p.color(this.p.hue(n),this.p.saturation(n),this.p.lightness(n)/2);s.setColour(n,o)})),this.p.pop()}update(){super.update();const t=Date.now();t-this.lastHueIncrementTime<a||(this.lastHueIncrementTime=t,this.p.push(),this.p.colorMode(this.p.HSL,255),this.hexes.forEach((t=>{const s=this.p.color(this.p.hue(t.fillColour)+1,this.p.saturation(t.fillColour),this.p.lightness(t.fillColour)),e=this.p.color(this.p.hue(t.outlineColour)+1,this.p.saturation(t.outlineColour),this.p.lightness(t.outlineColour));t.setColour(s,e)})),this.p.pop())}}class l extends r{constructor(t,s,e,i){super(t,s,e,i),this.setRandomPattern()}setRandomPattern(){this.p.push(),this.p.colorMode(this.p.HSL,255),this.hexes.forEach((t=>{const s=256,e=this.p.random(0,s),i=this.p.random(51.2,179.2),h=this.p.random(51.2,179.2),n=this.p.color(e,i,h),o=this.p.color(this.p.hue(n),this.p.saturation(n),this.p.lightness(n)/2);t.setColour(n,o);const r=this.p.random(0,this.hexSideLength);t.setSideLength(r);this.p.random([!0,!1])?t.grow():t.shrink()})),this.p.pop()}}var d=e(6664),c=e(579);class u extends i.Component{constructor(t){super(t),this.sketch=t=>{let s,e,i;const h="Random",n="CenterOutPattern",o=()=>window.innerHeight,a=()=>window.innerWidth,d=()=>.05*Math.min(o(),a()),c=()=>{switch(e){case h:return new l(t,a(),o(),d());case n:return new p(t,a(),o(),d());default:return new r(t,a(),o(),d())}};t.setup=()=>{const r=t.createCanvas(a(),o());r.parent("canvas"),r.style("display","block"),i=t.createRadio(),i.option(h),i.option(n),i.parent("controls"),i.style("margin","auto"),i.style("text-align","center"),i.selected(h),e=i.value(),t.angleMode(t.DEGREES),s=c()},t.draw=()=>{t.background(51),i.value()!==e&&(e=i.value(),s=c()),s.update(),s.show()},t.windowResized=()=>{t.resizeCanvas(a(),o()),s=c()}},this.myRef=i.createRef()}componentDidMount(){this.myP5=new(n())(this.sketch,this.myRef.current)}componentWillUnmount(){document.getElementById("canvas").replaceChildren(),document.getElementById("controls").replaceChildren()}render(){return(0,c.jsxs)("div",{ref:this.myRef,children:[(0,c.jsx)(d.A,{id:"canvas"}),(0,c.jsx)("div",{id:"controls"})]})}}const g=u}}]);
//# sourceMappingURL=899.c1e99f45.chunk.js.map