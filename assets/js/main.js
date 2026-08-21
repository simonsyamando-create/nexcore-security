
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const saved=localStorage.getItem('theme'); if(saved) document.documentElement.dataset.theme=saved;
$('.theme')?.addEventListener('click',()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n)});
$('.menu')?.addEventListener('click',()=>$('.links').classList.toggle('open'));
$$('.num').forEach(el=>{const target=+el.dataset.target;const suffix=el.dataset.suffix||'';let done=false;const obs=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!done){done=true;let start=0;const tick=()=>{start+=Math.max(1,Math.ceil(target/50));el.textContent=Math.min(start,target)+suffix;if(start<target)requestAnimationFrame(tick)};tick()}},{threshold:.5});obs.observe(el)});
$$('.case button').forEach(b=>b.addEventListener('click',()=>b.closest('.case').classList.toggle('open')));
$$('.tab').forEach((b,i)=>b.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.remove('active'));$$('.testimonial').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.testimonial')[i].classList.add('active')}));
$$('[data-range]').forEach(r=>{const o=$('output',r.parentElement);const sync=()=>o.value=r.value;r.addEventListener('input',sync);sync()});
$$('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
$('form')?.addEventListener('submit',e=>{e.preventDefault();$('#form-status').textContent='Thank you. This demonstration form is ready to connect to Formspree, Microsoft Forms, Power Automate or your CRM.'});
