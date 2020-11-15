# OGS Kbd Nav

[![TS][github_ci_badge]][github_actions]


[github_actions]: https://github.com/FanaroEngineering/ogs_kbd_nav/actions
[github_ci_badge]: https://github.com/FanaroEngineering/ogs_kbd_nav/workflows/TS/badge.svg

<!-- TOC depthFrom:2 -->

- [1. What is this?](#1-what-is-this)
- [2. Table of Shortcuts](#2-table-of-shortcuts)
- [3. Other Resources](#3-other-resources)
- [4. For the Developer](#4-for-the-developer)
    - [4.1. How does this work?](#41-how-does-this-work)
    - [4.2. Compiling with TypeScript](#42-compiling-with-typescript)
    - [4.3. Compiling with Webpack](#43-compiling-with-webpack)
    - [4.4. Running Tests](#44-running-tests)
    - [4.5. The Complete Development Setup](#45-the-complete-development-setup)

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

### 4.1. How does this work?

I'm basically using the [`StoneMarkerUi`][stonemarkerui] class to draw a canvas on top of the existing OGS ones with the movable marker. It would be tough to make it work with the same existing canvas because erasing stuff while OGS tries to draw its own doesn't work very well in HTML.

A possibly easier way of doing all this would be to use the global variable `global_goban`, which OGS makes available on its pages &mdash; I didn't know of its existence until [Akita Anoek][anoek], the main developer of OGS, mentioned it to me. It is also kind of tricky to use global variable in browser extension contexts because most of the standardized files live in isolated worlds, but a solution to this problem can be found [here][so_global_variable].

Lastly, to draw the markers with size and positioning proportional to OGS', I essentially used a brute force approach. I've manually and visually worked out the size and positioning through approximations while with a fixed sized goban on my screen. And then I simply created a `ratio` property based on that goban size, which would be used to multiply the default sizes and positions I had originally worked out. Surprisingly, this approach was enough to make things work. 


[anoek]: https://github.com/anoek
[so_global_variable]: https://stackoverflow.com/a/64823100/4756173
[stonemarkerui]: lib/src/ui/stone_marker_ui.ts

### 4.2. Compiling with TypeScript

The JS code won't be version controlled (`dist`), the programmer should be able to easily recreate it by compiling it from the TS code (`src`).

Simply use this to compile the TS code to JS:

```cmd
tsc -w
```

### 4.3. Compiling with Webpack

After installing the `webpack-cli` package, run:

```cmd
npx webpack -w
```

to enable compilation bundling and minifying on watch mode.

### 4.4. Running Tests

If you use `tsc -w`, you can either use `npm t` to run tests with [Jest][jest] or use the following to watch the tests as the code changes with `tsc -w`:

```cmd
npm t -- --watch
```


[jest]: https://jestjs.io/en/

### 4.5. The Complete Development Setup

The current setup will compile TS code to JS into the `dist/dev` folder for testing purposes (TDD), while compiling production code into the `dist/prod` folder for (manual) testing inside the browser.

You can achieve all of that at the same time by opening at least 3 terminals and running the following under watch mode &mdash; these commands were all described in the sections above &mdash;:

- `tsc -w`
- `npx webpack -w`
- `npm t -- --watch`