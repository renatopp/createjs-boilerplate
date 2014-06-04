(function() {
    "use strict";

var CreditsScene = function() {
    this.initialize();
}
var p = CreditsScene.prototype = new creatine.Scene();
    p.Scene_initialize = p.initialize;

    p.initialize = function() {
        this.Scene_initialize();

        // initialize objects
        this.title = new createjs.Text('Credits', '48px Verdana', '#FFFFFF');
        this.buttonBack = new createjs.Bitmap(loader.getResult('bmp_buttonback'));

        // set layout
        var area = {x:0, y:0, width:canvas.width, height:canvas.height}
        var vbox = new creatine.BoxSizer(creatine.VERTICAL, area);
        vbox.add({}, 3, 0)
        vbox.add(this.title, 5, 0, creatine.CENTER);
        vbox.add({}, 1, 0)
        vbox.add({}, 4, 0)
        vbox.add(this.buttonBack, 3, 0, creatine.CENTER);
        vbox.add({}, 8, 0)
        vbox.layout();

        // add objects to scene
        this.addChild(this.title);
        this.addChild(this.buttonBack);

        // register events
        this.on('sceneenter', this.onSceneEnter);
        this.on('sceneresume', this.onSceneResume);
        this.on('scenepause', this.onScenePause);
    }

    p.registerEvents = function(event) {
        this.buttonBack.on('click', this.onButtonBack, this);
    }

    p.unregisterEvents = function(event) {
        this.buttonBack.removeAllEventListeners('click');
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

    p.onButtonBack = function(event) {
        director.pop(
            new creatine.transitions.Scroll(creatine.RIGHT)
        );
    }

window.CreditsScene = CreditsScene;
}());
