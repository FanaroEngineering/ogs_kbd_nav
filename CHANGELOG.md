# Changelog

## 1.0.2.

- A logo on the nav bar appears when the user enables the extension.

## 1.0.1

### New Features

- Global switch shortcut for globally enabling/disabling the whole extension.
- Added support for different Goban sizes &mdash; currently 9x9, 13x13 and 19x19.
- Added a shortcut to toggle the arrow keys so they don't necessarily conflict with OGS' UI/UX.

### Code Improvements

- Isolated most of the UI into a dedicated object, instead of having it all inside `Kbd`.
- Created a configurations object to abstract way the state of the user's configurations.

## 1.0.0

New features:

- Pass shortcut.
- Toggle of the the AI analysis.
- An input field for inputting the coordinates of the move you would like to play.
    - A shortcut for showing or not this input field.

The project also features better code and more design assets, like an icon, screenshots and a demo GIF.

## 0.1.0

Check [this game][example_game] for an example of a game successfully played from the beginning to the end with this extension.

Current main shortcut features:

- Toggling of the chat input.
- Toggling of the overlaying canvas with the stone marker.
- Movement of the stone marker with either the arrow keys or WASD.


[example_game]: https://online-go.com/game/28332935