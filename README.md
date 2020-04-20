# box and creature kite
you can: shoot circles for as long as you follow the rules // TLDR
![preview](https://raw.githubusercontent.com/trabur/box-and-creature-kite/master/PAC.png "preview")

WELCOME :)

Here is a story of an employee who worked at an antique shop. Let's say this worker is named Bob. Well, I'm not 100% sure on the backstory with Bob and his antique motorcycle. However I find it interesting. So Bob has this bike and decides he wants to take the entire thing apart and store it behind his house. Bob completely disassembles the entire machine including handlebars, saddle, fork, wheels, chain, brakes, etc. then proceeds to take each component apart including the brake's screws, chain's links, and even the wheel's hubs & spokes. Down to the bearings. Bob, out in the middle of his backyard, then built a platform. On top of this platform each piece was then placed on a display in some way. Bob then built four walls around his platform and then a roof on top of that. This shed of his had no windows or doors. It was a completely sealed box.

### algorithm:
movements between followers are annonymous because they are passed between leaders. these
"supervisors" control the situation. given enough time movement either halts to a complete
stop or accelerates into a complete go; the trick is to balance in between. the driving force
behind this system of thought or "cosmos" is physics. that's why we need time ... for
communicating machine to machine. that's why we need space --> for limits and boundaries.

movement is tracked by looping over each peer in the network for requests in a round robin
way. when a request is sent from a follower to the leader <-- such as move left <-- a 
supervisor will allocate 1 block of memory ... then wait until a JUMP statement completes
... this is not harmful to leaders because space and time are interchangable for them; 
therefore followers are allowed to "jump" positions or remain in their current state. this
removes the need for encryption because additional layers only add <--> lag to the 
system where speed is key .... here.

![APC](/APC.webp)

some people work on-premise while others work from home. the challange that BACK presents is --> 100% distributed / 100% centralized / 100% distributed ... 100% decentralized systems. 
```html
such that:
system (A) {ground: "static" two-way-binding STRING} connects to
system (B) {simple: "dynamic" three-way-binding KITE} conntects to
system (C) {complex: "local/remote" four-way-binding WIND}
```

### basically:
pick any 1 letter message, pick any 2 letter message, pick any 3 letter message, etc. what
ever it is there are only so many options to choose from. the goal is to build something
that is only known to the user and kept secret between everyone else; yet, while like any key 
and lock the building only functions with both present. think: MATH (human at machine). so,
let's say we already have 4 letters layed down as the foundation; for example: conflict-free
replicated datatype (CRDT). next you will want to stack each message ontop of one another
such that it does not collapse under it's own weight. a nice stack might look like 3 on top 
of 4, then 2 on top of 3, and then 1 on top of 2; which is a simple pyramid that holds up under
it's own weight agaist gravity. if you've ever seen the movie "cube" you might also be aware
of stacks such as 4 on top of 4, on top of 4, on top of 4; which is a simple box that holds
up under it's own weight with gravity. 

I kind of like to think of it as punchcard programming but not so hands on; because holes 
are poked in a "remote" sort of way. sometimes it's not the biggest poke or the most pokes
that wins you the game // it's the position of each piece that matters. my cat may be on
to something here :)

![ABC](/ABC.png)

### game:
a leaderboard keeps supervisors in line. the leader decides how games are matched up. let's
say two players (Bob and Carl) enter a supervisors game (Alice). first, A will round robin
B and C for input controls. such as // shooting ... rotation --> movement. the physics are
played out on A's game loop, object positions are recorded, then all of A's coordinates are
sent to B's and C's game loop; if A is recording input from B and C (60 frames per second) 
this would give both B and C intervals of 16ms to respond back. this allows both annonymous
parties to communicate with each other on a level playing field. keeping things secret
between B and C relies on A's ability to maintain secrecy; however, there is nothing to 
stop B and C from sharing information between each other.

imagine a field full of people flying kites. some kites are triangle, some kites are square,
some kites are dragon shaped, etc. there are all kinds of kites in this field. one kite in
particular is that of annonymous' called a "website", picture this for a moment, in this 
field of kites exists a kite that does not require ground control (GC). it has no "string" or
"backdoor" or "password" that allows other users to take advantage of. it is the kite that
gives wind to the other kites in the field. which is true because this field is contained
within a leak proof loop; nothing gets out of the system. not even kites. you can think of
this "modern" loop as being another one of antique Bob's projects out in the backyard;
perhaps inside one of the many sheds he has built.

one thing in particular about the game is the wall that surrounds each creature. this is going
to get technical. the database behind this game system ... redis: is defined as being --> a
"Remote Dictionary Server" // which just sounds like the ultimate system for peer-to-peer 
competative punch card programming. so, every player's box is one-way-binded to geospatial
coordinates using redis' GEO commands. all of the objects surrounding the box are tracked
by matter.js using vertors { x: 0, y: 0 }. websockets transmit all game activity to a backend
thats running an Erlang VM (known for running low-latency, distributed and fault-tolerant
systems). this just makes sure messages get transmitted between each player in the game. the
wall itself has a trigger set on it that when activated will teleport the offending object
right into another players box. that means information can be relayed --> from checkpoint -->
to checkpoint --> to checkpoint --> etc.

we call these four walls "frames" :) each player is allowed up to 2 frames at once; for example,
alpha-frame (AF) and beta-frame (BF). for reference, Austin is located at latitude 30.2671509 
and longitude -97.7430573. when a player spawns into the game, such as Alice, she is aloud to
open a connection between her current frame AF and another frame BF that is directly above,
below, or beside AF. all requests to open BF require a +1 or -1 operation to either latitude or 
longitude from A's current AF. the connection can be closed by pressing ESC then whichever box
A isn't in will be wiped from browser memory. when a frame is contested by more than 1 player
a RAFT consensus algorithm is run in order to elect a leader and assign every one else as 
followers. this just makes sure the game's physics logic stays consistant.

### settings:
- 6tyu --> controls loop-frame ... console // moves creature around: window
- wasd --> controls time-frame ... tunnel // open and close: AF <--> BF
- fcvb --> controls wall-frame ... terminal // command line interface: `<AF>CLI</AF>`
- ↑←↓→ --> controls main-frame ... shell // graphical user interface: HTML

### notes:
- press command+click to SSH into a follower as annonymous
- press space-bar to reset the loop
- press control+click to SSH into a leader as annonymous
- press delete to block a peer
- press return to connect a peer
- press ESC to back out of SSH tunnel

### foundation:
behind the curtains; matter.js runs in the browser as a sort of Kernel. first, a super-peer 
starts a loop by loading the box-and-creature-kite program in their browser. after this, up to
two other annonymous players are allowed to connect using their own running loops. so, let's
say there are 3 running loops. loop A is the "leader" while loops B and C are the
"followers". A only supervises the situation between B and C until V is achieved. such that 
CVB is a secure connection. think about how RAFT functions for a minute. in a grid-locked
situation messages are sent in a static sort of way; up, left, down, right ---- shoot. however,
when a "grid-locked" situation turns into a scenario where only a select few are dynamic ~~~~
pieces like MATH and CRDT instantly change the situation; think thats interesting? assume i
want to build a fun competative game around a "particle-accelartor"; to begin, i want to
send annonymous messages between A, B, and C.

### situation:
- SELF <-- ground ... cool.
- FRED <-- simple ... what?
- CHAD <-- complex ... race!

### program:
- begin `http-server . -p 3000`
- start `http://localhost:3000`

### code:
here is a brief explination of BACK in "ART" form; to help explain how the overall mechanics work.
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
