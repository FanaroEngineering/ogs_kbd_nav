# OGS Kbd Nav

[![Downloads][github_downloads]][github_releases]
[![TS][github_ci_badge]][github_actions]
[![Buy Me A Coffee][buy_me_a_coffee_badge]][buy_me_a_coffee_donation]


[buy_me_a_coffee_badge]: assets/buy_me_a_coffee_shield.svg
[buy_me_a_coffee_donation]: https://www.buymeacoffee.com/psygo
[github_actions]: https://github.com/FanaroEngineering/ogs_kbd_nav/actions
[github_ci_badge]: https://github.com/FanaroEngineering/ogs_kbd_nav/workflows/TS/badge.svg
[github_downloads]: https://img.shields.io/github/downloads/FanaroEngineering/ogs_kbd_nav/total.svg
[github_releases]: https://github.com/FanaroEngineering/ogs_kbd_nav/releases

<!-- TOC depthFrom:2 -->

- [1. What is this?](#1-what-is-this)
- [2. Table of Shortcuts](#2-table-of-shortcuts)
- [3. How to Install This Browser Extension](#3-how-to-install-this-browser-extension)
    - [3.1. From a Github Release](#31-from-a-github-release)
    - [3.2. Google Chrome](#32-google-chrome)
    - [3.3. Microsoft Edge](#33-microsoft-edge)
    - [3.4. Firefox](#34-firefox)
- [4. Other Resources](#4-other-resources)
- [5. For the Developer](#5-for-the-developer)
    - [5.1. How does this work?](#51-how-does-this-work)
    - [5.2. Compiling with TypeScript](#52-compiling-with-typescript)
    - [5.3. Compiling with Webpack](#53-compiling-with-webpack)
    - [5.4. Running Tests](#54-running-tests)
    - [5.5. The Complete Development Setup](#55-the-complete-development-setup)

<!-- /TOC -->

## 1. What is this?

Keyboard &mdash; better &mdash; navigation for [OGS][ogs], the best online platform for playing the game of [Go][go]. Now, instead of only being able to play the ancient game online with your mouse, you can do it with your keyboard as well. Other handy shortcuts are also included.


[go]: https://en.wikipedia.org/wiki/Go_(game)
[ogs]: https://online-go.com/

## 2. Table of Shortcuts

> **This extension currently only works if you have *all* the coordinates turned on.**

| Shortcut                          | Action                                          |
| --------------------------------- | ----------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>m</kbd>    | Toggle the chat input box on a game page        |
| <kbd>Ctrl</kbd> + <kbd>b</kbd>    | Toggle the canvas overlay with the stone marker |
| <kbd>w</kbd> or <kbd>&uarr;</kbd> | Move the stone marker up                        |
| <kbd>a</kbd> or <kbd>&larr;</kbd> | Move the stone marker left<sup>1</sup>          |
| <kbd>s</kbd> or <kbd>&darr;</kbd> | Move the stone marker down                      |
| <kbd>d</kbd> or <kbd>&rarr;</kbd> | Move the stone marker right                     |
| <kbd>Enter</kbd> or <kbd>j</kbd>  | Click on the stone marker's location            |
| <kbd>Ctrl</kbd> + <kbd>p</kbd>    | Pass                                            |

<sub>1: Using the left arrow also may activate analysis during the game, so I'm currently programmatically pressing the `Back to game` button in the background.</sub>

## 3. How to Install This Browser Extension

You can either install it through the [Github releases][releases] or through the &mdash; future &mdash; published extensions on Google Chrome's, Microsoft Edge's and Firefox's browser extension stores.


[releases]: https://github.com/FanaroEngineering/ogs_kbd_nav/releases

### 3.1. From a Github Release

1. Go to the [releases][releases] page.
1. Download the latest release's ZIP folder.
1. Extract the content somewhere.
1. Go to your browser's extension page.
1. Activate <kbd>Developer Mode</kbd>.
1. Load the unpacked extension.

### 3.2. Google Chrome

### 3.3. Microsoft Edge

### 3.4. Firefox

## 4. Other Resources

Two other examples of keyboard navigation browser extensions:

- [Web Search Navigator][web_search_navigator]: probably one of the best productivity browser extensions out there.
- [YouTube Kbd Nav][youtube_kbd_nav]: a way of making YouTube more navigable 95% of the time, through the keyboard<sup>1</sup>.


<sub>1: Created by me. Sorry for the self-promotion, but it is really useful &mdash; I use it every day &mdash;, I guarantee it!</sub>


[web_search_navigator]: https://github.com/infokiller/web-search-navigator
[youtube_kbd_nav]: https://github.com/FanaroEngineering/youtube_kbd_nav

## 5. For the Developer

### 5.1. How does this work?

I'm basically using the [`StoneMarkerUi`][stonemarkerui] class to draw a canvas on top of the existing OGS ones with the movable marker. It would be tough to make it work with the same existing canvas because erasing stuff while OGS tries to draw its own doesn't work very well in HTML.

A possibly easier way of doing all this would be to use the global variable `global_goban`, which OGS makes available on its pages &mdash; I didn't know of its existence until [Akita Anoek][anoek], the main developer of OGS, mentioned it to me. It is also kind of tricky to use global variable in browser extension contexts because most of the standardized files live in isolated worlds, but a solution to this problem can be found [here][so_global_variable].

Lastly, to draw the markers with size and positioning proportional to OGS', I essentially used a brute force approach. I've manually and visually worked out the size and positioning through approximations while with a fixed sized goban on my screen. And then I simply created a `ratio` property based on that goban size, which would be used to multiply the default sizes and positions I had originally worked out. Surprisingly, this approach was enough to make things work. 


[anoek]: https://github.com/anoek
[so_global_variable]: https://stackoverflow.com/a/64823100/4756173
[stonemarkerui]: lib/src/ui/stone_marker_ui.ts

### 5.2. Compiling with TypeScript

The JS code won't be version controlled (`dist`), the programmer should be able to easily recreate it by compiling it from the TS code (`src`).

Simply use this to compile the TS code to JS:

```cmd
tsc -w
```

### 5.3. Compiling with Webpack

After installing the `webpack-cli` package, run:

```cmd
npx webpack -w
```

to enable compilation bundling and minifying on watch mode.

### 5.4. Running Tests

If you use `tsc -w`, you can either use `npm t` to run tests with [Jest][jest] or use the following to watch the tests as the code changes with `tsc -w`:

```cmd
npm t -- --watch
```


[jest]: https://jestjs.io/en/

### 5.5. The Complete Development Setup

The current setup will compile TS code to JS into the `dist/dev` folder for testing purposes (TDD), while compiling production code into the `dist/prod` folder for (manual) testing inside the browser.

You can achieve all of that at the same time by opening at least 3 terminals and running the following under watch mode &mdash; these commands were all described in the sections above &mdash;:

- `tsc -w`
- `npx webpack -w`
- `npm t -- --watch`