(function() {
"use strict";

    var CustomScene = function() {
        this.Scene_constructor();

        /* REGISTER EVENTS */
        this.on('sceneenter', this.onSceneEnter);
        this.on('sceneresume', this.onSceneResume);
        this.on('scenepause', this.onScenePause);
    }
    var p = createjs.extend(CustomScene, creatine.Scene);
    
    // EVENTS
    p.registerEvents = function(event) { }
    p.unregisterEvents = function(event) { }
    p.onSceneEnter = function(event) { this.registerEvents(); }
    p.onSceneResume = function(event) { this.registerEvents(); }
    p.onScenePause = function(event) { this.unregisterEvents(); }
    p.onUpdate = function(event) { }
    
    window.CustomScene = createjs.promote(CustomScene, "Scene");

})();