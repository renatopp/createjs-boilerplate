(function() {
"use strict";

    var PreloadScene = function() {
        this.Scene_constructor();

        /* BACKGROUND */
        var shape = new createjs.Shape();
        shape.graphics.beginFill('#D7ECFF');
        shape.graphics.drawRect(0, 0, game.canvas.width, game.canvas.height);
        this.addChild(shape);

        /* POWERED */
        this.powered = new createjs.Bitmap(POWERED);
        this.powered.regX = 98;
        this.powered.regY = 33;
        this.powered.x = game.canvas.width/2;
        this.powered.y = game.canvas.height-50;
        this.addChild(this.powered);

        /* PROGRESS BAR */
        this.progressBar = new creatine.ProgressBar(
            '#1D1544',
            '#5A60B4',
            creatine.LEFT_TO_RIGHT,
            game.canvas.width,
            10, 0, 1
        );
        this.progressBar.x = 0;
        this.progressBar.y = game.canvas.height-30;
        this.addChild(this.progressBar);

        /* REGISTER EVENTS */
        this.on('sceneenter', this.onSceneEnter);
        this.on('sceneresume', this.onSceneResume);
        this.on('scenepause', this.onScenePause);
    }
    var p = createjs.extend(PreloadScene, creatine.Scene);
    

    // EVENTS
    p.registerEvents = function(event) {
        this.powered.on('click', function() {
            window.open('http://creatine.guineashots.com','_blank');
        });
    }

    p.unregisterEvents = function(event) {
        this.powered.removeAllEventListeners('click');
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

    p.onProgress = function(event) {
        this.progressBar.value = event.progress;
    }

    p.onUpdate = function(event) {
    }
    
    window.PreloadScene = createjs.promote(PreloadScene, "Scene");

var POWERED = 'data:image/png;base64,'+
'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';

})();