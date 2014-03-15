App = E();

App.prototype.scenes = [];


App.prototype.__init__ = function() {
}

App.prototype.addScene = function(scene) {
    this.scenes.push(scene);
    stage.addChild(scene);
}

App.prototype.removeScene = function(scene) {
    this.scenes.splice(this.scenes.indexOf(scene), 1);
    stage.removeChild(scene);
}

App.prototype.onUpdate = function(event) {
    for (var i=0; i<this.scenes.length; i++) {
        this.scenes[i].onUpdate(event);
    }

    stage.update();
}