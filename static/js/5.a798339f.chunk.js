(this["webpackJsonpp5-churmd"]=this["webpackJsonpp5-churmd"]||[]).push([[5],{60:function(e,t,o){},79:function(e,t,o){"use strict";o.r(t);var r=o(5),n=o(8),i=o(18),s=o(17),c=o(0),a=o.n(c),u=o(4),l=o.n(u),p=(o(60),o(3)),h=function(e){Object(i.a)(o,e);var t=Object(s.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).sketch=function(e){var t=0,o=1,r=!1;e.setup=function(){e.createCanvas(h(),p()).style("display","block"),n()};var n=function(){var t=e.createButton("Show Trigonometry");t.parent("controls"),t.mousePressed((function(){(r=!r)?(t.html("Hide Trigonometry"),o=2):(t.html("Show Trigonometry"),e.redraw())}))};e.draw=function(){e.background(200);var t=h(),o=p(),r=.9*Math.min(t,o),n=r/2;e.translate(t/2,o/2),i(n),s(r),c(n),a(n),u(n),l()};var i=function(t){for(var r=e.PI/o,n=0;n<o;n++)e.push(),e.rotate(n*r),e.stroke(0),e.strokeWeight(1),e.line(-t,0,t,0),e.pop()},s=function(t){e.push(),e.stroke(0),e.strokeWeight(5),e.noFill(),e.ellipse(0,0,t,t),e.pop()},c=function(o){if(r){e.push(),e.colorMode(e.HSL,360);var n=e.color(0,200,200),i=e.color(180,200,200);e.push(),e.noFill(),e.strokeWeight(5);var s=.9*o;e.stroke(n),e.arc(0,0,s,s,t,0);var c=1.1*o;e.stroke(i),e.arc(0,0,c,c,t,0+e.HALF_PI),e.pop(),e.push();var a=e.cos(t)*o,u=e.sin(t)*o,l=e.cos(t)*o,p=e.sin(t)*o;e.stroke(0),e.strokeWeight(2),e.line(a,u,l,0),e.line(a,u,0,p),e.line(a,u,0,0),e.pop(),e.pop()}},a=function(r){for(var n=e.PI/o,i=-e.PI/o,s=.05*r,c=0;c<o;c++){e.push(),e.rotate(c*n);var a=t+c*i,u=e.cos(a)*r;e.colorMode(e.HSL,360);var l=360/o*c,p=e.color(l,250,200);e.fill(p),e.stroke(0),e.strokeWeight(2),e.ellipse(u,0,s,s),e.pop()}},u=function(o){var r=e.cos(t)*o,n=e.sin(t)*o,i=.05*o;e.push(),e.stroke(0),e.strokeWeight(2),e.colorMode(e.HSL,360);var s=e.color(0,0,360);e.fill(s),e.ellipse(r,n,i,i),e.pop()},l=function(){(t-=.01)<-e.TWO_PI&&(t+=e.TWO_PI,r||(o+=1)>32&&(o=1))};e.windowResized=function(){e.resizeCanvas(h(),p())};var p=function(){return.95*window.innerHeight},h=function(){return window.innerWidth}},n.myRef=a.a.createRef(),n}return Object(n.a)(o,[{key:"componentDidMount",value:function(){this.myP5=new l.a(this.sketch,this.myRef.current)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"beautiful-trig-sketch",children:[Object(p.jsx)("div",{ref:this.myRef}),Object(p.jsx)("div",{id:"controls"})]})}}]),o}(a.a.Component);t.default=h}}]);
//# sourceMappingURL=5.a798339f.chunk.js.map