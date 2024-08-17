# Podcast Manager [ TS - Nodejs ]

App para centralizar episódios de podcasts por categoria.

### Features

-   Listar os episódios por sessão de categorias
-   Filtrar episódios por nome do podcast

## Implementação

### Lista episódios

GET: retornar lista de episódios

```js
[
    {
        podcast: "Broxada Sinistra",
        episode: "FOFOCAS DA OLIMPÍADAS - #176",
        videoId: "_2LHPfGwkG0",
        categories: ["humor","esporte"]
    },
    {
        podcast: "Broxada Sinistra",
        episode: " PAULINHO SERRA E OLIMPÍADAS - #171",
        videoId: "SBXJGLhx3Kw",
        categories: ["humor","celebridades"];
    },
]

```

### Lista episódios filtradas

GET: retornar lista de episódios baseado em um parametro de filtro

```js
[
    {
        podcast: "Broxada Sinistra",
        episode: "FOFOCAS DA OLIMPÍADAS - #176",
        videoId: "_2LHPfGwkG0",
        categories: ["humor","esporte"]
    },
    {
        podcast: "Broxada Sinistra",
        episode: " PAULINHO SERRA E OLIMPÍADAS - #171",
        videoId: "SBXJGLhx3Kw",
        categories: ["humor","celebridades"];
    },
]

```
