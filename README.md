# box and creature
you can: wasd around and shoot circles until your memory runs out

![preview](https://raw.githubusercontent.com/metaheap/box-and-creature/master/box-and-creature.png "preview")

### start:
- global `gulp bower babel-cli`
- begin `git clone` then `cd`
- install `npm i` then `bower i`
- run `babel src -d lib` then `node .`
- finally `http://localhost:3000`

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
