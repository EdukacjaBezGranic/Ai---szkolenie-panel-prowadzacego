const EXERCISES = window.EXERCISES || {};
let currentExerciseType = 'prompt';

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function formatRichText(value) {
  const labels = [
    'Materiał do pracy',
    'Karta sytuacji',
    'Przebieg',
    'Efekt pracy',
    'Słaby prompt',
    'Kontekst',
    'Tekst do poprawy',
    'Brief roboczy',
    'Tytuł szkolenia',
    'Odbiorcy',
    'Cel',
    'Cel komunikatu',
    'Cel ćwiczenia',
    'Co się wydarzyło',
    'Informacje obowiązkowe',
    'Informacje do wykorzystania',
    'Elementy do uwzględnienia',
    'Ton',
    'Styl',
    'Długość',
    'Ograniczenie',
    'Zakaz',
    'Kanał',
    'Miejsce publikacji',
    'Temat',
    'Forma',
    'Zakres',
    'Obszary',
    'Materiał A',
    'Materiał B',
    'Polecenie dla AI',
    'Odpowiedź AI',
    'Notatka',
    'Mail',
    'Podpowiedzi',
    'Kontrola jakości',
    'Kontrola testu',
    'Kontrola wyniku',
    'Kontrola formularza',
    'Kontrola scenariusza',
    'Kontrola wizualizacji',
    'Kontrola notatki',
    'Kontrola odpowiedzi',
    'Pytania do omówienia',
    'Przykładowe polecenie do AI',
    'Przykładowy start',
    'Przykładowy szkielet promptu',
    'Karta zadania uczestnika',
    'Uzupełnijcie',
    'Przykładowy mail roboczy',
    'Przykładowy dokument do pracy',
    'Opis działania projektowego',
    'Opis sprawy',
    'Materiał do streszczenia',
    'Materiał do streszczenia dla kadry zarządzającej',
    'Materiał do podsumowania dla uczestników',
    'Materiał do analizy działań',
    'Materiał do notatki służbowej',
    'Założenia ćwiczenia',
    'Założenia aktywności otwierającej',
    'Pytanie startowe',
    'Założenia pracy w parach',
    'Założenia ćwiczenia z dyskusją',
    'Materiał do analizy błędu',
    'Założenia ćwiczenia wdrożeniowego',
    'Opis do zamiany w schemat',
    'Opis procesu',
    'Materiał do mapy',
    'Sytuacje do schematu decyzyjnego',
    'Opis procesu rekrutacji',
    'Materiał do infografiki',
    'Cel ankiety',
    'Cel ankiety po warsztacie',
    'Cel badania potrzeb',
    'Cel ankiety satysfakcji',
    'Założenia formularza',
    'Założenia automatyzacji',
    'Zakres materiału szkolenia',
    'Zakres quizu na start',
    'Materiał do pytań sytuacyjnych',
    'Zakres modułu „Pisanie skutecznych promptów”',
    'Założenia testu',
    'Cel rozmowy sprawdzającej',
    'Przykładowa odpowiedź AI do oceny',
    'Tekst wygenerowany przez AI',
    'Fragment odpowiedzi AI',
    'Materiał do oceny',
    'Komunikat wygenerowany przez AI'
  ];
  const labelPattern = new RegExp(`^(\\s*)(${labels.map(label =>
    label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  ).join('|')}):(?=\\s|$)`);

  return escapeHtml(value).split('\n').map(line =>
    line.replace(labelPattern, '$1<strong class="text-label">$2:</strong>')
  ).join('\n');
}

function setRichText(id, value) {
  document.getElementById(id).innerHTML = formatRichText(value);
}

