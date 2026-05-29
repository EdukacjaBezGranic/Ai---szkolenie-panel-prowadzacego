# Panel szkolenia AI - wersja stabilna v2

Ta paczka jest przygotowana do wrzucenia bezpośrednio do głównego katalogu repozytorium GitHub Pages.

## Ważne

W ZIP-ie plik `index.html` jest na najwyższym poziomie. Po rozpakowaniu wrzuć na GitHub:
- `index.html`
- `assets/`
- `prompts/`
- `service-worker.js`
- `reset-cache.html`
- pozostałe pliki

Nie wrzucaj samego folderu jako podfolderu, tylko jego zawartość.

## Gdy po aktualizacji dalej widzisz starą wersję

Otwórz:
`https://TWOJ-ADRES-GITHUB-PAGES/reset-cache.html`

Potem wróć do `index.html` i odśwież stronę przez:
- Mac: Cmd + Shift + R
- Windows: Ctrl + F5

## Naprawione

- `index.html` zawiera głównie strukturę panelu,
- wygląd panelu jest w `assets/app.css`,
- obsługa przycisków, ćwiczeń i QR jest w `assets/app.js`,
- warianty ćwiczeń są w `assets/exercises.js`,
- strony promptów korzystają ze wspólnych plików `assets/prompt.css` i `assets/prompt.js`,
- ćwiczenia otwierają się z kafelków,
- każde ćwiczenie ma warianty do losowania,
- trudne maile i notatki mają gotowe przykłady,
- prompty są w osobnych plikach HTML.
