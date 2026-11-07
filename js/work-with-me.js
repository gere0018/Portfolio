document.querySelectorAll('.copy-bio').forEach(function(button){
  button.addEventListener('click',function(){
    var bio=button.closest('.speaker-bio').querySelector('p').innerText;
    navigator.clipboard.writeText(bio).then(function(){button.textContent='Copied';setTimeout(function(){button.textContent='Copy bio';},1800);});
  });
});
