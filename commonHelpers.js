var q=Object.defineProperty;var j=(s,t,e)=>t in s?q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(j(s,typeof t!="symbol"?t+"":t,e),e);import"./assets/vendor-6837a909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".header__dropdown"),t=document.querySelector(".header__menu"),e=document.querySelector(".header__arrow");s.addEventListener("click",function(n){n.stopPropagation(),s.classList.toggle("active"),e.classList.toggle("rotated")}),document.addEventListener("click",function(n){!s.contains(n.target)&&!t.contains(n.target)&&(s.classList.remove("active"),e.classList.remove("rotated"))})});function D(){const s=document.getElementById("slider_checkbox"),t=document.querySelector(".header__logo img");s.checked?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),document.querySelector("header").classList.remove("light-theme"),document.querySelector("header").classList.add("dark-theme"),t.src="./img/Header-logo-dark.svg"):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),document.querySelector("header").classList.remove("dark-theme"),document.querySelector("header").classList.add("light-theme"),t.src="./img/Header-logo.svg")}document.getElementById("slider_checkbox").addEventListener("change",D);let W=document.getElementById("firstInp"),U=document.getElementById("secondInp");document.querySelector(".ul-calc");let Y=document.querySelectorAll(".button-calc");document.getElementById("equal");let b=document.getElementById("result");document.getElementById("title-calc");document.querySelectorAll(".input-calc");document.querySelector(".container-calc");b.textContent="Результат";document.addEventListener("DOMContentLoaded",()=>{Y.forEach(s=>{s.addEventListener("click",()=>{let t=parseFloat(W.value),e=parseFloat(U.value),n=s.getAttribute("data-operator"),i;switch(n){case"+":i=t+e;break;case"-":i=t-e;break;case"*":i=t*e;break;case"/":e===0?alert("На нуль ділити не можна!"):i=t/e;break;default:i="Invalid operator";break}b.textContent=i})})});class F{constructor(t,e,n,i,a,r){c(this,"WALK_ANIMATION_TIMER",200);c(this,"walkAnimationTimer",this.WALK_ANIMATION_TIMER);c(this,"dinoRunImages",[]);c(this,"jumpPressed",!1);c(this,"jumpInProgress",!1);c(this,"falling",!1);c(this,"JUMP_SPEED",.6);c(this,"GRAVITY",.4);c(this,"touchstart",()=>{this.jumpPressed=!0});c(this,"touchend",()=>{this.jumpPressed=!1});c(this,"keydown",t=>{t.code==="Space"&&(this.jumpPressed=!0)});c(this,"keyup",t=>{t.code==="Space"&&(this.jumpPressed=!1)});this.ctx=t,this.canvas=t.canvas,this.width=e,this.height=n,this.minJumpHeight=i,this.maxJumpHeight=a,this.scaleRatio=r,this.x=10*r,this.y=this.canvas.height-this.height-1.5*r,this.yStandingPosition=this.y,this.standingStillImage=new Image,this.standingStillImage.src="img/standing_still.png",this.image=this.standingStillImage;const m=new Image;m.src="img/dino_run1.png";const y=new Image;y.src="img/dino_run2.png",this.dinoRunImages.push(m),this.dinoRunImages.push(y),window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),window.removeEventListener("touchstart",this.touchstart),window.removeEventListener("touchend",this.touchend),window.addEventListener("touchstart",this.touchstart),window.addEventListener("touchend",this.touchend)}update(t,e){this.run(t,e),this.jumpInProgress&&(this.image=this.standingStillImage),this.jump(e)}jump(t){this.jumpPressed&&(this.jumpInProgress=!0),this.jumpInProgress&&!this.falling?this.y>this.canvas.height-this.minJumpHeight||this.y>this.canvas.height-this.maxJumpHeight&&this.jumpPressed?this.y-=this.JUMP_SPEED*t*this.scaleRatio:this.falling=!0:this.y<this.yStandingPosition?(this.y+=this.GRAVITY*t*this.scaleRatio,this.y+this.height>this.canvas.height&&(this.y=this.yStandingPosition)):(this.falling=!1,this.jumpInProgress=!1)}run(t,e){this.walkAnimationTimer<=0&&(this.image===this.dinoRunImages[0]?this.image=this.dinoRunImages[1]:this.image=this.dinoRunImages[0],this.walkAnimationTimer=this.WALK_ANIMATION_TIMER),this.walkAnimationTimer-=e*t}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}}class J{constructor(t,e,n,i,a){this.ctx=t,this.canvas=t.canvas,this.width=e,this.height=n,this.speed=i,this.scaleRatio=a,this.x=0,this.y=this.canvas.height-this.height,this.groundImage=new Image,this.groundImage.src="img/ground.png"}update(t,e){this.x-=t*e*this.speed*this.scaleRatio}draw(){this.ctx.drawImage(this.groundImage,this.x,this.y,this.width,this.height),this.ctx.drawImage(this.groundImage,this.x+this.width,this.y,this.width,this.height),this.x<-this.width&&(this.x=0)}reset(){this.x=0}}class V{constructor(t,e,n,i,a,r){this.ctx=t,this.x=e,this.y=n,this.width=i,this.height=a,this.image=r}update(t,e,n,i){this.x-=t*e*n*i}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}collideWith(t){return t.x<this.x+this.width/1.4&&t.x+t.width/1.4>this.x&&t.y<this.y+this.height/1.4&&t.height+t.y/1.4>this.y}}class ${constructor(t,e,n,i){c(this,"CACTUS_INTERVAL_MIN",500);c(this,"CACTUS_INTERVAL_MAX",2e3);c(this,"nextCactusInterval",null);c(this,"cacti",[]);this.ctx=t,this.canvas=t.canvas,this.cactiImages=e,this.scaleRatio=n,this.speed=i,this.setNextCactusTime()}setNextCactusTime(){const t=this.getRandomNumber(this.CACTUS_INTERVAL_MIN,this.CACTUS_INTERVAL_MAX);this.nextCactusInterval=t}getRandomNumber(t,e){return Math.floor(Math.random()*(e-t+1)+t)}createCactus(){const t=this.getRandomNumber(0,this.cactiImages.length-1),e=this.cactiImages[t],n=this.canvas.width*1.5,i=this.canvas.height-e.height,a=new V(this.ctx,n,i,e.width,e.height,e.image);this.cacti.push(a)}update(t,e){this.nextCactusInterval<=0&&(this.createCactus(),this.setNextCactusTime()),this.nextCactusInterval-=e,this.cacti.forEach(n=>{n.update(this.speed,t,e,this.scaleRatio)}),this.cacti=this.cacti.filter(n=>n.x>-n.width)}draw(){this.cacti.forEach(t=>t.draw())}collideWith(t){return this.cacti.some(e=>e.collideWith(t))}reset(){this.cacti=[]}}class K{constructor(t,e){c(this,"score",0);c(this,"HIGH_SCORE_KEY","highScore");this.ctx=t,this.canvas=t.canvas,this.scaleRatio=e}update(t){this.score+=t*.01}reset(){this.score=0}setHighScore(){const t=Number(localStorage.getItem(this.HIGH_SCORE_KEY));this.score>t&&localStorage.setItem(this.HIGH_SCORE_KEY,Math.floor(this.score))}draw(){const t=Number(localStorage.getItem(this.HIGH_SCORE_KEY)),e=20*this.scaleRatio,n=20*this.scaleRatio;this.ctx.font=`${n}px serif`,this.ctx.fillStyle="#525250";const i=this.canvas.width-75*this.scaleRatio,a=i-125*this.scaleRatio,r=Math.floor(this.score).toString().padStart(6,0),m=t.toString().padStart(6,0);this.ctx.fillText(r,i,e),this.ctx.fillText(`HI ${m}`,a,e)}}const u=document.getElementById("game"),l=u.getContext("2d"),B=1,z=1e-5,C=800,L=200,X=88/1.5,Z=94/1.5,Q=L,tt=150,et=2400,st=24,k=.5,it=[{width:48/1.5,height:100/1.5,image:"img/cactus_1.png"},{width:98/1.5,height:100/1.5,image:"img/cactus_2.png"},{width:68/1.5,height:70/1.5,image:"img/cactus_3.png"}];let S=null,_=null,p=null,I=null,h=null,v=null,E=B,w=!1,R=!1,M=!0;function nt(){const s=X*h,t=Z*h,e=tt*h,n=Q*h,i=et*h,a=st*h;S=new F(l,s,t,e,n,h),_=new J(l,i,a,k,h);const r=it.map(m=>{const y=new Image;return y.src=m.image,{image:y,width:m.width*h,height:m.height*h}});p=new $(l,r,h,k),I=new K(l,h)}function N(){h=ot(),u.width=C*h,u.height=L*h,nt()}N();window.addEventListener("resize",()=>setTimeout(N,500));screen.orientation&&screen.orientation.addEventListener("change",N);function ot(){const s=Math.min(window.innerHeight,document.documentElement.clientHeight),t=Math.min(window.innerWidth,document.documentElement.clientWidth);return t/s<C/L?t/C:s/L}function at(){const s=70*h;l.font=`${s}px Montserrat Alternates `,l.fillStyle="grey";const t=u.width/4.5,e=u.height/2;l.fillText("GAME OVER",t,e)}function ct(){R||(R=!0,setTimeout(()=>{window.addEventListener("keyup",A,{once:!0}),window.addEventListener("touchstart",A,{once:!0})},1e3))}function A(){R=!1,w=!1,M=!1,_.reset(),p.reset(),I.reset(),E=B}function rt(){const s=40*h;l.font=`${s}px Montserrat Alternates`,l.fillStyle="grey";const t=u.width/14,e=u.height/2;l.fillText("Tap Screen or Press Space To Start",t,e)}function ht(s){E+=s*z}//!!
function dt(){l.fillStyle="white",l.fillRect(0,0,u.width,u.height)}function T(s){if(v===null){v=s,requestAnimationFrame(T);return}const t=s-v;v=s,dt(),!w&&!M&&(_.update(E,t),p.update(E,t),S.update(E,t),I.update(t),ht(t)),!w&&p.collideWith(S)&&(w=!0,ct(),I.setHighScore()),_.draw(),p.draw(),S.draw(),I.draw(),w&&at(),M&&rt(),requestAnimationFrame(T)}requestAnimationFrame(T);window.addEventListener("keyup",A,{once:!0});window.addEventListener("touchstart",A,{once:!0});const d=document.getElementById("gameCanvas"),x=d.getContext("2d"),lt=document.getElementById("score"),o={x:80,y:d.height/2,width:70,height:70,following:!1,image:new Image};o.image.src="img/football (1) 1.png";const g={x:d.width-60,y:d.height/2-30,width:50,height:60};let H=0;d.addEventListener("mousedown",s=>{const{offsetX:t,offsetY:e}=s;t>=o.x&&t<=o.x+o.width&&e>=o.y&&e<=o.y+o.height&&(o.following=!0)});d.addEventListener("mousemove",s=>{o.following&&(o.x=s.offsetX-o.width/2,o.y=s.offsetY-o.height/2)});d.addEventListener("mouseup",()=>{o.x>=g.x&&o.x<=g.x+g.width&&o.y>=g.y&&o.y<=g.y+g.height&&(H++,lt.textContent="Голи: "+H,o.x=80,o.y=d.height/2),o.following=!1});function G(){x.clearRect(0,0,d.width,d.height),x.fillStyle="#4CAF50",x.fillRect(0,0,d.width,d.height),x.drawImage(o.image,o.x,o.y,o.width,o.height),(o.x<=0||o.x+o.width>=d.width)&&(o.x=Math.random()*(d.width-o.width),o.y=Math.random()*(d.height-o.height)),requestAnimationFrame(G)}G();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".input-footer"),t=document.querySelector(".js-footer-btn"),e=document.getElementById("modal"),n=document.querySelector(".close-modal");t.addEventListener("click",function(i){i.preventDefault();let a=s.value.trim();a===""?(alert("Будь ласка, введіть email!"),s.focus()):/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)?(e.style.display="flex",s.value=""):(alert("Будь ласка, введіть коректний email!"),s.focus())}),n.addEventListener("click",function(){e.style.display="none"}),window.addEventListener("click",function(i){i.target===e&&(e.style.display="none")})});const P=document.querySelector(".guessTheNumber__input"),f=document.querySelector(".guessTheNumber__result"),O=document.querySelector(".guessTheNumber__btn--input");console.log(O);O.addEventListener("click",s=>{const t=Math.floor(Math.random()*10)+1;+P.value>10?(f.textContent="Потрібно ввести число від 1 до 10",f.style.color="#000"):+P.value===t?(f.textContent=`Вітаю, ви вгадали число! ${t} `,f.style.color="green"):(f.textContent=`Ви програли, комп’ютер загадав ${t}. `,f.style.color="red")});document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("myModal"),t=document.getElementById("closeModalBtn"),e=document.getElementById("saveModalBtn"),n=document.getElementById("userInput"),i=document.getElementById("userName");s.classList.remove("hidden");function a(){s.classList.add("hidden")}t.addEventListener("click",a),e.addEventListener("click",function(){const r=n.value.trim();r!==""&&(i.textContent=r,a())})});function ut(s){return s%4===0&&s%100!==0||s%400===0}document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("input"),t=document.getElementById("output");document.getElementById("check").addEventListener("click",function(){const n=s.value.trim(),i=parseInt(n,10);if(isNaN(i))t.textContent="Будь ласка, введіть коректний рік!",t.style.color="#000";else if(i<1900){t.textContent="Будь ласка, введіть свого народження!",t.style.color="#000";return}else ut(i)?(t.textContent="Ви народилися у високосний рік!",t.style.color="#039900"):(t.textContent="Ви народилися не у високосний рік!",t.style.color="#900")})});document.getElementById("input").addEventListener("input",function(){const s=this,t=document.getElementById("error-message");s.value>2025||s.value<1?t.style.display="block":t.style.display="none"});
//# sourceMappingURL=commonHelpers.js.map
