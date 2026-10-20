(function(){
  var d=document, root=d.documentElement;
  root.classList.add('js');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // header state
  var header=d.querySelector('.site-header');
  function onScrollHeader(){ header.classList.toggle('scrolled', window.scrollY>24); }

  // mobile menu
  var btn=d.querySelector('.menu-btn'), menu=d.getElementById('mobile-menu');
  function setMenu(open){
    btn.setAttribute('aria-expanded', String(open));
    if(open){ menu.style.setProperty('--menu-top', header.getBoundingClientRect().bottom+'px'); }
    menu.hidden=!open;
    header.classList.toggle('menu-open', open);
    d.body.classList.toggle('no-scroll', open);
    if(open){ var f=menu.querySelector('a'); if(f) f.focus(); }
  }
  btn.addEventListener('click', function(){ setMenu(btn.getAttribute('aria-expanded')!=='true'); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
  d.addEventListener('keydown', function(e){ if(e.key==='Escape' && btn.getAttribute('aria-expanded')==='true'){ setMenu(false); btn.focus(); } });
  window.matchMedia('(min-width: 961px)').addEventListener('change', function(m){ if(m.matches) setMenu(false); });

  function placeFlame(){
    var c=d.getElementById('hero-ctas'), pin=d.querySelector('.stage-pin');
    if(!c||!pin) return;
    var top=c.getBoundingClientRect().top - pin.getBoundingClientRect().top - 140;
    pin.style.setProperty('--flame-top', Math.max(0,top)+'px');
  }
  placeFlame(); window.addEventListener('resize', placeFlame);
  if(d.fonts && d.fonts.ready) d.fonts.ready.then(placeFlame);
  var ticking=false;
  function onScroll(){ if(ticking) return; ticking=true; requestAnimationFrame(function(){ onScrollHeader(); ticking=false; }); }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScrollHeader();

  // video respects reduced motion
  var v=d.querySelector('.flame-video');
  if(v && reduce){ v.removeAttribute('autoplay'); v.pause(); }

  // closing flame video: loads and plays only while on screen, never with reduced motion
  var bv=d.querySelector('.book-flame-video');
  if(bv && !reduce && 'IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ var p=bv.play(); if(p&&p.catch)p.catch(function(){}); } else bv.pause(); });},{threshold:0.05}).observe(bv);
  }

  // reveal on scroll
  var items=d.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){ items.forEach(function(el){ el.classList.add('in'); }); }
  else{
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var el=en.target, sibs=Array.prototype.indexOf.call(el.parentNode.children, el);
          el.style.transitionDelay=Math.min(sibs,6)*50+'ms';
          el.classList.add('in'); io.unobserve(el);
        }
      });
    },{rootMargin:'0px 0px -8% 0px', threshold:0.08});
    items.forEach(function(el){ io.observe(el); });
  }

  // sticky phone CTA, after the hero buttons scroll away
  var bar=d.getElementById('sticky-cta'), ctas=d.getElementById('hero-ctas'), book=d.getElementById('book');
  if(bar && ctas && 'IntersectionObserver' in window){
    var heroGone=false, bookIn=false;
    function upd(){ var show=heroGone && !bookIn; bar.classList.toggle('show', show); bar.setAttribute('aria-hidden', String(!show)); bar.querySelector('a').tabIndex= show?0:-1; d.body.classList.toggle('has-sticky', show); }
    new IntersectionObserver(function(e){ heroGone=!e[0].isIntersecting && e[0].boundingClientRect.top<0; upd(); }).observe(ctas);
    new IntersectionObserver(function(e){ bookIn=e[0].isIntersecting; upd(); },{threshold:0.15}).observe(book);
  }

})();
