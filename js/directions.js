const site=document.querySelector('.ocean-site');
const world=document.querySelector('.avatar-world');
const portrait=document.querySelector('.portrait-toggle');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
let photo=false;
function togglePhoto(){photo=!photo;world.classList.toggle('show-human',photo);portrait.setAttribute('aria-pressed',String(photo));portrait.setAttribute('aria-label',photo?'Show Nehmat’s avatar':'Show Nehmat’s photo');}
portrait.addEventListener('click',togglePhoto);
world.querySelector('.portrait-hint').addEventListener('click',togglePhoto);
portrait.addEventListener('keydown',e=>{if(e.key==='Escape'&&photo)togglePhoto();});
const motion=document.querySelector('.motion-toggle');
function updateMotion(){site.classList.toggle('motion-paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Resume motion':'Pause motion';}
motion.addEventListener('click',()=>{paused=!paused;updateMotion();updateDive();});
reduced.addEventListener('change',()=>{paused=reduced.matches;updateMotion();});updateMotion();
const sections=[...document.querySelectorAll('#work,#approach,#learn,#contact')];
const names={work:'01 / SHARED DIRECTION',approach:'02 / HUMAN VALUES',learn:'03 / SHARED KNOWLEDGE',contact:'04 / NEW CONNECTIONS'};
let active='';
function updateDive(){
 const max=document.documentElement.scrollHeight-innerHeight;
 const depth=Math.max(0,Math.min(1,scrollY/Math.max(1,max)));
 document.querySelector('.depth-track span').style.height=`${depth*100}%`;
 let current='';
 sections.forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.55)current=section.id;});
 if(current!==active){active=current;document.querySelector('.dive-label').textContent=names[active]||'AT THE SURFACE';sections.forEach(section=>section.classList.toggle('ocean-active',section.id===active));document.querySelectorAll('.chapter-compass a').forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
 if(paused)return;
 site.style.setProperty('--dive-position',`${25+depth*60}%`);
 site.style.setProperty('--dive-scale',String(1.04+depth*.13));
 site.style.setProperty('--depth-darkness',String(.12+depth*.35));
 site.style.setProperty('--light-x',`${50+Math.sin(depth*Math.PI*4)*24}%`);
 site.style.setProperty('--light-y',`${25+Math.sin(depth*Math.PI*2)*15}%`);
 site.style.setProperty('--ray-angle',`${-22+depth*42}deg`);
}
let frame;
window.addEventListener('scroll',()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=null;updateDive();});},{passive:true});
window.addEventListener('resize',updateDive);updateDive();
let pointerFrame;
window.addEventListener('pointermove',e=>{if(paused||e.pointerType!=='mouse')return;cancelAnimationFrame(pointerFrame);pointerFrame=requestAnimationFrame(()=>{site.style.setProperty('--ocean-x',`${(e.clientX/innerWidth-.5)*12}px`);site.style.setProperty('--ocean-y',`${(e.clientY/innerHeight-.5)*8}px`);});});
const particles=document.querySelector('.ocean-plankton');
for(let i=0;i<25;i++){const dot=document.createElement('i');dot.style.cssText=`left:${(i*37+11)%100}%;top:${(i*23+4)%100}%;animation-delay:-${i%13}s;animation-duration:${14+i%9}s`;particles.append(dot);}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('encounter-arrived');}),{threshold:.18});
document.querySelectorAll('.sea-encounter').forEach(encounter=>{
 observer.observe(encounter);
 const trigger=encounter.querySelector('.creature-trigger');const insight=encounter.querySelector('.sea-insight');
 function close(restore=false){insight.hidden=true;trigger.setAttribute('aria-expanded','false');if(restore)trigger.focus();}
 trigger.addEventListener('click',()=>{const opening=insight.hidden;insight.hidden=!opening;trigger.setAttribute('aria-expanded',String(opening));});
 encounter.querySelector('.sea-close').addEventListener('click',()=>close(true));
 encounter.addEventListener('keydown',e=>{if(e.key==='Escape')close(true);});
});
