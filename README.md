# Esercizio 03 - React Router con Loader

Questo progetto e stato creato con Vite e React.

L'obiettivo dell'esercizio e creare una Single Page Application usando React Router, rotte annidate e loader.

## Features richieste

- cartella `routing`;
- file `routing/router.js`;
- rotta principale con componente `Layout`;
- rotte figlie tramite proprieta `children`;
- viste `Homepage`, `PostsView`, `DetailView`, `LoginView` e `RegisterView`;
- loader per recuperare i post da JSONPlaceholder;
- loader per recuperare il dettaglio del singolo post;
- form visibili per login e registrazione, senza action.
- Context per salvare i dati dell'utente registrato;
- simulazione della registrazione utente;
- link `Posts` visibile solo se un utente e registrato.
- bottone di logout per rimuovere l'utente registrato dal Context.
- custom hook `useFetch`;
- custom hook `useScroll`.
- Tailwind CSS per lo stile;
- componenti daisyUI per navbar, card, bottoni, input e alert.
- React Hook Form per gestire i form di Login e Register;
- validazioni con `required` e `maxLength` sui campi dei form;
- messaggi di errore visibili quando l'utente non rispetta le regole.

## Struttura principale

```txt
src/
├── components/
│   ├── Layout.jsx
│   └── Navbar.jsx
├── context/
│   └── UserContext.jsx
├── hooks/
│   ├── useFetch.js
│   └── useScroll.js
├── routing/
│   └── router.js
├── views/
│   ├── DetailView.jsx
│   ├── Homepage.jsx
│   ├── LoginView.jsx
│   ├── PostsView.jsx
│   └── RegisterView.jsx
├── index.css
└── main.jsx
```

## Rotte

Le rotte sono definite nel file `src/routing/router.js`.

```txt
/              -> Homepage
/posts         -> PostsView
/posts/:postId -> DetailView
/login         -> LoginView
/register      -> RegisterView
```

La rotta principale restituisce il componente `Layout`.

Le altre rotte sono figlie della rotta principale tramite la proprieta `children`.

## Loader

La pagina `PostsView` usa il custom hook `useFetch` per recuperare i post da JSONPlaceholder.

La pagina `DetailView` riceve i dati dal loader `detailLoader`.

In questo modo il progetto mostra sia l'utilizzo dei loader sia l'utilizzo dei custom hooks.

## Context utente

Il file `src/context/UserContext.jsx` contiene:

- `UserProvider`;
- lo stato `user`;
- la funzione `registerUser`;
- la funzione `logoutUser`;
- l'hook personalizzato `useUserContext`.

Il `UserProvider` avvolge il `RouterProvider` nel file `src/main.jsx`.

In questo modo tutti i componenti dell'app possono leggere i dati dell'utente registrato.

## Registrazione simulata

La vista `RegisterView` contiene un form gestito con React Hook Form:

- nome;
- email;
- password.

Al submit del form, React Hook Form esegue `handleSubmit`.

Se i dati sono validi, l'utente viene salvato nel Context tramite `registerUser`.

La password viene usata solo per simulare il form e non viene salvata nel Context.

## React Hook Form

La libreria React Hook Form e stata installata con:

```bash
npm install react-hook-form
```

Nelle viste `RegisterView` e `LoginView` viene importato `useForm`:

```js
import { useForm } from 'react-hook-form'
```

`useForm` restituisce alcune funzionalita importanti:

- `register`, per collegare gli input alla libreria;
- `handleSubmit`, per gestire l'invio del form;
- `reset`, per svuotare il form dopo un submit valido;
- `errors`, per leggere gli errori di validazione.

Ogni campo input ha queste regole:

- `required`, quindi il campo non puo essere vuoto;
- `maxLength: 50`, quindi il campo puo contenere al massimo 50 caratteri.

Se l'utente non rispetta una regola, sotto l'input appare un messaggio di errore.

## Navbar condizionale

Il componente `Navbar` legge lo stato `user` dal Context.

Il link `Posts` viene mostrato solo quando `user` esiste.

Quando l'utente e registrato viene mostrato anche un bottone `Logout`.

Al click su `Logout`, la funzione `logoutUser` imposta `user` a `null`.

Di conseguenza il link `Posts` sparisce di nuovo.

Quindi:

- utente non registrato: vede Home, Login e Register;
- utente registrato: vede anche Posts e Logout.

## Custom hooks

Il progetto contiene due custom hooks nella cartella `src/hooks`.

### `useFetch`

Il file `src/hooks/useFetch.js` contiene un hook che riceve un URL e delle dependencies, fa una chiamata API con `fetch` e restituisce direttamente `data`.

La struttura e allineata alla lezione:

```js
useFetch(url, ...dependencies)
```

### `useScroll`

Il file `src/hooks/useScroll.js` contiene un hook che legge la posizione verticale dello scroll e restituisce:

- `scrollY`;
- `ref`.

Gli hook vengono usati in componenti reali del progetto:

- `useFetch` viene usato in `PostsView` per caricare i post;
- `useScroll` viene usato nella `Navbar` per cambiare stile quando l'utente scrolla la pagina.

La `Homepage` contiene una sezione aggiuntiva che crea spazio verticale, cosi e possibile scrollare e vedere il cambio di stile della navbar.

## Tailwind CSS e daisyUI

Il progetto usa Tailwind CSS con il plugin Vite ufficiale.

Installazione usata:

```bash
npm install tailwindcss @tailwindcss/vite --force
```

Il flag `--force` e stato usato come indicato dalla traccia, per evitare i problemi della nuova versione di Vite durante l'installazione.

Il progetto usa anche daisyUI:

```bash
npm install daisyui --force
```

Nel file `vite.config.js` e stato aggiunto il plugin Tailwind:

```js
import tailwindcss from '@tailwindcss/vite'
```

Nel file `src/index.css` sono presenti:

```css
@import "tailwindcss";
@plugin "daisyui";
```

Sono stati usati componenti/classi daisyUI come:

- `navbar`;
- `btn`;
- `card`;
- `input`;
- `alert`;
- `hero`.

## Comandi

Per installare le dipendenze:

```bash
npm install
```

Per avviare il progetto:

```bash
npm run dev
```

Per verificare la build:

```bash
npm run build
```
