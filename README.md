# E:NDftG

**[Play E:NDftG on GitHub Pages](https://nathan-culver.github.io/e-ndftg/)**

A mobile-first, unofficial browser adaptation of **Eclipse: New Dawn for the Galaxy (first edition)**, with a Situation Room style interface, solo AI opponents and portable device saves.

**Status: playable implementation alpha. This is not a verified, complete asset-for-asset or rules-perfect reproduction.** Some printed component values and layouts are reconstructed. See [coverage and remaining work](docs/COVERAGE.md).

## Play

Open the GitHub Pages site, select **Solo vs AI**, choose two to six civilizations and set each AI to Easy, Normal or Hard. No account, API key, installation, subscription or server is needed to play. Local hotseat is also available.

Choose an action, complete its operations, and select **Finish action**. You may use colony ships during your turn without taking an action. **Pass** ends normal actions for the round, while allowing one-operation Move, Build or Upgrade reactions on later turns. All players passing starts combat.

Tap the **?** buttons throughout the game for explanations and current requirements, including why some actions or technologies are unavailable. The **What to do next** banner follows the active action, unresolved choices, combat and upkeep. Help supports keyboard focus and Escape, and preserves open forms.

The map supports dragging, two-finger pinch zoom and zoom controls. Select a sector to inspect its population and fleet. Explore highlights available frontier spaces. Move requires selecting a ship and then an eligible destination.

The Research screen shows the shared market, discounts, minimum costs and technology effects. Shipyard edits individual component slots and validates energy balance and drives before a blueprint is applied. Existing ships change with their shared blueprint.

## Save and load on a phone or computer

- Automatic save after every accepted order, with a rolling backup.
- Three labeled manual save slots in browser storage.
- **Export file** downloads a portable JSON game file; **Import file** restores it on another phone or computer.
- Saves include RNG state, the galaxy, inventories, ship blueprints, AI difficulty, pending discoveries, active actions and combat.
- Import validates the file before replacing the current game. Imported games begin with AI paused.
- Browser storage is specific to the current site, browser and device. Export files independently to protect against storage clearing or eviction.
- After a successful online visit, a service worker supports reopening the cached game offline; availability depends on browser storage and support.

## AI

Easy uses randomized priorities and a conservative action budget. Normal scores economic expansion, technology and fleet actions. Hard uses more deterministic strategic scoring and battle/retreat assessments. All difficulty modes use the same resources, rules checks and dice as humans. These are heuristic policies, not a claim of expert-level AI.

## Single-file edition

`E-NDftG.html` in the downloadable package contains the interface and game code in one file. Open it in a modern browser on a computer. Mobile file-opening behavior and browser-local storage vary; the hosted GitHub Pages version remains the intended mobile delivery path. Export JSON saves regularly. The multi-file source remains suitable for GitHub Pages.

## Source and development

The user supplied [this first-edition rulebook](https://board-game-rules.com/wp-content/uploads/2025/01/eclipse-new-dawn-for-the-galaxy_Official-Rules.pdf). Interface reference: [Galactic Imperium: The Situation Room](https://github.com/Nathan-Culver/galactic-imperium-situation-room).

The game is buildless ES modules. Node.js is needed only for tests and the optional packaging script:

```sh
node --test tests/*.test.mjs
node build.mjs
```

Serve the repository root with any static web server. For GitHub Pages, publish the root of `main`; all asset paths are relative and work under a repository subpath. `dist/` is a generated local preview copy, not required by GitHub Pages.

Files: `engine.js` is the transactional game engine; `data.js` is the component data; `ai.js` contains difficulty policies; `app.js` is the interface; `storage.js` handles saves; `sw.js` caches the application.

## Attribution

Eclipse was designed by Touko Tahkokallio and published by Lautapelit.fi. This unofficial project uses an original browser interface and locally drawn vector component representations. It does not bundle the commercial rulebook, printed board scans or original illustrations. The original game and its creators are not represented as endorsing this project.
