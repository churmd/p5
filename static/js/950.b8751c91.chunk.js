"use strict";(self.webpackChunkp5_churmd=self.webpackChunkp5_churmd||[]).push([[950],{9950:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var i=n(5671),r=n(3144),o=n(136),c=n(1129),a=n(2791),s=n(2024),u=n.n(s),d=n(1429),l="\ud809\udc4a",f="\ud809\udc15",h="\ud809\udc16",g="\ud809\udc17",m="\ud809\udc18",v="\ud809\udc19",_="\ud809\udc1a",k="\ud809\udc1b",y="\ud809\udc1c",C="\ud809\udc1d",p="\ud809\udc1e",w="\ud809\udc1f",x="\ud809\udc20",F="\ud809\udc21",b="\ud809\udc22",S=function(){function t(e){(0,i.Z)(this,t),this.number=e,this.base60Format=this.__toBase60Array(this.number).reverse()}return(0,r.Z)(t,[{key:"add",value:function(t){this.number+=t,this.base60Format=this.__toBase60Array(this.number).reverse()}},{key:"__toBase60Array",value:function(t){if(t<60)return[t];var e=Math.floor(t/60);return[t%60].concat(this.__toBase60Array(e))}},{key:"toString",value:function(){return this.base60Format.toString()}},{key:"toUnicodeString",value:function(){var t=this;return this.base60Format.map((function(e){return t.__getUnicodeForSection(e)})).join(" ")}},{key:"__getUnicodeForSection",value:function(t){return t<10?this.__getUnicodeForDigit(t):t<20?p+this.__getUnicodeForDigit(t-10):t<30?w+this.__getUnicodeForDigit(t-20):t<40?x+this.__getUnicodeForDigit(t-30):t<50?F+this.__getUnicodeForDigit(t-40):t<60?b+this.__getUnicodeForDigit(t-50):""}},{key:"__getUnicodeForDigit",value:function(t){switch(t){case 0:return l;case 1:return f;case 2:return h;case 3:return g;case 4:return m;case 5:return v;case 6:return _;case 7:return k;case 8:return y;case 9:return C;default:return""}}}]),t}(),U=n(8071),R=function(){return window.innerHeight},D=function(){return window.innerWidth},E=function(t,e,n){return Math.min(e,n)/t},j=function(t){var e,n;t.preload=function(){e=t.loadFont(U)},t.setup=function(){var e=t.createCanvas(D(),R());e.parent("canvas"),e.style("display","block"),t.frameRate(1),n=new S(0)},t.draw=function(){t.background(51);var i=n.toUnicodeString(),r=E(i.length,.75*D(),.75*R());t.textSize(r),t.textAlign(t.CENTER,t.CENTER),t.fill(255),t.textFont(e),t.text(i,D()/2,R()/2),n.add(1)},t.windowResized=function(){t.resizeCanvas(D(),R())}},Z=function(t){var e;t.preload=function(){e=t.loadFont(U)},t.setup=function(){var e=t.createCanvas(D(),R());e.parent("canvas"),e.style("display","block"),t.frameRate(1)},t.draw=function(){t.background(51);var n=new Date,i=new S(n.getHours()).toUnicodeString(),r=new S(n.getMinutes()).toUnicodeString(),o=new S(n.getSeconds()).toUnicodeString(),c=.1*D()/4,a=.9*D()/3,s=Math.min(E(i.length,a,R()),E(r.length,a,R()),E(o.length,a,R()));t.fill(255),t.textSize(s),t.textAlign(t.CENTER,t.CENTER),t.textFont("sans-serif"),t.text(":",a+c,R()/2),t.text(":",2*a+3*c,R()/2),t.textFont(e),t.text(i,.5*a,R()/2),t.text(r,1.5*a+2*c,R()/2),t.text(o,2.5*a+4*c,R()/2)},t.windowResized=function(){t.resizeCanvas(D(),R())}},z=n(184),A=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).setCounterSketch=function(){void 0!==r.myP5&&r.myP5.remove(),r.myP5=new(u())(j,r.myRef.current)},r.setClockSketch=function(){void 0!==r.myP5&&r.myP5.remove(),r.myP5=new(u())(Z,r.myRef.current)},r.myRef=a.createRef(),r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.setClockSketch()}},{key:"componentWillUnmount",value:function(){document.getElementById("canvas").replaceChildren()}},{key:"render",value:function(){return(0,z.jsxs)("div",{ref:this.myRef,children:[(0,z.jsx)("div",{id:"p5_loading",className:"loadingclass",children:"Loading custom font ..."}),(0,z.jsx)(d.Z,{id:"canvas"}),(0,z.jsxs)("div",{id:"controls",children:[(0,z.jsx)("button",{onClick:this.setClockSketch,children:"Clock"}),(0,z.jsx)("button",{onClick:this.setCounterSketch,children:"Counter"})]})]})}}]),n}(a.Component),B=A},8071:function(t,e,n){t.exports=n.p+"static/media/CuneiformOB.30fad82f375d6831bc6e.ttf"}}]);
//# sourceMappingURL=950.b8751c91.chunk.js.map