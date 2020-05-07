(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(t,e){},124:function(t,e,n){},126:function(t,e,n){},127:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(24),r=n.n(i),s=(n(70),n(4)),c=n(5),l=n(7),u=n(6),p=n(19),h=n(14),d=n(3),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={roomNumber:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.goToRoom=a.goToRoom.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(t){this.setState({roomNumber:t.target.value})}},{key:"goToRoom",value:function(){var t="/rooms/"+this.state.roomNumber;this.props.history.push(t)}},{key:"render",value:function(){var t=this;return o.a.createElement("form",{onSubmit:this.submit,ref:function(e){return t.setWrapperRef=e}},o.a.createElement("input",{className:"pop-up",type:"text",value:this.state.roomNumber,placeholder:"Room Number",onChange:this.handleChange,required:!0,maxLength:"4",pattern:"[0-9]*"}),o.a.createElement("button",{onTouchStart:"",style:{backgroundColor:"rgb(95, 204, 95)"},onClick:this.goToRoom},"JOIN"))}}]),n}(o.a.Component),f=Object(h.f)(m),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={formShowing:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"main-page"},o.a.createElement("img",{src:"logo.png",className:"logo",alt:"Chicken Tinder Icon",onClick:function(){return t.setState({formShowing:!1})}}),o.a.createElement("div",null,this.state.formShowing?o.a.createElement(f,null):o.a.createElement("div",null,o.a.createElement("button",{className:"pop-up",onTouchStart:"",onClick:function(e){t.props.history.push("/create")}},"CREATE ROOM"),o.a.createElement("button",{onTouchStart:"",onClick:function(){return t.setState({formShowing:!0})}},"JOIN ROOM"))))}}]),n}(o.a.Component),b=n(15),y=n(16);function v(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Page Not Found"),o.a.createElement(p.b,{to:"/"},o.a.createElement(b.a,{icon:y.a,size:"2x"})))}function E(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Room Not Found"),o.a.createElement("p",null,"Please make sure you've entered a valid room ID in the URL   "),o.a.createElement(p.b,{to:"/"},o.a.createElement(b.a,{icon:y.a,size:"2x"})))}var w=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={active:1},a}return Object(c.a)(n,[{key:"_handleClick",value:function(t){this.setState({active:t}),(0,this.props.updateRadius)(t)}},{key:"render",value:function(){var t={width:"27%",display:"inline-block",fontSize:"small",backgroundColor:"#b6b6b6"},e={width:"27%",display:"inline-block",fontSize:"small",fontWeight:"bolder",backgroundColor:"#858585",boxShadow:"0 0px rgba(153, 153, 153, 0.24)",transform:"translateY(1px)"};return o.a.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},o.a.createElement("button",{onTouchStart:"",onClick:this._handleClick.bind(this,1),style:1===this.state.active?e:t},"1KM"),o.a.createElement("button",{onTouchStart:"",onClick:this._handleClick.bind(this,2),style:2===this.state.active?e:t},"2KM"),o.a.createElement("button",{onTouchStart:"",onClick:this._handleClick.bind(this,5),style:5===this.state.active?e:t},"5KM"))}}]),n}(o.a.Component),S=n(60),j=n.n(S),k=n(61),O=n.n(k),C="http://app-chicken-tinder.apps.us-east-2.starter.openshift-online.com",R=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={currentCity:"Retrieving Location...",longitude:0,latitude:0,locationRetrieved:!1,radius:1,loading:!1},a.createJoinRoom=a.createJoinRoom.bind(Object(d.a)(a)),a.goToRoom=a.goToRoom.bind(Object(d.a)(a)),a.updateRadius=a.updateRadius.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"updateRadius",value:function(t){this.setState({radius:t})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDj9SUs2BLoGDf-ctUrDX1Mj11XBpdAzks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return 200===e.status?e.json():(t.setState({currentCity:"Cannot get coordinates"}),Promise.reject("Google geolocation API cannot get coordinates"))})).then((function(e){var n=e.location.lng,a=e.location.lat,o={longitude:n,latitude:a,currentCity:"Coordinates Retrieved..."};return t.setState(o),fetch(C+"/api/location?longitude="+n+"&latitude="+a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}})})).then((function(e){200===e.status?e.json().then((function(e){var n={currentCity:e.long_name,locationRetrieved:!0};t.setState(n)})):(t.setState({currentCity:"Cannot get location"}),Promise.reject("Google geocoding API cannot get a location"))})).catch((function(e){t.setState({currentCity:"Cannot get location"}),console.log(e)}))}},{key:"createJoinRoom",value:function(){var t=this,e=this.state.longitude,n=this.state.latitude,a=this.state.radius,o=this.state.currentCity;this.setState({loading:!0}),fetch(C+"/api/create-room",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({longitude:e,latitude:n,radius:a,city:o})}).then((function(e){200===e.status?e.json().then((function(e){var n="/rooms/"+e.roomNumber;t.goToRoom(n)})):404===e.status?alert("No restaurants found in your area. Try a larger radius."):(alert("Unknown error. Server may be down."),t.props.history.push("/"))})).catch((function(t){console.log(t)}))}},{key:"goToRoom",value:function(t){this.props.history.push(t)}},{key:"render",value:function(){return o.a.createElement(j.a,{active:this.state.loading,spinner:o.a.createElement(O.a,null),text:"Creating Room..."},o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Restaurants Near "),o.a.createElement("div",null,o.a.createElement(b.a,{icon:y.b,size:"xs"}),o.a.createElement("h4",{style:{display:"inline-block",margin:"6px"}},this.state.currentCity)),o.a.createElement(w,{updateRadius:this.updateRadius.bind(this)}),o.a.createElement("button",{onTouchStart:"",disabled:!this.state.locationRetrieved,onClick:this.createJoinRoom},"CREATE")))}}]),n}(o.a.Component),T=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;Object(s.a)(this,n);var o=(a=e.call(this,t)).props.match.params.roomNumber;return a.state={city:"Retrieving...",roomNumber:o,participants:[]},a.joinRoom=a.joinRoom.bind(Object(d.a)(a)),a.updateStateInfo=a.updateStateInfo.bind(Object(d.a)(a)),a.startSwiping=a.startSwiping.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.socket;this.joinRoom(this.state.roomNumber);var n=this;e.on("room info",(function(t){n.updateStateInfo(t)})),e.on("general error",(function(){n.props.history.push("/rooms")})),e.on("user disconnect",(function(t){n.updateStateInfo(t)})),e.on("room active",(function(){alert("Room "+t.state.roomNumber+" has already begun swiping!"),n.props.history.push("/")})),e.on("room started swiping",(function(){n.props.history.push("/swiping",{roomNumber:t.state.roomNumber})})),e.on("ping",(function(t){console.log("ping received from server"),e.emit("pong")}))}},{key:"updateStateInfo",value:function(t){for(var e=JSON.parse(t),n=e.participants,a=[],o=0;o<n.length;o++)a.push(n[o].socketID);this.setState({participants:a}),this.setState({city:e.city}),this.setState({radius:e.radius})}},{key:"joinRoom",value:function(t){this.props.socket.emit("room",t)}},{key:"startSwiping",value:function(){this.props.socket.emit("initiate swiping")}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Room ",this.state.roomNumber," "),o.a.createElement("div",{style:{paddingTop:"5px",paddingBottom:"5px"}},o.a.createElement("h4",null," Looking for restaurants in"),o.a.createElement(b.a,{icon:y.b,size:"xs"}),o.a.createElement("h4",{style:{display:"inline-block",margin:"2px"}},this.state.city),o.a.createElement("h4",{style:{padding:"0px"}},this.state.radius?"("+this.state.radius+"KM radius)":"")),o.a.createElement("h4",null,this.state.participants.length," user",1===this.state.participants.length?"":"s"," in this room"),o.a.createElement("button",{onTouchStart:"",onClick:this.startSwiping},"EVERYONE IS IN"))}}]),n}(o.a.Component),N=(n(91),n(62)),x=n.n(N),D=n(64),I=(n(124),n(63));var P=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.call(this,n));return a.state={classList:["card_container"]},a}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){},e.prototype.onPan=function(t){if(!1!==this.props.isSwipeEnabled&&(!1!==this.props.isLeftSwipeEnabled&&t.deltaX<=0||!1!==this.props.isRightSwipeEnabled&&t.deltaX>=0)){if(this.state.classList.push("moving"),0===t.deltaX)return;if(0===t.center.x&&0===t.center.y)return;var e=.03*t.deltaX*(t.deltaY/80);t.target.style.transform="translate("+t.deltaX+"px, "+t.deltaY+"px) rotate("+e+"deg)"}},e.prototype.onPanEnd=function(t){if(!1!==this.props.isSwipeEnabled&&(!1!==this.props.isLeftSwipeEnabled&&t.deltaX<=0||!1!==this.props.isRightSwipeEnabled&&t.deltaX>=0)){var e=this.state.classList.filter((function(t){return"moving"!==t}));this.setState({classList:e});var n=document.body.clientWidth,a=Math.abs(t.deltaX)<5;if(t.target.classList.toggle("removed",!a),a)t.target.style.transform="";else{var o=Math.max(Math.abs(t.velocityX)*n,n),i=t.deltaX>0?o:-o,r=Math.abs(t.velocityY)*n,s=t.deltaY>0?r:-r,c=.03*t.deltaX*(t.deltaY/80);t.target.style.transform="translate("+i+"px, "+(s+t.deltaY)+"px) rotate("+c+"deg)",this.props.superOnSwipe(),this.props.onSwipe&&this.props.onSwipe(this.props.data),i<0&&this.props.onSwipeLeft?this.props.onSwipeLeft(this.props.data):this.props.onSwipeRight&&this.props.onSwipeRight(this.props.data)}}},e.prototype.onDoubleTap=function(){this.props.onDoubleTap&&this.props.onDoubleTap(this.props.data)},e.prototype.render=function(){return o.a.createElement(I.a,{onPan:this.onPan.bind(this),onPanEnd:this.onPanEnd.bind(this),onDoubleTap:this.onDoubleTap.bind(this)},o.a.createElement("div",{className:this.state.classList.join(" "),style:this.props.style},this.props.children))},e}(a.Component);n(126);var L=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.call(this,n));return a.state={},a}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.setupCards()},e.prototype.componentDidUpdate=function(){this.setupCards()},e.prototype.setupCards=function(){var t=document.querySelector(".container"),e=document.querySelectorAll(".card_container");document.querySelectorAll(".card_container:not(.removed)").forEach((function(t,n){t.style.zIndex=e.length-n,t.style.transform="scale("+(20-n)/20+") translateY(-"+30*n+"px)",t.style.opacity=(10-n)/10})),t.classList.add("loaded")},e.prototype.renderCards=function(){var t=this;return o.a.Children.map(this.props.children,(function(e){return o.a.cloneElement(e,{superOnSwipe:t.superOnSwipe.bind(t)})}))},e.prototype.renderEndCard=function(){if(this.props.addEndCard)return o.a.createElement("div",{className:"card_container end_card"},this.props.addEndCard())},e.prototype.superOnSwipe=function(){this.setupCards()},e.prototype.render=function(){return o.a.createElement("div",{className:"container",style:this.props.style},o.a.createElement("div",{className:"cards_container"},this.renderCards(),this.renderEndCard()))},e}(a.Component),M=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var _=function(){var t=M,e=Object(a.useState)(),n=Object(D.a)(e,2);return n[0],n[1],o.a.createElement("div",null,o.a.createElement(L,{style:{width:"100vw",height:"100vh",position:"absolute",left:"0%",top:"0%"}},t.map((function(t){return o.a.createElement(P,{style:{backgroundImage:"url("+t.url+")"}},o.a.createElement("div",{className:"restaurantName"},o.a.createElement("h3",null,t.name)),o.a.createElement("div",{className:"restaurantRatingPrice"},o.a.createElement("h5",null," 4.6 | $$ ")),o.a.createElement("div",{className:"restaurantDistance"},o.a.createElement("h5",null," 1.2KM ")))}))))},A=(n(127),"http://app-chicken-tinder.apps.us-east-2.starter.openshift-online.com"),X=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={restaurants:[]},a.onSwipeRight=a.onSwipeRight.bind(Object(d.a)(a)),a.onSwipeLeft=a.onSwipeLeft.bind(Object(d.a)(a)),a.onDoubleTap=a.onDoubleTap.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"onSwipeRight",value:function(t){this.props.socket.emit("swipe right",t.placeID),console.log("removing: "+t.placeID+" after swiping right")}},{key:"onSwipeLeft",value:function(t){console.log("removing: "+t.placeID+" after swiping left")}},{key:"onDoubleTap",value:function(t){var e=this,n=this.state.restaurants,a=n.indexOf(t),o=A+"/api/additionalPhotos/?id="+t.placeID;if(n[a].additionalPhotos){2===n[a].curPhotoIndex?n[a].curPhotoIndex=0:n[a].curPhotoIndex+=1;var i=n[a].curPhotoIndex,r=n[a].additionalPhotos;n[a].photoURL=r[i],e.setState({restaurants:n})}else fetch(o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){200===t.status?t.json().then((function(t){var o=t.photos;n[a].additionalPhotos=o,n[a].photoURL=o[1],n[a].curPhotoIndex=1,e.setState({restaurants:n})})):console.error("Yelp API server did not find business details.")})).catch((function(t){console.log(t)}));console.log("Finding next photo")}},{key:"redirectHome",value:function(){window.location.assign("/")}},{key:"componentDidMount",value:function(){var t=this,e=this.props.socket,n=this;this.props.location.state.roomNumber||this.props.history.push("/");var a=this.props.location.state.roomNumber;fetch(A+"/api/rooms/?roomNumber="+a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){200===e.status?e.json().then((function(t){n.setState(t)})):404===e.status?(alert("This room no longer exists."),window.setTimeout(t.redirectHome,100)):(alert("Something went wrong."),window.setTimeout(t.redirectHome,100))})).catch((function(t){console.log(t)})),e.on("general error",(function(e){alert(e),window.setTimeout(t.redirectHome,100)})),e.on("match found",(function(e){for(var n,a=0;a<t.state.restaurants.length;a++)if(t.state.restaurants[a].placeID===e){n=t.state.restaurants[a].name;break}alert("You all liked "+n+"!")})),e.on("user disconnect",(function(){alert("A user swiping in your room has disconnected!"),window.setTimeout(t.redirectHome,100)})),e.on("ping",(function(t){console.log("ping received from server"),e.emit("pong")}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(L,{style:{width:"100vw",height:"100vh",position:"absolute",left:"0%",top:"0%"}},this.state.restaurants.map((function(e){return o.a.createElement(P,{key:e.placeID,data:e,style:{backgroundImage:"url("+e.photoURL+")"},onSwipeRight:t.onSwipeRight.bind(t),onSwipeLeft:t.onSwipeLeft.bind(t),onDoubleTap:t.onDoubleTap.bind(t)},o.a.createElement("div",{className:"restaurantName"},o.a.createElement("h3",null,e.name)),o.a.createElement("div",{className:"restaurantRatingPrice"},o.a.createElement("h5",null," ",e.rating," | ",e.price," ")),o.a.createElement("div",{className:"restaurantDistance"},o.a.createElement("h5",null," ",Math.floor(e.distance),"M ")))}))))}}]),n}(o.a.Component),J=x.a.connect("http://app-chicken-tinder.apps.us-east-2.starter.openshift-online.com",{reconnection:!0}),Y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/rooms/:roomNumber",render:function(t){return o.a.createElement(T,Object.assign({},t,{socket:J}))}}),o.a.createElement(h.a,{exact:!0,path:"/",component:g}),o.a.createElement(h.a,{exact:!0,path:"/create",render:function(t){return o.a.createElement(R,Object.assign({},t,{socket:J}))}}),o.a.createElement(h.a,{exact:!0,path:"/swiping",render:function(t){return o.a.createElement(X,Object.assign({},t,{socket:J}))}}),o.a.createElement(h.a,{exact:!0,path:"/rooms",component:E}),o.a.createElement(h.a,{exact:!0,path:"/test",component:_}),o.a.createElement(h.a,{component:v}))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},65:function(t,e,n){t.exports=n(128)},70:function(t,e,n){},91:function(t,e,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.ee509ad1.chunk.js.map