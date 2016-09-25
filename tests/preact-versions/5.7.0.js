!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.preact=e.preact||{})}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,t){if(t)for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}function r(e){return n({},e)}function o(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function i(e,t){return[].slice.call(e,t)}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function s(e){return void 0===e||null===e}function c(e){return e===!1||s(e)}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function f(e,n,r){var o,i,s,p=arguments.length;if(p>2){var d=typeof r;if(3===p&&"object"!==d&&"function"!==d)c(r)||(o=[r+""]);else{o=[];for(var h=2;h<p;h++){var m=arguments[h];if(!c(m)){m.join?i=m:(i=Z)[0]=m;for(var v=0;v<i.length;v++){var _=i[v],b=!(c(_)||a(_)||_ instanceof t);b&&!l(_)&&(_+=""),b&&s?o[o.length-1]+=_:c(_)||(o.push(_),s=b)}}}}}else if(n&&n.children)return f(e,n,n.children);n&&(n.children&&delete n.children,a(e)||("className"in n&&(n.class=n.className,delete n.className),s=n.class,s&&!l(s)&&(n.class=u(s))));var y=new t(e,n||void 0,o);return Y.vnode&&Y.vnode(y),y}function p(e,t){return f(e.nodeName,n(r(e.attributes),t),arguments.length>2?i(arguments,2):e.children)}function d(e,t,n){var r=t.split("."),i=r[0];return function(t){var c,u,f,p=t&&t.currentTarget||this,d=e.state,h=d;if(l(n)?(u=o(t,n),s(u)&&(p=p._component)&&(u=o(p,n))):u=p.nodeName?(p.nodeName+p.type).match(/^input(check|rad)/i)?p.checked:p.value:t,a(u)&&(u=u.call(p)),r.length>1){for(f=0;f<r.length-1;f++)h=h[r[f]]||(h[r[f]]={});h[r[f]]=u,u=d[i]}e.setState((c={},c[i]=u,c))}}function h(e){1===ne.push(e)&&(Y.debounceRendering||X)(m)}function m(){if(ne.length){var e,t=ne;ne=re,re=t;while(e=t.pop())e._dirty&&F(e)}}function v(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function _(e,t){return e.nodeName(U(e),t||$)}function b(e,t){return e[ee]||(e[ee]=t||{})}function y(e){return e instanceof Text?3:e instanceof Element?1:0}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function N(e,t,n,r,o){if(b(e)[t]=n,"key"!==t&&"children"!==t&&"innerHTML"!==t)if("class"!==t||o)if("style"===t){if((!n||l(n)||l(r))&&(e.style.cssText=n||""),n&&"object"==typeof n){if(!l(r))for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"!=typeof n[i]||te[i]?n[i]:n[i]+"px"}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html);else if(t.match(/^on/i)){var u=e._listeners||(e._listeners={});t=K(t.substring(2)),n?u[t]||e.addEventListener(t,C):u[t]&&e.removeEventListener(t,C),u[t]=n}else if("type"!==t&&!o&&t in e)g(e,t,s(n)?"":n),c(n)&&e.removeAttribute(t);else{var f=o&&t.match(/^xlink\:?(.+)/);c(n)?f?e.removeAttributeNS("http://www.w3.org/1999/xlink",K(f[1])):e.removeAttribute(t):"object"==typeof n||a(n)||(f?e.setAttributeNS("http://www.w3.org/1999/xlink",K(f[1]),n):e.setAttribute(t,n))}else e.className=n||""}function g(e,t,n){try{e[t]=n}catch(e){}}function C(e){return this._listeners[e.type](Y.event&&Y.event(e)||e)}function k(e){for(var t={},n=e.attributes.length;n--;)t[e.attributes[n].name]=e.attributes[n].value;return t}function w(e,t){return l(t)?3===y(e):l(t.nodeName)?S(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||v(t):void 0}function S(e,t){return e.normalizedNodeName===t||K(e.nodeName)===K(t)}function U(e){var t=e.nodeName.defaultProps,o=r(t||e.attributes);return t&&n(o,e.attributes),e.children&&(o.children=e.children),o}function P(e){T(e);var t=K(e.nodeName),n=oe[t];n?n.push(e):oe[t]=[e]}function B(e,t){var n=K(e),r=oe[n]&&oe[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return b(r),r.normalizedNodeName=n,r}function T(e){x(e),1===y(e)&&(b(e,k(e)),e._component=e._componentConstructor=null)}function R(){var e;while(e=ie.pop())e.componentDidMount&&e.componentDidMount()}function W(e,t,n,r,o,i,a){ae++;var l=M(e,t,n,r,i);return o&&l.parentNode!==o&&o.insertBefore(l,a||null),--ae||R(),l}function M(e,t,n,r,o){var i=t&&t.attributes;while(v(t))t=_(t,n);if(s(t)&&(t="",o)){if(e){if(8===e.nodeType)return e;P(e)}return document.createComment(t)}if(l(t)){if(e){if(3===y(e)&&e.parentNode)return e.nodeValue=t,e;P(e)}return document.createTextNode(t)}var c,u=e,f=t.nodeName;if(a(f))return G(e,t,n,r);if(l(f)||(f+=""),c="svg"===K(f),c&&(le=!0),e){if(!S(e,f)){u=B(f,le);while(e.firstChild)u.appendChild(e.firstChild);L(e)}}else u=B(f,le);return t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===u.childNodes.length&&u.firstChild instanceof Text?u.firstChild.nodeValue=t.children[0]:(t.children||u.firstChild)&&D(u,t.children,n,r),j(u,t.attributes),i&&i.ref&&(u[ee].ref=i.ref)(u),c&&(le=!1),u}function D(e,t,n,r){var o,i,a,l,c=e.childNodes,u=[],f={},p=0,d=0,h=c.length,m=0,v=t&&t.length;if(h)for(var _=0;_<h;_++){var b=c[_],y=v?(i=b._component)?i.__key:(i=b[ee])?i.key:null:null;y||0===y?(p++,f[y]=b):u[m++]=b}if(v)for(var _=0;_<v;_++){if(a=t[_],l=null,p&&a.attributes){var y=a.key;!s(y)&&y in f&&(l=f[y],f[y]=void 0,p--)}if(!l&&d<m)for(o=d;o<m;o++)if(i=u[o],i&&w(i,a)){l=i,u[o]=void 0,o===m-1&&m--,o===d&&d++;break}l=M(l,a,n,r),l!==c[_]&&e.insertBefore(l,c[_]||null)}if(p)for(var _ in f)f[_]&&(u[d=m++]=f[_]);d<m&&E(u)}function E(e,t){for(var n=e.length;n--;){var r=e[n];r&&L(r,t)}}function L(e,t){var n=e._component;n?O(n,!t):(e[ee]&&e[ee].ref&&e[ee].ref(null),t||P(e),e.childNodes&&e.childNodes.length&&E(e.childNodes,t))}function j(e,t){var n=e[ee]||k(e);for(var r in n)t&&r in t||N(e,r,null,n[r],le);if(t)for(var o in t)o in n&&t[o]==n[o]&&("value"!==o&&"checked"!==o||t[o]==e[o])||N(e,o,t[o],n[o],le)}function A(e){var t=e.constructor.name,n=se[t];n?n.push(e):se[t]=[e]}function z(e,t,n){var r=new e(t,n),o=se[e.name];if(r.props=t,r.context=n,o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function H(e){e._dirty||(e._dirty=!0,h(e))}function I(e,t,n,r,o){var i=e.base;e._disableRendering||(e._disableRendering=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,s(i)||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disableRendering=!1,0!==n&&(1!==n&&Y.syncComponentUpdates===!1&&i?H(e):F(e,1,o)),e.__ref&&e.__ref(e))}function F(e,t,o){if(!e._disableRendering){var i,l,s=e.props,c=e.state,u=e.context,f=e.prevProps||s,p=e.prevState||c,d=e.prevContext||u,h=e.base,m=h||e.nextBase,b=m&&m.parentNode,y=m&&m._component,x=e._component;if(h&&(e.props=f,e.state=p,e.context=d,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(s,c,u)===!1?i=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!i){e.render&&(l=e.render(s,c,u)),e.getChildContext&&(u=n(r(u),e.getChildContext()));while(v(l))l=_(l,u);var N,g,C=l&&l.nodeName;if(a(C)&&C.prototype.render){var k=x,w=U(l);k&&k.constructor===C?I(k,w,1,u):(N=k,k=z(C,w,u),k._parentComponent=e,e._component=k,I(k,w,0,u),F(k,1)),g=k.base}else{var S=m;N=x,N&&(S=e._component=null),(m||1===t)&&(S&&(S._component=null),g=W(S,l,u,o||!h,b,!0,m&&m.nextSibling))}if(m&&g!==m&&(N||y!==e||x||!m.parentNode||(m._component=null,L(m))),N&&O(N,!0),e.base=g,g){var P=e,B=e;while(B=B._parentComponent)P=B;g._component=P,g._componentConstructor=P.constructor}}!h||o?(ie.unshift(e),ae||R()):!i&&e.componentDidUpdate&&e.componentDidUpdate(f,p,d);var T,M=e._renderCallbacks;if(M)while(T=M.pop())T.call(e);return l}}function G(e,t,n,r){var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,l=a,s=U(t);while(o&&!l&&(o=o._parentComponent))l=o.constructor===t.nodeName;return!l||r&&!o._component?(o&&!a&&(O(o,!0),e=i=null),o=z(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e),I(o,s,1,n,r),e=o.base,i&&e!==i&&(i._component=null,L(i))):(I(o,s,3,n,r),e=o.base),e}function O(e,t){var n=e.base;e._disableRendering=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?O(r,t):n&&(n[ee]&&n[ee].ref&&n[ee].ref(null),e.nextBase=n,t&&(x(n),A(e)),E(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function V(e,t){this._dirty=!0,this._disableRendering=!1,this.prevState=this.prevProps=this.prevContext=this.base=this.nextBase=this._parentComponent=this._component=this.__ref=this.__key=this._linkedStates=this._renderCallbacks=null,this.context=t,this.props=e,this.state=this.getInitialState&&this.getInitialState()||{}}function q(e,t,n){return W(n,e,{},!1,t)}var J={},K=function(e){return J[e]||(J[e]=e.toLowerCase())},Q="undefined"!=typeof Promise&&Promise.resolve(),X=Q?function(e){Q.then(e)}:setTimeout,Y={vnode:s},Z=[],$={},ee="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",te={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},ne=[],re=[],oe={},ie=[],ae=0,le=!1,se={};n(V.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={}),r=e+"|"+t;return n[r]||(n[r]=d(this,e,t))},setState:function(e,t){var o=this.state;this.prevState||(this.prevState=r(o)),n(o,a(e)?e(o,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),H(this)},forceUpdate:function(){F(this,2)},render:function(){return null}}),e.h=f,e.cloneElement=p,e.Component=V,e.render=q,e.rerender=m,e.options=Y});
//# sourceMappingURL=preact.min.js.map