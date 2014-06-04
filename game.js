// HTML ELEMENT GLOBALS
var canvas;

// CREATEJS GLOBALS
var stage;
var preloader;
var loader;

// CREATINE GLOBALS
var director;
var display;
var device;

// GAME GLOBALS
var registry;
var preloadManifest = [
    // Keep the minumum necessary here!
    {id:'logo_creatine', src:'assets/powered_creatine.png'},
]
var loadManifest = [
    {id:'bmp_buttonstart', src:'assets/button_start.png'},
    {id:'bmp_buttoncredits', src:'assets/button_credits.png'},
    {id:'bmp_buttonmenu', src:'assets/button_menu.png'},
    {id:'bmp_buttonback', src:'assets/button_back.png'},
    {id:'bmp_buttonlevel', src:'assets/button_level.png'},
]

function start() {
    verifyDependences();
    preloadAssets();
}

function verifyDependences() {
    // Empty
}

function preloadAssets() {
    preloader = new createjs.LoadQueue(true);
    preloader.on('complete', onPreloadComplete);
    preloader.loadManifest(preloadManifest);
}

function onPreloadComplete(event) {
    /** Get the canvas element **/
    canvas = document.getElementById('canvas');

    /** Create and initialize the CreateJS objects **/
    stage = new createjs.Stage(canvas);
    loader = new createjs.LoadQueue(true);
    
    /** Create and initialize the Creatine objects **/
    director = new creatine.Director(stage);
    display = new creatine.Display(canvas);
    device = new creatine.Device(canvas);
    
    /** Create and initialize the Game objects **/
    registry = {};

    /** Display settings **/
    display.setUserSelect(false);
    display.setTouchAction(false);
    // display.setSmoothingEnabled(true);
    stage.snapToPixelEnabled = true;

    /** Ticker settings **/
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', onUpdate);

    /** Create the preload scene **/
    var preloadScene = new PreloadScene();
    director.push(preloadScene);
    
    /** Initialize the asset loading **/
    loader.loadManifest(loadManifest);
}

function onUpdate(event) {
    event.fdelta = event.delta/1000.;

    if (director.scene) {
        director.scene.onUpdate(event)
    }

    stage.update();
}