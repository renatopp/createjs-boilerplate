function E(parent) {
    var entity = function() { 
        this.__init__.apply(this, arguments); 
    }
    
    if (parent) {
        p = entity.prototype = new parent();
        p.constructor = entity;
    }

    entity.prototype.__init__ = function() {};


    return entity;
}