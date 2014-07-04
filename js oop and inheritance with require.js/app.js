(function () {
    'use strict';
    require(['hero'], function (Hero) {
        var hero1 = new Hero(20, 20, 20, 20, 20);
        console.log(hero1.toString());
    });
}());