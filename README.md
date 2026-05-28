# Esercizio 03 - React Router con Loader

Questo progetto e stato sviluppato come selfwork didattico su React Router.

L'obiettivo dell'esercizio e costruire una piccola Single Page Application con:

- una rotta principale che renderizza `Layout`;
- rotte figlie definite tramite `children`;
- `Outlet` per mostrare le pagine annidate;
- `loader` per spostare le chiamate API fuori dai componenti;
- due viste `Login` e `Register` con form solo visivi.

## Obiettivo didattico

Questo esercizio serve a fissare le basi di React Router seguendo la consegna in modo fedele.

Il focus non e su Context, autenticazione simulata, custom hooks o React Hook Form.
Il focus e su:

- `main.jsx`
- `App.jsx`
- `RouterProvider`
- `createBrowserRouter()`
- rotta principale con `Layout`
- proprieta `children`
- componente `Outlet`
- `loader`
- `useLoaderData()`

## Features richieste dalla traccia

- cartella `routing`;
- file `src/routing/router.js`;
- rotta principale con componente `Layout`;
- rotte figlie tramite `children`;
- viste `Homepage`, `PostsView`, `DetailView`, `LoginView`, `RegisterView`;
- loader per la lista dei post;
- loader per il dettaglio del singolo post;
- form visibili per login e registrazione, senza logica reale.

## Struttura del progetto

```txt
src/
├── components/
│   ├── Layout.jsx
│   └── Navbar.jsx
├── routing/
│   └── router.js
├── views/
│   ├── DetailView.jsx
│   ├── Homepage.jsx
│   ├── LoginView.jsx
│   ├── PostsView.jsx
│   └── RegisterView.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Ruolo di main.jsx e App.jsx

La struttura corretta del progetto segue questa catena:

```txt
main.jsx -> App.jsx -> RouterProvider -> router.js
```

- `main.jsx` ha il compito di montare l'applicazione React
- `App.jsx` contiene il `RouterProvider`
- `router.js` definisce tutte le rotte

Questa organizzazione e coerente con le convenzioni standard di React e rende il progetto piu manutenibile.

## Rotte

Le rotte sono definite nel file `src/routing/router.js`.

```txt
/              -> Homepage
/posts         -> PostsView
/posts/:postId -> DetailView
/login         -> LoginView
/register      -> RegisterView
```

La rotta principale restituisce `Layout`.

Tutte le altre rotte sono figlie della rotta principale tramite la proprieta `children`.

## Perche `router.js` usa `createElement`

La traccia richiedeva espressamente un file chiamato `router.js`.

Per mantenere il file con estensione `.js` ed evitare problemi con JSX diretto nel router, il progetto usa:

```js
import { createElement } from 'react'
```

E poi:

```js
element: createElement(Layout)
```

Questa scelta e coerente con la lezione e con il vincolo del nome file richiesto dalla traccia.

## Layout e Outlet

Il componente `Layout` contiene:

- la `Navbar`
- il componente `Outlet`

`Outlet` e il punto in cui React Router renderizza la rotta figlia attiva.

Quindi:

- su `/` viene mostrata `Homepage`
- su `/posts` viene mostrata `PostsView`
- su `/posts/:postId` viene mostrata `DetailView`
- su `/login` viene mostrata `LoginView`
- su `/register` viene mostrata `RegisterView`

## Loader

### Loader della lista post

Nel router e presente un loader dedicato ai post:

```js
async function postsLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok) {
    throw new Error('Errore durante il caricamento dei post')
  }

  return response.json()
}
```

### Loader del dettaglio

Per la pagina di dettaglio viene usato un loader con parametro dinamico:

```js
async function detailLoader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )

  if (!response.ok) {
    throw new Error('Errore durante il caricamento del dettaglio')
  }

  return response.json()
}
```

## useLoaderData

Le view leggono i dati del loader tramite `useLoaderData()`.

Esempi:

```js
const posts = useLoaderData()
```

```js
const post = useLoaderData()
```

In questo modo i componenti non devono piu gestire direttamente la fetch dentro `useEffect`.

## Views

### Homepage

Mostra una breve introduzione al selfwork React Router.

### PostsView

Mostra i post ricevuti dal `postsLoader` e crea un link al dettaglio di ogni post.

### DetailView

Mostra il singolo post ottenuto dal `detailLoader` tramite `params.postId`.

### LoginView

Contiene un form visibile con:

- email
- password
- bottone `Accedi`

Il form non ha submit reale, come richiesto dalla consegna.

### RegisterView

Contiene un form visibile con:

- nome
- email
- password
- bottone `Registrati`

Anche questo form e solo visivo.

## Cosa e stato volutamente escluso

Per restare coerenti con la traccia e con la lezione, in questa versione non abbiamo incluso:

- Context utente
- registrazione simulata
- login simulato
- logout
- custom hooks per il recupero dati
- React Hook Form
- navbar condizionale in base a un utente salvato nello stato

Questi elementi possono essere corretti in altri esercizi, ma non sono il cuore di questo selfwork.

## Stile

Il progetto usa:

- Tailwind CSS
- daisyUI

per avere una struttura visiva semplice e leggibile.

## API usata

I dati arrivano da:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Avvio del progetto

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Build di produzione:

```bash
npm run build
```

## Nota finale

Questa versione del progetto e stata riallineata alla lezione in modo piu didattico, con una struttura piu semplice, piu leggibile e piu coerente con la consegna del selfwork React Router e con la convenzione corretta `main.jsx -> App.jsx -> router`.
