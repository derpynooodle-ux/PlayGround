(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Ja="186",Yc=0,Oo=1,$c=2,ss=1,Kc=2,is=3,tn=0,He=1,qe=2,Ti=0,rs=1,Ce=2,Bo=3,zo=4,Zc=5,Dn=100,Jc=101,Qc=102,jc=103,th=104,eh=200,ih=201,nh=202,sh=203,Zl=204,Jl=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,oa=0,la=1,ca=2,ls=3,ha=4,ua=5,da=6,fa=7,Ql=0,ph=1,mh=2,gi=0,jl=1,tc=2,ec=3,Qa=4,ic=5,nc=6,sc=7,rc=300,en=301,zn=302,Er=303,Tr=304,gr=306,cs=1e3,Ei=1001,pa=1002,Pe=1003,gh=1004,vs=1005,Oe=1006,Ar=1007,Ji=1008,Ke=1009,ac=1010,oc=1011,hs=1012,ja=1013,xi=1014,oi=1015,vi=1016,to=1017,eo=1018,us=1020,lc=35902,cc=35899,hc=1021,uc=1022,li=1023,Ci=1026,Qi=1027,io=1028,no=1029,nn=1030,so=1031,ro=1033,tr=33776,er=33777,ir=33778,nr=33779,ma=35840,ga=35841,_a=35842,xa=35843,va=36196,Ma=37492,Sa=37496,ya=37488,ba=37489,rr=37490,wa=37491,Ea=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Da=37815,Ia=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,za=36492,ka=36494,Ga=36495,Ha=36283,Va=36284,ar=36285,Wa=36286,_h=3200,Xa=0,xh=1,Hi="",Ne="srgb",or="srgb-linear",lr="linear",ie="srgb",Rr=7680,vh=519,Mh=512,Sh=513,yh=514,ao=515,bh=516,wh=517,oo=518,Eh=519,dc=35044,ko="300 es",mi=2e3,ds=2001;function Th(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ah(){const s=cr("canvas");return s.style.display="block",s}const Go={};function hr(...s){const t="THREE."+s.shift();console.log(t,...s)}function fc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=fc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=fc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Nn(...s){const t=s.join(" ");t in Go||(Go[t]=!0,Dt(...s))}function Rh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Ch={[oa]:la,[ca]:da,[ha]:fa,[ls]:ua,[la]:oa,[da]:ca,[fa]:ha,[ua]:ls};class an{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ho=1234567;const Fn=Math.PI/180,fs=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function lo(s,t){return(s%t+t)%t}function Ph(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Lh(s,t,e){return s!==t?(e-s)/(t-s):0}function as(s,t,e){return(1-e)*s+e*t}function Dh(s,t,e,i){return as(s,t,1-Math.exp(-e*i))}function Ih(s,t=1){return t-Math.abs(lo(s,t*2)-t)}function Uh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Fh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Oh(s,t){return s+Math.random()*(t-s)}function Bh(s){return s*(.5-Math.random())}function zh(s){s!==void 0&&(Ho=s);let t=Ho+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kh(s){return s*Fn}function Gh(s){return s*fs}function Hh(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Vh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xh(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),x=a((i-t)/2);switch(n){case"XYX":s.set(o*u,c*d,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*x,c*p,o*l);break;case"YXY":s.set(c*p,o*u,c*x,o*l);break;case"ZYZ":s.set(c*x,c*p,o*u,o*l);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qa={DEG2RAD:Fn,RAD2DEG:fs,generateUUID:Ai,clamp:Wt,euclideanModulo:lo,mapLinear:Ph,inverseLerp:Lh,lerp:as,damp:Dh,pingpong:Ih,smoothstep:Uh,smootherstep:Nh,randInt:Fh,randFloat:Oh,randFloatSpread:Bh,seededRandom:zh,degToRad:kh,radToDeg:Gh,isPowerOfTwo:Hh,ceilPowerOfTwo:Vh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:ne,denormalize:ai},yo=class yo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Lt=yo;class Hn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],u=i[n+2],d=i[n+3],h=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||c!==h||l!==p||u!==x){let m=c*h+l*p+u*x+d*y;m<0&&(h=-h,p=-p,x=-x,y=-y,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);f=Math.sin(f*S)/T,o=Math.sin(o*S)/T,c=c*f+h*o,l=l*f+p*o,u=u*f+x*o,d=d*f+y*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+x*o,d=d*f+y*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*d+c*p-l*h,t[e+1]=c*x+u*h+l*d-o*p,t[e+2]=l*x+u*p+o*h-c*d,t[e+3]=u*x-o*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),d=o(r/2),h=c(i/2),p=c(n/2),x=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"YZX":this._x=h*u*d+l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d-h*p*x;break;case"XZY":this._x=h*u*d-l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d+h*p*x;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+n*l-r*c,this._y=n*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-n*o,this._w=a*u-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),u=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=n+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let P=bo;const Cr=new P,Vo=new Hn,wo=class wo{constructor(t,e,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],y=n[0],m=n[3],f=n[6],S=n[1],T=n[4],v=n[7],w=n[2],b=n[5],R=n[8];return r[0]=a*y+o*S+c*w,r[3]=a*m+o*T+c*b,r[6]=a*f+o*v+c*R,r[1]=l*y+u*S+d*w,r[4]=l*m+u*T+d*b,r[7]=l*f+u*v+d*R,r[2]=h*y+p*S+x*w,r[5]=h*m+p*T+x*b,r[8]=h*f+p*v+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+n*r*l-n*a*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,p=l*r-a*c,x=e*d+i*h+n*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(n*l-u*i)*y,t[2]=(o*i-n*a)*y,t[3]=h*y,t[4]=(u*e-n*c)*y,t[5]=(n*r-o*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Nn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return Nn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return Nn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wo.prototype.isMatrix3=!0;let Nt=wo;const Pr=new Nt,Wo=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const s={enabled:!0,workingColorSpace:or,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(n.r=On(n.r),n.g=On(n.g),n.b=On(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?lr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Nn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Nn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[or]:{primaries:t,whitePoint:i,transfer:lr,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const Xt=qh();function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function On(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let dn;class Yh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dn===void 0&&(dn=cr("canvas")),dn.width=t.width,dn.height=t.height;const n=dn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=dn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ri(e[i]/255)*255):e[i]=Ri(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $h=0;class co{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Lr(n[a].image)):r.push(Lr(n[a]))}else r=Lr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Lr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Kh=0;const Dr=new P;class Be extends an{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Ei,n=Ei,r=Oe,a=Ji,o=li,c=Ke,l=Be.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ai(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dr).x}get height(){return this.source.getSize(Dr).y}get depth(){return this.source.getSize(Dr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=rc;Be.DEFAULT_ANISOTROPY=1;const Eo=class Eo{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],x=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,v=(p+1)/2,w=(f+1)/2,b=(u+h)/4,R=(d+y)/4,_=(x+m)/4;return T>v&&T>w?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=b/i,r=R/i):v>w?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=b/n,r=_/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=R/r,n=_/r),this.set(i,n,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eo.prototype.isVector4=!0;let xe=Eo;class Zh extends an{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new Be(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new co(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Zh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pc extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const mr=class mr{constructor(t,e,i,n,r,a,o,c,l,u,d,h,p,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,u,d,h,p,x,y,m)}set(t,e,i,n,r,a,o,c,l,u,d,h,p,x,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/fn.setFromMatrixColumn(t,0).length(),r=1/fn.setFromMatrixColumn(t,1).length(),a=1/fn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*d,x=o*u,y=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+x*l,e[5]=h-y*l,e[9]=-o*c,e[2]=y-h*l,e[6]=x+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,x=l*u,y=l*d;e[0]=h+y*o,e[4]=x*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=y+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,x=l*u,y=l*d;e[0]=h-y*o,e[4]=-a*d,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*d,x=o*u,y=o*d;e[0]=c*u,e[4]=x*l-p,e[8]=h*l+y,e[1]=c*d,e[5]=y*l+h,e[9]=p*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,x=o*c,y=o*l;e[0]=c*u,e[4]=y-h*d,e[8]=x*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*d+x,e[10]=h-y*d}else if(t.order==="XZY"){const h=a*c,p=a*l,x=o*c,y=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+y,e[5]=a*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,jh)}lookAt(t,e,i){const n=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Ui.crossVectors(i,Ye),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Ui.crossVectors(i,Ye)),Ui.normalize(),Ms.crossVectors(Ye,Ui),n[0]=Ui.x,n[4]=Ms.x,n[8]=Ye.x,n[1]=Ui.y,n[5]=Ms.y,n[9]=Ye.y,n[2]=Ui.z,n[6]=Ms.z,n[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],S=i[3],T=i[7],v=i[11],w=i[15],b=n[0],R=n[4],_=n[8],E=n[12],C=n[1],U=n[5],F=n[9],H=n[13],N=n[2],k=n[6],K=n[10],W=n[14],it=n[3],q=n[7],j=n[11],et=n[15];return r[0]=a*b+o*C+c*N+l*it,r[4]=a*R+o*U+c*k+l*q,r[8]=a*_+o*F+c*K+l*j,r[12]=a*E+o*H+c*W+l*et,r[1]=u*b+d*C+h*N+p*it,r[5]=u*R+d*U+h*k+p*q,r[9]=u*_+d*F+h*K+p*j,r[13]=u*E+d*H+h*W+p*et,r[2]=x*b+y*C+m*N+f*it,r[6]=x*R+y*U+m*k+f*q,r[10]=x*_+y*F+m*K+f*j,r[14]=x*E+y*H+m*W+f*et,r[3]=S*b+T*C+v*N+w*it,r[7]=S*R+T*U+v*k+w*q,r[11]=S*_+T*F+v*K+w*j,r[15]=S*E+T*H+v*W+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],y=t[7],m=t[11],f=t[15],S=c*p-l*h,T=o*p-l*d,v=o*h-c*d,w=a*p-l*u,b=a*h-c*u,R=a*d-o*u;return e*(y*S-m*T+f*v)-i*(x*S-m*w+f*b)+n*(x*T-y*w+f*R)-r*(x*v-y*b+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+n*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],S=e*o-i*a,T=e*c-n*a,v=e*l-r*a,w=i*c-n*o,b=i*l-r*o,R=n*l-r*c,_=u*y-d*x,E=u*m-h*x,C=u*f-p*x,U=d*m-h*y,F=d*f-p*y,H=h*f-p*m,N=S*H-T*F+v*U+w*C-b*E+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(o*H-c*F+l*U)*k,t[1]=(n*F-i*H-r*U)*k,t[2]=(y*R-m*b+f*w)*k,t[3]=(h*b-d*R-p*w)*k,t[4]=(c*C-a*H-l*E)*k,t[5]=(e*H-n*C+r*E)*k,t[6]=(m*v-x*R-f*T)*k,t[7]=(u*R-h*v+p*T)*k,t[8]=(a*F-o*C+l*_)*k,t[9]=(i*C-e*F-r*_)*k,t[10]=(x*b-y*v+f*S)*k,t[11]=(d*v-u*b-p*S)*k,t[12]=(o*E-a*U-c*_)*k,t[13]=(e*U-i*E+n*_)*k,t[14]=(y*T-x*w-m*S)*k,t[15]=(u*w-d*T+h*S)*k,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*a,0,l*c-n*o,u*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,p=r*u,x=r*d,y=a*u,m=a*d,f=o*d,S=c*l,T=c*u,v=c*d,w=i.x,b=i.y,R=i.z;return n[0]=(1-(y+f))*w,n[1]=(p+v)*w,n[2]=(x-T)*w,n[3]=0,n[4]=(p-v)*b,n[5]=(1-(h+f))*b,n[6]=(m+S)*b,n[7]=0,n[8]=(x+T)*R,n[9]=(m-S)*R,n[10]=(1-(h+y))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=fn.set(n[0],n[1],n[2]).length();const o=fn.set(n[4],n[5],n[6]).length(),c=fn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),ii.copy(this);const l=1/a,u=1/o,d=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,e.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,n,r,a,o=mi,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-n),h=(e+t)/(e-t),p=(i+n)/(i-n);let x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===mi)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ds)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=mi,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-n),h=-(e+t)/(e-t),p=-(i+n)/(i-n);let x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===mi)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===ds)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};mr.prototype.isMatrix4=!0;let se=mr;const fn=new P,ii=new se,Qh=new P(0,0,0),jh=new P(1,1,1),Ui=new P,Ms=new P,Ye=new P,qo=new se,Yo=new Hn;class Vi{constructor(t=0,e=0,i=0,n=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],d=n[2],h=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const $o=new P,pn=new Hn,Mi=new se,Ss=new P,Wn=new P,eu=new P,iu=new Hn,Ko=new P(1,0,0),Zo=new P(0,1,0),Jo=new P(0,0,1),Qo={type:"added"},nu={type:"removed"},mn={type:"childadded",child:null},Ir={type:"childremoved",child:null};class le extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new P,e=new Vi,i=new Hn,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new Nt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pn.setFromAxisAngle(t,e),this.quaternion.multiply(pn),this}rotateOnWorldAxis(t,e){return pn.setFromAxisAngle(t,e),this.quaternion.premultiply(pn),this}rotateX(t){return this.rotateOnAxis(Ko,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis(Jo,t)}translateOnAxis(t,e){return $o.copy(t).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ko,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis(Jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ss.copy(t):Ss.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Wn,Ss,this.up):Mi.lookAt(Ss,Wn,this.up),this.quaternion.setFromRotationMatrix(Mi),n&&(Mi.extractRotation(n.matrixWorld),pn.setFromRotationMatrix(Mi),this.quaternion.premultiply(pn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qo),mn.child=t,this.dispatchEvent(mn),mn.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qo),mn.child=t,this.dispatchEvent(mn),mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}le.DEFAULT_UP=new P(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class we extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const su={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(su)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new we;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=lo(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Nr(a,r,t+1/3),this.g=Nr(a,r,t),this.b=Nr(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=mc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Xt.workingToColorSpace(Ue.copy(this),t),Math.round(Wt(Ue.r*255,0,255))*65536+Math.round(Wt(Ue.g*255,0,255))*256+Math.round(Wt(Ue.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,n=Ue.g,r=Ue.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-i)/d+2;break;case r:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ne){Xt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,n=Ue.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(ys);const i=as(Ni.h,ys.h,e),n=as(Ni.s,ys.s,e),r=as(Ni.l,ys.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new It;It.NAMES=mc;class uo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new uo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gc extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ni=new P,Si=new P,Fr=new P,yi=new P,gn=new P,_n=new P,jo=new P,Or=new P,Br=new P,zr=new P,kr=new xe,Gr=new xe,Hr=new xe;class Ze{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ni.subVectors(t,e),n.cross(ni);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ni.subVectors(n,e),Si.subVectors(i,e),Fr.subVectors(t,e);const a=ni.dot(ni),o=ni.dot(Si),c=ni.dot(Fr),l=Si.dot(Si),u=Si.dot(Fr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,x=(a*u-o*c)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return kr.setScalar(0),Gr.setScalar(0),Hr.setScalar(0),kr.fromBufferAttribute(t,e),Gr.fromBufferAttribute(t,i),Hr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Hr,r.z),a}static isFrontFacing(t,e,i,n){return ni.subVectors(i,e),Si.subVectors(t,e),ni.cross(Si).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ni.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;gn.subVectors(n,i),_n.subVectors(r,i),Or.subVectors(t,i);const c=gn.dot(Or),l=_n.dot(Or);if(c<=0&&l<=0)return e.copy(i);Br.subVectors(t,n);const u=gn.dot(Br),d=_n.dot(Br);if(u>=0&&d<=u)return e.copy(n);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(gn,a);zr.subVectors(t,r);const p=gn.dot(zr),x=_n.dot(zr);if(x>=0&&p<=x)return e.copy(r);const y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(i).addScaledVector(_n,o);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return jo.subVectors(r,n),o=(d-u)/(d-u+(p-x)),e.copy(n).addScaledVector(jo,o);const f=1/(m+y+h);return a=y*f,o=h*f,e.copy(i).addScaledVector(gn,a).addScaledVector(_n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xn),ws.subVectors(this.max,Xn),xn.subVectors(t.a,Xn),vn.subVectors(t.b,Xn),Mn.subVectors(t.c,Xn),Fi.subVectors(vn,xn),Oi.subVectors(Mn,vn),qi.subVectors(xn,Mn);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-qi.z,qi.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,qi.z,0,-qi.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-qi.y,qi.x,0];return!Vr(e,xn,vn,Mn,ws)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,xn,vn,Mn,ws))?!1:(Es.crossVectors(Fi,Oi),e=[Es.x,Es.y,Es.z],Vr(e,xn,vn,Mn,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,bs=new Pi,xn=new P,vn=new P,Mn=new P,Fi=new P,Oi=new P,qi=new P,Xn=new P,ws=new P,Es=new P,Yi=new P;function Vr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Yi.fromArray(s,r);const o=n.x*Math.abs(Yi.x)+n.y*Math.abs(Yi.y)+n.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ye=new P,Ts=new Lt;let ru=0;class Ve extends an{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ru++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xc extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}}const au=new Pi,qn=new P,Wr=new P;class on{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):au.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qn.subVectors(t,this.center);const e=qn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(qn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qn.copy(t.center).add(Wr)),this.expandByPoint(qn.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ou=0;const Qe=new se,Xr=new le,Sn=new P,$e=new Pi,Yn=new Pi,Re=new P;class ge extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Th(t)?xc:_c)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors($e.min,Yn.min),$e.expandByPoint(Re),Re.addVectors($e.max,Yn.max),$e.expandByPoint(Re)):($e.expandByPoint(Yn.min),$e.expandByPoint(Yn.max))}$e.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Re.fromBufferAttribute(o,l),c&&(Sn.fromBufferAttribute(t,l),Re.add(Sn)),n=Math.max(n,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ve(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new P,c[_]=new P;const l=new P,u=new P,d=new P,h=new Lt,p=new Lt,x=new Lt,y=new P,m=new P;function f(_,E,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,C),u.sub(l),d.sub(l),p.sub(h),x.sub(h);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),o[_].add(y),o[E].add(y),o[C].add(y),c[_].add(m),c[E].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,E=S.length;_<E;++_){const C=S[_],U=C.start,F=C.count;for(let H=U,N=U+F;H<N;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new P,v=new P,w=new P,b=new P;function R(_){w.fromBufferAttribute(n,_),b.copy(w);const E=o[_];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(b,E);const U=v.dot(c[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,U)}for(let _=0,E=S.length;_<E;++_){const C=S[_],U=C.start,F=C.count;for(let H=U,N=U+F;H<N;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const n=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);n.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,x=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let f=0;f<u;f++)h[x++]=l[p++]}return new Ve(h,u,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(n[c]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ke=new P;class ur{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ur(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qr=new P,cu=new P,hu=new Nt;class Gi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=qr.subVectors(i,e).cross(cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||hu.getNormalMatrix(t),n=this.coplanarPoint(qr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let uu=0;class Wi extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=rs,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sn extends Wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yn;const $n=new P,bn=new P,wn=new P,En=new Lt,Kn=new Lt,vc=new se,As=new P,Zn=new P,Rs=new P,tl=new Lt,Yr=new Lt,el=new Lt;class kn extends le{constructor(t=new sn){if(super(),this.isSprite=!0,this.type="Sprite",yn===void 0){yn=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lu(e,5);yn.setIndex([0,1,2,0,2,3]),yn.setAttribute("position",new ur(i,3,0,!1)),yn.setAttribute("uv",new ur(i,2,3,!1))}this.geometry=yn,this.material=t,this.center=new Lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bn.setFromMatrixScale(this.matrixWorld),vc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bn.multiplyScalar(-wn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Cs(As.set(-.5,-.5,0),wn,a,bn,n,r),Cs(Zn.set(.5,-.5,0),wn,a,bn,n,r),Cs(Rs.set(.5,.5,0),wn,a,bn,n,r),tl.set(0,0),Yr.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(As,Zn,Rs,!1,$n);if(o===null&&(Cs(Zn.set(-.5,.5,0),wn,a,bn,n,r),Yr.set(0,1),o=t.ray.intersectTriangle(As,Rs,Zn,!1,$n),o===null))return;const c=t.ray.origin.distanceTo($n);c<t.near||c>t.far||e.push({distance:c,point:$n.clone(),uv:Ze.getInterpolation($n,As,Zn,Rs,tl,Yr,el,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cs(s,t,e,i,n,r){En.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Kn.x=r*En.x-n*En.y,Kn.y=n*En.x+r*En.y):Kn.copy(En),s.copy(t),s.x+=Kn.x,s.y+=Kn.y,s.applyMatrix4(vc)}const wi=new P,$r=new P,Ps=new P,Ls=new P;class _r{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){$r.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Ls.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Ls.dot(this.direction),c=-Ls.dot(Ps),l=Ls.lengthSq(),u=Math.abs(1-a*a);let d,h,p,x;if(u>0)if(d=a*c-o,h=a*o-c,x=r*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy($r).addScaledVector(Ps,h),p}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),n=wi.dot(wi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,n=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,n=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,y=e.y-a.y,m=e.z-a.z,f=i.x-a.x,S=i.y-a.y,T=i.z-a.z,v=Math.abs(c),w=Math.abs(l),b=Math.abs(u);let R,_,E,C,U,F,H,N,k,K,W,it;if(v>=w&&v>=b?(E=c,F=d,k=x,it=f,c>=0?(R=l,_=u,C=h,U=p,H=y,N=m,K=S,W=T):(R=u,_=l,C=p,U=h,H=m,N=y,K=T,W=S)):w>=b?(E=l,F=h,k=y,it=S,l>=0?(R=u,_=c,C=p,U=d,H=m,N=x,K=T,W=f):(R=c,_=u,C=d,U=p,H=x,N=m,K=f,W=T)):(E=u,F=p,k=m,it=T,u>=0?(R=c,_=l,C=d,U=h,H=x,N=y,K=f,W=S):(R=l,_=c,C=h,U=d,H=y,N=x,K=S,W=f)),E===0)return null;const q=R/E,j=_/E,et=1/E,Ct=C-q*F,At=U-j*F,ce=H-q*k,qt=N-j*k,Zt=K-q*it,Y=W-j*it,Q=Zt*qt-Y*ce,vt=Ct*Y-At*Zt,Ut=ce*At-qt*Ct;if(n){if(Q<0||vt<0||Ut<0)return null}else if((Q<0||vt<0||Ut<0)&&(Q>0||vt>0||Ut>0))return null;const _t=Q+vt+Ut;if(_t===0)return null;const kt=et*(Q*F+vt*k+Ut*it);return(_t>0?kt<0:kt>0)?null:this.at(kt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _i extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const il=new se,$i=new _r,Ds=new on,nl=new P,Is=new P,Us=new P,Ns=new P,Kr=new P,Fs=new P,sl=new P,Os=new P;class rt extends le{constructor(t=new ge,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Kr.fromBufferAttribute(d,t),a?Fs.addScaledVector(Kr,u):Fs.addScaledVector(Kr.sub(e),u))}e.add(Fs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Ds.containsPoint($i.origin)===!1&&($i.intersectSphere(Ds,nl)===null||$i.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(il.copy(r).invert(),$i.copy(t.ray).applyMatrix4(il),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,w=T;v<w;v+=3){const b=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);n=Bs(this,f,t,i,l,u,d,b,R,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const S=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);n=Bs(this,a,t,i,l,u,d,S,T,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,w=T;v<w;v+=3){const b=v,R=v+1,_=v+2;n=Bs(this,f,t,i,l,u,d,b,R,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const S=m,T=m+1,v=m+2;n=Bs(this,a,t,i,l,u,d,S,T,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function du(s,t,e,i,n,r,a,o){let c;if(t.side===He?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===tn,o),c===null)return null;Os.copy(o),Os.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:s}}function Bs(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,Is),s.getVertexPosition(c,Us),s.getVertexPosition(l,Ns);const u=du(s,t,e,i,Is,Us,Ns,sl);if(u){const d=new P;Ze.getBarycoord(sl,Is,Us,Ns,d),n&&(u.uv=Ze.getInterpolatedAttribute(n,o,c,l,d,new Lt)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,o,c,l,d,new Lt)),a&&(u.normal=Ze.getInterpolatedAttribute(a,o,c,l,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};Ze.getNormal(Is,Us,Ns,h.normal),u.face=h,u.barycoord=d}return u}class Mc extends Be{constructor(t=null,e=1,i=1,n,r,a,o,c,l=Pe,u=Pe,d,h){super(null,a,o,c,l,u,n,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends Ve{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Tn=new se,al=new se,zs=[],ol=new Pi,fu=new se,Jn=new rt,Qn=new on;class Bi extends rt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,fu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),ol.copy(t.boundingBox).applyMatrix4(Tn),this.boundingBox.union(ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),Qn.copy(t.boundingSphere).applyMatrix4(Tn),this.boundingSphere.union(Qn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Jn.geometry=this.geometry,Jn.material=this.material,Jn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qn.copy(this.boundingSphere),Qn.applyMatrix4(i),t.ray.intersectsSphere(Qn)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Tn),al.multiplyMatrices(i,Tn),Jn.matrixWorld=al,Jn.raycast(t,zs);for(let a=0,o=zs.length;a<o;a++){const c=zs[a];c.instanceId=r,c.object=this,e.push(c)}zs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mc(new Float32Array(n*this.count),n,this.count,io,oi));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=n*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ki=new on,pu=new Lt(.5,.5),ks=new P;class fo{constructor(t=new Gi,e=new Gi,i=new Gi,n=new Gi,r=new Gi,a=new Gi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],y=r[9],m=r[10],f=r[11],S=r[12],T=r[13],v=r[14],w=r[15];if(n[0].setComponents(l-a,p-u,f-x,w-S).normalize(),n[1].setComponents(l+a,p+u,f+x,w+S).normalize(),n[2].setComponents(l+o,p+d,f+y,w+T).normalize(),n[3].setComponents(l-o,p-d,f-y,w-T).normalize(),i)n[4].setComponents(c,h,m,v).normalize(),n[5].setComponents(l-c,p-h,f-m,w-v).normalize();else if(n[4].setComponents(l-c,p-h,f-m,w-v).normalize(),e===mi)n[5].setComponents(l+c,p+h,f+m,w+v).normalize();else if(e===ds)n[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=pu.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ks.x=n.normal.x>0?t.max.x:t.min.x,ks.y=n.normal.y>0?t.max.y:t.min.y,ks.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class po extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dr=new P,fr=new P,ll=new se,jn=new _r,Gs=new on,Zr=new P,cl=new P;class Sc extends le{constructor(t=new ge,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)dr.fromBufferAttribute(e,n-1),fr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=dr.distanceTo(fr);t.setAttribute("lineDistance",new re(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;ll.copy(n).invert(),jn.copy(t.ray).applyMatrix4(ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=p,m=x-1;y<m;y+=l){const f=u.getX(y),S=u.getX(y+1),T=Hs(this,t,jn,c,f,S,y);T&&e.push(T)}if(this.isLineLoop){const y=u.getX(x-1),m=u.getX(p),f=Hs(this,t,jn,c,y,m,x-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=p,m=x-1;y<m;y+=l){const f=Hs(this,t,jn,c,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){const y=Hs(this,t,jn,c,x-1,p,x-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hs(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(dr.fromBufferAttribute(o,n),fr.fromBufferAttribute(o,r),e.distanceSqToSegment(dr,fr,Zr,cl)>i)return;Zr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zr);if(!(l<t.near||l>t.far))return{distance:l,point:cl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const hl=new P,ul=new P;class dl extends Sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+hl.distanceTo(ul);t.setAttribute("lineDistance",new re(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xr extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fl=new se,Ya=new _r,Vs=new on,Ws=new P;class mo extends le{constructor(t=new ge,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(n),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;fl.copy(n).invert(),Ya.copy(t.ray).applyMatrix4(fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=h,y=p;x<y;x++){const m=l.getX(x);Ws.fromBufferAttribute(d,m),pl(Ws,m,c,n,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=h,y=p;x<y;x++)Ws.fromBufferAttribute(d,x),pl(Ws,x,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pl(s,t,e,i,n,r,a){const o=Ya.distanceSqToPoint(s);if(o<e){const c=new P;Ya.closestPointToPoint(s,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yc extends Be{constructor(t=[],e=en,i,n,r,a,o,c,l,u){super(t,e,i,n,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class go extends Be{constructor(t,e,i,n,r,a,o,c,l){super(t,e,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends Be{constructor(t,e,i=xi,n,r,a,o=Pe,c=Pe,l,u=Ci,d=1){if(u!==Ci&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,n,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class mu extends ps{constructor(t,e=xi,i=en,n,r,a=Pe,o=Pe,c,l=Ci){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,n,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bc extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nt extends ge{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,n,a,2),x("x","z","y",1,-1,t,i,-e,n,a,3),x("x","y","z",1,-1,t,e,i,n,r,4),x("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function x(y,m,f,S,T,v,w,b,R,_,E){const C=v/R,U=w/_,F=v/2,H=w/2,N=b/2,k=R+1,K=_+1;let W=0,it=0;const q=new P;for(let j=0;j<K;j++){const et=j*U-H;for(let Ct=0;Ct<k;Ct++){const At=Ct*C-F;q[y]=At*S,q[m]=et*T,q[f]=N,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=b>0?1:-1,u.push(q.x,q.y,q.z),d.push(Ct/R),d.push(1-j/_),W+=1}}for(let j=0;j<_;j++)for(let et=0;et<R;et++){const Ct=h+et+k*j,At=h+et+k*(j+1),ce=h+(et+1)+k*(j+1),qt=h+(et+1)+k*j;c.push(Ct,At,qt),c.push(At,ce,qt),it+=6}o.addGroup(p,it,E),p+=it,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _o extends ge{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new Lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=i+d/e*n;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ge{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),r=Math.floor(r);const u=[],d=[],h=[],p=[];let x=0;const y=[],m=i/2;let f=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(p,2));function S(){const v=new P,w=new P;let b=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const E=[],C=_/r,U=C*(e-t)+t;for(let F=0;F<=n;F++){const H=F/n,N=H*c+o,k=Math.sin(N),K=Math.cos(N);w.x=U*k,w.y=-C*i+m,w.z=U*K,d.push(w.x,w.y,w.z),v.set(k,R,K).normalize(),h.push(v.x,v.y,v.z),p.push(H,1-C),E.push(x++)}y.push(E)}for(let _=0;_<n;_++)for(let E=0;E<r;E++){const C=y[E][_],U=y[E+1][_],F=y[E+1][_+1],H=y[E][_+1];(t>0||E!==0)&&(u.push(C,U,H),b+=3),(e>0||E!==r-1)&&(u.push(U,F,H),b+=3)}l.addGroup(f,b,0),f+=b}function T(v){const w=x,b=new Lt,R=new P;let _=0;const E=v===!0?t:e,C=v===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),x++;const U=x;for(let F=0;F<=n;F++){const N=F/n*c+o,k=Math.cos(N),K=Math.sin(N);R.x=E*K,R.y=m*C,R.z=E*k,d.push(R.x,R.y,R.z),h.push(0,C,0),b.x=k*.5+.5,b.y=K*.5*C+.5,p.push(b.x,b.y),x++}for(let F=0;F<n;F++){const H=w+F,N=U+F;v===!0?u.push(N,N+1,H):u.push(N+1,N,H),_+=3}l.addGroup(f,_,v===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ri extends me{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ri(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vr extends ge{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),l(i),u(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new P,v=new P,w=new P;for(let b=0;b<e.length;b+=3)p(e[b+0],T),p(e[b+1],v),p(e[b+2],w),c(T,v,w,S)}function c(S,T,v,w){const b=w+1,R=[];for(let _=0;_<=b;_++){R[_]=[];const E=S.clone().lerp(v,_/b),C=T.clone().lerp(v,_/b),U=b-_;for(let F=0;F<=U;F++)F===0&&_===b?R[_][F]=E:R[_][F]=E.clone().lerp(C,F/U)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){const C=Math.floor(E/2);E%2===0?(h(R[_][C+1]),h(R[_+1][C]),h(R[_][C])):(h(R[_][C+1]),h(R[_+1][C+1]),h(R[_+1][C]))}}function l(S){const T=new P;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(S),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function u(){const S=new P;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];const v=m(S)/2/Math.PI+.5,w=f(S)/Math.PI+.5;a.push(v,1-w)}x(),d()}function d(){for(let S=0;S<a.length;S+=6){const T=a[S+0],v=a[S+2],w=a[S+4],b=Math.max(T,v,w),R=Math.min(T,v,w);b>.9&&R<.1&&(T<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,T){const v=S*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function x(){const S=new P,T=new P,v=new P,w=new P,b=new Lt,R=new Lt,_=new Lt;for(let E=0,C=0;E<r.length;E+=9,C+=6){S.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),w.copy(S).add(T).add(v).divideScalar(3);const U=m(w);y(b,C+0,S,U),y(R,C+2,T,U),y(_,C+4,v,U)}}function y(S,T,v,w){w<0&&S.x===1&&(a[T]=S.x-1),v.x===0&&v.z===0&&(a[T]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.vertices,t.indices,t.radius,t.detail)}}class In extends vr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new In(t.radius,t.detail)}}const Xs=new P,qs=new P,Jr=new P,Ys=new Ze;class gu extends ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(Fn*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);const{a:y,b:m,c:f}=Ys;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ys.getNormal(Jr),d[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const T=(S+1)%3,v=d[S],w=d[T],b=Ys[u[S]],R=Ys[u[T]],_=`${v}_${w}`,E=`${w}_${v}`;E in h&&h[E]?(Jr.dot(h[E].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(R.x,R.y,R.z)),h[E]=null):_ in h||(h[_]={index0:l[S],index1:l[T],normal:Jr.clone()})}}for(const x in h)if(h[x]){const{index0:y,index1:m}=h[x];Xs.fromBufferAttribute(o,y),qs.fromBufferAttribute(o,m),p.push(Xs.x,Xs.y,Xs.z),p.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new re(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xo extends vr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xo(t.radius,t.detail)}}class rn extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,d=t/o,h=e/c,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const S=f*h-a;for(let T=0;T<l;T++){const v=T*d-r;x.push(v,-S,0),y.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const T=S+l*f,v=S+l*(f+1),w=S+1+l*(f+1),b=S+1+l*f;p.push(T,v,b),p.push(v,w,b)}this.setIndex(p),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ms extends ge{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/n,p=new P,x=new Lt;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,u.push(x.x,x.y)}d+=h}for(let y=0;y<n;y++){const m=y*(i+1);for(let f=0;f<i;f++){const S=f+m,T=S,v=S+i+1,w=S+i+2,b=S+1;o.push(T,v,b),o.push(v,w,b)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vo extends ge{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new P,h=new P,p=[],x=[],y=[],m=[];for(let f=0;f<=i;f++){const S=[],T=f/i,v=a+T*o,w=t*Math.cos(v),b=Math.sqrt(t*t-w*w);let R=0;f===0&&a===0?R=.5/e:f===i&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const E=_/e,C=n+E*r;d.x=-b*Math.cos(C),d.y=w,d.z=b*Math.sin(C),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(E+R,1-T),S.push(l++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<e;S++){const T=u[f][S+1],v=u[f][S],w=u[f+1][S],b=u[f+1][S+1];(f!==0||a>0)&&p.push(T,v,b),(f!==i-1||c<Math.PI)&&p.push(v,w,b)}this.setIndex(p),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Gn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(ml(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(ml(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const i=Gn(s[e]);for(const n in i)t[n]=i[n]}return t}function ml(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _u(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Ec={clone:Gn,merge:Ge};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gn(t.uniforms),this.uniformsGroups=_u(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new It().setHex(n.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new se().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Mu extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Su extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yu extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mo extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Tc extends Mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Qr=new se,gl=new P,_l=new P;class Ac{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(gl),_l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_l),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Qr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $s=new P,Ks=new Hn,di=new P;class Rc extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($s,Ks,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose($s,Ks,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new P,xl=new Lt,vl=new Lt;class Xe extends Rc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Fn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,xl,vl),e.subVectors(vl,xl)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class bu extends Ac{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}}class ji extends Mo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class So extends Rc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wu extends Ac{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pr extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const An=-90,Rn=1;class Eu extends le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xe(An,Rn,t,e);n.layers=this.layers,this.add(n);const r=new Xe(An,Rn,t,e);r.layers=this.layers,this.add(r);const a=new Xe(An,Rn,t,e);a.layers=this.layers,this.add(a);const o=new Xe(An,Rn,t,e);o.layers=this.layers,this.add(o);const c=new Xe(An,Rn,t,e);c.layers=this.layers,this.add(c);const l=new Xe(An,Rn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Tu extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ml=new se;class gs{constructor(t,e,i=0,n=1/0){this.ray=new _r(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ml.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ml),this}intersectObject(t,e=!0,i=[]){return $a(t,this,i,e),i.sort(Sl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)$a(t[n],this,i,e);return i.sort(Sl),i}}function Sl(s,t){return s.distance-t.distance}function $a(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)$a(r[a],t,e,!0)}}const To=class To{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};To.prototype.isMatrix2=!0;let yl=To;function bl(s,t,e,i){const n=Au(i);switch(e){case hc:return s*t;case io:return s*t/n.components*n.byteLength;case no:return s*t/n.components*n.byteLength;case nn:return s*t*2/n.components*n.byteLength;case so:return s*t*2/n.components*n.byteLength;case uc:return s*t*3/n.components*n.byteLength;case li:return s*t*4/n.components*n.byteLength;case ro:return s*t*4/n.components*n.byteLength;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ir:case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:case xa:return Math.max(s,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(s,8)*Math.max(t,8)/2;case va:case Ma:case ya:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:case rr:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case za:case ka:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ha:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ar:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Au(s){switch(s){case Ke:case ac:return{byteLength:1,components:1};case hs:case oc:case vi:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case xi:case ja:case oi:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);function Cc(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ru(s){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const y=d[p];s.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Iu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Gu,iridescence_fragment:Hu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:$u,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:Qu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:id,emissivemap_fragment:nd,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Sd,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:vd,lights_pars_begin:Md,lights_toon_fragment:yd,lights_toon_pars_fragment:bd,lights_phong_fragment:wd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,lightprobes_pars_fragment:Ld,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Gd,morphinstance_vertex:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:$d,normal_pars_fragment:Kd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:xf,skinnormal_vertex:vf,specularmap_fragment:Mf,specularmap_pars_fragment:Sf,tonemapping_fragment:yf,tonemapping_pars_fragment:bf,transmission_fragment:wf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:Rf,worldpos_vertex:Cf,background_vert:Pf,background_frag:Lf,backgroundCube_vert:Df,backgroundCube_frag:If,cube_vert:Uf,cube_frag:Nf,depth_vert:Ff,depth_frag:Of,distance_vert:Bf,distance_frag:zf,equirect_vert:kf,equirect_frag:Gf,linedashed_vert:Hf,linedashed_frag:Vf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:Yf,meshmatcap_vert:$f,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Qf,meshphong_frag:jf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:ip,meshtoon_frag:np,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},pi={basic:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ge([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ge([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ge([dt.points,dt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ge([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ge([dt.common,dt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ge([dt.sprite,dt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Ge([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Ge([dt.lights,dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};pi.physical={uniforms:Ge([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Zs={r:0,b:0,g:0},hp=new se,Pc=new Nt;Pc.set(-1,0,0,0,1,0,0,0,1);function up(s,t,e,i,n,r){const a=new It(0);let o=n===!0?0:1,c,l,u=null,d=0,h=null;function p(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const v=S.backgroundBlurriness>0;T=t.get(T,v)}return T}function x(S){let T=!1;const v=p(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,T){const v=p(T);v&&(v.isCubeTexture||v.mapping===gr)?(l===void 0&&(l=new rt(new nt(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Gn(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pc),l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ie,(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new rt(new rn(2,2),new ti({name:"BackgroundMaterial",uniforms:Gn(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,T){S.getRGB(Zs,wc(s)),e.buffers.color.setClear(Zs.r,Zs.g,Zs.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:x,addToRenderList:y,dispose:f}}function dp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,a=!1;function o(U,F,H,N,k){let K=!1;const W=d(U,N,H,F);r!==W&&(r=W,l(r.object)),K=p(U,N,H,k),K&&x(U,N,H,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(U,F,H,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function l(U){return s.bindVertexArray(U)}function u(U){return s.deleteVertexArray(U)}function d(U,F,H,N){const k=N.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const W=U.isInstancedMesh===!0?U.id:0;let it=K[W];it===void 0&&(it={},K[W]=it);let q=it[H.id];q===void 0&&(q={},it[H.id]=q);let j=q[k];return j===void 0&&(j=h(c()),q[k]=j),j}function h(U){const F=[],H=[],N=[];for(let k=0;k<e;k++)F[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function p(U,F,H,N){const k=r.attributes,K=F.attributes;let W=0;const it=H.getAttributes();for(const q in it)if(it[q].location>=0){const et=k[q];let Ct=K[q];if(Ct===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Ct=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Ct=U.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function x(U,F,H,N){const k={},K=F.attributes;let W=0;const it=H.getAttributes();for(const q in it)if(it[q].location>=0){let et=K[q];et===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));const Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),k[q]=Ct,W++}r.attributes=k,r.attributesNum=W,r.index=N}function y(){const U=r.newAttributes;for(let F=0,H=U.length;F<H;F++)U[F]=0}function m(U){f(U,0)}function f(U,F){const H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[U]=1,N[U]===0&&(s.enableVertexAttribArray(U),N[U]=1),k[U]!==F&&(s.vertexAttribDivisor(U,F),k[U]=F)}function S(){const U=r.newAttributes,F=r.enabledAttributes;for(let H=0,N=F.length;H<N;H++)F[H]!==U[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function T(U,F,H,N,k,K,W){W===!0?s.vertexAttribIPointer(U,F,H,k,K):s.vertexAttribPointer(U,F,H,N,k,K)}function v(U,F,H,N){y();const k=N.attributes,K=H.getAttributes(),W=F.defaultAttributeValues;for(const it in K){const q=K[it];if(q.location>=0){let j=k[it];if(j===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const et=j.normalized,Ct=j.itemSize,At=t.get(j);if(At===void 0)continue;const ce=At.buffer,qt=At.type,Zt=At.bytesPerElement,Y=qt===s.INT||qt===s.UNSIGNED_INT||j.gpuType===ja;if(j.isInterleavedBufferAttribute){const Q=j.data,vt=Q.stride,Ut=j.offset;if(Q.isInstancedInterleavedBuffer){for(let _t=0;_t<q.locationSize;_t++)f(q.location+_t,Q.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let _t=0;_t<q.locationSize;_t++)T(q.location+_t,Ct/q.locationSize,qt,et,vt*Zt,(Ut+Ct/q.locationSize*_t)*Zt,Y)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)f(q.location+Q,j.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Q=0;Q<q.locationSize;Q++)T(q.location+Q,Ct/q.locationSize,qt,et,Ct*Zt,Ct/q.locationSize*Q*Zt,Y)}}else if(W!==void 0){const et=W[it];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}S()}function w(){E();for(const U in i){const F=i[U];for(const H in F){const N=F[H];for(const k in N){const K=N[k];for(const W in K)u(K[W].object),delete K[W];delete N[k]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const H in F){const N=F[H];for(const k in N){const K=N[k];for(const W in K)u(K[W].object),delete K[W];delete N[k]}}delete i[U.id]}function R(U){for(const F in i){const H=i[F];for(const N in H){const k=H[N];if(k[U.id]===void 0)continue;const K=k[U.id];for(const W in K)u(K[W].object),delete K[W];delete k[U.id]}}}function _(U){for(const F in i){const H=i[F],N=U.isInstancedMesh===!0?U.id:0,k=H[N];if(k!==void 0){for(const K in k){const W=k[K];for(const it in W)u(W[it].object),delete W[it];delete k[K]}delete H[N],Object.keys(H).length===0&&delete i[F]}}}function E(){C(),a=!0,r!==n&&(r=n,l(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function fp(s,t,e){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==li&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ke&&R!==oi&&!_&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:v,maxSamples:w,samples:b}}function mp(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Gi,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||n;return n=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||x===null||x.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,T=S*4;let v=f.clippingState||null;c.value=v,v=u(x,h,T,p);for(let w=0;w!==T;++w)v[w]=e[w];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,x!==!0||m===null){const f=p+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,v=p;T!==y;++T,v+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Un=4,gp=6,_p=20,xp=256,ts=new So,wl=new It;let jr=null,ta=0,ea=0,ia=!1;const vp=new P,Zi=new P;class El{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=vp}=r;jr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,ta,ea),this._renderer.xr.enabled=ia,t.scissorTest=!1,Cn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===en||t.mapping===zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:vi,format:li,colorSpace:or,depthBuffer:!1},n=Tl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mp(r)),this._blurMaterial=yp(r,t,e),this._ggxMaterial=Sp(r,t,e)}return n}_compileMaterial(t){const e=new rt(new ge,t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,i,n,r){const c=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(wl),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new nt,new _i({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(wl),f=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const w=this._cubeSize;Cn(n,v*w,T>2?w:0,w,w),d.setRenderTarget(n),f&&d.render(y,c),d.render(t,c)}d.toneMapping=p,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===en||t.mapping===zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Cn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ts)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:x}=this,y=this._sizeLods[i],m=3*y*(i>x-Un?i-x+Un:0),f=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=x-e,Cn(r,m,f,3*y,2*y),n.setRenderTarget(r),n.render(o,ts),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Cn(t,m,f,3*y,2*y),n.setRenderTarget(t),n.render(o,ts)}_blur(t,e,i,n){const r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[n];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[n],d=3*u*(n>this._lodMax-Un?n-this._lodMax+Un:0),h=4*(this._cubeSize-u);Cn(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(c,ts)}}function Mp(s){const t=[],e=[];let i=s;const n=s-Un+1+gp;for(let r=0;r<n;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,x=new Float32Array(p*h*d),y=new Float32Array(p*h*d);for(let f=0;f<d;f++){const S=f%3*2/3-1,T=f>2?0:-1,v=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];x.set(v,p*h*f);for(let w=0;w<h;w++){const b=u[w*2]*2-1,R=u[w*2+1]*2-1;f===0?Zi.set(1,R,b):f===1?Zi.set(-b,1,-R):f===2?Zi.set(-b,R,1):f===3?Zi.set(-1,R,-b):f===4?Zi.set(-b,-1,R):Zi.set(b,R,-1),Zi.toArray(y,(f*h+w)*p)}}const m=new ge;m.setAttribute("position",new Ve(x,p)),m.setAttribute("outputDirection",new Ve(y,p)),e.push(new rt(m,null)),i>Un&&i--}return{lodMeshes:e,sizeLods:t}}function Tl(s,t,e){const i=new ci(s,t,e);return i.texture.mapping=gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Sp(s,t,e){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yp(s,t,e){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Al(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Rl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Mr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lc extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new yc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new nt(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Ti});r.uniforms.tEquirect.value=e;const a=new rt(n,r),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Oe),new Eu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}function bp(s){let t=new WeakMap,e=new WeakMap,i=null;function n(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Er||p===Tr)if(t.has(h)){const x=t.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new Lc(x.height);return y.fromEquirectangularTexture(s,h),t.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,x=p===Er||p===Tr,y=p===en||p===zn;if(x||y){let m=e.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new El(s)),m=x?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return x&&S&&S.height>0||y&&S&&c(S)?(i===null&&(i=new El(s)),m=x?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Er?h.mapping=en:p===Tr&&(h.mapping=zn),h}function c(h){let p=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&p++;return p===x}function l(h){const p=h.target;p.removeEventListener("dispose",l);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function wp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Nn("WebGLRenderer: "+i+" extension not supported."),n}}}function Ep(s,t,e,i){const n={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete n[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],s.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,x=d.attributes.position;let y=0;if(x===void 0)return;if(p!==null){const S=p.array;y=p.version;for(let T=0,v=S.length;T<v;T+=3){const w=S[T+0],b=S[T+1],R=S[T+2];h.push(w,b,b,R,R,w)}}else{const S=x.array;y=x.version;for(let T=0,v=S.length/3-1;T<v;T+=3){const w=T+0,b=T+1,R=T+2;h.push(w,b,b,R,R,w)}}const m=new(x.count>=65535?xc:_c)(h,1);m.version=y;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Tp(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){s.drawElements(i,h,r,d*a),e.update(h,i,1)}function l(d,h,p){p!==0&&(s.drawElementsInstanced(i,h,r,d*a,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ap(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Rp(s,t,e){const i=new WeakMap,n=new xe;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*b*4*d),_=new pc(R,w,b,d);_.type=oi,_.needsUpdate=!0;const E=v*4;for(let U=0;U<d;U++){const F=f[U],H=S[U],N=T[U],k=w*b*4*U;for(let K=0;K<F.count;K++){const W=K*E;x===!0&&(n.fromBufferAttribute(F,K),R[k+W+0]=n.x,R[k+W+1]=n.y,R[k+W+2]=n.z,R[k+W+3]=0),y===!0&&(n.fromBufferAttribute(H,K),R[k+W+4]=n.x,R[k+W+5]=n.y,R[k+W+6]=n.z,R[k+W+7]=0),m===!0&&(n.fromBufferAttribute(N,K),R[k+W+8]=n.x,R[k+W+9]=n.y,R[k+W+10]=n.z,R[k+W+11]=N.itemSize===4?n.w:1)}}h={count:d,texture:_,size:new Lt(w,b)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const y=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Cp(s,t,e,i,n){let r=new WeakMap;function a(l){const u=n.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Pp={[jl]:"LINEAR_TONE_MAPPING",[tc]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[Qa]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function Lp(s,t,e,i,n,r){const a=new ci(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ge;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));const u=new Mu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new rt(l,u),h=new So(-1,1,1,-1,0,1);let p=null,x=null,y=!1,m,f=null,S=[],T=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),c!==null&&c.setSize(v,w);for(let b=0;b<S.length;b++){const R=S[b];R.setSize&&R.setSize(v,w)}},this.setEffects=function(v){S=v,T=S.length>0&&S[0].isRenderPass===!0;const w=a.width,b=a.height;S.length>0&&o===null&&(o=new ci(w,b,{type:vi,depthBuffer:!1,stencilBuffer:!1}),c=new ci(w,b,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const _=S[R];_.setSize&&_.setSize(w,b)}},this.begin=function(v,w){if(y||v.toneMapping===gi&&S.length===0)return!1;if(f=w,w!==null){const b=w.width,R=w.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=gi,!0},this.hasRenderPass=function(){return T},this.end=function(v,w){v.toneMapping=m,y=!0;let b=a,R=o;for(let _=0;_<S.length;_++){const E=S[_];E.enabled!==!1&&(E.render(v,R,b,w),E.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,u.defines={},Xt.getTransfer(p)===ie&&(u.defines.SRGB_TRANSFER="");const _=Pp[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(f),v.render(d,h),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Dc=new Be,Ka=new ps(1,1),Ic=new pc,Uc=new Jh,Nc=new yc,Cl=[],Pl=[],Ll=new Float32Array(16),Dl=new Float32Array(9),Il=new Float32Array(4);function Vn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Cl[n];if(r===void 0&&(r=new Float32Array(n),Cl[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Sr(s,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Fp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Il.set(i),s.uniformMatrix2fv(this.addr,!1,Il),Te(e,i)}}function Op(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Dl.set(i),s.uniformMatrix3fv(this.addr,!1,Dl),Te(e,i)}}function Bp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Ll.set(i),s.uniformMatrix4fv(this.addr,!1,Ll),Te(e,i)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function Vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function Yp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ka.compareFunction=e.isReversedDepthBuffer()?oo:ao,r=Ka):r=Dc,e.setTexture2D(t||r,n)}function $p(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Uc,n)}function Kp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Nc,n)}function Zp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ic,n)}function Jp(s){switch(s){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(s,t){s.uniform1fv(this.addr,t)}function jp(s,t){const e=Vn(t,this.size,2);s.uniform2fv(this.addr,e)}function tm(s,t){const e=Vn(t,this.size,3);s.uniform3fv(this.addr,e)}function em(s,t){const e=Vn(t,this.size,4);s.uniform4fv(this.addr,e)}function im(s,t){const e=Vn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nm(s,t){const e=Vn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sm(s,t){const e=Vn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rm(s,t){s.uniform1iv(this.addr,t)}function am(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function lm(s,t){s.uniform4iv(this.addr,t)}function cm(s,t){s.uniform1uiv(this.addr,t)}function hm(s,t){s.uniform2uiv(this.addr,t)}function um(s,t){s.uniform3uiv(this.addr,t)}function dm(s,t){s.uniform4uiv(this.addr,t)}function fm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ka:a=Dc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function pm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Uc,r[a])}function mm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Nc,r[a])}function gm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ic,r[a])}function _m(s){switch(s){case 5126:return Qp;case 35664:return jp;case 35665:return tm;case 35666:return em;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class xm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Ul(s,t){s.seq.push(t),s.map[t.id]=t}function Sm(s,t,e){const i=s.name,n=i.length;for(na.lastIndex=0;;){const r=na.exec(i),a=na.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){Ul(e,l===void 0?new xm(o,s,t):new vm(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Mm(o),Ul(e,d)),e=d}}}class sr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Sm(o,c,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Nl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const ym=37297;let bm=0;function wm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Fl=new Nt;function Em(s){Xt._getMatrix(Fl,Xt.workingColorSpace,s);const t=`mat3( ${Fl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case lr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ol(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wm(s.getShaderSource(t),o)}else return r}function Tm(s,t){const e=Em(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Am={[jl]:"Linear",[tc]:"Reinhard",[ec]:"Cineon",[Qa]:"ACESFilmic",[nc]:"AgX",[sc]:"Neutral",[ic]:"Custom"};function Rm(s,t){const e=Am[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new P;function Cm(){Xt.getLuminanceCoefficients(Js);const s=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Lm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ns(s){return s!==""}function Bl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(s){return s.replace(Im,Nm)}const Um=new Map;function Nm(s,t){let e=zt[t];if(e===void 0){const i=Um.get(t);if(i!==void 0)e=zt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Za(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(s){return s.replace(Fm,Om)}function Om(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Gl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Bm={[ss]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function zm(s){return Bm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const km={[en]:"ENVMAP_TYPE_CUBE",[zn]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function Gm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":km[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hm={[zn]:"ENVMAP_MODE_REFRACTION"};function Vm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Hm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wm={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function Xm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Wm[s.combine]||"ENVMAP_BLENDING_NONE"}function qm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ym(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=zm(e),l=Gm(e),u=Vm(e),d=Xm(e),h=qm(e),p=Pm(e),x=Lm(r),y=n.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?zt.tonemapping_pars_fragment:"",e.toneMapping!==gi?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Tm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=Za(a),a=Bl(a,e),a=zl(a,e),o=Za(o),o=Bl(o,e),o=zl(o,e),a=kl(a),o=kl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=S+m+a,v=S+f+o,w=Nl(n,n.VERTEX_SHADER,T),b=Nl(n,n.FRAGMENT_SHADER,v);n.attachShader(y,w),n.attachShader(y,b),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function R(U){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(y)||"",H=n.getShaderInfoLog(w)||"",N=n.getShaderInfoLog(b)||"",k=F.trim(),K=H.trim(),W=N.trim();let it=!0,q=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,w,b);else{const j=Ol(n,w,"vertex"),et=Ol(n,b,"fragment");Yt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+j+`
`+et)}else k!==""?Dt("WebGLProgram: Program Info Log:",k):(K===""||W==="")&&(q=!1);q&&(U.diagnostics={runnable:it,programLog:k,vertexShader:{log:K,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(w),n.deleteShader(b),_=new sr(n,y),E=Dm(n,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(y,ym)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}let $m=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Zm(t),e.set(t,i)),i}}class Zm{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function Jm(s){return s===nn||s===rr||s===ar}function Qm(s,t,e,i,n,r){const a=new ho,o=new Km,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,E,C,U,F,H){const N=U.fog,k=F.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||K,W),q=it&&it.mapping===gr?it.image.height:null,j=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=et!==void 0?et.length:0;let At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let ce,qt,Zt,Y;if(j){const ue=pi[j];ce=ue.vertexShader,qt=ue.fragmentShader}else{ce=_.vertexShader,qt=_.fragmentShader;const ue=o.getVertexShaderStage(_),Qt=o.getFragmentShaderStage(_);o.update(_,ue,Qt),Zt=ue.id,Y=Qt.id}const Q=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,kt=!!_.map,be=!!_.matcap,Gt=!!it,Kt=!!_.aoMap,he=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Ae=!!_.displacementMap,We=!!_.emissiveMap,_e=!!_.metalnessMap,Me=!!_.roughnessMap,I=_.anisotropy>0,Le=_.clearcoat>0,te=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,G=_.transmission>0,X=I&&!!_.anisotropyMap,st=Le&&!!_.clearcoatMap,at=Le&&!!_.clearcoatNormalMap,$=Le&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,ot=g&&!!_.iridescenceThicknessMap,Et=O&&!!_.sheenColorMap,ut=O&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Tt=!!_.specularColorMap,Pt=!!_.specularIntensityMap,Ft=G&&!!_.transmissionMap,D=G&&!!_.thicknessMap,ct=!!_.gradientMap,Z=!!_.alphaMap,ht=_.alphaTest>0,mt=!!_.alphaHash,tt=!!_.extensions;let Rt=gi;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const bt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:qt,defines:_.defines,customVertexShaderID:Zt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:be,envMap:Gt,envMapMode:Gt&&it.mapping,envMapCubeUVHeight:q,aoMap:Kt,lightMap:he,bumpMap:Vt,normalMap:pe,displacementMap:Ae,emissiveMap:We,normalMapObjectSpace:pe&&_.normalMapType===xh,normalMapTangentSpace:pe&&_.normalMapType===Xa,packedNormalMap:pe&&_.normalMapType===Xa&&Jm(_.normalMap.format),metalnessMap:_e,roughnessMap:Me,anisotropy:I,anisotropyMap:X,clearcoat:Le,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:$,dispersion:te,retroreflection:A,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Pt,transmission:G,transmissionMap:Ft,thicknessMap:D,gradientMap:ct,opaque:_.transparent===!1&&_.blending===rs&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:mt,combine:_.combine,mapUv:kt&&x(_.map.channel),aoMapUv:Kt&&x(_.aoMap.channel),lightMapUv:he&&x(_.lightMap.channel),bumpMapUv:Vt&&x(_.bumpMap.channel),normalMapUv:pe&&x(_.normalMap.channel),displacementMapUv:Ae&&x(_.displacementMap.channel),emissiveMapUv:We&&x(_.emissiveMap.channel),metalnessMapUv:_e&&x(_.metalnessMap.channel),roughnessMapUv:Me&&x(_.roughnessMap.channel),anisotropyMapUv:X&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(_.sheenRoughnessMap.channel),specularMapUv:lt&&x(_.specularMap.channel),specularColorMapUv:Tt&&x(_.specularColorMap.channel),specularIntensityMapUv:Pt&&x(_.specularIntensityMap.channel),transmissionMapUv:Ft&&x(_.transmissionMap.channel),thicknessMapUv:D&&x(_.thicknessMap.channel),alphaMapUv:Z&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pe||I),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(kt||Z),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:We&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:tt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(E,_),S(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const E=p[_.type];let C;if(E){const U=pi[E];C=Ec.clone(U.uniforms)}else C=_.uniforms;return C}function v(_,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new Ym(s,E,_,n),l.push(C),u.set(E,C)),C}function w(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:R}}function jm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function t0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Hl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,y,m,f){let S=s[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},s[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=x,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=f),t++,S}function c(h,p,x,y,m,f,S){S.reversedDepth===!0&&(m=-m);const T=o(h,p,x,y,m,f);x.transmission>0?i.push(T):x.transparent===!0?n.push(T):e.push(T)}function l(h,p,x,y,m,f){const S=o(h,p,x,y,m,f);x.transmission>0?i.unshift(S):x.transparent===!0?n.unshift(S):e.unshift(S)}function u(h,p){e.length>1&&e.sort(h||t0),i.length>1&&i.sort(p||Hl),n.length>1&&n.sort(p||Hl)}function d(){for(let h=t,p=s.length;h<p;h++){const x=s[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:d,sort:u}}function e0(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Vl,s.set(i,[a])):n>=r.length?(a=new Vl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function i0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function n0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let s0=0;function r0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a0(s){const t=new i0,e=n0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const n=new P,r=new se,a=new se;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,x=0,y=0,m=0,f=0,S=0,T=0,v=0,w=0,b=0,R=0,_=0,E=0,C=0;l.sort(r0);for(let F=0,H=l.length;F<H;F++){const N=l[F],k=N.color,K=N.intensity,W=N.distance;let it=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===nn?it=N.shadow.map.texture:it=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*K,d+=k.g*K,h+=k.b*K;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],K);C++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=et,i.sunShadowMap[x]=it;const Ct=j.getViewportCount();for(let At=0;At<Ct;At++)i.sunShadowMatrix[y+At]=j.getMatrix(At),i.sunShadowCascade[y+At]=j._cascadeData[At];y+=Ct,x++}i.sun[p]=q,p++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=q,m++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(K),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[S]=q;const j=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,j.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[S]=j.matrix,N.castShadow){const et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[S]=et,i.spotShadowMap[S]=it,R++}S++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(k).multiplyScalar(K),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=q,T++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[f]=et,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=N.shadow.matrix,b++}i.point[f]=q,f++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(K),q.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[v]=q,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==S||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==x||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==R||U.numSpotMaps!==_||U.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=T,i.point.length=f,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=S,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=x,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=R,U.numSpotMaps=_,U.numLightProbes=C,i.version=s0++)}function c(l,u){let d=0,h=0,p=0,x=0,y=0,m=0;const f=u.matrixWorldInverse;for(let S=0,T=l.length;S<T;S++){const v=l[S];if(v.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),d++}else if(v.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(f),h++}else if(v.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(f),x++}else if(v.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Wl(s){const t=new a0(s),e=[],i=[],n=[];function r(h){d.camera=h,e.length=0,i.length=0,n.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){n.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function o0(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Wl(s),t.set(n,[o])):r>=a.length?(o=new Wl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,h0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],u0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Xl=new se,es=new P,sa=new P;function d0(s,t,e){let i=new fo;const n=new Lt,r=new Lt,a=new xe,o=new Su,c=new yu,l={},u=e.maxTextureSize,d={[tn]:He,[He]:tn,[qe]:qe},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ge;x.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let f=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Kc&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);const E=s.getRenderTarget(),C=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==this.type;H&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){const K=b[N],W=K.shadow;if(W===void 0){Dt("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const it=W.getFrameExtents();n.multiply(it),r.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/it.x),n.x=r.x*it.x,W.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/it.y),n.y=r.y*it.y,W.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===is){if(K.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ci(n.x,n.y,{format:nn,type:vi,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new ps(n.x,n.y,oi),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=Ci,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pe,W.map.depthTexture.magFilter=Pe}else K.isPointLight?(W.map=new Lc(n.x),W.map.depthTexture=new mu(n.x,xi)):(W.map=new ci(n.x,n.y),W.map.depthTexture=new ps(n.x,n.y,xi)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=Ci,this.type===ss?(W.map.depthTexture.compareFunction=q?oo:ao,W.map.depthTexture.minFilter=Oe,W.map.depthTexture.magFilter=Oe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pe,W.map.depthTexture.magFilter=Pe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,_);for(let et=0;et<j;et++){const Ct=W.getCamera(et);if(K.isPointLight){const At=W.camera,ce=W.matrix,qt=K.distance||At.far;qt!==At.far&&(At.far=qt,At.updateProjectionMatrix()),es.setFromMatrixPosition(K.matrixWorld),At.position.copy(es),sa.copy(At.position),sa.add(h0[et]),At.up.copy(u0[et]),At.lookAt(sa),At.updateMatrixWorld(),ce.makeTranslation(-es.x,-es.y,-es.z),Xl.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xl,At.coordinateSystem,At.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,et),s.clear();else{et===0&&(s.setRenderTarget(W.map),s.clear());const At=W.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}i=W.getFrustum(et),v(R,_,Ct,K,this.type)}W.isPointLightShadow!==!0&&this.type===is&&S(W,_),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,C,U)};function S(b,R){const _=t.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new ci(n.x,n.y,{format:nn,type:vi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,_,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,_,p,y,null)}function T(b,R,_,E){let C=null;const U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)C=U;else if(C=_.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,H=R.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let k=N[H];k===void 0&&(k=C.clone(),N[H]=k,R.addEventListener("dispose",w)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,E===is?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=s.properties.get(C);F.light=_}return C}function v(b,R,_,E,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===is)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const H=t.update(b),N=b.material;if(Array.isArray(N)){const k=H.groups;for(let K=0,W=k.length;K<W;K++){const it=k[K],q=N[it.materialIndex];if(q&&q.visible){const j=T(b,q,E,C);b.onBeforeShadow(s,b,R,_,H,j,it),s.renderBufferDirect(_,null,H,j,b,it),b.onAfterShadow(s,b,R,_,H,j,it)}}}else if(N.visible){const k=T(b,N,E,C);b.onBeforeShadow(s,b,R,_,H,k,null),s.renderBufferDirect(_,null,H,k,b,null),b.onAfterShadow(s,b,R,_,H,k,null)}}const F=b.children;for(let H=0,N=F.length;H<N;H++)v(F[H],R,_,E,C)}function w(b){b.target.removeEventListener("dispose",w);for(const _ in l){const E=l[_],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function f0(s,t){function e(){let D=!1;const ct=new xe;let Z=null;const ht=new xe(0,0,0,0);return{setMask:function(mt){Z!==mt&&!D&&(s.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){D=mt},setClear:function(mt,tt,Rt,bt,ue){ue===!0&&(mt*=bt,tt*=bt,Rt*=bt),ct.set(mt,tt,Rt,bt),ht.equals(ct)===!1&&(s.clearColor(mt,tt,Rt,bt),ht.copy(ct))},reset:function(){D=!1,Z=null,ht.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,Z=null,ht=null,mt=null;return{setReversed:function(tt){if(ct!==tt){const Rt=t.get("EXT_clip_control");tt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ct=tt;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(tt){tt?Q(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!D&&(s.depthMask(tt),Z=tt)},setFunc:function(tt){if(ct&&(tt=Ch[tt]),ht!==tt){switch(tt){case oa:s.depthFunc(s.NEVER);break;case la:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=tt}},setLocked:function(tt){D=tt},setClear:function(tt){mt!==tt&&(mt=tt,ct&&(tt=1-tt),s.clearDepth(tt))},reset:function(){D=!1,Z=null,ht=null,mt=null,ct=!1}}}function n(){let D=!1,ct=null,Z=null,ht=null,mt=null,tt=null,Rt=null,bt=null,ue=null;return{setTest:function(Qt){D||(Qt?Q(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!D&&(s.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,ei,hi){(Z!==Qt||ht!==ei||mt!==hi)&&(s.stencilFunc(Qt,ei,hi),Z=Qt,ht=ei,mt=hi)},setOp:function(Qt,ei,hi){(tt!==Qt||Rt!==ei||bt!==hi)&&(s.stencilOp(Qt,ei,hi),tt=Qt,Rt=ei,bt=hi)},setLocked:function(Qt){D=Qt},setClear:function(Qt){ue!==Qt&&(s.clearStencil(Qt),ue=Qt)},reset:function(){D=!1,ct=null,Z=null,ht=null,mt=null,tt=null,Rt=null,bt=null,ue=null}}}const r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,x=[],y=null,m=!1,f=null,S=null,T=null,v=null,w=null,b=null,R=null,_=new It(0,0,0),E=0,C=!1,U=null,F=null,H=null,N=null,k=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,it=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=it>=2);let j=null,et={};const Ct=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),ce=new xe().fromArray(Ct),qt=new xe().fromArray(At);function Zt(D,ct,Z,ht){const mt=new Uint8Array(4),tt=s.createTexture();s.bindTexture(D,tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<Z;Rt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return tt}const Y={};Y[s.TEXTURE_2D]=Zt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(ls),Vt(!1),pe(Oo),Q(s.CULL_FACE),Kt(Ti);function Q(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function vt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ut(D,ct){return h[D]!==ct?(s.bindFramebuffer(D,ct),h[D]=ct,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ct),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function _t(D,ct){let Z=x,ht=!1;if(D){Z=p.get(ct),Z===void 0&&(Z=[],p.set(ct,Z));const mt=D.textures;if(Z.length!==mt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Rt=mt.length;tt<Rt;tt++)Z[tt]=s.COLOR_ATTACHMENT0+tt;Z.length=mt.length,ht=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ht=!0);ht&&s.drawBuffers(Z)}function kt(D){return y!==D?(s.useProgram(D),y=D,!0):!1}const be={[Dn]:s.FUNC_ADD,[Jc]:s.FUNC_SUBTRACT,[Qc]:s.FUNC_REVERSE_SUBTRACT};be[jc]=s.MIN,be[th]=s.MAX;const Gt={[eh]:s.ZERO,[ih]:s.ONE,[nh]:s.SRC_COLOR,[Zl]:s.SRC_ALPHA,[ch]:s.SRC_ALPHA_SATURATE,[oh]:s.DST_COLOR,[rh]:s.DST_ALPHA,[sh]:s.ONE_MINUS_SRC_COLOR,[Jl]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA,[hh]:s.CONSTANT_COLOR,[uh]:s.ONE_MINUS_CONSTANT_COLOR,[dh]:s.CONSTANT_ALPHA,[fh]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(D,ct,Z,ht,mt,tt,Rt,bt,ue,Qt){if(D===Ti){m===!0&&(vt(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),D!==Zc){if(D!==f||Qt!==C){if((S!==Dn||w!==Dn)&&(s.blendEquation(s.FUNC_ADD),S=Dn,w=Dn),Qt)switch(D){case rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFunc(s.ONE,s.ONE);break;case Bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bo:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zo:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}T=null,v=null,b=null,R=null,_.set(0,0,0),E=0,f=D,C=Qt}return}mt=mt||ct,tt=tt||Z,Rt=Rt||ht,(ct!==S||mt!==w)&&(s.blendEquationSeparate(be[ct],be[mt]),S=ct,w=mt),(Z!==T||ht!==v||tt!==b||Rt!==R)&&(s.blendFuncSeparate(Gt[Z],Gt[ht],Gt[tt],Gt[Rt]),T=Z,v=ht,b=tt,R=Rt),(bt.equals(_)===!1||ue!==E)&&(s.blendColor(bt.r,bt.g,bt.b,ue),_.copy(bt),E=ue),f=D,C=!1}function he(D,ct){D.side===qe?vt(s.CULL_FACE):Q(s.CULL_FACE);let Z=D.side===He;ct&&(Z=!Z),Vt(Z),D.blending===rs&&D.transparent===!1?Kt(Ti):Kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ht=D.stencilWrite;o.setTest(ht),ht&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),We(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){U!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),U=D)}function pe(D){D!==Yc?(Q(s.CULL_FACE),D!==F&&(D===Oo?s.cullFace(s.BACK):D===$c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),F=D}function Ae(D){D!==H&&(W&&s.lineWidth(D),H=D)}function We(D,ct,Z){D?(Q(s.POLYGON_OFFSET_FILL),(N!==ct||k!==Z)&&(N=ct,k=Z,a.getReversed()&&(ct=-ct),s.polygonOffset(ct,Z))):vt(s.POLYGON_OFFSET_FILL)}function _e(D){D?Q(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function Me(D){D===void 0&&(D=s.TEXTURE0+K-1),j!==D&&(s.activeTexture(D),j=D)}function I(D,ct,Z){Z===void 0&&(j===null?Z=s.TEXTURE0+K-1:Z=j);let ht=et[Z];ht===void 0&&(ht={type:void 0,texture:void 0},et[Z]=ht),(ht.type!==D||ht.texture!==ct)&&(j!==Z&&(s.activeTexture(Z),j=Z),s.bindTexture(D,ct||Y[D]),ht.type=D,ht.texture=ct)}function Le(){const D=et[j];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function g(){try{s.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function O(){try{s.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function st(){try{s.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function at(){try{s.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function $(){try{s.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function J(){try{s.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function Et(D,ct){d[D]!==ct&&(s.pixelStorei(D,ct),d[D]=ct)}function ut(D){ce.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function lt(D){qt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function Tt(D,ct){let Z=l.get(ct);Z===void 0&&(Z=new WeakMap,l.set(ct,Z));let ht=Z.get(D);ht===void 0&&(ht=s.getUniformBlockIndex(ct,D.name),Z.set(D,ht))}function Pt(D,ct){const ht=l.get(ct).get(D);c.get(ct)!==ht&&(s.uniformBlockBinding(ct,ht,D.__bindingPointIndex),c.set(ct,ht))}function Ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,et={},h={},p=new WeakMap,x=[],y=null,m=!1,f=null,S=null,T=null,v=null,w=null,b=null,R=null,_=new It(0,0,0),E=0,C=!1,U=null,F=null,H=null,N=null,k=null,ce.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:vt,bindFramebuffer:Ut,drawBuffers:_t,useProgram:kt,setBlending:Kt,setMaterial:he,setFlipSided:Vt,setCullFace:pe,setLineWidth:Ae,setPolygonOffset:We,setScissorTest:_e,activeTexture:Me,bindTexture:I,unbindTexture:Le,compressedTexImage2D:te,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Et,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:st,texStorage3D:at,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ut,viewport:lt,reset:Ft}}function p0(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,g){return x?new OffscreenCanvas(A,g):cr("canvas")}function m(A,g,O){let G=1;const X=te(A);if((X.width>O||X.height>O)&&(G=O/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const st=Math.floor(G*X.width),at=Math.floor(G*X.height);h===void 0&&(h=y(st,at));const $=g?y(st,at):h;return $.width=st,$.height=at,$.getContext("2d").drawImage(A,0,0,st,at),Dt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+st+"x"+at+")."),$}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function f(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,g,O,G,X,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8),O===s.UNSIGNED_SHORT&&at&&($=at.R16_EXT),O===s.SHORT&&at&&($=at.R16_SNORM_EXT)),g===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),g===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8),O===s.UNSIGNED_SHORT&&at&&($=at.RG16_EXT),O===s.SHORT&&at&&($=at.RG16_SNORM_EXT)),g===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),g===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),g===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),g===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&($=at.RGB16_EXT),O===s.SHORT&&at&&($=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),g===s.RGBA){const J=st?lr:Xt.getTransfer(X);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=J===ie?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&($=at.RGBA16_EXT),O===s.SHORT&&at&&($=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(A,g){let O;return A?g===null||g===xi||g===us?O=s.DEPTH24_STENCIL8:g===oi?O=s.DEPTH32F_STENCIL8:g===hs&&(O=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===us?O=s.DEPTH_COMPONENT24:g===oi?O=s.DEPTH_COMPONENT32F:g===hs&&(O=s.DEPTH_COMPONENT16),O}function b(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pe&&A.minFilter!==Oe?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),U(g)}function E(A){const g=i.get(A);if(g.__webglInit===void 0)return;const O=A.source,G=p.get(O);if(G){const X=G[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(A),Object.keys(G).length===0&&p.delete(O)}i.remove(A)}function C(A){const g=i.get(A);s.deleteTexture(g.__webglTexture);const O=A.source,G=p.get(O);delete G[g.__cacheKey],a.memory.textures--}function U(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let X=0;X<g.__webglFramebuffer[G].length;X++)s.deleteFramebuffer(g.__webglFramebuffer[G][X]);else s.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)s.deleteFramebuffer(g.__webglFramebuffer[G]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let G=0,X=O.length;G<X;G++){const st=i.get(O[G]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(A)}let F=0;function H(){F=0}function N(){return F}function k(A){F=A}function K(){const A=F;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),F+=1,A}function W(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function it(A,g){const O=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const G=A.image;if(G===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+g)}function q(A,g){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){vt(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+g)}function j(A,g){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){vt(O,A,g);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+g)}function et(A,g){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ut(O,A,g);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+g)}const Ct={[cs]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[pa]:s.MIRRORED_REPEAT},At={[Pe]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[Oe]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR},ce={[Mh]:s.NEVER,[Eh]:s.ALWAYS,[Sh]:s.LESS,[ao]:s.LEQUAL,[yh]:s.EQUAL,[oo]:s.GEQUAL,[bh]:s.GREATER,[wh]:s.NOTEQUAL};function qt(A,g){if(g.type===oi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Oe||g.magFilter===Ar||g.magFilter===vs||g.magFilter===Ji||g.minFilter===Oe||g.minFilter===Ar||g.minFilter===vs||g.minFilter===Ji)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ct[g.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ct[g.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ct[g.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,At[g.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,At[g.minFilter]),g.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pe||g.minFilter!==vs&&g.minFilter!==Ji||g.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Zt(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const G=g.source;let X=p.get(G);X===void 0&&(X={},p.set(G,X));const st=W(g);if(st!==A.__cacheKey){X[st]===void 0&&(X[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[st].usedTimes++;const at=X[A.__cacheKey];at!==void 0&&(X[A.__cacheKey].usedTimes--,at.usedTimes===0&&C(g)),A.__cacheKey=st,A.__webglTexture=X[st].texture}return O}function Y(A,g,O){return Math.floor(Math.floor(A/O)/g)}function Q(A,g,O,G){const st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,O,G,g.data);else{st.sort((Et,ut)=>Et.start-ut.start);let at=0;for(let Et=1;Et<st.length;Et++){const ut=st[at],lt=st[Et],Tt=ut.start+ut.count,Pt=Y(lt.start,g.width,4),Ft=Y(ut.start,g.width,4);lt.start<=Tt+1&&Pt===Ft&&Y(lt.start+lt.count-1,g.width,4)===Pt?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++at,st[at]=lt)}st.length=at+1;const $=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let Et=0,ut=st.length;Et<ut;Et++){const lt=st[Et],Tt=Math.floor(lt.start/4),Pt=Math.ceil(lt.count/4),Ft=Tt%g.width,D=Math.floor(Tt/g.width),ct=Pt,Z=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Ft,D,ct,Z,O,G,g.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot)}}function vt(A,g,O){let G=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=s.TEXTURE_3D);const X=Zt(A,g),st=g.source;e.bindTexture(G,A.__webglTexture,s.TEXTURE0+O);const at=i.get(st);if(st.version!==at.__version||X===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Z=Xt.getPrimaries(Xt.workingColorSpace),ht=g.colorSpace===Hi?null:Xt.getPrimaries(g.colorSpace),mt=g.colorSpace===Hi||Z===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,n.maxTextureSize);J=Le(g,J);const ot=r.convert(g.format,g.colorSpace),Et=r.convert(g.type);let ut=v(g.internalFormat,ot,Et,g.normalized,g.colorSpace,g.isVideoTexture);qt(G,g);let lt;const Tt=g.mipmaps,Pt=g.isVideoTexture!==!0,Ft=at.__version===void 0||X===!0,D=st.dataReady,ct=b(g,J);if(g.isDepthTexture)ut=w(g.format===Qi,g.type),Ft&&(Pt?e.texStorage2D(s.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Et,null));else if(g.isDataTexture)if(Tt.length>0){Pt&&Ft&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let Z=0,ht=Tt.length;Z<ht;Z++)lt=Tt[Z],Pt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(s.TEXTURE_2D,Z,ut,lt.width,lt.height,0,ot,Et,lt.data);g.generateMipmaps=!1}else Pt?(Ft&&e.texStorage2D(s.TEXTURE_2D,ct,ut,J.width,J.height),D&&Q(g,J,ot,Et)):e.texImage2D(s.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Et,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pt&&Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,Tt[0].width,Tt[0].height,J.depth);for(let Z=0,ht=Tt.length;Z<ht;Z++)if(lt=Tt[Z],g.format!==li)if(ot!==null)if(Pt){if(D)if(g.layerUpdates.size>0){const mt=bl(lt.width,lt.height,g.format,g.type);for(const tt of g.layerUpdates){const Rt=lt.data.subarray(tt*mt/lt.data.BYTES_PER_ELEMENT,(tt+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,tt,lt.width,lt.height,1,ot,Rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ot,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,ut,lt.width,lt.height,J.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ot,Et,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,ut,lt.width,lt.height,J.depth,0,ot,Et,lt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pt&&Ft&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let Z=0,ht=Tt.length;Z<ht;Z++)lt=Tt[Z],g.format!==li?ot!==null?Pt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,ut,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(s.TEXTURE_2D,Z,ut,lt.width,lt.height,0,ot,Et,lt.data)}else if(g.isDataArrayTexture)if(Pt){if(Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,J.width,J.height,J.depth),D)if(g.layerUpdates.size>0){const Z=bl(J.width,J.height,g.format,g.type);for(const ht of g.layerUpdates){const mt=J.data.subarray(ht*Z/J.data.BYTES_PER_ELEMENT,(ht+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,ot,Et,mt)}g.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,Et,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,Et,J.data);else if(g.isData3DTexture)Pt?(Ft&&e.texStorage3D(s.TEXTURE_3D,ct,ut,J.width,J.height,J.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,Et,J.data)):e.texImage3D(s.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,Et,J.data);else if(g.isFramebufferTexture){if(Ft)if(Pt)e.texStorage2D(s.TEXTURE_2D,ct,ut,J.width,J.height);else{let Z=J.width,ht=J.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,ut,Z,ht,0,ot,Et,null),Z>>=1,ht>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in s){const Z=s.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(g),Z.onpaint=ht=>{const mt=ht.changedElements;for(const tt of d)mt.includes(tt.image)&&(tt.needsUpdate=!0)},Z.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const mt=s.RGBA,tt=s.RGBA,Rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,tt,Rt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Pt&&Ft){const Z=te(Tt[0]);e.texStorage2D(s.TEXTURE_2D,ct,ut,Z.width,Z.height)}for(let Z=0,ht=Tt.length;Z<ht;Z++)lt=Tt[Z],Pt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ot,Et,lt):e.texImage2D(s.TEXTURE_2D,Z,ut,ot,Et,lt);g.generateMipmaps=!1}else if(Pt){if(Ft){const Z=te(J);e.texStorage2D(s.TEXTURE_2D,ct,ut,Z.width,Z.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,Et,J)}else e.texImage2D(s.TEXTURE_2D,0,ut,ot,Et,J);f(g)&&S(G),at.__version=st.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ut(A,g,O){if(g.image.length!==6)return;const G=Zt(A,g),X=g.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const st=i.get(X);if(X.version!==st.__version||G===!0){e.activeTexture(s.TEXTURE0+O);const at=Xt.getPrimaries(Xt.workingColorSpace),$=g.colorSpace===Hi?null:Xt.getPrimaries(g.colorSpace),J=g.colorSpace===Hi||at===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ot=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!ot&&!Et?ut[tt]=m(g.image[tt],!0,n.maxCubemapSize):ut[tt]=Et?g.image[tt].image:g.image[tt],ut[tt]=Le(g,ut[tt]);const lt=ut[0],Tt=r.convert(g.format,g.colorSpace),Pt=r.convert(g.type),Ft=v(g.internalFormat,Tt,Pt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,ct=st.__version===void 0||G===!0,Z=X.dataReady;let ht=b(g,lt);qt(s.TEXTURE_CUBE_MAP,g);let mt;if(ot){D&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Ft,lt.width,lt.height);for(let tt=0;tt<6;tt++){mt=ut[tt].mipmaps;for(let Rt=0;Rt<mt.length;Rt++){const bt=mt[Rt];g.format!==li?Tt!==null?D?Z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt,Ft,bt.width,bt.height,0,bt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt,0,0,bt.width,bt.height,Tt,Pt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt,Ft,bt.width,bt.height,0,Tt,Pt,bt.data)}}}else{if(mt=g.mipmaps,D&&ct){mt.length>0&&ht++;const tt=te(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Et){D?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,Tt,Pt,ut[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,ut[tt].width,ut[tt].height,0,Tt,Pt,ut[tt].data);for(let Rt=0;Rt<mt.length;Rt++){const ue=mt[Rt].image[tt].image;D?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt+1,0,0,ue.width,ue.height,Tt,Pt,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt+1,Ft,ue.width,ue.height,0,Tt,Pt,ue.data)}}else{D?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt,Pt,ut[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,Tt,Pt,ut[tt]);for(let Rt=0;Rt<mt.length;Rt++){const bt=mt[Rt];D?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt+1,0,0,Tt,Pt,bt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Rt+1,Ft,Tt,Pt,bt.image[tt])}}}f(g)&&S(s.TEXTURE_CUBE_MAP),st.__version=X.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _t(A,g,O,G,X,st){const at=r.convert(O.format,O.colorSpace),$=r.convert(O.type),J=v(O.internalFormat,at,$,O.normalized,O.colorSpace),ot=i.get(g),Et=i.get(O);if(Et.__renderTarget=g,!ot.__hasExternalTextures){const ut=Math.max(1,g.width>>st),lt=Math.max(1,g.height>>st);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?e.texImage3D(X,st,J,ut,lt,g.depth,0,at,$,null):e.texImage2D(X,st,J,ut,lt,0,at,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Me(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,X,Et.__webglTexture,0,_e(g)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,X,Et.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(A,g,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),g.depthBuffer){const G=g.depthTexture,X=G&&G.isDepthTexture?G.type:null,st=w(g.stencilBuffer,X),at=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Me(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(g),st,g.width,g.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(g),st,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,st,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,A)}else{const G=g.textures;for(let X=0;X<G.length;X++){const st=G[X],at=r.convert(st.format,st.colorSpace),$=r.convert(st.type),J=v(st.internalFormat,at,$,st.normalized,st.colorSpace);Me(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(g),J,g.width,g.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(g),J,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,J,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(A,g,O){const G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),qt(s.TEXTURE_CUBE_MAP,g.depthTexture);const ot=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type);let ut;g.depthTexture.format===Ci?ut=s.DEPTH_COMPONENT24:g.depthTexture.format===Qi&&(ut=s.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,g.width,g.height,0,ot,Et,null)}}else it(g.depthTexture,0);const st=X.__webglTexture,at=_e(g),$=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,J=g.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ci)Me(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,$,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,J,$,st,0);else if(g.depthTexture.format===Qi)Me(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,$,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,J,$,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(A){const g=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=G}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)be(g.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?be(g.__webglFramebuffer[0],A,0):be(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=s.createRenderbuffer(),kt(g.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,st)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),kt(g.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(A,g,O){const G=i.get(A);g!==void 0&&_t(G.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Gt(A)}function he(A){const g=A.texture,O=i.get(A),G=i.get(g);A.addEventListener("dispose",_);const X=A.textures,st=A.isWebGLCubeRenderTarget===!0,at=X.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=g.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let J=0;J<g.mipmaps.length;J++)O.__webglFramebuffer[$][J]=s.createFramebuffer()}else O.__webglFramebuffer[$]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[$]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let $=0,J=X.length;$<J;$++){const ot=i.get(X[$]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Me(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<X.length;$++){const J=X[$];O.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const ot=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),ut=v(J.internalFormat,ot,Et,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),lt=_e(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ut,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,O.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),qt(s.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)_t(O.__webglFramebuffer[$][J],A,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else _t(O.__webglFramebuffer[$],A,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let $=0,J=X.length;$<J;$++){const ot=X[$],Et=i.get(ot);let ut=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Et.__webglTexture),qt(ut,ot),_t(O.__webglFramebuffer,A,ot,s.COLOR_ATTACHMENT0+$,ut,0),f(ot)&&S(ut)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),qt($,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)_t(O.__webglFramebuffer[J],A,g,s.COLOR_ATTACHMENT0,$,J);else _t(O.__webglFramebuffer,A,g,s.COLOR_ATTACHMENT0,$,0);f(g)&&S($),e.unbindTexture()}A.depthBuffer&&Gt(A)}function Vt(A){const g=A.textures;for(let O=0,G=g.length;O<G;O++){const X=g[O];if(f(X)){const st=T(A),at=i.get(X).__webglTexture;e.bindTexture(st,at),S(st),e.unbindTexture()}}}const pe=[],Ae=[];function We(A){if(A.samples>0){if(Me(A)===!1){const g=A.textures,O=A.width,G=A.height;let X=s.COLOR_BUFFER_BIT;const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=i.get(A),$=g.length>1;if($)for(let ot=0;ot<g.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=i.get(g[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,X,s.NEAREST),c===!0&&(pe.length=0,Ae.length=0,pe.push(s.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(st),Ae.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ot=0;ot<g.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=i.get(g[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const g=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function _e(A){return Math.min(n.maxSamples,A.samples)}function Me(A){const g=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(A){const g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function Le(A,g){const O=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==or&&O!==Hi&&(Xt.getTransfer(O)===ie?(G!==li||X!==Ke)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",O)),g}function te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=Kt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function m0(s,t){function e(i,n=Hi){let r;const a=Xt.getTransfer(n);if(i===Ke)return s.UNSIGNED_BYTE;if(i===to)return s.UNSIGNED_SHORT_4_4_4_4;if(i===eo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ac)return s.BYTE;if(i===oc)return s.SHORT;if(i===hs)return s.UNSIGNED_SHORT;if(i===ja)return s.INT;if(i===xi)return s.UNSIGNED_INT;if(i===oi)return s.FLOAT;if(i===vi)return s.HALF_FLOAT;if(i===hc)return s.ALPHA;if(i===uc)return s.RGB;if(i===li)return s.RGBA;if(i===Ci)return s.DEPTH_COMPONENT;if(i===Qi)return s.DEPTH_STENCIL;if(i===io)return s.RED;if(i===no)return s.RED_INTEGER;if(i===nn)return s.RG;if(i===so)return s.RG_INTEGER;if(i===ro)return s.RGBA_INTEGER;if(i===tr||i===er||i===ir||i===nr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===_a||i===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===Ma||i===Sa||i===ya||i===ba||i===rr||i===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===Ma)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ya)return r.COMPRESSED_R11_EAC;if(i===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ea||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===ka||i===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ha||i===Va||i===ar||i===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:g0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends an{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,x=null;const y=typeof XRWebGLBinding<"u",m=new x0,f={},S=e.getContextAttributes();let T=null,v=null;const w=[],b=[],R=new Lt;let _=null,E=null;const C=new Xe;C.viewport=new xe;const U=new Xe;U.viewport=new xe;const F=[C,U],H=new Tu;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Ur,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Ur,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Ur,w[Y]=Q),Q.getHandSpace()};function K(Y){const Q=b.indexOf(Y.inputSource);if(Q===-1)return;const vt=w[Q];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,l||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",it);for(let Y=0;Y<w.length;Y++){const Q=b[Y];Q!==null&&(b[Y]=null,w[Y].disconnect(Q))}N=null,k=null,m.reset();for(const Y in f)delete f[Y];if(t.setRenderTarget(T),p=null,h=null,d=null,n=null,v=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),E!==null){const Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",W),n.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?Qi:Ci,Ut=S.stencil?us:xi);const kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(kt),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ci(h.textureWidth,h.textureHeight,{format:li,type:Ke,depthTexture:new ps(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ci(p.framebufferWidth,p.framebufferHeight,{format:li,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Zt.setContext(n),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Y){for(let Q=0;Q<Y.removed.length;Q++){const vt=Y.removed[Q],Ut=b.indexOf(vt);Ut>=0&&(b[Ut]=null,w[Ut].disconnect(vt))}for(let Q=0;Q<Y.added.length;Q++){const vt=Y.added[Q];let Ut=b.indexOf(vt);if(Ut===-1){for(let kt=0;kt<w.length;kt++)if(kt>=b.length){b.push(vt),Ut=kt;break}else if(b[kt]===null){b[kt]=vt,Ut=kt;break}if(Ut===-1)break}const _t=w[Ut];_t&&_t.connect(vt)}}const q=new P,j=new P;function et(Y,Q,vt){q.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const Ut=q.distanceTo(j),_t=Q.projectionMatrix.elements,kt=vt.projectionMatrix.elements,be=_t[14]/(_t[10]-1),Gt=_t[14]/(_t[10]+1),Kt=(_t[9]+1)/_t[5],he=(_t[9]-1)/_t[5],Vt=(_t[8]-1)/_t[0],pe=(kt[8]+1)/kt[0],Ae=be*Vt,We=be*pe,_e=Ut/(-Vt+pe),Me=_e*-Vt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(_e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_t[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const I=be+_e,Le=Gt+_e,te=Ae-Me,A=We+(Ut-Me),g=Kt*Gt/Le*I,O=he*Gt/Le*I;Y.projectionMatrix.makePerspective(te,A,g,O,I,Le),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let Q=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),H.near=U.near=C.near=Q,H.far=U.far=C.far=vt,(N!==H.near||k!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;const Ut=Y.parent,_t=H.cameras;Ct(H,Ut);for(let kt=0;kt<_t.length;kt++)Ct(_t[kt],Ut);_t.length===2?et(H,C,U):H.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),At(Y,H,Ut)};function At(Y,Q,vt){vt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return f[Y]};let ce=null;function qt(Y,Q){if(u=Q.getViewerPose(l||a),x=Q,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Ut=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let Gt=0;Gt<vt.length;Gt++){const Kt=vt[Gt];let he=null;if(p!==null)he=p.getViewport(Kt);else{const pe=d.getViewSubImage(h,Kt);he=pe.viewport,Gt===0&&(t.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(v))}let Vt=F[Gt];Vt===void 0&&(Vt=new Xe,Vt.layers.enable(Gt),Vt.viewport=new xe,F[Gt]=Vt),Vt.matrix.fromArray(Kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(he.x,he.y,he.width,he.height),Gt===0&&(H.matrix.copy(Vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(Vt)}const _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Gt=d.getDepthInformation(vt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,n.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Gt=0;Gt<vt.length;Gt++){const Kt=vt[Gt].camera;if(Kt){let he=f[Kt];he||(he=new bc,f[Kt]=he);const Vt=d.getCameraImage(Kt);he.sourceTexture=Vt}}}}for(let vt=0;vt<w.length;vt++){const Ut=b[vt],_t=w[vt];Ut!==null&&_t!==void 0&&_t.update(Ut,Q,l||a)}ce&&ce(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Zt=new Cc;Zt.setAnimationLoop(qt),this.setAnimationLoop=function(Y){ce=Y},this.dispose=function(){}}}const M0=new se,Fc=new Nt;Fc.set(-1,0,0,0,1,0,0,0,1);function S0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,wc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,S,T,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),T=S.envMap,v=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(M0.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function y0(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){const b=w.program;i.uniformBlockBinding(v,b)}function l(v,w){let b=n[v.id];b===void 0&&(m(v),b=u(v),n[v.id]=b,v.addEventListener("dispose",S));const R=w.program;i.updateUBOMapping(v,R);const _=t.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){const w=d();v.__bindingPointIndex=w;const b=s.createBuffer(),R=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const w=n[v.id],b=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){const C=b[_];if(Array.isArray(C))for(let U=0,F=C.length;U<F;U++)p(C[U],_,U,R);else p(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,w,b,R){if(y(v,w,b,R)===!0){const _=v.__offset,E=v.value;if(Array.isArray(E)){let C=0;for(let U=0;U<E.length;U++){const F=E[U],H=f(F);x(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function x(v,w,b){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,b)}function y(v,w,b,R){const _=v.value,E=w+"_"+b;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{const C=R[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(v){const w=v.uniforms;let b=0;const R=16;for(let E=0,C=w.length;E<C;E++){const U=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,H=U.length;F<H;F++){const N=U[F],k=Array.isArray(N.value)?N.value:[N.value];for(let K=0,W=k.length;K<W;K++){const it=k[K],q=f(it),j=b%R,et=j%q.boundary,Ct=j+et;b+=et,Ct!==0&&R-Ct<q.storage&&(b+=R-Ct),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const _=b%R;return _>0&&(b+=R-_),v.__size=b,v.__cache={},this}function f(v){const w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),w}function S(v){const w=v.target;w.removeEventListener("dispose",S);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function T(){for(const v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:c,update:l,dispose:T}}const b0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function w0(){return fi===null&&(fi=new Mc(b0,16,16,nn,vi),fi.name="DFG_LUT",fi.minFilter=Oe,fi.magFilter=Oe,fi.wrapS=Ei,fi.wrapT=Ei,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class E0{constructor(t={}){const{canvas:e=Ah(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ke}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const y=p,m=new Set([ro,so,no]),f=new Set([Ke,xi,hs,us,to,eo]),S=new Uint32Array(4),T=new Int32Array(4),v=new P;let w=null,b=null;const R=[],_=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1,F=null,H=null,N=null,k=null;this._outputColorSpace=Ne;let K=0,W=0,it=null,q=-1,j=null;const et=new xe,Ct=new xe;let At=null;const ce=new It(0);let qt=0,Zt=e.width,Y=e.height,Q=1,vt=null,Ut=null;const _t=new xe(0,0,Zt,Y),kt=new xe(0,0,Zt,Y);let be=!1;const Gt=new fo;let Kt=!1,he=!1;const Vt=new se,pe=new P,Ae=new xe,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Me(){return it===null?Q:1}let I=i;function Le(M,L){return e.getContext(M,L)}let te,A,g,O,G,X,st,at,$,J,ot,Et,ut,lt,Tt,Pt,Ft,D,ct,Z,ht,mt,tt;try{const M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ja}`),e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",ei,!1),I===null){const L="webgl2";if(I=Le(L,M),I===null)throw Le(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(M){throw e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),Yt("WebGLRenderer: "+M.message),M}function Rt(){te=new wp(I),te.init(),ht=new m0(I,te),A=new pp(I,te,t,ht),g=new f0(I,te),A.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),H=I.createFramebuffer(),N=I.createFramebuffer(),k=I.createFramebuffer(),O=new Ap(I),G=new jm,X=new p0(I,te,g,G,A,ht,O),st=new bp(C),at=new Ru(I),mt=new dp(I,at),$=new Ep(I,at,O,mt),J=new Cp(I,$,at,mt,O),D=new Rp(I,A,X),Tt=new mp(G),ot=new Qm(C,st,te,A,mt,Tt),Et=new S0(C,G),ut=new e0,lt=new o0(te),Ft=new up(C,st,g,J,x,c),Pt=new d0(C,J,A),tt=new y0(I,O,A,g),ct=new fp(I,te,O),Z=new Tp(I,te,O),O.programs=ot.programs,C.capabilities=A,C.extensions=te,C.properties=G,C.renderLists=ut,C.shadowMap=Pt,C.state=g,C.info=O}y!==Ke&&(E=new Lp(y,e.width,e.height,o,n,r));const bt=new v0(C,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(Zt,Y,!1))},this.getSize=function(M){return M.set(Zt,Y)},this.setSize=function(M,L,V=!0){if(bt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=M,Y=L,e.width=Math.floor(M*Q),e.height=Math.floor(L*Q),V===!0&&(e.style.width=M+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Zt*Q,Y*Q).floor()},this.setDrawingBufferSize=function(M,L,V){Zt=M,Y=L,Q=V,e.width=Math.floor(M*V),e.height=Math.floor(L*V),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(y===Ke){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,L,V,B){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,L,V,B),g.viewport(et.copy(_t).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,L,V,B){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,L,V,B),g.scissor(Ct.copy(kt).multiplyScalar(Q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(M){g.setScissorTest(be=M)},this.setOpaqueSort=function(M){vt=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,V=!0){let B=0;if(M){let z=!1;if(it!==null){const pt=it.texture.format;z=m.has(pt)}if(z){const pt=it.texture.type,xt=f.has(pt),ft=Ft.getClearColor(),St=Ft.getClearAlpha(),wt=ft.r,Bt=ft.g,Ht=ft.b;xt?(S[0]=wt,S[1]=Bt,S[2]=Ht,S[3]=St,I.clearBufferuiv(I.COLOR,0,S)):(T[0]=wt,T[1]=Bt,T[2]=Ht,T[3]=St,I.clearBufferiv(I.COLOR,0,T))}else B|=I.COLOR_BUFFER_BIT}L&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),Ft.dispose(),ut.dispose(),lt.dispose(),G.dispose(),st.dispose(),J.dispose(),mt.dispose(),tt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ro),bt.removeEventListener("sessionend",Co),Xi.stop()};function ue(M){M.preventDefault(),hr("WebGLRenderer: Context Lost."),U=!0}function Qt(){hr("WebGLRenderer: Context Restored."),U=!1;const M=O.autoReset,L=Pt.enabled,V=Pt.autoUpdate,B=Pt.needsUpdate,z=Pt.type;Rt(),O.autoReset=M,Pt.enabled=L,Pt.autoUpdate=V,Pt.needsUpdate=B,Pt.type=z}function ei(M){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function hi(M){const L=M.target;L.removeEventListener("dispose",hi),kc(L)}function kc(M){Gc(M),G.remove(M)}function Gc(M){const L=G.get(M).programs;L!==void 0&&(L.forEach(function(V){ot.releaseProgram(V)}),M.isShaderMaterial&&ot.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,V,B,z,pt){L===null&&(L=We);const xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Wc(M,L,V,B,z);g.setMaterial(B,xt);let St=V.index,wt=1;if(B.wireframe===!0){if(St=$.getWireframeAttribute(V),St===void 0)return;wt=2}const Bt=V.drawRange,Ht=V.attributes.position;let yt=Bt.start*wt,jt=(Bt.start+Bt.count)*wt;pt!==null&&(yt=Math.max(yt,pt.start*wt),jt=Math.min(jt,(pt.start+pt.count)*wt)),St!==null?(yt=Math.max(yt,0),jt=Math.min(jt,St.count)):Ht!=null&&(yt=Math.max(yt,0),jt=Math.min(jt,Ht.count));const Se=jt-yt;if(Se<0||Se===1/0)return;mt.setup(z,B,ft,V,St);let fe,oe=ct;if(St!==null&&(fe=at.get(St),oe=Z,oe.setIndex(fe)),z.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Me()),oe.setMode(I.LINES)):oe.setMode(I.TRIANGLES);else if(z.isLine){let De=B.linewidth;De===void 0&&(De=1),g.setLineWidth(De*Me()),z.isLineSegments?oe.setMode(I.LINES):z.isLineLoop?oe.setMode(I.LINE_LOOP):oe.setMode(I.LINE_STRIP)}else z.isPoints?oe.setMode(I.POINTS):z.isSprite&&oe.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const De=z._multiDrawStarts,gt=z._multiDrawCounts,ze=z._multiDrawCount,$t=St?at.get(St).bytesPerElement:1,Je=G.get(B).currentProgram.getUniforms();for(let ui=0;ui<ze;ui++)Je.setValue(I,"_gl_DrawID",ui),oe.render(De[ui]/$t,gt[ui])}else if(z.isInstancedMesh)oe.renderInstances(yt,Se,z.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,De);oe.renderInstances(yt,Se,gt)}else oe.render(yt,Se)};function Ao(M,L,V,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),Kt===!0&&Tt.setState(M,V,!1),M.transparent===!0&&M.side===qe&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,xs(M,L,B),M.side=tn,M.needsUpdate=!0,xs(M,L,B),M.side=qe):xs(M,L,B)}this.compile=function(M,L,V=null){V===null&&(V=M),F!==null&&F.renderStart(M,L,V),b=lt.get(V),b.init(L),_.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),he=this.localClippingEnabled,Kt=Tt.init(this.clippingPlanes,he),Kt===!0&&Tt.setGlobalState(this.clippingPlanes,L),F!==null&&Pt.render(b.state.shadowsArray,V,L);const B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pt=z.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const ft=pt[xt];Ao(ft,V,L,z),B.add(ft)}else Ao(pt,V,L,z),B.add(pt)}),b=_.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,L,V=null){const B=this.compile(M,L,V);return new Promise(z=>{function pt(){if(B.forEach(function(xt){const St=G.get(xt).currentProgram;(St===void 0||St.isReady())&&B.delete(xt)}),B.size===0){z(M);return}setTimeout(pt,10)}te.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let br=null;function Hc(M){br&&br(M)}function Ro(){Xi.stop()}function Co(){Xi.start()}const Xi=new Cc;Xi.setAnimationLoop(Hc),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(M){br=M,bt.setAnimationLoop(M),M===null?Xi.stop():Xi.start()},bt.addEventListener("sessionstart",Ro),bt.addEventListener("sessionend",Co),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,L);const V=bt.enabled===!0&&bt.isPresenting===!0,B=E!==null&&(it===null||V)&&E.begin(C,it);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,L,it),b=lt.get(M,_.length),b.init(L),b.state.textureUnits=X.getTextureUnits(),_.push(b),Vt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Gt.setFromProjectionMatrix(Vt,mi,L.reversedDepth),he=this.localClippingEnabled,Kt=Tt.init(this.clippingPlanes,he),w=ut.get(M,R.length),w.init(),R.push(w),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&wr(xt,L,-1/0,C.sortObjects)}wr(M,L,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(vt,Ut),_e=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,_e&&Ft.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Tt.beginShadows();const z=b.state.shadowsArray;if(Pt.render(z,M,L),Kt===!0&&Tt.endShadows(),(B&&E.hasRenderPass())===!1){const xt=w.opaque,ft=w.transmissive;if(b.setupLights(),L.isArrayCamera){const St=L.cameras;if(ft.length>0)for(let wt=0,Bt=St.length;wt<Bt;wt++){const Ht=St[wt];Lo(xt,ft,M,Ht)}_e&&Ft.render(M);for(let wt=0,Bt=St.length;wt<Bt;wt++){const Ht=St[wt];Po(w,M,Ht,Ht.viewport)}}else ft.length>0&&Lo(xt,ft,M,L),_e&&Ft.render(M),Po(w,M,L)}it!==null&&W===0&&(X.updateMultisampleRenderTarget(it),X.updateRenderTargetMipmap(it)),B&&E.end(C),M.isScene===!0&&M.onAfterRender(C,M,L),mt.resetDefaultState(),q=-1,j=null,_.pop(),_.length>0?(b=_[_.length-1],X.setTextureUnits(b.state.textureUnits),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function wr(M,L,V,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Gt)){B&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Vt);const xt=J.update(M),ft=M.material;ft.visible&&w.push(M,xt,ft,V,Ae.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Gt))){const xt=J.update(M),ft=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ae.copy(xt.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(Vt)),Array.isArray(ft)){const St=xt.groups;for(let wt=0,Bt=St.length;wt<Bt;wt++){const Ht=St[wt],yt=ft[Ht.materialIndex];yt&&yt.visible&&w.push(M,xt,yt,V,Ae.z,Ht,L)}}else ft.visible&&w.push(M,xt,ft,V,Ae.z,null,L)}}const pt=M.children;for(let xt=0,ft=pt.length;xt<ft;xt++)wr(pt[xt],L,V,B)}function Po(M,L,V,B){const{opaque:z,transmissive:pt,transparent:xt}=M;b.setupLightsView(V),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,V),B&&g.viewport(et.copy(B)),z.length>0&&_s(z,L,V),pt.length>0&&_s(pt,L,V),xt.length>0&&_s(xt,L,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Lo(M,L,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const yt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new ci(1,1,{generateMipmaps:!0,type:yt?vi:Ke,minFilter:Ji,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const pt=b.state.transmissionRenderTarget[B.id],xt=B.viewport||et;pt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),St=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(ce),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),_e&&Ft.render(V);const Bt=C.toneMapping;C.toneMapping=gi;const Ht=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,B),_s(M,V,B),X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt),te.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let jt=0,Se=L.length;jt<Se;jt++){const fe=L[jt],{object:oe,geometry:De,material:gt,group:ze}=fe;if(gt.side===qe&&oe.layers.test(B.layers)){const $t=gt.side;gt.side=He,gt.needsUpdate=!0,Do(oe,V,B,De,gt,ze),gt.side=$t,gt.needsUpdate=!0,yt=!0}}yt===!0&&(X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,St,wt),C.setClearColor(ce,qt),Ht!==void 0&&(B.viewport=Ht),C.toneMapping=Bt}function _s(M,L,V){const B=L.isScene===!0?L.overrideMaterial:null;for(let z=0,pt=M.length;z<pt;z++){const xt=M[z],{object:ft,geometry:St,group:wt}=xt;let Bt=xt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ft.layers.test(V.layers)&&Do(ft,L,V,St,Bt,wt)}}function Do(M,L,V,B,z,pt){F!==null&&z.isNodeMaterial&&F.setObject(M,z),M.onBeforeRender(C,L,V,B,z,pt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,L,V,B,M,pt),z.transparent===!0&&z.side===qe&&z.forceSinglePass===!1?(z.side=He,z.needsUpdate=!0,C.renderBufferDirect(V,L,B,z,M,pt),z.side=tn,z.needsUpdate=!0,C.renderBufferDirect(V,L,B,z,M,pt),z.side=qe):C.renderBufferDirect(V,L,B,z,M,pt),M.onAfterRender(C,L,V,B,z,pt)}function xs(M,L,V){L.isScene!==!0&&(L=We);const B=G.get(M),z=b.state.lights,pt=b.state.shadowsArray,xt=z.state.version,ft=ot.getParameters(M,z.state,pt,L,V,b.state.lightProbeGridArray),St=ot.getProgramCacheKey(ft);let wt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=st.get(M.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",hi),wt=new Map,B.programs=wt);let Ht=wt.get(St);if(Ht!==void 0){if(B.currentProgram===Ht&&B.lightsStateVersion===xt)return Uo(M,ft),Ht}else ft.uniforms=ot.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,V,ft),M.onBeforeCompile(ft,C),Ht=ot.acquireProgram(ft,St),wt.set(St,Ht),B.uniforms=ft.uniforms;const yt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=Tt.uniform),Uo(M,ft),B.needsLights=qc(M),B.lightsStateVersion=xt,B.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.sunLights.value=z.state.sun,yt.sunLightShadows.value=z.state.sunShadow,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.sunShadowMatrix.value=z.state.sunShadowMatrix,yt.sunShadowCascade.value=z.state.sunShadowCascade,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ht,B.uniformsList=null,Ht}function Io(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=sr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Uo(M,L){const V=G.get(M);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Vc(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(L.matrixWorld);for(let V=0,B=M.length;V<B;V++){const z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Wc(M,L,V,B,z){L.isScene!==!0&&(L=We),X.resetTextureUnits();const pt=L.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,ft=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Xt.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=st.get(B.envMap||xt,St),Bt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,Se=!!V.morphAttributes.color;let fe=gi;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(fe=C.toneMapping);const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,De=oe!==void 0?oe.length:0,gt=G.get(B),ze=b.state.lights;if(Kt===!0&&(he===!0||M!==j)){const de=M===j&&B.id===q;Tt.setState(B,M,de)}let $t=!1;B.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==ze.state.version||gt.outputColorSpace!==ft||z.isBatchedMesh&&gt.batching===!1||!z.isBatchedMesh&&gt.batching===!0||z.isBatchedMesh&&gt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&gt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&gt.instancing===!1||!z.isInstancedMesh&&gt.instancing===!0||z.isSkinnedMesh&&gt.skinning===!1||!z.isSkinnedMesh&&gt.skinning===!0||z.isInstancedMesh&&gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&gt.instancingMorph===!1&&z.morphTexture!==null||gt.envMap!==wt||B.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Bt||gt.vertexTangents!==Ht||gt.morphTargets!==yt||gt.morphNormals!==jt||gt.morphColors!==Se||gt.toneMapping!==fe||gt.morphTargetsCount!==De||!!gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,gt.__version=B.version);let Je=gt.currentProgram;$t===!0&&(Je=xs(B,L,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Je,gt));let ui=!1,Li=!1,hn=!1;const ae=Je.getUniforms(),ve=gt.uniforms;if(g.useProgram(Je.program)&&(ui=!0,Li=!0,hn=!0),B.id!==q&&(q=B.id,Li=!0),gt.needsLights){const de=Vc(b.state.lightProbeGridArray,z);gt.lightProbeGrid!==de&&(gt.lightProbeGrid=de,Li=!0)}if(ui||j!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ae.setValue(I,"projectionMatrix",M.projectionMatrix),ae.setValue(I,"viewMatrix",M.matrixWorldInverse);const Ii=ae.map.cameraPosition;Ii!==void 0&&Ii.setValue(I,pe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&ae.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Li=!0,hn=!0)}if(gt.needsLights&&(ze.state.sunShadowMap.length>0&&ae.setValue(I,"sunShadowMap",ze.state.sunShadowMap,X),ze.state.directionalShadowMap.length>0&&ae.setValue(I,"directionalShadowMap",ze.state.directionalShadowMap,X),ze.state.spotShadowMap.length>0&&ae.setValue(I,"spotShadowMap",ze.state.spotShadowMap,X),ze.state.pointShadowMap.length>0&&ae.setValue(I,"pointShadowMap",ze.state.pointShadowMap,X)),z.isSkinnedMesh){ae.setOptional(I,z,"bindMatrix"),ae.setOptional(I,z,"bindMatrixInverse");const de=z.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),ae.setValue(I,"boneTexture",de.boneTexture,X))}z.isBatchedMesh&&(ae.setOptional(I,z,"batchingTexture"),ae.setValue(I,"batchingTexture",z._matricesTexture,X),ae.setOptional(I,z,"batchingIdTexture"),ae.setValue(I,"batchingIdTexture",z._indirectTexture,X),ae.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(I,"batchingColorTexture",z._colorsTexture,X));const Di=V.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&D.update(z,V,Je),(Li||gt.receiveShadow!==z.receiveShadow)&&(gt.receiveShadow=z.receiveShadow,ae.setValue(I,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(ve.envMapIntensity.value=L.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=w0()),Li){if(ae.setValue(I,"toneMappingExposure",C.toneMappingExposure),gt.needsLights&&Xc(ve,hn),pt&&B.fog===!0&&Et.refreshFogUniforms(ve,pt),Et.refreshMaterialUniforms(ve,B,Q,Y,b.state.transmissionRenderTarget[M.id]),gt.needsLights&&gt.lightProbeGrid){const de=gt.lightProbeGrid;ve.probesSH.value=de.texture,ve.probesMin.value.copy(de.boundingBox.min),ve.probesMax.value.copy(de.boundingBox.max),ve.probesResolution.value.copy(de.resolution)}sr.upload(I,Io(gt),ve,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(sr.upload(I,Io(gt),ve,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(I,"center",z.center),ae.setValue(I,"modelViewMatrix",z.modelViewMatrix),ae.setValue(I,"normalMatrix",z.normalMatrix),ae.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const de=B.uniformsGroups;for(let Ii=0,un=de.length;Ii<un;Ii++){const Fo=de[Ii];tt.update(Fo,Je),tt.bind(Fo,Je)}}return Je}function Xc(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function qc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(M,L,V){const B=G.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=L,G.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const V=G.get(M);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,V=0){it=M,K=L,W=V;let B=null,z=!1,pt=!1;if(M){const ft=G.get(M);if(ft.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(M.viewport),Ct.copy(M.scissor),At=M.scissorTest,g.viewport(et),g.scissor(Ct),g.setScissorTest(At),q=-1;return}else if(ft.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(ft.__hasExternalTextures)X.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Bt=M.depthTexture;if(ft.__boundDepthTexture!==Bt){if(Bt!==null&&G.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}const St=M.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);const wt=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?B=wt[L][V]:B=wt[L],z=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?B=G.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[V]:B=wt,et.copy(M.viewport),Ct.copy(M.scissor),At=M.scissorTest}else et.copy(_t).multiplyScalar(Q).floor(),Ct.copy(kt).multiplyScalar(Q).floor(),At=be;if(V!==0&&(B=H),g.bindFramebuffer(I.FRAMEBUFFER,B)&&g.drawBuffers(M,B),g.viewport(et),g.scissor(Ct),g.setScissorTest(At),z){const ft=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,V)}else if(pt){const ft=L;for(let St=0;St<M.textures.length;St++){const wt=G.get(M.textures[St]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+St,wt.__webglTexture,V,ft)}}else if(M!==null&&V!==0){const ft=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ft.__webglTexture,V)}q=-1};function No(M){const L=G.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=A.textureFormatReadable(M.format),L.__typeReadable=A.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,V,B,z,pt,xt,ft=0){if(!(M&&M.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){g.bindFramebuffer(I.FRAMEBUFFER,St);try{const wt=M.textures[ft],Bt=wt.format,Ht=wt.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ft);const yt=No(wt);if(yt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&V>=0&&V<=M.height-z&&I.readPixels(L,V,B,z,ht.convert(Bt),ht.convert(Ht),pt)}finally{const wt=it!==null?G.get(it).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,L,V,B,z,pt,xt,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(L>=0&&L<=M.width-B&&V>=0&&V<=M.height-z){g.bindFramebuffer(I.FRAMEBUFFER,St);const wt=M.textures[ft],Bt=wt.format,Ht=wt.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ft);const yt=No(wt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(L,V,B,z,ht.convert(Bt),ht.convert(Ht),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Se=it!==null?G.get(it).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Se);const fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rh(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(jt),I.deleteSync(fe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,V=0){const B=Math.pow(2,-V),z=Math.floor(M.image.width*B),pt=Math.floor(M.image.height*B),xt=L!==null?L.x:0,ft=L!==null?L.y:0;X.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,xt,ft,z,pt),g.unbindTexture()},this.copyTextureToTexture=function(M,L,V=null,B=null,z=0,pt=0){let xt,ft,St,wt,Bt,Ht,yt,jt,Se;const fe=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(V!==null)xt=V.max.x-V.min.x,ft=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Bt=V.min.y,Ht=V.isBox3?V.min.z:0;else{const ve=Math.pow(2,-z);xt=Math.floor(fe.width*ve),ft=Math.floor(fe.height*ve),M.isDataArrayTexture?St=fe.depth:M.isData3DTexture?St=Math.floor(fe.depth*ve):St=1,wt=0,Bt=0,Ht=0}B!==null?(yt=B.x,jt=B.y,Se=B.z):(yt=0,jt=0,Se=0);const oe=ht.convert(L.format),De=ht.convert(L.type);let gt;L.isData3DTexture?(X.setTexture3D(L,0),gt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(X.setTexture2DArray(L,0),gt=I.TEXTURE_2D_ARRAY):(X.setTexture2D(L,0),gt=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const ze=g.getParameter(I.UNPACK_ROW_LENGTH),$t=g.getParameter(I.UNPACK_IMAGE_HEIGHT),Je=g.getParameter(I.UNPACK_SKIP_PIXELS),ui=g.getParameter(I.UNPACK_SKIP_ROWS),Li=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht);const hn=M.isDataArrayTexture||M.isData3DTexture,ae=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const ve=G.get(M),Di=G.get(L),de=G.get(ve.__renderTarget),Ii=G.get(Di.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,de.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let un=0;un<St;un++)hn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,Ht+un),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(L).__webglTexture,pt,Se+un)),I.blitFramebuffer(wt,Bt,xt,ft,yt,jt,xt,ft,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){const ve=G.get(M),Di=G.get(L);g.bindFramebuffer(I.READ_FRAMEBUFFER,N),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let de=0;de<St;de++)hn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,z,Ht+de):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,z),ae?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Di.__webglTexture,pt,Se+de):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Di.__webglTexture,pt),z!==0?I.blitFramebuffer(wt,Bt,xt,ft,yt,jt,xt,ft,I.COLOR_BUFFER_BIT,I.NEAREST):ae?I.copyTexSubImage3D(gt,pt,yt,jt,Se+de,wt,Bt,xt,ft):I.copyTexSubImage2D(gt,pt,yt,jt,wt,Bt,xt,ft);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ae?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(gt,pt,yt,jt,Se,xt,ft,St,oe,De,fe.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,pt,yt,jt,Se,xt,ft,St,oe,fe.data):I.texSubImage3D(gt,pt,yt,jt,Se,xt,ft,St,oe,De,fe):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,yt,jt,xt,ft,oe,De,fe.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,yt,jt,fe.width,fe.height,oe,fe.data):I.texSubImage2D(I.TEXTURE_2D,pt,yt,jt,xt,ft,oe,De,fe);g.pixelStorei(I.UNPACK_ROW_LENGTH,ze),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),g.pixelStorei(I.UNPACK_SKIP_ROWS,ui),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),pt===0&&L.generateMipmaps&&I.generateMipmap(gt),g.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){K=0,W=0,it=null,g.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const Fe=(s,t,e)=>Math.min(e,Math.max(t,s)),os=(s,t,e)=>s+(t-s)*e,Qs=(s,t,e)=>{const i=Fe((e-s)/(t-s),0,1);return i*i*(3-2*i)},ki=(s,t,e,i)=>qa.lerp(s,t,1-Math.exp(-e*i));function Oc(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),i=t%60;return`${e}:${i.toString().padStart(2,"0")}`}function ln(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function js(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function T0(s,t){const e=Math.floor(s),i=Math.floor(t),n=s-e,r=t-i,a=n*n*(3-2*n),o=r*r*(3-2*r),c=js(e,i),l=js(e+1,i),u=js(e,i+1),d=js(e+1,i+1);return os(os(c,l,a),os(u,d,a),o)}function ra(s,t,e=4){let i=0,n=.5,r=1;for(let a=0;a<e;a+=1)i+=T0(s*r,t*r)*n,r*=2.03,n*=.5;return i}function Mt(s,t,e){return t+s()*(e-t)}function cn(s,t,e=1,i=1){const n=document.createElement("canvas");n.width=s,n.height=s;const r=n.getContext("2d");t(r,s);const a=new go(n);return a.colorSpace=Ne,a.wrapS=cs,a.wrapT=cs,a.repeat.set(e,i),a.anisotropy=4,a}function A0(){const s=ln(451);return cn(512,(t,e)=>{t.fillStyle="#557f3a",t.fillRect(0,0,e,e);for(let i=0;i<5400;i+=1){const n=s()*e,r=s()*e,a=Mt(s,.5,2.4),o=26+s()*20,c=84+s()*34;t.fillStyle=`hsla(${c}, ${28+s()*30}%, ${o}%, ${.12+s()*.28})`,t.beginPath(),t.arc(n,r,a,0,Math.PI*2),t.fill()}for(let i=0;i<260;i+=1){const n=s()*e,r=s()*e,a=Mt(s,8,40);t.strokeStyle=`rgba(218, 211, 111, ${.025+s()*.05})`,t.lineWidth=Mt(s,.4,1.5),t.beginPath(),t.arc(n,r,a,0,Math.PI*2),t.stroke()}t.lineWidth=1;for(let i=0;i<2100;i+=1){const n=s()*e,r=s()*e,a=Mt(s,2,7);t.strokeStyle=`rgba(${90+s()*50}, ${130+s()*60}, ${50+s()*30}, ${.1+s()*.32})`,t.beginPath(),t.moveTo(n,r),t.lineTo(n+Mt(s,-2,2),r-a),t.stroke()}for(let i=0;i<70;i+=1){const n=s()*e,r=s()*e;t.fillStyle=s()>.45?"rgba(244, 216, 95, .52)":"rgba(233, 235, 210, .46)",t.beginPath(),t.arc(n,r,1.2,0,Math.PI*2),t.fill()}},52,52)}function yr(){const s=ln(992);return cn(512,(t,e)=>{t.fillStyle="#9a6434",t.fillRect(0,0,e,e);const i=e/6;for(let n=0;n<6;n+=1){const r=n*i,a=.78+s()*.34;t.fillStyle=`rgba(${139*a}, ${88*a}, ${43*a}, 1)`,t.fillRect(0,r+2,e,i-4),t.fillStyle="rgba(55, 27, 9, .34)",t.fillRect(0,r,e,2),t.fillStyle="rgba(255, 210, 143, .12)",t.fillRect(0,r+3,e,1);for(let c=0;c<18;c+=1){const l=r+6+s()*(i-12);t.strokeStyle=`rgba(${62+s()*28}, ${33+s()*20}, ${10+s()*12}, ${.13+s()*.26})`,t.lineWidth=Mt(s,.5,2),t.beginPath(),t.moveTo(0,l);for(let u=0;u<=e;u+=28)t.lineTo(u,l+Math.sin(u*.042+n)*2+Mt(s,-1.3,1.3));t.stroke()}const o=Math.floor(s()*3);for(let c=0;c<o;c+=1){const l=s()*e,u=r+i*.5+Mt(s,-8,8);t.strokeStyle="rgba(57, 28, 8, .28)",t.lineWidth=1.4,t.beginPath(),t.ellipse(l,u,Mt(s,3,9),Mt(s,1.4,4),0,0,Math.PI*2),t.stroke()}}t.fillStyle="rgba(35, 17, 5, .34)";for(let n=0;n<26;n+=1){const r=s()*e,a=s()*e;t.fillRect(r,a,2,2)}},2,2)}function R0(){const s=ln(119);return cn(512,(t,e)=>{t.fillStyle="#727b7a",t.fillRect(0,0,e,e);for(let i=0;i<120;i+=1){const n=s()*e,r=s()*e,a=Mt(s,3,22);t.fillStyle=`rgba(${45+s()*80}, ${52+s()*80}, ${53+s()*74}, ${.12+s()*.25})`,t.beginPath(),t.arc(n,r,a,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(28, 34, 34, .35)";for(let i=0;i<18;i+=1){const n=s()*e,r=s()*e;t.lineWidth=Mt(s,.6,2.3),t.beginPath(),t.moveTo(n,r);let a=n,o=r;for(let c=0;c<5;c+=1)a+=Mt(s,-25,25),o+=Mt(s,-18,18),t.lineTo(a,o);t.stroke()}for(let i=0;i<700;i+=1){const n=70+s()*100;t.fillStyle=`rgba(${n}, ${n+5}, ${n}, ${.05+s()*.13})`,t.fillRect(s()*e,s()*e,1.2,1.2)}},2,2)}function C0(){const s=ln(223);return cn(256,(t,e)=>{t.fillStyle="#5e3d27",t.fillRect(0,0,e,e);for(let i=0;i<e;i+=3){const n=16+s()*24;t.strokeStyle=`hsla(${24+s()*12}, 34%, ${n}%, ${.24+s()*.44})`,t.lineWidth=Mt(s,.7,3.4),t.beginPath(),t.moveTo(i,0);for(let r=0;r<=e;r+=20)t.lineTo(i+Math.sin(r*.09+i)*2.5+Mt(s,-1.4,1.4),r);t.stroke()}},1,2)}function Bc(){const s=ln(712);return cn(256,(t,e)=>{t.fillStyle="#4d5961",t.fillRect(0,0,e,e);for(let i=0;i<900;i+=1){const n=45+s()*105;t.fillStyle=`rgba(${n}, ${n+6}, ${n+8}, ${.06+s()*.18})`,t.fillRect(s()*e,s()*e,Mt(s,.5,3),Mt(s,.5,2))}for(let i=0;i<16;i+=1){t.strokeStyle=`rgba(255, 255, 255, ${.03+s()*.08})`,t.lineWidth=.7,t.beginPath();const n=s()*e;t.moveTo(0,n),t.lineTo(e,n+Mt(s,-8,8)),t.stroke()}},2,2)}function P0(){const s=ln(40);return cn(512,(t,e)=>{t.clearRect(0,0,e,e);for(let i=0;i<30;i+=1){const n=e*.5+Mt(s,-e*.3,e*.3),r=e*.55+Mt(s,-e*.16,e*.16),a=Mt(s,28,95),o=t.createRadialGradient(n,r,0,n,r,a);o.addColorStop(0,"rgba(255, 248, 239, .19)"),o.addColorStop(.45,"rgba(255, 241, 226, .12)"),o.addColorStop(1,"rgba(255, 240, 225, 0)"),t.fillStyle=o,t.beginPath(),t.arc(n,r,a,0,Math.PI*2),t.fill()}},1,1)}function Bn(){return cn(128,(s,t)=>{const e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,244,192,.9)"),e.addColorStop(.5,"rgba(255,194,70,.36)"),e.addColorStop(1,"rgba(255,180,40,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)})}const ql=240;class L0{constructor(t,e){this.scene=t,this.renderer=e,this.random=ln(20261022),this.raycastTargets=[],this.colliders=[],this.surfaces=[],this.obstacleCircles=[],this.clouds=[],this.fireLights=[],this.fireEmbers=[],this.glowRings=[],this.chestSpots=[],this.pois=[{name:"RANGER CAMP",x:-27,z:-17},{name:"STONE CIRCLE",x:25,z:18},{name:"NORTH WATCH",x:2,z:-38}],this.grassTexture=A0(),this.woodTexture=yr(),this.stoneTexture=R0(),this.barkTexture=C0(),this.cloudTexture=P0(),this.glowTexture=Bn(),this.materials={wood:new Ot({map:this.woodTexture,color:14659716,roughness:.82}),darkWood:new Ot({map:this.woodTexture,color:8871996,roughness:.9}),stone:new Ot({map:this.stoneTexture,color:11122097,roughness:.94,flatShading:!0}),roof:new Ot({map:this.woodTexture,color:6245435,roughness:.9}),canvas:new Ot({color:8945771,roughness:1,side:qe}),gold:new Ot({color:16760645,metalness:.6,roughness:.34,emissive:5911040,emissiveIntensity:.38}),iron:new Ot({color:8227732,metalness:.65,roughness:.4})},this.setupSky(),this.setupLighting(),this.createTerrain(),this.createMountains(),this.createTrees(),this.createGroundDetails(),this.createRocks(),this.createRangerCamp(),this.createStoneCircle(),this.createNorthWatch(),this.createClouds(),this.createAtmosphere()}heightAt(t,e){const i=Math.hypot(t,e);let n=(ra(t*.018+3.7,e*.018+9.1,4)-.45)*10;n+=(ra(t*.058+8.2,e*.058-1.3,3)-.5)*2.3,n+=Math.sin(t*.033+1.1)*.58+Math.cos(e*.029-.7)*.48,n+=Qs(76,112,i)*14;const r=Math.hypot(t,e-11),a=1-Qs(2,15,r);return n=os(n,.65,a*.62),n}setupSky(){const t=new vo(420,40,24),e=new ti({side:He,depthWrite:!1,uniforms:{topColor:{value:new It(2444664)},midColor:{value:new It(8893642)},horizonColor:{value:new It(16171928)},groundColor:{value:new It(14066563)},sunDirection:{value:new P(.42,.44,-.79).normalize()}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 groundColor;
        uniform vec3 sunDirection;
        varying vec3 vWorldPosition;
        void main() {
          vec3 direction = normalize(vWorldPosition);
          float h = direction.y;
          vec3 color = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          color = mix(color, topColor, smoothstep(0.28, 0.78, h));
          color = mix(groundColor, color, smoothstep(-0.08, 0.025, h));
          float sunAmount = max(dot(direction, sunDirection), 0.0);
          color += vec3(1.0, 0.53, 0.24) * pow(sunAmount, 18.0) * 0.26;
          color += vec3(1.0, 0.76, 0.5) * pow(sunAmount, 90.0) * 0.7;
          float band = sin((h + 0.14) * 28.0 + direction.x * 5.0) * 0.5 + 0.5;
          color += vec3(0.95, 0.65, 0.48) * band * smoothstep(0.2, -0.02, h) * 0.028;
          gl_FragColor = vec4(color, 1.0);
        }
      `});this.sky=new rt(t,e),this.scene.add(this.sky);const i=new kn(new sn({map:Bn(),color:16768418,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,blending:Ce}));i.position.set(-118,128,190),i.scale.set(100,100,1),this.scene.add(i),this.scene.fog=new uo(12360325,.0045)}setupLighting(){const t=new Tc(10474212,4999983,1.12);this.scene.add(t);const e=new pr(16765088,2.6);e.position.set(-38,58,42),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=150,e.shadow.camera.left=-55,e.shadow.camera.right=55,e.shadow.camera.top=55,e.shadow.camera.bottom=-55,e.shadow.bias=-6e-4,e.shadow.normalBias=.025,this.scene.add(e),this.scene.add(e.target),this.sunLight=e;const i=new pr(8107737,.38);i.position.set(45,22,-70),this.scene.add(i)}createTerrain(){const t=new rn(ql,ql,150,150);t.rotateX(-Math.PI/2);const e=t.attributes.position,i=[],n=new It;for(let o=0;o<e.count;o+=1){const c=e.getX(o),l=e.getZ(o),u=this.heightAt(c,l);e.setY(o,u);const d=ra(c*.048+12,l*.048-5,3),h=Qs(10,18,u),p=Qs(.55,.72,d);n.setHSL(.245+d*.028,.33-h*.16,.55+p*.08-h*.03),n.lerp(new It(9343618),h*.55),i.push(n.r,n.g,n.b)}t.setAttribute("color",new re(i,3)),t.computeVertexNormals();const r=new Ot({map:this.grassTexture,vertexColors:!0,roughness:.96,metalness:0}),a=new rt(t,r);a.receiveShadow=!0,a.name="terrain",this.scene.add(a),this.terrain=a,this.raycastTargets.push(a)}createMountains(){const t=new ri(1,1,5),e=new Ot({color:5270120,roughness:1,flatShading:!0,fog:!0}),i=new Bi(t,e,18);i.castShadow=!1,i.receiveShadow=!0;const n=new le;for(let r=0;r<18;r+=1){const a=r/18*Math.PI*2+this.random()*.2,o=Mt(this.random,115,152),c=Mt(this.random,18,38),l=Mt(this.random,26,58);n.position.set(Math.cos(a)*o,l*.5-8,Math.sin(a)*o),n.rotation.y=this.random()*Math.PI,n.scale.set(c,l,c*Mt(this.random,.75,1.2)),n.updateMatrix(),i.setMatrixAt(r,n.matrix)}i.instanceMatrix.needsUpdate=!0,this.scene.add(i)}createTrees(){const e=[],i=[],n=[],r=[{x:0,z:11,r:9},{x:-27,z:-17,r:11},{x:25,z:18,r:11},{x:2,z:-38,r:9}];for(let T=0;T<700&&n.length<88;T+=1){const v=this.random()*Math.PI*2,w=Math.sqrt(this.random())*92,b=Math.cos(v)*w,R=Math.sin(v)*w;if(r.some(C=>Math.hypot(b-C.x,R-C.z)<C.r)||n.some(C=>Math.hypot(b-C.x,R-C.z)<3.6))continue;const _=this.random()>.42,E=Mt(this.random,.8,1.65);n.push({x:b,z:R,y:this.heightAt(b,R),scale:E,isPine:_,rotation:this.random()*Math.PI*2}),_?e.push(n.length-1):i.push(n.length-1),this.obstacleCircles.push({x:b,z:R,radius:.48*E+.22})}const a=new me(.22,.38,2.8,6);a.translate(0,1.4,0);const o=new Ot({map:this.barkTexture,color:10188889,roughness:.95}),c=new Bi(a,o,n.length);c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c),this.raycastTargets.push(c);const l=new le,u=new It;n.forEach((T,v)=>{l.position.set(T.x,T.y,T.z),l.rotation.set(0,T.rotation,0),l.scale.set(T.scale,T.scale,T.scale),l.updateMatrix(),c.setMatrixAt(v,l.matrix)});const d=new ri(1.82,3.1,7);d.translate(0,1.55,0);const h=new Ot({color:16777215,roughness:.92,flatShading:!0}),p=new Bi(d,h,e.length*3);p.castShadow=!0,p.receiveShadow=!0;let x=0;e.forEach(T=>{const v=n[T];for(let w=0;w<3;w+=1){const b=v.scale*(1-w*.19);l.position.set(v.x,v.y+1.85*v.scale+w*1.08*v.scale,v.z),l.rotation.set(0,v.rotation+w*.4,0),l.scale.set(b*(1+w*.04),b,b*(1+w*.04)),l.updateMatrix(),p.setMatrixAt(x,l.matrix),u.setHSL(.285+this.random()*.045,.42+this.random()*.15,.22+this.random()*.07),p.setColorAt(x,u),x+=1}}),p.instanceMatrix.needsUpdate=!0,p.instanceColor.needsUpdate=!0,this.scene.add(p),this.raycastTargets.push(p);const y=new In(1.65,0),m=new Ot({color:16777215,roughness:.94,flatShading:!0}),f=new Bi(y,m,i.length*3);f.castShadow=!0,f.receiveShadow=!0;let S=0;i.forEach(T=>{const v=n[T];[[0,3.7,0,1.2],[-.9,4.5,.4,.85],[.8,4.8,-.35,.9]].forEach((b,R)=>{l.position.set(v.x+b[0]*v.scale,v.y+b[1]*v.scale,v.z+b[2]*v.scale),l.rotation.set(R*.4,v.rotation+R,R*.3),l.scale.set(v.scale*b[3],v.scale*b[3]*Mt(this.random,.85,1.12),v.scale*b[3]),l.updateMatrix(),f.setMatrixAt(S,l.matrix),u.setHSL(.255+this.random()*.045,.44+this.random()*.14,.26+this.random()*.07),f.setColorAt(S,u),S+=1})}),f.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0,this.scene.add(f),this.raycastTargets.push(f),c.instanceMatrix.needsUpdate=!0}createGroundDetails(){const t=new le,e=new It,i=new In(.7,0),n=new Ot({color:16777215,roughness:1,flatShading:!0}),r=new Bi(i,n,110);r.castShadow=!0;for(let p=0;p<110;p+=1){const x=this.random()*Math.PI*2,y=Math.sqrt(this.random())*86,m=Math.cos(x)*y,f=Math.sin(x)*y,S=Mt(this.random,.45,1.2);t.position.set(m,this.heightAt(m,f)+S*.15,f),t.rotation.set(0,this.random()*Math.PI,0),t.scale.set(S,S*Mt(this.random,.65,1),S),t.updateMatrix(),r.setMatrixAt(p,t.matrix),e.setHSL(.27+this.random()*.05,.4,.25+this.random()*.08),r.setColorAt(p,e)}r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,this.scene.add(r);const a=new ri(.075,.5,3);a.translate(0,.25,0);const o=new Ot({color:16777215,roughness:1}),c=new Bi(a,o,720);c.castShadow=!1;for(let p=0;p<720;p+=1){const x=this.random()*Math.PI*2,y=Math.sqrt(this.random())*94,m=Math.cos(x)*y,f=Math.sin(x)*y,S=Mt(this.random,.55,1.55);t.position.set(m,this.heightAt(m,f),f),t.rotation.set(Mt(this.random,-.12,.12),this.random()*Math.PI,Mt(this.random,-.14,.14)),t.scale.set(S,S,S),t.updateMatrix(),c.setMatrixAt(p,t.matrix),e.setHSL(.22+this.random()*.06,.4,.32+this.random()*.13),c.setColorAt(p,e)}c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,this.scene.add(c);const l=new xo(.11,0),u=new Ot({color:16777215,roughness:.8,emissive:2232576,emissiveIntensity:.15}),d=new Bi(l,u,170),h=[16768378,16758473,15265986,12426239,16774364];for(let p=0;p<170;p+=1){const x=this.random()*Math.PI*2,y=Math.sqrt(this.random())*80,m=Math.cos(x)*y,f=Math.sin(x)*y;t.position.set(m,this.heightAt(m,f)+.18,f),t.rotation.set(0,this.random()*Math.PI,0),t.scale.setScalar(Mt(this.random,.65,1.35)),t.updateMatrix(),d.setMatrixAt(p,t.matrix),d.setColorAt(p,e.setHex(h[Math.floor(this.random()*h.length)]))}d.instanceMatrix.needsUpdate=!0,d.instanceColor.needsUpdate=!0,this.scene.add(d)}createRocks(){const t=new In(1,0),e=new Ot({color:16777215,roughness:.98,flatShading:!0}),i=new Bi(t,e,44);i.castShadow=!0,i.receiveShadow=!0;const n=new le,r=new It;for(let a=0;a<44;a+=1){const o=this.random()*Math.PI*2,c=Mt(this.random,12,92),l=Math.cos(o)*c,u=Math.sin(o)*c,d=Mt(this.random,.35,2.15);n.position.set(l,this.heightAt(l,u)+d*.16,u),n.rotation.set(this.random()*.6,this.random()*Math.PI,this.random()*.5),n.scale.set(d*Mt(this.random,.7,1.2),d*Mt(this.random,.55,1.1),d*Mt(this.random,.7,1.2)),n.updateMatrix(),i.setMatrixAt(a,n.matrix),r.setHSL(.18,.05,.38+this.random()*.16),i.setColorAt(a,r),d>1.35&&this.obstacleCircles.push({x:l,z:u,radius:d*.8})}i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,this.scene.add(i),this.raycastTargets.push(i)}createRangerCamp(){const t=this.pois[0],e=this.heightAt(t.x,t.z)+.35,i=new we;i.position.set(t.x,e,t.z),i.rotation.y=.12,this.scene.add(i);const n=new rt(new nt(14,1.1,12),this.materials.stone);n.position.y=-.55,n.receiveShadow=!0,n.castShadow=!0,i.add(n),this.registerSurfaceBox(n,i);const r=3.3,a=(f,S,T,v,w,b,R=this.materials.wood)=>{const _=new rt(new nt(f,S,T),R);return _.position.set(v,w,b),_.castShadow=!0,_.receiveShadow=!0,i.add(_),this.registerCollider(_,i),this.raycastTargets.push(_),_};a(13.2,r,.32,0,r/2,-5.8),a(.32,r,11.3,-6.5,r/2,0),a(.32,r,11.3,6.5,r/2,0),a(4.2,r,.32,-4.4,r/2,5.8),a(4.2,r,.32,4.4,r/2,5.8),a(4.4,1.1,.32,0,r-.55,5.8);const o=new Ot({color:1846065,roughness:.3,metalness:.2,transparent:!0,opacity:.5});for(const[f,S,T]of[[0,-5.62,0],[-6.32,1.4,Math.PI/2],[6.32,-1.2,Math.PI/2]]){const v=new rt(new nt(2.1,1.1,.06),o);v.position.set(f,2,S),v.rotation.y=T,i.add(v)}const c=new rt(new nt(7.2,.24,12.6),this.materials.roof);c.position.set(-3.25,r+1.25,0),c.rotation.z=.38,c.castShadow=!0,i.add(c),this.raycastTargets.push(c);const l=new rt(new nt(7.2,.24,12.6),this.materials.roof);l.position.set(3.25,r+1.25,0),l.rotation.z=-.38,l.castShadow=!0,i.add(l),this.raycastTargets.push(l);const u=new rt(new nt(1,2.8,1),this.materials.stone);u.position.set(-4.3,r+1.5,-3.1),u.castShadow=!0,i.add(u),this.raycastTargets.push(u);const d=new rt(new nt(2.8,.18,1.2),this.materials.darkWood);d.position.set(2.3,1.05,-2.8),d.castShadow=!0,i.add(d),this.raycastTargets.push(d);for(const[f,S]of[[1.25,-3.3],[3.35,-3.3],[1.25,-2.3],[3.35,-2.3]]){const T=new rt(new nt(.16,1,.16),this.materials.darkWood);T.position.set(f,.52,S),i.add(T)}for(let f=0;f<4;f+=1){const S=new rt(new nt(.82,.82,.82),this.materials.wood);S.position.set(-4.7+f%2*.9,.44+Math.floor(f/2)*.82,-4.2),S.rotation.y=f%2*.12,S.castShadow=!0,S.receiveShadow=!0,i.add(S),this.raycastTargets.push(S),this.registerCollider(S,i)}const h=new rt(new rn(5.5,4.2),new Ot({color:7159094,roughness:1}));h.rotation.x=-Math.PI/2,h.position.set(0,.011,.3),h.receiveShadow=!0,i.add(h);const p=new we;p.position.set(9.4,0,3.5);for(let f=0;f<9;f+=1){const S=new rt(new In(.26,0),this.materials.stone),T=f/9*Math.PI*2;S.position.set(Math.cos(T)*.9,.15,Math.sin(T)*.9),S.scale.y=.65,S.castShadow=!0,p.add(S)}for(let f=0;f<4;f+=1){const S=new rt(new me(.11,.14,1.4,5),this.materials.darkWood);S.rotation.z=Math.PI/2,S.rotation.y=f/4*Math.PI,S.position.y=.22,p.add(S)}const x=new rt(new ri(.38,1.4,6),new _i({color:16758077,transparent:!0,opacity:.92,blending:Ce,depthWrite:!1}));x.position.y=.9,p.add(x);const y=new ji(16747061,5,16,1.7);y.position.y=1.2,p.add(y),this.fireLights.push({light:y,base:5,seed:this.random()*10}),i.add(p),this.fireEmbers.push({group:p,flame:x,seed:this.random()*10}),this.raycastTargets.push(...p.children.filter(f=>f.isMesh));const m=new rt(new nt(.9,.75,.9),this.materials.darkWood);m.position.set(5.2,.38,4),m.castShadow=!0,i.add(m),this.raycastTargets.push(m),this.chestSpots.push({x:t.x+2.1,z:t.z+1.8,y:e+.02,rotation:-.5,poi:t.name})}createStoneCircle(){const t=this.pois[1],e=this.heightAt(t.x,t.z),i=new we;i.position.set(t.x,e,t.z),this.scene.add(i);const n=new rt(new me(8.2,8.8,.55,14),this.materials.stone);n.position.y=.05,n.receiveShadow=!0,n.castShadow=!0,i.add(n),this.raycastTargets.push(n),this.surfaces.push({type:"circle",x:t.x,z:t.z,radius:8.2,y:e+.325});for(let l=0;l<7;l+=1){const u=l/7*Math.PI*2+.2,d=6.5,h=new rt(new nt(Mt(this.random,1.2,2.1),Mt(this.random,2.7,4.5),.75),this.materials.stone);h.position.set(Math.cos(u)*d,1.4+Mt(this.random,0,.8),Math.sin(u)*d),h.rotation.y=-u+Mt(this.random,-.18,.18),h.rotation.z=Mt(this.random,-.07,.07),h.castShadow=!0,h.receiveShadow=!0,i.add(h),this.raycastTargets.push(h)}const r=new rt(new me(2.1,2.5,.85,8),this.materials.stone);r.position.y=.7,r.castShadow=!0,r.receiveShadow=!0,i.add(r),this.registerCollider(r,i),this.raycastTargets.push(r);const a=new _i({color:8189408,transparent:!0,opacity:.75,blending:Ce,depthWrite:!1}),o=new rt(new ms(3.3,4.1,48),a);o.rotation.x=-Math.PI/2,o.position.y=.36,i.add(o),this.glowRings.push({mesh:o,seed:this.random()*5,speed:.5});const c=new ji(6550750,2.4,16,2);c.position.y=2,i.add(c),this.chestSpots.push({x:t.x,z:t.z,y:e+1.15,rotation:.15,poi:t.name})}createNorthWatch(){const t=this.pois[2],e=this.heightAt(t.x,t.z),i=new we;i.position.set(t.x,e,t.z),i.rotation.y=-.35,this.scene.add(i);const n=4.7;[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]].forEach(([m,f])=>{const S=new rt(new nt(.46,n,.46),this.materials.darkWood);S.position.set(m,n/2,f),S.castShadow=!0,S.receiveShadow=!0,i.add(S),this.raycastTargets.push(S),this.obstacleCircles.push({x:t.x+m*Math.cos(-.35)-f*Math.sin(-.35),z:t.z+m*Math.sin(-.35)+f*Math.cos(-.35),radius:.55})});const a=new rt(new nt(6.1,.3,6.1),this.materials.wood);a.position.y=n,a.castShadow=!0,a.receiveShadow=!0,i.add(a),this.registerCollider(a,i),this.raycastTargets.push(a);for(let m=0;m<4;m+=1){for(let S=-2;S<=2;S+=1){const T=new rt(new nt(.12,1.1,.12),this.materials.darkWood);m<2?T.position.set(S*1.15,n+.68,m===0?-2.9:2.9):T.position.set(m===2?-2.9:2.9,n+.68,S*1.15),i.add(T)}const f=new rt(new nt(m<2?5.9:.12,.12,m<2?.12:5.9),this.materials.wood);f.position.set(m===2?-2.9:m===3?2.9:0,n+1.15,m===0?-2.9:m===1?2.9:0),i.add(f)}[[-2.2,2.2,.18],[2.2,-2.2,-.18]].forEach(([m,f,S])=>{const T=new rt(new nt(.18,5.5,.18),this.materials.darkWood);T.position.set(m*.5,2.2,f*.5),T.rotation.z=S,T.rotation.x=-S*1.6,i.add(T)});const c=new rt(new ri(4.4,2.3,4),new Ot({color:6178354,roughness:.9,flatShading:!0}));c.position.y=n+3.1,c.rotation.y=Math.PI/4,c.castShadow=!0,i.add(c),this.raycastTargets.push(c);const l=new we;for(const m of[-.35,.35]){const f=new rt(new nt(.1,4.6,.1),this.materials.darkWood);f.position.set(m,2.3,0),l.add(f)}for(let m=0;m<10;m+=1){const f=new rt(new nt(.9,.09,.09),this.materials.wood);f.position.set(0,.35+m*.43,0),l.add(f)}l.position.set(0,0,3.15),i.add(l);const u=new rt(new me(.5,.28,.45,7),this.materials.iron);u.position.set(0,n+1.65,0),i.add(u);const d=new rt(new ri(.35,1,6),new _i({color:16753211,transparent:!0,opacity:.8,blending:Ce,depthWrite:!1}));d.position.set(0,n+2.2,0),i.add(d);const h=new ji(16747578,3.2,12,1.8);h.position.set(0,n+2.2,0),i.add(h),this.fireLights.push({light:h,base:3.2,seed:this.random()*10});const p=new rt(new nt(1.05,1.05,1.05),this.materials.wood);p.position.set(-2.1,.52,-2.1),p.rotation.y=.3,p.castShadow=!0,p.receiveShadow=!0,i.add(p),this.registerCollider(p,i),this.raycastTargets.push(p);const x=new rt(new nt(.18,2.3,.18),this.materials.darkWood);x.position.set(3.4,1.15,2.4),i.add(x);const y=new rt(new nt(1.8,.65,.12),this.materials.wood);y.position.set(3.4,2.05,2.4),y.rotation.y=.2,i.add(y),this.chestSpots.push({x:t.x+Math.cos(-.35)*1.2-Math.sin(-.35)*1.9,z:t.z+Math.sin(-.35)*1.2+Math.cos(-.35)*1.9,y:e+.02,rotation:.2,poi:t.name})}createClouds(){for(let t=0;t<20;t+=1){const e=new sn({map:this.cloudTexture,color:t%3===0?16769477:15594744,transparent:!0,opacity:Mt(this.random,.28,.52),depthWrite:!1,fog:!1}),i=new kn(e),n=this.random()*Math.PI*2,r=Mt(this.random,80,240);i.position.set(Math.cos(n)*r,Mt(this.random,45,105),Math.sin(n)*r);const a=Mt(this.random,45,110);i.scale.set(a,a*.42,1),this.scene.add(i),this.clouds.push({sprite:i,speed:Mt(this.random,.06,.2),startX:i.position.x})}}createAtmosphere(){const e=new Float32Array(780),i=new Float32Array(260);for(let o=0;o<260;o+=1){const c=this.random()*Math.PI*2,l=Math.sqrt(this.random())*85;e[o*3]=Math.cos(c)*l,e[o*3+1]=this.heightAt(e[o*3],Math.sin(c)*l)+Mt(this.random,.6,7),e[o*3+2]=Math.sin(c)*l,i[o]=this.random()*Math.PI*2}const n=new ge;n.setAttribute("position",new Ve(e,3));const r=new xr({color:16773048,size:.09,transparent:!0,opacity:.7,depthWrite:!1,blending:Ce,map:Bn()}),a=new mo(n,r);this.scene.add(a),this.motes={points:a,phases:i,basePositions:e.slice()}}registerCollider(t,e){e.updateMatrixWorld(!0);const i=new Pi().setFromObject(t);this.colliders.push({minX:i.min.x,maxX:i.max.x,minY:i.min.y,maxY:i.max.y,minZ:i.min.z,maxZ:i.max.z})}registerSurfaceBox(t,e){e.updateMatrixWorld(!0);const i=new Pi().setFromObject(t);this.surfaces.push({type:"box",minX:i.min.x,maxX:i.max.x,minZ:i.min.z,maxZ:i.max.z,y:i.max.y})}getSurfaceHeight(t,e,i=1/0){let n=-1/0;for(const r of this.surfaces)r.y>i||(r.type==="circle"?Math.hypot(t-r.x,e-r.z)<=r.radius&&(n=Math.max(n,r.y)):t>=r.minX&&t<=r.maxX&&e>=r.minZ&&e<=r.maxZ&&(n=Math.max(n,r.y)));return n}update(t,e){const i=performance.now()*.001;e&&(this.sunLight.position.set(e.x-38,e.y+58,e.z+42),this.sunLight.target.position.set(e.x,e.y,e.z),this.sunLight.target.updateMatrixWorld());for(const n of this.clouds)n.sprite.position.x=n.startX+Math.sin(i*n.speed+n.startX)*10;for(const n of this.fireLights)n.light.intensity=n.base*(.82+Math.sin(i*8+n.seed)*.12+Math.sin(i*17+n.seed*2)*.07);for(const n of this.fireEmbers){const r=.82+Math.sin(i*11+n.seed)*.18;n.flame.scale.set(r,.82+Math.sin(i*14+n.seed)*.16,r)}for(const n of this.glowRings)n.mesh.material.opacity=.46+Math.sin(i*1.8+n.seed)*.16,n.mesh.rotation.z+=t*n.speed;if(this.motes){const n=this.motes.points.geometry.attributes.position.array;for(let r=0;r<this.motes.phases.length;r+=1){const a=this.motes.phases[r];n[r*3]=this.motes.basePositions[r*3]+Math.sin(i*.32+a)*1.7,n[r*3+1]=this.motes.basePositions[r*3+1]+Math.sin(i*.65+a)*.55,n[r*3+2]=this.motes.basePositions[r*3+2]+Math.cos(i*.27+a)*1.7}this.motes.points.geometry.attributes.position.needsUpdate=!0}}getColliders(){return this.colliders}getObstacleCircles(){return this.obstacleCircles}}const D0=new Set(["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight"]);class I0{constructor(t,e,i,n){this.camera=t,this.camera.rotation.order="YXZ",this.world=e,this.buildSystem=i,this.audio=n,this.position=new P(0,e.heightAt(0,13),13),this.velocity=new P,this.radius=.38,this.height=1.75,this.eyeHeight=1.64,this.yaw=0,this.pitch=-.035,this.sensitivity=.0019,this.grounded=!0,this.enabled=!1,this.alive=!0,this.health=100,this.maxHealth=100,this.shield=0,this.maxShield=100,this.eliminations=0,this.damageDealt=0,this.lastDamageAt=-10,this.keys=new Set,this.jumpQueued=!1,this.walkTime=0,this.bob=0,this.bobRoll=0,this.recoil=0,this.recoilYaw=0,this.landKick=0,this.moving=!1,this.speed=0,this.sprinting=!1,this.stepTimer=0,this.enabledAt=0,this.camera.position.set(this.position.x,this.position.y+this.eyeHeight,this.position.z),this.applyCameraRotation(0),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onBlur=this.onBlur.bind(this),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("blur",this.onBlur)}reset(){this.position.set(0,this.world.heightAt(0,13),13),this.velocity.set(0,0,0),this.yaw=0,this.pitch=-.035,this.health=this.maxHealth,this.shield=0,this.alive=!0,this.eliminations=0,this.damageDealt=0,this.grounded=!0,this.jumpQueued=!1,this.recoil=0,this.applyCameraRotation(0)}onKeyDown(t){this.enabled&&(D0.has(t.code)&&(this.keys.add(t.code),t.code.startsWith("Shift")&&(this.sprinting=!0)),t.code==="Space"&&!t.repeat&&(t.preventDefault(),this.jumpQueued=!0))}onKeyUp(t){this.keys.delete(t.code),(t.code==="ShiftLeft"||t.code==="ShiftRight")&&(this.sprinting=!1)}onMouseMove(t){!this.enabled||document.pointerLockElement===null||(this.yaw-=t.movementX*this.sensitivity,this.pitch-=t.movementY*this.sensitivity,this.pitch=Fe(this.pitch,-1.35,1.32))}onBlur(){this.keys.clear(),this.sprinting=!1}applyCameraRotation(t){this.camera.rotation.set(this.pitch+this.recoil+this.landKick,this.yaw+this.recoilYaw,this.bobRoll),this.camera.position.set(this.position.x,this.position.y+this.eyeHeight+this.bob,this.position.z)}update(t,e){if(!this.enabled||!this.alive)return;const i=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),n=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),r=this.sprinting&&i>0&&this.grounded,a=r?9.1:6.05,o=Math.hypot(i,n)>0?a:0,c=Math.sin(this.yaw),l=Math.cos(this.yaw);let u=-c*i+l*n,d=-l*i-c*n;const h=Math.hypot(u,d);h>0&&(u/=h,d/=h);const p=this.grounded?13:4.2;this.velocity.x=ki(this.velocity.x,u*o,p,t),this.velocity.z=ki(this.velocity.z,d*o,p,t),this.jumpQueued&&(this.jumpQueued=!1,this.grounded&&(this.velocity.y=8.3,this.grounded=!1,this.audio?.jump())),this.velocity.y-=23.5*t,this.velocity.y=Math.max(this.velocity.y,-32),this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.resolveHorizontalCollisions(),this.position.x=Fe(this.position.x,-96,96),this.position.z=Fe(this.position.z,-96,96);const x=this.grounded;this.position.y+=this.velocity.y*t;const y=this.world.heightAt(this.position.x,this.position.z),m=this.buildSystem.getSupportHeight(this.position.x,this.position.z,this.position.y),f=.7,S=this.world.getSurfaceHeight(this.position.x,this.position.z,this.position.y+f),T=Math.max(y,m,S);this.velocity.y<=0&&this.position.y<=T+.035?(!x&&this.velocity.y<-8&&(this.landKick=Fe(this.velocity.y*.0028,-.035,-.008),this.audio?.land()),this.position.y=T,this.velocity.y=0,this.grounded=!0):x&&T>this.position.y&&T-this.position.y<=f?(this.position.y=T,this.velocity.y=0,this.grounded=!0):this.grounded=!1;const v=Math.hypot(this.velocity.x,this.velocity.z);this.speed=v,this.moving=v>.4,this.grounded&&v>.5?(this.walkTime+=t*(r?11.5:8.4),this.bob=Math.sin(this.walkTime)*(r?.045:.028)*Math.min(1,v/6),this.bobRoll=Math.sin(this.walkTime*.5)*.007,this.stepTimer-=t*(r?2:1.4),this.stepTimer<=0&&(this.stepTimer=.48,this.audio?.footstep())):(this.bob=ki(this.bob,0,8,t),this.bobRoll=ki(this.bobRoll,0,8,t)),this.landKick=ki(this.landKick,0,9,t),this.recoil=ki(this.recoil,0,12,t),this.recoilYaw=ki(this.recoilYaw,0,12,t),this.applyCameraRotation(t),this.lastDamageAt+=0}resolveHorizontalCollisions(){const t=this.radius,e=this.position.y+.58,i=this.position.y+this.height,n=r=>{if(r.maxY<=e||r.minY>=i)return;const a=this.position.x,o=this.position.z,c=Fe(a,r.minX,r.maxX),l=Fe(o,r.minZ,r.maxZ);let u=a-c,d=o-l;const h=u*u+d*d;if(!(h>=t*t))if(h>1e-6){const p=Math.sqrt(h),x=t-p;this.position.x+=u/p*x,this.position.z+=d/p*x}else{const p=a-r.minX,x=r.maxX-a,y=o-r.minZ,m=r.maxZ-o,f=Math.min(p,x,y,m);f===p?this.position.x=r.minX-t:f===x?this.position.x=r.maxX+t:f===y?this.position.z=r.minZ-t:this.position.z=r.maxZ+t}};for(const r of this.world.getColliders())n(r);for(const r of this.buildSystem.getWallColliders())n(r);for(const r of this.world.getObstacleCircles()){const a=this.position.x-r.x,o=this.position.z-r.z,c=r.radius+t,l=a*a+o*o;if(l<c*c&&l>1e-4){const u=Math.sqrt(l);this.position.x=r.x+a/u*c,this.position.z=r.z+o/u*c}}}addRecoil(t,e=0){this.recoil+=t,this.recoilYaw+=e}takeDamage(t,e="ENEMY"){if(!this.alive)return 0;const i=this.health;let n=t;if(this.shield>0){const a=Math.min(this.shield,n);this.shield-=a,n-=a}this.health=Math.max(0,this.health-n),this.lastDamageAt=0,this.lastDamageSource=e;const r=i-this.health;return this.health<=0&&(this.alive=!1,this.health=0),this.onDamage?.(r,e),r}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}addShield(t){this.shield=Math.min(this.maxShield,this.shield+t)}getAimDirection(t=new P){return this.camera.getWorldDirection(t)}getHeadPosition(t=new P){return t.set(this.position.x,this.position.y+this.eyeHeight,this.position.z)}getChestPosition(t=new P){return t.set(this.position.x,this.position.y+1.1,this.position.z)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("blur",this.onBlur)}}const Pn=[{id:"wall",name:"WALL",height:4},{id:"floor",name:"FLOOR",height:.3},{id:"ramp",name:"RAMP",height:2.4}],ee=4,zc=2.4,Ln=Math.asin(zc/ee);class U0{constructor(t,e,i,n,r){this.scene=t,this.world=e,this.camera=i,this.effects=n,this.audio=r,this.active=!1,this.selected=0,this.pieces=[],this.wallColliders=[],this.raycastMeshes=[],this.ghostValid=!1,this.ghostPoint=new P,this.ghostBase=0,this.ghostRotation=0,this.placementCooldown=0,this.raycaster=new gs,this.center=new Lt(0,0),this.woodTexture=yr(),this.materials={wall:new Ot({map:this.woodTexture,color:14263923,roughness:.82,metalness:.02}),wallDark:new Ot({map:this.woodTexture,color:9264438,roughness:.9}),floor:new Ot({map:this.woodTexture,color:13210976,roughness:.86}),trim:new Ot({color:5913637,roughness:.92})},this.ghostGroup=new we,this.ghostGroup.visible=!1,this.scene.add(this.ghostGroup),this.ghostMaterial=new _i({color:7733208,transparent:!0,opacity:.28,depthWrite:!1,side:qe}),this.edgeMaterial=new po({color:12255214,transparent:!0,opacity:.9,depthWrite:!1}),this.ghosts={wall:this.createGhost(new nt(ee,Pn[0].height,.3),"wall"),floor:this.createGhost(new nt(ee,.3,ee),"floor"),ramp:this.createGhost(new nt(ee,.28,ee/Math.cos(Ln)),"ramp")},this.ghosts.wall.position.y=2,this.ghosts.floor.position.y=.15,this.ghosts.ramp.position.y=1.2,this.ghosts.ramp.rotation.x=Ln;for(const a of Object.values(this.ghosts))this.ghostGroup.add(a)}createGhost(t,e){const i=new rt(t,this.ghostMaterial.clone());i.renderOrder=8;const n=new dl(new gu(t),this.edgeMaterial.clone());n.renderOrder=9,i.add(n);const r=new dl(this.createGridGeometry(e),this.edgeMaterial.clone());return r.renderOrder=9,i.add(r),i.userData.edges=n,i.userData.grid=r,i}createGridGeometry(t){const e=[],i=(r,a)=>e.push(r[0],r[1],r[2],a[0],a[1],a[2]);if(t==="floor")for(let r=-2;r<=2;r+=1)i([r,.15,-2],[r,.15,2]),i([-2,.15,r],[2,.15,r]);else if(t==="ramp"){const r=2/Math.cos(Ln);for(let a=-2;a<=2;a+=1){i([a,.15,-r],[a,.15,r]);const o=a/2*r;i([-2,.15,o],[2,.15,o])}}else for(let r=-2;r<=2;r+=1)i([r,-2,.16],[r,2,.16]),i([-2,r,.16],[2,r,.16]),i([r,-2,-.16],[r,2,-.16]),i([-2,r,-.16],[2,r,-.16]);const n=new ge;return n.setAttribute("position",new re(e,3)),n}setActive(t){this.active=t,this.ghostGroup.visible=!1,t||(this.ghosts.wall.visible=!1,this.ghosts.floor.visible=!1,this.ghosts.ramp.visible=!1)}setSelected(t){this.selected=Fe(t,0,Pn.length-1),this.updateGhostVisibility()}updateGhostVisibility(){const t=Pn[this.selected].id;for(const[e,i]of Object.entries(this.ghosts))i.visible=e===t}updateGhost(t,e){if(this.placementCooldown=Math.max(0,this.placementCooldown-e),!this.active){this.ghostGroup.visible=!1;return}this.ghostGroup.visible=!0,this.updateGhostVisibility(),this.raycaster.setFromCamera(this.center,this.camera),this.raycaster.far=16;const i=[...this.world.raycastTargets,...this.raycastMeshes],r=this.raycaster.intersectObjects(i,!1)[0],a=this.camera.getWorldPosition(new P),o=this.camera.getWorldDirection(new P),c=r?Math.min(r.distance,11):8,l=a.clone().addScaledVector(o,c);r&&r.distance>.4&&(l.copy(r.point),c<r.distance&&l.copy(a.clone().addScaledVector(o,c))),l.y=Math.max(l.y,this.world.heightAt(l.x,l.z));const u=Math.round(l.x/ee)*ee,d=Math.round(l.z/ee)*ee,h=Pn[this.selected].id,p=this.surfaceHeightAt(u,d,l.y+.8),x=Number.isFinite(p)?p:this.world.heightAt(u,d);let y=0;(h==="wall"||h==="ramp")&&(y=Math.round(t.yaw/(Math.PI/2))*(Math.PI/2)),this.ghostPoint.set(u,x,d),this.ghostBase=x,this.ghostRotation=y,this.ghostGroup.position.set(u,x,d),this.ghostGroup.rotation.y=y;const m=Math.hypot(u-t.position.x,d-t.position.z),f=this.getSlope(u,d,h),S=this.pieces.some(_=>Math.abs(_.x-u)>.2||Math.abs(_.z-d)>.2||_.type!==h?!1:Math.abs(_.base-x)<1.05),T=m<2.6,v=m<=12,w=f<(h==="wall"?1.4:2);this.ghostValid=v&&!S&&!T&&w;const b=.25+Math.sin(performance.now()*.005)*.055,R=this.ghostValid?6750162:16732778;for(const _ of Object.values(this.ghosts))_.material.color.setHex(R),_.material.opacity=b,_.userData.edges.material.color.setHex(this.ghostValid?11927536:16756922),_.userData.edges.material.opacity=.7+Math.sin(performance.now()*.005)*.18,_.userData.grid.material.color.setHex(this.ghostValid?10354658:16753069),_.userData.grid.material.opacity=.42+Math.sin(performance.now()*.004)*.08;r&&(this.ghostPoint.y=x)}surfaceHeightAt(t,e,i=1/0){let n=this.world.heightAt(t,e);for(const r of this.pieces){const a=this.pieceTopAt(r,t,e);a!==null&&a<=i&&a>n&&(n=a)}return n}getSlope(t,e,i){if(i==="wall")return 0;const n=[this.world.heightAt(t-2,e-2),this.world.heightAt(t+2,e-2),this.world.heightAt(t-2,e+2),this.world.heightAt(t+2,e+2)];return Math.max(...n)-Math.min(...n)}place(){if(!this.active||!this.ghostValid||this.placementCooldown>0)return!1;const t=Pn[this.selected].id,e=this.createPiece(t,this.ghostPoint.x,this.ghostPoint.z,this.ghostBase,this.ghostRotation);return this.pieces.push(e),this.placementCooldown=.18,this.audio?.build(),this.effects?.burst(new P(e.x,e.base+.35,e.z),14133878,16,4.2,.12,10),this.rebuildColliders(),this.ghostValid=!1,!0}createPiece(t,e,i,n,r){const a=new we;a.position.set(e,n,i),a.rotation.y=r;const o=[];if(t==="wall"){const c=new rt(new nt(ee-.12,3.8,.28),this.materials.wall);c.position.y=2,c.castShadow=!0,c.receiveShadow=!0,a.add(c),o.push(c);for(let u=0;u<4;u+=1){const d=new rt(new nt(ee,.2,.36),this.materials.trim);d.position.set(0,.22+u*1.19,0),d.castShadow=!0,a.add(d),o.push(d)}const l=new rt(new nt(4.55,.16,.39),this.materials.wallDark);l.position.set(0,2,0),l.rotation.z=.82,a.add(l),o.push(l);for(const u of[-1,1]){const d=new rt(new nt(.22,4.05,.42),this.materials.trim);d.position.set(u*(ee/2-.08),2.02,0),d.castShadow=!0,a.add(d),o.push(d)}}else if(t==="floor"){const c=new rt(new nt(ee,.28,ee),this.materials.floor);c.position.y=.14,c.castShadow=!0,c.receiveShadow=!0,a.add(c),o.push(c);for(const l of[-1,1]){const u=new rt(new nt(ee,.18,.24),this.materials.trim);u.position.set(0,.03,l*(ee/2-.15)),a.add(u),o.push(u)}}else{const c=new rt(new nt(ee,.28,ee/Math.cos(Ln)),this.materials.floor);c.position.y=1.2,c.rotation.x=Ln,c.castShadow=!0,c.receiveShadow=!0,a.add(c),o.push(c);for(let l=0;l<4;l+=1){const u=new rt(new nt(ee,.12,.16),this.materials.trim);u.position.set(0,.35+l*.6,1.75-l*1.16),u.rotation.x=Ln,a.add(u),o.push(u)}}for(const c of o)c.userData.buildPiece=!0,this.raycastMeshes.push(c);return this.scene.add(a),{type:t,x:e,z:i,base:n,rotation:r,group:a,meshes:o,top:t==="wall"?n+4:t==="floor"?n+.28:n+2.4}}pieceTopAt(t,e,i){const n=e-t.x,r=i-t.z,a=Math.cos(-t.rotation),o=Math.sin(-t.rotation),c=n*a-r*o,l=n*o+r*a;if(t.type==="wall")return Math.abs(c)>ee/2||Math.abs(l)>.22?null:t.base+4;if(t.type==="floor")return Math.abs(c)>ee/2||Math.abs(l)>ee/2?null:t.base+.28;if(Math.abs(c)>ee/2||Math.abs(l)>ee/2)return null;const u=Fe((ee/2-l)/ee,0,1);return t.base+.14+u*zc}getSupportHeight(t,e,i){let r=-1/0;for(const a of this.pieces){const o=this.pieceTopAt(a,t,e);o!==null&&o<=i+.56&&o>r&&(r=o)}return r}rebuildColliders(){this.wallColliders=[];for(const t of this.pieces){if(t.type!=="wall")continue;const e=Math.abs(Math.cos(t.rotation)),i=Math.abs(Math.sin(t.rotation)),n=e*(ee/2)+i*.22,r=i*(ee/2)+e*.22;this.wallColliders.push({minX:t.x-n,maxX:t.x+n,minY:t.base,maxY:t.base+4,minZ:t.z-r,maxZ:t.z+r})}}getWallColliders(){return this.wallColliders}getRaycastMeshes(){return this.raycastMeshes}getGhostState(){return{active:this.active,valid:this.ghostValid,type:Pn[this.selected].id,x:this.ghostPoint.x,y:this.ghostBase,z:this.ghostPoint.z,rotation:this.ghostRotation,count:this.pieces.length}}}const Yl=new Lt(0,0);function je(s,t=.2,e=.55,i=0){return new Ot({color:s,metalness:t,roughness:e,emissive:i,emissiveIntensity:.18})}function Jt(s,t,e,i=[0,0,0],n=[0,0,0]){const r=new rt(t,e);return r.position.set(...i),r.rotation.set(...n),r.castShadow=!1,r.receiveShadow=!1,s.add(r),r}class N0{constructor(t,e,i,n){this.world=t,this.camera=e,this.effects=i,this.audio=n,this.raycaster=new gs,this.current="ar",this.triggerHeld=!1,this.cooldown=0,this.suppressed=!1,this.muzzleFlashTime=0,this.switchOffset=0,this.time=0,this.onBotHit=null,this.onShoot=null,this.weapons={ar:{id:"ar",name:"RANGER AR",type:"ASSAULT",mag:30,maxMag:30,reserve:120,damage:19,fireRate:.095,reloadTime:1.72,reloading:!1,reloadTimer:0,rarity:"COMMON",recoil:.017},pickaxe:{id:"pickaxe",name:"TRAILBLAZER",type:"TOOL",damage:48,fireRate:.56,cooldown:0,rarity:"STARTER"}},this.metalTexture=Bc(),this.woodTexture=yr(),this.buildViewScene(),this.buildRifle(),this.buildPickaxe(),this.setWeapon("ar",!0)}buildViewScene(){this.viewScene=new gc,this.viewCamera=new Xe(64,1,.01,20),this.viewCamera.position.set(0,0,0);const t=new Tc(14678015,4535592,2.8);this.viewScene.add(t);const e=new pr(16769205,4.6);e.position.set(-1.4,2.2,1.5),this.viewScene.add(e);const i=new pr(9231615,2.2);i.position.set(2,-.5,-1.5),this.viewScene.add(i);const n=new ji(16756830,3.4,4,2);n.position.set(-.8,.2,-.4),this.viewScene.add(n)}buildRifle(){const t=new we;t.position.set(.44,-.35,-.62),t.rotation.set(.015,-.03,-.012),t.userData.basePosition=t.position.clone(),t.userData.baseRotation=t.rotation.clone();const e=je(6913420,.72,.34),i=je(3226695,.66,.42),n=je(5661804,.22,.62),r=je(16758098,.3,.4,5908992),a=je(3160899,.08,.82),o=new Ot({color:1871752,emissive:3128496,emissiveIntensity:1.25,metalness:.45,roughness:.2}),c=je(2107954,.8,.32);Jt(t,new nt(.14,.15,.52),e,[0,.015,-.19]),Jt(t,new nt(.17,.08,.16),n,[0,.045,.065]),Jt(t,new nt(.11,.08,.32),n,[0,-.005,-.52]),Jt(t,new nt(.065,.032,.14),r,[0,.105,-.24]),Jt(t,new nt(.145,.025,.035),i,[0,.12,-.11]),Jt(t,new me(.021,.024,.42,10),i,[0,.02,-.88],[Math.PI/2,0,0]),Jt(t,new me(.037,.032,.12,8),e,[0,.02,-1.09],[Math.PI/2,0,0]),Jt(t,new me(.026,.026,.045,8),i,[0,.02,-1.16],[Math.PI/2,0,0]),Jt(t,new nt(.075,.095,.25),e,[0,-.004,-.55]);const l=Jt(t,new nt(.078,.25,.13),i,[0,-.17,-.15],[.19,0,0]);l.rotation.x=.16,Jt(t,new nt(.085,.03,.14),r,[0,-.295,-.175]),Jt(t,new nt(.075,.17,.1),a,[0,-.12,.04],[.32,0,0]),Jt(t,new nt(.1,.13,.31),n,[0,.005,.31]),Jt(t,new nt(.095,.15,.04),i,[0,-.015,.48]),Jt(t,new me(.047,.047,.2,10),c,[0,.14,-.12],[Math.PI/2,0,0]),Jt(t,new me(.052,.052,.025,10),i,[0,.14,-.01],[Math.PI/2,0,0]),Jt(t,new _o(.033,14),o,[0,.14,.003]),Jt(t,new nt(.03,.07,.06),i,[0,.09,-.09]),Jt(t,new nt(.025,.045,.035),i,[.025,.165,-.15]);const u=je(4282470,.05,.88),d=je(7772065,.1,.78);Jt(t,new nt(.13,.115,.16),u,[.015,-.155,.035],[.24,0,.12]),Jt(t,new nt(.04,.035,.11),d,[.02,-.105,.055]),Jt(t,new nt(.13,.11,.16),u,[-.035,-.115,-.5],[.1,0,-.08]),Jt(t,new nt(.035,.035,.1),d,[-.06,-.065,-.49]);const h=new we,p=new _i({color:16769440,transparent:!0,opacity:0,blending:Ce,depthWrite:!1,toneMapped:!1}),x=new rt(new ri(.075,.28,5,1,!0),p);x.rotation.x=-Math.PI/2,x.position.z=-.09,h.add(x);const y=new rt(new rn(.24,.24),p.clone());y.position.z=-.035,h.add(y),h.position.set(0,.02,-1.22),h.visible=!1,t.add(h);const m=new le;m.position.set(0,.02,-1.23),t.add(m),t.scale.setScalar(.82),this.rifle=t,this.rifleFlash=h,this.rifleFlashMaterial=p,this.rifleMuzzle=m,this.viewScene.add(t)}buildPickaxe(){const t=new we;t.position.set(.46,-.42,-.72),t.rotation.set(.22,-.28,-.32),t.userData.basePosition=t.position.clone(),t.userData.baseRotation=t.rotation.clone();const e=new Ot({map:this.woodTexture,color:14065764,roughness:.8}),i=je(9214627,.8,.3),n=je(3950415,.75,.4),r=je(5059362,.1,.9),a=je(4282470,.05,.88);Jt(t,new me(.035,.045,1,8),e,[0,.14,0]),Jt(t,new me(.048,.052,.22,8),r,[0,-.19,0]),Jt(t,new nt(.36,.11,.12),i,[0,.66,0]);const o=Jt(t,new ri(.065,.24,4),i,[-.23,.66,0],[0,0,Math.PI/2]);o.rotation.z=-Math.PI/2,o.position.x=-.26;const c=Jt(t,new ri(.065,.22,4),i,[.25,.65,0],[0,0,Math.PI/2]);c.rotation.z=Math.PI/2,Jt(t,new nt(.14,.18,.16),n,[0,.66,0]),Jt(t,new nt(.13,.13,.16),a,[.01,-.14,.01]),Jt(t,new nt(.12,.13,.15),a,[-.04,.27,.01],[.15,0,0]),this.pickaxe=t,this.pickaxeMuzzle=new le,this.pickaxeMuzzle.position.set(0,.68,0),t.add(this.pickaxeMuzzle),this.viewScene.add(t)}setWeapon(t,e=!1){this.weapons[t]&&(this.weapons.ar.reloading&&this.cancelReload(),this.current=t,this.triggerHeld=!1,this.switchOffset=e?0:1,this.rifle.visible=t==="ar"&&!this.suppressed,this.pickaxe.visible=t==="pickaxe"&&!this.suppressed,this.rifleFlash.visible=!1)}setSuppressed(t){this.suppressed=t;const e=!t;this.rifle.visible=e&&this.current==="ar",this.pickaxe.visible=e&&this.current==="pickaxe",t&&(this.triggerHeld=!1)}startFire(){this.triggerHeld=!0}stopFire(){this.triggerHeld=!1}fireNow(){this.suppressed||(this.current==="ar"?this.fireRifle():this.swingPickaxe())}fireRifle(){const t=this.weapons.ar;if(t.reloading||this.cooldown>0)return;if(t.mag<=0){this.audio?.empty(),this.reload();return}t.mag-=1,this.cooldown=t.fireRate,this.muzzleFlashTime=.055,this.audio?.shot();const e=this.getSpread();if(this.raycaster.setFromCamera(Yl,this.camera),this.raycaster.far=160,e>0){const u=this.raycaster.ray.direction.clone(),d=new P().crossVectors(u,this.camera.up).normalize(),h=new P().crossVectors(d,u).normalize();u.addScaledVector(d,(Math.random()-.5)*e),u.addScaledVector(h,(Math.random()-.5)*e),this.raycaster.ray.direction.copy(u.normalize())}const i=this.world.raycastTargets,n=this.raycaster.intersectObjects(i,!1),r=this.onGetBotTargets?this.onGetBotTargets():[];if(r.length){const u=this.raycaster.intersectObjects(r,!1);u.length&&n.push(...u)}n.sort((u,d)=>u.distance-d.distance);const a=n[0],o=a?a.point.clone():this.raycaster.ray.origin.clone().addScaledVector(this.raycaster.ray.direction,140),c=this.rifleMuzzle.getWorldPosition(new P),l=this.camera.localToWorld(c.clone());if(this.effects.tracer(l,o,16768142,1.1),this.effects.burst(l,16763494,4,2.4,.07,4),a){const u=a.object,d=u.userData.bot;if(d&&d.alive){const h=u.userData.part==="head",p=Math.round(t.damage*(h?2.05:1));this.onBotHit?.(d,p,h,a.point,"RANGER AR"),this.effects.burst(a.point,h?16766572:16743784,h?14:8,4.2,.09,8),this.audio?.hit()}else this.effects.burst(a.point,u.userData.buildPiece?14199416:16763001,6,3.4,.07,9)}this.onShoot?.()}swingPickaxe(){if(this.cooldown>0)return;this.cooldown=this.weapons.pickaxe.fireRate,this.swingTime=.38,this.audio?.pickaxe(),this.raycaster.setFromCamera(Yl,this.camera),this.raycaster.far=3.4;const t=this.raycaster.intersectObjects(this.world.raycastTargets,!1),e=this.onGetBotTargets?this.onGetBotTargets():[];if(e.length){const n=this.raycaster.intersectObjects(e,!1);n.length&&t.push(...n)}t.sort((n,r)=>n.distance-r.distance);const i=t[0];if(i){const n=i.object.userData.bot;if(n&&n.alive){const r=i.object.userData.part==="head";this.onBotHit?.(n,this.weapons.pickaxe.damage*(r?1.5:1),r,i.point,"TRAILBLAZER"),this.effects.burst(i.point,16762977,11,4,.09,9),this.audio?.hit()}else this.effects.burst(i.point,14856822,9,4.1,.08,8)}this.onShoot?.()}getSpread(){const t=this.onGetMovement?this.onGetMovement():0;return .006+Math.min(.028,t*.0032)}reload(){const t=this.weapons.ar;t.reloading||t.mag>=t.maxMag||t.reserve<=0||this.current!=="ar"||(t.reloading=!0,t.reloadTimer=t.reloadTime,this.audio?.reload())}cancelReload(){const t=this.weapons.ar;t.reloading=!1,t.reloadTimer=0}addAmmo(t){this.weapons.ar.reserve+=t}boostDamage(t){this.weapons.ar.damage+=t,this.weapons.ar.rarity="RARE"}update(t,e){this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),this.muzzleFlashTime=Math.max(0,this.muzzleFlashTime-t),this.switchOffset=ki(this.switchOffset,0,15,t);const i=this.weapons.ar;if(i.reloading&&(i.reloadTimer-=t,i.reloadTimer<=0)){const d=i.maxMag-i.mag,h=Math.min(d,i.reserve);i.mag+=h,i.reserve-=h,i.reloading=!1}if(!this.suppressed&&e.enabled&&(this.current==="ar"&&this.triggerHeld&&this.cooldown<=0&&this.fireRifle(),this.current==="pickaxe"&&this.triggerHeld&&this.cooldown<=0&&this.swingPickaxe()),this.rifleFlash.visible=this.muzzleFlashTime>0,this.muzzleFlashTime>0){const d=this.muzzleFlashTime/.055;this.rifleFlash.scale.setScalar(.75+Math.random()*.65),this.rifleFlash.rotation.z+=t*28;for(const h of this.rifleFlash.children)h.material.opacity=d*.92}const n=Fe(e.speed/9,0,1),r=Math.sin(e.walkTime)*(.008+n*.013),a=Math.abs(Math.cos(e.walkTime))*(.006+n*.012),o=Math.sin(this.time*1.6)*.0035,c=i.reloading?Math.sin((1-i.reloadTimer/i.reloadTime)*Math.PI):0,l=this.switchOffset*.25;this.rifle.position.set(this.rifle.userData.basePosition.x+r,this.rifle.userData.basePosition.y-a-l-c*.16+o,this.rifle.userData.basePosition.z),this.rifle.rotation.set(this.rifle.userData.baseRotation.x+a*.7-c*.24,this.rifle.userData.baseRotation.y+r*.8,this.rifle.userData.baseRotation.z+r*.6+c*.3),this.swingTime=Math.max(0,(this.swingTime||0)-t);const u=this.swingTime>0?Math.sin((1-this.swingTime/.38)*Math.PI):0;this.pickaxe.position.set(this.pickaxe.userData.basePosition.x+r-u*.09,this.pickaxe.userData.basePosition.y-a+o-l+u*.1,this.pickaxe.userData.basePosition.z+Math.sin(this.time*1.2)*.002),this.pickaxe.rotation.set(this.pickaxe.userData.baseRotation.x+a*.8-u*1.9,this.pickaxe.userData.baseRotation.y+r*.7+u*.5,this.pickaxe.userData.baseRotation.z+r*.8+u*.65)}getMuzzleWorldPosition(t=new P){const i=(this.current==="ar"?this.rifleMuzzle:this.pickaxeMuzzle).getWorldPosition(new P);return this.camera.localToWorld(i,t)}getState(){const t=this.weapons[this.current];return this.current==="ar"?{id:"ar",name:t.name,type:"ASSAULT RIFLE",rarity:t.rarity,mag:t.mag,reserve:t.reserve,maxMag:t.maxMag,reloading:t.reloading,ammoLabel:`${t.mag} / ${t.reserve}`,fireMode:"FULL AUTO"}:{id:"pickaxe",name:t.name,type:"HARVESTING TOOL",rarity:t.rarity,mag:null,reserve:null,reloading:!1,ammoLabel:"∞",fireMode:"MELEE"}}render(t){t.clearDepth(),t.render(this.viewScene,this.viewCamera)}resize(t){this.viewCamera.aspect=t,this.viewCamera.updateProjectionMatrix()}}const $l=["VEX","NOMAD","EMBER","KODA","RIFT","SABLE"],Kl=[{body:4743030,accent:6938834,skin:13146736},{body:7294300,accent:16758110,skin:10185544},{body:4089430,accent:14282098,skin:13804413},{body:6183036,accent:12884991,skin:12025687},{body:7491899,accent:16745320,skin:14726284},{body:3431269,accent:6871039,skin:9395778}];class F0{constructor(t,e,i,n){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.bots=[],this.onDeath=null,this.onDamage=null,this.onPlayerHit=null,this.player=null,this.elapsed=0,this.botTargets=[],this.raycaster=new gs,this.spawnPoints=[[-11,-9,.6],[17,-16,2.2],[-26,6,4.3],[10,27,1.4],[36,8,5.1],[-14,-35,3.3]],this.createBots()}createBots(){this.spawnPoints.forEach(([t,e,i],n)=>{const r=new O0(this.scene,this.world,this.effects,this.audio,{name:$l[n%$l.length],outfit:Kl[n%Kl.length],position:new P(t,this.world.heightAt(t,e),e),rotation:i,index:n});r.onDeath=a=>this.handleDeath(r,a),r.onDamaged=a=>this.onDamage?.(r,a),r.onPlayerHit=(a,o)=>this.onPlayerHit?.(a,o),this.bots.push(r)}),this.rebuildTargets()}setPlayer(t){this.player=t;for(const e of this.bots)e.player=t}handleDeath(t,e){this.rebuildTargets(),this.onDeath?.(t,e)}rebuildTargets(){this.botTargets=[];for(const t of this.bots)t.alive&&this.botTargets.push(...t.hitMeshes)}getHitTargets(){return this.botTargets}getAliveCount(){return this.bots.filter(t=>t.alive).length}update(t,e,i){this.elapsed+=t;for(const n of this.bots)n.update(t,this.elapsed,e,i);this.botTargets=this.botTargets.filter(n=>n.userData.bot?.alive)}damageAll(t,e="STORM",i=null){for(const n of this.bots)n.alive&&(i&&!i.isOutside(n.group.position.x,n.group.position.z)||n.takeDamage(t,!1,e,!1))}dispose(){for(const t of this.bots)t.dispose();this.bots.length=0}}class O0{constructor(t,e,i,n,r){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.name=r.name,this.worldPosition=r.position.clone(),this.player=null,this.alive=!0,this.health=100,this.maxHealth=100,this.hitMeshes=[],this.materials=[],this.shootTimer=Mt(Math.random,2.8,4.6),this.wanderTimer=Mt(Math.random,1.5,4),this.moveTarget=this.worldPosition.clone(),this.deathTimer=0,this.flash=0,this.stepTime=Math.random()*4,this.stormTick=0,this.damageTick=0,this.velocity=new P,this.temp=new P,this.idlePhase=Math.random()*10,this.raycaster=new gs,this.group=new we,this.group.position.copy(this.worldPosition),this.group.rotation.y=r.rotation,t.add(this.group);const a=r.outfit,o=new Ot({color:a.body,roughness:.78,metalness:.04}),c=new Ot({color:a.accent,emissive:a.accent,emissiveIntensity:.38,roughness:.55}),l=new Ot({color:a.skin,roughness:.82}),u=new Ot({color:2107954,roughness:.68,metalness:.2}),d=new Ot({color:2367516,roughness:.94});this.materials.push(o,c,l,u,d);const h=(v,w,b,R,_,E)=>{const C=new rt(v,w);return C.position.set(b,R,_),C.castShadow=!0,C.receiveShadow=!0,C.userData.bot=this,C.userData.part=E,this.group.add(C),E!=="accessory"&&this.hitMeshes.push(C),C};h(new nt(.24,.72,.27),u,-.18,.58,0,"leg"),h(new nt(.24,.72,.27),u,.18,.58,0,"leg"),h(new nt(.28,.18,.38),d,-.18,.13,.05,"leg"),h(new nt(.28,.18,.38),d,.18,.13,.05,"leg"),h(new nt(.35,.22,.36),u,0,.98,0,"body"),h(new nt(.68,.78,.38),o,0,1.38,0,"body"),h(new nt(.26,.08,.4),c,0,1.4,0,"accessory"),h(new nt(.22,.64,.24),o,-.46,1.39,0,"arm"),h(new nt(.22,.64,.24),o,.46,1.39,0,"arm"),h(new nt(.2,.18,.24),l,-.47,1.05,.02,"arm"),h(new nt(.2,.18,.24),l,.47,1.05,.02,"arm"),h(new nt(.38,.39,.38),l,0,1.98,0,"head"),h(new nt(.42,.15,.4),u,0,2.18,0,"head");const p=h(new nt(.3,.075,.03),c,0,2.01,.205,"head");p.rotation.x=0;const x=h(new nt(.42,.52,.22),u,0,1.46,-.29,"accessory");x.rotation.x=.04,h(new nt(.28,.08,.3),c,0,1.69,-.28,"accessory");const y=new we,m=new rt(new nt(.1,.11,.65),u);m.position.z=.24,y.add(m);const f=new rt(new me(.02,.022,.38,6),new Ot({color:4937051,metalness:.7,roughness:.4}));f.rotation.x=Math.PI/2,f.position.set(0,.02,.62),y.add(f),y.position.set(.27,1.2,.22),y.rotation.x=-.04,y.rotation.y=-.08,this.group.add(y),this.weapon=y,this.muzzle=new le,this.muzzle.position.set(0,.02,.84),y.add(this.muzzle);const S=[],T=[];this.group.children.forEach(v=>{v.userData.part==="leg"&&v.position.y>.2&&S.push(v),v.userData.part==="arm"&&v.position.y>1.2&&T.push(v)}),this.legs=S,this.arms=T,this.healthCanvas=document.createElement("canvas"),this.healthCanvas.width=256,this.healthCanvas.height=72,this.healthTexture=new go(this.healthCanvas),this.healthTexture.colorSpace=Ne,this.healthSprite=new kn(new sn({map:this.healthTexture,transparent:!0,depthWrite:!1,depthTest:!0})),this.healthSprite.position.set(0,2.72,0),this.healthSprite.scale.set(1.55,.435,1),this.group.add(this.healthSprite),this.drawHealthBar(),this.group.traverse(v=>{v.isMesh&&(v.frustumCulled=!0)})}drawHealthBar(){const t=this.healthCanvas.getContext("2d"),e=this.healthCanvas.width;t.clearRect(0,0,e,72),t.font="900 19px Trebuchet MS",t.textAlign="center",t.fillStyle="rgba(8, 13, 22, .76)",t.fillRect(16,8,e-32,25),t.fillStyle="#eefcff",t.fillText(this.name,e/2,26),t.fillStyle="rgba(9, 15, 25, .9)",t.fillRect(16,39,e-32,15);const i=t.createLinearGradient(16,0,e-16,0);this.health>55?(i.addColorStop(0,"#46cd5f"),i.addColorStop(1,"#b5ff8b")):this.health>25?(i.addColorStop(0,"#e7aa35"),i.addColorStop(1,"#ffe47b")):(i.addColorStop(0,"#e33e55"),i.addColorStop(1,"#ff9b8b")),t.fillStyle=i,t.fillRect(18,41,(e-36)*Math.max(0,this.health/this.maxHealth),11),t.strokeStyle="rgba(255, 255, 255, .28)",t.lineWidth=1,t.strokeRect(16.5,39.5,e-33,14),this.healthTexture.needsUpdate=!0}update(t,e,i,n){if(!this.alive){this.deathTimer>0&&(this.deathTimer-=t,this.group.rotation.z+=t*3.3,this.group.position.y-=t*.42,this.group.scale.multiplyScalar(Math.max(.92,1-t*1.3)),this.healthSprite.visible=!1,this.deathTimer<=0&&this.scene.remove(this.group));return}this.player=i,this.flash=Math.max(0,this.flash-t);for(const h of this.materials)h.emissive&&(h.emissiveIntensity=h===this.materials[1]?.38+this.flash*.9:.18);const r=i.alive?this.group.position.distanceTo(i.position):1/0,a=n?.radius??72,c=Math.hypot(this.group.position.x,this.group.position.z)>a-1;if(this.wanderTimer-=t,c){const h=Math.atan2(this.group.position.z,this.group.position.x),p=Math.max(3,a*.55);this.moveTarget.set(Math.cos(h)*p,0,Math.sin(h)*p)}else if(this.wanderTimer<=0){this.wanderTimer=Mt(Math.random,2.2,5.8);const h=Math.random()*Math.PI*2,p=Mt(Math.random,2,8);if(this.moveTarget.set(this.group.position.x+Math.cos(h)*p,this.group.position.y,this.group.position.z+Math.sin(h)*p),n&&n.isOutside(this.moveTarget.x,this.moveTarget.z)){const x=Math.max(4,a*.55),y=Math.atan2(-this.group.position.z,-this.group.position.x)+Mt(Math.random,-.6,.6);this.moveTarget.set(Math.cos(y)*x,0,Math.sin(y)*x)}}let l=this.temp.set(this.moveTarget.x-this.group.position.x,0,this.moveTarget.z-this.group.position.z),u=1.15;if(r<19&&i.alive&&(l.set(this.group.position.x-i.position.x,0,this.group.position.z-i.position.z),u=r<8?-1.35:.5),l.lengthSq()>.04?(l.normalize(),this.group.position.x+=l.x*u*t,this.group.position.z+=l.z*u*t,this.stepTime+=t*(Math.abs(u)>.8?8:4)):this.stepTime+=t*1.2,this.group.position.x=qa.clamp(this.group.position.x,-94,94),this.group.position.z=qa.clamp(this.group.position.z,-94,94),this.group.position.y=this.world.heightAt(this.group.position.x,this.group.position.z),this.worldPosition.copy(this.group.position),i.alive){const h=this.temp.set(i.position.x-this.group.position.x,0,i.position.z-this.group.position.z);h.lengthSq()>.001&&this.group.lookAt(this.group.position.x+h.x,this.group.position.y,this.group.position.z+h.z)}else l.lengthSq()>.01&&this.group.lookAt(this.group.position.x+l.x,this.group.position.y,this.group.position.z+l.z);const d=Math.sin(this.stepTime)*.33;this.legs.forEach((h,p)=>{h.rotation.x=d*(p===0?1:-1)}),this.arms.forEach((h,p)=>{h.rotation.x=-d*.5*(p===0?1:-1)+.08}),this.group.position.y+=Math.sin(e*2.2+this.idlePhase)*.012,this.shootTimer-=t,i.alive&&r<27&&this.shootTimer<=0&&n&&!c&&(this.shootTimer=Mt(Math.random,2.5,4.2),this.shootAtPlayer(i))}shootAtPlayer(t){const e=this.muzzle.getWorldPosition(new P),i=t.getChestPosition(new P),n=new P().subVectors(i,e),r=n.length();n.normalize(),this.raycaster.set(e,n),this.raycaster.far=r;const a=[...this.world.raycastTargets],o=this.raycaster.intersectObjects(a,!1);if(o.length&&o[0].distance<r-.8)return;const c=Math.random()<.26,l=i.clone();if(c?(l.x+=Mt(Math.random,-1.2,1.2),l.y+=Mt(Math.random,-.55,.55),l.z+=Mt(Math.random,-1.2,1.2)):Math.random()>.72&&(l.x+=Mt(Math.random,-.35,.35),l.y+=Mt(Math.random,-.55,.2),l.z+=Mt(Math.random,-.35,.35)),this.effects.tracer(e,l,16739162,.8),this.effects.burst(e,16751700,3,1.7,.05,3),this.audio?.botShot(),c){this.effects.burst(l,16751475,3,2,.06,4);return}const u=Math.round(Mt(Math.random,3,6));t.takeDamage(u,this.name),this.onPlayerHit?.(this,u),t.shield>0?this.effects.burst(l,7268351,5,2.3,.07,3):this.effects.burst(l,16736088,5,2.3,.07,3)}takeDamage(t,e,i="RANGER AR",n=!0){if(this.alive){if(this.health=Math.max(0,this.health-t),this.flash=.16,this.drawHealthBar(),n){const r=this.temp.set(this.group.position.x,this.group.position.y+1.9,this.group.position.z);this.effects.damageNumber(r,`${Math.round(t)}`,e?"#ffdf78":"#f5faff",e)}this.onDamaged?.(t,i),this.health<=0&&(this.alive=!1,this.deathTimer=.9,this.healthSprite.visible=!1,this.effects.burst(this.group.position.clone().add(new P(0,1.1,0)),16757854,24,6.5,.12,10),this.effects.ringBurst(this.group.position.clone(),16765043),this.audio?.kill(),this.onDeath?.(i))}}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.healthTexture.dispose()}}class B0{constructor(t,e,i){this.scene=t,this.world=e,this.audio=i,this.center=new Lt(0,0),this.initialRadius=72,this.minRadius=5,this.radius=this.initialRadius,this.timer=30,this.phase=1,this.shrinking=!1,this.shrinkT=0,this.shrinkDuration=7,this.shrinkFrom=this.radius,this.shrinkTo=this.radius,this.time=0,this.pulseHitTimer=0,this.lastRadiusUpdate=-1,this.createWall(),this.createParticles(),this.createGroundRing()}createWall(){const t=new me(1,1,1,160,1,!0);this.material=new ti({transparent:!0,depthWrite:!1,side:qe,blending:Ce,uniforms:{uTime:{value:0},uOpacity:{value:.82},uColorA:{value:new It(3477611)},uColorB:{value:new It(14257407)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying vec2 vUv;
        varying vec3 vWorld;
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        void main() {
          float angle = vUv.x;
          float wave = sin(angle * 86.0 + uTime * 1.1 + sin(vUv.y * 14.0 - uTime * 0.7) * 2.4);
          float fine = sin(angle * 212.0 - uTime * 2.9 + vUv.y * 8.0);
          float stripe = smoothstep(0.25, 0.9, wave * 0.5 + 0.5);
          float streak = smoothstep(0.78, 1.0, fine * 0.5 + 0.5);
          float base = smoothstep(0.0, 0.18, vUv.y);
          float top = 1.0 - smoothstep(0.55, 1.0, vUv.y);
          float heightFade = base * top;
          float verticalGlow = pow(1.0 - vUv.y, 1.8);
          vec3 color = mix(uColorA, uColorB, stripe * 0.72 + streak * 0.35 + verticalGlow * 0.3);
          color += vec3(0.42, 0.1, 0.8) * verticalGlow * 0.5;
          float alpha = (0.24 + stripe * 0.22 + streak * 0.12 + verticalGlow * 0.18) * heightFade * uOpacity;
          gl_FragColor = vec4(color, alpha);
        }
      `}),this.wall=new rt(t,this.material),this.wall.position.set(this.center.x,13,this.center.y),this.wall.scale.set(this.radius,38,this.radius),this.wall.renderOrder=3,this.scene.add(this.wall),this.innerMaterial=this.material.clone(),this.innerMaterial.uniforms=Ec.clone(this.material.uniforms),this.innerMaterial.uniforms.uOpacity.value=.42,this.innerMaterial.uniforms.uColorA.value.setHex(8269273),this.innerMaterial.uniforms.uColorB.value.setHex(15250687),this.innerWall=new rt(t,this.innerMaterial),this.innerWall.position.set(this.center.x,13,this.center.y),this.innerWall.scale.set(this.radius*.994,38,this.radius*.994),this.innerWall.renderOrder=4,this.scene.add(this.innerWall)}createParticles(){this.particleCount=760,this.particleAngles=new Float32Array(760),this.particleHeights=new Float32Array(760),this.particleSpeed=new Float32Array(760);const e=new Float32Array(760*3);for(let r=0;r<760;r+=1)this.particleAngles[r]=Math.random()*Math.PI*2,this.particleHeights[r]=Math.random()*22,this.particleSpeed[r]=.3+Math.random()*1.4;const i=new ge;i.setAttribute("position",new Ve(e,3));const n=new xr({color:14460415,size:.32,map:Bn(),transparent:!0,opacity:.72,depthWrite:!1,blending:Ce,sizeAttenuation:!0});this.particles=new mo(i,n),this.particles.frustumCulled=!1,this.scene.add(this.particles)}createGroundRing(){this.ringSegments=180;const e=new ge,i=new Float32Array(543);e.setAttribute("position",new Ve(i,3));const n=new po({color:14257407,transparent:!0,opacity:.8,blending:Ce,depthWrite:!1});this.ring=new Sc(e,n),this.scene.add(this.ring),this.ringHeightVersion=-1}beginShrink(){if(this.radius<=this.minRadius+.05)return;this.shrinkFrom=this.radius;const t=this.phase===1?.78:.72;this.shrinkTo=Math.max(this.minRadius,this.radius*t),this.shrinking=!0,this.shrinkT=0,this.phase+=1,this.timer=30,this.audio?.stormHit()}reset(){this.radius=this.initialRadius,this.timer=30,this.phase=1,this.shrinking=!1,this.shrinkT=0,this.shrinkFrom=this.radius,this.shrinkTo=this.radius,this.updateVisuals()}update(t,e){if(this.time+=t,e&&(this.timer-=t,this.timer<=0&&this.beginShrink(),this.shrinking)){this.shrinkT+=t;const i=Fe(this.shrinkT/this.shrinkDuration,0,1),n=i*i*(3-2*i);this.radius=os(this.shrinkFrom,this.shrinkTo,n),i>=1&&(this.shrinking=!1,this.radius=this.shrinkTo)}this.updateVisuals()}updateVisuals(){this.material.uniforms.uTime.value=this.time,this.innerMaterial.uniforms.uTime.value=this.time*-1.4,this.wall.scale.set(this.radius,38,this.radius),this.innerWall.scale.set(this.radius*.994,38,this.radius*.994);const t=this.particles.geometry.attributes.position.array;for(let e=0;e<this.particleCount;e+=1){const i=this.particleAngles[e]+this.time*.008*this.particleSpeed[e];this.particleHeights[e]+=this.particleSpeed[e]*.14*(1/60),this.particleHeights[e]>23&&(this.particleHeights[e]=.2);const n=this.radius*(.997+Math.sin(this.time*.7+e)*.006);t[e*3]=Math.cos(i)*n,t[e*3+1]=2+this.particleHeights[e],t[e*3+2]=Math.sin(i)*n}if(this.particles.geometry.attributes.position.needsUpdate=!0,Math.abs(this.radius-this.lastRadiusUpdate)>.07){this.lastRadiusUpdate=this.radius;const e=this.ring.geometry.attributes.position.array;for(let i=0;i<=this.ringSegments;i+=1){const n=i/this.ringSegments*Math.PI*2,r=Math.cos(n)*this.radius,a=Math.sin(n)*this.radius;e[i*3]=r,e[i*3+1]=this.world.heightAt(r,a)+.16,e[i*3+2]=a}this.ring.geometry.attributes.position.needsUpdate=!0}this.ring.material.opacity=.52+Math.sin(this.time*3.2)*.2}isOutside(t,e){return Math.hypot(t-this.center.x,e-this.center.y)>this.radius}getState(){return{radius:this.radius,phase:this.phase,timer:this.timer,timerLabel:Oc(this.timer),shrinking:this.shrinking,status:this.shrinking?"CLOSING":this.radius<=this.minRadius+.1?"FINAL":"STABLE"}}}const aa=[{id:"ammo",name:"RIFLE AMMO",detail:"+75 rounds",color:16761935,weight:30},{id:"shield",name:"SHIELD FLASK",detail:"+50 shield",color:6740479,weight:27},{id:"health",name:"FIELD MEDKIT",detail:"+40 health",color:8257436,weight:25},{id:"rare",name:"RARE RANGER AR",detail:"+5 damage · +30 ammo",color:12815615,weight:18}];class z0{constructor(t,e,i,n,r,a){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.player=r,this.weapons=a,this.chests=[],this.pickups=[],this.onLoot=null,this.onChestOpen=null,this.raycaster=new gs,this.center=new Lt(0,0),this.glowTexture=Bn(),this.woodTexture=yr(),this.metalTexture=Bc(),this.createChests()}createChests(){this.world.chestSpots.forEach((t,e)=>{const i=new k0(this.scene,this.world,this.effects,this.audio,t,e,this.glowTexture,this.woodTexture,this.metalTexture);i.onOpen=()=>{this.onChestOpen?.(i),this.spawnItem(i,i.loot,0),Math.random()<.68&&this.spawnItem(i,i.rollLoot(),1)},this.chests.push(i)})}update(t,e){let i=null,n=1/0;for(const r of this.chests)if(r.update(t),!r.opened){const a=r.distanceTo(e.position);a<n&&(i=r,n=a),a<1.45&&e.alive&&r.open()}this.nearestChest=n<=3.5?i:null,this.nearestDistance=n;for(let r=this.pickups.length-1;r>=0;r-=1){const a=this.pickups[r];if(a.update(t),a.collected){this.pickups.splice(r,1);continue}a.group.position.distanceTo(e.position)<1.65&&a.age>.35&&e.alive&&(this.collectPickup(a),this.pickups.splice(r,1))}}tryOpenNearest(t=3.5){return!this.nearestChest||this.nearestDistance>t?!1:this.nearestChest.open()}tryOpenFromAim(t,e=4.2){this.raycaster.setFromCamera(this.center,t),this.raycaster.far=e;const i=[];for(const a of this.chests)a.opened||i.push(...a.hitMeshes);if(!i.length)return!1;const n=this.raycaster.intersectObjects(i,!1);if(!n.length)return!1;const r=n[0].object.userData.chest;return r?r.open():!1}openChestByIndex(t){const e=this.chests[t];return!e||e.opened?!1:(e.open(),!0)}collectPickup(t){t.collected=!0;const e=t.loot;e.id==="ammo"?this.weapons.addAmmo(75):e.id==="shield"?this.player.addShield(50):e.id==="health"?this.player.heal(40):e.id==="rare"&&(this.weapons.boostDamage(5),this.weapons.addAmmo(30)),this.effects.ringBurst(t.group.position.clone(),e.color),this.effects.burst(t.group.position.clone(),e.color,14,4.4,.1,5),this.audio?.pickup(),this.onLoot?.(e),t.dispose()}spawnItem(t,e,i=0){const n=t.spot.rotation+Math.PI*.5+(i===0?0:Math.PI),r=1.28+i*.35,a=t.spot.x+Math.cos(n)*r,o=t.spot.z+Math.sin(n)*r,c=Math.max(this.world.heightAt(a,o),t.spot.y)+.72,l=new G0(this.scene,e,new P(a,c,o),this.glowTexture);this.pickups.push(l)}dispose(){for(const t of this.pickups)t.dispose();this.pickups.length=0}}class k0{constructor(t,e,i,n,r,a,o,c,l){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.spot=r,this.index=a,this.opened=!1,this.openProgress=0,this.lidOpen=0,this.time=Math.random()*10,this.hitMeshes=[],this.loot=this.rollLoot(),this.group=new we,this.group.position.set(r.x,r.y,r.z),this.group.rotation.y=r.rotation,t.add(this.group);const u=new Ot({map:c,color:12617300,roughness:.8,emissive:6041106,emissiveIntensity:.8}),d=new Ot({map:c,color:9394739,roughness:.9,emissive:3808008,emissiveIntensity:.7}),h=new Ot({color:16761679,metalness:.75,roughness:.28,emissive:6107648,emissiveIntensity:.4}),p=new Ot({map:l,color:10121260,metalness:.8,roughness:.38}),x=new rt(new nt(1.55,.82,1),u);x.position.y=.42,x.castShadow=!0,x.receiveShadow=!0,x.userData.chest=this,this.group.add(x),this.hitMeshes.push(x);for(const w of[-.54,.54]){const b=new rt(new nt(.12,.94,1.06),p);b.position.set(w,.43,0),b.userData.chest=this,this.group.add(b),this.hitMeshes.push(b)}const y=new rt(new nt(1.62,.1,1.07),h);y.position.y=.07,this.group.add(y),this.lidPivot=new we,this.lidPivot.position.set(0,.84,-.5),this.group.add(this.lidPivot);const m=new rt(new nt(1.55,.32,1),d);m.position.set(0,.15,.5),m.castShadow=!0,m.userData.chest=this,this.lidPivot.add(m),this.hitMeshes.push(m);const f=new rt(new nt(1.61,.08,1.05),h);f.position.set(0,.29,.5),this.lidPivot.add(f);for(const w of[-.54,.54]){const b=new rt(new nt(.12,.35,1.06),p);b.position.set(w,.15,.5),this.lidPivot.add(b)}const S=new rt(new nt(.22,.28,.12),h);S.position.set(0,.02,1),S.userData.chest=this,this.group.add(S),this.hitMeshes.push(S);const T=new rt(new me(.038,.038,.04,8),new Ot({color:2234123}));T.rotation.x=Math.PI/2,T.position.set(0,.02,1.065),this.group.add(T),this.glow=new ji(16757831,2.2,8,2),this.glow.position.y=1.2,this.group.add(this.glow);const v=new ji(16757831,2.8,5.5,2);v.position.set(0,.62,1.1),this.group.add(v),this.glowRing=new rt(new ms(1.15,1.36,36),new _i({color:16762975,transparent:!0,opacity:.45,side:qe,blending:Ce,depthWrite:!1})),this.glowRing.rotation.x=-Math.PI/2,this.glowRing.position.y=.03,this.group.add(this.glowRing),this.beacon=new kn(new sn({map:o,color:16760139,transparent:!0,opacity:.46,depthWrite:!1,blending:Ce})),this.beacon.position.y=1.35,this.beacon.scale.set(2.4,2.4,1),this.group.add(this.beacon),this.world.updateMatrixWorld?.(!0)}rollLoot(){const t=aa.reduce((i,n)=>i+n.weight,0);let e=Math.random()*t;for(const i of aa)if(e-=i.weight,e<=0)return i;return aa[0]}distanceTo(t){return Math.hypot(this.group.position.x-t.x,this.group.position.z-t.z)}open(){return this.opened?!1:(this.opened=!0,this.openProgress=.001,this.audio?.chest(),this.onOpen?.(),this.effects.burst(new P(this.group.position.x,this.group.position.y+1,this.group.position.z),16766308,22,5.4,.12,6),this.effects.ringBurst(this.group.position.clone(),16763480),!0)}update(t){if(this.time+=t,this.opened)this.openProgress=Math.min(1,this.openProgress+t*2.2),this.lidOpen=this.openProgress,this.lidPivot.rotation.x=-1.24*this.openProgress,this.glow.intensity=2.8-this.openProgress*1.8,this.beacon.material.opacity=Math.max(0,.46-this.openProgress*.46),this.glowRing.material.opacity=Math.max(0,.45-this.openProgress*.6);else{const e=1+Math.sin(this.time*2.4)*.08;this.glow.intensity=1.8+Math.sin(this.time*2.4)*.5,this.beacon.material.opacity=.36+Math.sin(this.time*2)*.1,this.beacon.position.y=1.35+Math.sin(this.time*1.6)*.16,this.beacon.scale.setScalar(2.35*e),this.glowRing.material.opacity=.33+Math.sin(this.time*2.6)*.12,this.glowRing.rotation.z+=t*.3}}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}class G0{constructor(t,e,i,n){this.scene=t,this.loot=e,this.age=0,this.collected=!1,this.baseY=i.y,this.group=new we,this.group.position.copy(i),t.add(this.group);const r=new Ot({color:e.color,emissive:e.color,emissiveIntensity:.45,metalness:.3,roughness:.4}),a=new Ot({color:1779507,roughness:.65,metalness:.3}),o=new Ot({color:15988730,roughness:.5}),c=new Ot({color:16729951,emissive:7016477,emissiveIntensity:.7});if(e.id==="ammo"){const l=new rt(new nt(.34,.22,.5),r);this.group.add(l);for(let u=0;u<3;u+=1){const d=new rt(new me(.026,.026,.2,6),a);d.rotation.x=Math.PI/2,d.position.set(-.1+u*.1,.17,0),this.group.add(d)}}else if(e.id==="shield"){const l=new rt(new me(.15,.19,.42,8),r);this.group.add(l);const u=new rt(new me(.07,.08,.15,8),r);u.position.y=.28,this.group.add(u);const d=new rt(new me(.09,.09,.06,8),a);d.position.y=.37,this.group.add(d)}else if(e.id==="health"){const l=new rt(new nt(.48,.3,.35),o);this.group.add(l);const u=new rt(new nt(.24,.06,.36),c);u.position.y=.16,this.group.add(u);const d=new rt(new nt(.08,.06,.24),c);d.position.y=.16,this.group.add(d)}else{const l=new rt(new nt(.5,.1,.14),r);this.group.add(l);const u=new rt(new me(.02,.02,.34,6),a);u.rotation.z=Math.PI/2,u.position.x=.37,this.group.add(u);const d=new rt(new nt(.1,.22,.09),a);d.position.set(-.04,-.14,0),this.group.add(d)}this.beacon=new kn(new sn({map:n,color:e.color,transparent:!0,opacity:.65,depthWrite:!1,blending:Ce})),this.beacon.scale.set(1.4,1.4,1),this.group.add(this.beacon),this.light=new ji(e.color,1.4,4,2),this.group.add(this.light)}update(t){this.age+=t,this.group.rotation.y+=t*1.5,this.group.position.y=this.baseY+Math.sin(this.age*2.6)*.14+Math.min(.25,this.age*.6),this.beacon.material.opacity=.45+Math.sin(this.age*4)*.15}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}const H0=new P(0,1,0);class V0{constructor(t){this.scene=t,this.effects=[],this.tracerGeometry=new me(.012,.012,1,5,1,!0),this.tracerGeometry.translate(0,.5,0),this.particleGeometry=new ge,this.glowTexture=Bn()}tracer(t,e,i=16765818,n=1){const r=new P().subVectors(e,t),a=r.length();if(a<.05)return;const o=new _i({color:i,transparent:!0,opacity:.94,blending:Ce,depthWrite:!1}),c=new rt(this.tracerGeometry,o);c.position.copy(t),c.scale.set(n,a,n),c.quaternion.setFromUnitVectors(H0,r.normalize()),c.renderOrder=4,this.scene.add(c),this.effects.push({type:"tracer",object:c,life:.085,maxLife:.085})}burst(t,e=16765565,i=10,n=5,r=.09,a=12){const o=new Float32Array(i*3),c=[];for(let h=0;h<i;h+=1){o[h*3]=t.x,o[h*3+1]=t.y,o[h*3+2]=t.z;const p=new P(Math.random()-.5,Math.random()*.9+.1,Math.random()-.5).normalize();c.push(p.multiplyScalar(n*(.35+Math.random()*.8)))}const l=new ge;l.setAttribute("position",new Ve(o,3));const u=new xr({color:e,size:r,map:this.glowTexture,transparent:!0,opacity:1,depthWrite:!1,blending:Ce,sizeAttenuation:!0}),d=new mo(l,u);d.frustumCulled=!1,this.scene.add(d),this.effects.push({type:"particles",object:d,velocities:c,life:.7,maxLife:.7,gravity:a})}ringBurst(t,e=16765550){const i=new _i({color:e,transparent:!0,opacity:.8,side:qe,blending:Ce,depthWrite:!1}),n=new rt(new ms(.55,.72,32),i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y+=.3,this.scene.add(n),this.effects.push({type:"ring",object:n,life:.6,maxLife:.6})}damageNumber(t,e,i="#ffe6a3",n=!1){const r=document.createElement("canvas");r.width=256,r.height=128;const a=r.getContext("2d");if(a.clearRect(0,0,256,128),a.font=n?"900 78px Trebuchet MS":"900 64px Trebuchet MS",a.textAlign="center",a.textBaseline="middle",a.lineWidth=9,a.strokeStyle="rgba(8, 12, 22, .82)",a.strokeText(e,128,66),n){const u=a.createLinearGradient(0,20,0,108);u.addColorStop(0,"#fff4a8"),u.addColorStop(1,"#ff9d2e"),a.fillStyle=u}else a.fillStyle=i;a.fillText(e,128,66),n&&(a.font="900 20px Trebuchet MS",a.fillStyle="#ffd56a",a.strokeStyle="rgba(8, 12, 22, .8)",a.lineWidth=5,a.strokeText("CRITICAL",128,113),a.fillText("CRITICAL",128,113));const o=new go(r);o.colorSpace=Ne;const c=new sn({map:o,transparent:!0,depthWrite:!1,depthTest:!1}),l=new kn(c);l.position.copy(t),l.scale.set(1.15,.575,1),l.renderOrder=12,this.scene.add(l),this.effects.push({type:"sprite",object:l,life:.9,maxLife:.9,velocity:1.3,texture:o})}update(t){for(let e=this.effects.length-1;e>=0;e-=1){const i=this.effects[e];i.life-=t;const n=1-Math.max(0,i.life)/i.maxLife;if(i.type==="tracer")i.object.material.opacity=(1-n)*.94,i.object.scale.x=1-n*.65,i.object.scale.z=1-n*.65;else if(i.type==="particles"){const r=i.object.geometry.attributes.position.array;for(let a=0;a<i.velocities.length;a+=1){const o=i.velocities[a];r[a*3]+=o.x*t,r[a*3+1]+=o.y*t,r[a*3+2]+=o.z*t,o.y-=i.gravity*t,o.multiplyScalar(1-t*1.4)}i.object.geometry.attributes.position.needsUpdate=!0,i.object.material.opacity=1-n}else if(i.type==="ring"){const r=1+n*5.5;i.object.scale.set(r,r,r),i.object.material.opacity=(1-n)*.8}else if(i.type==="sprite"){i.object.position.y+=i.velocity*t,i.object.material.opacity=1-n*n;const r=1.15+n*.25;i.object.scale.set(r,r*.5,1)}i.life<=0&&(this.scene.remove(i.object),i.type==="particles"||i.type==="ring"?(i.object.geometry.dispose(),i.object.material.dispose()):(i.type==="sprite"&&i.texture.dispose(),i.object.material.dispose()),this.effects.splice(e,1))}}}class W0{constructor(){this.context=null,this.master=null,this.enabled=!1,this.stormNodes=null}init(){if(this.context){this.context.state==="suspended"&&this.context.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t,this.master=this.context.createGain(),this.master.gain.value=.34,this.master.connect(this.context.destination),this.noiseBuffer=this.context.createBuffer(1,this.context.sampleRate*1.2,this.context.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let i=0;i<e.length;i+=1)e[i]=Math.random()*2-1;this.enabled=!0,this.context.resume().catch(()=>{})}now(){return this.context?this.context.currentTime:0}envelope(t,e,i,n=1){const r=this.now();t.gain.cancelScheduledValues(r),t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(Math.max(1e-4,n),r+e),t.gain.exponentialRampToValueAtTime(1e-4,r+e+i)}noise(t,e,i,n="lowpass"){if(!this.enabled)return;const r=this.context.createBufferSource();r.buffer=this.noiseBuffer;const a=this.context.createBiquadFilter();a.type=n,a.frequency.value=e;const o=this.context.createGain();this.envelope(o,.002,t,i),r.connect(a),a.connect(o),o.connect(this.master),r.start(),r.stop(this.now()+t+.05)}tone(t,e,i,n="sine",r=null){if(!this.enabled)return;const a=this.context.createOscillator(),o=this.context.createGain();a.type=n,a.frequency.setValueAtTime(t,this.now()),r&&a.frequency.exponentialRampToValueAtTime(r,this.now()+e),this.envelope(o,.005,e,i),a.connect(o),o.connect(this.master),a.start(),a.stop(this.now()+e+.05)}shot(){this.noise(.12,2200,.8,"bandpass"),this.noise(.24,280,.5,"lowpass"),this.tone(118,.09,.28,"square",46)}botShot(){this.noise(.1,1400,.2,"bandpass"),this.tone(160,.08,.06,"square",60)}pickaxe(){this.noise(.16,900,.26,"bandpass"),this.tone(180,.12,.05,"sine",90)}hit(){this.tone(980,.035,.11,"square",720),this.tone(1450,.04,.06,"sine")}kill(){this.tone(620,.08,.16,"triangle",980),this.tone(930,.12,.1,"sine",1380)}reload(){this.noise(.04,3e3,.18,"highpass"),window.setTimeout(()=>this.noise(.05,1600,.17,"bandpass"),130),window.setTimeout(()=>this.tone(280,.04,.08,"square"),260)}empty(){this.tone(320,.03,.09,"square")}pickup(){[660,880,1320].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.18,.1,"sine"),e*65)})}chest(){this.noise(.14,600,.22,"lowpass"),[330,495,660,990].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.28,.09,"triangle"),40+e*80)})}build(){this.noise(.1,700,.32,"lowpass"),this.tone(150,.12,.18,"triangle",90),window.setTimeout(()=>this.noise(.07,2400,.17,"bandpass"),40)}jump(){this.tone(210,.1,.035,"sine",330)}land(){this.noise(.09,420,.2,"lowpass")}footstep(){this.noise(.07,520,.11,"lowpass")}damage(){this.tone(95,.2,.13,"sawtooth",58),this.noise(.15,700,.13,"lowpass")}stormHit(){this.tone(60,.22,.06,"sine",45)}startStormAmbience(){if(!this.enabled||this.stormNodes)return;const t=this.now(),e=this.context.createOscillator();e.type="sine",e.frequency.value=41;const i=this.context.createOscillator();i.type="sine",i.frequency.value=82;const n=this.context.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.024,t+3);const r=this.context.createGain();r.gain.value=.8,e.connect(r).connect(n),i.connect(n),n.connect(this.master),e.start(),i.start(),this.stormNodes={low:e,shimmer:i,gain:n}}stopStormAmbience(){if(!this.stormNodes)return;const{low:t,shimmer:e,gain:i}=this.stormNodes,n=this.now();i.gain.cancelScheduledValues(n),i.gain.setValueAtTime(i.gain.value,n),i.gain.linearRampToValueAtTime(1e-4,n+.4),t.stop(n+.5),e.stop(n+.5),this.stormNodes=null}dispose(){this.stopStormAmbience(),this.context?.close(),this.context=null,this.enabled=!1}}class X0{constructor(t){this.world=t,this.el={hud:document.getElementById("hud"),start:document.getElementById("start-screen"),pause:document.getElementById("pause-screen"),end:document.getElementById("end-screen"),play:document.getElementById("play-button"),resume:document.getElementById("resume-button"),restart:document.getElementById("restart-button"),healthFill:document.getElementById("health-fill"),healthValue:document.getElementById("health-value"),shieldFill:document.getElementById("shield-fill"),shieldValue:document.getElementById("shield-value"),elim:document.getElementById("elim-count"),alive:document.getElementById("alive-count"),ammoPanel:document.getElementById("ammo-panel"),ammoMag:document.getElementById("ammo-mag"),ammoReserve:document.getElementById("ammo-reserve"),weaponName:document.getElementById("weapon-name"),weaponType:document.getElementById("weapon-type"),weaponRarity:document.getElementById("weapon-rarity"),fireMode:document.getElementById("fire-mode"),stormPhase:document.getElementById("storm-phase"),stormStatus:document.getElementById("storm-status"),stormTimer:document.getElementById("storm-timer"),stormProgress:document.getElementById("storm-progress-fill"),stormWarning:document.getElementById("storm-warning"),stormVignette:document.getElementById("storm-vignette"),damageFlash:document.getElementById("damage-flash"),healFlash:document.getElementById("heal-flash"),crosshair:document.getElementById("crosshair"),hitmarker:document.getElementById("hitmarker"),interact:document.getElementById("interact-prompt"),interactText:document.getElementById("interact-text"),buildBanner:document.getElementById("build-banner"),weaponSlots:document.getElementById("weapon-slots"),buildSlots:document.getElementById("build-slots"),loadoutHint:document.getElementById("loadout-hint"),arSlotAmmo:document.getElementById("ar-slot-ammo"),toastStack:document.getElementById("toast-stack"),killFeed:document.getElementById("kill-feed"),minimap:document.getElementById("minimap"),endKicker:document.getElementById("end-kicker"),endTitle:document.getElementById("end-title"),endSubtitle:document.getElementById("end-subtitle"),statElim:document.getElementById("stat-elim"),statDamage:document.getElementById("stat-damage"),statTime:document.getElementById("stat-time"),statBuild:document.getElementById("stat-build"),confetti:document.getElementById("confetti")},this.minimapCtx=this.el.minimap.getContext("2d"),this.staticMap=this.createStaticMap(),this.minimapAccumulator=0,this.previous={},this.buildStaticMap(),this.setWeaponSlots("ar")}createStaticMap(){const t=this.el.minimap.width,e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d"),n=(t/2-10)/100,r=t/2,a=3;for(let u=0;u<t;u+=a)for(let d=0;d<t;d+=a){const h=(d-r)/n,p=(u-r)/n,x=this.world.heightAt(h,p),y=Fe(.35-x*.03,.05,.4),m=Fe((x+3)/18,0,1),f=Math.round(37+m*60+y*8),S=Math.round(82+m*31-y*18),T=Math.round(55+m*15-y*8);i.fillStyle=`rgb(${f}, ${S}, ${T})`,i.fillRect(d,u,a,a)}const o=i.createRadialGradient(r,r,8,r,r,r);o.addColorStop(0,"rgba(255, 255, 220, .08)"),o.addColorStop(.55,"rgba(11, 30, 22, .02)"),o.addColorStop(1,"rgba(4, 13, 18, .42)"),i.fillStyle=o,i.fillRect(0,0,t,t);const c=(u,d)=>[r+u*n,r+d*n],l=[[-27,-17],[25,18],[2,-38]];for(const[u,d]of l){const[h,p]=c(u,d);i.fillStyle="rgba(245, 238, 215, .22)",i.beginPath(),i.arc(h,p,7,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255, 236, 189, .32)",i.lineWidth=1,i.stroke()}for(let u=0;u<22;u+=1){const d=u/22*Math.PI*2+.13,h=Math.sqrt(u*37%100/100)*80,[p,x]=c(Math.cos(d)*h,Math.sin(d)*h);i.fillStyle="rgba(23, 57, 35, .55)",i.beginPath(),i.arc(p,x,1.5,0,Math.PI*2),i.fill()}return i.strokeStyle="rgba(206, 232, 216, .12)",i.lineWidth=1,i.strokeRect(.5,.5,t-1,t-1),e}buildStaticMap(){const t=this.minimapCtx;t.clearRect(0,0,220,220),t.drawImage(this.staticMap,0,0)}bindStart(t,e,i){this.el.play.addEventListener("click",t),this.el.resume.addEventListener("click",e),this.el.restart.addEventListener("click",i)}enterGame(){this.el.start.classList.add("leaving"),window.setTimeout(()=>this.el.start.classList.add("hidden"),520),this.el.hud.classList.remove("hidden"),requestAnimationFrame(()=>this.el.hud.classList.add("visible"))}showPause(t){this.el.pause.classList.toggle("hidden",!t)}setHealth(t,e,i=100,n=100){const r=Math.ceil(t),a=Math.ceil(e);this.previous.health!==r&&(this.el.healthFill.style.width=`${Fe(t/i*100,0,100)}%`,this.el.healthValue.textContent=r,this.previous.health=r),this.previous.shield!==a&&(this.el.shieldFill.style.width=`${Fe(e/n*100,0,100)}%`,this.el.shieldValue.textContent=a,this.previous.shield=a)}setWeapon(t){const e=`${t.id}-${t.mag}-${t.reserve}-${t.reloading}`;this.previous.weapon!==e&&(this.previous.weapon=e,this.el.weaponName.textContent=t.name,this.el.weaponType.textContent=t.type,this.el.weaponRarity.textContent=t.rarity,this.el.fireMode.textContent=t.id==="ar"?t.reloading?"RELOADING":"FULL AUTO":"MELEE",this.el.ammoPanel.classList.toggle("low-ammo",t.id==="ar"&&t.mag<=8&&t.mag>0),this.el.ammoPanel.classList.toggle("empty",t.id==="ar"&&t.mag===0),t.id==="ar"?(this.el.ammoMag.textContent=t.mag,this.el.ammoReserve.textContent=t.reserve,this.el.ammoMag.style.fontSize="",this.el.arSlotAmmo.textContent=`${t.mag} / ${t.reserve}`):(this.el.ammoMag.textContent="∞",this.el.ammoMag.style.fontSize="31px",this.el.ammoReserve.textContent="",this.el.arSlotAmmo.textContent=`${t.ammoLabel}`),this.setWeaponSlots(t.id,t.reloading))}setWeaponSlots(t,e=!1){document.querySelectorAll("[data-weapon]").forEach(i=>{const n=i.dataset.weapon===(t==="ar"?"2":"1");i.classList.toggle("active",n),n&&e?i.classList.add("reloading"):i.classList.remove("reloading")})}setMode(t,e=0){this.previous.buildActive!==t&&(this.previous.buildActive=t,this.el.crosshair.classList.toggle("build",t),this.el.weaponSlots.classList.toggle("hidden",t),this.el.buildSlots.classList.toggle("hidden",!t),this.el.buildBanner.classList.toggle("hidden",!t),this.el.loadoutHint.textContent=t?"1 — 3 TO SELECT":"1 — 2 TO SWITCH",this.el.ammoPanel.style.opacity=t?"0.42":"1"),t&&document.querySelectorAll("[data-build]").forEach(i=>{i.classList.toggle("active",Number(i.dataset.build)===e)})}setEliminations(t){this.previous.elim!==t&&(this.el.elim.textContent=t,this.previous.elim=t)}setAlive(t){this.previous.alive!==t&&(this.el.alive.textContent=t,this.previous.alive=t)}setStorm(t){const e=`${t.phase}-${t.status}`;this.el.stormPhase.textContent=`PHASE ${t.phase}`,this.el.stormTimer.textContent=t.timerLabel,this.el.stormProgress.style.width=`${Fe(t.timer/30*100,0,100)}%`,this.previous.stormPhase!==e&&(this.el.stormStatus.textContent=t.status,this.el.stormStatus.classList.toggle("closing",t.shrinking),this.previous.stormPhase=e)}setStormDanger(t){this.previous.outside!==t&&(this.previous.outside=t,this.el.stormVignette.classList.toggle("active",t),this.el.stormWarning.classList.toggle("hidden",!t))}flashDamage(){this.el.damageFlash.classList.add("active"),window.clearTimeout(this.damageTimeout),this.damageTimeout=window.setTimeout(()=>this.el.damageFlash.classList.remove("active"),140)}flashHeal(){this.el.healFlash.classList.add("active"),window.clearTimeout(this.healTimeout),this.healTimeout=window.setTimeout(()=>this.el.healFlash.classList.remove("active"),190)}hitmarker(t=!1){const e=this.el.hitmarker;e.classList.remove("show","kill"),e.offsetWidth,e.classList.add("show"),t&&e.classList.add("kill")}setInteract(t){if(!t){this.el.interact.classList.add("hidden");return}this.el.interact.classList.remove("hidden"),this.el.interactText.textContent=t}toast(t,e,i="#ffc94d",n="◆"){const r=document.createElement("div");r.className="toast",r.style.borderLeftColor=i,r.innerHTML=`
      <div class="toast-icon" style="color:${i};border-color:${i}55;background:${i}18">${n}</div>
      <div class="toast-copy"><b style="color:${i}">${t}</b><span>${e}</span></div>
    `,this.el.toastStack.appendChild(r),window.setTimeout(()=>{r.classList.add("leaving"),window.setTimeout(()=>r.remove(),420)},3200)}killFeed(t,e,i){const n=document.createElement("div");n.className="kill-entry",n.innerHTML=`<span class="killer">${t}</span><span>eliminated</span><span class="victim">${e}</span><span class="weapon">${i}</span>`,this.el.killFeed.appendChild(n),window.setTimeout(()=>{n.style.transition="opacity .35s ease, transform .35s ease",n.style.opacity="0",n.style.transform="translateX(15px)",window.setTimeout(()=>n.remove(),380)},4200)}update(t,e){this.setHealth(t.player.health,t.player.shield),this.setWeapon(t.weapons.getState()),this.setEliminations(t.player.eliminations),this.setAlive(t.bots.getAliveCount()+(t.player.alive?1:0)),this.setStorm(t.storm.getState());const i=t.storm.isOutside(t.player.position.x,t.player.position.z)&&t.player.alive;if(this.setStormDanger(i),this.setMode(t.build.active,t.build.selected),t.build.active){const n=document.querySelector(`[data-build="${t.build.selected}"]`);n&&document.querySelectorAll("[data-build]").forEach(r=>r.classList.toggle("active",r===n))}this.setInteract(t.interactLabel||null),this.minimapAccumulator+=e,this.minimapAccumulator>.09&&(this.minimapAccumulator=0,this.drawMinimap(t))}drawMinimap(t){const e=this.minimapCtx,i=this.el.minimap.width,n=i/2,r=(i/2-10)/100;this.buildStaticMap();const a=(l,u)=>[n+l*r,n+u*r],c=t.storm.radius*r;e.save(),e.beginPath(),e.rect(0,0,i,i),e.arc(n,n,c,0,Math.PI*2,!0),e.fillStyle="rgba(75, 25, 141, .55)",e.fill("evenodd"),e.restore(),e.beginPath(),e.arc(n,n,c,0,Math.PI*2),e.strokeStyle="rgba(215, 150, 255, .92)",e.lineWidth=2,e.shadowColor="#b85cff",e.shadowBlur=9,e.stroke(),e.shadowBlur=0;for(const l of t.build.pieces){const[u,d]=a(l.x,l.z);e.save(),e.translate(u,d),e.rotate(l.rotation),e.fillStyle="rgba(224, 174, 112, .85)",l.type==="wall"?e.fillRect(-3,-1,6,2):l.type==="floor"?e.fillRect(-3,-3,6,6):e.fillRect(-3,-2,6,4),e.restore()}for(const l of t.loot.chests){if(l.opened)continue;const[u,d]=a(l.group.position.x,l.group.position.z);e.save(),e.translate(u,d),e.rotate(Math.PI/4),e.fillStyle="#ffd05e",e.shadowColor="#ffb637",e.shadowBlur=6,e.fillRect(-2.5,-2.5,5,5),e.restore()}for(const l of t.bots.bots){if(!l.alive)continue;const[u,d]=a(l.group.position.x,l.group.position.z);e.fillStyle="#ff5c6a",e.shadowColor="#ff2338",e.shadowBlur=5,e.beginPath(),e.arc(u,d,2.7,0,Math.PI*2),e.fill(),e.shadowBlur=0}if(t.player.alive){const[l,u]=a(t.player.position.x,t.player.position.z);e.save(),e.translate(l,u),e.rotate(-t.player.yaw),e.fillStyle="rgba(101, 247, 226, .15)",e.beginPath(),e.moveTo(0,0),e.arc(0,0,22,-Math.PI/2-.46,-Math.PI/2+.46),e.closePath(),e.fill(),e.fillStyle="#eaffff",e.strokeStyle="#1e4c57",e.lineWidth=1.4,e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2.5),e.lineTo(-5,5),e.closePath(),e.fill(),e.stroke(),e.restore()}}showEnd(t,e){if(this.el.end.classList.remove("hidden"),this.el.end.classList.toggle("defeat",!t),this.el.endKicker.textContent=t?"MATCH COMPLETE":"ELIMINATED",this.el.endTitle.textContent=t?"VICTORY ROYALE":"GAME OVER",this.el.endSubtitle.textContent=t?"You are the last one standing.":e.cause==="STORM"?"The storm claims another. Drop in again.":`${e.cause||"A rival"} eliminated you. Drop in again.`,this.el.statElim.textContent=e.eliminations,this.el.statDamage.textContent=Math.round(e.damage),this.el.statTime.textContent=Oc(e.time),this.el.statBuild.textContent=e.builds,this.el.confetti.innerHTML="",t){const i=["#ffd45c","#63f2e2","#ff8a5d","#b887ff","#ffffff","#7dff9c"];for(let n=0;n<90;n+=1){const r=document.createElement("span");r.className="confetti-piece",r.style.left=`${Math.random()*100}%`,r.style.background=i[Math.floor(Math.random()*i.length)],r.style.animationDuration=`${2.8+Math.random()*3}s`,r.style.animationDelay=`${Math.random()*1.5}s`,r.style.setProperty("--drift",`${(Math.random()-.5)*240}px`),r.style.width=`${4+Math.random()*6}px`,r.style.height=`${8+Math.random()*10}px`,r.style.transform=`rotate(${Math.random()*360}deg)`,this.el.confetti.appendChild(r)}}this.el.hud.classList.remove("visible"),this.setInteract(null)}hideEnd(){this.el.end.classList.add("hidden"),this.el.hud.classList.add("visible")}hidePause(){this.el.pause.classList.add("hidden")}}class q0{constructor(){this.canvas=document.getElementById("game-canvas");try{this.renderer=new E0({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"})}catch(e){throw document.body.innerHTML='<div style="color:white;font:16px sans-serif;padding:40px">Stormfall Royale requires WebGL to run.</div>',e}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=Qa,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ss,this.renderer.autoClear=!1,this.scene=new gc,this.camera=new Xe(72,window.innerWidth/window.innerHeight,.055,480),this.camera.rotation.order="YXZ",this.lastFrame=performance.now(),this.state="menu",this.started=!1,this.matchOver=!1,this.matchTime=0,this.elapsed=0,this.menuTime=0,this.stormTick=0,this.botStormTick=0,this.pointerLockPending=!1,this.world=new L0(this.scene,this.renderer),this.audio=new W0,this.effects=new V0(this.scene),this.build=new U0(this.scene,this.world,this.camera,this.effects,this.audio),this.player=new I0(this.camera,this.world,this.build,this.audio),this.weapons=new N0(this.world,this.camera,this.effects,this.audio),this.bots=new F0(this.scene,this.world,this.effects,this.audio),this.storm=new B0(this.scene,this.world,this.audio),this.loot=new z0(this.scene,this.world,this.effects,this.audio,this.player,this.weapons),this.ui=new X0(this.world),this.bots.setPlayer(this.player),this.weapons.onGetBotTargets=()=>this.bots.getHitTargets(),this.weapons.onGetMovement=()=>this.player.speed,this.weapons.onBotHit=(e,i,n,r,a)=>this.handleBotHit(e,i,n,r,a),this.bots.onDamage=(e,i,n)=>{n!=="STORM"&&(this.player.damageDealt+=i)},this.bots.onDeath=(e,i)=>this.handleBotDeath(e,i),this.bots.onPlayerHit=(e,i)=>{this.ui.flashDamage(),this.audio.damage(),this.player.alive||this.endMatch(!1,this.player.lastDamageSource)},this.player.onDamage=(e,i)=>{i!=="STORM"&&this.ui.flashDamage()},this.loot.onChestOpen=e=>{this.ui.toast("CACHE OPENED",`${e.spot.poi} · supplies incoming`,"#ffc94d","▣")},this.loot.onLoot=e=>{const i=e.id==="shield"?"◈":e.id==="health"?"+":e.id==="rare"?"✦":"▸";this.ui.toast(e.name,e.detail,`#${e.color.toString(16).padStart(6,"0")}`,i),this.ui.flashHeal(),this.audio.pickup()},this.setupEvents(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.ui.bindStart(()=>this.startMatch(),()=>this.requestPointerLock(),()=>window.location.reload()),this.camera.position.set(-20,12,31),this.camera.lookAt(0,2,0),this.weapons.setSuppressed(!0),this.updateMenuCamera(0),this.animate(),window.__STORMFALL__=this.createDebugApi(),new URLSearchParams(window.location.search).has("autostart")&&window.setTimeout(()=>this.startMatch(!1),120)}setupEvents(){document.addEventListener("pointerlockchange",()=>this.handlePointerLockChange()),document.addEventListener("pointerlockerror",()=>{(this.state==="playing"||this.state==="paused")&&this.showPaused()}),this.canvas.addEventListener("mousedown",t=>this.handleMouseDown(t)),window.addEventListener("mouseup",t=>{t.button===0&&this.weapons.stopFire()}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("keydown",t=>this.handleKeyDown(t)),window.addEventListener("blur",()=>{this.weapons.stopFire()})}handleKeyDown(t){if(this.state==="playing"){if(t.code==="KeyQ"){t.preventDefault(),this.toggleBuild();return}if(this.build.active){t.code==="Digit1"&&this.build.setSelected(0),t.code==="Digit2"&&this.build.setSelected(1),t.code==="Digit3"&&this.build.setSelected(2),t.code==="KeyR"&&this.weapons.reload();return}t.code==="Digit1"&&this.weapons.setWeapon("pickaxe"),t.code==="Digit2"&&this.weapons.setWeapon("ar"),t.code==="KeyR"&&this.weapons.reload(),t.code==="KeyE"&&this.tryInteract(),t.code==="Escape"&&this.weapons.stopFire()}}handleMouseDown(t){if(!(t.button!==0||this.state!=="playing")&&(document.pointerLockElement||this.requestPointerLock(),!this.loot.tryOpenFromAim(this.camera,4.4))){if(this.build.active){this.build.place();return}this.weapons.startFire(),this.weapons.fireNow()}}tryInteract(){this.loot.tryOpenNearest(3.5)&&this.weapons.stopFire()}toggleBuild(){const t=!this.build.active;this.build.setActive(t),this.weapons.setSuppressed(t),this.weapons.stopFire(),t&&this.build.setSelected(0),this.ui.hidePause()}requestPointerLock(){if(document.pointerLockElement!==this.canvas&&!this.pointerLockPending){this.pointerLockPending=!0,window.clearTimeout(this.pointerLockTimeout);try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>this.showPaused())}catch{this.showPaused()}this.pointerLockTimeout=window.setTimeout(()=>{this.pointerLockPending=!1,document.pointerLockElement!==this.canvas&&this.started&&!this.matchOver&&this.showPaused()},650)}}handlePointerLockChange(){const t=document.pointerLockElement===this.canvas;if(this.pointerLockPending=!1,t){window.clearTimeout(this.pointerLockTimeout),this.state==="paused"&&(this.state="playing",this.player.enabled=!0,this.ui.hidePause()),this.weapons.setSuppressed(this.build.active);return}this.state==="playing"&&this.showPaused()}showPaused(){!this.started||this.matchOver||(this.state="paused",this.player.enabled=!1,this.weapons.stopFire(),this.weapons.setSuppressed(!0),this.ui.showPause(!0),this.ui.setInteract(null))}startMatch(t=!0){this.started||(this.started=!0,this.state="playing",this.audio.init(),this.player.reset(),this.player.enabled=!0,this.ui.enterGame(),this.ui.hidePause(),this.weapons.setSuppressed(!1),this.weapons.setWeapon("ar",!0),this.build.setActive(!1),this.storm.reset(),this.audio.startStormAmbience(),this.ui.toast("DROP IN","Eliminate 6 rivals. Outlast the storm.","#63f2e2","⌖"),t?this.requestPointerLock():this.state="playing",this.lastFrame=performance.now())}handleBotHit(t,e,i,n,r){t.alive&&(t.takeDamage(e,i,r),this.ui.hitmarker(!t.alive),this.ui.setAlive(this.bots.getAliveCount()+(this.player.alive?1:0)))}handleBotDeath(t,e){this.bots.rebuildTargets(),e==="STORM"?this.ui.killFeed("THE STORM",t.name,"STORM"):(this.player.eliminations+=1,this.ui.killFeed("YOU",t.name,e==="TRAILBLAZER"?"PICKAXE":"RANGER AR"),this.ui.toast("ELIMINATED",`${t.name} · ${e}`,"#ff8f7a","✦")),this.ui.setAlive(this.bots.getAliveCount()+(this.player.alive?1:0)),this.bots.getAliveCount()===0&&!this.matchOver&&this.endMatch(!0)}applyStormDamage(t){const e=this.storm.isOutside(this.player.position.x,this.player.position.z);this.stormTick+=t,this.botStormTick+=t,this.stormTick>=.6&&(this.stormTick=0,e&&this.player.alive&&(this.player.takeDamage(4.2,"STORM"),this.ui.flashDamage(),this.audio.stormHit())),this.botStormTick>=.6&&(this.botStormTick=0,this.bots.damageAll(4.2,"STORM",this.storm))}checkPlayerDeath(){!this.matchOver&&this.player.health<=0&&(this.player.alive=!1,this.endMatch(!1,this.player.lastDamageSource))}endMatch(t,e="STORM"){this.matchOver||(this.matchOver=!0,this.state="over",this.player.enabled=!1,this.weapons.stopFire(),this.weapons.setSuppressed(!0),this.build.setActive(!1),this.audio.stopStormAmbience(),t&&this.audio.kill(),this.ui.showEnd(t,{eliminations:this.player.eliminations,damage:this.player.damageDealt,time:this.matchTime,builds:this.build.pieces.length,cause:e}),document.pointerLockElement===this.canvas&&document.exitPointerLock())}updateMenuCamera(t){this.menuTime+=t;const e=this.menuTime*.045+2.2,i=31;this.camera.position.set(Math.cos(e)*i,10.5+Math.sin(this.menuTime*.2)*.8,Math.sin(e)*i+7),this.camera.lookAt(0,1.5,-2)}updatePlaying(t){this.elapsed+=t,this.matchTime+=t,this.player.update(t,this.elapsed),this.build.updateGhost(this.player,t),this.weapons.update(t,this.player),this.bots.update(t,this.player,this.storm),this.storm.update(t,!0),this.loot.update(t,this.player),this.applyStormDamage(t),this.effects.update(t),this.world.update(t,this.player.position),this.loot.nearestChest&&this.loot.nearestDistance<=3.5?this.interactLabel="OPEN CACHE":this.interactLabel=null,this.ui.update(this,t),this.checkPlayerDeath(),!this.matchOver&&this.bots.getAliveCount()===0&&this.endMatch(!0)}updateAmbient(t){this.world.update(t,this.camera.position),this.effects.update(t),this.storm.update(t,!1)}animate(){requestAnimationFrame(()=>this.animate());const t=performance.now(),e=Math.min((t-this.lastFrame)/1e3,.05);this.lastFrame=t,this.state==="menu"?(this.updateMenuCamera(e),this.updateAmbient(e)):this.state==="playing"?this.updatePlaying(e):this.updateAmbient(e),this.render()}render(){this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.started&&!this.matchOver&&this.state!=="menu"&&this.weapons.render(this.renderer)}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.weapons.resize(t/e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),this.renderer.setSize(t,e)}createDebugApi(){return{game:this,start:(t=!1)=>this.startMatch(t),toggleBuild:()=>this.toggleBuild(),selectBuild:t=>this.build.setSelected(t),place:()=>this.build.place(),fire:()=>this.weapons.fireNow(),setWeapon:t=>this.weapons.setWeapon(t),look:(t,e=0)=>{this.player.yaw=t,this.player.pitch=e,this.player.applyCameraRotation(0)},teleport:(t,e)=>{this.player.position.set(t,this.world.heightAt(t,e),e),this.player.velocity.set(0,0,0),this.player.applyCameraRotation(0)},openChest:t=>this.loot.openChestByIndex(t),damageBot:(t,e=100)=>{this.bots.bots[t]&&this.bots.bots[t].takeDamage(e,!1,"DEBUG")},killAllBots:()=>{for(const t of this.bots.bots)t.alive&&t.takeDamage(999,!1,"DEBUG")},setStormRadius:t=>{this.storm.radius=Math.max(this.storm.minRadius,t),this.storm.lastRadiusUpdate=-1,this.storm.updateVisuals()},finish:(t=!0)=>this.endMatch(t),getState:()=>({state:this.state,started:this.started,health:this.player.health,shield:this.player.shield,position:{x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},yaw:this.player.yaw,pitch:this.player.pitch,aliveBots:this.bots.getAliveCount(),weapon:this.weapons.current,ammo:this.weapons.getState(),build:this.build.getGhostState(),storm:this.storm.getState(),chests:this.loot.chests.map(t=>({opened:t.opened,poi:t.spot.poi})),pieces:this.build.pieces.length,eliminations:this.player.eliminations,damageDealt:this.player.damageDealt,matchTime:this.matchTime})}}}window.addEventListener("DOMContentLoaded",()=>{new q0});
