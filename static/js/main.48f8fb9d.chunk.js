(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(13),a(14),a(1)),l=a(2),u=a(3),o=a(4),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={count:0},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e.handleDecrement=function(){var t=e.state.count-1;e.setState({count:t<0?0:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.habit,t=e.name,a=e.count;return c.a.createElement("li",{className:"habit"},c.a.createElement("span",{className:"habit-name"},t),c.a.createElement("span",{className:"habit-count"},a),c.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},c.a.createElement("i",{className:"fas fa-plus-square"})),c.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},c.a.createElement("i",{className:"fas fa-minus-square"})),c.a.createElement("button",{className:"habit-button habit-delete"},c.a.createElement("i",{className:"fas fa-trash"})))}}]),a}(n.Component),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("ul",null,this.state.habits.map((function(e){return c.a.createElement(m,{key:e.id,habit:e})})))}}]),a}(n.Component);var b=function(){return c.a.createElement(h,null)};a(15);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.48f8fb9d.chunk.js.map