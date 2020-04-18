# box and creature
you can: shoot circles from within the designated boundries...
![preview](https://raw.githubusercontent.com/metaheap/box-and-creature/master/box-and-creature.png "preview")

### algorithm:
WELCOME :)
![APC](/APC.webp)
```html
some people work on premis while others work from home. the goal is to bridge the gap between
100% distributed / 100% centralized / 100% distributed <-- 100% decentralized systems. such
that system (C) {simple: "static" remote grid of pixels} alternates between system (A)
{complex: "dynamic" keyboard} while system (B) {normalized: "local" two-way-binding} connects 
the two.
```

### settings:
- 6tyu: controls window-frame // super peer // leader
- TDVH: controls main-frame // left peer // follower
- UGNK: controls time-frame // right peer // follower
- YABL: controls card-frame // wall
- redf: controls poke-frame // circles

### notes:
- use shift or caps lock to toggle between settings
- use 7 to toggle window-frame between peers
- use space bar to reset the loop

### foundation
under the hood, matter.js runs in the browser as a sort of CRDT. first, a super-peer 
starts a loop by loading the box-and-creature program in their browser. after this, up to
two other annonymous players are allowed to connect using their own running loops. so, let's
say there are 3 running loops. Loop A is the "leader" while loops B and C are the
"followers". A only supervises the situation between B and C until V is achieved. Such that 
CVB is a secure connection. think about how RAFT functions for a minute. in a grid-locked
situation messages are sent in a static sort of way; up, left, down, right --> shoot. however,
when a "grid-locked" situation turns into a scenario where only a select few are dynamic,
pieces like CRDT and RAFT instantly change the situation; think thats interesting? assume i
want to build a fun competative game around a "particle-accelartor"; to begin, i'd like to
send an annonymous message from B to A. 

### situation
- FRED <-- simple <-- is there a race condition?
- CHAD <-- complex <-- what!

### program:
- begin `http-server . -p 3000`
- start `http://localhost:3000`

### basically:
```js
Game.initControls = function (game) {
  var mouseConstraint = game.mouseConstraint;
  var viewportCenter = game.viewportCenter;
  var player = game.player;
  player.rotation = 0; // number
  player.shooting = false; // boolean
  player.movement = {
    up: false,
    left: false,
    down: false,
    right: false
  };

  function crosshairMoved (event) {
    var delta = Vector.sub(game.playerConstraint.pointB, game.focusConstraint.pointB);
    player.rotation = Math.atan2(delta.y, delta.x);
  }

  function update (event, status) {
    switch (event.key) {
      case 'ArrowUp':
      case 'w':
        player.movement.up = status;
        break;

      case 'ArrowLeft':
      case 'a':
        player.movement.left = status;
        break;

      case 'ArrowDown':
      case 's':
        player.movement.down = status;
        break;

      case 'ArrowRight':
      case 'd':
        player.movement.right = status;
        break;

      default:
        // do nothing
        break;
    }
  }

  function startShooting (event) {
    player.shooting = true;
  }

  function stopShooting (event) {
    player.shooting = false;
  }

  function startMoving (event) {
    update(event, true);
  }

  function stopMoving (event) {
    update(event, false);
  }

  // keyboard controls player movement
  window.addEventListener('keydown', startMoving);
  window.addEventListener('keyup', stopMoving);

  // mouse controls player direction and weapons
  Events.on(mouseConstraint, 'mousemove', crosshairMoved);
  Events.on(mouseConstraint, 'mousedown', startShooting);
  Events.on(mouseConstraint, 'mouseup', stopShooting);
};
```
