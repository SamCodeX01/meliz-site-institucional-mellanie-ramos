const WA='5511930935640',MAIL='mellanie.meliz.ramos@gmail.com',IG='https://instagram.com/psicologa.mellanieramos';
const pages=[['index.html','Início'],['sobre.html','Sobre'],['servicos.html','Serviços & Valores'],['contato.html','Contato']];
const cur=location.pathname.split('/').pop()||'index.html';
const I={ig:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
wa:'<svg viewBox="0 0 24 24"><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .7c-1-.5-1.7-1.2-2.2-2.2l.7-1-1-2z"/></svg>',
mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'};
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap nav"><a href="index.html" aria-label="Méliz – início"><img src="img/logo.png" alt="Méliz"></a>
<nav aria-label="Principal"><ul class="menu" id="menu">${pages.map(([h,t])=>`<li><a href="${h}" class="${h===cur?'on':''}">${t}</a></li>`).join('')}</ul></nav>
<a class="btn sm" href="contato.html">Agendar Sessão</a><button class="burger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="fg"><div><div class="logo-f"><img src="img/logo.png" alt="Méliz"></div><p>Méllanie Ramos<br>Psicóloga · CRP 06/196671</p></div>
<div><h3>Links rápidos</h3><ul>${pages.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
<div><h3>Contato</h3><ul><li><a href="mailto:${MAIL}">${MAIL}</a></li><li><a href="https://wa.me/${WA}">(11) 93093-5640</a></li></ul>
<div class="soc"><a href="${IG}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a><a href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a><a href="mailto:${MAIL}" aria-label="E-mail">${I.mail}</a></div></div></div>
<p class="copy">© ${new Date().getFullYear()} Méllanie Ramos · Psicóloga CRP 06/196671 · Todos os direitos reservados</p></div></footer>`);
const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
const f=document.getElementById('form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const t=encodeURIComponent(`Olá, Méllanie! Meu nome é ${d.get('nome')}.
E-mail: ${d.get('email')}
Telefone: ${d.get('tel')}

${d.get('msg')}`);
f.querySelector('.msg').textContent='Abrindo o WhatsApp para enviar sua mensagem…';
window.open(`https://wa.me/${WA}?text=${t}`,'_blank');f.reset()});
