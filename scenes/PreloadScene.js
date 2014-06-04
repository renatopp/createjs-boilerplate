(function() {
    "use strict";

var PreloadScene = function() {
    this.initialize();
}
var p = PreloadScene.prototype = new creatine.Scene();
    
    p.textLoading = null;
    p.progressBar = null;

    p.Scene_initialize = p.initialize;

    p.initialize = function() {
        this.Scene_initialize();
        
        // initialize objects
        this.logoCreatine = new createjs.Bitmap(preloader.getResult('logo_creatine'));
        this.progressBar = new creatine.ProgressBar(
            '#38B2CE', 
            '#222222', 
            null, 
            canvas.width,
            5,
            0,
            1
        );

        // set layout
        var area = {x:10, y:10, width:canvas.width-20, height:canvas.height-20}
        var vbox = new creatine.BoxSizer(creatine.VERTICAL, area);
        vbox.add(this.logoCreatine, 100, 5, creatine.CENTER);
        vbox.add(this.progressBar, 1, 5);
        vbox.layout();

        // add objects to scene
        this.addChild(this.logoCreatine);
        this.addChild(this.progressBar);

        // register events
        var _this = this;
        loader.addEventListener('progress', function(event) {
            _this.onProgress(event);
        });
        
        loader.addEventListener('complete', function(event) {
            _this.onComplete(event);
        })
    }

    p.onProgress = function(event) {
        this.progressBar.value = event.progress;
    }

    p.onComplete = function(event) {
        director.replace(
            new MenuScene(),
            new creatine.transitions.FadeInOut()
        )
    }

    p.onUpdate = function(event) {

    }

window.PreloadScene = PreloadScene;
}());
