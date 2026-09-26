const site=document.querySelector('.ocean-site');
const world=document.querySelector('.avatar-world');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
const menuToggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
function setMenu(open){site.classList.toggle('menu-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.querySelector('.sr-only').textContent=open?'Close menu':'Open menu';}
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
menu.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});
const motion=document.querySelector('.motion-toggle');
function updateMotion(){site.classList.toggle('motion-paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Resume motion':'Pause motion';}
motion.addEventListener('click',()=>{paused=!paused;updateMotion();updateDive();});
reduced.addEventListener('change',()=>{paused=reduced.matches;updateMotion();});updateMotion();
const sections=[...document.querySelectorAll('#experience,#work,#approach,#learn,#contact')];
const names={experience:'WORK EXPERIENCE',work:'01 / SHARED DIRECTION',approach:'02 / HUMAN VALUES',learn:'03 / SHARED KNOWLEDGE',contact:'04 / NEW CONNECTIONS'};
let active='';
function updateDive(){
 const max=document.documentElement.scrollHeight-innerHeight;
 const depth=Math.max(0,Math.min(1,scrollY/Math.max(1,max)));
 document.querySelector('.depth-track span').style.height=`${depth*100}%`;
 let current='';
 sections.forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.55)current=section.id;});
 if(current!==active){active=current;document.querySelector('.dive-label').textContent=names[active]||'AT THE SURFACE';sections.forEach(section=>section.classList.toggle('ocean-active',section.id===active));document.querySelectorAll('.site-nav nav a').forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
 if(paused)return;
 site.style.setProperty('--dive-position',`${25+depth*60}%`);
 site.style.setProperty('--dive-scale',String(1.04+depth*.13));
 site.style.setProperty('--depth-darkness',String(.28-depth*.25));
 site.style.setProperty('--light-x',`${50+Math.sin(depth*Math.PI*4)*24}%`);
 site.style.setProperty('--light-y',`${25+Math.sin(depth*Math.PI*2)*15}%`);
 site.style.setProperty('--ocean-brightness',String(.85+depth*.4));
 site.style.setProperty('--light-strength',String(.4+depth*.6));
 site.style.setProperty('--ray-angle',`${-22+depth*42}deg`);
}
let frame;
window.addEventListener('scroll',()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=null;updateDive();});},{passive:true});
window.addEventListener('resize',updateDive);updateDive();
let pointerFrame;
window.addEventListener('pointermove',e=>{if(paused||e.pointerType!=='mouse')return;cancelAnimationFrame(pointerFrame);pointerFrame=requestAnimationFrame(()=>{site.style.setProperty('--ocean-x',`${(e.clientX/innerWidth-.5)*12}px`);site.style.setProperty('--ocean-y',`${(e.clientY/innerHeight-.5)*8}px`);});});
world.addEventListener('pointermove',e=>{if(paused||e.pointerType!=='mouse')return;const box=world.getBoundingClientRect();site.style.setProperty('--avatar-x',`${(e.clientX-box.left)/box.width*10-5}px`);site.style.setProperty('--avatar-y',`${(e.clientY-box.top)/box.height*8-4}px`);});
world.addEventListener('pointerleave',()=>{site.style.setProperty('--avatar-x','0px');site.style.setProperty('--avatar-y','0px');});
const greetingButton=world.querySelector('.avatar-greeting');
function setGreeting(show){world.classList.toggle('avatar-waving',show);if(!show)world.classList.remove('avatar-focused');greetingButton.setAttribute('aria-pressed',String(show));greetingButton.setAttribute('aria-label',show?'Hide greeting':'Show greeting');greetingButton.querySelector('.sr-only').textContent=show?'Hide greeting':'Show greeting';}
greetingButton.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')world.classList.add('avatar-hovering');});
greetingButton.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){world.classList.remove('avatar-hovering');if(greetingButton.getAttribute('aria-pressed')!=='true')world.classList.remove('avatar-waving');}});
greetingButton.addEventListener('focus',()=>{if(greetingButton.matches(':focus-visible'))world.classList.add('avatar-focused');});
greetingButton.addEventListener('blur',()=>world.classList.remove('avatar-focused'));
greetingButton.addEventListener('click',()=>setGreeting(greetingButton.getAttribute('aria-pressed')!=='true'));
greetingButton.addEventListener('keydown',e=>{if(e.key==='Escape')setGreeting(false);});
const particles=document.querySelector('.ocean-plankton');
for(let i=0;i<25;i++){const dot=document.createElement('i');dot.style.cssText=`left:${(i*37+11)%100}%;top:${(i*23+4)%100}%;animation-delay:-${i%13}s;animation-duration:${14+i%9}s`;particles.append(dot);}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('encounter-arrived');}),{threshold:.18});
document.querySelectorAll('.sea-encounter').forEach(encounter=>{
 observer.observe(encounter);
 const trigger=encounter.querySelector('.creature-trigger');const insight=encounter.querySelector('.sea-insight');
 function open(){insight.hidden=false;trigger.setAttribute('aria-expanded','true');}
 function close(restore=false){insight.hidden=true;trigger.setAttribute('aria-expanded','false');if(restore)trigger.focus();}
 trigger.addEventListener('click',()=>{if(insight.hidden)open();else close();});
 encounter.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')open();});
 encounter.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')close();});
 trigger.addEventListener('focus',open);
 encounter.querySelector('.sea-close').addEventListener('click',()=>close(true));
 encounter.addEventListener('keydown',e=>{if(e.key==='Escape')close(true);});
});
