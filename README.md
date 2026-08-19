# Random Mission

A small web app that shows a random productivity mission on a card. Click the button to get a new one.

## Features

- Picks a random mission from a built-in list
- Never shows the same mission twice in a row
- Simple card layout, no dependencies

## Usage

Clone the repo and open `index.html` in any browser.

```bash
git clone https://github.com/Auguxtow/random-mission.git
cd random-mission
```

## Project structure

```
index.html      # Page markup
css/style.css   # Card and layout styles
js/script.js    # Mission list and random pick logic
```

## Adding missions

Edit the `missions` array in `js/script.js`:

```js
const missions = [
  "Study the topic that you have been avoiding",
  "Your new mission here"
]
```

## Built with

HTML, CSS and vanilla JavaScript.
