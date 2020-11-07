# OGS Kbd Nav

[![TS][github_ci_badge]][github_actions]


[github_actions]: https://github.com/FanaroEngineering/ogs_kbd_nav/actions
[github_ci_badge]: https://github.com/FanaroEngineering/ogs_kbd_nav/workflows/TS/badge.svg

## 1. What is this?

Keyboard &mdash; better &mdash; navigation for [OGS][ogs], the best online platform for playing the game of [Go][go].


[go]: https://en.wikipedia.org/wiki/Go_(game)
[ogs]: https://online-go.com/

## 2. Other Resources

Two other examples of keyboard navigation browser extensions:

- [Web Search Navigator][web_search_navigator]: probably one of the best productivity browser extensions out there.
- [YouTube Kbd Nav][youtube_kbd_nav]: a way of making YouTube more navigable 95% of the time, through the keyboard<sup>1</sup>.


<sub>1: Created by me. Sorry for the self-promotion, but it is really useful, I guarantee it!</sub>


[web_search_navigator]: https://github.com/infokiller/web-search-navigator
[youtube_kbd_nav]: https://github.com/FanaroEngineering/youtube_kbd_nav

## 3. For the Developer

### 3.1. Compiling with TypeScript

The JS code won't be version controlled (`dist`), the programmer should be able to easily recreate it by compiling it from the TS code (`src`).

Simply use this to compile the TS code to JS:

```cmd
tsc -w
```

### 3.2. Running Tests

If you use `tsc -w`, you can either use `npm t` to run tests with [Jest][jest] or use the following to watch the tests as the code changes with `tsc -w`:

```cmd
npm t -- --watch
```


[jest]: https://jestjs.io/en/