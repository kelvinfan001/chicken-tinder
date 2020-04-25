(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){e.exports=n(47)},33:function(e,t,n){},34:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),i=(n(33),n(13)),l=n(6),u=n(27),m=(n(34),n(24)),s=n.n(m),h=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var p=function(){var e=h,t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"React Tinder Card"),o.a.createElement("div",{className:"cardContainer"},e.map((function(e){return o.a.createElement(s.a,{className:"swipe",key:e.name,onSwipe:function(t){return n=t,a=e.name,console.log("removing: "+a),void c(n);var n,a},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},preventSwipe:["up","down"]},o.a.createElement("div",{style:{backgroundImage:"url("+e.url+")"},className:"card"},o.a.createElement("h3",null,e.name)))}))),r?o.a.createElement("h2",{className:"infoText"},"You swiped ",r):o.a.createElement("h2",{className:"infoText"},"No direction swiped"))},d=n(8),g=n(9),f=n(11),v=n(10),E=n(12),b=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={roomNumber:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.submit=a.submit.bind(Object(E.a)(a)),a}return Object(g.a)(n,[{key:"handleChange",value:function(e){this.setState({roomNumber:e.target.value})}},{key:"submit",value:function(e){alert("You submitted this room number:"+this.state.roomNumber),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submit},o.a.createElement("input",{className:"pop-up",type:"text",value:this.state.roomNumber,placeholder:"Room Number",onChange:this.handleChange,required:!0,maxLength:"4",pattern:"[0-9]*"}),o.a.createElement("button",{onTouchStart:"",style:{backgroundColor:"rgb(95, 204, 95)"}},"JOIN"))}}]),n}(o.a.Component),j=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={formShowing:!1},a}return Object(g.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-page"},o.a.createElement("img",{src:"logo.png",className:"logo",alt:"Chicken Tinder Icon"}),o.a.createElement("div",null,this.state.formShowing?o.a.createElement(b,null):o.a.createElement("div",null,o.a.createElement("button",{onTouchStart:"",onClick:function(t){e.props.history.push("/create")}},"CREATE ROOM"),o.a.createElement("button",{onTouchStart:"",onClick:function(){return e.setState({formShowing:!0})}},"JOIN ROOM"))))}}]),n}(o.a.Component),C=n(16),y=n(20);function O(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Page Not Found"),o.a.createElement(i.b,{to:"/"},o.a.createElement(C.a,{icon:y.a,size:"2x"})))}function k(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Room Not Found"),o.a.createElement("p",null,"Please make sure you've entered a valid room ID in the URL   "),o.a.createElement(i.b,{to:"/"},o.a.createElement(C.a,{icon:y.a,size:"2x"})))}var S=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={currentCity:"Retrieving Location...",longitude:0,latitude:0},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDj9SUs2BLoGDf-ctUrDX1Mj11XBpdAzks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(200===e.status)return e.json()})).then((function(t){var n=t.location.lng,a=t.location.lat,o={longitude:n,latitude:a,currentCity:"Coordinates Retrieved..."};return e.setState(o),fetch("http://app-chicken-tinder.apps.us-east-2.starter.openshift-online.com/api/location?longitude="+n+"&latitude="+a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}})})).then((function(t){200===t.status?t.json().then((function(t){var n={currentCity:t.long_name};e.setState(n)})):e.setState({currentCity:"Cannot get location"})})).catch((function(t){e.setState({currentCity:"Cannot get location"}),console.log(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Create Room "),o.a.createElement("p",null,this.state.currentCity),o.a.createElement("button",{onTouchStart:""},"READY"))}}]),n}(o.a.Component);n(46);var w=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/rooms/:id",component:p}),o.a.createElement(l.a,{exact:!0,path:"/",component:j}),o.a.createElement(l.a,{exact:!0,path:"/create",component:S}),o.a.createElement(l.a,{exact:!0,path:"/rooms",component:k}),o.a.createElement(l.a,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.82a5e924.chunk.js.map