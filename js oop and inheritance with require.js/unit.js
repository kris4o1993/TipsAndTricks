define(function () {
    var Unit = (function () {
        function Unit(name, level, attack, defense, health) {
            this._name = name;
            this._level = level;
            this._attack = attack;
            this._defense = defense;
            this._health = health;
        }

        Unit.prototype.toString = function () {
            return 'Name: ' + this._name;
        };

        return Unit;
    }());
    return Unit;
});