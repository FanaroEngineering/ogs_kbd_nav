# OGS Kbd Nav

[![TS][github_ci_badge]][github_actions]


[github_actions]: https://github.com/FanaroEngineering/ogs_kbd_nav/actions
[github_ci_badge]: https://github.com/FanaroEngineering/ogs_kbd_nav/workflows/TS/badge.svg

<!-- TOC depthFrom:2 -->

- [1. What is this?](#1-what-is-this)
- [2. Table of Shortcuts](#2-table-of-shortcuts)
- [3. Other Resources](#3-other-resources)
- [4. For the Developer](#4-for-the-developer)
    - [4.1. Compiling with TypeScript](#41-compiling-with-typescript)
    - [4.2. Compiling with Webpack](#42-compiling-with-webpack)
    - [4.3. Running Tests](#43-running-tests)
    - [4.4. The Complete Development Setup](#44-the-complete-development-setup)

<!-- /TOC -->

## 1. What is this?

Keyboard &mdash; better &mdash; navigation for [OGS][ogs], the best online platform for playing the game of [Go][go]. Now, instead of only being able to play the ancient game online with your mouse, you can do it with your keyboard as well. Other handy shortcuts are also included.


[go]: https://en.wikipedia.org/wiki/Go_(game)
[ogs]: https://online-go.com/

## 2. Table of Shortcuts

| Shortcut                                                                | Action                                          |
| ----------------------------------------------------------------------- | ----------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>m</kbd>                                          | Toggle the chat input box on a game page        |
| <kbd>Ctrl</kbd> + <kbd>b</kbd>                                          | Toggle the canvas overlay with the stone marker |
| <kbd>&uarr;</kbd> <kbd>&rarr;</kbd> <kbd>&darr;</kbd> <kbd>&larr;</kbd> | Move the stone marker around the overlay canvas |
| <kbd>Enter</kbd>                                                        | Click on the stone marker's location            |

## 3. Other Resources

Two other examples of keyboard navigation browser extensions:

- [Web Search Navigator][web_search_navigator]: probably one of the best productivity browser extensions out there.
- [YouTube Kbd Nav][youtube_kbd_nav]: a way of making YouTube more navigable 95% of the time, through the keyboard<sup>1</sup>.


<sub>1: Created by me. Sorry for the self-promotion, but it is really useful &mdash; I use it every day &mdash;, I guarantee it!</sub>


[web_search_navigator]: https://github.com/infokiller/web-search-navigator
[youtube_kbd_nav]: https://github.com/FanaroEngineering/youtube_kbd_nav

## 4. For the Developer

### 4.1. Compiling with TypeScript

The JS code won't be version controlled (`dist`), the programmer should be able to easily recreate it by compiling it from the TS code (`src`).

Simply use this to compile the TS code to JS:

```cmd
tsc -w
```

### 4.2. Compiling with Webpack

After installing the `webpack-cli` package, run:

```cmd
npx webpack -w
```

to enable compilation bundling and minifying on watch mode.

### 4.3. Running Tests

If you use `tsc -w`, you can either use `npm t` to run tests with [Jest][jest] or use the following to watch the tests as the code changes with `tsc -w`:

```cmd
npm t -- --watch
```


[jest]: https://jestjs.io/en/

### 4.4. The Complete Development Setup

The current setup will compile TS code to JS into the `dist/dev` folder for testing purposes (TDD), while compiling production code into the `dist/prod` folder for (manual) testing inside the browser.

You can achieve all of that at the same time by opening at least 3 terminals and running the following under watch mode &mdash; these commands were all described in the sections above &mdash;:

- `tsc -w`
- `npx webpack -w`
- `npm t -- --watch`