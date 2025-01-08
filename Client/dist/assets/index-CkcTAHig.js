(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="164",md=0,Nl=1,gd=2,Xh=1,Yh=2,Jn=3,yi=0,Kt=1,sn=2,Xt=0,gs=1,Dl=2,Ul=3,Fl=4,Ga=5,Qn=100,_d=101,vd=102,yd=103,xd=104,Wa=200,Sd=201,Md=202,wd=203,qa=204,Xa=205,jh=206,Ed=207,Zh=208,bd=209,Td=210,Ad=211,Cd=212,Rd=213,Pd=214,Ld=0,Id=1,Nd=2,yo=3,Dd=4,Ud=5,Fd=6,Bd=7,cl=0,Od=1,zd=2,_i=0,$h=1,Kh=2,Jh=3,Qh=4,kd=5,eu=6,tu=7,nu=300,xs=301,Ss=302,Ya=303,ja=304,Do=306,ki=1e3,rn=1001,Za=1002,Yt=1003,Hd=1004,yr=1005,Ht=1006,jo=1007,mi=1008,xi=1009,Vd=1010,Gd=1011,iu=1012,su=1013,Ms=1014,Sn=1015,Mn=1016,ru=1017,ou=1018,As=1020,Wd=35902,qd=1021,Xd=1022,wn=1023,Yd=1024,jd=1025,_s=1026,ws=1027,au=1028,lu=1029,Zd=1030,cu=1031,hu=1033,Zo=33776,$o=33777,Ko=33778,Jo=33779,Bl=35840,Ol=35841,zl=35842,kl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37808,ql=37809,Xl=37810,Yl=37811,jl=37812,Zl=37813,$l=37814,Kl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,Qo=36492,sc=36494,rc=36495,$d=36283,oc=36284,ac=36285,lc=36286,Kd=3200,Jd=3201,Uo=0,Qd=1,ei="",Dn="srgb",Fn="srgb-linear",hl="display-p3",Fo="display-p3-linear",xo="linear",yt="srgb",So="rec709",Mo="p3",qi=7680,cc=519,ef=512,tf=513,nf=514,uu=515,sf=516,rf=517,of=518,af=519,$a=35044,hc="300 es",ni=2e3,wo=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const Ks=Math.PI/180,Es=180/Math.PI;function ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function ul(s,e){return(s%e+e)%e}function lf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cf(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function hf(s,e,t,n){return Js(s,e,1-Math.exp(-t*n))}function uf(s,e=1){return e-Math.abs(ul(s,e*2)-e)}function df(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ff(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mf(s,e){return s+Math.random()*(e-s)}function gf(s){return s*(.5-Math.random())}function _f(s){s!==void 0&&(uc=s);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(s){return s*Ks}function yf(s){return s*Es}function xf(s){return(s&s-1)===0&&s!==0}function Sf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dc={DEG2RAD:Ks,RAD2DEG:Es,generateUUID:ii,clamp:kt,euclideanModulo:ul,mapLinear:lf,inverseLerp:cf,lerp:Js,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:vf,radToDeg:yf,isPowerOfTwo:xf,ceilPowerOfTwo:Sf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:wf,normalize:dt,denormalize:yn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],v=i[0],p=i[3],m=i[6],y=i[1],x=i[4],b=i[7],I=i[2],C=i[5],L=i[8];return r[0]=o*v+a*y+l*I,r[3]=o*p+a*x+l*C,r[6]=o*m+a*b+l*L,r[1]=c*v+h*y+d*I,r[4]=c*p+h*x+d*C,r[7]=c*m+h*b+d*L,r[2]=u*v+f*y+_*I,r[5]=u*p+f*x+_*C,r[8]=u*m+f*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ye;function du(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Ef={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function xr(s,e){return new Ef[s](e)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){const s=ir("canvas");return s.style.display="block",s}const fc={};function fu(s){s in fc||(fc[s]=!0,console.warn(s))}const pc=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mc=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[Fn]:{transfer:xo,primaries:So,toReference:s=>s,fromReference:s=>s},[Dn]:{transfer:yt,primaries:So,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fo]:{transfer:xo,primaries:Mo,toReference:s=>s.applyMatrix3(mc),fromReference:s=>s.applyMatrix3(pc)},[hl]:{transfer:yt,primaries:Mo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(mc),fromReference:s=>s.applyMatrix3(pc).convertLinearToSRGB()}},Tf=new Set([Fn,Fo]),ft={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Tf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Sr[e].toReference,i=Sr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Sr[s].primaries},getTransfer:function(s){return s===ei?xo:Sr[s].transfer}};function vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class Af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=ir("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(na(i[o].image)):r.push(na(i[o]))}else r=na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Af.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class Vt extends Cs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=rn,i=rn,r=Ht,o=mi,a=wn,l=xi,c=Vt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ii(),this.name="",this.source=new pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=nu;Vt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(f+1)/2,I=(m+1)/2,C=(h+u)/4,L=(d+v)/4,N=(_+p)/4;return x>b&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=L/n):b>I?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=C/i,r=N/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=L/r,i=N/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Pf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mu extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lf extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let or=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==_){let p=1-a;const m=l*u+c*f+h*_+d*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,m*y);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const b=a*y;if(l=l*p+u*b,c=c*p+f*b,h=h*p+_*b,d=d*p+v*b,p===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-a*f,e[t+2]=c*_+h*f+a*u-l*d,e[t+3]=h*_-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new W,gc=new or;class ri{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),wr.subVectors(this.max,Us),Yi.subVectors(e.a,Us),ji.subVectors(e.b,Us),Zi.subVectors(e.c,Us),oi.subVectors(ji,Yi),ai.subVectors(Zi,ji),Ai.subVectors(Yi,Zi);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!sa(t,Yi,ji,Zi,wr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Yi,ji,Zi,wr))?!1:(Er.crossVectors(oi,ai),t=[Er.x,Er.y,Er.z],sa(t,Yi,ji,Zi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new W,new W,new W,new W,new W,new W,new W,new W],dn=new W,Mr=new ri,Yi=new W,ji=new W,Zi=new W,oi=new W,ai=new W,Ai=new W,Us=new W,wr=new W,Er=new W,Ci=new W;function sa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ci.fromArray(s,r);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const If=new ri,Fs=new W,ra=new W;let Rs=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(ra)),this.expandByPoint(Fs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Vn=new W,oa=new W,br=new W,li=new W,aa=new W,Tr=new W,la=new W;let dl=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),li.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=li.dot(this.direction),l=-li.dot(br),c=li.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oa).addScaledVector(br,u),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){aa.subVectors(t,e),Tr.subVectors(n,e),la.crossVectors(aa,Tr);let o=this.direction.dot(la),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(Tr.crossVectors(li,Tr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class mt{constructor(e,t,n,i,r,o,a,l,c,h,d,u,f,_,v,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,u,f,_,v,p)}set(e,t,n,i,r,o,a,l,c,h,d,u,f,_,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,v=c*d;t[0]=u+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=_*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Df)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ci.crossVectors(n,tn),ci.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ci.crossVectors(n,tn)),ci.normalize(),Ar.crossVectors(tn,ci),i[0]=ci.x,i[4]=Ar.x,i[8]=tn.x,i[1]=ci.y,i[5]=Ar.y,i[9]=tn.y,i[2]=ci.z,i[6]=Ar.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],y=n[3],x=n[7],b=n[11],I=n[15],C=i[0],L=i[4],N=i[8],E=i[12],S=i[1],U=i[5],k=i[9],A=i[13],z=i[2],D=i[6],F=i[10],Z=i[14],q=i[3],Q=i[7],oe=i[11],xe=i[15];return r[0]=o*C+a*S+l*z+c*q,r[4]=o*L+a*U+l*D+c*Q,r[8]=o*N+a*k+l*F+c*oe,r[12]=o*E+a*A+l*Z+c*xe,r[1]=h*C+d*S+u*z+f*q,r[5]=h*L+d*U+u*D+f*Q,r[9]=h*N+d*k+u*F+f*oe,r[13]=h*E+d*A+u*Z+f*xe,r[2]=_*C+v*S+p*z+m*q,r[6]=_*L+v*U+p*D+m*Q,r[10]=_*N+v*k+p*F+m*oe,r[14]=_*E+v*A+p*Z+m*xe,r[3]=y*C+x*S+b*z+I*q,r[7]=y*L+x*U+b*D+I*Q,r[11]=y*N+x*k+b*F+I*oe,r[15]=y*E+x*A+b*Z+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],v=e[7],p=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+v*(+t*l*f-t*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],v=e[13],p=e[14],m=e[15],y=d*p*c-v*u*c+v*l*f-a*p*f-d*l*m+a*u*m,x=_*u*c-h*p*c-_*l*f+o*p*f+h*l*m-o*u*m,b=h*v*c-_*d*c+_*a*f-o*v*f-h*a*m+o*d*m,I=_*d*l-h*v*l-_*a*u+o*v*u+h*a*p-o*d*p,C=t*y+n*x+i*b+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=y*L,e[1]=(v*u*r-d*p*r-v*i*f+n*p*f+d*i*m-n*u*m)*L,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*m+n*l*m)*L,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*L,e[4]=x*L,e[5]=(h*p*r-_*u*r+_*i*f-t*p*f-h*i*m+t*u*m)*L,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*L,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*f+t*l*f)*L,e[8]=b*L,e[9]=(_*d*r-h*v*r-_*n*f+t*v*f+h*n*m-t*d*m)*L,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*m+t*a*m)*L,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*L,e[12]=I*L,e[13]=(h*v*i-_*d*i+_*n*u-t*v*u-h*n*p+t*d*p)*L,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*p-t*a*p)*L,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,v=o*h,p=o*d,m=a*d,y=l*c,x=l*h,b=l*d,I=n.x,C=n.y,L=n.z;return i[0]=(1-(v+m))*I,i[1]=(f+b)*I,i[2]=(_-x)*I,i[3]=0,i[4]=(f-b)*C,i[5]=(1-(u+m))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(_+x)*L,i[9]=(p-y)*L,i[10]=(1-(u+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/r,h=1/o,d=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ni){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(a===ni)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ni){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*c,f=(n+i)*h;let _,v;if(a===ni)_=(o+r)*d,v=-2*d;else if(a===wo)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new W,fn=new mt,Nf=new W(0,0,0),Df=new W(1,1,1),ci=new W,Ar=new W,tn=new W,_c=new mt,vc=new or;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uf=0;const yc=new W,Ki=new or,Gn=new mt,Cr=new W,Bs=new W,Ff=new W,Bf=new or,xc=new W(1,0,0),Sc=new W(0,1,0),Mc=new W(0,0,1),wc={type:"added"},Of={type:"removed"},Ji={type:"childadded",child:null},ca={type:"childremoved",child:null};class Tt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new W,t=new bn,n=new or,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ye}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Bs,Cr,this.up):Gn.lookAt(Cr,Bs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new W(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new W,Wn=new W,ha=new W,qn=new W,Qi=new W,es=new W,Ec=new W,ua=new W,da=new W,fa=new W;class xn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pn.subVectors(i,t),Wn.subVectors(n,t),ha.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Wn),l=pn.dot(ha),c=Wn.dot(Wn),h=Wn.dot(ha),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Wn.subVectors(e,t),pn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),pn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Qi.subVectors(i,n),es.subVectors(r,n),ua.subVectors(e,n);const l=Qi.dot(ua),c=es.dot(ua);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);const h=Qi.dot(da),d=es.dot(da);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qi,o);fa.subVectors(e,r);const f=Qi.dot(fa),_=es.dot(fa);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(es,a);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Ec.subVectors(r,i),a=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Ec,a);const m=1/(p+v+u);return o=v*m,a=u*m,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=ul(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return ft.fromWorkingColorSpace(qt.copy(this),e),Math.round(kt(qt.r*255,0,255))*65536+Math.round(kt(qt.g*255,0,255))*256+Math.round(kt(qt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Dn){ft.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Rr);const n=Js(hi.h,Rr.h,t),i=Js(hi.s,Rr.s,t),r=Js(hi.l,Rr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Be;Be.NAMES=_u;let zf=0,zn=class extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=gs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Xa,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class fl extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ti=kf();function kf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Hf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=kt(s,-65504,65504),ti.floatView[0]=s;const e=ti.uint32View[0],t=e>>23&511;return ti.baseTable[t]+((e&8388607)>>ti.shiftTable[t])}function Vf(s){const e=s>>10;return ti.uint32View[0]=ti.mantissaTable[ti.offsetTable[e]+(s&1023)]+ti.exponentTable[e],ti.floatView[0]}const bc={toHalfFloat:Hf,fromHalfFloat:Vf},Rt=new W,Pr=new Ne;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),e}}class vu extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yu extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gf=0;const an=new mt,ma=new Tt,ts=new W,nn=new ri,Os=new ri,Bt=new W;class Ot extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(du(e)?yu:vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(nn.min,Os.min),nn.expandByPoint(Bt),Bt.addVectors(nn.max,Os.max),nn.expandByPoint(Bt)):(nn.expandByPoint(Os.min),nn.expandByPoint(Os.max))}nn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Bt.add(ts)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new W,l[N]=new W;const c=new W,h=new W,d=new W,u=new Ne,f=new Ne,_=new Ne,v=new W,p=new W;function m(N,E,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const U=1/(f.x*_.y-_.x*f.y);isFinite(U)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(U),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(U),a[N].add(v),a[E].add(v),a[S].add(v),l[N].add(p),l[E].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,E=y.length;N<E;++N){const S=y[N],U=S.start,k=S.count;for(let A=U,z=U+k;A<z;A+=3)m(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const x=new W,b=new W,I=new W,C=new W;function L(N){I.fromBufferAttribute(i,N),C.copy(I);const E=a[N];x.copy(E),x.sub(I.multiplyScalar(I.dot(E))).normalize(),b.crossVectors(C,E);const U=b.dot(l[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,U)}for(let N=0,E=y.length;N<E;++N){const S=y[N],U=S.start,k=S.count;for(let A=U,z=U+k;A<z;A+=3)L(e.getX(A+0)),L(e.getX(A+1)),L(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,d=new W;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new mt,Ri=new dl,Lr=new Rs,Ac=new W,ns=new W,is=new W,ss=new W,ga=new W,Ir=new W,Nr=new Ne,Dr=new Ne,Ur=new Ne,Cc=new W,Rc=new W,Pc=new W,Fr=new W,Br=new W;class At extends Tt{constructor(e=new Ot,t=new fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(ga.fromBufferAttribute(d,e),o?Ir.addScaledVector(ga,h):Ir.addScaledVector(ga.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Lr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Lr,Ac)===null||Ri.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Tc.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const p=u[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,I=x;b<I;b+=3){const C=a.getX(b),L=a.getX(b+1),N=a.getX(b+2);i=Or(this,m,e,n,c,h,d,C,L,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);i=Or(this,o,e,n,c,h,d,y,x,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const p=u[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,I=x;b<I;b+=3){const C=b,L=b+1,N=b+2;i=Or(this,m,e,n,c,h,d,C,L,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const y=p,x=p+1,b=p+2;i=Or(this,o,e,n,c,h,d,y,x,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Wf(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yi,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function Or(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ns),s.getVertexPosition(l,is),s.getVertexPosition(c,ss);const h=Wf(s,e,t,n,ns,is,ss,Fr);if(h){i&&(Nr.fromBufferAttribute(i,a),Dr.fromBufferAttribute(i,l),Ur.fromBufferAttribute(i,c),h.uv=xn.getInterpolation(Fr,ns,is,ss,Nr,Dr,Ur,new Ne)),r&&(Nr.fromBufferAttribute(r,a),Dr.fromBufferAttribute(r,l),Ur.fromBufferAttribute(r,c),h.uv1=xn.getInterpolation(Fr,ns,is,ss,Nr,Dr,Ur,new Ne)),o&&(Cc.fromBufferAttribute(o,a),Rc.fromBufferAttribute(o,l),Pc.fromBufferAttribute(o,c),h.normal=xn.getInterpolation(Fr,ns,is,ss,Cc,Rc,Pc,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};xn.getNormal(ns,is,ss,d.normal),h.face=d}return h}class Si extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(d,2));function _(v,p,m,y,x,b,I,C,L,N,E){const S=b/L,U=I/N,k=b/2,A=I/2,z=C/2,D=L+1,F=N+1;let Z=0,q=0;const Q=new W;for(let oe=0;oe<F;oe++){const xe=oe*U-A;for(let de=0;de<D;de++){const He=de*S-k;Q[v]=He*y,Q[p]=xe*x,Q[m]=z,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[m]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(de/L),d.push(1-oe/N),Z+=1}}for(let oe=0;oe<N;oe++)for(let xe=0;xe<L;xe++){const de=u+xe+D*oe,He=u+xe+D*(oe+1),ee=u+(xe+1)+D*(oe+1),fe=u+(xe+1)+D*oe;l.push(de,He,fe),l.push(He,ee,fe),q+=6}a.addGroup(f,q,E),f+=q,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=bs(s[t]);for(const i in n)e[i]=n[i]}return e}function qf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const gi={clone:bs,merge:$t};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Su extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new W,Lc=new Ne,Ic=new Ne;class en extends Su{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Ic),t.subVectors(Ic,Lc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class jf extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(rs,os,e,t);i.layers=this.layers,this.add(i);const r=new en(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new en(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new en(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new en(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new en(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Mu extends Vt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Xt});r.uniforms.tEquirect.value=t;const o=new At(i,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Ht),new jf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const _a=new W,$f=new W,Kf=new Ye;let Fi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_a.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kf.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Pi=new Rs,zr=new W;class pl{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],v=i[10],p=i[11],m=i[12],y=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,p-f,b-m).normalize(),n[1].setComponents(l+r,u+c,p+f,b+m).normalize(),n[2].setComponents(l+o,u+h,p+_,b+y).normalize(),n[3].setComponents(l-o,u-h,p-_,b-y).normalize(),n[4].setComponents(l-a,u-d,p-v,b-x).normalize(),t===ni)n[5].setComponents(l+a,u+d,p+v,b+x).normalize();else if(t===wo)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zr.x=i.normal.x>0?e.max.x:e.min.x,zr.y=i.normal.y>0?e.max.y:e.min.y,zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jf(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,a),d.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let f=0,_=u.length;f<_;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Hi extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],_=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let x=0;x<c;x++){const b=x*d-r;_.push(b,-y,0),v.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,b=y+c*(m+1),I=y+1+c*(m+1),C=y+1+c*m;f.push(x,b,C),f.push(b,I,C)}this.setIndex(f),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,og=`#define DISTANCE
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
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
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
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Mg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Eg=`#define TOON
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
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Qf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:vp,color_pars_fragment:yp,color_pars_vertex:xp,color_vertex:Sp,common:Mp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:bp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Np,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:qp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Bp,fog_fragment:Op,fog_pars_fragment:zp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Wp,lights_toon_fragment:Xp,lights_toon_pars_fragment:Yp,lights_phong_fragment:jp,lights_phong_pars_fragment:Zp,lights_physical_fragment:$p,lights_physical_pars_fragment:Kp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:_m,normal_pars_fragment:vm,normal_pars_vertex:ym,normal_vertex:xm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:bm,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Fm,shadowmask_pars_fragment:Bm,skinbase_vertex:Om,skinning_pars_vertex:zm,skinning_vertex:km,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:qm,transmission_fragment:Xm,transmission_pars_fragment:Ym,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:$m,worldpos_vertex:Km,background_vert:Jm,background_frag:Qm,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:_g,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:xg,meshphong_frag:Sg,meshphysical_vert:Mg,meshphysical_frag:wg,meshtoon_vert:Eg,meshtoon_frag:bg,points_vert:Tg,points_frag:Ag,shadow_vert:Cg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Lg},Ee={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Un={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Un.physical={uniforms:$t([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const kr={r:0,b:0,g:0},Li=new bn,Ig=new mt;function Ng(s,e,t,n,i,r,o){const a=new Be(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const b=_(y);b===null?m(a,l):b&&b.isColor&&(m(b,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(y,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===Do)?(h===void 0&&(h=new At(new Si(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:bs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Li)),h.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,(d!==b||u!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new Hi(2,2),new jt({name:"BackgroundMaterial",uniforms:bs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(kr,xu(s)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p}}function Dg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(S,U,k,A,z){let D=!1;const F=d(A,k,U);r!==F&&(r=F,c(r.object)),D=f(S,A,k,z),D&&_(S,A,k,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,b(S,U,k,A),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,U,k){const A=k.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let D=z[U.id];D===void 0&&(D={},z[U.id]=D);let F=D[A];return F===void 0&&(F=u(l()),D[A]=F),F}function u(S){const U=[],k=[],A=[];for(let z=0;z<t;z++)U[z]=0,k[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:A,object:S,attributes:{},index:null}}function f(S,U,k,A){const z=r.attributes,D=U.attributes;let F=0;const Z=k.getAttributes();for(const q in Z)if(Z[q].location>=0){const oe=z[q];let xe=D[q];if(xe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),oe===void 0||oe.attribute!==xe||xe&&oe.data!==xe.data)return!0;F++}return r.attributesNum!==F||r.index!==A}function _(S,U,k,A){const z={},D=U.attributes;let F=0;const Z=k.getAttributes();for(const q in Z)if(Z[q].location>=0){let oe=D[q];oe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const xe={};xe.attribute=oe,oe&&oe.data&&(xe.data=oe.data),z[q]=xe,F++}r.attributes=z,r.attributesNum=F,r.index=A}function v(){const S=r.newAttributes;for(let U=0,k=S.length;U<k;U++)S[U]=0}function p(S){m(S,0)}function m(S,U){const k=r.newAttributes,A=r.enabledAttributes,z=r.attributeDivisors;k[S]=1,A[S]===0&&(s.enableVertexAttribArray(S),A[S]=1),z[S]!==U&&(s.vertexAttribDivisor(S,U),z[S]=U)}function y(){const S=r.newAttributes,U=r.enabledAttributes;for(let k=0,A=U.length;k<A;k++)U[k]!==S[k]&&(s.disableVertexAttribArray(k),U[k]=0)}function x(S,U,k,A,z,D,F){F===!0?s.vertexAttribIPointer(S,U,k,z,D):s.vertexAttribPointer(S,U,k,A,z,D)}function b(S,U,k,A){v();const z=A.attributes,D=k.getAttributes(),F=U.defaultAttributeValues;for(const Z in D){const q=D[Z];if(q.location>=0){let Q=z[Z];if(Q===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const oe=Q.normalized,xe=Q.itemSize,de=e.get(Q);if(de===void 0)continue;const He=de.buffer,ee=de.type,fe=de.bytesPerElement,me=ee===s.INT||ee===s.UNSIGNED_INT||Q.gpuType===su;if(Q.isInterleavedBufferAttribute){const _e=Q.data,Ve=_e.stride,We=Q.offset;if(_e.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)m(q.location+j,_e.meshPerAttribute);S.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let j=0;j<q.locationSize;j++)p(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,He);for(let j=0;j<q.locationSize;j++)x(q.location+j,xe/q.locationSize,ee,oe,Ve*fe,(We+xe/q.locationSize*j)*fe,me)}else{if(Q.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e,Q.meshPerAttribute);S.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,He);for(let _e=0;_e<q.locationSize;_e++)x(q.location+_e,xe/q.locationSize,ee,oe,xe*fe,xe/q.locationSize*_e*fe,me)}}else if(F!==void 0){const oe=F[Z];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(q.location,oe);break;case 3:s.vertexAttrib3fv(q.location,oe);break;case 4:s.vertexAttrib4fv(q.location,oe);break;default:s.vertexAttrib1fv(q.location,oe)}}}}y()}function I(){N();for(const S in n){const U=n[S];for(const k in U){const A=U[k];for(const z in A)h(A[z].object),delete A[z];delete U[k]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const k in U){const A=U[k];for(const z in A)h(A[z].object),delete A[z];delete U[k]}delete n[S.id]}function L(S){for(const U in n){const k=n[U];if(k[S.id]===void 0)continue;const A=k[S.id];for(const z in A)h(A[z].object),delete A[z];delete k[S.id]}}function N(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Ug(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<d;f++)this.render(c[f],h[f]);else{u.multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];t.update(f,n,1)}}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];for(let v=0;v<u.length;v++)t.update(_,n,u[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==wn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==xi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:I}}function Bg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Fi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,x=y*4;let b=m.clippingState||null;l.value=b,b=h(_,u,x,f);for(let I=0;I!==x;++I)b[I]=t[I];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,b=f;x!==v;++x,b+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Og(s){let e=new WeakMap;function t(o,a){return a===Ya?o.mapping=xs:a===ja&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends Su{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Nc=[.125,.215,.35,.446,.526,.582],Oi=20,va=new ml,Dc=new Be;let ya=null,xa=0,Sa=0,Ma=!1;const Bi=(1+Math.sqrt(5))/2,as=1/Bi,Uc=[new W(-Bi,as,0),new W(Bi,as,0),new W(-as,0,Bi),new W(as,0,Bi),new W(0,Bi,-as),new W(0,Bi,as),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ya=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,xa,Sa),this._renderer.xr.enabled=Ma,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Mn,format:wn,colorSpace:Fn,depthBuffer:!1},i=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=kg(r,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,i){const a=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=_i,h.autoClear=!1;const f=new fl({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new At(new Si,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Dc),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Hr(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(i-r-1)%Uc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const m=[];let y=0;for(let L=0;L<Oi;++L){const N=L/v,E=Math.exp(-N*N/2);m.push(E),L===0?y+=E:L<p&&(y+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const b=this._sizeLods[i],I=3*b*(i>x-ps?i-x+ps:0),C=4*(this._cubeSize-b);Hr(t,I,C,3*b,2*b),l.setRenderTarget(t),l.render(d,va)}}function zg(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+Nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=Nc[o-s+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,v=3,p=2,m=1,y=new Float32Array(v*_*f),x=new Float32Array(p*_*f),b=new Float32Array(m*_*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,N=C>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];y.set(E,v*_*C),x.set(u,p*_*C);const S=[C,C,C,C,C,C];b.set(S,m*_*C)}const I=new Ot;I.setAttribute("position",new Jt(y,v)),I.setAttribute("uv",new Jt(x,p)),I.setAttribute("faceIndex",new Jt(b,m)),e.push(I),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(s,e,t){const n=new Bn(s,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kg(s,e,t){const n=new Float32Array(Oi),i=new W(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Oc(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function zc(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ya||l===ja,h=l===xs||l===Ss;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Fc(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Fc(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gg(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const v=u.morphAttributes[_];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)e.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let p=0,m=v.length;p<m;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,b=y.length;x<b;x+=3){const I=y[x+0],C=y[x+1],L=y[x+2];u.push(I,C,C,L,L,I)}}else if(_!==void 0){const y=_.array;v=_.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const I=x+0,C=x+1,L=x+2;u.push(I,C,C,L,L,I)}}else return;const p=new(du(u)?yu:vu)(u,1);p.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wg(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,u*o,_),t.update(f,n,_))}function h(u,f,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<_;p++)this.render(u[p]/o,f[p]);else{v.multiDrawElementsWEBGL(n,f,0,r,u,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}}function d(u,f,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,n,v[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function qg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xg(s,e,t){const n=new WeakMap,i=new bt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let I=a.attributes.position.count*b,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*C*4*d),N=new mu(L,I,C,d);N.type=Sn,N.needsUpdate=!0;const E=b*4;for(let U=0;U<d;U++){const k=m[U],A=y[U],z=x[U],D=I*C*4*U;for(let F=0;F<k.count;F++){const Z=F*E;_===!0&&(i.fromBufferAttribute(k,F),L[D+Z+0]=i.x,L[D+Z+1]=i.y,L[D+Z+2]=i.z,L[D+Z+3]=0),v===!0&&(i.fromBufferAttribute(A,F),L[D+Z+4]=i.x,L[D+Z+5]=i.y,L[D+Z+6]=i.z,L[D+Z+7]=0),p===!0&&(i.fromBufferAttribute(z,F),L[D+Z+8]=i.x,L[D+Z+9]=i.y,L[D+Z+10]=i.z,L[D+Z+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:N,size:new Ne(I,C)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Yg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _l extends Vt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:_s,h!==_s&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Ms),n===void 0&&h===ws&&(n=As),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Eu=new Vt,bu=new _l(1,1);bu.compareFunction=uu;const Tu=new mu,Au=new Lf,Cu=new Mu,kc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kc[i];if(r===void 0&&(r=new Float32Array(i),kc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bo(s,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),Ut(t,n)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),Ut(t,n)}}function e0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Vc.set(n),s.uniformMatrix4fv(this.addr,!1,Vc),Ut(t,n)}}function t0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function s0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function r0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function o0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function a0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function l0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function c0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?bu:Eu;t.setTexture2D(e||r,i)}function h0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Au,i)}function u0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cu,i)}function d0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function f0(s){switch(s){case 5126:return jg;case 35664:return Zg;case 35665:return $g;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(s,e){s.uniform1fv(this.addr,e)}function m0(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function g0(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function _0(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function v0(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y0(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x0(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function S0(s,e){s.uniform1iv(this.addr,e)}function M0(s,e){s.uniform2iv(this.addr,e)}function w0(s,e){s.uniform3iv(this.addr,e)}function E0(s,e){s.uniform4iv(this.addr,e)}function b0(s,e){s.uniform1uiv(this.addr,e)}function T0(s,e){s.uniform2uiv(this.addr,e)}function A0(s,e){s.uniform3uiv(this.addr,e)}function C0(s,e){s.uniform4uiv(this.addr,e)}function R0(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Eu,r[o])}function P0(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Au,r[o])}function L0(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cu,r[o])}function I0(s,e,t){const n=this.cache,i=e.length,r=Bo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}function N0(s){switch(s){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return y0;case 35676:return x0;case 5124:case 35670:return S0;case 35667:case 35671:return M0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return b0;case 36294:return T0;case 36295:return A0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return I0}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class F0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function qc(s,e){s.seq.push(e),s.map[e.id]=e}function B0(s,e,t){const n=s.name,i=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),o=wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qc(t,c===void 0?new D0(a,s,e):new U0(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new F0(a),qc(t,d)),t=d}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);B0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const O0=37297;let z0=0;function k0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function H0(s){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(s);let n;switch(e===t?n="":e===Mo&&t===So?n="LinearDisplayP3ToLinearSRGB":e===So&&t===Mo&&(n="LinearSRGBToLinearDisplayP3"),s){case Fn:case Fo:return[n,"LinearTransferOETF"];case Dn:case hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+k0(s.getShaderSource(e),o)}else return i}function V0(s,e){const t=H0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function G0(s,e){let t;switch(e){case $h:t="Linear";break;case Kh:t="Reinhard";break;case Jh:t="OptimizedCineon";break;case Qh:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function q0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Zs(s){return s!==""}function jc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(s){return s.replace(Y0,Z0)}const j0=new Map;function Z0(s,e){let t=Xe[e];if(t===void 0){const n=j0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(s){return s.replace($0,K0)}function K0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kc(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case zd:e="ENVMAP_BLENDING_ADD";break}return e}function n_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function i_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=J0(t),c=Q0(t),h=e_(t),d=t_(t),u=n_(t),f=W0(t),_=q0(r),v=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`)):(p=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),m=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_i?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Ka(o),o=jc(o,t),o=Zc(o,t),a=Ka(a),a=jc(a,t),a=Zc(a,t),o=$c(o),a=$c(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,b=y+m+a,I=Xc(i,i.VERTEX_SHADER,x),C=Xc(i,i.FRAGMENT_SHADER,b);i.attachShader(v,I),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(U){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),A=i.getShaderInfoLog(I).trim(),z=i.getShaderInfoLog(C).trim();let D=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,C);else{const Z=Yc(i,I,"vertex"),q=Yc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Z+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(A===""||z==="")&&(F=!1);F&&(U.diagnostics={runnable:D,programLog:k,vertexShader:{log:A,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(I),i.deleteShader(C),N=new ho(i,v),E=X0(i,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,O0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o_(e),t.set(e,n)),n}}class o_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function a_(s,e,t,n,i,r,o){const a=new gu,l=new r_,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,U,k,A){const z=k.fog,D=A.geometry,F=E.isMeshStandardMaterial?k.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),q=Z&&Z.mapping===Do?Z.image.height:null,Q=_[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const oe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,xe=oe!==void 0?oe.length:0;let de=0;D.morphAttributes.position!==void 0&&(de=1),D.morphAttributes.normal!==void 0&&(de=2),D.morphAttributes.color!==void 0&&(de=3);let He,ee,fe,me;if(Q){const lt=Un[Q];He=lt.vertexShader,ee=lt.fragmentShader}else He=E.vertexShader,ee=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const _e=s.getRenderTarget(),Ve=A.isInstancedMesh===!0,We=A.isBatchedMesh===!0,j=!!E.map,at=!!E.matcap,De=!!Z,it=!!E.aoMap,ze=!!E.lightMap,Ze=!!E.bumpMap,qe=!!E.normalMap,Ke=!!E.displacementMap,Mt=!!E.emissiveMap,B=!!E.metalnessMap,T=!!E.roughnessMap,te=E.anisotropy>0,le=E.clearcoat>0,he=E.dispersion>0,pe=E.iridescence>0,Le=E.sheen>0,Te=E.transmission>0,be=te&&!!E.anisotropyMap,Ge=le&&!!E.clearcoatMap,ve=le&&!!E.clearcoatNormalMap,Ie=le&&!!E.clearcoatRoughnessMap,Je=pe&&!!E.iridescenceMap,Oe=pe&&!!E.iridescenceThicknessMap,we=Le&&!!E.sheenColorMap,Fe=Le&&!!E.sheenRoughnessMap,je=!!E.specularMap,ht=!!E.specularColorMap,Ue=!!E.specularIntensityMap,H=Te&&!!E.transmissionMap,ce=Te&&!!E.thicknessMap,G=!!E.gradientMap,Se=!!E.alphaMap,Ce=E.alphaTest>0,et=!!E.alphaHash,gt=!!E.extensions;let wt=_i;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=s.toneMapping);const Ft={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:He,fragmentShader:ee,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:We,instancing:Ve,instancingColor:Ve&&A.instanceColor!==null,instancingMorph:Ve&&A.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Fn,alphaToCoverage:!!E.alphaToCoverage,map:j,matcap:at,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:q,aoMap:it,lightMap:ze,bumpMap:Ze,normalMap:qe,displacementMap:u&&Ke,emissiveMap:Mt,normalMapObjectSpace:qe&&E.normalMapType===Qd,normalMapTangentSpace:qe&&E.normalMapType===Uo,metalnessMap:B,roughnessMap:T,anisotropy:te,anisotropyMap:be,clearcoat:le,clearcoatMap:Ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ie,dispersion:he,iridescence:pe,iridescenceMap:Je,iridescenceThicknessMap:Oe,sheen:Le,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:je,specularColorMap:ht,specularIntensityMap:Ue,transmission:Te,transmissionMap:H,thicknessMap:ce,gradientMap:G,opaque:E.transparent===!1&&E.blending===gs&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:et,combine:E.combine,mapUv:j&&v(E.map.channel),aoMapUv:it&&v(E.aoMap.channel),lightMapUv:ze&&v(E.lightMap.channel),bumpMapUv:Ze&&v(E.bumpMap.channel),normalMapUv:qe&&v(E.normalMap.channel),displacementMapUv:Ke&&v(E.displacementMap.channel),emissiveMapUv:Mt&&v(E.emissiveMap.channel),metalnessMapUv:B&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:be&&v(E.anisotropyMap.channel),clearcoatMapUv:Ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(E.sheenRoughnessMap.channel),specularMapUv:je&&v(E.specularMap.channel),specularColorMapUv:ht&&v(E.specularColorMap.channel),specularIntensityMapUv:Ue&&v(E.specularIntensityMap.channel),transmissionMapUv:H&&v(E.transmissionMap.channel),thicknessMapUv:ce&&v(E.thicknessMap.channel),alphaMapUv:Se&&v(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(qe||te),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!D.attributes.uv&&(j||Se),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:A.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:wt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:j&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:gt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)S.push(U),S.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(y(S,E),x(S,E),S.push(s.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),E.push(a.mask)}function b(E){const S=_[E.type];let U;if(S){const k=Un[S];U=gi.clone(k.uniforms)}else U=E.uniforms;return U}function I(E,S){let U;for(let k=0,A=h.length;k<A;k++){const z=h[k];if(z.cacheKey===S){U=z,++U.usedTimes;break}}return U===void 0&&(U=new i_(s,S,E,r),h.push(U)),U}function C(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function L(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:I,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:N}}function l_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function c_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Jc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,_,v,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function a(d,u,f,_,v,p){const m=o(d,u,f,_,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,_,v,p){const m=o(d,u,f,_,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||c_),n.length>1&&n.sort(u||Jc),i.length>1&&i.sort(u||Jc)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function h_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qc,s.set(n,[o])):i>=r.length?(o=new Qc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function u_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function d_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let f_=0;function p_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function m_(s){const e=new u_,t=d_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,r=new mt,o=new mt;function a(c,h){let d=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let _=0,v=0,p=0,m=0,y=0,x=0,b=0,I=0,C=0,L=0,N=0;c.sort(p_);const E=h===!0?Math.PI:1;for(let U=0,k=c.length;U<k;U++){const A=c[U],z=A.color,D=A.intensity,F=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=z.r*D*E,u+=z.g*D*E,f+=z.b*D*E;else if(A.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(A.sh.coefficients[q],D);N++}else if(A.isDirectionalLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){const Q=A.shadow,oe=t.get(A);oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,n.directionalShadow[_]=oe,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=A.shadow.matrix,x++}n.directional[_]=q,_++}else if(A.isSpotLight){const q=e.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(z).multiplyScalar(D*E),q.distance=F,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,n.spot[p]=q;const Q=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,Q.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[p]=Q.matrix,A.castShadow){const oe=t.get(A);oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,n.spotShadow[p]=oe,n.spotShadowMap[p]=Z,I++}p++}else if(A.isRectAreaLight){const q=e.get(A);q.color.copy(z).multiplyScalar(D),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=q,m++}else if(A.isPointLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*E),q.distance=A.distance,q.decay=A.decay,A.castShadow){const Q=A.shadow,oe=t.get(A);oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,oe.shadowCameraNear=Q.camera.near,oe.shadowCameraFar=Q.camera.far,n.pointShadow[v]=oe,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=A.shadow.matrix,b++}n.point[v]=q,v++}else if(A.isHemisphereLight){const q=e.get(A);q.skyColor.copy(A.color).multiplyScalar(D*E),q.groundColor.copy(A.groundColor).multiplyScalar(D*E),n.hemi[y]=q,y++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==b||S.numSpotShadows!==I||S.numSpotMaps!==C||S.numLightProbes!==N)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=v,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=I+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,S.directionalLength=_,S.pointLength=v,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=b,S.numSpotShadows=I,S.numSpotMaps=C,S.numLightProbes=N,n.version=f_++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(x.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function eh(s){const e=new m_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function g_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new eh(s),e.set(i,[a])):r>=o.length?(a=new eh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class __ extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v_ extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S_(s,e,t){let n=new pl;const i=new Ne,r=new Ne,o=new bt,a=new __({depthPacking:Jd}),l=new v_,c={},h=t.maxTextureSize,d={[yi]:Kt,[Kt]:yi,[sn]:sn},u=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:y_,fragmentShader:x_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ot;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let m=this.type;this.render=function(C,L,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=s.getRenderTarget(),S=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Xt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const A=m!==Jn&&this.type===Jn,z=m===Jn&&this.type!==Jn;for(let D=0,F=C.length;D<F;D++){const Z=C[D],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Q=q.getFrameExtents();if(i.multiply(Q),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,q.mapSize.y=r.y)),q.map===null||A===!0||z===!0){const xe=this.type!==Jn?{minFilter:Yt,magFilter:Yt}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(i.x,i.y,xe),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const oe=q.getViewportCount();for(let xe=0;xe<oe;xe++){const de=q.getViewport(xe);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),k.viewport(o),q.updateMatrices(Z,xe),n=q.getFrustum(),b(L,N,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Jn&&y(q,N),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(E,S,U)};function y(C,L){const N=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,N,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,N,f,v,null)}function x(C,L,N,E){let S=null;const U=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)S=U;else if(S=N.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const k=S.uuid,A=L.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let D=z[A];D===void 0&&(D=S.clone(),z[A]=D,L.addEventListener("dispose",I)),S=D}if(S.visible=L.visible,S.wireframe=L.wireframe,E===Jn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=N}return S}function b(C,L,N,E,S){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Jn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const A=e.update(C),z=C.material;if(Array.isArray(z)){const D=A.groups;for(let F=0,Z=D.length;F<Z;F++){const q=D[F],Q=z[q.materialIndex];if(Q&&Q.visible){const oe=x(C,Q,E,S);C.onBeforeShadow(s,C,L,N,A,oe,q),s.renderBufferDirect(N,null,A,oe,C,q),C.onAfterShadow(s,C,L,N,A,oe,q)}}}else if(z.visible){const D=x(C,z,E,S);C.onBeforeShadow(s,C,L,N,A,D,null),s.renderBufferDirect(N,null,A,D,C,null),C.onAfterShadow(s,C,L,N,A,D,null)}}const k=C.children;for(let A=0,z=k.length;A<z;A++)b(k[A],L,N,E,S)}function I(C){C.target.removeEventListener("dispose",I);for(const N in c){const E=c[N],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function M_(s){function e(){let H=!1;const ce=new bt;let G=null;const Se=new bt(0,0,0,0);return{setMask:function(Ce){G!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),G=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,et,gt,wt,Ft){Ft===!0&&(Ce*=wt,et*=wt,gt*=wt),ce.set(Ce,et,gt,wt),Se.equals(ce)===!1&&(s.clearColor(Ce,et,gt,wt),Se.copy(ce))},reset:function(){H=!1,G=null,Se.set(-1,0,0,0)}}}function t(){let H=!1,ce=null,G=null,Se=null;return{setTest:function(Ce){Ce?me(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!H&&(s.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(G!==Ce){switch(Ce){case Ld:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}G=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Se!==Ce&&(s.clearDepth(Ce),Se=Ce)},reset:function(){H=!1,ce=null,G=null,Se=null}}}function n(){let H=!1,ce=null,G=null,Se=null,Ce=null,et=null,gt=null,wt=null,Ft=null;return{setTest:function(lt){H||(lt?me(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!H&&(s.stencilMask(lt),ce=lt)},setFunc:function(lt,on,zt){(G!==lt||Se!==on||Ce!==zt)&&(s.stencilFunc(lt,on,zt),G=lt,Se=on,Ce=zt)},setOp:function(lt,on,zt){(et!==lt||gt!==on||wt!==zt)&&(s.stencilOp(lt,on,zt),et=lt,gt=on,wt=zt)},setLocked:function(lt){H=lt},setClear:function(lt){Ft!==lt&&(s.clearStencil(lt),Ft=lt)},reset:function(){H=!1,ce=null,G=null,Se=null,Ce=null,et=null,gt=null,wt=null,Ft=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,_=!1,v=null,p=null,m=null,y=null,x=null,b=null,I=null,C=new Be(0,0,0),L=0,N=!1,E=null,S=null,U=null,k=null,A=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Z)[1]),D=F>=1):Z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),D=F>=2);let q=null,Q={};const oe=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),de=new bt().fromArray(oe),He=new bt().fromArray(xe);function ee(H,ce,G,Se){const Ce=new Uint8Array(4),et=s.createTexture();s.bindTexture(H,et),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<G;gt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(ce+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return et}const fe={};fe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(s.DEPTH_TEST),r.setFunc(yo),Ze(!1),qe(Nl),me(s.CULL_FACE),it(Xt);function me(H){c[H]!==!0&&(s.enable(H),c[H]=!0)}function _e(H){c[H]!==!1&&(s.disable(H),c[H]=!1)}function Ve(H,ce){return h[H]!==ce?(s.bindFramebuffer(H,ce),h[H]=ce,H===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),H===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function We(H,ce){let G=u,Se=!1;if(H){G=d.get(ce),G===void 0&&(G=[],d.set(ce,G));const Ce=H.textures;if(G.length!==Ce.length||G[0]!==s.COLOR_ATTACHMENT0){for(let et=0,gt=Ce.length;et<gt;et++)G[et]=s.COLOR_ATTACHMENT0+et;G.length=Ce.length,Se=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Se=!0);Se&&s.drawBuffers(G)}function j(H){return f!==H?(s.useProgram(H),f=H,!0):!1}const at={[Qn]:s.FUNC_ADD,[_d]:s.FUNC_SUBTRACT,[vd]:s.FUNC_REVERSE_SUBTRACT};at[yd]=s.MIN,at[xd]=s.MAX;const De={[Wa]:s.ZERO,[Sd]:s.ONE,[Md]:s.SRC_COLOR,[qa]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Zh]:s.DST_COLOR,[jh]:s.DST_ALPHA,[wd]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[bd]:s.ONE_MINUS_DST_COLOR,[Ed]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Cd]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function it(H,ce,G,Se,Ce,et,gt,wt,Ft,lt){if(H===Xt){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(me(s.BLEND),_=!0),H!==Ga){if(H!==v||lt!==N){if((p!==Qn||x!==Qn)&&(s.blendEquation(s.FUNC_ADD),p=Qn,x=Qn),lt)switch(H){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,y=null,b=null,I=null,C.set(0,0,0),L=0,v=H,N=lt}return}Ce=Ce||ce,et=et||G,gt=gt||Se,(ce!==p||Ce!==x)&&(s.blendEquationSeparate(at[ce],at[Ce]),p=ce,x=Ce),(G!==m||Se!==y||et!==b||gt!==I)&&(s.blendFuncSeparate(De[G],De[Se],De[et],De[gt]),m=G,y=Se,b=et,I=gt),(wt.equals(C)===!1||Ft!==L)&&(s.blendColor(wt.r,wt.g,wt.b,Ft),C.copy(wt),L=Ft),v=H,N=!1}function ze(H,ce){H.side===sn?_e(s.CULL_FACE):me(s.CULL_FACE);let G=H.side===Kt;ce&&(G=!G),Ze(G),H.blending===gs&&H.transparent===!1?it(Xt):it(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);const Se=H.stencilWrite;o.setTest(Se),Se&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Mt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){E!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),E=H)}function qe(H){H!==md?(me(s.CULL_FACE),H!==S&&(H===Nl?s.cullFace(s.BACK):H===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),S=H}function Ke(H){H!==U&&(D&&s.lineWidth(H),U=H)}function Mt(H,ce,G){H?(me(s.POLYGON_OFFSET_FILL),(k!==ce||A!==G)&&(s.polygonOffset(ce,G),k=ce,A=G)):_e(s.POLYGON_OFFSET_FILL)}function B(H){H?me(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function T(H){H===void 0&&(H=s.TEXTURE0+z-1),q!==H&&(s.activeTexture(H),q=H)}function te(H,ce,G){G===void 0&&(q===null?G=s.TEXTURE0+z-1:G=q);let Se=Q[G];Se===void 0&&(Se={type:void 0,texture:void 0},Q[G]=Se),(Se.type!==H||Se.texture!==ce)&&(q!==G&&(s.activeTexture(G),q=G),s.bindTexture(H,ce||fe[H]),Se.type=H,Se.texture=ce)}function le(){const H=Q[q];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(H){de.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),de.copy(H))}function Fe(H){He.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function je(H,ce){let G=l.get(ce);G===void 0&&(G=new WeakMap,l.set(ce,G));let Se=G.get(H);Se===void 0&&(Se=s.getUniformBlockIndex(ce,H.name),G.set(H,Se))}function ht(H,ce){const Se=l.get(ce).get(H);a.get(ce)!==Se&&(s.uniformBlockBinding(ce,Se,H.__bindingPointIndex),a.set(ce,Se))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},q=null,Q={},h={},d=new WeakMap,u=[],f=null,_=!1,v=null,p=null,m=null,y=null,x=null,b=null,I=null,C=new Be(0,0,0),L=0,N=!1,E=null,S=null,U=null,k=null,A=null,de.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:me,disable:_e,bindFramebuffer:Ve,drawBuffers:We,useProgram:j,setBlending:it,setMaterial:ze,setFlipSided:Ze,setCullFace:qe,setLineWidth:Ke,setPolygonOffset:Mt,setScissorTest:B,activeTexture:T,bindTexture:te,unbindTexture:le,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:Je,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:ht,texStorage2D:ve,texStorage3D:Ie,texSubImage2D:Le,texSubImage3D:Te,compressedTexSubImage2D:be,compressedTexSubImage3D:Ge,scissor:we,viewport:Fe,reset:Ue}}function w_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(B,T){return f?new OffscreenCanvas(B,T):ir("canvas")}function v(B,T,te){let le=1;const he=Mt(B);if((he.width>te||he.height>te)&&(le=te/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pe=Math.floor(le*he.width),Le=Math.floor(le*he.height);d===void 0&&(d=_(pe,Le));const Te=T?_(pe,Le):d;return Te.width=pe,Te.height=Le,Te.getContext("2d").drawImage(B,0,0,pe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+pe+"x"+Le+")."),Te}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),B;return B}function p(B){return B.generateMipmaps&&B.minFilter!==Yt&&B.minFilter!==Ht}function m(B){s.generateMipmap(B)}function y(B,T,te,le,he=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pe=T;if(T===s.RED&&(te===s.FLOAT&&(pe=s.R32F),te===s.HALF_FLOAT&&(pe=s.R16F),te===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.R8UI),te===s.UNSIGNED_SHORT&&(pe=s.R16UI),te===s.UNSIGNED_INT&&(pe=s.R32UI),te===s.BYTE&&(pe=s.R8I),te===s.SHORT&&(pe=s.R16I),te===s.INT&&(pe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(pe=s.RG32F),te===s.HALF_FLOAT&&(pe=s.RG16F),te===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.RG8UI),te===s.UNSIGNED_SHORT&&(pe=s.RG16UI),te===s.UNSIGNED_INT&&(pe=s.RG32UI),te===s.BYTE&&(pe=s.RG8I),te===s.SHORT&&(pe=s.RG16I),te===s.INT&&(pe=s.RG32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const Le=he?xo:ft.getTransfer(le);te===s.FLOAT&&(pe=s.RGBA32F),te===s.HALF_FLOAT&&(pe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(pe=Le===yt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function x(B,T){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==Yt&&B.minFilter!==Ht?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function b(B){const T=B.target;T.removeEventListener("dispose",b),C(T),T.isVideoTexture&&h.delete(T)}function I(B){const T=B.target;T.removeEventListener("dispose",I),N(T)}function C(B){const T=n.get(B);if(T.__webglInit===void 0)return;const te=B.source,le=u.get(te);if(le){const he=le[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&L(B),Object.keys(le).length===0&&u.delete(te)}n.remove(B)}function L(B){const T=n.get(B);s.deleteTexture(T.__webglTexture);const te=B.source,le=u.get(te);delete le[T.__cacheKey],o.memory.textures--}function N(B){const T=n.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let he=0;he<T.__webglFramebuffer[le].length;he++)s.deleteFramebuffer(T.__webglFramebuffer[le][he]);else s.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)s.deleteFramebuffer(T.__webglFramebuffer[le]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=B.textures;for(let le=0,he=te.length;le<he;le++){const pe=n.get(te[le]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(te[le])}n.remove(B)}let E=0;function S(){E=0}function U(){const B=E;return B>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+i.maxTextures),E+=1,B}function k(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function A(B,T){const te=n.get(B);if(B.isVideoTexture&&qe(B),B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){const le=B.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(te,B,T);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function z(B,T){const te=n.get(B);if(B.version>0&&te.__version!==B.version){de(te,B,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function D(B,T){const te=n.get(B);if(B.version>0&&te.__version!==B.version){de(te,B,T);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function F(B,T){const te=n.get(B);if(B.version>0&&te.__version!==B.version){He(te,B,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const Z={[ki]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},q={[Yt]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[jo]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},Q={[ef]:s.NEVER,[af]:s.ALWAYS,[tf]:s.LESS,[uu]:s.LEQUAL,[nf]:s.EQUAL,[of]:s.GEQUAL,[sf]:s.GREATER,[rf]:s.NOTEQUAL};function oe(B,T){if(T.type===Sn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ht||T.magFilter===jo||T.magFilter===yr||T.magFilter===mi||T.minFilter===Ht||T.minFilter===jo||T.minFilter===yr||T.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,Z[T.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,q[T.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yt||T.minFilter!==yr&&T.minFilter!==mi||T.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xe(B,T){let te=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",b));const le=T.source;let he=u.get(le);he===void 0&&(he={},u.set(le,he));const pe=k(T);if(pe!==B.__cacheKey){he[pe]===void 0&&(he[pe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,te=!0),he[pe].usedTimes++;const Le=he[B.__cacheKey];Le!==void 0&&(he[B.__cacheKey].usedTimes--,Le.usedTimes===0&&L(T)),B.__cacheKey=pe,B.__webglTexture=he[pe].texture}return te}function de(B,T,te){let le=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=s.TEXTURE_3D);const he=xe(B,T),pe=T.source;t.bindTexture(le,B.__webglTexture,s.TEXTURE0+te);const Le=n.get(pe);if(pe.version!==Le.__version||he===!0){t.activeTexture(s.TEXTURE0+te);const Te=ft.getPrimaries(ft.workingColorSpace),be=T.colorSpace===ei?null:ft.getPrimaries(T.colorSpace),Ge=T.colorSpace===ei||Te===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ve=v(T.image,!1,i.maxTextureSize);ve=Ke(T,ve);const Ie=r.convert(T.format,T.colorSpace),Je=r.convert(T.type);let Oe=y(T.internalFormat,Ie,Je,T.colorSpace,T.isVideoTexture);oe(le,T);let we;const Fe=T.mipmaps,je=T.isVideoTexture!==!0,ht=Le.__version===void 0||he===!0,Ue=pe.dataReady,H=x(T,ve);if(T.isDepthTexture)Oe=s.DEPTH_COMPONENT16,T.type===Sn?Oe=s.DEPTH_COMPONENT32F:T.type===Ms?Oe=s.DEPTH_COMPONENT24:T.type===As&&(Oe=s.DEPTH24_STENCIL8),ht&&(je?t.texStorage2D(s.TEXTURE_2D,1,Oe,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ie,Je,null));else if(T.isDataTexture)if(Fe.length>0){je&&ht&&t.texStorage2D(s.TEXTURE_2D,H,Oe,Fe[0].width,Fe[0].height);for(let ce=0,G=Fe.length;ce<G;ce++)we=Fe[ce],je?Ue&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ie,Je,we.data):t.texImage2D(s.TEXTURE_2D,ce,Oe,we.width,we.height,0,Ie,Je,we.data);T.generateMipmaps=!1}else je?(ht&&t.texStorage2D(s.TEXTURE_2D,H,Oe,ve.width,ve.height),Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,Ie,Je,ve.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ie,Je,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,Oe,Fe[0].width,Fe[0].height,ve.depth);for(let ce=0,G=Fe.length;ce<G;ce++)we=Fe[ce],T.format!==wn?Ie!==null?je?Ue&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,ve.depth,Ie,we.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Oe,we.width,we.height,ve.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,ve.depth,Ie,Je,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Oe,we.width,we.height,ve.depth,0,Ie,Je,we.data)}else{je&&ht&&t.texStorage2D(s.TEXTURE_2D,H,Oe,Fe[0].width,Fe[0].height);for(let ce=0,G=Fe.length;ce<G;ce++)we=Fe[ce],T.format!==wn?Ie!==null?je?Ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ie,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Ue&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ie,Je,we.data):t.texImage2D(s.TEXTURE_2D,ce,Oe,we.width,we.height,0,Ie,Je,we.data)}else if(T.isDataArrayTexture)je?(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,Oe,ve.width,ve.height,ve.depth),Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ie,Je,ve.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ve.width,ve.height,ve.depth,0,Ie,Je,ve.data);else if(T.isData3DTexture)je?(ht&&t.texStorage3D(s.TEXTURE_3D,H,Oe,ve.width,ve.height,ve.depth),Ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ie,Je,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,ve.width,ve.height,ve.depth,0,Ie,Je,ve.data);else if(T.isFramebufferTexture){if(ht)if(je)t.texStorage2D(s.TEXTURE_2D,H,Oe,ve.width,ve.height);else{let ce=ve.width,G=ve.height;for(let Se=0;Se<H;Se++)t.texImage2D(s.TEXTURE_2D,Se,Oe,ce,G,0,Ie,Je,null),ce>>=1,G>>=1}}else if(Fe.length>0){if(je&&ht){const ce=Mt(Fe[0]);t.texStorage2D(s.TEXTURE_2D,H,Oe,ce.width,ce.height)}for(let ce=0,G=Fe.length;ce<G;ce++)we=Fe[ce],je?Ue&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ie,Je,we):t.texImage2D(s.TEXTURE_2D,ce,Oe,Ie,Je,we);T.generateMipmaps=!1}else if(je){if(ht){const ce=Mt(ve);t.texStorage2D(s.TEXTURE_2D,H,Oe,ce.width,ce.height)}Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Je,ve)}else t.texImage2D(s.TEXTURE_2D,0,Oe,Ie,Je,ve);p(T)&&m(le),Le.__version=pe.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function He(B,T,te){if(T.image.length!==6)return;const le=xe(B,T),he=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+te);const pe=n.get(he);if(he.version!==pe.__version||le===!0){t.activeTexture(s.TEXTURE0+te);const Le=ft.getPrimaries(ft.workingColorSpace),Te=T.colorSpace===ei?null:ft.getPrimaries(T.colorSpace),be=T.colorSpace===ei||Le===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let G=0;G<6;G++)!Ge&&!ve?Ie[G]=v(T.image[G],!0,i.maxCubemapSize):Ie[G]=ve?T.image[G].image:T.image[G],Ie[G]=Ke(T,Ie[G]);const Je=Ie[0],Oe=r.convert(T.format,T.colorSpace),we=r.convert(T.type),Fe=y(T.internalFormat,Oe,we,T.colorSpace),je=T.isVideoTexture!==!0,ht=pe.__version===void 0||le===!0,Ue=he.dataReady;let H=x(T,Je);oe(s.TEXTURE_CUBE_MAP,T);let ce;if(Ge){je&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Fe,Je.width,Je.height);for(let G=0;G<6;G++){ce=Ie[G].mipmaps;for(let Se=0;Se<ce.length;Se++){const Ce=ce[Se];T.format!==wn?Oe!==null?je?Ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se,Fe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se,0,0,Ce.width,Ce.height,Oe,we,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se,Fe,Ce.width,Ce.height,0,Oe,we,Ce.data)}}}else{if(ce=T.mipmaps,je&&ht){ce.length>0&&H++;const G=Mt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Fe,G.width,G.height)}for(let G=0;G<6;G++)if(ve){je?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ie[G].width,Ie[G].height,Oe,we,Ie[G].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Fe,Ie[G].width,Ie[G].height,0,Oe,we,Ie[G].data);for(let Se=0;Se<ce.length;Se++){const et=ce[Se].image[G].image;je?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se+1,0,0,et.width,et.height,Oe,we,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se+1,Fe,et.width,et.height,0,Oe,we,et.data)}}else{je?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Oe,we,Ie[G]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Fe,Oe,we,Ie[G]);for(let Se=0;Se<ce.length;Se++){const Ce=ce[Se];je?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se+1,0,0,Oe,we,Ce.image[G]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se+1,Fe,Oe,we,Ce.image[G])}}}p(T)&&m(s.TEXTURE_CUBE_MAP),pe.__version=he.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function ee(B,T,te,le,he,pe){const Le=r.convert(te.format,te.colorSpace),Te=r.convert(te.type),be=y(te.internalFormat,Le,Te,te.colorSpace);if(!n.get(T).__hasExternalTextures){const ve=Math.max(1,T.width>>pe),Ie=Math.max(1,T.height>>pe);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,be,ve,Ie,T.depth,0,Le,Te,null):t.texImage2D(he,pe,be,ve,Ie,0,Le,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),Ze(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,he,n.get(te).__webglTexture,0,ze(T)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,he,n.get(te).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(B,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,B),T.depthBuffer&&!T.stencilBuffer){let le=s.DEPTH_COMPONENT24;if(te||Ze(T)){const he=T.depthTexture;he&&he.isDepthTexture&&(he.type===Sn?le=s.DEPTH_COMPONENT32F:he.type===Ms&&(le=s.DEPTH_COMPONENT24));const pe=ze(T);Ze(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,le,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,le,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,le,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,B)}else if(T.depthBuffer&&T.stencilBuffer){const le=ze(T);te&&Ze(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,T.width,T.height):Ze(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,B)}else{const le=T.textures;for(let he=0;he<le.length;he++){const pe=le[he],Le=r.convert(pe.format,pe.colorSpace),Te=r.convert(pe.type),be=y(pe.internalFormat,Le,Te,pe.colorSpace),Ge=ze(T);te&&Ze(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,be,T.width,T.height):Ze(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,be,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,be,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(B,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),A(T.depthTexture,0);const le=n.get(T.depthTexture).__webglTexture,he=ze(T);if(T.depthTexture.format===_s)Ze(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(T.depthTexture.format===ws)Ze(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function _e(B){const T=n.get(B),te=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");me(T.__webglFramebuffer,B)}else if(te){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=s.createRenderbuffer(),fe(T.__webglDepthbuffer[le],B,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),fe(T.__webglDepthbuffer,B,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(B,T,te){const le=n.get(B);T!==void 0&&ee(le.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&_e(B)}function We(B){const T=B.texture,te=n.get(B),le=n.get(T);B.addEventListener("dispose",I);const he=B.textures,pe=B.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=T.version,o.memory.textures++),pe){te.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Te]=[];for(let be=0;be<T.mipmaps.length;be++)te.__webglFramebuffer[Te][be]=s.createFramebuffer()}else te.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Te=0;Te<T.mipmaps.length;Te++)te.__webglFramebuffer[Te]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Le)for(let Te=0,be=he.length;Te<be;Te++){const Ge=n.get(he[Te]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(B.samples>0&&Ze(B)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Te=0;Te<he.length;Te++){const be=he[Te];te.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);const Ge=r.convert(be.format,be.colorSpace),ve=r.convert(be.type),Ie=y(be.internalFormat,Ge,ve,be.colorSpace,B.isXRRenderTarget===!0),Je=ze(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ie,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,te.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(te.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),oe(s.TEXTURE_CUBE_MAP,T);for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ee(te.__webglFramebuffer[Te][be],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,be);else ee(te.__webglFramebuffer[Te],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);p(T)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Te=0,be=he.length;Te<be;Te++){const Ge=he[Te],ve=n.get(Ge);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),oe(s.TEXTURE_2D,Ge),ee(te.__webglFramebuffer,B,Ge,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,0),p(Ge)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Te=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),oe(Te,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ee(te.__webglFramebuffer[be],B,T,s.COLOR_ATTACHMENT0,Te,be);else ee(te.__webglFramebuffer,B,T,s.COLOR_ATTACHMENT0,Te,0);p(T)&&m(Te),t.unbindTexture()}B.depthBuffer&&_e(B)}function j(B){const T=B.textures;for(let te=0,le=T.length;te<le;te++){const he=T[te];if(p(he)){const pe=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=n.get(he).__webglTexture;t.bindTexture(pe,Le),m(pe),t.unbindTexture()}}}const at=[],De=[];function it(B){if(B.samples>0){if(Ze(B)===!1){const T=B.textures,te=B.width,le=B.height;let he=s.COLOR_BUFFER_BIT;const pe=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(B),Te=T.length>1;if(Te)for(let be=0;be<T.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let be=0;be<T.length;be++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[be]);const Ge=n.get(T[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,te,le,0,0,te,le,he,s.NEAREST),l===!0&&(at.length=0,De.length=0,at.push(s.COLOR_ATTACHMENT0+be),B.depthBuffer&&B.resolveDepthBuffer===!1&&(at.push(pe),De.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,De)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let be=0;be<T.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Le.__webglColorRenderbuffer[be]);const Ge=n.get(T[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const T=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ze(B){return Math.min(i.maxSamples,B.samples)}function Ze(B){const T=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(B){const T=o.render.frame;h.get(B)!==T&&(h.set(B,T),B.update())}function Ke(B,T){const te=B.colorSpace,le=B.format,he=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||te!==Fn&&te!==ei&&(ft.getTransfer(te)===yt?(le!==wn||he!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Mt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=S,this.setTexture2D=A,this.setTexture2DArray=z,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=Ve,this.setupRenderTarget=We,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ze}function E_(s,e){function t(n,i=ei){let r;const o=ft.getTransfer(i);if(n===xi)return s.UNSIGNED_BYTE;if(n===ru)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return s.BYTE;if(n===Gd)return s.SHORT;if(n===iu)return s.UNSIGNED_SHORT;if(n===su)return s.INT;if(n===Ms)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Mn)return s.HALF_FLOAT;if(n===qd)return s.ALPHA;if(n===Xd)return s.RGB;if(n===wn)return s.RGBA;if(n===Yd)return s.LUMINANCE;if(n===jd)return s.LUMINANCE_ALPHA;if(n===_s)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===au)return s.RED;if(n===lu)return s.RED_INTEGER;if(n===Zd)return s.RG;if(n===cu)return s.RG_INTEGER;if(n===hu)return s.RGBA_INTEGER;if(n===Zo||n===$o||n===Ko||n===Jo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Ol||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===ql||n===Xl||n===Yl||n===jl||n===Zl||n===$l||n===Kl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$d||n===oc||n===ac||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class b_ extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new jt({vertexShader:A_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Hi(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class P_ extends Cs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const v=new R_,p=t.getContextAttributes();let m=null,y=null;const x=[],b=[],I=new Ne;let C=null;const L=new en;L.layers.enable(1),L.viewport=new bt;const N=new en;N.layers.enable(2),N.viewport=new bt;const E=[L,N],S=new b_;S.layers.enable(1),S.layers.enable(2);let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ea,x[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ea,x[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ea,x[ee]=fe),fe.getHandSpace()};function A(ee){const fe=b.indexOf(ee.inputSource);if(fe===-1)return;const me=x[fe];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||o),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",D);for(let ee=0;ee<x.length;ee++){const fe=b[ee];fe!==null&&(b[ee]=null,x[ee].disconnect(fe))}U=null,k=null,v.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,me=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?ws:_s,me=p.stencil?As:Ms);const Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ve),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Bn(u.textureWidth,u.textureHeight,{format:wn,type:xi,depthTexture:new _l(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(ee){for(let fe=0;fe<ee.removed.length;fe++){const me=ee.removed[fe],_e=b.indexOf(me);_e>=0&&(b[_e]=null,x[_e].disconnect(me))}for(let fe=0;fe<ee.added.length;fe++){const me=ee.added[fe];let _e=b.indexOf(me);if(_e===-1){for(let We=0;We<x.length;We++)if(We>=b.length){b.push(me),_e=We;break}else if(b[We]===null){b[We]=me,_e=We;break}if(_e===-1)break}const Ve=x[_e];Ve&&Ve.connect(me)}}const F=new W,Z=new W;function q(ee,fe,me){F.setFromMatrixPosition(fe.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const _e=F.distanceTo(Z),Ve=fe.projectionMatrix.elements,We=me.projectionMatrix.elements,j=Ve[14]/(Ve[10]-1),at=Ve[14]/(Ve[10]+1),De=(Ve[9]+1)/Ve[5],it=(Ve[9]-1)/Ve[5],ze=(Ve[8]-1)/Ve[0],Ze=(We[8]+1)/We[0],qe=j*ze,Ke=j*Ze,Mt=_e/(-ze+Ze),B=Mt*-ze;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(B),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const T=j+Mt,te=at+Mt,le=qe-B,he=Ke+(_e-B),pe=De*at/te*T,Le=it*at/te*T;ee.projectionMatrix.makePerspective(le,he,pe,Le,T,te),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function Q(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;v.texture!==null&&(ee.near=v.depthNear,ee.far=v.depthFar),S.near=N.near=L.near=ee.near,S.far=N.far=L.far=ee.far,(U!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,k=S.far,L.near=U,L.far=k,N.near=U,N.far=k,L.updateProjectionMatrix(),N.updateProjectionMatrix(),ee.updateProjectionMatrix());const fe=ee.parent,me=S.cameras;Q(S,fe);for(let _e=0;_e<me.length;_e++)Q(me[_e],fe);me.length===2?q(S,L,N):S.projectionMatrix.copy(L.projectionMatrix),oe(ee,S,fe)};function oe(ee,fe,me){me===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Es*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null};let xe=null;function de(ee,fe){if(h=fe.getViewerPose(c||o),_=fe,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let _e=!1;me.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let We=0;We<me.length;We++){const j=me[We];let at=null;if(f!==null)at=f.getViewport(j);else{const it=d.getViewSubImage(u,j);at=it.viewport,We===0&&(e.setRenderTargetTextures(y,it.colorTexture,u.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(y))}let De=E[We];De===void 0&&(De=new en,De.layers.enable(We),De.viewport=new bt,E[We]=De),De.matrix.fromArray(j.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(j.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(at.x,at.y,at.width,at.height),We===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(De)}const Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const We=d.getDepthInformation(me[0]);We&&We.isValid&&We.texture&&v.init(e,We,i.renderState)}}for(let me=0;me<x.length;me++){const _e=b[me],Ve=x[me];_e!==null&&Ve!==void 0&&Ve.update(_e,fe,c||o)}v.render(e,S),xe&&xe(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const He=new wu;He.setAnimationLoop(de),this.setAnimationLoop=function(ee){xe=ee},this.dispose=function(){}}}const Ii=new bn,L_=new mt;function I_(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,b=y.envMapRotation;if(x&&(p.envMap.value=x,Ii.copy(b),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Ii)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const I=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=i[y.id];b===void 0&&(_(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",p));const I=x.program;n.updateUBOMapping(y,I);const C=e.render.frame;r[y.id]!==C&&(u(y),r[y.id]=C)}function h(y){const x=d();y.__bindingPointIndex=x;const b=s.createBuffer(),I=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],b=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,L=b.length;C<L;C++){const N=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,S=N.length;E<S;E++){const U=N[E];if(f(U,C,E,I)===!0){const k=U.__offset,A=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let D=0;D<A.length;D++){const F=A[D],Z=v(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,k+z,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,b,I){const C=y.value,L=x+"_"+b;if(I[L]===void 0)return typeof C=="number"||typeof C=="boolean"?I[L]=C:I[L]=C.clone(),!0;{const N=I[L];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return I[L]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(y){const x=y.uniforms;let b=0;const I=16;for(let L=0,N=x.length;L<N;L++){const E=Array.isArray(x[L])?x[L]:[x[L]];for(let S=0,U=E.length;S<U;S++){const k=E[S],A=Array.isArray(k.value)?k.value:[k.value];for(let z=0,D=A.length;z<D;z++){const F=A[z],Z=v(F),q=b%I;q!==0&&I-q<Z.boundary&&(b+=I-q),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=Z.storage}}}const C=b%I;return C>0&&(b+=I-C),y.__size=b,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class D_{constructor(e={}){const{canvas:t=bf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const x=this;let b=!1,I=0,C=0,L=null,N=-1,E=null;const S=new bt,U=new bt;let k=null;const A=new Be(0);let z=0,D=t.width,F=t.height,Z=1,q=null,Q=null;const oe=new bt(0,0,D,F),xe=new bt(0,0,D,F);let de=!1;const He=new pl;let ee=!1,fe=!1;const me=new mt,_e=new W,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return L===null?Z:1}let j=n;function at(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",G,!1),j===null){const Y="webgl2";if(j=at(Y,P),j===null)throw at(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let De,it,ze,Ze,qe,Ke,Mt,B,T,te,le,he,pe,Le,Te,be,Ge,ve,Ie,Je,Oe,we,Fe,je;function ht(){De=new Vg(j),De.init(),we=new E_(j,De),it=new Fg(j,De,e,we),ze=new M_(j),Ze=new qg(j),qe=new l_,Ke=new w_(j,De,ze,qe,it,we,Ze),Mt=new Og(x),B=new Hg(x),T=new Jf(j),Fe=new Dg(j,T),te=new Gg(j,T,Ze,Fe),le=new Yg(j,te,T,Ze),Ie=new Xg(j,it,Ke),be=new Bg(qe),he=new a_(x,Mt,B,De,it,Fe,be),pe=new I_(x,qe),Le=new h_,Te=new g_(De),ve=new Ng(x,Mt,B,ze,le,u,l),Ge=new S_(x,le,it),je=new N_(j,Ze,it,ze),Je=new Ug(j,De,Ze),Oe=new Wg(j,De,Ze),Ze.programs=he.programs,x.capabilities=it,x.extensions=De,x.properties=qe,x.renderLists=Le,x.shadowMap=Ge,x.state=ze,x.info=Ze}ht();const Ue=new P_(x,j);this.xr=Ue,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=De.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=De.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(D,F,!1))},this.getSize=function(P){return P.set(D,F)},this.setSize=function(P,Y,K=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,F=Y,t.width=Math.floor(P*Z),t.height=Math.floor(Y*Z),K===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(D*Z,F*Z).floor()},this.setDrawingBufferSize=function(P,Y,K){D=P,F=Y,Z=K,t.width=Math.floor(P*K),t.height=Math.floor(Y*K),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(oe)},this.setViewport=function(P,Y,K,$){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,Y,K,$),ze.viewport(S.copy(oe).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(xe)},this.setScissor=function(P,Y,K,$){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,Y,K,$),ze.scissor(U.copy(xe).multiplyScalar(Z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(P){ze.setScissorTest(de=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(P=!0,Y=!0,K=!0){let $=0;if(P){let g=!1;if(L!==null){const M=L.texture.format;g=M===hu||M===cu||M===lu}if(g){const M=L.texture.type,R=M===xi||M===Ms||M===iu||M===As||M===ru||M===ou,O=ve.getClearColor(),X=ve.getClearAlpha(),V=O.r,J=O.g,ie=O.b;R?(f[0]=V,f[1]=J,f[2]=ie,f[3]=X,j.clearBufferuiv(j.COLOR,0,f)):(_[0]=V,_[1]=J,_[2]=ie,_[3]=X,j.clearBufferiv(j.COLOR,0,_))}else $|=j.COLOR_BUFFER_BIT}Y&&($|=j.DEPTH_BUFFER_BIT),K&&($|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",G,!1),Le.dispose(),Te.dispose(),qe.dispose(),Mt.dispose(),B.dispose(),le.dispose(),Fe.dispose(),je.dispose(),he.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",lt),Ue.removeEventListener("sessionend",on),zt.stop()};function H(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=Ze.autoReset,Y=Ge.enabled,K=Ge.autoUpdate,$=Ge.needsUpdate,g=Ge.type;ht(),Ze.autoReset=P,Ge.enabled=Y,Ge.autoUpdate=K,Ge.needsUpdate=$,Ge.type=g}function G(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Se(P){const Y=P.target;Y.removeEventListener("dispose",Se),Ce(Y)}function Ce(P){et(P),qe.remove(P)}function et(P){const Y=qe.get(P).programs;Y!==void 0&&(Y.forEach(function(K){he.releaseProgram(K)}),P.isShaderMaterial&&he.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,K,$,g,M){Y===null&&(Y=Ve);const R=g.isMesh&&g.matrixWorld.determinant()<0,O=Xo(P,Y,K,$,g);ze.setMaterial($,R);let X=K.index,V=1;if($.wireframe===!0){if(X=te.getWireframeAttribute(K),X===void 0)return;V=2}const J=K.drawRange,ie=K.attributes.position;let ne=J.start*V,re=(J.start+J.count)*V;M!==null&&(ne=Math.max(ne,M.start*V),re=Math.min(re,(M.start+M.count)*V)),X!==null?(ne=Math.max(ne,0),re=Math.min(re,X.count)):ie!=null&&(ne=Math.max(ne,0),re=Math.min(re,ie.count));const se=re-ne;if(se<0||se===1/0)return;Fe.setup(g,$,O,K,X);let ye,ue=Je;if(X!==null&&(ye=T.get(X),ue=Oe,ue.setIndex(ye)),g.isMesh)$.wireframe===!0?(ze.setLineWidth($.wireframeLinewidth*We()),ue.setMode(j.LINES)):ue.setMode(j.TRIANGLES);else if(g.isLine){let ae=$.linewidth;ae===void 0&&(ae=1),ze.setLineWidth(ae*We()),g.isLineSegments?ue.setMode(j.LINES):g.isLineLoop?ue.setMode(j.LINE_LOOP):ue.setMode(j.LINE_STRIP)}else g.isPoints?ue.setMode(j.POINTS):g.isSprite&&ue.setMode(j.TRIANGLES);if(g.isBatchedMesh)g._multiDrawInstances!==null?ue.renderMultiDrawInstances(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount,g._multiDrawInstances):ue.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)ue.renderInstances(ne,se,g.count);else if(K.isInstancedBufferGeometry){const ae=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pe=Math.min(K.instanceCount,ae);ue.renderInstances(ne,se,Pe)}else ue.render(ne,se)};function gt(P,Y,K){P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=Kt,P.needsUpdate=!0,Ti(P,Y,K),P.side=yi,P.needsUpdate=!0,Ti(P,Y,K),P.side=sn):Ti(P,Y,K)}this.compile=function(P,Y,K=null){K===null&&(K=P),p=Te.get(K),p.init(Y),y.push(p),K.traverseVisible(function(g){g.isLight&&g.layers.test(Y.layers)&&(p.pushLight(g),g.castShadow&&p.pushShadow(g))}),P!==K&&P.traverseVisible(function(g){g.isLight&&g.layers.test(Y.layers)&&(p.pushLight(g),g.castShadow&&p.pushShadow(g))}),p.setupLights(x._useLegacyLights);const $=new Set;return P.traverse(function(g){const M=g.material;if(M)if(Array.isArray(M))for(let R=0;R<M.length;R++){const O=M[R];gt(O,K,g),$.add(O)}else gt(M,K,g),$.add(M)}),y.pop(),p=null,$},this.compileAsync=function(P,Y,K=null){const $=this.compile(P,Y,K);return new Promise(g=>{function M(){if($.forEach(function(R){qe.get(R).currentProgram.isReady()&&$.delete(R)}),$.size===0){g(P);return}setTimeout(M,10)}De.get("KHR_parallel_shader_compile")!==null?M():setTimeout(M,10)})};let wt=null;function Ft(P){wt&&wt(P)}function lt(){zt.stop()}function on(){zt.start()}const zt=new wu;zt.setAnimationLoop(Ft),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(P){wt=P,Ue.setAnimationLoop(P),P===null?zt.stop():zt.start()},Ue.addEventListener("sessionstart",lt),Ue.addEventListener("sessionend",on),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Y),Y=Ue.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Y,L),p=Te.get(P,y.length),p.init(Y),y.push(p),me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),He.setFromProjectionMatrix(me),fe=this.localClippingEnabled,ee=be.init(this.clippingPlanes,fe),v=Le.get(P,m.length),v.init(),m.push(v),ur(P,Y,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,Q);const K=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;K&&ve.addToRenderList(v,P),this.info.render.frame++,ee===!0&&be.beginShadows();const $=p.state.shadowsArray;Ge.render($,P,Y),ee===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const g=v.opaque,M=v.transmissive;if(p.setupLights(x._useLegacyLights),Y.isArrayCamera){const R=Y.cameras;if(M.length>0)for(let O=0,X=R.length;O<X;O++){const V=R[O];fr(g,M,P,V)}K&&ve.render(P);for(let O=0,X=R.length;O<X;O++){const V=R[O];dr(v,P,V,V.viewport)}}else M.length>0&&fr(g,M,P,Y),K&&ve.render(P),dr(v,P,Y);L!==null&&(Ke.updateMultisampleRenderTarget(L),Ke.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(x,P,Y),Fe.resetDefaultState(),N=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],ee===!0&&be.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ur(P,Y,K,$){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||He.intersectsSprite(P)){$&&_e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(me);const R=le.update(P),O=P.material;O.visible&&v.push(P,R,O,K,_e.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||He.intersectsObject(P))){const R=le.update(P),O=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),_e.copy(P.boundingSphere.center)):(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)),_e.applyMatrix4(P.matrixWorld).applyMatrix4(me)),Array.isArray(O)){const X=R.groups;for(let V=0,J=X.length;V<J;V++){const ie=X[V],ne=O[ie.materialIndex];ne&&ne.visible&&v.push(P,R,ne,K,_e.z,ie)}}else O.visible&&v.push(P,R,O,K,_e.z,null)}}const M=P.children;for(let R=0,O=M.length;R<O;R++)ur(M[R],Y,K,$)}function dr(P,Y,K,$){const g=P.opaque,M=P.transmissive,R=P.transparent;p.setupLightsView(K),ee===!0&&be.setGlobalState(x.clippingPlanes,K),$&&ze.viewport(S.copy($)),g.length>0&&Wi(g,Y,K),M.length>0&&Wi(M,Y,K),R.length>0&&Wi(R,Y,K),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function fr(P,Y,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Bn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Mn:xi,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const M=p.state.transmissionRenderTarget[$.id],R=$.viewport||S;M.setSize(R.z,R.w);const O=x.getRenderTarget();x.setRenderTarget(M),x.getClearColor(A),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const X=x.toneMapping;x.toneMapping=_i;const V=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ee===!0&&be.setGlobalState(x.clippingPlanes,$),Wi(P,K,$),Ke.updateMultisampleRenderTarget(M),Ke.updateRenderTargetMipmap(M),De.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let ie=0,ne=Y.length;ie<ne;ie++){const re=Y[ie],se=re.object,ye=re.geometry,ue=re.material,ae=re.group;if(ue.side===sn&&se.layers.test($.layers)){const Pe=ue.side;ue.side=Kt,ue.needsUpdate=!0,pr(se,K,$,ye,ue,ae),ue.side=Pe,ue.needsUpdate=!0,J=!0}}J===!0&&(Ke.updateMultisampleRenderTarget(M),Ke.updateRenderTargetMipmap(M))}x.setRenderTarget(O),x.setClearColor(A,z),V!==void 0&&($.viewport=V),x.toneMapping=X}function Wi(P,Y,K){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let g=0,M=P.length;g<M;g++){const R=P[g],O=R.object,X=R.geometry,V=$===null?R.material:$,J=R.group;O.layers.test(K.layers)&&pr(O,Y,K,X,V,J)}}function pr(P,Y,K,$,g,M){P.onBeforeRender(x,Y,K,$,g,M),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),g.onBeforeRender(x,Y,K,$,P,M),g.transparent===!0&&g.side===sn&&g.forceSinglePass===!1?(g.side=Kt,g.needsUpdate=!0,x.renderBufferDirect(K,Y,$,g,P,M),g.side=yi,g.needsUpdate=!0,x.renderBufferDirect(K,Y,$,g,P,M),g.side=sn):x.renderBufferDirect(K,Y,$,g,P,M),P.onAfterRender(x,Y,K,$,g,M)}function Ti(P,Y,K){Y.isScene!==!0&&(Y=Ve);const $=qe.get(P),g=p.state.lights,M=p.state.shadowsArray,R=g.state.version,O=he.getParameters(P,g.state,M,Y,K),X=he.getProgramCacheKey(O);let V=$.programs;$.environment=P.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(P.isMeshStandardMaterial?B:Mt).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,V===void 0&&(P.addEventListener("dispose",Se),V=new Map,$.programs=V);let J=V.get(X);if(J!==void 0){if($.currentProgram===J&&$.lightsStateVersion===R)return gr(P,O),J}else O.uniforms=he.getUniforms(P),P.onBuild(K,O,x),P.onBeforeCompile(O,x),J=he.acquireProgram(O,X),V.set(X,J),$.uniforms=O.uniforms;const ie=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ie.clippingPlanes=be.uniform),gr(P,O),$.needsLights=_r(P),$.lightsStateVersion=R,$.needsLights&&(ie.ambientLightColor.value=g.state.ambient,ie.lightProbe.value=g.state.probe,ie.directionalLights.value=g.state.directional,ie.directionalLightShadows.value=g.state.directionalShadow,ie.spotLights.value=g.state.spot,ie.spotLightShadows.value=g.state.spotShadow,ie.rectAreaLights.value=g.state.rectArea,ie.ltc_1.value=g.state.rectAreaLTC1,ie.ltc_2.value=g.state.rectAreaLTC2,ie.pointLights.value=g.state.point,ie.pointLightShadows.value=g.state.pointShadow,ie.hemisphereLights.value=g.state.hemi,ie.directionalShadowMap.value=g.state.directionalShadowMap,ie.directionalShadowMatrix.value=g.state.directionalShadowMatrix,ie.spotShadowMap.value=g.state.spotShadowMap,ie.spotLightMatrix.value=g.state.spotLightMatrix,ie.spotLightMap.value=g.state.spotLightMap,ie.pointShadowMap.value=g.state.pointShadowMap,ie.pointShadowMatrix.value=g.state.pointShadowMatrix),$.currentProgram=J,$.uniformsList=null,J}function mr(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=ho.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function gr(P,Y){const K=qe.get(P);K.outputColorSpace=Y.outputColorSpace,K.batching=Y.batching,K.instancing=Y.instancing,K.instancingColor=Y.instancingColor,K.instancingMorph=Y.instancingMorph,K.skinning=Y.skinning,K.morphTargets=Y.morphTargets,K.morphNormals=Y.morphNormals,K.morphColors=Y.morphColors,K.morphTargetsCount=Y.morphTargetsCount,K.numClippingPlanes=Y.numClippingPlanes,K.numIntersection=Y.numClipIntersection,K.vertexAlphas=Y.vertexAlphas,K.vertexTangents=Y.vertexTangents,K.toneMapping=Y.toneMapping}function Xo(P,Y,K,$,g){Y.isScene!==!0&&(Y=Ve),Ke.resetTextureUnits();const M=Y.fog,R=$.isMeshStandardMaterial?Y.environment:null,O=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fn,X=($.isMeshStandardMaterial?B:Mt).get($.envMap||R),V=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,J=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ie=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,re=!!K.morphAttributes.color;let se=_i;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=x.toneMapping);const ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=ye!==void 0?ye.length:0,ae=qe.get($),Pe=p.state.lights;if(ee===!0&&(fe===!0||P!==E)){const st=P===E&&$.id===N;be.setState($,P,st)}let ge=!1;$.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==O||g.isBatchedMesh&&ae.batching===!1||!g.isBatchedMesh&&ae.batching===!0||g.isInstancedMesh&&ae.instancing===!1||!g.isInstancedMesh&&ae.instancing===!0||g.isSkinnedMesh&&ae.skinning===!1||!g.isSkinnedMesh&&ae.skinning===!0||g.isInstancedMesh&&ae.instancingColor===!0&&g.instanceColor===null||g.isInstancedMesh&&ae.instancingColor===!1&&g.instanceColor!==null||g.isInstancedMesh&&ae.instancingMorph===!0&&g.morphTexture===null||g.isInstancedMesh&&ae.instancingMorph===!1&&g.morphTexture!==null||ae.envMap!==X||$.fog===!0&&ae.fog!==M||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==be.numPlanes||ae.numIntersection!==be.numIntersection)||ae.vertexAlphas!==V||ae.vertexTangents!==J||ae.morphTargets!==ie||ae.morphNormals!==ne||ae.morphColors!==re||ae.toneMapping!==se||ae.morphTargetsCount!==ue)&&(ge=!0):(ge=!0,ae.__version=$.version);let Re=ae.currentProgram;ge===!0&&(Re=Ti($,Y,g));let ke=!1,tt=!1,_t=!1;const ut=Re.getUniforms(),nt=ae.uniforms;if(ze.useProgram(Re.program)&&(ke=!0,tt=!0,_t=!0),$.id!==N&&(N=$.id,tt=!0),ke||E!==P){ut.setValue(j,"projectionMatrix",P.projectionMatrix),ut.setValue(j,"viewMatrix",P.matrixWorldInverse);const st=ut.map.cameraPosition;st!==void 0&&st.setValue(j,_e.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&ut.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ut.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,tt=!0,_t=!0)}if(g.isSkinnedMesh){ut.setOptional(j,g,"bindMatrix"),ut.setOptional(j,g,"bindMatrixInverse");const st=g.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),ut.setValue(j,"boneTexture",st.boneTexture,Ke))}g.isBatchedMesh&&(ut.setOptional(j,g,"batchingTexture"),ut.setValue(j,"batchingTexture",g._matricesTexture,Ke));const $e=K.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&Ie.update(g,K,Re),(tt||ae.receiveShadow!==g.receiveShadow)&&(ae.receiveShadow=g.receiveShadow,ut.setValue(j,"receiveShadow",g.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(nt.envMap.value=X,nt.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(nt.envMapIntensity.value=Y.environmentIntensity),tt&&(ut.setValue(j,"toneMappingExposure",x.toneMappingExposure),ae.needsLights&&Yo(nt,_t),M&&$.fog===!0&&pe.refreshFogUniforms(nt,M),pe.refreshMaterialUniforms(nt,$,Z,F,p.state.transmissionRenderTarget[P.id]),ho.upload(j,mr(ae),nt,Ke)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ho.upload(j,mr(ae),nt,Ke),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ut.setValue(j,"center",g.center),ut.setValue(j,"modelViewMatrix",g.modelViewMatrix),ut.setValue(j,"normalMatrix",g.normalMatrix),ut.setValue(j,"modelMatrix",g.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const st=$.uniformsGroups;for(let Gt=0,Ct=st.length;Gt<Ct;Gt++){const rt=st[Gt];je.update(rt,Re),je.bind(rt,Re)}}return Re}function Yo(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function _r(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,Y,K){qe.get(P.texture).__webglTexture=Y,qe.get(P.depthTexture).__webglTexture=K;const $=qe.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const K=qe.get(P);K.__webglFramebuffer=Y,K.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,K=0){L=P,I=Y,C=K;let $=!0,g=null,M=!1,R=!1;if(P){const X=qe.get(P);X.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(j.FRAMEBUFFER,null),$=!1):X.__webglFramebuffer===void 0?Ke.setupRenderTarget(P):X.__hasExternalTextures&&Ke.rebindTextures(P,qe.get(P.texture).__webglTexture,qe.get(P.depthTexture).__webglTexture);const V=P.texture;(V.isData3DTexture||V.isDataArrayTexture||V.isCompressedArrayTexture)&&(R=!0);const J=qe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(J[Y])?g=J[Y][K]:g=J[Y],M=!0):P.samples>0&&Ke.useMultisampledRTT(P)===!1?g=qe.get(P).__webglMultisampledFramebuffer:Array.isArray(J)?g=J[K]:g=J,S.copy(P.viewport),U.copy(P.scissor),k=P.scissorTest}else S.copy(oe).multiplyScalar(Z).floor(),U.copy(xe).multiplyScalar(Z).floor(),k=de;if(ze.bindFramebuffer(j.FRAMEBUFFER,g)&&$&&ze.drawBuffers(P,g),ze.viewport(S),ze.scissor(U),ze.setScissorTest(k),M){const X=qe.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,X.__webglTexture,K)}else if(R){const X=qe.get(P.texture),V=Y||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,X.__webglTexture,K||0,V)}N=-1},this.readRenderTargetPixels=function(P,Y,K,$,g,M,R){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=qe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&R!==void 0&&(O=O[R]),O){ze.bindFramebuffer(j.FRAMEBUFFER,O);try{const X=P.texture,V=X.format,J=X.type;if(!it.textureFormatReadable(V)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-$&&K>=0&&K<=P.height-g&&j.readPixels(Y,K,$,g,we.convert(V),we.convert(J),M)}finally{const X=L!==null?qe.get(L).__webglFramebuffer:null;ze.bindFramebuffer(j.FRAMEBUFFER,X)}}},this.copyFramebufferToTexture=function(P,Y,K=0){const $=Math.pow(2,-K),g=Math.floor(Y.image.width*$),M=Math.floor(Y.image.height*$);Ke.setTexture2D(Y,0),j.copyTexSubImage2D(j.TEXTURE_2D,K,0,0,P.x,P.y,g,M),ze.unbindTexture()},this.copyTextureToTexture=function(P,Y,K,$=0){const g=Y.image.width,M=Y.image.height,R=we.convert(K.format),O=we.convert(K.type);Ke.setTexture2D(K,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment),Y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,$,P.x,P.y,g,M,R,O,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,$,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,R,Y.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,$,P.x,P.y,R,O,Y.image),$===0&&K.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,K,$,g=0){const M=P.max.x-P.min.x,R=P.max.y-P.min.y,O=P.max.z-P.min.z,X=we.convert($.format),V=we.convert($.type);let J;if($.isData3DTexture)Ke.setTexture3D($,0),J=j.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Ke.setTexture2DArray($,0),J=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const ie=j.getParameter(j.UNPACK_ROW_LENGTH),ne=j.getParameter(j.UNPACK_IMAGE_HEIGHT),re=j.getParameter(j.UNPACK_SKIP_PIXELS),se=j.getParameter(j.UNPACK_SKIP_ROWS),ye=j.getParameter(j.UNPACK_SKIP_IMAGES),ue=K.isCompressedTexture?K.mipmaps[g]:K.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,ue.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ue.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,P.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,P.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,P.min.z),K.isDataTexture||K.isData3DTexture?j.texSubImage3D(J,g,Y.x,Y.y,Y.z,M,R,O,X,V,ue.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(J,g,Y.x,Y.y,Y.z,M,R,O,X,ue.data):j.texSubImage3D(J,g,Y.x,Y.y,Y.z,M,R,O,X,V,ue),j.pixelStorei(j.UNPACK_ROW_LENGTH,ie),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ne),j.pixelStorei(j.UNPACK_SKIP_PIXELS,re),j.pixelStorei(j.UNPACK_SKIP_ROWS,se),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ye),g===0&&$.generateMipmaps&&j.generateMipmap(J),ze.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ke.setTextureCube(P,0):P.isData3DTexture?Ke.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ke.setTexture2DArray(P,0):Ke.setTexture2D(P,0),ze.unbindTexture()},this.resetState=function(){I=0,C=0,L=null,ze.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hl?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Fo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class U_ extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ru{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new W;class Ts{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pu extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const zs=new W,cs=new W,hs=new W,us=new Ne,ks=new Ne,Lu=new mt,Gr=new W,Hs=new W,Wr=new W,th=new Ne,ba=new Ne,nh=new Ne;class F_ extends Tt{constructor(e=new Pu){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ru(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Ts(n,3,0,!1)),ls.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Lu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;qr(Gr.set(-.5,-.5,0),hs,o,cs,i,r),qr(Hs.set(.5,-.5,0),hs,o,cs,i,r),qr(Wr.set(.5,.5,0),hs,o,cs,i,r),th.set(0,0),ba.set(1,0),nh.set(1,1);let a=e.ray.intersectTriangle(Gr,Hs,Wr,!1,zs);if(a===null&&(qr(Hs.set(-.5,.5,0),hs,o,cs,i,r),ba.set(0,1),a=e.ray.intersectTriangle(Gr,Wr,Hs,!1,zs),a===null))return;const l=e.ray.origin.distanceTo(zs);l<e.near||l>e.far||t.push({distance:l,point:zs.clone(),uv:xn.getInterpolation(zs,Gr,Hs,Wr,th,ba,nh,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(s,e,t,n,i,r){us.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ks.x=r*us.x-i*us.y,ks.y=i*us.x+r*us.y):ks.copy(us),s.copy(e),s.x+=ks.x,s.y+=ks.y,s.applyMatrix4(Lu)}class B_ extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Yt,h=Yt,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O_ extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Iu extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eo=new W,bo=new W,ih=new mt,Vs=new dl,Xr=new Rs,Ta=new W,sh=new W;class z_ extends Tt{constructor(e=new Ot,t=new Iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Eo.fromBufferAttribute(t,i-1),bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Eo.distanceTo(bo);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;ih.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const m=h.getX(v),y=h.getX(v+1),x=Yr(this,e,Vs,l,m,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(_-1),p=h.getX(f),m=Yr(this,e,Vs,l,v,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,p=_-1;v<p;v+=c){const m=Yr(this,e,Vs,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Yr(this,e,Vs,l,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Eo.fromBufferAttribute(o,i),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(Eo,bo,Ta,sh)>n)return;Ta.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ta);if(!(l<e.near||l>e.far))return{distance:l,point:sh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class Ja extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new mt,Qa=new dl,jr=new Rs,Zr=new W;class k_ extends Tt{constructor(e=new Ot,t=new Ja){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;rh.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=u,v=f;_<v;_++){const p=c.getX(_);Zr.fromBufferAttribute(d,p),oh(Zr,p,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,v=f;_<v;_++)Zr.fromBufferAttribute(d,_),oh(Zr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oh(s,e,t,n,i,r,o){const a=Qa.distanceSqToPoint(s);if(a<t){const l=new W;Qa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class H_ extends Vt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vl extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const v=[],p=n/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function y(){const b=new W,I=new W;let C=0;const L=(t-e)/n;for(let N=0;N<=r;N++){const E=[],S=N/r,U=S*(t-e)+e;for(let k=0;k<=i;k++){const A=k/i,z=A*l+a,D=Math.sin(z),F=Math.cos(z);I.x=U*D,I.y=-S*n+p,I.z=U*F,d.push(I.x,I.y,I.z),b.set(D,L,F).normalize(),u.push(b.x,b.y,b.z),f.push(A,1-S),E.push(_++)}v.push(E)}for(let N=0;N<i;N++)for(let E=0;E<r;E++){const S=v[E][N],U=v[E+1][N],k=v[E+1][N+1],A=v[E][N+1];h.push(S,U,A),h.push(U,k,A),C+=6}c.addGroup(m,C,0),m+=C}function x(b){const I=_,C=new Ne,L=new W;let N=0;const E=b===!0?e:t,S=b===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,p*S,0),u.push(0,S,0),f.push(.5,.5),_++;const U=_;for(let k=0;k<=i;k++){const z=k/i*l+a,D=Math.cos(z),F=Math.sin(z);L.x=E*F,L.y=p*S,L.z=E*D,d.push(L.x,L.y,L.z),u.push(0,S,0),C.x=D*.5+.5,C.y=F*.5*S+.5,f.push(C.x,C.y),_++}for(let k=0;k<i;k++){const A=I+k,z=U+k;b===!0?h.push(z,z+1,A):h.push(z+1,z,A),N+=3}c.addGroup(m,N,b===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new W,u=new W,f=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let b=0;m===0&&o===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(C+b,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=h[m][y+1],b=h[m][y],I=h[m+1][y],C=h[m+1][y+1];(m!==0||o>0)&&f.push(x,b,C),(m!==n-1||l<Math.PI)&&f.push(b,I,C)}this.setIndex(f),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class V_ extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oo extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G_ extends Oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class W_ extends zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class q_ extends zn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const To={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class X_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Y_=new X_;class Mi{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class j_ extends Error{constructor(e,t){super(e),this.response=t}}class Qs extends Mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=To.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,_=f!==0;let v=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:x,value:b})=>{if(x)m.close();else{v+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let C=0,L=h.length;C<L;C++){const N=h[C];N.onProgress&&N.onProgress(I)}m.enqueue(b),y()}})}}});return new Response(p)}else throw new j_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{To.add(e,c);const h=Xn[e];delete Xn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Z_ extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=To.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ir("img");function l(){h(),To.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $_ extends Mi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new B_,a=new Qs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:rn,o.wrapT=c.wrapT!==void 0?c.wrapT:rn,o.magFilter=c.magFilter!==void 0?c.magFilter:Ht,o.minFilter=c.minFilter!==void 0?c.minFilter:Ht,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=mi),c.mipmapCount===1&&(o.minFilter=Ht),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Nu extends Mi{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,o=new Z_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ls extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class K_ extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Aa=new mt,ah=new W,lh=new W;class yl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J_ extends yl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Q_ extends Ls{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new J_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ch=new mt,Gs=new W,Ca=new W;class ev extends yl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch)}}class tv extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ev}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nv extends yl{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iv extends Ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sv extends Ls{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class rv extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ov extends Mi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Qs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,_){if(t[_]!==void 0)return t[_];const p=f.interleavedBuffers[_],m=r(f,p.buffer),y=xr(p.type,m),x=new Ru(y,p.stride);return x.uuid=p.uuid,t[_]=x,x}function r(f,_){if(n[_]!==void 0)return n[_];const p=f.arrayBuffers[_],m=new Uint32Array(p).buffer;return n[_]=m,m}const o=e.isInstancedBufferGeometry?new rv:new Ot,a=e.data.index;if(a!==void 0){const f=xr(a.type,a.array);o.setIndex(new Jt(f,1))}const l=e.data.attributes;for(const f in l){const _=l[f];let v;if(_.isInterleavedBufferAttribute){const p=i(e.data,_.data);v=new Ts(p,_.itemSize,_.offset,_.normalized)}else{const p=xr(_.type,_.array),m=_.isInstancedBufferAttribute?O_:Jt;v=new m(p,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),_.usage!==void 0&&v.setUsage(_.usage),o.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const _=c[f],v=[];for(let p=0,m=_.length;p<m;p++){const y=_[p];let x;if(y.isInterleavedBufferAttribute){const b=i(e.data,y.data);x=new Ts(b,y.itemSize,y.offset,y.normalized)}else{const b=xr(y.type,y.array);x=new Jt(b,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}o.morphAttributes[f]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,_=d.length;f!==_;++f){const v=d[f];o.addGroup(v.start,v.count,v.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new W;u.center!==void 0&&f.fromArray(u.center),o.boundingSphere=new Rs(f,u.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);class En{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new En);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],_=n[8],v=i[0],p=i[1],m=i[2],y=i[3],x=i[4],b=i[5],I=i[6],C=i[7],L=i[8];return r[0]=o*v+a*y+l*I,r[1]=o*p+a*x+l*C,r[2]=o*m+a*b+l*L,r[3]=c*v+h*y+d*I,r[4]=c*p+h*x+d*C,r[5]=c*m+h*b+d*L,r[6]=u*v+f*y+_*I,r[7]=u*p+f*x+_*C,r[8]=u*m+f*b+_*L,t}scale(e,t){t===void 0&&(t=new En);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new w);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new En);const t=3,n=6,i=av;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,d=t*l,u=n*a,f=n*l,_=i*l,v=r*o,p=r*a,m=r*l,y=this.elements;return y[3*0+0]=1-(u+_),y[3*0+1]=h-m,y[3*0+2]=d+p,y[3*1+0]=h+m,y[3*1+1]=1-(c+_),y[3*1+2]=f-v,y[3*2+0]=d-p,y[3*2+1]=f+v,y[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new En);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const av=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new En([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new w);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new w);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new w),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=lv,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=cv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(uh),uh.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const lv=new w,cv=new w,uh=new w;class Et{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,dh),c=dh),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Et().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=fh,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=fh,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),_=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(_<0||f>_)}}const dh=new w,fh=[new w,new w,new w,new w,new w,new w,new w,new w];class ph{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Fu{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class pt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=hv,i=uv;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new pt);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-r*l,t.y=i*h+o*l+r*a-n*c,t.z=r*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new pt);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new pt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,f=-o*n-a*i-l*r;return t.x=h*c+f*-o+d*-l-u*-a,t.y=d*c+f*-a+u*-o-h*-l,t.z=u*c+f*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new pt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new pt);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,f,_,v,p;return f=i*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),_=Math.sin(u),v=Math.sin((1-t)*u)/_,p=Math.sin(t*u)/_):(v=1-t,p=t),n.x=v*i+p*l,n.y=v*r+p*c,n.z=v*o+p*h,n.w=v*a+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new pt);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const hv=new w,uv=new w,dv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Me{constructor(e){e===void 0&&(e={}),this.id=Me.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Me.idCounter=0;Me.types=dv;class ot{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new pt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ot.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ot.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),n.vsub(e,i),t.conjugate(mh),mh.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new w),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new w),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const mh=new pt;class er extends Me{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:Me.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];er.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new w,o=new w;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){h.copy(n.faceNormals[_]),r.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=_)}const f=[];for(let _=0;_<n.faces[d].length;_++){const v=n.vertices[n.faces[d][_]],p=new w;p.copy(v),r.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new w,h=new w,d=new w,u=new w,f=new w,_=new w;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const y=p.testSepAxis(c,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}else{const m=a?a.length:p.faces.length;for(let y=0;y<m;y++){const x=a?a[y]:y;c.copy(p.faceNormals[x]),n.vmult(c,c);const b=p.testSepAxis(c,e,t,n,i,r);if(b===!1)return!1;b<v&&(v=b,o.copy(c))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){r.vmult(e.uniqueAxes[m],h);const y=p.testSepAxis(h,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}else{const m=l?l.length:e.faces.length;for(let y=0;y<m;y++){const x=l?l[y]:y;h.copy(e.faceNormals[x]),r.vmult(h,h);const b=p.testSepAxis(h,e,t,n,i,r);if(b===!1)return!1;b<v&&(v=b,o.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],u);for(let y=0;y!==e.uniqueEdges.length;y++)if(r.vmult(e.uniqueEdges[y],f),u.cross(f,_),!_.almostZero()){_.normalize();const x=p.testSepAxis(_,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(_))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;er.project(a,e,n,i,Ra),er.project(t,e,r,o,Pa);const l=Ra[0],c=Ra[1],h=Pa[0],d=Pa[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(e,t){const n=new w,i=new w;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new w,c=new w,h=new w,d=new w,u=new w,f=new w,_=new w,v=new w,p=this,m=[],y=i,x=m;let b=-1,I=Number.MAX_VALUE;for(let S=0;S<p.faces.length;S++){l.copy(p.faceNormals[S]),n.vmult(l,l);const U=l.dot(e);U<I&&(I=U,b=S)}if(b<0)return;const C=p.faces[b];C.connectedFaces=[];for(let S=0;S<p.faces.length;S++)for(let U=0;U<p.faces[S].length;U++)C.indexOf(p.faces[S][U])!==-1&&S!==b&&C.connectedFaces.indexOf(S)===-1&&C.connectedFaces.push(S);const L=C.length;for(let S=0;S<L;S++){const U=p.vertices[C[S]],k=p.vertices[C[(S+1)%L]];U.vsub(k,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(U),n.vmult(f,f),t.vadd(f,f);const A=C.connectedFaces[S];_.copy(this.faceNormals[A]);const z=this.getPlaneConstantOfFace(A);v.copy(_),n.vmult(v,v);const D=z-v.dot(t);for(this.clipFaceAgainstPlane(y,x,v,D);y.length;)y.shift();for(;x.length;)y.push(x.shift())}_.copy(this.faceNormals[b]);const N=this.getPlaneConstantOfFace(b);v.copy(_),n.vmult(v,v);const E=N-v.dot(t);for(let S=0;S<y.length;S++){let U=v.dot(y[S])+E;if(U<=r&&(console.log(`clamped: depth=${U} to minDist=${r}`),U=r),U<=o){const k=y[S];if(U<=1e-6){const A={point:k,normal:v,depth:U};a.push(A)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,r<0)if(o<0){const d=new w;d.copy(c),t.push(d)}else{const d=new w;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){const d=new w;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new w;for(let f=0;f<r.length;f++){u.copy(r[f]),t.vmult(u,u),e.vadd(u,u);const _=u;(o===void 0||_.x<o)&&(o=_.x),(c===void 0||_.x>c)&&(c=_.x),(a===void 0||_.y<a)&&(a=_.y),(h===void 0||_.y>h)&&(h=_.y),(l===void 0||_.z<l)&&(l=_.z),(d===void 0||_.z>d)&&(d=_.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new w;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=t[n[a][0]],h=new w;e.vsub(c,h);const d=l.dot(h),u=new w;o.vsub(c,u);const f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,i,r){const o=e.vertices.length,a=fv;let l=0,c=0;const h=pv,d=e.vertices;h.setZero(),ot.vectorToLocalFrame(n,i,t,a),ot.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const _=d[f].dot(a);_>l&&(l=_),_<c&&(c=_)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Ra=[],Pa=[];new w;const fv=new w,pv=new w;class xl extends Me{constructor(e){super({type:Me.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=w,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new er({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),xl.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)di.set(r[o][0],r[o][1],r[o][2]),t.vmult(di,di),e.vadd(di,di),n(di.x,di.y,di.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;Rn[0].set(r.x,r.y,r.z),Rn[1].set(-r.x,r.y,r.z),Rn[2].set(-r.x,-r.y,r.z),Rn[3].set(-r.x,-r.y,-r.z),Rn[4].set(r.x,-r.y,-r.z),Rn[5].set(r.x,r.y,-r.z),Rn[6].set(-r.x,r.y,-r.z),Rn[7].set(r.x,-r.y,r.z);const o=Rn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Rn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const di=new w,Rn=[new w,new w,new w,new w,new w,new w,new w,new w],Sl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ml={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ae extends Fu{constructor(e){e===void 0&&(e={}),super(),this.id=Ae.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?Ae.STATIC:Ae.DYNAMIC,typeof e.type==typeof Ae.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=Ae.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new pt,this.initQuaternion=new pt,this.previousQuaternion=new pt,this.interpolatedQuaternion=new pt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new En,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new En,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Et,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=Ae.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ae.SLEEPING&&this.dispatchEvent(Ae.wakeupEvent)}sleep(){this.sleepState=Ae.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===Ae.AWAKE&&n<i?(this.sleepState=Ae.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ae.sleepyEvent)):t===Ae.SLEEPY&&n>i?this.wakeUp():t===Ae.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ae.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ae.SLEEPING||this.type===Ae.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new w,r=new pt;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=mv,o=gv,a=this.quaternion,l=this.aabb,c=_v;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=vv,i=yv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=Sv;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==Ae.DYNAMIC)return;const n=Mv,i=wv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===Ae.DYNAMIC&&(this.sleepState===Ae.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=t,i=Ev;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=bv;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==Ae.DYNAMIC)return;const n=Tv,i=Av;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Cv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),xl.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new w;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ae.DYNAMIC||this.type===Ae.KINEMATIC)||this.sleepState===Ae.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const _=d.elements,v=this.angularFactor,p=l.x*v.x,m=l.y*v.y,y=l.z*v.z;r.x+=e*(_[0]*p+_[1]*m+_[2]*y),r.y+=e*(_[3]*p+_[4]*m+_[5]*y),r.z+=e*(_[6]*p+_[7]*m+_[8]*y),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ae.idCounter=0;Ae.COLLIDE_EVENT_NAME="collide";Ae.DYNAMIC=Sl.DYNAMIC;Ae.STATIC=Sl.STATIC;Ae.KINEMATIC=Sl.KINEMATIC;Ae.AWAKE=Ml.AWAKE;Ae.SLEEPY=Ml.SLEEPY;Ae.SLEEPING=Ml.SLEEPING;Ae.wakeupEvent={type:"wakeup"};Ae.sleepyEvent={type:"sleepy"};Ae.sleepEvent={type:"sleep"};const mv=new w,gv=new pt,_v=new Et,vv=new En,yv=new En,xv=new En,Sv=new w,Mv=new w,wv=new w,Ev=new w,bv=new w,Tv=new w,Av=new w,Cv=new w;class Rv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&Ae.STATIC||e.sleepState===Ae.SLEEPING)&&(t.type&Ae.STATIC||t.sleepState===Ae.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=Pv;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Lv,i=Iv,r=Nv,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new w;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Pv=new w;new w;new pt;new w;const Lv={keys:[]},Iv=[],Nv=[];new w;new w;new w;class Dv extends Rv{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Ao{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Bu,Ou,zu,ku,Hu,Vu,Gu;const wl={CLOSEST:1,ANY:2,ALL:4};Bu=Me.types.SPHERE;Ou=Me.types.PLANE;zu=Me.types.BOX;ku=Me.types.CYLINDER;Hu=Me.types.CONVEXPOLYHEDRON;Vu=Me.types.HEIGHTFIELD;Gu=Me.types.TRIMESH;class Pt{get[Bu](){return this._intersectSphere}get[Ou](){return this._intersectPlane}get[zu](){return this._intersectBox}get[ku](){return this._intersectConvex}get[Hu](){return this._intersectConvex}get[Vu](){return this._intersectHeightfield}get[Gu](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Pt.ANY,this.result=new Ao,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Pt.ANY,this.result=t.result||new Ao,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(gh),La.length=0,e.broadphase.aabbQuery(e,gh,La),this.intersectBodies(La),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Uv,r=Fv;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if($v(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const h=new w;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const _=new w,v=new w,p=new w;o.vsub(n,_);const m=-c.dot(_)/f;l.scale(m,v),o.vadd(v,p),this.reportIntersection(c,p,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=Bv;o.from.copy(this.from),o.to.copy(this.to),ot.pointToLocalFrame(n,t,o.from,o.from),ot.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=Ov;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Et;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let _=c;_<d;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,_,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(f,_,!1),ot.pointToWorldFrame(n,t,e.pillarOffset,$r),this._intersectConvex(e.pillarConvex,t,$r,i,r,_h),this.result.shouldStop)return;e.getConvexTrianglePillar(f,_,!0),ot.pointToWorldFrame(n,t,e.pillarOffset,$r),this._intersectConvex(e.pillarConvex,t,$r,i,r,_h)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=zv,_=kv;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=Hv,l=vh,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,_=this.from,v=this.to,p=_.distanceTo(v),m=c?c.length:h.length,y=this.result;for(let x=0;!y.shouldStop&&x<m;x++){const b=c?c[x]:x,I=h[b],C=u[b],L=t,N=n;l.copy(d[I[0]]),L.vmult(l,l),l.vadd(N,l),l.vsub(_,l),L.vmult(C,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const S=a.dot(l)/E;if(!(S<0)){f.scale(S,Qt),Qt.vadd(_,Qt),mn.copy(d[I[0]]),L.vmult(mn,mn),N.vadd(mn,mn);for(let U=1;!y.shouldStop&&U<I.length-1;U++){Pn.copy(d[I[U]]),Ln.copy(d[I[U+1]]),L.vmult(Pn,Pn),L.vmult(Ln,Ln),N.vadd(Pn,Pn),N.vadd(Ln,Ln);const k=Qt.distanceTo(_);!(Pt.pointInTriangle(Qt,mn,Pn,Ln)||Pt.pointInTriangle(Qt,Pn,mn,Ln))||k>p||this.reportIntersection(a,Qt,r,i,b)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=Vv,l=jv,c=Zv,h=vh,d=Gv,u=Wv,f=qv,_=Yv,v=Xv,p=e.indices;e.vertices;const m=this.from,y=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),ot.vectorToLocalFrame(n,t,x,d),ot.pointToLocalFrame(n,t,m,u),ot.pointToLocalFrame(n,t,y,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const b=u.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let I=0,C=l.length;!this.result.shouldStop&&I!==C;I++){const L=l[I];e.getNormal(L,a),e.getVertex(p[L*3],mn),mn.vsub(u,h);const N=d.dot(a),E=a.dot(h)/N;if(E<0)continue;d.scale(E,Qt),Qt.vadd(u,Qt),e.getVertex(p[L*3+1],Pn),e.getVertex(p[L*3+2],Ln);const S=Qt.distanceSquared(u);!(Pt.pointInTriangle(Qt,Pn,mn,Ln)||Pt.pointInTriangle(Qt,mn,Pn,Ln))||S>b||(ot.vectorToWorldFrame(t,a,v),ot.pointToWorldFrame(n,t,Qt,_),this.reportIntersection(v,_,r,i,L))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Pt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Pt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Pt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,zi),n.vsub(t,Ws),e.vsub(t,Ia);const r=zi.dot(zi),o=zi.dot(Ws),a=zi.dot(Ia),l=Ws.dot(Ws),c=Ws.dot(Ia);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}Pt.CLOSEST=wl.CLOSEST;Pt.ANY=wl.ANY;Pt.ALL=wl.ALL;const gh=new Et,La=[],Ws=new w,Ia=new w,Uv=new w,Fv=new pt,Qt=new w,mn=new w,Pn=new w,Ln=new w;new w;new Ao;const _h={faceList:[0]},$r=new w,Bv=new Pt,Ov=[],zv=new w,kv=new w,Hv=new w;new w;new w;const vh=new w,Vv=new w,Gv=new w,Wv=new w,qv=new w,Xv=new w,Yv=new w;new Et;const jv=[],Zv=new ot,zi=new w,Kr=new w;function $v(s,e,t){t.vsub(s,zi);const n=zi.dot(e);return e.scale(n,Kr),Kr.vadd(s,Kr),t.distanceTo(Kr)}class Kv{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class yh{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ar{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ar.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new yh,this.jacobianElementB=new yh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,xh),a.scale(h,Sh),n.invInertiaWorldSolve.vmult(o,Mh),i.invInertiaWorldSolve.vmult(l,wh),e.multiplyVectors(xh,Mh)+t.multiplyVectors(Sh,wh)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,Jr),c+=Jr.dot(e.rotational),l.vmult(t.rotational,Jr),c+=Jr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Jv;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ar.idCounter=0;const xh=new w,Sh=new w,Mh=new w,wh=new w,Jr=new w,Jv=new w;class Qv extends ar{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=ey,c=ty,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const _=ny,v=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(m),p.rotational.copy(c),_.copy(r.position),_.vadd(a,_),_.vsub(i.position,_),_.vsub(o,_);const y=m.dot(_),x=this.restitution+1,b=x*u.dot(m)-x*h.dot(m)+f.dot(c)-d.dot(l),I=this.computeGiMf();return-y*t-b*n-e*I}getImpactVelocityAlongNormal(){const e=iy,t=sy,n=ry,i=oy,r=ay;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const ey=new w,ty=new w,ny=new w,iy=new w,sy=new w,ry=new w,oy=new w,ay=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Eh extends ar{constructor(e,t,n){super(e,t,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=ly,o=cy,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const ly=new w,cy=new w;class Gi{constructor(e,t,n){n=Kv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Gi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Gi.idCounter=0;class Ei{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ei.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ei.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Pt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Wu extends Me{constructor(e){if(super({type:Me.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=e[l]-r,i[l]=e[l]+r}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class hy extends Me{constructor(){super({type:Me.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Yn.set(0,0,1),t.vmult(Yn,Yn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Yn.x===1?i.x=e.x:Yn.x===-1&&(n.x=e.x),Yn.y===1?i.y=e.y:Yn.y===-1&&(n.y=e.y),Yn.z===1?i.z=e.z:Yn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Yn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Nn{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new Et,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const r=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;r.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(r[l].insert(e,t,n+1))return!0;a&&(r.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Nn({aabb:new Et({lowerBound:new w(0,0,0)})}),new Nn({aabb:new Et({lowerBound:new w(1,0,0)})}),new Nn({aabb:new Et({lowerBound:new w(1,1,0)})}),new Nn({aabb:new Et({lowerBound:new w(1,1,1)})}),new Nn({aabb:new Et({lowerBound:new w(0,1,1)})}),new Nn({aabb:new Et({lowerBound:new w(0,0,1)})}),new Nn({aabb:new Et({lowerBound:new w(1,0,1)})}),new Nn({aabb:new Et({lowerBound:new w(0,1,0)})})),n.vsub(t,Ni),Ni.scale(.5,Ni);const r=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=r;const l=a.aabb.lowerBound;l.x*=Ni.x,l.y*=Ni.y,l.z*=Ni.z,l.vadd(t,l),l.vadd(Ni,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(Qr),Qr.toLocalFrame(t,Qr),this.aabbQuery(Qr,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class uy extends Nn{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Ni=new w,Qr=new Et;class Vi extends Me{constructor(e,t){super({type:Me.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new Et,this.edges=null,this.scale=new w(1,1,1),this.tree=new uy,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new Et,i=new w,r=new w,o=new w,a=[i,r,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],r),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){eo.copy(e);const n=this.scale,i=n.x,r=n.y,o=n.z,a=eo.lowerBound,l=eo.upperBound;return a.x/=i,a.y/=r,a.z/=o,l.x/=i,l.y/=r,l.z/=o,this.tree.aabbQuery(eo,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=dy,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,r=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(r,Ah),this.getVertex(o,Ch),this.getVertex(a,Rh),Vi.computeNormal(Ch,Ah,Rh,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,r)=>{const o=i<r?`${i}_${r}`:`${r}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const r=i*3,o=this.indices[r],a=this.indices[r+1],l=this.indices[r+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const r=n[i].split("_");this.edges[2*i]=parseInt(r[0],10),this.edges[2*i+1]=parseInt(r[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=fy,i=py;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,Th),n.vsub(t,bh),bh.cross(Th,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),ot.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const r=e*3;this.getVertex(this.indices[r],t),this.getVertex(this.indices[r+1],n),this.getVertex(this.indices[r+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Di);const n=Di.upperBound.x-Di.lowerBound.x,i=Di.upperBound.y-Di.lowerBound.y,r=Di.upperBound.z-Di.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*r*2*r),1/12*e*(2*n*2*n+2*r*2*r),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const r=my;this.getVertex(0,r),t.copy(r),n.copy(r);for(let o=0;o!==i;o++)this.getVertex(o,r),r.x<t.x?t.x=r.x:r.x>n.x&&(n.x=r.x),r.y<t.y?t.y=r.y:r.y>n.y&&(n.y=r.y),r.z<t.z?t.z=r.z:r.z>n.z&&(n.z=r.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new w;for(let i=0,r=t.length/3;i!==r;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=gy,o=_y;r.position=e,r.quaternion=t,this.aabb.toWorldFrame(r,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,r){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),r===void 0&&(r=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*r,d=l/n*Math.PI*2,u=(e+t*Math.cos(d))*Math.cos(h),f=(e+t*Math.cos(d))*Math.sin(h),_=t*Math.sin(d);o.push(u,f,_)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,d=(i+1)*(l-1)+c-1,u=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,d,f),a.push(d,u,f)}return new Vi(o,a)}}const dy=new w,eo=new Et,fy=new w,py=new w,bh=new w,Th=new w,Ah=new w,Ch=new w,Rh=new w,Di=new Et,my=new w,gy=new ot,_y=new Et;class vy{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class yy extends vy{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let d,u,f,_,v,p;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();const m=Sy,y=My,x=xy;m.length=a,y.length=a,x.length=a;for(let b=0;b!==a;b++){const I=o[b];x[b]=0,y[b]=I.computeB(h),m[b]=1/I.computeC()}if(a!==0){for(let C=0;C!==c;C++){const L=l[C],N=L.vlambda,E=L.wlambda;N.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let C=0;C!==a;C++){const L=o[C];d=y[C],u=m[C],p=x[C],v=L.computeGWlambda(),f=u*(d-v-L.eps*p),p+f<L.minForce?f=L.minForce-p:p+f>L.maxForce&&(f=L.maxForce-p),x[C]+=f,_+=f>0?f:-f,L.addToWlambda(f)}if(_*_<r)break}for(let C=0;C!==c;C++){const L=l[C],N=L.velocity,E=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),N.vadd(L.vlambda,N),L.wlambda.vmul(L.angularFactor,L.wlambda),E.vadd(L.wlambda,E)}let b=o.length;const I=1/h;for(;b--;)o[b].multiplier=x[b]*I}return n}}const xy=[],Sy=[],My=[];Ae.STATIC;class wy{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ey extends wy{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const xt={sphereSphere:Me.types.SPHERE,spherePlane:Me.types.SPHERE|Me.types.PLANE,boxBox:Me.types.BOX|Me.types.BOX,sphereBox:Me.types.SPHERE|Me.types.BOX,planeBox:Me.types.PLANE|Me.types.BOX,convexConvex:Me.types.CONVEXPOLYHEDRON,sphereConvex:Me.types.SPHERE|Me.types.CONVEXPOLYHEDRON,planeConvex:Me.types.PLANE|Me.types.CONVEXPOLYHEDRON,boxConvex:Me.types.BOX|Me.types.CONVEXPOLYHEDRON,sphereHeightfield:Me.types.SPHERE|Me.types.HEIGHTFIELD,boxHeightfield:Me.types.BOX|Me.types.HEIGHTFIELD,convexHeightfield:Me.types.CONVEXPOLYHEDRON|Me.types.HEIGHTFIELD,sphereParticle:Me.types.PARTICLE|Me.types.SPHERE,planeParticle:Me.types.PLANE|Me.types.PARTICLE,boxParticle:Me.types.BOX|Me.types.PARTICLE,convexParticle:Me.types.PARTICLE|Me.types.CONVEXPOLYHEDRON,cylinderCylinder:Me.types.CYLINDER,sphereCylinder:Me.types.SPHERE|Me.types.CYLINDER,planeCylinder:Me.types.PLANE|Me.types.CYLINDER,boxCylinder:Me.types.BOX|Me.types.CYLINDER,convexCylinder:Me.types.CONVEXPOLYHEDRON|Me.types.CYLINDER,heightfieldCylinder:Me.types.HEIGHTFIELD|Me.types.CYLINDER,particleCylinder:Me.types.PARTICLE|Me.types.CYLINDER,sphereTrimesh:Me.types.SPHERE|Me.types.TRIMESH,planeTrimesh:Me.types.PLANE|Me.types.TRIMESH};class by{get[xt.sphereSphere](){return this.sphereSphere}get[xt.spherePlane](){return this.spherePlane}get[xt.boxBox](){return this.boxBox}get[xt.sphereBox](){return this.sphereBox}get[xt.planeBox](){return this.planeBox}get[xt.convexConvex](){return this.convexConvex}get[xt.sphereConvex](){return this.sphereConvex}get[xt.planeConvex](){return this.planeConvex}get[xt.boxConvex](){return this.boxConvex}get[xt.sphereHeightfield](){return this.sphereHeightfield}get[xt.boxHeightfield](){return this.boxHeightfield}get[xt.convexHeightfield](){return this.convexHeightfield}get[xt.sphereParticle](){return this.sphereParticle}get[xt.planeParticle](){return this.planeParticle}get[xt.boxParticle](){return this.boxParticle}get[xt.convexParticle](){return this.convexParticle}get[xt.cylinderCylinder](){return this.convexConvex}get[xt.sphereCylinder](){return this.sphereConvex}get[xt.planeCylinder](){return this.planeConvex}get[xt.boxCylinder](){return this.boxConvex}get[xt.convexCylinder](){return this.convexConvex}get[xt.heightfieldCylinder](){return this.heightfieldCylinder}get[xt.particleCylinder](){return this.particleCylinder}get[xt.sphereTrimesh](){return this.sphereTrimesh}get[xt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ey,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Qv(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const _=this.frictionEquationPool,v=_.length?_.pop():new Eh(n,i,u*f),p=_.length?_.pop():new Eh(n,i,u*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-u*f,v.maxForce=p.maxForce=u*f,v.ri.copy(e.ri),v.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=e.enabled,t.push(v,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ui.setZero(),ds.setZero(),fs.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Ui.vadd(t.ni,Ui),ds.vadd(t.ri,ds),fs.vadd(t.rj,fs)):(Ui.vsub(t.ni,Ui),ds.vadd(t.rj,ds),fs.vadd(t.ri,fs));const o=1/e;ds.scale(o,n.ri),fs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ui.normalize(),Ui.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Cy,c=Ry,h=Ty,d=Ay;for(let u=0,f=e.length;u!==f;u++){const _=e[u],v=t[u];let p=null;_.material&&v.material&&(p=n.getContactMaterial(_.material,v.material)||null);const m=_.type&Ae.KINEMATIC&&v.type&Ae.STATIC||_.type&Ae.STATIC&&v.type&Ae.KINEMATIC||_.type&Ae.KINEMATIC&&v.type&Ae.KINEMATIC;for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],l),_.quaternion.vmult(_.shapeOffsets[y],h),h.vadd(_.position,h);const x=_.shapes[y];for(let b=0;b<v.shapes.length;b++){v.quaternion.mult(v.shapeOrientations[b],c),v.quaternion.vmult(v.shapeOffsets[b],d),d.vadd(v.position,d);const I=v.shapes[b];if(!(x.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+I.boundingSphereRadius)continue;let C=null;x.material&&I.material&&(C=n.getContactMaterial(x.material,I.material)||null),this.currentContactMaterial=C||p||n.defaultContactMaterial;const L=x.type|I.type,N=this[L];if(N){let E=!1;x.type<I.type?E=N.call(this,x,I,h,d,l,c,_,v,x,I,m):E=N.call(this,I,x,d,h,c,l,v,_,x,I,m),E&&m&&(n.shapeOverlapKeeper.set(x.id,I.id),n.bodyOverlapKeeper.set(_.id,v.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,to),u.ni.scale(u.ni.dot(to),Ph),to.vsub(Ph,u.rj),-to.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,_=u.rj;f.vadd(n,f),f.vsub(a.position,f),_.vadd(i,_),_.vsub(l.position,_),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}sphereBox(e,t,n,i,r,o,a,l,c,h,d){const u=this.v3pool,f=tx;n.vsub(i,no),t.getSideNormals(f,o);const _=e.radius;let v=!1;const p=ix,m=sx,y=rx;let x=null,b=0,I=0,C=0,L=null;for(let F=0,Z=f.length;F!==Z&&v===!1;F++){const q=Jy;q.copy(f[F]);const Q=q.length();q.normalize();const oe=no.dot(q);if(oe<Q+_&&oe>0){const xe=Qy,de=ex;xe.copy(f[(F+1)%3]),de.copy(f[(F+2)%3]);const He=xe.length(),ee=de.length();xe.normalize(),de.normalize();const fe=no.dot(xe),me=no.dot(de);if(fe<He&&fe>-He&&me<ee&&me>-ee){const _e=Math.abs(oe-Q-_);if((L===null||_e<L)&&(L=_e,I=fe,C=me,x=Q,p.copy(q),m.copy(xe),y.copy(de),b++,d))return!0}}}if(b){v=!0;const F=this.createContactEquation(a,l,e,t,c,h);p.scale(-_,F.ri),F.ni.copy(p),F.ni.negate(F.ni),p.scale(x,p),m.scale(I,m),p.vadd(m,p),y.scale(C,y),p.vadd(y,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let N=u.get();const E=nx;for(let F=0;F!==2&&!v;F++)for(let Z=0;Z!==2&&!v;Z++)for(let q=0;q!==2&&!v;q++)if(N.set(0,0,0),F?N.vadd(f[0],N):N.vsub(f[0],N),Z?N.vadd(f[1],N):N.vsub(f[1],N),q?N.vadd(f[2],N):N.vsub(f[2],N),i.vadd(N,E),E.vsub(n,E),E.lengthSquared()<_*_){if(d)return!0;v=!0;const Q=this.createContactEquation(a,l,e,t,c,h);Q.ri.copy(E),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.scale(_,Q.ri),Q.rj.copy(N),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(i,Q.rj),Q.rj.vsub(l.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}u.release(N),N=null;const S=u.get(),U=u.get(),k=u.get(),A=u.get(),z=u.get(),D=f.length;for(let F=0;F!==D&&!v;F++)for(let Z=0;Z!==D&&!v;Z++)if(F%3!==Z%3){f[Z].cross(f[F],S),S.normalize(),f[F].vadd(f[Z],U),k.copy(n),k.vsub(U,k),k.vsub(i,k);const q=k.dot(S);S.scale(q,A);let Q=0;for(;Q===F%3||Q===Z%3;)Q++;z.copy(n),z.vsub(A,z),z.vsub(U,z),z.vsub(i,z);const oe=Math.abs(q),xe=z.length();if(oe<f[Q].length()&&xe<_){if(d)return!0;v=!0;const de=this.createContactEquation(a,l,e,t,c,h);U.vadd(A,de.rj),de.rj.copy(de.rj),z.negate(de.ni),de.ni.normalize(),de.ri.copy(de.rj),de.ri.vadd(i,de.ri),de.ri.vsub(n,de.ri),de.ri.normalize(),de.ri.scale(_,de.ri),de.ri.vadd(n,de.ri),de.ri.vsub(a.position,de.ri),de.rj.vadd(i,de.rj),de.rj.vsub(l.position,de.rj),this.result.push(de),this.createFrictionEquationsFromContact(de,this.frictionResult)}}u.release(S,U,k,A,z)}planeBox(e,t,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}convexConvex(e,t,n,i,r,o,a,l,c,h,d,u,f){const _=xx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,_,u,f)){const v=[],p=Sx;e.clipAgainstHull(n,r,t,i,o,_,-100,100,v);let m=0;for(let y=0;y!==v.length;y++){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,h),b=x.ri,I=x.rj;_.negate(x.ni),v[y].normal.negate(p),p.scale(v[y].depth,p),v[y].point.vadd(p,b),I.copy(v[y].point),b.vsub(n,b),I.vsub(i,I),b.vadd(n,b),b.vsub(a.position,b),I.vadd(i,I),I.vsub(l.position,I),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,ox);const f=t.faceNormals,_=t.faces,v=t.vertices,p=e.radius;let m=!1;for(let y=0;y!==v.length;y++){const x=v[y],b=hx;o.vmult(x,b),i.vadd(b,b);const I=cx;if(b.vsub(n,I),I.lengthSquared()<p*p){if(d)return!0;m=!0;const C=this.createContactEquation(a,l,e,t,c,h);C.ri.copy(I),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(p,C.ri),b.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let y=0,x=_.length;y!==x&&m===!1;y++){const b=f[y],I=_[y],C=ux;o.vmult(b,C);const L=dx;o.vmult(v[I[0]],L),L.vadd(i,L);const N=fx;C.scale(-p,N),n.vadd(N,N);const E=px;N.vsub(L,E);const S=E.dot(C),U=mx;if(n.vsub(L,U),S<0&&U.dot(C)>0){const k=[];for(let A=0,z=I.length;A!==z;A++){const D=u.get();o.vmult(v[I[A]],D),i.vadd(D,D),k.push(D)}if(Ky(k,C,n)){if(d)return!0;m=!0;const A=this.createContactEquation(a,l,e,t,c,h);C.scale(-p,A.ri),C.negate(A.ni);const z=u.get();C.scale(-S,z);const D=u.get();C.scale(-p,D),n.vsub(i,A.rj),A.rj.vadd(D,A.rj),A.rj.vadd(z,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),u.release(z),u.release(D),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let F=0,Z=k.length;F!==Z;F++)u.release(k[F]);return}else for(let A=0;A!==I.length;A++){const z=u.get(),D=u.get();o.vmult(v[I[(A+1)%I.length]],z),o.vmult(v[I[(A+2)%I.length]],D),i.vadd(z,z),i.vadd(D,D);const F=ax;D.vsub(z,F);const Z=lx;F.unit(Z);const q=u.get(),Q=u.get();n.vsub(z,Q);const oe=Q.dot(Z);Z.scale(oe,q),q.vadd(z,q);const xe=u.get();if(q.vsub(n,xe),oe>0&&oe*oe<F.lengthSquared()&&xe.lengthSquared()<p*p){if(d)return!0;const de=this.createContactEquation(a,l,e,t,c,h);q.vsub(i,de.rj),q.vsub(n,de.ni),de.ni.normalize(),de.ni.scale(p,de.ri),de.rj.vadd(i,de.rj),de.rj.vsub(l.position,de.rj),de.ri.vadd(n,de.ri),de.ri.vsub(a.position,de.ri),this.result.push(de),this.createFrictionEquationsFromContact(de,this.frictionResult);for(let He=0,ee=k.length;He!==ee;He++)u.release(k[He]);u.release(z),u.release(D),u.release(q),u.release(xe),u.release(Q);return}u.release(z),u.release(D),u.release(q),u.release(xe),u.release(Q)}for(let A=0,z=k.length;A!==z;A++)u.release(k[A])}}}planeConvex(e,t,n,i,r,o,a,l,c,h,d){const u=gx,f=_x;f.set(0,0,1),r.vmult(f,f);let _=0;const v=vx;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const y=this.createContactEquation(a,l,e,t,c,h),x=yx;f.scale(f.dot(v),x),u.vsub(x,x),x.vsub(n,y.ri),y.ni.copy(f),u.vsub(i,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,l,c,h,d){const u=t.data,f=e.radius,_=t.elementSize,v=Nx,p=Ix;ot.pointToLocalFrame(i,o,n,p);let m=Math.floor((p.x-f)/_)-1,y=Math.ceil((p.x+f)/_)+1,x=Math.floor((p.y-f)/_)-1,b=Math.ceil((p.y+f)/_)+1;if(y<0||b<0||m>u.length||x>u[0].length)return;m<0&&(m=0),y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),m>=u.length&&(m=u.length-1),y>=u.length&&(y=u.length-1),b>=u[0].length&&(b=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const I=[];t.getRectMinMax(m,x,y,b,I);const C=I[0],L=I[1];if(p.z-f>L||p.z+f<C)return;const N=this.result;for(let E=m;E<y;E++)for(let S=x;S<b;S++){const U=N.length;let k=!1;if(t.getConvexTrianglePillar(E,S,!1),ot.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,d)),d&&k||(t.getConvexTrianglePillar(E,S,!0),ot.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,d)),d&&k))return!0;if(N.length-U>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,l,c,h,d){const u=t.data,f=t.elementSize,_=e.boundingSphereRadius,v=Px,p=Lx,m=Rx;ot.pointToLocalFrame(i,o,n,m);let y=Math.floor((m.x-_)/f)-1,x=Math.ceil((m.x+_)/f)+1,b=Math.floor((m.y-_)/f)-1,I=Math.ceil((m.y+_)/f)+1;if(x<0||I<0||y>u.length||b>u[0].length)return;y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),I<0&&(I=0),y>=u.length&&(y=u.length-1),x>=u.length&&(x=u.length-1),I>=u[0].length&&(I=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const C=[];t.getRectMinMax(y,b,x,I,C);const L=C[0],N=C[1];if(!(m.z-_>N||m.z+_<L))for(let E=y;E<x;E++)for(let S=b;S<I;S++){let U=!1;if(t.getConvexTrianglePillar(E,S,!1),ot.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,d,p,null)),d&&U||(t.getConvexTrianglePillar(E,S,!0),ot.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,d,p,null)),d&&U))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,h,d){const u=bx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const _=this.createContactEquation(l,a,t,e,c,h);u.normalize(),_.rj.copy(u),_.rj.scale(e.radius,_.rj),_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,h,d){const u=Mx;u.set(0,0,1),a.quaternion.vmult(u,u);const f=wx;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,t,e,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=Ex;u.scale(u.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexParticle(e,t,n,i,r,o,a,l,c,h,d){let u=-1;const f=Ax,_=Cx;let v=null;const p=Tx;if(p.copy(i),p.vsub(n,p),r.conjugate(Lh),Lh.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let m=0,y=e.faces.length;m!==y;m++){const x=[e.worldVertices[e.faces[m][0]]],b=e.worldFaceNormals[m];i.vsub(x[0],Ih);const I=-b.dot(Ih);if(v===null||Math.abs(I)<Math.abs(v)){if(d)return!0;v=I,u=m,f.copy(b)}}if(u!==-1){const m=this.createContactEquation(l,a,t,e,c,h);f.scale(v,_),_.vadd(i,_),_.vsub(n,_),m.rj.copy(_),f.negate(m.ni),m.ri.set(0,0,0);const y=m.ri,x=m.rj;y.vadd(i,y),y.vsub(l.position,y),x.vadd(n,x),x.vsub(a.position,x),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,h,d)}particleCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexParticle(t,e,i,n,o,r,l,a,c,h,d)}sphereTrimesh(e,t,n,i,r,o,a,l,c,h,d){const u=By,f=Oy,_=zy,v=ky,p=Hy,m=Vy,y=Xy,x=Fy,b=Dy,I=Yy;ot.pointToLocalFrame(i,o,n,p);const C=e.radius;y.lowerBound.set(p.x-C,p.y-C,p.z-C),y.upperBound.set(p.x+C,p.y+C,p.z+C),t.getTrianglesInAABB(y,I);const L=Uy,N=e.radius*e.radius;for(let A=0;A<I.length;A++)for(let z=0;z<3;z++)if(t.getVertex(t.indices[I[A]*3+z],L),L.vsub(p,b),b.lengthSquared()<=N){if(x.copy(L),ot.pointToWorldFrame(i,o,x,L),L.vsub(n,b),d)return!0;let D=this.createContactEquation(a,l,e,t,c,h);D.ni.copy(b),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(L),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let A=0;A<I.length;A++)for(let z=0;z<3;z++){t.getVertex(t.indices[I[A]*3+z],u),t.getVertex(t.indices[I[A]*3+(z+1)%3],f),f.vsub(u,_),p.vsub(f,m);const D=m.dot(_);p.vsub(u,m);let F=m.dot(_);if(F>0&&D<0&&(p.vsub(u,m),v.copy(_),v.normalize(),F=m.dot(v),v.scale(F,m),m.vadd(u,m),m.distanceTo(p)<e.radius)){if(d)return!0;const q=this.createContactEquation(a,l,e,t,c,h);m.vsub(p,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),ot.pointToWorldFrame(i,o,m,m),m.vsub(l.position,q.rj),ot.vectorToWorldFrame(o,q.ni,q.ni),ot.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const E=Gy,S=Wy,U=qy,k=Ny;for(let A=0,z=I.length;A!==z;A++){t.getTriangleVertices(I[A],E,S,U),t.getNormal(I[A],k),p.vsub(E,m);let D=m.dot(k);if(k.scale(D,m),p.vsub(m,m),D=m.distanceTo(p),Pt.pointInTriangle(m,E,S,U)&&D<e.radius){if(d)return!0;let F=this.createContactEquation(a,l,e,t,c,h);m.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),ot.pointToWorldFrame(i,o,m,m),m.vsub(l.position,F.rj),ot.vectorToWorldFrame(o,F.ni,F.ni),ot.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}I.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,h,d){const u=new w,f=Py;f.set(0,0,1),r.vmult(f,f);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,u);const v=new w;v.copy(u),ot.pointToWorldFrame(i,o,v,u);const p=Ly;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const y=this.createContactEquation(a,l,e,t,c,h);y.ni.copy(f);const x=Iy;f.scale(p.dot(f),x),u.vsub(x,x),y.ri.copy(x),y.ri.vsub(a.position,y.ri),y.rj.copy(u),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const Ui=new w,ds=new w,fs=new w,Ty=new w,Ay=new w,Cy=new pt,Ry=new pt,Py=new w,Ly=new w,Iy=new w,Ny=new w,Dy=new w;new w;const Uy=new w,Fy=new w,By=new w,Oy=new w,zy=new w,ky=new w,Hy=new w,Vy=new w,Gy=new w,Wy=new w,qy=new w,Xy=new Et,Yy=[],to=new w,Ph=new w,jy=new w,Zy=new w,$y=new w;function Ky(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=jy;s[(r+1)%i].vsub(o,a);const l=Zy;a.cross(e,l);const c=$y;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const no=new w,Jy=new w,Qy=new w,ex=new w,tx=[new w,new w,new w,new w,new w,new w],nx=new w,ix=new w,sx=new w,rx=new w,ox=new w,ax=new w,lx=new w,cx=new w,hx=new w,ux=new w,dx=new w,fx=new w,px=new w,mx=new w;new w;new w;const gx=new w,_x=new w,vx=new w,yx=new w,xx=new w,Sx=new w,Mx=new w,wx=new w,Ex=new w,bx=new w,Lh=new pt,Tx=new w;new w;const Ax=new w,Ih=new w,Cx=new w,Rx=new w,Px=new w,Lx=[0],Ix=new w,Nx=new w;class Nh{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Dh(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Dh(t,h)}}}function Dh(s,e){s.push((e&4294901760)>>16,e&65535)}const Na=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class Dx{constructor(){this.data={keys:[]}}get(e,t){const n=Na(e,t);return this.data[n]}set(e,t,n){const i=Na(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Na(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Ux extends Fu{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Dv,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new yy,this.constraints=[],this.narrowphase=new by(this),this.collisionMatrix=new ph,this.collisionMatrixPrevious=new ph,this.bodyOverlapKeeper=new Nh,this.shapeOverlapKeeper=new Nh,this.contactmaterials=[],this.contactMaterialTable=new Dx,this.defaultMaterial=new Ei("default"),this.defaultContactMaterial=new Gi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Ao?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.ALL,n.from=e,n.to=t,n.callback=i,Da.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.ANY,n.from=e,n.to=t,n.result=i,Da.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.CLOSEST,n.from=e,n.to=t,n.result=i,Da.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ae&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=It.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=It.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(It.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=kx,i=Hx,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Ae.DYNAMIC;let u=-1/0;const f=this.constraints,_=zx;l.length();const v=l.x,p=l.y,m=l.z;let y=0;for(c&&(u=It.now()),y=0;y!==r;y++){const A=o[y];if(A.type===d){const z=A.force,D=A.mass;z.x+=D*v,z.y+=D*p,z.z+=D*m}}for(let A=0,z=this.subsystems.length;A!==z;A++)this.subsystems[A].update();c&&(u=It.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=It.now()-u);let x=f.length;for(y=0;y!==x;y++){const A=f[y];if(!A.collideConnected)for(let z=n.length-1;z>=0;z-=1)(A.bodyA===n[z]&&A.bodyB===i[z]||A.bodyB===n[z]&&A.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(u=It.now());const b=Ox,I=t.length;for(y=0;y!==I;y++)b.push(t[y]);t.length=0;const C=this.frictionEquations.length;for(y=0;y!==C;y++)_.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,_),c&&(h.narrowphase=It.now()-u),c&&(u=It.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);const L=t.length;for(let A=0;A!==L;A++){const z=t[A],D=z.bi,F=z.bj,Z=z.si,q=z.sj;let Q;if(D.material&&F.material?Q=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:Q=this.defaultContactMaterial,Q.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(z.restitution=D.material.restitution*F.material.restitution)),a.addEquation(z),D.allowSleep&&D.type===Ae.DYNAMIC&&D.sleepState===Ae.SLEEPING&&F.sleepState===Ae.AWAKE&&F.type!==Ae.STATIC){const oe=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),xe=F.sleepSpeedLimit**2;oe>=xe*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Ae.DYNAMIC&&F.sleepState===Ae.SLEEPING&&D.sleepState===Ae.AWAKE&&D.type!==Ae.STATIC){const oe=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),xe=D.sleepSpeedLimit**2;oe>=xe*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(qs.body=F,qs.contact=z,D.dispatchEvent(qs),qs.body=D,F.dispatchEvent(qs)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(Z.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=It.now()-u,u=It.now()),y=0;y!==r;y++){const A=o[y];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(x=f.length,y=0;y!==x;y++){const A=f[y];A.update();for(let z=0,D=A.equations.length;z!==D;z++){const F=A.equations[z];a.addEquation(F)}}a.solve(e,this),c&&(h.solve=It.now()-u),a.removeAllEquations();const N=Math.pow;for(y=0;y!==r;y++){const A=o[y];if(A.type&d){const z=N(1-A.linearDamping,e),D=A.velocity;D.scale(z,D);const F=A.angularVelocity;if(F){const Z=N(1-A.angularDamping,e);F.scale(Z,F)}}}this.dispatchEvent(Bx),c&&(u=It.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(e,S,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=It.now()-u),this.stepnumber+=1,this.dispatchEvent(Fx);let k=!0;if(this.allowSleep)for(k=!1,y=0;y!==r;y++){const A=o[y];A.sleepTick(this.time),A.sleepState!==Ae.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(jn,Zn),e){for(let r=0,o=jn.length;r<o;r+=2)Xs.bodyA=this.getBodyById(jn[r]),Xs.bodyB=this.getBodyById(jn[r+1]),this.dispatchEvent(Xs);Xs.bodyA=Xs.bodyB=null}if(t){for(let r=0,o=Zn.length;r<o;r+=2)Ys.bodyA=this.getBodyById(Zn[r]),Ys.bodyB=this.getBodyById(Zn[r+1]),this.dispatchEvent(Ys);Ys.bodyA=Ys.bodyB=null}jn.length=Zn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(jn,Zn),n){for(let r=0,o=jn.length;r<o;r+=2){const a=this.getShapeById(jn[r]),l=this.getShapeById(jn[r+1]);$n.shapeA=a,$n.shapeB=l,a&&($n.bodyA=a.body),l&&($n.bodyB=l.body),this.dispatchEvent($n)}$n.bodyA=$n.bodyB=$n.shapeA=$n.shapeB=null}if(i){for(let r=0,o=Zn.length;r<o;r+=2){const a=this.getShapeById(Zn[r]),l=this.getShapeById(Zn[r+1]);Kn.shapeA=a,Kn.shapeB=l,a&&(Kn.bodyA=a.body),l&&(Kn.bodyB=l.body),this.dispatchEvent(Kn)}Kn.bodyA=Kn.bodyB=Kn.shapeA=Kn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Et;const Da=new Pt,It=globalThis.performance||{};if(!It.now){let s=Date.now();It.timing&&It.timing.navigationStart&&(s=It.timing.navigationStart),It.now=()=>Date.now()-s}new w;const Fx={type:"postStep"},Bx={type:"preStep"},qs={type:Ae.COLLIDE_EVENT_NAME,body:null,contact:null},Ox=[],zx=[],kx=[],Hx=[],jn=[],Zn=[],Xs={type:"beginContact",bodyA:null,bodyB:null},Ys={type:"endContact",bodyA:null,bodyB:null},$n={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Kn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Vx(s,e,t){let{color:n=65280,scale:i=1,onInit:r,onUpdate:o}=t===void 0?{}:t;const a=[],l=new fl({color:n??65280,wireframe:!0}),c=new w,h=new w,d=new w,u=new pt,f=new sr(1),_=new Si(1,1,1),v=new Hi(10,10,10,10);v.translate(0,0,1e-4);function p(N){const E=new Ot,S=[];for(let k=0;k<N.vertices.length;k++){const A=N.vertices[k];S.push(A.x,A.y,A.z)}E.setAttribute("position",new Nt(S,3));const U=[];for(let k=0;k<N.faces.length;k++){const A=N.faces[k],z=A[0];for(let D=1;D<A.length-1;D++){const F=A[D],Z=A[D+1];U.push(z,F,Z)}}return E.setIndex(U),E.computeBoundingSphere(),E.computeVertexNormals(),E}function m(N){const E=new Ot,S=[],U=c,k=h,A=d;for(let z=0;z<N.indices.length/3;z++)N.getTriangleVertices(z,U,k,A),S.push(U.x,U.y,U.z),S.push(k.x,k.y,k.z),S.push(A.x,A.y,A.z);return E.setAttribute("position",new Nt(S,3)),E.computeBoundingSphere(),E.computeVertexNormals(),E}function y(N){const E=new Ot,S=N.elementSize||1,U=N.data.flatMap((A,z)=>A.flatMap((D,F)=>[z*S,F*S,D])),k=[];for(let A=0;A<N.data.length-1;A++)for(let z=0;z<N.data[A].length-1;z++){const D=N.data[A].length,F=A*D+z;k.push(F+1,F+D,F+D+1),k.push(F+D,F+1,F)}return E.setIndex(k),E.setAttribute("position",new Nt(U,3)),E.computeBoundingSphere(),E.computeVertexNormals(),E}function x(N){let E=new At;const{SPHERE:S,BOX:U,PLANE:k,CYLINDER:A,CONVEXPOLYHEDRON:z,TRIMESH:D,HEIGHTFIELD:F}=Me.types;switch(N.type){case S:{E=new At(f,l);break}case U:{E=new At(_,l);break}case k:{E=new At(v,l);break}case A:{const Z=new vl(N.radiusTop,N.radiusBottom,N.height,N.numSegments);E=new At(Z,l),N.geometryId=Z.id;break}case z:{const Z=p(N);E=new At(Z,l),N.geometryId=Z.id;break}case D:{const Z=m(N);E=new At(Z,l),N.geometryId=Z.id;break}case F:{const Z=y(N);E=new At(Z,l),N.geometryId=Z.id;break}}return s.add(E),E}function b(N,E){const{SPHERE:S,BOX:U,PLANE:k,CYLINDER:A,CONVEXPOLYHEDRON:z,TRIMESH:D,HEIGHTFIELD:F}=Me.types;switch(E.type){case S:{const{radius:Z}=E;N.scale.set(Z*i,Z*i,Z*i);break}case U:{N.scale.copy(E.halfExtents),N.scale.multiplyScalar(2*i);break}case k:break;case A:{N.scale.set(1*i,1*i,1*i);break}case z:{N.scale.set(1*i,1*i,1*i);break}case D:{N.scale.copy(E.scale).multiplyScalar(i);break}case F:{N.scale.set(1*i,1*i,1*i);break}}}function I(N,E){if(!N)return!1;const{geometry:S}=N;return S instanceof sr&&E.type===Me.types.SPHERE||S instanceof Si&&E.type===Me.types.BOX||S instanceof Hi&&E.type===Me.types.PLANE||S.id===E.geometryId&&E.type===Me.types.CYLINDER||S.id===E.geometryId&&E.type===Me.types.CONVEXPOLYHEDRON||S.id===E.geometryId&&E.type===Me.types.TRIMESH||S.id===E.geometryId&&E.type===Me.types.HEIGHTFIELD}function C(N,E){let S=a[N],U=!1;return I(S,E)||(S&&s.remove(S),a[N]=S=x(E),U=!0),b(S,E),U}function L(){const N=a,E=c,S=u;let U=0;for(const k of e.bodies)for(let A=0;A!==k.shapes.length;A++){const z=k.shapes[A],D=C(U,z),F=N[U];F&&(k.quaternion.vmult(k.shapeOffsets[A],E),k.position.vadd(E,E),k.quaternion.mult(k.shapeOrientations[A],S),F.position.copy(E),F.quaternion.copy(S),D&&r instanceof Function&&r(k,F,z),!D&&o instanceof Function&&o(k,F,z)),U++}for(let k=U;k<N.length;k++){const A=N[k];A&&s.remove(A)}N.length=U}return{update:L}}var tr=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";s=h}var i=(performance||Date).now(),r=i,o=0,a=t(new tr.Panel("FPS","#0ff","#002")),l=t(new tr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new tr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-i,200),h>=r+1e3&&(a.update(o*1e3/(h-r),100),r=h,o=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};tr.Panel=function(s,e,t){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,d=3*o,u=15*o,f=74*o,_=30*o,v=document.createElement("canvas");v.width=a,v.height=l,v.style.cssText="width:80px;height:48px";var p=v.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,a,l),p.fillStyle=e,p.fillText(s,c,h),p.fillRect(d,u,f,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(d,u,f,_),{dom:v,update:function(m,y){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,a,u),p.fillStyle=e,p.fillText(r(m)+" "+s+" ("+r(n)+"-"+r(i)+")",c,h),p.drawImage(v,d+o,u,f-o,_,d,u,f-o,_),p.fillRect(d+f-o,u,o,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(d+f-o,u,o,r((1-m/y)*_))}}};class zo extends At{constructor(){const e=zo.SkyShader,t=new jt({name:e.name,uniforms:gi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new Si(1,1,1),t),this.isSky=!0}}zo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new W},up:{value:new W(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gx=new ml(-1,1,1,-1,0,1);class Wx extends Ot{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const qx=new Wx;class El{constructor(e){this._mesh=new At(qx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xx extends Is{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new El(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uh extends Is{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Yx extends Is{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class jx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xx(uo),this.copyPass.material.blending=Xt,this.clock=new Uu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uh!==void 0&&(o instanceof Uh?n=!0:o instanceof Yx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zx extends Is{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const io={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new mt},cameraInverseProjectionMatrix:{value:new mt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform highp sampler2D tDepth;
		uniform highp sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},fi={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ne(512,512)},sampleUvOffsets:{value:[new Ne(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},Co={createSampleWeights:function(s,e){const t=[];for(let n=0;n<=s;n++)t.push($x(n,e));return t},createSampleOffsets:function(s,e){const t=[];for(let n=0;n<=s;n++)t.push(e.clone().multiplyScalar(n));return t},configure:function(s,e,t,n){s.defines.KERNEL_RADIUS=e,s.uniforms.sampleUvOffsets.value=Co.createSampleOffsets(e,n),s.uniforms.sampleWeights.value=Co.createSampleWeights(e,t),s.needsUpdate=!0}};function $x(s,e){return Math.exp(-(s*s)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}class rr extends Is{constructor(e,t,n=new Ne(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new Be,this._oldClearColor=new Be,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(n.x,n.y),this.saoRenderTarget=new Bn(this.resolution.x,this.resolution.y,{type:Mn}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const i=new _l;i.format=ws,i.type=As,this.normalRenderTarget=new Bn(this.resolution.x,this.resolution.y,{minFilter:Yt,magFilter:Yt,type:Mn,depthTexture:i}),this.normalMaterial=new q_,this.normalMaterial.blending=Xt,this.saoMaterial=new jt({defines:Object.assign({},io.defines),fragmentShader:io.fragmentShader,vertexShader:io.vertexShader,uniforms:gi.clone(io.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=i,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Xt,this.vBlurMaterial=new jt({uniforms:gi.clone(fi.uniforms),defines:Object.assign({},fi.defines),vertexShader:fi.vertexShader,fragmentShader:fi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=i,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Xt,this.hBlurMaterial=new jt({uniforms:gi.clone(fi.uniforms),defines:Object.assign({},fi.defines),vertexShader:fi.vertexShader,fragmentShader:fi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=i,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Xt,this.materialCopy=new jt({uniforms:gi.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,blending:Xt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Ga,this.materialCopy.blendSrc=Zh,this.materialCopy.blendDst=Wa,this.materialCopy.blendEquation=Qn,this.materialCopy.blendSrcAlpha=jh,this.materialCopy.blendDstAlpha=Wa,this.materialCopy.blendEquationAlpha=Qn,this.fsQuad=new El(null)}render(e,t,n){this.renderToScreen&&(this.materialCopy.blending=Xt,this.materialCopy.uniforms.tDiffuse.value=n.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const i=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Co.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),Co.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===rr.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===rr.OUTPUT.Default?o.blending=Ga:o.blending=Xt,this.renderPass(e,o,this.renderToScreen?null:n),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=i}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}}rr.OUTPUT={Default:0,SAO:1,Normal:2};const Kx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Jx extends Is{constructor(){super();const e=Kx;this.uniforms=gi.clone(e.uniforms),this.material=new V_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new El(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$h?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}let so,ro,oo,Fh,ln;const Tn=new U_,An=new Ux({gravity:new w(0,-300,0)}),si=new D_({antialias:!0});si.shadowMap.enabled=!0;si.shadowMap.type=Yh;si.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(si.domElement);let wi=new en(75,window.innerWidth/window.innerHeight,1,1e4);wi.position.set(0,8,110);let bi=new Du(16777215,1);bi.castShadow=!0;bi.shadow.camera.top=50;bi.shadow.camera.bottom=-50;bi.shadow.camera.left=-50;bi.shadow.camera.right=50;bi.shadow.bias=-1e-4;Tn.add(bi);const bl=new K_(16777215,16777215,.2);bl.color.setHSL(.6,1,.6);bl.groundColor.setHSL(.095,1,.85);Tn.add(bl);new iv(4210752);window.addEventListener("resize",tS);Qx();eS();function Qx(){so=new zo,so.scale.setScalar(45e4),Tn.add(so),ro=new W;const s={turbidity:0,rayleigh:.2,mieCoefficient:.005,mieDirectionalG:.7,elevation:30,azimuth:80,exposure:si.toneMappingExposure},e=so.material.uniforms;e.turbidity.value=s.turbidity,e.rayleigh.value=s.rayleigh,e.mieCoefficient.value=s.mieCoefficient,e.mieDirectionalG.value=s.mieDirectionalG;const t=dc.degToRad(90-s.elevation),n=dc.degToRad(s.azimuth);ro.setFromSphericalCoords(1,t,n),e.sunPosition.value.copy(ro),bi.position.copy(ro).multiplyScalar(100),si.toneMappingExposure=s.exposure}function eS(){oo=new jx(si),Fh=new Zx(Tn,wi),oo.addPass(Fh),ln=new rr(Tn,wi),oo.addPass(ln);const s=new Jx;oo.addPass(s),ln.params.saoBias=.5,ln.params.saoIntensity=.18,ln.params.saoScale=5,ln.params.saoKernelRadius=100,ln.params.saoMinResolution=0,ln.params.saoBlur=!0,ln.params.saoBlurRadius=8,ln.params.saoBlurStdDev=4,ln.params.saoBlurDepthCutoff=.01,ln.enabled=!1}function tS(){wi.aspect=window.innerWidth/window.innerHeight,wi.updateProjectionMatrix(),si.setSize(window.innerWidth,window.innerHeight)}function qu(s){let e,t;{e=new Ae({mass:0,shape:new hy,type:Ae.STATIC}),e.quaternion.setFromEuler(-Math.PI/2,0,0),e.position.set(0,0,0);let n=new Hi(1e3,1e3),i=new Oo({color:65280,side:sn});return t=new At(n,i),t.receiveShadow=!0,t.position.copy(e.position),t.quaternion.copy(e.quaternion),{cannonBody:e,threeMesh:t}}}let nS=new Ae({mass:1,shape:new Wu(1)});nS.position.set(5,0,0);let iS=new sr(1),sS=new W_({color:16711680}),Xu=new At(iS,sS);Xu.castShadow=!0;Xu.receiveShadow=!0;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var un=Uint8Array,ms=Uint16Array,rS=Int32Array,Yu=new un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ju=new un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),oS=new un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zu=function(s,e){for(var t=new ms(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new rS(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},$u=Zu(Yu,2),Ku=$u.b,aS=$u.r;Ku[28]=258,aS[258]=28;var lS=Zu(ju,0),cS=lS.b,el=new ms(32768);for(var St=0;St<32768;++St){var pi=(St&43690)>>1|(St&21845)<<1;pi=(pi&52428)>>2|(pi&13107)<<2,pi=(pi&61680)>>4|(pi&3855)<<4,el[St]=((pi&65280)>>8|(pi&255)<<8)>>1}var nr=function(s,e,t){for(var n=s.length,i=0,r=new ms(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new ms(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new ms(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],d=o[s[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)a[el[d]>>l]=c}else for(a=new ms(n),i=0;i<n;++i)s[i]&&(a[i]=el[o[s[i]-1]++]>>15-s[i]);return a},lr=new un(288);for(var St=0;St<144;++St)lr[St]=8;for(var St=144;St<256;++St)lr[St]=9;for(var St=256;St<280;++St)lr[St]=7;for(var St=280;St<288;++St)lr[St]=8;var Ju=new un(32);for(var St=0;St<32;++St)Ju[St]=5;var hS=nr(lr,9,1),uS=nr(Ju,5,1),Ua=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},gn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Fa=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},dS=function(s){return(s+7)/8|0},fS=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new un(s.subarray(e,t))},pS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(s,e,t){var n=new Error(e||pS[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!t)throw n;return n},mS=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new un(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new un(i*3));var c=function(at){var De=t.length;if(at>De){var it=new un(Math.max(De*2,at));it.set(t),t=it}},h=e.f||0,d=e.p||0,u=e.b||0,f=e.l,_=e.d,v=e.m,p=e.n,m=i*8;do{if(!f){h=gn(s,d,1);var y=gn(s,d+1,3);if(d+=3,y)if(y==1)f=hS,_=uS,v=9,p=5;else if(y==2){var C=gn(s,d,31)+257,L=gn(s,d+10,15)+4,N=C+gn(s,d+5,31)+1;d+=14;for(var E=new un(N),S=new un(19),U=0;U<L;++U)S[oS[U]]=gn(s,d+U*3,7);d+=L*3;for(var k=Ua(S),A=(1<<k)-1,z=nr(S,k,1),U=0;U<N;){var D=z[gn(s,d,A)];d+=D&15;var x=D>>4;if(x<16)E[U++]=x;else{var F=0,Z=0;for(x==16?(Z=3+gn(s,d,3),d+=2,F=E[U-1]):x==17?(Z=3+gn(s,d,7),d+=3):x==18&&(Z=11+gn(s,d,127),d+=7);Z--;)E[U++]=F}}var q=E.subarray(0,C),Q=E.subarray(C);v=Ua(q),p=Ua(Q),f=nr(q,v,1),_=nr(Q,p,1)}else _n(1);else{var x=dS(d)+4,b=s[x-4]|s[x-3]<<8,I=x+b;if(I>i){l&&_n(0);break}a&&c(u+b),t.set(s.subarray(x,I),u),e.b=u+=b,e.p=d=I*8,e.f=h;continue}if(d>m){l&&_n(0);break}}a&&c(u+131072);for(var oe=(1<<v)-1,xe=(1<<p)-1,de=d;;de=d){var F=f[Fa(s,d)&oe],He=F>>4;if(d+=F&15,d>m){l&&_n(0);break}if(F||_n(2),He<256)t[u++]=He;else if(He==256){de=d,f=null;break}else{var ee=He-254;if(He>264){var U=He-257,fe=Yu[U];ee=gn(s,d,(1<<fe)-1)+Ku[U],d+=fe}var me=_[Fa(s,d)&xe],_e=me>>4;me||_n(3),d+=me&15;var Q=cS[_e];if(_e>3){var fe=ju[_e];Q+=Fa(s,d)&(1<<fe)-1,d+=fe}if(d>m){l&&_n(0);break}a&&c(u+131072);var Ve=u+ee;if(u<Q){var We=r-Q,j=Math.min(Q,Ve);for(We+u<0&&_n(3);u<j;++u)t[u]=n[We+u]}for(;u<Ve;++u)t[u]=t[u-Q]}}e.l=f,e.p=de,e.b=u,e.f=h,f&&(h=1,e.m=v,e.d=_,e.n=p)}while(!h);return u!=t.length&&o?fS(t,0,u):t.subarray(0,u)},gS=new un(0),_S=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&_n(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&_n(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function ao(s,e){return mS(s.subarray(_S(s,e),-4),{i:2},e,e)}var vS=typeof TextDecoder<"u"&&new TextDecoder,yS=0;try{vS.decode(gS,{stream:!0}),yS=1}catch{}class xS extends $_{constructor(e){super(e),this.type=Mn}parse(e){const E=Math.pow(2.7182818,2.2);function S(g,M){let R=0;for(let X=0;X<65536;++X)(X==0||g[X>>3]&1<<(X&7))&&(M[R++]=X);const O=R-1;for(;R<65536;)M[R++]=0;return O}function U(g){for(let M=0;M<16384;M++)g[M]={},g[M].len=0,g[M].lit=0,g[M].p=null}const k={l:0,c:0,lc:0};function A(g,M,R,O,X){for(;R<g;)M=M<<8|je(O,X),R+=8;R-=g,k.l=M>>R&(1<<g)-1,k.c=M,k.lc=R}const z=new Array(59);function D(g){for(let R=0;R<=58;++R)z[R]=0;for(let R=0;R<65537;++R)z[g[R]]+=1;let M=0;for(let R=58;R>0;--R){const O=M+z[R]>>1;z[R]=M,M=O}for(let R=0;R<65537;++R){const O=g[R];O>0&&(g[R]=O|z[O]++<<6)}}function F(g,M,R,O,X,V){const J=M;let ie=0,ne=0;for(;O<=X;O++){if(J.value-M.value>R)return!1;A(6,ie,ne,g,J);const re=k.l;if(ie=k.c,ne=k.lc,V[O]=re,re==63){if(J.value-M.value>R)throw new Error("Something wrong with hufUnpackEncTable");A(8,ie,ne,g,J);let se=k.l+6;if(ie=k.c,ne=k.lc,O+se>X+1)throw new Error("Something wrong with hufUnpackEncTable");for(;se--;)V[O++]=0;O--}else if(re>=59){let se=re-59+2;if(O+se>X+1)throw new Error("Something wrong with hufUnpackEncTable");for(;se--;)V[O++]=0;O--}}D(V)}function Z(g){return g&63}function q(g){return g>>6}function Q(g,M,R,O){for(;M<=R;M++){const X=q(g[M]),V=Z(g[M]);if(X>>V)throw new Error("Invalid table entry");if(V>14){const J=O[X>>V-14];if(J.len)throw new Error("Invalid table entry");if(J.lit++,J.p){const ie=J.p;J.p=new Array(J.lit);for(let ne=0;ne<J.lit-1;++ne)J.p[ne]=ie[ne]}else J.p=new Array(1);J.p[J.lit-1]=M}else if(V){let J=0;for(let ie=1<<14-V;ie>0;ie--){const ne=O[(X<<14-V)+J];if(ne.len||ne.p)throw new Error("Invalid table entry");ne.len=V,ne.lit=M,J++}}}return!0}const oe={c:0,lc:0};function xe(g,M,R,O){g=g<<8|je(R,O),M+=8,oe.c=g,oe.lc=M}const de={c:0,lc:0};function He(g,M,R,O,X,V,J,ie,ne){if(g==M){O<8&&(xe(R,O,X,V),R=oe.c,O=oe.lc),O-=8;let re=R>>O;if(re=new Uint8Array([re])[0],ie.value+re>ne)return!1;const se=J[ie.value-1];for(;re-- >0;)J[ie.value++]=se}else if(ie.value<ne)J[ie.value++]=g;else return!1;de.c=R,de.lc=O}function ee(g){return g&65535}function fe(g){const M=ee(g);return M>32767?M-65536:M}const me={a:0,b:0};function _e(g,M){const R=fe(g),X=fe(M),V=R+(X&1)+(X>>1),J=V,ie=V-X;me.a=J,me.b=ie}function Ve(g,M){const R=ee(g),O=ee(M),X=R-(O>>1)&65535,V=O+X-32768&65535;me.a=V,me.b=X}function We(g,M,R,O,X,V,J){const ie=J<16384,ne=R>X?X:R;let re=1,se,ye;for(;re<=ne;)re<<=1;for(re>>=1,se=re,re>>=1;re>=1;){ye=0;const ue=ye+V*(X-se),ae=V*re,Pe=V*se,ge=O*re,Re=O*se;let ke,tt,_t,ut;for(;ye<=ue;ye+=Pe){let nt=ye;const $e=ye+O*(R-se);for(;nt<=$e;nt+=Re){const st=nt+ge,Gt=nt+ae,Ct=Gt+ge;ie?(_e(g[nt+M],g[Gt+M]),ke=me.a,_t=me.b,_e(g[st+M],g[Ct+M]),tt=me.a,ut=me.b,_e(ke,tt),g[nt+M]=me.a,g[st+M]=me.b,_e(_t,ut),g[Gt+M]=me.a,g[Ct+M]=me.b):(Ve(g[nt+M],g[Gt+M]),ke=me.a,_t=me.b,Ve(g[st+M],g[Ct+M]),tt=me.a,ut=me.b,Ve(ke,tt),g[nt+M]=me.a,g[st+M]=me.b,Ve(_t,ut),g[Gt+M]=me.a,g[Ct+M]=me.b)}if(R&re){const st=nt+ae;ie?_e(g[nt+M],g[st+M]):Ve(g[nt+M],g[st+M]),ke=me.a,g[st+M]=me.b,g[nt+M]=ke}}if(X&re){let nt=ye;const $e=ye+O*(R-se);for(;nt<=$e;nt+=Re){const st=nt+ge;ie?_e(g[nt+M],g[st+M]):Ve(g[nt+M],g[st+M]),ke=me.a,g[st+M]=me.b,g[nt+M]=ke}}se=re,re>>=1}return ye}function j(g,M,R,O,X,V,J,ie,ne){let re=0,se=0;const ye=J,ue=Math.trunc(O.value+(X+7)/8);for(;O.value<ue;)for(xe(re,se,R,O),re=oe.c,se=oe.lc;se>=14;){const Pe=re>>se-14&16383,ge=M[Pe];if(ge.len)se-=ge.len,He(ge.lit,V,re,se,R,O,ie,ne,ye),re=de.c,se=de.lc;else{if(!ge.p)throw new Error("hufDecode issues");let Re;for(Re=0;Re<ge.lit;Re++){const ke=Z(g[ge.p[Re]]);for(;se<ke&&O.value<ue;)xe(re,se,R,O),re=oe.c,se=oe.lc;if(se>=ke&&q(g[ge.p[Re]])==(re>>se-ke&(1<<ke)-1)){se-=ke,He(ge.p[Re],V,re,se,R,O,ie,ne,ye),re=de.c,se=de.lc;break}}if(Re==ge.lit)throw new Error("hufDecode issues")}}const ae=8-X&7;for(re>>=ae,se-=ae;se>0;){const Pe=M[re<<14-se&16383];if(Pe.len)se-=Pe.len,He(Pe.lit,V,re,se,R,O,ie,ne,ye),re=de.c,se=de.lc;else throw new Error("hufDecode issues")}return!0}function at(g,M,R,O,X,V){const J={value:0},ie=R.value,ne=Fe(M,R),re=Fe(M,R);R.value+=4;const se=Fe(M,R);if(R.value+=4,ne<0||ne>=65537||re<0||re>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ye=new Array(65537),ue=new Array(16384);U(ue);const ae=O-(R.value-ie);if(F(g,R,ae,ne,re,ye),se>8*(O-(R.value-ie)))throw new Error("Something wrong with hufUncompress");Q(ye,ne,re,ue),j(ye,ue,g,R,se,re,V,X,J)}function De(g,M,R){for(let O=0;O<R;++O)M[O]=g[M[O]]}function it(g){for(let M=1;M<g.length;M++){const R=g[M-1]+g[M]-128;g[M]=R}}function ze(g,M){let R=0,O=Math.floor((g.length+1)/2),X=0;const V=g.length-1;for(;!(X>V||(M[X++]=g[R++],X>V));)M[X++]=g[O++]}function Ze(g){let M=g.byteLength;const R=new Array;let O=0;const X=new DataView(g);for(;M>0;){const V=X.getInt8(O++);if(V<0){const J=-V;M-=J+1;for(let ie=0;ie<J;ie++)R.push(X.getUint8(O++))}else{const J=V;M-=2;const ie=X.getUint8(O++);for(let ne=0;ne<J+1;ne++)R.push(ie)}}return R}function qe(g,M,R,O,X,V){let J=new DataView(V.buffer);const ie=R[g.idx[0]].width,ne=R[g.idx[0]].height,re=3,se=Math.floor(ie/8),ye=Math.ceil(ie/8),ue=Math.ceil(ne/8),ae=ie-(ye-1)*8,Pe=ne-(ue-1)*8,ge={value:0},Re=new Array(re),ke=new Array(re),tt=new Array(re),_t=new Array(re),ut=new Array(re);for(let $e=0;$e<re;++$e)ut[$e]=M[g.idx[$e]],Re[$e]=$e<1?0:Re[$e-1]+ye*ue,ke[$e]=new Float32Array(64),tt[$e]=new Uint16Array(64),_t[$e]=new Uint16Array(ye*64);for(let $e=0;$e<ue;++$e){let st=8;$e==ue-1&&(st=Pe);let Gt=8;for(let rt=0;rt<ye;++rt){rt==ye-1&&(Gt=ae);for(let vt=0;vt<re;++vt)tt[vt].fill(0),tt[vt][0]=X[Re[vt]++],Ke(ge,O,tt[vt]),Mt(tt[vt],ke[vt]),B(ke[vt]);T(ke);for(let vt=0;vt<re;++vt)te(ke[vt],_t[vt],rt*64)}let Ct=0;for(let rt=0;rt<re;++rt){const vt=R[g.idx[rt]].type;for(let kn=8*$e;kn<8*$e+st;++kn){Ct=ut[rt][kn];for(let Ds=0;Ds<se;++Ds){const Cn=Ds*64+(kn&7)*8;J.setUint16(Ct+0*2*vt,_t[rt][Cn+0],!0),J.setUint16(Ct+1*2*vt,_t[rt][Cn+1],!0),J.setUint16(Ct+2*2*vt,_t[rt][Cn+2],!0),J.setUint16(Ct+3*2*vt,_t[rt][Cn+3],!0),J.setUint16(Ct+4*2*vt,_t[rt][Cn+4],!0),J.setUint16(Ct+5*2*vt,_t[rt][Cn+5],!0),J.setUint16(Ct+6*2*vt,_t[rt][Cn+6],!0),J.setUint16(Ct+7*2*vt,_t[rt][Cn+7],!0),Ct+=8*2*vt}}if(se!=ye)for(let kn=8*$e;kn<8*$e+st;++kn){const Ds=ut[rt][kn]+8*se*2*vt,Cn=se*64+(kn&7)*8;for(let vr=0;vr<Gt;++vr)J.setUint16(Ds+vr*2*vt,_t[rt][Cn+vr],!0)}}}const nt=new Uint16Array(ie);J=new DataView(V.buffer);for(let $e=0;$e<re;++$e){R[g.idx[$e]].decoded=!0;const st=R[g.idx[$e]].type;if(R[$e].type==2)for(let Gt=0;Gt<ne;++Gt){const Ct=ut[$e][Gt];for(let rt=0;rt<ie;++rt)nt[rt]=J.getUint16(Ct+rt*2*st,!0);for(let rt=0;rt<ie;++rt)J.setFloat32(Ct+rt*2*st,G(nt[rt]),!0)}}}function Ke(g,M,R){let O,X=1;for(;X<64;)O=M[g.value],O==65280?X=64:O>>8==255?X+=O&255:(R[X]=O,X++),g.value++}function Mt(g,M){M[0]=G(g[0]),M[1]=G(g[1]),M[2]=G(g[5]),M[3]=G(g[6]),M[4]=G(g[14]),M[5]=G(g[15]),M[6]=G(g[27]),M[7]=G(g[28]),M[8]=G(g[2]),M[9]=G(g[4]),M[10]=G(g[7]),M[11]=G(g[13]),M[12]=G(g[16]),M[13]=G(g[26]),M[14]=G(g[29]),M[15]=G(g[42]),M[16]=G(g[3]),M[17]=G(g[8]),M[18]=G(g[12]),M[19]=G(g[17]),M[20]=G(g[25]),M[21]=G(g[30]),M[22]=G(g[41]),M[23]=G(g[43]),M[24]=G(g[9]),M[25]=G(g[11]),M[26]=G(g[18]),M[27]=G(g[24]),M[28]=G(g[31]),M[29]=G(g[40]),M[30]=G(g[44]),M[31]=G(g[53]),M[32]=G(g[10]),M[33]=G(g[19]),M[34]=G(g[23]),M[35]=G(g[32]),M[36]=G(g[39]),M[37]=G(g[45]),M[38]=G(g[52]),M[39]=G(g[54]),M[40]=G(g[20]),M[41]=G(g[22]),M[42]=G(g[33]),M[43]=G(g[38]),M[44]=G(g[46]),M[45]=G(g[51]),M[46]=G(g[55]),M[47]=G(g[60]),M[48]=G(g[21]),M[49]=G(g[34]),M[50]=G(g[37]),M[51]=G(g[47]),M[52]=G(g[50]),M[53]=G(g[56]),M[54]=G(g[59]),M[55]=G(g[61]),M[56]=G(g[35]),M[57]=G(g[36]),M[58]=G(g[48]),M[59]=G(g[49]),M[60]=G(g[57]),M[61]=G(g[58]),M[62]=G(g[62]),M[63]=G(g[63])}function B(g){const M=.5*Math.cos(.7853975),R=.5*Math.cos(3.14159/16),O=.5*Math.cos(3.14159/8),X=.5*Math.cos(3*3.14159/16),V=.5*Math.cos(5*3.14159/16),J=.5*Math.cos(3*3.14159/8),ie=.5*Math.cos(7*3.14159/16),ne=new Array(4),re=new Array(4),se=new Array(4),ye=new Array(4);for(let ue=0;ue<8;++ue){const ae=ue*8;ne[0]=O*g[ae+2],ne[1]=J*g[ae+2],ne[2]=O*g[ae+6],ne[3]=J*g[ae+6],re[0]=R*g[ae+1]+X*g[ae+3]+V*g[ae+5]+ie*g[ae+7],re[1]=X*g[ae+1]-ie*g[ae+3]-R*g[ae+5]-V*g[ae+7],re[2]=V*g[ae+1]-R*g[ae+3]+ie*g[ae+5]+X*g[ae+7],re[3]=ie*g[ae+1]-V*g[ae+3]+X*g[ae+5]-R*g[ae+7],se[0]=M*(g[ae+0]+g[ae+4]),se[3]=M*(g[ae+0]-g[ae+4]),se[1]=ne[0]+ne[3],se[2]=ne[1]-ne[2],ye[0]=se[0]+se[1],ye[1]=se[3]+se[2],ye[2]=se[3]-se[2],ye[3]=se[0]-se[1],g[ae+0]=ye[0]+re[0],g[ae+1]=ye[1]+re[1],g[ae+2]=ye[2]+re[2],g[ae+3]=ye[3]+re[3],g[ae+4]=ye[3]-re[3],g[ae+5]=ye[2]-re[2],g[ae+6]=ye[1]-re[1],g[ae+7]=ye[0]-re[0]}for(let ue=0;ue<8;++ue)ne[0]=O*g[16+ue],ne[1]=J*g[16+ue],ne[2]=O*g[48+ue],ne[3]=J*g[48+ue],re[0]=R*g[8+ue]+X*g[24+ue]+V*g[40+ue]+ie*g[56+ue],re[1]=X*g[8+ue]-ie*g[24+ue]-R*g[40+ue]-V*g[56+ue],re[2]=V*g[8+ue]-R*g[24+ue]+ie*g[40+ue]+X*g[56+ue],re[3]=ie*g[8+ue]-V*g[24+ue]+X*g[40+ue]-R*g[56+ue],se[0]=M*(g[ue]+g[32+ue]),se[3]=M*(g[ue]-g[32+ue]),se[1]=ne[0]+ne[3],se[2]=ne[1]-ne[2],ye[0]=se[0]+se[1],ye[1]=se[3]+se[2],ye[2]=se[3]-se[2],ye[3]=se[0]-se[1],g[0+ue]=ye[0]+re[0],g[8+ue]=ye[1]+re[1],g[16+ue]=ye[2]+re[2],g[24+ue]=ye[3]+re[3],g[32+ue]=ye[3]-re[3],g[40+ue]=ye[2]-re[2],g[48+ue]=ye[1]-re[1],g[56+ue]=ye[0]-re[0]}function T(g){for(let M=0;M<64;++M){const R=g[0][M],O=g[1][M],X=g[2][M];g[0][M]=R+1.5747*X,g[1][M]=R-.1873*O-.4682*X,g[2][M]=R+1.8556*O}}function te(g,M,R){for(let O=0;O<64;++O)M[R+O]=bc.toHalfFloat(le(g[O]))}function le(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(E,Math.abs(g)-1)}function he(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function pe(g){const M=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),R=new Uint8Array(Ze(M)),O=new Uint8Array(R.length);return it(R),ze(R,O),new DataView(O.buffer)}function Le(g){const M=g.array.slice(g.offset.value,g.offset.value+g.size),R=ao(M),O=new Uint8Array(R.length);return it(R),ze(R,O),new DataView(O.buffer)}function Te(g){const M=g.viewer,R={value:g.offset.value},O=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),X=new Uint8Array(8192);let V=0;const J=new Array(g.inputChannels.length);for(let Pe=0,ge=g.inputChannels.length;Pe<ge;Pe++)J[Pe]={},J[Pe].start=V,J[Pe].end=J[Pe].start,J[Pe].nx=g.columns,J[Pe].ny=g.lines,J[Pe].size=g.type,V+=J[Pe].nx*J[Pe].ny*J[Pe].size;const ie=Se(M,R),ne=Se(M,R);if(ne>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ie<=ne)for(let Pe=0;Pe<ne-ie+1;Pe++)X[Pe+ie]=ht(M,R);const re=new Uint16Array(65536),se=S(X,re),ye=Fe(M,R);at(g.array,M,R,ye,O,V);for(let Pe=0;Pe<g.inputChannels.length;++Pe){const ge=J[Pe];for(let Re=0;Re<J[Pe].size;++Re)We(O,ge.start+Re,ge.nx,ge.size,ge.ny,ge.nx*ge.size,se)}De(re,O,V);let ue=0;const ae=new Uint8Array(O.buffer.byteLength);for(let Pe=0;Pe<g.lines;Pe++)for(let ge=0;ge<g.inputChannels.length;ge++){const Re=J[ge],ke=Re.nx*Re.size,tt=new Uint8Array(O.buffer,Re.end*2,ke*2);ae.set(tt,ue),ue+=ke*2,Re.end+=ke}return new DataView(ae.buffer)}function be(g){const M=g.array.slice(g.offset.value,g.offset.value+g.size),R=ao(M),O=g.inputChannels.length*g.lines*g.columns*g.totalBytes,X=new ArrayBuffer(O),V=new DataView(X);let J=0,ie=0;const ne=new Array(4);for(let re=0;re<g.lines;re++)for(let se=0;se<g.inputChannels.length;se++){let ye=0;switch(g.inputChannels[se].pixelType){case 1:ne[0]=J,ne[1]=ne[0]+g.columns,J=ne[1]+g.columns;for(let ae=0;ae<g.columns;++ae){const Pe=R[ne[0]++]<<8|R[ne[1]++];ye+=Pe,V.setUint16(ie,ye,!0),ie+=2}break;case 2:ne[0]=J,ne[1]=ne[0]+g.columns,ne[2]=ne[1]+g.columns,J=ne[2]+g.columns;for(let ae=0;ae<g.columns;++ae){const Pe=R[ne[0]++]<<24|R[ne[1]++]<<16|R[ne[2]++]<<8;ye+=Pe,V.setUint32(ie,ye,!0),ie+=4}break}}return V}function Ge(g){const M=g.viewer,R={value:g.offset.value},O=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),X={version:Ue(M,R),unknownUncompressedSize:Ue(M,R),unknownCompressedSize:Ue(M,R),acCompressedSize:Ue(M,R),dcCompressedSize:Ue(M,R),rleCompressedSize:Ue(M,R),rleUncompressedSize:Ue(M,R),rleRawSize:Ue(M,R),totalAcUncompressedCount:Ue(M,R),totalDcUncompressedCount:Ue(M,R),acCompression:Ue(M,R)};if(X.version<2)throw new Error("EXRLoader.parse: "+K.compression+" version "+X.version+" is unsupported");const V=new Array;let J=Se(M,R)-2;for(;J>0;){const ge=ve(M.buffer,R),Re=ht(M,R),ke=Re>>2&3,tt=(Re>>4)-1,_t=new Int8Array([tt])[0],ut=ht(M,R);V.push({name:ge,index:_t,type:ut,compression:ke}),J-=ge.length+3}const ie=K.channels,ne=new Array(g.inputChannels.length);for(let ge=0;ge<g.inputChannels.length;++ge){const Re=ne[ge]={},ke=ie[ge];Re.name=ke.name,Re.compression=0,Re.decoded=!1,Re.type=ke.pixelType,Re.pLinear=ke.pLinear,Re.width=g.columns,Re.height=g.lines}const re={idx:new Array(3)};for(let ge=0;ge<g.inputChannels.length;++ge){const Re=ne[ge];for(let ke=0;ke<V.length;++ke){const tt=V[ke];Re.name==tt.name&&(Re.compression=tt.compression,tt.index>=0&&(re.idx[tt.index]=ge),Re.offset=ge)}}let se,ye,ue;if(X.acCompressedSize>0)switch(X.acCompression){case 0:se=new Uint16Array(X.totalAcUncompressedCount),at(g.array,M,R,X.acCompressedSize,se,X.totalAcUncompressedCount);break;case 1:const ge=g.array.slice(R.value,R.value+X.totalAcUncompressedCount),Re=ao(ge);se=new Uint16Array(Re.buffer),R.value+=X.totalAcUncompressedCount;break}if(X.dcCompressedSize>0){const ge={array:g.array,offset:R,size:X.dcCompressedSize};ye=new Uint16Array(Le(ge).buffer),R.value+=X.dcCompressedSize}if(X.rleRawSize>0){const ge=g.array.slice(R.value,R.value+X.rleCompressedSize),Re=ao(ge);ue=Ze(Re.buffer),R.value+=X.rleCompressedSize}let ae=0;const Pe=new Array(ne.length);for(let ge=0;ge<Pe.length;++ge)Pe[ge]=new Array;for(let ge=0;ge<g.lines;++ge)for(let Re=0;Re<ne.length;++Re)Pe[Re].push(ae),ae+=ne[Re].width*g.type*2;qe(re,Pe,ne,se,ye,O);for(let ge=0;ge<ne.length;++ge){const Re=ne[ge];if(!Re.decoded)switch(Re.compression){case 2:let ke=0,tt=0;for(let _t=0;_t<g.lines;++_t){let ut=Pe[ge][ke];for(let nt=0;nt<Re.width;++nt){for(let $e=0;$e<2*Re.type;++$e)O[ut++]=ue[tt+$e*Re.width*Re.height];tt++}ke++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(O.buffer)}function ve(g,M){const R=new Uint8Array(g);let O=0;for(;R[M.value+O]!=0;)O+=1;const X=new TextDecoder().decode(R.slice(M.value,M.value+O));return M.value=M.value+O+1,X}function Ie(g,M,R){const O=new TextDecoder().decode(new Uint8Array(g).slice(M.value,M.value+R));return M.value=M.value+R,O}function Je(g,M){const R=we(g,M),O=Fe(g,M);return[R,O]}function Oe(g,M){const R=Fe(g,M),O=Fe(g,M);return[R,O]}function we(g,M){const R=g.getInt32(M.value,!0);return M.value=M.value+4,R}function Fe(g,M){const R=g.getUint32(M.value,!0);return M.value=M.value+4,R}function je(g,M){const R=g[M.value];return M.value=M.value+1,R}function ht(g,M){const R=g.getUint8(M.value);return M.value=M.value+1,R}const Ue=function(g,M){let R;return"getBigInt64"in DataView.prototype?R=Number(g.getBigInt64(M.value,!0)):R=g.getUint32(M.value+4,!0)+Number(g.getUint32(M.value,!0)<<32),M.value+=8,R};function H(g,M){const R=g.getFloat32(M.value,!0);return M.value+=4,R}function ce(g,M){return bc.toHalfFloat(H(g,M))}function G(g){const M=(g&31744)>>10,R=g&1023;return(g>>15?-1:1)*(M?M===31?R?NaN:1/0:Math.pow(2,M-15)*(1+R/1024):6103515625e-14*(R/1024))}function Se(g,M){const R=g.getUint16(M.value,!0);return M.value+=2,R}function Ce(g,M){return G(Se(g,M))}function et(g,M,R,O){const X=R.value,V=[];for(;R.value<X+O-1;){const J=ve(M,R),ie=we(g,R),ne=ht(g,R);R.value+=3;const re=we(g,R),se=we(g,R);V.push({name:J,pixelType:ie,pLinear:ne,xSampling:re,ySampling:se})}return R.value+=1,V}function gt(g,M){const R=H(g,M),O=H(g,M),X=H(g,M),V=H(g,M),J=H(g,M),ie=H(g,M),ne=H(g,M),re=H(g,M);return{redX:R,redY:O,greenX:X,greenY:V,blueX:J,blueY:ie,whiteX:ne,whiteY:re}}function wt(g,M){const R=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],O=ht(g,M);return R[O]}function Ft(g,M){const R=we(g,M),O=we(g,M),X=we(g,M),V=we(g,M);return{xMin:R,yMin:O,xMax:X,yMax:V}}function lt(g,M){const R=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],O=ht(g,M);return R[O]}function on(g,M){const R=["ENVMAP_LATLONG","ENVMAP_CUBE"],O=ht(g,M);return R[O]}function zt(g,M){const R=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],O=["ROUND_DOWN","ROUND_UP"],X=Fe(g,M),V=Fe(g,M),J=ht(g,M);return{xSize:X,ySize:V,levelMode:R[J&15],roundingMode:O[J>>4]}}function ur(g,M){const R=H(g,M),O=H(g,M);return[R,O]}function dr(g,M){const R=H(g,M),O=H(g,M),X=H(g,M);return[R,O,X]}function fr(g,M,R,O,X){if(O==="string"||O==="stringvector"||O==="iccProfile")return Ie(M,R,X);if(O==="chlist")return et(g,M,R,X);if(O==="chromaticities")return gt(g,R);if(O==="compression")return wt(g,R);if(O==="box2i")return Ft(g,R);if(O==="envmap")return on(g,R);if(O==="tiledesc")return zt(g,R);if(O==="lineOrder")return lt(g,R);if(O==="float")return H(g,R);if(O==="v2f")return ur(g,R);if(O==="v3f")return dr(g,R);if(O==="int")return we(g,R);if(O==="rational")return Je(g,R);if(O==="timecode")return Oe(g,R);if(O==="preview")return R.value+=X,"skipped";R.value+=X}function Wi(g,M){const R=Math.log2(g);return M=="ROUND_DOWN"?Math.floor(R):Math.ceil(R)}function pr(g,M,R){let O=0;switch(g.levelMode){case"ONE_LEVEL":O=1;break;case"MIPMAP_LEVELS":O=Wi(Math.max(M,R),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return O}function Ti(g,M,R,O){const X=new Array(g);for(let V=0;V<g;V++){const J=1<<V;let ie=M/J|0;O=="ROUND_UP"&&ie*J<M&&(ie+=1);const ne=Math.max(ie,1);X[V]=(ne+R-1)/R|0}return X}function mr(){const g=this,M=g.offset,R={value:0};for(let O=0;O<g.tileCount;O++){const X=we(g.viewer,M),V=we(g.viewer,M);M.value+=8,g.size=Fe(g.viewer,M);const J=X*g.blockWidth,ie=V*g.blockHeight;g.columns=J+g.blockWidth>g.width?g.width-J:g.blockWidth,g.lines=ie+g.blockHeight>g.height?g.height-ie:g.blockHeight;const ne=g.columns*g.totalBytes,se=g.size<g.lines*ne?g.uncompress(g):he(g);M.value+=g.size;for(let ye=0;ye<g.lines;ye++){const ue=ye*g.columns*g.totalBytes;for(let ae=0;ae<g.inputChannels.length;ae++){const Pe=K.channels[ae].name,ge=g.channelByteOffsets[Pe]*g.columns,Re=g.decodeChannels[Pe];if(Re===void 0)continue;R.value=ue+ge;const ke=(g.height-(1+ie+ye))*g.outLineWidth;for(let tt=0;tt<g.columns;tt++){const _t=ke+(tt+J)*g.outputChannels+Re;g.byteArray[_t]=g.getter(se,R)}}}}}function gr(){const g=this,M=g.offset,R={value:0};for(let O=0;O<g.height/g.blockHeight;O++){const X=we(g.viewer,M)-K.dataWindow.yMin;g.size=Fe(g.viewer,M),g.lines=X+g.blockHeight>g.height?g.height-X:g.blockHeight;const V=g.columns*g.totalBytes,ie=g.size<g.lines*V?g.uncompress(g):he(g);M.value+=g.size;for(let ne=0;ne<g.blockHeight;ne++){const re=O*g.blockHeight,se=ne+g.scanOrder(re);if(se>=g.height)continue;const ye=ne*V,ue=(g.height-1-se)*g.outLineWidth;for(let ae=0;ae<g.inputChannels.length;ae++){const Pe=K.channels[ae].name,ge=g.channelByteOffsets[Pe]*g.columns,Re=g.decodeChannels[Pe];if(Re!==void 0){R.value=ye+ge;for(let ke=0;ke<g.columns;ke++){const tt=ue+ke*g.outputChannels+Re;g.byteArray[tt]=g.getter(ie,R)}}}}}}function Xo(g,M,R){const O={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");O.version=g.getUint8(4);const X=g.getUint8(5);O.spec={singleTile:!!(X&2),longName:!!(X&4),deepFormat:!!(X&8),multiPart:!!(X&16)},R.value=8;let V=!0;for(;V;){const J=ve(M,R);if(J==0)V=!1;else{const ie=ve(M,R),ne=Fe(g,R),re=fr(g,M,R,ie,ne);re===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ie}'.`):O[J]=re}}if(X&-7)throw console.error("THREE.EXRHeader:",O),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return O}function Yo(g,M,R,O,X){const V={size:0,viewer:M,array:R,offset:O,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Fn};switch(g.compression){case"NO_COMPRESSION":V.blockHeight=1,V.uncompress=he;break;case"RLE_COMPRESSION":V.blockHeight=1,V.uncompress=pe;break;case"ZIPS_COMPRESSION":V.blockHeight=1,V.uncompress=Le;break;case"ZIP_COMPRESSION":V.blockHeight=16,V.uncompress=Le;break;case"PIZ_COMPRESSION":V.blockHeight=32,V.uncompress=Te;break;case"PXR24_COMPRESSION":V.blockHeight=16,V.uncompress=be;break;case"DWAA_COMPRESSION":V.blockHeight=32,V.uncompress=Ge;break;case"DWAB_COMPRESSION":V.blockHeight=256,V.uncompress=Ge;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}const J={};for(const se of g.channels)switch(se.name){case"Y":case"R":case"G":case"B":case"A":J[se.name]=!0,V.type=se.pixelType}let ie=!1;if(J.R&&J.G&&J.B)ie=!J.A,V.outputChannels=4,V.decodeChannels={R:0,G:1,B:2,A:3};else if(J.Y)V.outputChannels=1,V.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(V.type==1)switch(X){case Sn:V.getter=Ce;break;case Mn:V.getter=Se;break}else if(V.type==2)switch(X){case Sn:V.getter=H;break;case Mn:V.getter=ce}else throw new Error("EXRLoader.parse: unsupported pixelType "+V.type+" for "+g.compression+".");V.columns=V.width;const ne=V.width*V.height*V.outputChannels;switch(X){case Sn:V.byteArray=new Float32Array(ne),ie&&V.byteArray.fill(1,0,ne);break;case Mn:V.byteArray=new Uint16Array(ne),ie&&V.byteArray.fill(15360,0,ne);break;default:console.error("THREE.EXRLoader: unsupported type: ",X);break}let re=0;for(const se of g.channels)V.decodeChannels[se.name]!==void 0&&(V.channelByteOffsets[se.name]=re),re+=se.pixelType*2;if(V.totalBytes=re,V.outLineWidth=V.width*V.outputChannels,g.lineOrder==="INCREASING_Y"?V.scanOrder=se=>se:V.scanOrder=se=>V.height-1-se,V.outputChannels==4?(V.format=wn,V.colorSpace=Fn):(V.format=au,V.colorSpace=ei),g.spec.singleTile){V.blockHeight=g.tiles.ySize,V.blockWidth=g.tiles.xSize;const se=pr(g.tiles,V.width,V.height),ye=Ti(se,V.width,g.tiles.xSize,g.tiles.roundingMode),ue=Ti(se,V.height,g.tiles.ySize,g.tiles.roundingMode);V.tileCount=ye[0]*ue[0];for(let ae=0;ae<se;ae++)for(let Pe=0;Pe<ue[ae];Pe++)for(let ge=0;ge<ye[ae];ge++)Ue(M,O);V.decode=mr.bind(V)}else{V.blockWidth=V.width;const se=Math.ceil(V.height/V.blockHeight);for(let ye=0;ye<se;ye++)Ue(M,O);V.decode=gr.bind(V)}return V}const _r={value:0},P=new DataView(e),Y=new Uint8Array(e),K=Xo(P,e,_r),$=Yo(K,P,Y,_r,this.type);return $.decode(),{header:K,width:$.width,height:$.height,data:$.byteArray,format:$.format,colorSpace:$.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Ht,o.magFilter=Ht,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,i)}}const Ba=new WeakMap;class SS extends Mi{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Qs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.url=e,r.load(e,o=>{if(Ba.has(o))return Ba.get(o).promise.then(t).catch(i);this.decodeObjects(o,e).then(a=>{a.userData.warnings=this.warnings,t(a)}).catch(a=>i(a))},n,i)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let n,i;const r=e.byteLength,o=this._getWorker(r).then(a=>(n=a,i=this.workerNextTaskID++,new Promise((l,c)=>{n._callbacks[i]={resolve:l,reject:c},n.postMessage({type:"decode",id:i,buffer:e},[e])}))).then(a=>this._createGeometry(a.data)).catch(a=>{throw a});return o.catch(()=>!0).then(()=>{n&&i&&this._releaseTask(n,i)}),Ba.set(e,{url:t,promise:o}),o}parse(e,t,n){this.decodeObjects(e,"").then(i=>{i.userData.warnings=this.warnings,t(i)}).catch(i=>n(i))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;const n=JSON.stringify(t);for(let i=0;i<this.materials.length;i++){const r=this.materials[i],o={};if(o.name=r.name,o.color={},o.color.r=r.color.r,o.color.g=r.color.g,o.color.b=r.color.b,o.type=r.type,o.vertexColors=r.vertexColors,JSON.stringify(o)===n)return r}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new Oo({color:new Be(1,1,1),metalness:.8,name:Mi.DEFAULT_MATERIAL_NAME,side:sn});const n=new G_({color:new Be(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new Be(e.emissionColor.r,e.emissionColor.g,e.emissionColor.b),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:sn,specularColor:e.specularColor,transparent:e.transparency>0});if(n.userData.id=e.id,e.pbrSupported){const r=e.pbr;n.anisotropy=r.anisotropic,n.anisotropyRotation=r.anisotropicRotation,n.color=new Be(r.baseColor.r,r.baseColor.g,r.baseColor.b),n.clearcoat=r.clearcoat,n.clearcoatRoughness=r.clearcoatRoughness,n.metalness=r.metallic,n.transmission=1-r.opacity,n.roughness=r.roughness,n.sheen=r.sheen,n.specularIntensity=r.specular,n.thickness=r.subsurface}e.pbrSupported&&e.pbr.opacity===0&&e.transparency===1&&(n.opacity=.2,n.transmission=1);const i=new Nu;for(let r=0;r<e.textures.length;r++){const o=e.textures[r];if(o.image!==null){const a=i.load(o.image);switch(o.type){case"Bump":n.bumpMap=a;break;case"Diffuse":n.map=a;break;case"Emap":n.envMap=a;break;case"Opacity":n.transmissionMap=a;break;case"Transparency":n.alphaMap=a,n.transparent=!0;break;case"PBR_Alpha":n.alphaMap=a,n.transparent=!0;break;case"PBR_AmbientOcclusion":n.aoMap=a;break;case"PBR_Anisotropic":n.anisotropyMap=a;break;case"PBR_BaseColor":n.map=a;break;case"PBR_Clearcoat":n.clearcoatMap=a;break;case"PBR_ClearcoatBump":n.clearcoatNormalMap=a;break;case"PBR_ClearcoatRoughness":n.clearcoatRoughnessMap=a;break;case"PBR_Displacement":n.displacementMap=a;break;case"PBR_Emission":n.emissiveMap=a;break;case"PBR_Metallic":n.metalnessMap=a;break;case"PBR_Roughness":n.roughnessMap=a;break;case"PBR_Sheen":n.sheenColorMap=a;break;case"PBR_Specular":n.specularColorMap=a;break;case"PBR_Subsurface":n.thicknessMap=a;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${o.type}.`,type:"no conversion"});break}a.wrapS=o.wrapU===0?ki:rn,a.wrapT=o.wrapV===0?ki:rn,o.repeat&&a.repeat.set(o.repeat[0],o.repeat[1])}}return t&&new xS().load(t.image,function(r){r.mapping=THREE.EquirectangularReflectionMapping,n.envMap=r}),n}_createGeometry(e){const t=new Tt,n=[],i=[],r=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let o=e.objects;const a=e.materials;for(let l=0;l<o.length;l++){const c=o[l],h=c.attributes;switch(c.objectType){case"InstanceDefinition":i.push(c);break;case"InstanceReference":r.push(c);break;default:let d=null;switch(h.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":h.layerIndex>=0&&(d=e.layers[h.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":h.materialIndex>=0&&(d=h.materialIndex);break}let u=null;if(d>=0){const v=a[d];u=this._createMaterial(v,e.renderEnvironment)}const f=this._createObject(c,u);if(f===void 0)continue;const _=e.layers[h.layerIndex];f.visible=_?e.layers[h.layerIndex].visible:!0,h.isInstanceDefinitionObject?n.push(f):t.add(f);break}}for(let l=0;l<i.length;l++){const c=i[l];o=[];for(let h=0;h<c.attributes.objectIds.length;h++){const d=c.attributes.objectIds[h];for(let u=0;u<n.length;u++){const f=n[u].userData.attributes.id;d===f&&o.push(n[u])}}for(let h=0;h<r.length;h++){const d=r[h];if(d.geometry.parentIdefId===c.attributes.id){const u=new Tt,f=d.geometry.xform.array,_=new mt;_.set(...f),u.applyMatrix4(_);for(let v=0;v<o.length;v++)u.add(o[v].clone(!0));t.add(u)}}}return t.userData.materials=this.materials,t.name="",t}_createObject(e,t){const n=new ov,i=e.attributes;let r,o,a,l;switch(e.objectType){case"Point":case"PointSet":r=n.parse(e.geometry),r.attributes.hasOwnProperty("color")?o=new Ja({vertexColors:!0,sizeAttenuation:!1,size:2}):(a=i.drawColor,l=new Be(a.r/255,a.g/255,a.b/255),o=new Ja({color:l,sizeAttenuation:!1,size:2})),o=this._compareMaterials(o);const c=new k_(r,o);return c.userData.attributes=i,c.userData.objectType=e.objectType,i.name&&(c.name=i.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;r=n.parse(e.geometry),t===null&&(t=this._createMaterial()),r.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);const h=new At(r,t);return h.castShadow=i.castsShadows,h.receiveShadow=i.receivesShadows,h.userData.attributes=i,h.userData.objectType=e.objectType,i.name&&(h.name=i.name),h;case"Curve":r=n.parse(e.geometry),a=i.drawColor,l=new Be(a.r/255,a.g/255,a.b/255),o=new Iu({color:l}),o=this._compareMaterials(o);const d=new z_(r,o);return d.userData.attributes=i,d.userData.objectType=e.objectType,i.name&&(d.name=i.name),d;case"TextDot":r=e.geometry;const u=document.createElement("canvas").getContext("2d"),f=`${r.fontHeight}px ${r.fontFace}`;u.font=f;const _=u.measureText(r.text).width+10,v=r.fontHeight+10,p=window.devicePixelRatio;u.canvas.width=_*p,u.canvas.height=v*p,u.canvas.style.width=_+"px",u.canvas.style.height=v+"px",u.setTransform(p,0,0,p,0,0),u.font=f,u.textBaseline="middle",u.textAlign="center",l=i.drawColor,u.fillStyle=`rgba(${l.r},${l.g},${l.b},${l.a})`,u.fillRect(0,0,_,v),u.fillStyle="white",u.fillText(r.text,_/2,v/2);const m=new H_(u.canvas);m.minFilter=Ht,m.wrapS=rn,m.wrapT=rn,o=new Pu({map:m,depthTest:!1});const y=new F_(o);return y.position.set(r.point[0],r.point[1],r.point[2]),y.scale.set(_/10,v/10,1),y.userData.attributes=i,y.userData.objectType=e.objectType,i.name&&(y.name=i.name),y;case"Light":r=e.geometry;let x;switch(r.lightStyle.name){case"LightStyle_WorldPoint":x=new tv,x.castShadow=i.castsShadows,x.position.set(r.location[0],r.location[1],r.location[2]),x.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":x=new Q_,x.castShadow=i.castsShadows,x.position.set(r.location[0],r.location[1],r.location[2]),x.target.position.set(r.direction[0],r.direction[1],r.direction[2]),x.angle=r.spotAngleRadians,x.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":x=new sv;const b=Math.abs(r.width[2]),I=Math.abs(r.length[0]);x.position.set(r.location[0]-I/2,r.location[1],r.location[2]-b/2),x.height=I,x.width=b,x.lookAt(r.direction[0],r.direction[1],r.direction[2]);break;case"LightStyle_WorldDirectional":x=new Du,x.castShadow=i.castsShadows,x.position.set(r.location[0],r.location[1],r.location[2]),x.target.position.set(r.direction[0],r.direction[1],r.direction[2]),x.shadow.normalBias=.1;break}return x&&(x.intensity=r.intensity,a=r.diffuse,l=new Be(a.r/255,a.g/255,a.b/255),x.color=l,x.userData.attributes=i,x.userData.objectType=e.objectType),x}}_initLibrary(){if(!this.libraryPending){const e=new Qs(this.manager);e.setPath(this.libraryPath);const t=new Promise((r,o)=>{e.load("rhino3dm.js",r,void 0,o)}),n=new Qs(this.manager);n.setPath(this.libraryPath),n.setResponseType("arraybuffer");const i=new Promise((r,o)=>{n.load("rhino3dm.wasm",r,void 0,o)});this.libraryPending=Promise.all([t,i]).then(([r,o])=>{this.libraryConfig.wasmBinary=o;const a=MS.toString(),l=["/* rhino3dm.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",libraryConfig:this.libraryConfig}),n.onmessage=i=>{const r=i.data;switch(r.type){case"warning":this.warnings.push(r.data),console.warn(r.data);break;case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,i){return n._taskLoad>i._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function MS(){let s,e,t,n;onmessage=function(h){const d=h.data;switch(d.type){case"init":e=d.libraryConfig;const u=e.wasmBinary;let f;s=new Promise(function(v){f={wasmBinary:u,onRuntimeInitialized:v},rhino3dm(f)}).then(()=>{t=f});break;case"decode":n=d.id;const _=d.buffer;s.then(()=>{try{const v=i(t,_);self.postMessage({type:"decode",id:d.id,data:v})}catch(v){self.postMessage({type:"error",id:d.id,error:v})}});break}};function i(h,d){const u=new Uint8Array(d),f=h.File3dm.fromByteArray(u),_=[],v=[],p=[],m=[],y=[],x=[],b=[],I=f.objects(),C=I.count;for(let D=0;D<C;D++){const F=I.get(D),Z=a(F,f);F.delete(),Z&&_.push(Z)}for(let D=0;D<f.instanceDefinitions().count;D++){const F=f.instanceDefinitions().get(D),Z=l(F);Z.objectIds=F.getObjectIds(),_.push({geometry:null,attributes:Z,objectType:"InstanceDefinition"})}const L=[h.TextureType.Diffuse,h.TextureType.Bump,h.TextureType.Transparency,h.TextureType.Opacity,h.TextureType.Emap],N=[h.TextureType.PBR_BaseColor,h.TextureType.PBR_Subsurface,h.TextureType.PBR_SubsurfaceScattering,h.TextureType.PBR_SubsurfaceScatteringRadius,h.TextureType.PBR_Metallic,h.TextureType.PBR_Specular,h.TextureType.PBR_SpecularTint,h.TextureType.PBR_Roughness,h.TextureType.PBR_Anisotropic,h.TextureType.PBR_Anisotropic_Rotation,h.TextureType.PBR_Sheen,h.TextureType.PBR_SheenTint,h.TextureType.PBR_Clearcoat,h.TextureType.PBR_ClearcoatBump,h.TextureType.PBR_ClearcoatRoughness,h.TextureType.PBR_OpacityIor,h.TextureType.PBR_OpacityRoughness,h.TextureType.PBR_Emission,h.TextureType.PBR_AmbientOcclusion,h.TextureType.PBR_Displacement];for(let D=0;D<f.materials().count;D++){const F=f.materials().get(D),Z=l(F),q=[];q.push(...r(F,L,f)),Z.pbrSupported=F.physicallyBased().supported,Z.pbrSupported&&(q.push(...r(F,N,f)),Z.pbr=l(F.physicallyBased())),Z.textures=q,v.push(Z),F.delete()}for(let D=0;D<f.layers().count;D++){const F=f.layers().get(D),Z=l(F);p.push(Z),F.delete()}for(let D=0;D<f.views().count;D++){const F=f.views().get(D),Z=l(F);m.push(Z),F.delete()}for(let D=0;D<f.namedViews().count;D++){const F=f.namedViews().get(D),Z=l(F);y.push(Z),F.delete()}for(let D=0;D<f.groups().count;D++){const F=f.groups().get(D),Z=l(F);x.push(Z),F.delete()}const E=l(f.settings()),S=f.strings().count;for(let D=0;D<S;D++)b.push(f.strings().get(D));const U=f.settings().renderSettings().renderEnvironments.reflectionId,k=f.renderContent();let A=null;for(let D=0;D<k.count;D++){const F=k.get(D);switch(F.kind){case"environment":if(F.id!==U)break;const Q=F.findChild("texture").fileName;for(let oe=0;oe<f.embeddedFiles().count;oe++){const xe=f.embeddedFiles().get(oe).fileName;Q===xe&&(A={type:"renderEnvironment",image:"data:image/png;base64,"+f.getEmbeddedFileAsBase64(Q),name:Q})}break}}const z={ambientLight:f.settings().renderSettings().ambientLight,backgroundColorTop:f.settings().renderSettings().backgroundColorTop,backgroundColorBottom:f.settings().renderSettings().backgroundColorBottom,useHiddenLights:f.settings().renderSettings().useHiddenLights,depthCue:f.settings().renderSettings().depthCue,flatShade:f.settings().renderSettings().flatShade,renderBackFaces:f.settings().renderSettings().renderBackFaces,renderPoints:f.settings().renderSettings().renderPoints,renderCurves:f.settings().renderSettings().renderCurves,renderIsoParams:f.settings().renderSettings().renderIsoParams,renderMeshEdges:f.settings().renderSettings().renderMeshEdges,renderAnnotations:f.settings().renderSettings().renderAnnotations,useViewportSize:f.settings().renderSettings().useViewportSize,scaleBackgroundToFit:f.settings().renderSettings().scaleBackgroundToFit,transparentBackground:f.settings().renderSettings().transparentBackground,imageDpi:f.settings().renderSettings().imageDpi,shadowMapLevel:f.settings().renderSettings().shadowMapLevel,namedView:f.settings().renderSettings().namedView,snapShot:f.settings().renderSettings().snapShot,specificViewport:f.settings().renderSettings().specificViewport,groundPlane:l(f.settings().renderSettings().groundPlane),safeFrame:l(f.settings().renderSettings().safeFrame),dithering:l(f.settings().renderSettings().dithering),skylight:l(f.settings().renderSettings().skylight),linearWorkflow:l(f.settings().renderSettings().linearWorkflow),renderChannels:l(f.settings().renderSettings().renderChannels),sun:l(f.settings().renderSettings().sun),renderEnvironments:l(f.settings().renderSettings().renderEnvironments),postEffects:l(f.settings().renderSettings().postEffects)};return f.delete(),{objects:_,materials:v,layers:p,views:m,namedViews:y,groups:x,strings:b,settings:E,renderSettings:z,renderEnvironment:A}}function r(h,d,u){const f=[];for(let _=0;_<d.length;_++){const v=h.getTexture(d[_]);if(v){let p=d[_].constructor.name;p=p.substring(12,p.length);const m=o(v,p,u);f.push(m),v.delete()}}return f}function o(h,d,u){const f={type:d},_=u.getEmbeddedFileAsBase64(h.fileName);f.wrapU=h.wrapU,f.wrapV=h.wrapV,f.wrapW=h.wrapW;const v=h.uvwTransform.toFloatArray(!0);return f.repeat=[v[0],v[5]],_?f.image="data:image/png;base64,"+_:(self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: Image for ${d} texture not embedded in file.`,type:"missing resource"}}),f.image=null),f}function a(h,d){const u=h.geometry(),f=h.attributes();let _=u.objectType,v,p,m,y,x;switch(_){case t.ObjectType.Curve:const b=c(u,100);m={},p={},y={},m.itemSize=3,m.type="Float32Array",m.array=[];for(let E=0;E<b.length;E++)m.array.push(b[E][0]),m.array.push(b[E][1]),m.array.push(b[E][2]);p.position=m,y.attributes=p,v={data:y};break;case t.ObjectType.Point:const I=u.location;m={};const C={};p={},y={},m.itemSize=3,m.type="Float32Array",m.array=[I[0],I[1],I[2]];const L=f.drawColor(d);C.itemSize=3,C.type="Float32Array",C.array=[L.r/255,L.g/255,L.b/255],p.position=m,p.color=C,y.attributes=p,v={data:y};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:v=u.toThreejsJSON();break;case t.ObjectType.Brep:const N=u.faces();x=new t.Mesh;for(let E=0;E<N.count;E++){const S=N.get(E),U=S.getMesh(t.MeshType.Any);U&&(x.append(U),U.delete()),S.delete()}x.faces().count>0&&(x.compact(),v=x.toThreejsJSON(),N.delete()),x.delete();break;case t.ObjectType.Extrusion:x=u.getMesh(t.MeshType.Any),x&&(v=x.toThreejsJSON(),x.delete());break;case t.ObjectType.TextDot:v=l(u);break;case t.ObjectType.Light:v=l(u),v.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: No conversion exists for ${_.constructor.name} ${v.lightStyle.name}`,type:"no conversion",guid:f.id}});break;case t.ObjectType.InstanceReference:v=l(u),v.xform=l(u.xform),v.xform.array=u.xform.toFloatArray(!0);break;case t.ObjectType.SubD:u.subdivide(3),x=t.Mesh.createFromSubDControlNet(u,!1),x&&(v=x.toThreejsJSON(),x.delete());break;default:self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: Conversion not implemented for ${_.constructor.name}`,type:"not implemented",guid:f.id}});break}if(v)return p=l(f),p.geometry=l(u),f.groupCount>0&&(p.groupIds=f.getGroupList()),f.userStringCount>0&&(p.userStrings=f.getUserStrings()),u.userStringCount>0&&(p.geometry.userStrings=u.getUserStrings()),f.decals().count>0&&self.postMessage({type:"warning",id:n,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:f.id}}),p.drawColor=f.drawColor(d),_=_.constructor.name,_=_.substring(11,_.length),{geometry:v,attributes:p,objectType:_};self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: ${_.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:f.id}})}function l(h){const d={};for(const u in h){const f=h[u];typeof f!="function"&&(typeof f=="object"&&f!==null&&f.hasOwnProperty("constructor")?d[u]={name:f.constructor.name,value:f.value}:typeof f=="object"&&f!==null?d[u]=l(f):d[u]=f)}return d}function c(h,d){let u=d,f=[];const _=[];if(h instanceof t.LineCurve)return[h.pointAtStart,h.pointAtEnd];if(h instanceof t.PolylineCurve){u=h.pointCount;for(let m=0;m<u;m++)f.push(h.point(m));return f}if(h instanceof t.PolyCurve){const m=h.segmentCount;for(let y=0;y<m;y++){const x=h.segmentCurve(y),b=c(x,u);f=f.concat(b),x.delete()}return f}if(h instanceof t.ArcCurve&&(u=Math.floor(h.angleDegrees/5),u=u<2?2:u),h instanceof t.NurbsCurve&&h.degree===1){const m=h.tryGetPolyline();for(let y=0;y<m.count;y++)f.push(m.get(y));return m.delete(),f}const v=h.domain,p=u-1;for(let m=0;m<u;m++){const y=v[0]+m/p*(v[1]-v[0]);if(y===v[0]||y===v[1]){_.push(y);continue}const x=h.tangentAt(y),b=h.tangentAt(_.slice(-1)[0]),I=x[0]*x[0]+x[1]*x[1]+x[2]*x[2],C=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],L=Math.sqrt(I*C);let N;if(L===0)N=Math.PI/2;else{const E=(x.x*b.x+x.y*b.y+x.z*b.z)/L;N=Math.acos(Math.max(-1,Math.min(1,E)))}N<.1||_.push(y)}return f=_.map(m=>h.pointAt(m)),f}}const On=Object.create(null);On.open="0";On.close="1";On.ping="2";On.pong="3";On.message="4";On.upgrade="5";On.noop="6";const fo=Object.create(null);Object.keys(On).forEach(s=>{fo[On[s]]=s});const tl={type:"error",data:"parser error"},Qu=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ed=typeof ArrayBuffer=="function",td=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Tl=({type:s,data:e},t,n)=>Qu&&e instanceof Blob?t?n(e):Bh(e,n):ed&&(e instanceof ArrayBuffer||td(e))?t?n(e):Bh(new Blob([e]),n):n(On[s]+(e||"")),Bh=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(s)};function Oh(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Oa;function wS(s,e){if(Qu&&s.data instanceof Blob)return s.data.arrayBuffer().then(Oh).then(e);if(ed&&(s.data instanceof ArrayBuffer||td(s.data)))return e(Oh(s.data));Tl(s,!1,t=>{Oa||(Oa=new TextEncoder),e(Oa.encode(t))})}const zh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$s=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<zh.length;s++)$s[zh.charCodeAt(s)]=s;const ES=s=>{let e=s.length*.75,t=s.length,n,i=0,r,o,a,l;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const c=new ArrayBuffer(e),h=new Uint8Array(c);for(n=0;n<t;n+=4)r=$s[s.charCodeAt(n)],o=$s[s.charCodeAt(n+1)],a=$s[s.charCodeAt(n+2)],l=$s[s.charCodeAt(n+3)],h[i++]=r<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|l&63;return c},bS=typeof ArrayBuffer=="function",Al=(s,e)=>{if(typeof s!="string")return{type:"message",data:nd(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:TS(s.substring(1),e)}:fo[t]?s.length>1?{type:fo[t],data:s.substring(1)}:{type:fo[t]}:tl},TS=(s,e)=>{if(bS){const t=ES(s);return nd(t,e)}else return{base64:!0,data:s}},nd=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},id="",AS=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,o)=>{Tl(r,!1,a=>{n[o]=a,++i===t&&e(n.join(id))})})},CS=(s,e)=>{const t=s.split(id),n=[];for(let i=0;i<t.length;i++){const r=Al(t[i],e);if(n.push(r),r.type==="error")break}return n};function RS(){return new TransformStream({transform(s,e){wS(s,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}s.data&&typeof s.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let za;function lo(s){return s.reduce((e,t)=>e+t.length,0)}function co(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=s[0][n++],n===s[0].length&&(s.shift(),n=0);return s.length&&n<s[0].length&&(s[0]=s[0].slice(n)),t}function PS(s,e){za||(za=new TextDecoder);const t=[];let n=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(lo(t)<1)break;const l=co(t,1);r=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(lo(t)<2)break;const l=co(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(lo(t)<8)break;const l=co(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(tl);break}i=h*Math.pow(2,32)+c.getUint32(4),n=3}else{if(lo(t)<i)break;const l=co(t,i);a.enqueue(Al(r?l:za.decode(l),e)),n=0}if(i===0||i>s){a.enqueue(tl);break}}}})}const sd=4;function Lt(s){if(s)return LS(s)}function LS(s){for(var e in Lt.prototype)s[e]=Lt.prototype[e];return s}Lt.prototype.on=Lt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};Lt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};Lt.prototype.off=Lt.prototype.removeListener=Lt.prototype.removeAllListeners=Lt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};Lt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};Lt.prototype.emitReserved=Lt.prototype.emit;Lt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};Lt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const ko=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),hn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),IS="arraybuffer";function rd(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const NS=hn.setTimeout,DS=hn.clearTimeout;function Ho(s,e){e.useNativeTimers?(s.setTimeoutFn=NS.bind(hn),s.clearTimeoutFn=DS.bind(hn)):(s.setTimeoutFn=hn.setTimeout.bind(hn),s.clearTimeoutFn=hn.clearTimeout.bind(hn))}const US=1.33;function FS(s){return typeof s=="string"?BS(s):Math.ceil((s.byteLength||s.size)*US)}function BS(s){let e=0,t=0;for(let n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function od(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function OS(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function zS(s){let e={},t=s.split("&");for(let n=0,i=t.length;n<i;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class kS extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Cl extends Lt{constructor(e){super(),this.writable=!1,Ho(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new kS(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Al(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=OS(e);return t.length?"?"+t:""}}class HS extends Cl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};CS(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,AS(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=od()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let ad=!1;try{ad=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const VS=ad;function GS(){}class WS extends HS{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let ys=class po extends Lt{constructor(e,t,n){super(),this.createRequest=e,Ho(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=rd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=po.requestsCount++,po.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=GS,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete po.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};ys.requestsCount=0;ys.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",kh);else if(typeof addEventListener=="function"){const s="onpagehide"in hn?"pagehide":"unload";addEventListener(s,kh,!1)}}function kh(){for(let s in ys.requests)ys.requests.hasOwnProperty(s)&&ys.requests[s].abort()}const qS=function(){const s=ld({xdomain:!1});return s&&s.responseType!==null}();class XS extends WS{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=qS&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ys(ld,this.uri(),e)}}function ld(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||VS))return new XMLHttpRequest}catch{}if(!e)try{return new hn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const cd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class YS extends Cl{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=cd?{}:rd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Tl(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}i&&ko(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=od()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const ka=hn.WebSocket||hn.MozWebSocket;class jS extends YS{createSocket(e,t,n){return cd?new ka(e,t,n):t?new ka(e,t):new ka(e)}doWrite(e,t){this.ws.send(t)}}class ZS extends Cl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=PS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=RS();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then(()=>{i&&ko(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const $S={websocket:jS,webtransport:ZS,polling:XS},KS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,JS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function nl(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),n=s.indexOf("]");t!=-1&&n!=-1&&(s=s.substring(0,t)+s.substring(t,n).replace(/:/g,";")+s.substring(n,s.length));let i=KS.exec(s||""),r={},o=14;for(;o--;)r[JS[o]]=i[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=QS(r,r.path),r.queryKey=eM(r,r.query),r}function QS(s,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function eM(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}const il=typeof addEventListener=="function"&&typeof removeEventListener=="function",mo=[];il&&addEventListener("offline",()=>{mo.forEach(s=>s())},!1);class vi extends Lt{constructor(e,t){if(super(),this.binaryType=IS,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=nl(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=nl(t.host).host);Ho(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=zS(this.opts.query)),il&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},mo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=sd,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&vi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",vi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=FS(i)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ko(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(vi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),il&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=mo.indexOf(this._offlineEventListener);n!==-1&&mo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}vi.protocol=sd;class tM extends vi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;vi.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;vi.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){n||(n=!0,h(),t.close(),t=null)}const o=d=>{const u=new Error("probe error: "+d);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function l(){o("socket closed")}function c(d){t&&d.name!==t.name&&r()}const h=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let nM=class extends tM{constructor(e,t={}){const n=typeof e=="object"?e:t;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>$S[i]).filter(i=>!!i)),super(e,n)}};function iM(s,e="",t){let n=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),n=nl(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const sM=typeof ArrayBuffer=="function",rM=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,hd=Object.prototype.toString,oM=typeof Blob=="function"||typeof Blob<"u"&&hd.call(Blob)==="[object BlobConstructor]",aM=typeof File=="function"||typeof File<"u"&&hd.call(File)==="[object FileConstructor]";function Rl(s){return sM&&(s instanceof ArrayBuffer||rM(s))||oM&&s instanceof Blob||aM&&s instanceof File}function go(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(go(s[t]))return!0;return!1}if(Rl(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return go(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&go(s[t]))return!0;return!1}function lM(s){const e=[],t=s.data,n=s;return n.data=sl(t,e),n.attachments=e.length,{packet:n,buffers:e}}function sl(s,e){if(!s)return s;if(Rl(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=sl(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=sl(s[n],e));return t}return s}function cM(s,e){return s.data=rl(s.data,e),delete s.attachments,s}function rl(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=rl(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=rl(s[t],e));return s}const hM=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],uM=5;var Qe;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Qe||(Qe={}));class dM{constructor(e){this.replacer=e}encode(e){return(e.type===Qe.EVENT||e.type===Qe.ACK)&&go(e)?this.encodeAsBinary({type:e.type===Qe.EVENT?Qe.BINARY_EVENT:Qe.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Qe.BINARY_EVENT||e.type===Qe.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=lM(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function Hh(s){return Object.prototype.toString.call(s)==="[object Object]"}class Pl extends Lt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Qe.BINARY_EVENT;n||t.type===Qe.BINARY_ACK?(t.type=n?Qe.EVENT:Qe.ACK,this.reconstructor=new fM(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Rl(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Qe[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Qe.BINARY_EVENT||n.type===Qe.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(Pl.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Qe.CONNECT:return Hh(t);case Qe.DISCONNECT:return t===void 0;case Qe.CONNECT_ERROR:return typeof t=="string"||Hh(t);case Qe.EVENT:case Qe.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&hM.indexOf(t[0])===-1);case Qe.ACK:case Qe.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class fM{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=cM(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const pM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Pl,Encoder:dM,get PacketType(){return Qe},protocol:uM},Symbol.toStringTag,{value:"Module"}));function vn(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const mM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ud extends Lt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[vn(e,"open",this.onopen.bind(this)),vn(e,"packet",this.onpacket.bind(this)),vn(e,"error",this.onerror.bind(this)),vn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,r;if(mM.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:Qe.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,d=t.pop();this._registerAckCallback(h,d),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,i)=>{const r=(o,a)=>o?i(o):n(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Qe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Qe.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Qe.EVENT:case Qe.BINARY_EVENT:this.onevent(e);break;case Qe.ACK:case Qe.BINARY_ACK:this.onack(e);break;case Qe.DISCONNECT:this.ondisconnect();break;case Qe.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:Qe.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Qe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Ns(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Ns.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=Math.floor(e*10)&1?s+t:s-t}return Math.min(s,this.max)|0};Ns.prototype.reset=function(){this.attempts=0};Ns.prototype.setMin=function(s){this.ms=s};Ns.prototype.setMax=function(s){this.max=s};Ns.prototype.setJitter=function(s){this.jitter=s};class ol extends Lt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ho(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ns({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||pM;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new nM(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=vn(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=vn(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(vn(e,"ping",this.onping.bind(this)),vn(e,"data",this.ondata.bind(this)),vn(e,"error",this.onerror.bind(this)),vn(e,"close",this.onclose.bind(this)),vn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){ko(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ud(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const js={};function _o(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=iM(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,o=js[i]&&r in js[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new ol(n,e):(js[i]||(js[i]=new ol(n,e)),l=js[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(_o,{Manager:ol,Socket:ud,io:_o,connect:_o});const gM=_o.connect("localhost:3000");gM.on("connect",()=>{console.log("Successfully connected!")});new Vx(Tn,An);const dd=tr();document.body.appendChild(dd.dom);let Vo=new Ei("playerMaterial"),cr=new Ei("wallMaterial"),Ll=new Ei("groundMaterial"),Go=new Ei("stairsMaterial"),_M=new Gi(Vo,Ll,{friction:1,restitution:0}),vM=new Gi(Vo,Go,{friction:1,restitution:0}),yM=new Gi(Vo,cr,{friction:0,restitution:0});An.addContactMaterial(vM);An.addContactMaterial(_M);An.addContactMaterial(yM);let ct=new Ae({mass:1,shape:new Wu(2.5),position:new w(0,2.5,150),material:Vo});ct.angularDamping=1;ct.linearDamping=.99;An.addBody(ct);let xM=new w(0,12,0),SM=qu().threeMesh,fd=qu().cannonBody;const Wo=new Nu().load("assets/stacked-stones.jpg");Wo.wrapS=ki;Wo.wrapT=ki;Wo.repeat.set(50,50);SM.material=new Oo({map:Wo,side:sn});fd.material=Ll;An.addBody(fd);let qo=.01;const hr=new SS;hr.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");hr.load("assets/land.3dm",function(s){s.rotation.x=-Math.PI/2,s.position.y=46,Tn.add(s);let e=new ri().setFromObject(s,!1),t=new W;e.getCenter(t),s.traverse(n=>{if(n.isMesh){n.material.metalness=0,n.material.side=0,n.recieveShadow=!0,n.castShadow=!0;let i=n.geometry.attributes.position.array;for(let c=0;c<i.length;c++)i[c]=i[c]*qo;let r=n.geometry.index.array,o=new Vi(i,r),a=new Ae({mass:0});n.material.name=="Paint"?a.material=Go:a.material=cr,a.collisionResponse=!0,a.addShape(o);let l=new pt;l.setFromAxisAngle(new w(1,0,0),-Math.PI/2),a.quaternion=l,An.addBody(a)}})},function(s){},function(s){console.log(s)});hr.load("assets/baken_mesh_color-var1.3dm",function(s){s.rotation.x=-Math.PI/2,Tn.add(s);let e=new ri().setFromObject(s,!1),t=new W;e.getCenter(t),s.traverse(n=>{if(n.isMesh){n.material.metalness=0,n.material.side=0,n.recieveShadow=!0,n.castShadow=!0;let i=n.geometry.attributes.position.array;for(let c=0;c<i.length;c++)i[c]=i[c]*qo;let r=n.geometry.index.array,o=new Vi(i,r),a=new Ae({mass:0});n.material.name=="Paint"?a.material=Go:a.material=cr,a.collisionResponse=!0,a.addShape(o);let l=new pt;l.setFromAxisAngle(new w(1,0,0),-Math.PI/2),a.quaternion=l,An.addBody(a)}})},function(s){},function(s){console.log(s)});hr.load("assets/net.3dm",function(s){s.rotation.x=-Math.PI/2,s.position.x=150;var e=0;Tn.add(s);let t=new ri().setFromObject(s,!1),n=new W;t.getCenter(n),s.traverse(i=>{if(i.isMesh){e++,i.material.metalness=0,i.material.side=2,i.recieveShadow=!0,i.castShadow=!0;let r=i.geometry.attributes.position.array;for(let h=0;h<r.length;h++)r[h]=r[h]*qo;let o=i.geometry.index.array,a=new Vi(r,o),l=new Ae({mass:0});i.material.name=="Paint"?l.material=Go:l.material=cr,l.collisionResponse=!0,l.addShape(a);let c=new pt;c.setFromAxisAngle(new w(1,0,0),-Math.PI/2),l.quaternion=c,l.position=new w(150,0,0),An.addBody(l)}}),console.log(e)},function(s){},function(s){console.log(s)});hr.load("assets/byReduced.3dm",function(s){s.rotation.x=-Math.PI/2,s.position.x=-200,s.position.y=0,Tn.add(s);let e=new ri().setFromObject(s,!1),t=new W;e.getCenter(t);let n=0;s.traverse(i=>{if(i.isMesh){n++,i.material.metalness=0,i.material.side=0,i.recieveShadow=!0,i.castShadow=!0;let r=i.geometry.attributes.position.array;for(let h=0;h<r.length;h++)r[h]=r[h]*qo;let o=i.geometry.index.array,a=new Vi(r,o),l=new Ae({mass:0});n<1295?l.material=cr:l.material=Ll,l.collisionResponse=!0,l.addShape(a);let c=new pt;c.setFromAxisAngle(new w(1,0,0),-Math.PI/2),l.quaternion=c,l.position=new w(-200,0,0),(n<1295||n==1493)&&An.addBody(l)}}),console.log(n)},function(s){},function(s){console.log(s)});document.body.onclick=()=>{document.pointerLockElement!==document.body&&document.body.requestPointerLock()};let Vh=0,Ha=0,cn=new pt;document.addEventListener("mousemove",s=>{if(document.pointerLockElement===document.body){const e=s.movementX*5e-4,t=s.movementY*5e-4;Vh+=-e*8,Ha=EM(Ha+-t*5,-Math.PI/3,Math.PI/3),cn.setFromAxisAngle(new w(0,1,0),Vh);let n=new pt;n.setFromAxisAngle(new w(1,0,0),Ha);let i=new pt(0,0,0,0);i=cn.mult(n),wi.quaternion.copy(i)}});const Gh=document.getElementById("instructions");document.addEventListener("pointerlockchange",s=>{document.pointerLockElement===document.body?Gh.style.display="none":Gh.style.display=""});let Ro,Po,Lo,Io,No,Il,vo,al=!1;document.addEventListener("keydown",s=>{document.pointerLockElement===document.body&&((s.keyCode==87||s.keyCode==38)&&(Ro=!0),(s.keyCode==83||s.keyCode==40)&&(Po=!0),(s.keyCode==65||s.keyCode==37)&&(Lo=!0),(s.keyCode==68||s.keyCode==39)&&(Io=!0),s.keyCode==32&&(No=!0),s.keyCode==16&&(Il=!0),s.keyCode==70&&(vo=!vo,vo?(ct.mass=0,ct.collisionFilterGroup=0,ct.velocity=new w(0,0,0)):(ct.mass=1,ct.collisionFilterGroup=1)))});document.addEventListener("keyup",s=>{(s.keyCode==87||s.keyCode==38)&&(Ro=!1),(s.keyCode==83||s.keyCode==40)&&(Po=!1),(s.keyCode==65||s.keyCode==37)&&(Lo=!1),(s.keyCode==68||s.keyCode==39)&&(Io=!1),s.keyCode==32&&(No=!1),s.keyCode==16&&(Il=!1)});const Va=new w,MM=new w(0,1,0);ct.addEventListener("collide",function(s){const{contact:e}=s;e.bi.id===ct.id?e.ni.negate(Va):Va.copy(e.ni),Va.dot(MM)>.5&&(al=!0)});function wM(s){let e=1e5*s,t;vo?(Ro&&(t=new w(0,0,-1),t=In(t,cn),ct.position=ct.position.vadd(t)),Po&&(t=new w(0,0,1),t=In(t,cn),ct.position=ct.position.vadd(t)),Lo&&(t=new w(-1,0,0),t=In(t,cn),ct.position=ct.position.vadd(t)),Io&&(t=new w(1,0,0),t=In(t,cn),ct.position=ct.position.vadd(t)),No&&(t=new w(0,1,0),t=In(t,cn),ct.position=ct.position.vadd(t)),Il&&(t=new w(0,-1,0),t=In(t,cn),ct.position=ct.position.vadd(t))):(Ro&&(t=new w(-e,0,0),t=In(t,cn),ct.applyTorque(t)),Po&&(t=new w(e,0,0),t=In(t,cn),ct.applyTorque(t)),Lo&&(t=new w(0,0,e),t=In(t,cn),ct.applyTorque(t)),Io&&(t=new w(0,0,-e),t=In(t,cn),ct.applyTorque(t)),No&&al&&(al=!1,t=new w(0,5e3,0),ct.linearDamping=.49,ct.applyForce(t)))}function EM(s,e,t){return Math.min(Math.max(s,e),t)}function In(s,e){const t=s.x,n=s.y,i=s.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,d=l*i+r*n-o*t,u=-r*t-o*n-a*i;return s.x=c*l+u*-r+h*-a-d*-o,s.y=h*l+u*-o+d*-r-c*-a,s.z=d*l+u*-a+c*-o-h*-r,s}function bM(){wi.position.copy(ct.position.vadd(xM))}new w(0,-500,0);let Wh=1.5;var TM=new Uu,qh;pd();function pd(){requestAnimationFrame(pd),qh=TM.getDelta(),An.fixedStep(),wM(qh),ct.position.y-Wh,Wh=ct.position.y,bM(),si.render(Tn,wi),dd.update()}
