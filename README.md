# box and creature kite
you can: shoot circles for as long as you follow the rules // TLDR
![preview](https://raw.githubusercontent.com/trabur/box-and-creature-kite/master/PAC.png "preview")

### algorithm:
WELCOME :)

movements between followers are annonymous because they are passed between leaders. these
"supervisors" control the situation. given enough time movement either halts to a complete
stop or accelerates into a complete go; the trick is to balance in between. the driving force
behind this system of thought or "cosmos" is physics. that's why we need time --> for
communicating machine to machine. that's why we need space ... for limits and boundaries.

movement is tracked by looping over each peer in the network for requests in a round robin
way. when a request is sent from a follower to the leader <-- such as move right <-- a 
supervisor will then give 1 block of time ... then wait that amount of time ... because
space and time are interchangable; annonymous is allowed to move 1 position or be still
for 1 position. this removes the need for encryption because additional layers only add
--> lag to the system ... where speed is key here.


![APC](/APC.webp)
```html
some people work on-premises while others work from home. the goal is to bridge the gap between
100% distributed / 100% centralized / 100% distributed <-- 100% decentralized systems ... such
that system (C) {simple: "static" remote grid of pixels} alternates between system (A)
{complex: "dynamic" keyboard} while system (B) {normalized: "local" two-way-binding} connects 
the two.
```

### settings:
- 6tyu: controls window-frame // leader // super peer
- TDVH: controls main-frame // follower // left peer
- UGNK: controls time-frame // follower // right peer
- YABL: controls card-frame // wall
- redf: controls poke-frame // circles

### notes:
- press shift or caps-lock to toggle between settings
- press 7 to toggle window-frame between peers
- press command+click to SSH into a follower as annonymous
- press space-bar to reset the loop
- press control+click to SSH into a leader as annonymous
- press delete to block a peer
- press return to connect a peer
- press ESC to back out of SSH tunnel

### foundation:
under the hood, matter.js runs in the browser as a sort of CRDT. first, a super-peer 
starts a loop by loading the box-and-creature-kite program in their browser. after this, up to
two other annonymous players are allowed to connect using their own running loops. so, let's
say there are 3 running loops. Loop A is the "leader" while loops B and C are the
"followers". A only supervises the situation between B and C until V is achieved. such that 
CVB is a secure connection. think about how RAFT functions for a minute. in a grid-locked
situation messages are sent in a static sort of way; up, left, down, right --> shoot. however,
when a "grid-locked" situation turns into a scenario where only a select few are dynamic,
pieces like CRDT and RAFT instantly change the situation; think thats interesting? assume i
want to build a fun competative game around a "particle-accelartor"; to begin, i want to
send an annonymous messages between A, B, and C.

### situation:
- FRED <-- simple ... is there a race condition?
- CHAD <-- complex ... what!

### program:
- begin `http-server . -p 3000`
- start `http://localhost:3000`

### basically:
CRDTs are like punchcard programming but not so hands on; holes are poked in a "remote" 
sort of way. sometimes it's not the biggest poke or the most pokes that wins you the
game // it's the position of each piece that matters. my cat may be on to something 
here :)


![ABC](/ABC.png)
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
