# Rock, Paper, Scissors

Simple browser-based Rock, Paper, Scissors game implemented with HTML, CSS and JavaScript.

## Files
- [index.html](index.html) — main HTML page.
- [style.css](style.css) — styles for the UI.
- [script.js](script.js) — game logic and DOM interactions.

## Quick start
1. Open [index.html](index.html) in a modern browser.
   - Or run a simple local server (recommended for some browsers):
     ```sh
     python -m http.server 8000
     # then open http://localhost:8000/index.html
     ```

## How to play
- Click one of the buttons on the page (Rock, Paper, Scissors).
  - Buttons are exposed as [`rockBtn`](script.js), [`paperBtn`](script.js), and [`scissorBtn`](script.js).
- The computer makes a random choice using [`getComputerChoice`](script.js).
- A single round is resolved by [`playRound`](script.js). The UI shows:
  - Your choice: element [`player-choice`](index.html)
  - Computer choice: element [`computer-choice`](index.html)
  - Result text: element [`result-text`](index.html)
  - Scores: [`player-score`](index.html) and [`computer-score`](index.html)

## Implementation notes
- Scores are stored in `playerScore` and `computerScore` (see [`script.js`](script.js)).
- The result text color is updated in the DOM via the [`resultTextEl`](script.js) element.
- Random choice is selected from `['rock', 'paper', 'scissor']` in [`getComputerChoice`](script.js).

## Possible improvements
- Add animations for choices.
- Add reset button or match-to-N rounds.
- Improve accessibility (aria attributes and keyboard support).
- Add unit tests for game logic (extract outcome logic to a pure function).

## Contributing
- Fork, modify, test by opening [index.html](index.html), and submit a PR.

## Personal Notes
For this project, I mostly relied on Google Gemini for guidance.  And this is what I've learned from...
 -  I discovered that you can use `<div>` as a container for all items.
 -  Previously, I was interested about how to use `id` and `class`, and this project helped me understand that you should use `Class` when you want to modify the entire thing, and `Id` when you want it to be unique, which you will use to style in CSS and script.
 -  I learned to apply logic when writing scripts.  You must grasp everything and ensure that each line makes sense.
