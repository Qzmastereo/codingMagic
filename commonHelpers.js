var le=Object.defineProperty;var de=(t,e,n)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(de(t,typeof e!="symbol"?e+"":e,n),n);import"./assets/vendor-6837a909.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header__dropdown"),e=document.querySelector(".header__menu"),n=document.querySelector(".header__arrow");document.querySelector(".image-footer img"),t.addEventListener("click",function(i){i.stopPropagation(),t.classList.toggle("active"),n.classList.toggle("rotated")}),document.addEventListener("click",function(i){!t.contains(i.target)&&!e.contains(i.target)&&(t.classList.remove("active"),n.classList.remove("rotated"))})});function he(){const t=document.getElementById("slider_checkbox"),e=document.querySelector(".header__logo img"),n=document.querySelector(".image-footer img");t.checked?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),document.querySelector("header").classList.remove("light-theme"),document.querySelector("header").classList.add("dark-theme"),e.src="img/Header-logo-dark.svg",n.src="img/Header-logo-dark.svg"):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),document.querySelector("header").classList.remove("dark-theme"),document.querySelector("header").classList.add("light-theme"),e.src="img/Header-logo.svg",n.src="img/Header-logo.svg")}document.getElementById("slider_checkbox").addEventListener("change",he);let ue=document.getElementById("firstInp"),me=document.getElementById("secondInp");document.querySelector(".ul-calc");let ge=document.querySelectorAll(".button-calc");document.getElementById("equal");let K=document.getElementById("result");document.getElementById("title-calc");document.querySelectorAll(".input-calc");document.querySelector(".container-calc");K.textContent="Результат";document.addEventListener("DOMContentLoaded",()=>{ge.forEach(t=>{t.addEventListener("click",()=>{let e=parseFloat(ue.value),n=parseFloat(me.value),i=t.getAttribute("data-operator"),s;switch(i){case"+":s=e+n;break;case"-":s=e-n;break;case"*":s=e*n;break;case"/":n===0?alert("На нуль ділити не можна!"):s=e/n;break;default:s="Invalid operator";break}K.textContent=s})})});class fe{constructor(e,n,i,s,o,a){r(this,"WALK_ANIMATION_TIMER",200);r(this,"walkAnimationTimer",this.WALK_ANIMATION_TIMER);r(this,"dinoRunImages",[]);r(this,"jumpPressed",!1);r(this,"jumpInProgress",!1);r(this,"falling",!1);r(this,"JUMP_SPEED",.6);r(this,"GRAVITY",.4);r(this,"touchstart",()=>{this.jumpPressed=!0});r(this,"touchend",()=>{this.jumpPressed=!1});r(this,"keydown",e=>{e.code==="Space"&&(this.jumpPressed=!0)});r(this,"keyup",e=>{e.code==="Space"&&(this.jumpPressed=!1)});this.ctx=e,this.canvas=e.canvas,this.width=n,this.height=i,this.minJumpHeight=s,this.maxJumpHeight=o,this.scaleRatio=a,this.x=10*a,this.y=this.canvas.height-this.height-1.5*a,this.yStandingPosition=this.y,this.standingStillImage=new Image,this.standingStillImage.src="img/standing_still.png",this.image=this.standingStillImage;const m=new Image;m.src="img/dino_run1.png";const I=new Image;I.src="img/dino_run2.png",this.dinoRunImages.push(m),this.dinoRunImages.push(I),window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),window.removeEventListener("touchstart",this.touchstart),window.removeEventListener("touchend",this.touchend),window.addEventListener("touchstart",this.touchstart),window.addEventListener("touchend",this.touchend)}update(e,n){this.run(e,n),this.jumpInProgress&&(this.image=this.standingStillImage),this.jump(n)}jump(e){this.jumpPressed&&(this.jumpInProgress=!0),this.jumpInProgress&&!this.falling?this.y>this.canvas.height-this.minJumpHeight||this.y>this.canvas.height-this.maxJumpHeight&&this.jumpPressed?this.y-=this.JUMP_SPEED*e*this.scaleRatio:this.falling=!0:this.y<this.yStandingPosition?(this.y+=this.GRAVITY*e*this.scaleRatio,this.y+this.height>this.canvas.height&&(this.y=this.yStandingPosition)):(this.falling=!1,this.jumpInProgress=!1)}run(e,n){this.walkAnimationTimer<=0&&(this.image===this.dinoRunImages[0]?this.image=this.dinoRunImages[1]:this.image=this.dinoRunImages[0],this.walkAnimationTimer=this.WALK_ANIMATION_TIMER),this.walkAnimationTimer-=n*e}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}}class ye{constructor(e,n,i,s,o){this.ctx=e,this.canvas=e.canvas,this.width=n,this.height=i,this.speed=s,this.scaleRatio=o,this.x=0,this.y=this.canvas.height-this.height,this.groundImage=new Image,this.groundImage.src="img/ground.png"}update(e,n){this.x-=e*n*this.speed*this.scaleRatio}draw(){this.ctx.drawImage(this.groundImage,this.x,this.y,this.width,this.height),this.ctx.drawImage(this.groundImage,this.x+this.width,this.y,this.width,this.height),this.x<-this.width&&(this.x=0)}reset(){this.x=0}}class pe{constructor(e,n,i,s,o,a){this.ctx=e,this.x=n,this.y=i,this.width=s,this.height=o,this.image=a}update(e,n,i,s){this.x-=e*n*i*s}draw(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}collideWith(e){return e.x<this.x+this.width/1.4&&e.x+e.width/1.4>this.x&&e.y<this.y+this.height/1.4&&e.height+e.y/1.4>this.y}}class Ee{constructor(e,n,i,s){r(this,"CACTUS_INTERVAL_MIN",500);r(this,"CACTUS_INTERVAL_MAX",2e3);r(this,"nextCactusInterval",null);r(this,"cacti",[]);this.ctx=e,this.canvas=e.canvas,this.cactiImages=n,this.scaleRatio=i,this.speed=s,this.setNextCactusTime()}setNextCactusTime(){const e=this.getRandomNumber(this.CACTUS_INTERVAL_MIN,this.CACTUS_INTERVAL_MAX);this.nextCactusInterval=e}getRandomNumber(e,n){return Math.floor(Math.random()*(n-e+1)+e)}createCactus(){const e=this.getRandomNumber(0,this.cactiImages.length-1),n=this.cactiImages[e],i=this.canvas.width*1.5,s=this.canvas.height-n.height,o=new pe(this.ctx,i,s,n.width,n.height,n.image);this.cacti.push(o)}update(e,n){this.nextCactusInterval<=0&&(this.createCactus(),this.setNextCactusTime()),this.nextCactusInterval-=n,this.cacti.forEach(i=>{i.update(this.speed,e,n,this.scaleRatio)}),this.cacti=this.cacti.filter(i=>i.x>-i.width)}draw(){this.cacti.forEach(e=>e.draw())}collideWith(e){return this.cacti.some(n=>n.collideWith(e))}reset(){this.cacti=[]}}class Ie{constructor(e,n){r(this,"score",0);r(this,"HIGH_SCORE_KEY","highScore");this.ctx=e,this.canvas=e.canvas,this.scaleRatio=n}update(e){this.score+=e*.01}reset(){this.score=0}setHighScore(){const e=Number(localStorage.getItem(this.HIGH_SCORE_KEY));this.score>e&&localStorage.setItem(this.HIGH_SCORE_KEY,Math.floor(this.score))}draw(){const e=Number(localStorage.getItem(this.HIGH_SCORE_KEY)),n=20*this.scaleRatio,i=20*this.scaleRatio;this.ctx.font=`${i}px serif`,this.ctx.fillStyle="#525250";const s=this.canvas.width-75*this.scaleRatio,o=s-125*this.scaleRatio,a=Math.floor(this.score).toString().padStart(6,0),m=e.toString().padStart(6,0);this.ctx.fillText(a,s,n),this.ctx.fillText(`HI ${m}`,o,n)}}const f=document.getElementById("game"),h=f.getContext("2d"),Z=1,we=1e-5,H=800,T=200,ve=88/1.5,Se=94/1.5,Le=T,be=150,xe=2400,Ce=24,F=.5,ke=[{width:48/1.5,height:100/1.5,image:"img/cactus_1.png"},{width:98/1.5,height:100/1.5,image:"img/cactus_2.png"},{width:68/1.5,height:70/1.5,image:"img/cactus_3.png"}];let Y=null,B=null,k=null,_=null,c=null,R=null,M=Z,C=!1,P=!1,q=!0;function _e(){const t=ve*c,e=Se*c,n=be*c,i=Le*c,s=xe*c,o=Ce*c;Y=new fe(h,t,e,n,i,c),B=new ye(h,s,o,F,c);const a=ke.map(m=>{const I=new Image;return I.src=m.image,{image:I,width:m.width*c,height:m.height*c}});k=new Ee(h,a,c,F),_=new Ie(h,c)}function W(){c=Me(),f.width=H*c,f.height=T*c,_e()}W();window.addEventListener("resize",()=>setTimeout(W,500));screen.orientation&&screen.orientation.addEventListener("change",W);function Me(){const t=Math.min(window.innerHeight,document.documentElement.clientHeight),e=Math.min(window.innerWidth,document.documentElement.clientWidth);return e/t<H/T?e/H:t/T}function Ae(){const t=70*c;h.font=`${t}px Montserrat Alternates `,h.fillStyle="grey";const e=f.width/4.5,n=f.height/2;h.fillText("GAME OVER",e,n)}function Re(){P||(P=!0,setTimeout(()=>{window.addEventListener("keyup",A,{once:!0}),window.addEventListener("touchstart",A,{once:!0})},1e3))}function A(){P=!1,C=!1,q=!1,B.reset(),k.reset(),_.reset(),M=Z}function Ye(){const t=40*c;h.font=`${t}px Montserrat Alternates`,h.fillStyle="grey";const e=f.width/14,n=f.height/2;h.fillText("Tap Screen or Press Space To Start",e,n)}function Ne(t){M+=t*we}//!!
function Te(){h.fillStyle="white",h.fillRect(0,0,f.width,f.height)}function G(t){if(R===null){R=t,requestAnimationFrame(G);return}const e=t-R;R=t,Te(),!C&&!q&&(B.update(M,e),k.update(M,e),Y.update(M,e),_.update(e),Ne(e)),!C&&k.collideWith(Y)&&(C=!0,Re(),_.setHighScore()),B.draw(),k.draw(),Y.draw(),_.draw(),C&&Ae(),q&&Ye(),requestAnimationFrame(G)}requestAnimationFrame(G);window.addEventListener("keyup",A,{once:!0});window.addEventListener("touchstart",A,{once:!0});window.addEventListener("keydown",t=>{t.code==="Space"&&t.preventDefault()});window.addEventListener("keyup",t=>{t.code==="Space"&&A()},{once:!0});const l=document.getElementById("gameCanvas"),E=l.getContext("2d");function Be(){}window.addEventListener("resize",Be);const Q=new Image;Q.src="img/football (1) 1.png";let b=l.width/2,w=l.height/2,v=25,ee=0;const O=document.getElementById("score");O.style.display="block";let D=b,te=w,V=8,He=.5,Pe=.7,N=0,j=Math.random()*(l.width-30)+15,$=Math.random()*(l.height-30)+15,ne=15;function qe(){E.drawImage(Q,b-v,w-v,v*2,v*2)}function Ge(){E.beginPath(),E.arc(j,$,ne,0,Math.PI*2),E.fillStyle="rgb(138,206,207,1)",E.fill(),E.strokeStyle="black",E.stroke()}function Oe(){let t=D-b,e=te-w,n=Math.sqrt(t*t+e*e);n>V?b+=t/n*V:b=D,N+=He,w+=N,w+v>l.height&&(w=l.height-v,N*=-Pe),Math.sqrt((b-j)**2+(w-$)**2)<v+ne&&(ee++,j=Math.random()*(l.width-30)+15,$=Math.random()*(l.height-30)+15)}function De(){O.textContent=`Голи: ${ee}`,O.style.fontFamily="Montserrat Alternates"}l.addEventListener("click",function(t){const e=l.getBoundingClientRect();D=t.clientX-e.left,te=t.clientY-e.top,N=-10});function se(){E.clearRect(0,0,l.width,l.height),Ge(),qe(),Oe(),De(),requestAnimationFrame(se)}se();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".input-footer"),e=document.querySelector(".js-footer-btn"),n=document.getElementById("modal"),i=document.querySelector(".close-modal");e.addEventListener("click",function(s){s.preventDefault();let o=t.value.trim();o===""?(alert("Будь ласка, введіть email!"),t.focus()):/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)?(n.style.display="flex",t.value=""):(alert("Будь ласка, введіть коректний email!"),t.focus())}),i.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(s){s.target===n&&(n.style.display="none")})});const U=document.querySelector(".guessTheNumber__input"),S=document.querySelector(".guessTheNumber__result"),ie=document.querySelector(".guessTheNumber__btn--input");console.log(ie);ie.addEventListener("click",t=>{const e=Math.floor(Math.random()*10)+1;+U.value>10?(S.textContent="Потрібно ввести число від 1 до 10",S.style.color="#000"):+U.value===e?(S.textContent=`Вітаю, ви вгадали число! ${e} `,S.style.color="green"):(S.textContent=`Ви програли, комп’ютер загадав ${e}. `,S.style.color="red")});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("myModal"),e=document.getElementById("closeModalBtn"),n=document.getElementById("saveModalBtn"),i=document.getElementById("userInput"),s=document.getElementById("userName");t.classList.remove("hidden");function o(){t.classList.add("hidden")}e.addEventListener("click",o),n.addEventListener("click",function(){const a=i.value.trim();a!==""&&(s.textContent=a,o())})});function je(t){return t%4===0&&t%100!==0||t%400===0}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("input"),e=document.getElementById("output");document.getElementById("check").addEventListener("click",function(){const i=t.value.trim(),s=parseInt(i,10);if(isNaN(s))e.textContent="Будь ласка, введіть коректний рік!",e.style.color="#000";else if(s<1900){e.textContent="Будь ласка, введіть свого народження!",e.style.color="#000";return}else je(s)?(e.textContent="Ви народилися у високосний рік!",e.style.color="#039900"):(e.textContent="Ви народилися не у високосний рік!",e.style.color="#900")})});document.getElementById("input").addEventListener("input",function(){const t=this,e=document.getElementById("error-message");t.value>2025||t.value<1?e.style.display="block":e.style.display="none"});const d=[{name:"Albert",surname:"Einstein",birthYear:1879,deathYear:1955},{name:"Isaac",surname:"Newton",birthYear:1643,deathYear:1727},{name:"Galileo",surname:"Galilei",birthYear:1564,deathYear:1642},{name:"Marie",surname:"Curie",birthYear:1867,deathYear:1934},{name:"Nikola",surname:"Tesla",birthYear:1856,deathYear:1943},{name:"Charles",surname:"Darwin",birthYear:1809,deathYear:1882},{name:"Stephen",surname:"Hawking",birthYear:1942,deathYear:2018},{name:"Richard",surname:"Feynman",birthYear:1918,deathYear:1988},{name:"Carl",surname:"Sagan",birthYear:1934,deathYear:1996},{name:"Dmitri",surname:"Mendeleev",birthYear:1834,deathYear:1907},{name:"Alan",surname:"Turing",birthYear:1912,deathYear:1954},{name:"Niels",surname:"Bohr",birthYear:1885,deathYear:1962}],$e=document.querySelectorAll(".scientist-text"),y=document.querySelectorAll(".button-scienttist-js");y[0].addEventListener("click",()=>{const t=d.filter(e=>e.birthYear>=1879&&e.birthYear<1955);p(t)});y[1].addEventListener("click",()=>{const t=d.find(e=>e.surname==="Einstein");p([t])});y[2].addEventListener("click",()=>{const t=[...d].sort((e,n)=>e.surname.localeCompare(n.surname));p(t)});y[3].addEventListener("click",()=>{const t=d.filter(e=>e.surname.startsWith("C"));p(t)});y[4].addEventListener("click",()=>{const t=[...d].sort((e,n)=>n.deathYear-n.birthYear-(e.deathYear-e.birthYear));p(t)});y[5].addEventListener("click",()=>{const t=d.filter(e=>!e.name.startsWith("A"));p(t)});y[6].addEventListener("click",()=>{const t=d.reduce((e,n)=>n.birthYear>e.birthYear?n:e,d[0]);p([t])});y[7].addEventListener("click",()=>{const t=d.reduce((n,i)=>i.deathYear-i.birthYear>n.deathYear-n.birthYear?i:n,d[0]),e=d.reduce((n,i)=>i.deathYear-i.birthYear<n.deathYear-n.birthYear?i:n,d[0]);p([t,e])});y[8].addEventListener("click",()=>{const t=d.filter(e=>e.name[0]===e.surname[0]);p(t)});function p(t){$e.forEach((e,n)=>{e.textContent=t[n]?`${t[n].name} ${t[n].surname}`:""})}function We(){g===x?(L.style.color="black",L.textContent="Нічия!"):g==="stone"&&x==="scissors"||g==="scissors"&&x==="paper"||g==="paper"&&x==="stone"?(L.style.color="green",L.textContent="Ви перемогли!",oe++):(L.style.color="red",L.textContent="Комп’ютер переміг!",ae++)}let oe=1e3,ae=1e3,Fe=document.getElementById("stone"),Ve=document.getElementById("scissors"),Ue=document.getElementById("paper"),u=document.getElementById("stone__button-mod"),L=document.querySelector(".stone__game-result"),re=document.querySelector(".stone__result");re.textContent="Рахунок: Комп'ютер - 0 Ви - 0";let x="",g="";u.style.backgroundColor="rgb(70, 70, 70)";u.disabled=!0;Fe.addEventListener("click",()=>{g="stone",console.log(g),u.style.backgroundColor="black",u.disabled=!1});Ve.addEventListener("click",()=>{g="scissors",console.log(g),u.style.backgroundColor="black",u.disabled=!1});Ue.addEventListener("click",()=>{g="paper",console.log(g),u.style.backgroundColor="black",u.disabled=!1});let J=["stone","scissors","paper"];u.addEventListener("click",()=>{x=J[Math.floor(Math.random()*J.length)],console.log(x),We(),u.style.backgroundColor="rgb(70, 70, 70)",u.disabled=!0,re.textContent=`Рахунок:
        Комп'ютер - ${ae}
        Ви - ${oe}`});let z=document.querySelector(".time-input"),X=document.querySelector(".tequal");z.addEventListener("input",()=>{let t=Number.parseInt(z.value);const e=t%60,n=String(e).padStart(2,"0"),i=Math.floor(t/60),s=i%60,o=String(s).padStart(2,"0"),a=Math.floor(i/60)%24,m=String(a).padStart(2,"0"),I=Math.floor(i/(60*24)),ce=String(I);X.textContent=`${ce}дн. ${m}:${o}:${n}`,isNaN(t)&&(X.textContent="--:--:--"),console.log(t)});function Je(){let t=parseFloat(document.querySelector(".num11").value),e=parseFloat(document.querySelector(".num22").value),n=parseFloat(document.querySelector(".num33").value),i=document.querySelector(".result-one");if(!isNaN(t)&&!isNaN(e)&&!isNaN(n)){let s=Math.max(t,e,n);i.innerText="Найбільше число, яке ви ввели - "+s}else i.innerText="Найбільше число, яке ви ввели - (число)"}document.querySelectorAll(".num11, .num22, .num33").forEach(t=>{t.addEventListener("input",Je)});
//# sourceMappingURL=commonHelpers.js.map
