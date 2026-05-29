const EXERCISES = window.EXERCISES || {};
let currentExerciseType = 'prompt';
function pickExercise(type) {
  const list = EXERCISES[type] || EXERCISES.prompt;
  return list[Math.floor(Math.random() * list.length)];
}
function renderExercise(e) {
  document.getElementById('exTitle').textContent = e.title;
  document.getElementById('exHeading').textContent = e.heading;
  document.getElementById('exTask').textContent = e.task;
  document.getElementById('exHint').textContent = e.hint;
  document.getElementById('exCheck').textContent = e.check;
  document.getElementById('exSample').textContent = e.sample;
  document.getElementById('exResult').textContent = e.result;
  document.getElementById('exDiscuss').textContent = e.discuss || 'Porównajcie wynik pracy z przykładem i wskażcie, co można poprawić.';
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
