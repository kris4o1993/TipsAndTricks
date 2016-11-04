function EventHandler() {
    this.events = {};
}

EventHandler.prototype.addEvent = function(name, callback) {
    if(!this.events['name']) {
        this.events = [callback];
    } else {
        this.events['name'].push(callback);
    }
}

EventHandler.prototype.removeEvent = function(name) {
    if(this.events['name']) {
        delete this.events['name'];
    }
}

EventHandler.prototype.executeEvent = function(name) {
    if(this.events['name']) {
        this.events['name'].forEach(function(callback) {
            callback();
        }, this);
    }
}
