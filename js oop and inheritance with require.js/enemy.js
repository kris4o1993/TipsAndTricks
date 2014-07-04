define(['unit'], function(Unit) {
    var Enemy = (function(parent) {
        function Enemy(name, level, attack, defense, health) {
            parent.call(this, name, level, attack, defense, health);
        }

        Enemy.prototype = new Unit();
        Enemy.prototype.constructor = Enemy;



        return Enemy;
    }(Unit));

    return Enemy;
});
