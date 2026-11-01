(function(){var a=document.getElementById('songAudio');if(!a)return;var off=false;try{off=sessionStorage.getItem('songOff')==='1'}catch(e){}
if(off){a.removeAttribute('autoplay');a.preload='none';return}
a.volume=.7;
a.addEventListener('pause',function(){if(!a.ended){try{sessionStorage.setItem('songOff','1')}catch(e){}}});
var ev=['pointerdown','keydown','touchstart','scroll','wheel'];
function go(){ev.forEach(function(n){window.removeEventListener(n,go,true)});a.play().catch(function(){})}
var p=a.play();if(p&&p.catch)p.catch(function(){ev.forEach(function(n){window.addEventListener(n,go,{capture:true,passive:true})})});
})();
