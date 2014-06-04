(function() {
    "use strict";

var SelectLevelScene = function() {
    this.initialize();
}
var p = SelectLevelScene.prototype = new creatine.Scene();
    p.Scene_initialize = p.initialize;

    p.initialize = function() {
        this.Scene_initialize();

        // initialize objects
        this.buttonLevels = [];
        for (var i=0; i<20; i++) {
            this.buttonLevels.push(new creatine.FlexBitmap(
                loader.getResult('bmp_buttonlevel'),
                creatine.STRETCH
            ));
        }
        this.buttonBack = new createjs.Bitmap(loader.getResult('bmp_buttonback'));

        // set layout
        var area = {x:50, y:0, width:canvas.width-100, height:canvas.height}
        var vbox = new creatine.BoxSizer(creatine.VERTICAL, area);

        var grid = new creatine.GridSizer(4, 5, area);
        for (var i=0; i<this.buttonLevels.length; i++) {
            grid.add(this.buttonLevels[i], 5, creatine.CENTER);
        }

        vbox.add({}, 1, 0)
        vbox.add(grid, 10, 25, creatine.CENTER);
        vbox.add(this.buttonBack, 2, 25, creatine.LEFT);
        vbox.layout();


        // add objects to scene
        for (var i=0; i<this.buttonLevels.length; i++) {
            this.addChild(this.buttonLevels[i]);
        }
        this.addChild(this.buttonBack);

        // register events
        this.on('sceneenter', this.onSceneEnter);
        this.on('sceneresume', this.onSceneResume);
        this.on('scenepause', this.onScenePause);
    }

    p.registerEvents = function(event) {
        this.buttonBack.on('click', this.onButtonBack, this);
        for (var i=0; i<this.buttonLevels.length; i++) {
            this.buttonLevels[i].on('click', this.onButtonLevel, this)
        }
    }

    p.unregisterEvents = function(event) {
        this.buttonBack.removeAllEventListeners('click');
        for (var i=0; i<this.buttonLevels.length; i++) {
            this.buttonLevels[i].removeAllEventListeners('click');
        }
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

    p.onButtonLevel = function(event) {
        director.replace(
            new LevelScene(),
            new creatine.transitions.Scroll(creatine.LEFT)
        )
    }

    p.onButtonBack = function(event) {
        director.pop(
            new creatine.transitions.Scroll(creatine.RIGHT)
        );
    }

window.SelectLevelScene = SelectLevelScene;
}());
