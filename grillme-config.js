// Adresse des /grillme-Servers (siehe grillme-backend/README.md), z. B. "https://.../api/grillme".
// Leer lassen = Demo-Modus mit vorgeschriebenen Beispielantworten (keine KI).
window.GRILLME = {
  endpoint: "",
  demo: {
 "sophie": {
  "strength": "Die Aussage ist klar genug, um sie zu prüfen.",
  "core_critique": "Es bleibt offen, woher du das weißt, und die Gegenseite hat ein ernstzunehmendes Argument, das hier nicht vorkommt.",
  "blind_spot": "Beobachtung und Wertung sind in einem Satz vermischt.",
  "challenge_question": "Woher weißt du das, und was würde dich vom Gegenteil überzeugen?",
  "next_step": "Den Satz in Beobachtung und Annahme teilen und das stärkste Gegenargument in eigenen Worten aufschreiben.",
  "missing_context": [
   "Woher die Meinung stammt"
  ]
 },
 "markus": {
  "strength": "Die Meinung lässt sich in eine konkrete Handlung übersetzen.",
  "core_critique": "Zuständigkeit, Zeitbudget und laufender Aufwand fehlen.",
  "blind_spot": "Kosten und Nutzen werden nicht getrennt betrachtet, und es ist offen, was passiert, wenn viele es so machen.",
  "challenge_question": "Wer macht das ab Montag, mit welcher Zeit und woran merken wir, dass sich der Aufwand lohnt?",
  "next_step": "Einen begrenzten Versuch mit Verantwortlichem, Zeitbudget, Nutzenindikator und Abbruchkriterium festlegen.",
  "missing_context": [
   "Verfügbare Zeit und Mittel"
  ]
 },
 "lea": {
  "strength": "Du benennst eine Haltung, statt sie zu verstecken.",
  "core_critique": "Es ist unklar, wen die Meinung betrifft und ob diese Menschen gefragt wurden.",
  "blind_spot": "Die Folgen für Menschen mit anderen Voraussetzungen fehlen.",
  "challenge_question": "Wen betrifft das, und wer hat dazu noch nie etwas gesagt?",
  "next_step": "Mit einer betroffenen Person sprechen, bevor du die Meinung weitergibst.",
  "missing_context": [
   "Wer betroffen ist"
  ]
 },
 "tim": {
  "strength": "Es gibt einen konkreten Ansatzpunkt im Alltag.",
  "core_critique": "Es ist offen, was dafür wegfällt, sonst bleibt es ein Zusatzaufwand.",
  "blind_spot": "Gewohnheiten und kleine Reibungen im Ablauf sind nicht berücksichtigt.",
  "challenge_question": "Was fällt dafür weg, und warum sollte ich das in einer vollen Woche wirklich nutzen?",
  "next_step": "Eine Woche lang einen kleinen Versuch machen und Zeit und Reibung notieren.",
  "missing_context": [
   "Konkrete Situation"
  ]
 }
}
};
