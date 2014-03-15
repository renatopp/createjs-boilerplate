Sprite = E(createjs.Container);

Sprite.prototype.__init__ = function(img) {
    this.initialize();

    this.image = img;
    bbox = this.image.getBounds();

    this.width = bbox.width;
    this.height = bbox.height;
    this.hwidth = bbox.width/2;
    this.hheight = bbox.height/2;

    if (img instanceof createjs.Sprite) {
        this.image.x += this.hwidth;
        this.image.y += this.hheight;        
    } else {
        this.image.x -= this.hwidth;
        this.image.y -= this.hheight;
    }

    this.addChild(this.image);
}

Sprite.prototype.gotoAndPlay = function(str) {
    this.image.gotoAndPlay(str);
}

Sprite.prototype.gotoAndStop = function(str) {
    this.image.gotoAndStop(str);
}