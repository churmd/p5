"use strict";(self.webpackChunkp5_churmd=self.webpackChunkp5_churmd||[]).push([[835],{2835:function(t,i,e){e.r(i),e.d(i,{default:function(){return f}});var n=e(5671),s=e(3144),h=e(136),r=e(1129),a=e(2791),o=e(2024),l=e.n(o),u=function(){function t(i,e,s,h,r,a){(0,n.Z)(this,t),this.p=i,this.x=e,this.y=s,this.d=h,this.index=r,this.vertical=a,this.angle=-this.p.PI/2,this.updateLine()}return(0,s.Z)(t,[{key:"show",value:function(){this.p.push(),this.p.strokeWeight(1),this.p.stroke(255),this.p.noFill(),this.p.ellipse(this.x,this.y,this.d,this.d),this.p.strokeWeight(8),this.p.point(this.lineStartX,this.lineStartY),this.p.strokeWeight(1),this.p.stroke(255,50),this.p.line(this.lineStartX,this.lineStartY,this.lineEndX,this.lineEndY),this.p.pop()}},{key:"updateLine",value:function(){var t=this.d/2,i=t*this.p.cos(this.angle),e=t*this.p.sin(this.angle);this.lineStartX=this.x+i,this.lineStartY=this.y+e,this.vertical?(this.lineEndX=this.lineStartX,this.lineEndY=this.p.height):(this.lineEndX=this.p.width,this.lineEndY=this.lineStartY)}},{key:"updateAngle",value:function(){this.angle+=.01*this.index,this.updateLine()}}]),t}(),c=e(7405),p=e(184),d=function(t){(0,h.Z)(e,t);var i=(0,r.Z)(e);function e(t){var s;return(0,n.Z)(this,e),(s=i.call(this,t)).sketch=function(t){var i,e,n,s,h;t.setup=function(){var r=Math.min(t.windowWidth,t.windowHeight),a=t.createCanvas(r,r);a.style("display","block"),a.style("margin","auto"),t.frameRate(30),8,e=r/(i=9),n=[],s=[],h=[[]];for(var o=1;o<i;o++){var l=new u(t,e*(o+.5),.5*e,.95*e,o,!0);n.push(l)}for(var c=1;c<i;c++){var p=new u(t,.5*e,e*(c+.5),.95*e,c,!1);s.push(p)}for(var d=1;d<i;d++){h[d]=[];for(var f=1;f<i;f++)h[d][f]=new Set}},t.draw=function(){t.clear(),t.background(51),n.forEach((function(t){s.forEach((function(i){var e=[t.lineStartX,t.lineStartY],n=[t.lineEndX,t.lineEndY],s=[i.lineStartX,i.lineStartY],r=[i.lineEndX,i.lineEndY],a=(0,c.wfr)(e,n,s,r);h[t.index][i.index].add(a)}))})),n.forEach((function(t){t.show(),t.updateAngle()})),s.forEach((function(t){t.show(),t.updateAngle()}));for(var e=1;e<i;e++)for(var r=1;r<i;r++)t.push(),t.stroke(255),t.strokeWeight(1),t.noFill(),t.beginShape(),h[e][r].forEach((function(i){t.vertex(i[0],i[1])})),t.endShape(),t.pop()},t.windowResized=function(){t.setup()}},s.myRef=a.createRef(),s}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){this.myP5=new(l())(this.sketch,this.myRef.current)}},{key:"render",value:function(){return(0,p.jsx)("div",{className:"lissajous-curve-table",ref:this.myRef})}}]),e}(a.Component),f=d}}]);
//# sourceMappingURL=835.55615363.chunk.js.map