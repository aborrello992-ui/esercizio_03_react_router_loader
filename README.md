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

## Struttura principale

```txt
src/
├── components/
│   ├── Layout.jsx
│   └── Navbar.jsx
├── context/
│   └── UserContext.jsx
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

La vista `RegisterView` contiene un form controllato con:

- nome;
- email;
- password.

Al submit del form viene eseguito `e.preventDefault()` e i dati dell'utente vengono salvati nel Context tramite `registerUser`.

La password viene usata solo per simulare il form e non viene salvata nel Context.

## Navbar condizionale

Il componente `Navbar` legge lo stato `user` dal Context.

Il link `Posts` viene mostrato solo quando `user` esiste.

Quando l'utente e registrato viene mostrato anche un bottone `Logout`.

Al click su `Logout`, la funzione `logoutUser` imposta `user` a `null`.

Di conseguenza il link `Posts` sparisce di nuovo.

Quindi:

- utente non registrato: vede Home, Login e Register;
- utente registrato: vede anche Posts e Logout.

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
