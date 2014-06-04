(function() {
    "use strict";

var MenuScene = function() {
    this.initialize();
}
var p = MenuScene.prototype = new creatine.Scene();
    p.Scene_initialize = p.initialize;

    p.initialize = function() {
        this.Scene_initialize();

        // initialize objects
        this.title = new createjs.Text('Menu', '48px Verdana', '#FFFFFF');
        this.buttonStart = new createjs.Bitmap(loader.getResult('bmp_buttonstart'));
        this.buttonCredits = new createjs.Bitmap(loader.getResult('bmp_buttoncredits'));

        // set layout
        var area = {x:0, y:0, width:canvas.width, height:canvas.height}
        var vbox = new creatine.BoxSizer(creatine.VERTICAL, area);
        vbox.add({}, 3, 0)
        vbox.add(this.title, 5, 0, creatine.CENTER);
        vbox.add({}, 1, 0)
        vbox.add({}, 1, 0)
        vbox.add(this.buttonStart, 3, 0, creatine.CENTER);
        vbox.add(this.buttonCredits, 3, 0, creatine.CENTER);
        vbox.add({}, 8, 0)
        vbox.layout();

        // add objects to scene
        this.addChild(this.title);
        this.addChild(this.buttonStart);
        this.addChild(this.buttonCredits);

        // register events
        this.on('sceneenter', this.onSceneEnter);
        this.on('sceneresume', this.onSceneResume);
        this.on('scenepause', this.onScenePause);
    }

    p.registerEvents = function(event) {
        this.buttonStart.on('click', this.onButtonStart, this);
        this.buttonCredits.on('click', this.onButtonCredits, this);
    }

    p.unregisterEvents = function(event) {
        this.buttonStart.removeAllEventListeners('click');
        this.buttonCredits.removeAllEventListeners('click');
    }

    p.onUpdate = function(event) {
    }

    p.onSceneEnter = function(event) {
        this.registerEvents();
    }

    p.onSceneResume = function(event) {
        this.registerEvents();
    }

    p.onScenePause = function(event) {
        this.unregisterEvents();
    }

    p.onButtonStart = function(event) {
        director.push(
            new SelectLevelScene(),
            new creatine.transitions.Scroll(creatine.LEFT)
        )
    }

    p.onButtonCredits = function(event) {
        director.push(
            new CreditsScene(),
            new creatine.transitions.Scroll(creatine.LEFT)
        )
    }

window.MenuScene = MenuScene;
}());
