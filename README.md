# box and creature kite
you can: shoot circles for as long as you follow the rules // TLDR
![preview](https://raw.githubusercontent.com/trabur/box-and-creature-kite/master/PAC.png "preview")

Here is a story of an employee who worked at an antique shop. Let's say this worker is named Bob. Well, I'm not 100% sure on the backstory with Bob and his antique motorcycle. However I find it interesting. So Bob has this bike and decides he wants to take the entire thing apart and store it behind his house. Bob completely disassembles the entire machine including handlebars, saddle, fork, wheels, chain, brakes, etc. then proceeds to take each component apart including the brake's screws, chain's links, and even the wheel's hubs & spokes. Down to the bearings. Bob, out in the middle of his backyard, then built a platform. On top of this platform each piece was then placed on a display in some way. Bob then built four walls around his platform and then a roof on top of that. This shed of his had no windows or doors. It was a completely sealed box.

### algorithm:
Bob likes to break the AI algo with his garbage truck. 

### program:
- begin `http-server . -p 3000`
- start `http://localhost:3000`

### code
Bob's mechanics.
```js
Game.initControls = function (game) {
  var mouseConstraint = game.mouseConstraint;
  var viewportCenter = game.viewportCenter;
  var player = game.player;
  player.shooting = false; // 2 values at a time
  player.rotation = 0; // 10 values at a time
  player.movement = { // 4 values at a time
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
