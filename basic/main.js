// Global registry
var game = {
    canvas    : null,
    stage     : null,
    device    : null,
    display   : null,
    director  : null,
    loader    : null
};


/**
 * Initialize the game
**/
function start() {
    "use strict";

    /* Registry Initialization */
    game.canvas = document.createElement('canvas');
    game.canvas.width = window.innerWidth;
    game.canvas.height = window.innerHeight;
    document.body.appendChild(game.canvas);

    game.stage = new createjs.Stage(game.canvas);
    game.loader = new createjs.LoadQueue(false);
    game.director = new creatine.Director(game.stage);
    game.display = new creatine.Display(game.canvas);
    game.device = new creatine.Device(game.canvas);
    createjs.Touch.enable(game.stage);

    /* Your Code Here */
    var hello = new createjs.Text('Hello, CreateJS!', '32px Arial', 'black');
    hello.textAlign = 'center';
    hello.x = game.canvas.width/2;
    hello.y = game.canvas.height/2;
    game.stage.addChild(hello);
    game.stage.update();
}

start();