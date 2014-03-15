Resrouces = E();
p = Resrouces.prototype;

p.__init__ = function() {

}

p.getSprite = function(type, name, options) {
    if (type == 'sprite') {
        var img = loader.getResult(name);
        var bitmap = new createjs.Bitmap(img)
        var sprite = new Sprite(bitmap);

        return sprite;
    }
    else if (type == 'spritesheet') {
        var img = loader.getResult(name);
        var properties = options;
        properties.images = [img];

        var spritesheet = new createjs.SpriteSheet(properties);
        var img = new createjs.Sprite(spritesheet, 'south');
        var sprite = new Sprite(img);

        return sprite;
    }
    else if (type == 'bitmap') {
        var img = loader.getResult(name);
        var bitmap = new createjs.Bitmap(img);
        
        return bitmap;
    }
}