var O=Object.defineProperty;var j=(i,t,e)=>t in i?O(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>(j(i,typeof t!="symbol"?t+"":t,e),e);import"./assets/vendor-6837a909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".header__dropdown"),t=document.querySelector(".header__menu");i.addEventListener("click",function(e){e.stopPropagation(),i.classList.toggle("active")}),document.addEventListener("click",function(e){!i.contains(e.target)&&!t.contains(e.target)&&i.classList.remove("active")})});function W(){const i=document.getElementById("slider_checkbox"),t=document.body,e=document.querySelector("header");i.checked?(t.classList.remove("light-theme"),t.classList.add("dark-theme"),e.classList.remove("light-theme"),e.classList.add("dark-theme")):(t.classList.remove("dark-theme"),t.classList.add("light-theme"),e.classList.remove("dark-theme"),e.classList.add("light-theme"))}document.getElementById("slider_checkbox").addEventListener("change",W);class D{constructor(t,e,o,s,a,r){h(this,"WALK_ANIMATION_TIMER",200);h(this,"walkAnimationTimer",this.WALK_ANIMATION_TIMER);h(this,"dinoRunImages",[]);h(this,"jumpPressed",!1);h(this,"jumpInProgress",!1);h(this,"falling",!1);h(this,"JUMP_SPEED",.6);h(this,"GRAVITY",.4);h(this,"touchstart",()=>{this.jumpPressed=!0});h(this,"touchend",()=>{this.jumpPressed=!1});h(this,"keydown",t=>{t.code==="Space"&&(this.jumpPressed=!0)});h(this,"keyup",t=>{t.code==="Space"&&(this.jumpPressed=!1)});this.ctx=t,this.canvas=t.canvas,this.width=e,this.height=o,this.minJumpHeight=s,this.maxJumpHeight=a,this.scaleRatio=r,this.x=10*r,this.y=this.canvas.height-this.height-1.5*r,this.yStandingPosition=this.y,this.standingStillImage=new Image,this.standingStillImage.src="../img/standing_still.png",this.image=this.standingStillImage;const m=new Image;m.src="../img/dino_run1.png";const w=new Image;w.src="../img/dino_run2.png",this.dinoRunImages.push(m),this.dinoRunImages.push(w),window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),window.removeEventListener("touchstart",this.touchstart),window.removeEventListener("touchend",this.touchend),window.addEventListener("touchstart",this.touchstart),window.addEventListener("touchend",this.touchend)}update(t,e){this.run(t,e),this.jumpInProgress&&(this.image=this.standingStillImage),this.jump(e)}jump(t){this.jumpPressed&&(this.jumpInProgress=!0),this.jumpInProgress&&!this.falling?this.y>this.canvas.height-this.minJumpHeight||this.y>this.canvas.height-this.maxJumpHeight&&this.jumpPressed?this.y-=this.JUMP_SPEED*t*this.scaleRatio:this.falling=!0:this.y<this.yStandingPosition?(this.y+=this.GRAVITY*t*this.scaleRatio,this.y+this.height>this.canvas.height&&(this.y=this.yStandingPosition)):(this.falling=!1,this.jumpInProgress=!1)}run(t,e){this.walkAnimationTimer<=0&&(this.image===this.dinoRunImages[0]?this.image=this.dinoRunImages[1]:this.image=this.dinoRunImages[0],this.walkAnimationTimer=this.WALK_ANIMATION_TIMER),this.walkAnimationTimer-=e*t}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}}class U{constructor(t,e,o,s,a){this.ctx=t,this.canvas=t.canvas,this.width=e,this.height=o,this.speed=s,this.scaleRatio=a,this.x=0,this.y=this.canvas.height-this.height,this.groundImage=new Image,this.groundImage.src="../img/ground.png"}update(t,e){this.x-=t*e*this.speed*this.scaleRatio}draw(){this.ctx.drawImage(this.groundImage,this.x,this.y,this.width,this.height),this.ctx.drawImage(this.groundImage,this.x+this.width,this.y,this.width,this.height),this.x<-this.width&&(this.x=0)}reset(){this.x=0}}class q{constructor(t,e,o,s,a,r){this.ctx=t,this.x=e,this.y=o,this.width=s,this.height=a,this.image=r}update(t,e,o,s){this.x-=t*e*o*s}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}collideWith(t){return t.x<this.x+this.width/1.4&&t.x+t.width/1.4>this.x&&t.y<this.y+this.height/1.4&&t.height+t.y/1.4>this.y}}class Y{constructor(t,e,o,s){h(this,"CACTUS_INTERVAL_MIN",500);h(this,"CACTUS_INTERVAL_MAX",2e3);h(this,"nextCactusInterval",null);h(this,"cacti",[]);this.ctx=t,this.canvas=t.canvas,this.cactiImages=e,this.scaleRatio=o,this.speed=s,this.setNextCactusTime()}setNextCactusTime(){const t=this.getRandomNumber(this.CACTUS_INTERVAL_MIN,this.CACTUS_INTERVAL_MAX);this.nextCactusInterval=t}getRandomNumber(t,e){return Math.floor(Math.random()*(e-t+1)+t)}createCactus(){const t=this.getRandomNumber(0,this.cactiImages.length-1),e=this.cactiImages[t],o=this.canvas.width*1.5,s=this.canvas.height-e.height,a=new q(this.ctx,o,s,e.width,e.height,e.image);this.cacti.push(a)}update(t,e){this.nextCactusInterval<=0&&(this.createCactus(),this.setNextCactusTime()),this.nextCactusInterval-=e,this.cacti.forEach(o=>{o.update(this.speed,t,e,this.scaleRatio)}),this.cacti=this.cacti.filter(o=>o.x>-o.width)}draw(){this.cacti.forEach(t=>t.draw())}collideWith(t){return this.cacti.some(e=>e.collideWith(t))}reset(){this.cacti=[]}}class J{constructor(t,e){h(this,"score",0);h(this,"HIGH_SCORE_KEY","highScore");this.ctx=t,this.canvas=t.canvas,this.scaleRatio=e}update(t){this.score+=t*.01}reset(){this.score=0}setHighScore(){const t=Number(localStorage.getItem(this.HIGH_SCORE_KEY));this.score>t&&localStorage.setItem(this.HIGH_SCORE_KEY,Math.floor(this.score))}draw(){const t=Number(localStorage.getItem(this.HIGH_SCORE_KEY)),e=20*this.scaleRatio,o=20*this.scaleRatio;this.ctx.font=`${o}px serif`,this.ctx.fillStyle="#525250";const s=this.canvas.width-75*this.scaleRatio,a=s-125*this.scaleRatio,r=Math.floor(this.score).toString().padStart(6,0),m=t.toString().padStart(6,0);this.ctx.fillText(r,s,e),this.ctx.fillText(`HI ${m}`,a,e)}}const u=document.getElementById("game"),l=u.getContext("2d"),k=1,$=1e-5,T=800,L=200,F=88/1.5,K=94/1.5,V=L,X=150,z=2400,Q=24,H=.5,Z=[{width:48/1.5,height:100/1.5,image:"../img/cactus_1.png"},{width:98/1.5,height:100/1.5,image:"../img/cactus_2.png"},{width:68/1.5,height:70/1.5,image:"../img/cactus_3.png"}];let S=null,_=null,p=null,I=null,c=null,x=null,E=k,y=!1,C=!1,A=!0;function tt(){const i=F*c,t=K*c,e=X*c,o=V*c,s=z*c,a=Q*c;S=new D(l,i,t,e,o,c),_=new U(l,s,a,H,c);const r=Z.map(m=>{const w=new Image;return w.src=m.image,{image:w,width:m.width*c,height:m.height*c}});p=new Y(l,r,c,H),I=new J(l,c)}function N(){c=et(),u.width=T*c,u.height=L*c,tt()}N();window.addEventListener("resize",()=>setTimeout(N,500));screen.orientation&&screen.orientation.addEventListener("change",N);function et(){const i=Math.min(window.innerHeight,document.documentElement.clientHeight),t=Math.min(window.innerWidth,document.documentElement.clientWidth);return t/i<T/L?t/T:i/L}function it(){const i=70*c;l.font=`${i}px Montserrat Alternates `,l.fillStyle="grey";const t=u.width/4.5,e=u.height/2;l.fillText("GAME OVER",t,e)}function st(){C||(C=!0,setTimeout(()=>{window.addEventListener("keyup",R,{once:!0}),window.addEventListener("touchstart",R,{once:!0})},1e3))}function R(){C=!1,y=!1,A=!1,_.reset(),p.reset(),I.reset(),E=k}function nt(){const i=40*c;l.font=`${i}px Montserrat Alternates`,l.fillStyle="grey";const t=u.width/14,e=u.height/2;l.fillText("Tap Screen or Press Space To Start",t,e)}function ot(i){E+=i*$}//!!
function at(){l.fillStyle="white",l.fillRect(0,0,u.width,u.height)}function M(i){if(x===null){x=i,requestAnimationFrame(M);return}const t=i-x;x=i,at(),!y&&!A&&(_.update(E,t),p.update(E,t),S.update(E,t),I.update(t),ot(t)),!y&&p.collideWith(S)&&(y=!0,st(),I.setHighScore()),_.draw(),p.draw(),S.draw(),I.draw(),y&&it(),A&&nt(),requestAnimationFrame(M)}requestAnimationFrame(M);window.addEventListener("keyup",R,{once:!0});window.addEventListener("touchstart",R,{once:!0});const d=document.getElementById("gameCanvas"),v=d.getContext("2d"),ht=document.getElementById("score"),n={x:80,y:d.height/2,width:70,height:70,following:!1,image:new Image};n.image.src="../img/football (1) 1.png";const g={x:d.width-60,y:d.height/2-30,width:50,height:60};let P=0;d.addEventListener("mousedown",i=>{const{offsetX:t,offsetY:e}=i;t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height&&(n.following=!0)});d.addEventListener("mousemove",i=>{n.following&&(n.x=i.offsetX-n.width/2,n.y=i.offsetY-n.height/2)});d.addEventListener("mouseup",()=>{n.x>=g.x&&n.x<=g.x+g.width&&n.y>=g.y&&n.y<=g.y+g.height&&(P++,ht.textContent="Голи: "+P,n.x=80,n.y=d.height/2),n.following=!1});function B(){v.clearRect(0,0,d.width,d.height),v.fillStyle="#4CAF50",v.fillRect(0,0,d.width,d.height),v.drawImage(n.image,n.x,n.y,n.width,n.height),(n.x<=0||n.x+n.width>=d.width)&&(n.x=Math.random()*(d.width-n.width),n.y=Math.random()*(d.height-n.height)),requestAnimationFrame(B)}B();const G=document.querySelector(".guessTheNumber__input"),f=document.querySelector(".guessTheNumber__result"),b=document.querySelector(".guessTheNumber__btn--input");console.log(b);b.addEventListener("click",i=>{const t=Math.floor(Math.random()*10)+1;+G.value>10?(f.textContent="Потрібно ввести число від 1 до 10",f.style.color="#000"):+G.value===t?(f.textContent=`Вітаю, ви вгадали число! ${t} `,f.style.color="green"):(f.textContent=`Ви програли, комп’ютер загадав ${t}. `,f.style.color="red")});document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("myModal"),t=document.getElementById("closeModalBtn"),e=document.getElementById("saveModalBtn"),o=document.getElementById("userInput"),s=document.getElementById("userName");i.classList.remove("hidden");function a(){i.classList.add("hidden")}t.addEventListener("click",a),e.addEventListener("click",function(){const r=o.value.trim();r!==""&&(s.textContent=r,a())})});function ct(i){return i%4===0&&i%100!==0||i%400===0}document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("input"),t=document.getElementById("output");document.getElementById("check").addEventListener("click",function(){const o=i.value.trim(),s=parseInt(o,10);if(isNaN(s))t.textContent="Будь ласка, введіть коректний рік!",t.style.color="#000";else if(s<1900){t.textContent="Будь ласка, введіть свого народження!",t.style.color="#000";return}else ct(s)?(t.textContent="Ви народилися у високосний рік!",t.style.color="#039900"):(t.textContent="Ви народилися не у високосний рік!",t.style.color="#900")})});document.getElementById("input").addEventListener("input",function(){const i=this,t=document.getElementById("error-message");i.value>2025||i.value<1?t.style.display="block":t.style.display="none"});
//# sourceMappingURL=commonHelpers.js.map
