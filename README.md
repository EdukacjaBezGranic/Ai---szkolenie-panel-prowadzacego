# Panel szkolenia AI

Statyczny panel do prowadzenia szkolenia z praktycznego wykorzystania AI. Zawiera szybki dostęp do prezentacji, materiałów, gotowych promptów, narzędzi AI, generatora QR oraz ćwiczeń warsztatowych dla uczestników.

## Co jest w projekcie

- `index.html` - główny panel szkolenia.
- `assets/app.css` - wygląd panelu.
- `assets/app.js` - obsługa panelu, ćwiczeń i QR.
- `assets/exercises.js` - baza ćwiczeń warsztatowych.
- `prompts/` - osobne strony z gotowymi promptami.
- `assets/prompt.css` i `assets/prompt.js` - wspólne pliki dla stron promptów.
- `reset-cache.html` - pomocnicza strona do odświeżenia cache, gdy przeglądarka pokazuje starą wersję.
- W panelu jest też timer do odmierzania czasu ćwiczeń, z opcją powiększenia na cały ekran.
- Ćwiczenia mają tryb ekranowy do pokazania zadania uczestnikom na rzutniku.
- Panel zawiera też trudniejsze ćwiczenia z prostym kodowaniem, debugowaniem, analizą danych i bezpieczną automatyzacją w Google Apps Script.
- Są też ćwiczenia plikowe: dokument Google Docs, plik tekstowy/Markdown, arkusz Excel lub Google Sheets oraz szkic prezentacji Google Slides.

## Uruchomienie lokalnie

Najprościej otworzyć plik `index.html` w przeglądarce.

Można też uruchomić prosty serwer lokalny w katalogu projektu:

```bash
python3 -m http.server 4173
```

Następnie wejść na:

```text
http://127.0.0.1:4173/index.html
```

## Publikacja na GitHub Pages

1. Utwórz nowe repozytorium na GitHubie.
2. Wgraj zawartość tej paczki bezpośrednio do głównego katalogu repozytorium.
3. Upewnij się, że `index.html` jest w katalogu głównym repozytorium, a nie w dodatkowym podfolderze.
4. W ustawieniach repozytorium wybierz `Settings -> Pages`.
5. Jako źródło wybierz branch `main` i katalog `/root`.

Po publikacji strona będzie dostępna pod adresem GitHub Pages podanym w ustawieniach repozytorium.

## Aktualizacja po zmianach

Jeżeli po aktualizacji GitHub Pages nadal pokazuje starą wersję, otwórz:

```text
https://ADRES-TWOJEJ-STRONY/reset-cache.html
```

Następnie wróć do strony głównej i odśwież ją mocno:

- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + F5`

## Uwagi

Projekt jest statyczny i nie wymaga procesu budowania. Generator QR korzysta z zewnętrznej usługi, więc do wygenerowania kodu QR potrzebne jest połączenie z internetem.
