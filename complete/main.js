// Global registry
var game = {
    canvas    : null,
    stage     : null,
    jukebox   : null,
    device    : null,
    display   : null,
    director  : null,
    loader    : null,
};


/**
 * Creates the DOM elements and base objects, such as: display, director, 
 * stage, etc. 
**/
function start() {
    "use strict";

    /* Canvas */
    game.canvas = document.createElement('canvas');
    game.canvas.width = window.innerWidth;
    game.canvas.height = window.innerHeight;
    // game.canvas.width = 800; 
    // game.canvas.height = 400;
    document.body.appendChild(game.canvas);

    /* Stage */
    game.stage = new createjs.Stage(game.canvas);
    game.stage.snapToPixelEnabled = true;

    /* Loader */
    game.loader = new createjs.LoadQueue(false);

    /* Director */
    game.director = new creatine.Director(game.stage);

    /* Display */
    game.display = new creatine.Display(game.canvas);
    game.display.setUserSelect(false);
    game.display.setTouchAction(false);

    /* Device */
    game.device = new creatine.Device(game.canvas);

    /* Ticker */
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on('tick', update);

    /* Touch */
    createjs.Touch.enable(game.stage);

    /* Load the logo */
    var premanifest = [
        // {id:'', src:''}
    ]
    if (premanifest.length > 0) {
        game.loader.on('complete', preload);
        game.loader.loadManifest(premanifest)
    } else {
        preload();
    }
}

/**
 * Configure the preloading by creating the manifest, and settings.
**/
function preload() {
    "use strict";

    /* Manifest */
    var manifest = [
        // {id: '', src: ''},
    ]

    /* Preload Scene */
    var preloadScene = new PreloadScene();
    game.director.push(preloadScene);

    /* Loader */
    game.loader.removeAllEventListeners('complete');
    game.loader.on('progress', preloadScene.onProgress, preloadScene);
    game.loader.on('complete', create);

    if (manifest.length > 0) {
        game.loader.loadManifest(manifest)
    } else {
        create();
    }
}

/**
 * Initialize scenes, game objects, convert images, cache objects, etc.
**/
function create() {
    // var nextScene = new MyScene();
    // game.director.replace(nextScene, new creatine.transitions.FadeInOut());
}

/**
 * Called every tick
**/
function update(event) {
    event.fdelta = event.delta/1000.;

    if (game.director.scene)
        game.director.scene.onUpdate(event);

    game.stage.update();
}

start();