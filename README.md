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

## Struttura principale

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

La pagina `PostsView` riceve i dati dal loader `postsLoader`.

La pagina `DetailView` riceve i dati dal loader `detailLoader`.

In questo modo le chiamate API non vengono fatte direttamente dentro le view con `useEffect`, ma vengono gestite dalla configurazione delle rotte.

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
