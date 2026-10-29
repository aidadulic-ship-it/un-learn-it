(function(){
  var f=document.getElementById('pp-form'),out=document.getElementById('pp-msg');
  function val(n){var e=f.elements[n];return e&&e.value!==undefined&&!e.length?(e.value||'').trim():''}
  function build(){
    var L=[];var t=val('titel')||'Ohne Titel';L.push('MEINUNGS-PAPIER: '+t);if(val('datum'))L.push('Datum: '+val('datum'));L.push('');
    L.push('1. Der Kinderblick');L.push(val('kind')||'-');L.push('');L.push('2. Meine Meinung');L.push(val('meinung')||'-');L.push('Sicherheit vorher (0 bis 10): '+(val('vorher')||'-'));L.push('');
    var h=[].slice.call(f.querySelectorAll('input[name=herkunft]:checked')).map(function(x){return x.value});
    L.push('3. Woher weiß ich das? '+(h.length?h.join(', '):'-'));if(val('herkunft_text'))L.push('Dünnste Quelle: '+val('herkunft_text'));L.push('Übernommen, nie geprüft: '+(val('uebernommen')||'-'));L.push('');
    L.push('4. Beste Gegenposition');L.push(val('gegen')||'-');L.push('');
    L.push('5. Vier Perspektiven');[['sophie','Sophie (Begründung, Gegenposition)'],['markus','Markus (Aufwand, Nutzen)'],['lea','Lea (Fairness)'],['tim','Tim (Alltag)']].forEach(function(p){L.push('- '+p[1]+': '+(val('p_'+p[0])||'-'))});L.push('');
    L.push('6. Was bleibt?');L.push('Behalte ich: '+(val('behalte')||'-'));L.push('Lasse ich los: '+(val('loslasse')||'-'));L.push('Bleibt offen: '+(val('offen')||'-'));L.push('Sicherheit nachher (0 bis 10): '+(val('nachher')||'-'));L.push('');
    L.push('7. Der kleinste Test (sieben Tage)');L.push(val('probe')||'-');L.push('  Verstärken, wenn: '+(val('plus')||'-'));L.push('  Stoppen, wenn: '+(val('minus')||'-'));L.push('Prüftermin: '+(val('pruef')||'-'));L.push('');
    L.push('Hinweis: KI-Figuren sind fiktive Perspektiven. Annahmen mit echten Menschen prüfen.');
    return L.join('\n')}
  function say(t){out.textContent=t}
  document.getElementById('pp-copy').addEventListener('click',function(){var t=build();if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(function(){say('Als Text kopiert.')},function(){say('Kopieren nicht möglich.')})}else{var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');say('Als Text kopiert.')}catch(e){say('Kopieren nicht möglich.')}document.body.removeChild(a)}});
  document.getElementById('pp-print').addEventListener('click',function(){window.print()});
  document.getElementById('pp-clear').addEventListener('click',function(){if(confirm('Alle Eingaben löschen?')){f.reset();say('Eingaben gelöscht.')}});
})();
