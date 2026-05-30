# Panel szkolenia AI

Statyczny panel do prowadzenia szkolenia z praktycznego wykorzystania AI. Zawiera szybki dostęp do prezentacji, materiałów, gotowych promptów, narzędzi AI, generatora QR oraz ćwiczeń warsztatowych dla uczestników.

## Co jest w projekcie

- `index.html` - główny panel szkolenia.
- `assets/app.css` - wygląd panelu.
- `assets/app.js` - obsługa panelu, ćwiczeń, druku, timera i QR.
- `assets/exercises.js` - baza ćwiczeń warsztatowych.
- `assets/exercise-variants-advanced.js` - dodatkowe scenariusze urzędowe i warianty dla ćwiczeń zaawansowanych.
- `assets/exercise-overrides-03-04.js` - dopracowane wersje ćwiczeń 3 i 4 w standardzie rozszerzonym.
- `assets/exercise-overrides-05-09.js` - dopracowane wersje ćwiczeń 5-9 z plików Word.
- `prompts/` - osobne strony z gotowymi promptami.
- `assets/prompt.css` i `assets/prompt.js` - wspólne pliki dla stron promptów.
- `version.json` - aktualny numer wersji używany przez przycisk sprawdzania aktualizacji w stopce.
- `reset-cache.html` - pomocnicza strona do odświeżenia cache, gdy przeglądarka pokazuje starą wersję.
- W panelu jest też timer do odmierzania czasu ćwiczeń, z opcją powiększenia na cały ekran. Timer działa jako osobne narzędzie na dole strony głównej.
- Ćwiczenia mają tryb ekranowy do pokazania zadania uczestnikom na rzutniku, bez wbudowanego timera w widoku ćwiczenia.
- W oknie ćwiczenia można wydrukować czystą wersję zadania dla uczestników.
- Wydruk ćwiczenia ma przywrócony poprzedni, bardziej czytelny wygląd karty pracy z miejscem na notatki uczestników.
- Ćwiczenie 1 ma nowy opis z pliku Word i osobną, skróconą kartę pracy do druku.
- Ćwiczenie 2 ma nowy scenariusz o prostym języku w wiadomości urzędowej dotyczącej braków w dokumentacji.
- Długie opisy ćwiczeń są automatycznie dzielone na czytelne sekcje, ramki, listy i kroki.
- Scenariusze prowadzącego w ćwiczeniach 1 i 2 nie powtarzają pełnej karty uczestnika.
- Sekcje w opisach ćwiczeń mają delikatne kolorowe akcenty, które poprawiają orientację w długich materiałach.
- Ćwiczenie 3 ma rozbudowany scenariusz odpowiedzi na trudnego maila bez przyznawania winy i bez obietnic bez podstawy.
- Ćwiczenie 4 ma rozbudowany scenariusz porządkowania notatki ze spotkania, z tabelą zadań i oznaczaniem braków informacyjnych.
- Ćwiczenia 5-9 zostały dodane w tym samym standardzie: informacja o naborze, ankieta ewaluacyjna, prezentacja ze źródeł, formularz zapisów i plakat w Canvie.
- Dopracowane ćwiczenia 1-9 są wyróżnione zielonymi kafelkami, a pozostałe ćwiczenia mają spokojny szary kolor.
- W oknie ćwiczenia pojawia się krótka sekcja `Narzędzia do wykonania ćwiczenia`, dobrana do typu zadania.
- Pierwsze ćwiczenie ma osobno uporządkowaną treść dla uczestników, widok pełnoekranowy i scenariusz prowadzącego.
- Drugie ćwiczenie ma osobno uporządkowaną treść dla uczestników, widok pełnoekranowy, wydruk i scenariusz prowadzącego.
- Panel zawiera też trudniejsze ćwiczenia z prostym kodowaniem, debugowaniem, analizą danych i bezpieczną automatyzacją w Google Apps Script.
- Są też ćwiczenia plikowe: dokument Google Docs, plik tekstowy/Markdown, arkusz Excel lub Google Sheets oraz szkic prezentacji Google Slides.
- Większość typów ćwiczeń ma warianty/scenariusze do losowania. Ćwiczenia dopracowane indywidualnie mogą mieć jedną wersję bez przycisku `Losuj`.

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

W stopce panelu jest też przycisk `Sprawdź nowszą wersję`. Po kliknięciu panel sprawdza `version.json`, czyści lokalne cache i przeładowuje stronę, jeśli na serwerze jest nowsza wersja.

## Uwagi

Projekt jest statyczny i nie wymaga procesu budowania. Generator QR korzysta z zewnętrznej usługi, więc do wygenerowania kodu QR potrzebne jest połączenie z internetem.
