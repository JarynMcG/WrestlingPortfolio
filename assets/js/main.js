(function(){
  // Lightbox for the image portfolio
  var lb=document.getElementById('lightbox'),img=lb.querySelector('img'),cap=lb.querySelector('figcaption');
  document.querySelectorAll('[data-lightbox]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      img.src=a.getAttribute('href');
      img.alt=a.querySelector('img').alt;
      cap.textContent=a.dataset.caption||'';
      lb.hidden=false;
    });
  });
  function close(){lb.hidden=true;img.removeAttribute('src');}
  lb.addEventListener('click',function(e){if(e.target!==img)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
