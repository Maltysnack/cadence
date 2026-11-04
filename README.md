# Cadence

A quiet focus companion that runs in your browser. You stay focused by default; the few things you switch on for today interrupt you at the right moment, you do them, and carry on. No timers to start, no work blocks.

**Use it: https://maltysnack.github.io/cadence/**

Nothing is uploaded. Your lists live in your browser's local storage on your device.

## How to use it

1. Pick a place (Home, Work, Library, or add your own).
2. Type into the box at the bottom and press Enter:
   - `Stretch every 60m` repeats about every hour
   - `Run before 1800` happens once, at a random moment before 6pm
   - `Pickup @1730` pings at 5:30pm, with heads-ups at 30 and 10 minutes
   - Paste a whole list and each line becomes an item. `Pullups/Dips/Swings` rotates one option per ping.
3. Press Start. You get a clock; leave it open in a tab.
4. When something pings, choose Done, delay it, or Not today. Everything else pauses until you answer.

Tip: turn on "Alerts" on the clock page for sound.

## Run it yourself

It is one file with no build and no dependencies.

```sh
./run.sh   # http://localhost:8765
```

Keep the address and port fixed, because browser storage is tied to them.

## Notes for tinkering

`index.html` is the whole app. Saved state is under the `cadence.v3` key; to reset, run `localStorage.removeItem('cadence.v3')` in the console.
