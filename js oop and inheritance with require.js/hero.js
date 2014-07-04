define(['unit'], function(Unit) {
    var Hero = (function(parent) {
        function Hero(name, level, attack, defense, health) {
            parent.call(this, name, level, attack, defense, health);
        }

        Hero.prototype = new Unit();
        Hero.prototype.constructor = Hero;

        return Hero;
    }(Unit));

    return Hero;
});