function pickExercise(type) {
  const list = EXERCISES[type] || EXERCISES.prompt;
  return list[Math.floor(Math.random() * list.length)];
}
function renderExercise(e) {
  const steps = e.steps || [
    'Przeczytajcie zadanie i zaznaczcie, czego brakuje w pierwszej wersji.',
    'Przygotujcie własną wersję w parach lub małych grupach.',
    'Sprawdźcie wynik z kryteriami i poprawcie najważniejsze słabe miejsce.',
    'Porównajcie z przykładem i wybierzcie jedną zasadę do zapamiętania.'
  ];
  document.getElementById('exTitle').textContent = e.title;
  document.getElementById('exIntro').textContent = e.intro || '';
  document.getElementById('exTime').textContent = e.time || '10-15 min';
  document.getElementById('exForm').textContent = e.form || 'praca w parach lub grupach';
  document.getElementById('exHeading').textContent = e.heading;
  setRichText('exTask', e.task);
  setRichText('exHint', e.hint);
  setRichText('exCheck', e.check);
  setRichText('exSample', e.sample);
  document.getElementById('exResult').textContent = e.result;
  setRichText('exDiscuss', e.discuss || 'Porównajcie wynik pracy z przykładem i wskażcie, co można poprawić.');
  document.getElementById('exSteps').replaceChildren(...steps.map(step => {
    const item = document.createElement('div');
    item.textContent = step;
    return item;
  }));
  ['exHint','exCheck','exSample','exDiscuss'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('exWork').value = '';
}
function openExercise(type) {
  currentExerciseType = type;
  renderExercise(pickExercise(type));
  document.getElementById('exerciseOverlay').classList.add('active');
}
function randomizeCurrentExercise() {
  renderExercise(pickExercise(currentExerciseType));
}
function closeExercise() {
  document.getElementById('exerciseOverlay').classList.remove('active');
}
function toggle(id) {
  document.getElementById(id).classList.toggle('active');
}
function qrGenerate() {
  const v = document.getElementById('qrInput').value.trim();
  if (!v) { alert('Wklej link.'); return; }
  try { new URL(v); } catch(e) { alert('Wklej poprawny link zaczynający się od https:// albo http://'); return; }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=' + encodeURIComponent(v);
  renderQrImage('qrBox', src);
  document.getElementById('qrText').textContent = v;
}
function qrClear() {
  document.getElementById('qrInput').value = '';
  document.getElementById('qrBox').textContent = 'Tutaj pojawi się kod QR';
  document.getElementById('qrText').textContent = '';
}
function qrBig() {
  const v = document.getElementById('qrInput').value.trim();
  if (!v) { alert('Najpierw wklej link i wygeneruj QR.'); return; }
  try { new URL(v); } catch(e) { alert('Wklej poprawny link zaczynający się od https:// albo http://'); return; }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=900x900&data=' + encodeURIComponent(v);
  renderQrImage('qrFullImg', src);
  document.getElementById('qrFullText').textContent = v;
  document.getElementById('qrFull').classList.add('active');
}
function closeQrBig() {
  document.getElementById('qrFull').classList.remove('active');
}
function renderQrImage(containerId, src) {
  const img = document.createElement('img');
  const container = document.getElementById(containerId);
  img.src = src;
  img.alt = 'QR';
  container.replaceChildren(img);
}
function bindUiActions() {
  document.querySelectorAll('[data-exercise]').forEach(button => {
    button.addEventListener('click', () => openExercise(button.dataset.exercise));
  });
  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => toggle(button.dataset.toggle));
  });
  document.querySelectorAll('[data-action]').forEach(button => {
    const action = button.dataset.action;
    if (action === 'close-exercise') button.addEventListener('click', closeExercise);
    if (action === 'random-exercise') button.addEventListener('click', randomizeCurrentExercise);
    if (action === 'qr-generate') button.addEventListener('click', qrGenerate);
    if (action === 'qr-big') button.addEventListener('click', qrBig);
    if (action === 'qr-clear') button.addEventListener('click', qrClear);
    if (action === 'qr-close') button.addEventListener('click', closeQrBig);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeExercise();
    closeQrBig();
  }
});
document.addEventListener('DOMContentLoaded', bindUiActions);
